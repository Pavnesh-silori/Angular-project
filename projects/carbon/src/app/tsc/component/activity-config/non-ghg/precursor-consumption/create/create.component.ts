import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ActivityConfig } from '@carbon/component/activity-config/activity-config';
import { DataInputMethod, DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';
import { SourceKeyID } from '@carbon/enum/cbam.enum';
import { ENTITY_KEY_ID_ENUM } from '@carbon/enum/entity.enum';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { ProcessService } from '@carbon/service/process.service';
import { SupplierService } from '@netzero/service/supplier.service';
import { ActivityService } from '@carbon/service/activity.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormAction, MatSelectSearchService, MessageAlertTypeEnum, MessageAlertIconEnum, TSCCommonService } from '@library/tsc-common';
import { ToastrService } from '@library/toastr-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
// /tsc-library/

@Component({
    selector: 'app-precursor-consumption-activity-config-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})

export class PrecursorConsumptionActivityConfigCreateComponent extends ActivityConfig implements OnInit {

    constructor(
        activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private dataInputMethodService: DataInputMethodService,
        private processService: ProcessService,
        private supplierService: SupplierService,
        private activityService: ActivityService,

        // tsc-library
        storageService: StorageService,
        private toastrService: ToastrService,
        private unitService: UnitService,
        private tSCCommonService: TSCCommonService
        // /tsc-library/
    ) {
        super();
        this.currentOrgID = storageService.getStorage('currentOrgID');

        activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['activityID']) {
                this.activityID = queryParams.activityID;
            }
        });

        activatedRoute.data.subscribe((data) => {
            this.action = data.action;
            this.entity = data.entity;
            this.activityKeyID = data.activityKeyID;
        });
    }

    COMMON_CONSTANT = COMMON_CONSTANT;
    MessageAlertTypeEnum = MessageAlertTypeEnum;
    MessageAlertIconEnum = MessageAlertIconEnum;

    SourceKeyID = SourceKeyID;

    activityConfigFG: FormGroup;

    currentOrgID: any;
    action: FormAction;
    entity: any;
    sourceInfoMsg: string;
    isMeterReading: boolean = false;
    entitySource: any[] = [];

    allProcess: any[] = [];
    process: any;
    dataInputMethod: any[] = [];
    unit: any[] = [];

    processSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    unitSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    supplierSelectSearch: MatSelectSearchService = new MatSelectSearchService(['supplierName']);

    ngOnInit(): void {
        this.formGroupInit();
        this.getAllProcess(this.currentOrgID);
        this.getDataInputMethodByActivityID(this.activityID, DataInputMethod.STANDARD);
        this.getUnit([`type:${UnitTypeKeyID.MASS}`]);
        this.getSupplierByType();
        this.getPurchasedPrecursorActivityID();
    }

    formGroupInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: [this.activityID, Validators.required],
                activityKeyID: [this.activityKeyID, Validators.required],
                configName: [],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                processID: [, Validators.required],
                processRecordID: [, Validators.required],
                dataInputMethodStdID: [, Validators.required],
                meterRolloverValue: [],
                meterRolloverUnitID: [],
                ioSourceConfig: this.formBuilder.array([], Validators.required)
            }),
            entity: this.formBuilder.array([], Validators.required)
        });
    }

    get ioSourceConfigFA(): FormArray {
        return this.activityConfigFG.get('activityConfigData').get('ioSourceConfig') as FormArray;
    }

    get entityFA(): FormArray {
        return this.activityConfigFG.get('entity') as FormArray;
    }

    get entitySourceFA(): FormArray {
        return this.activityConfigFG.get('entity').get('source') as FormArray;
    }

    async getPurchasedPrecursorActivityID() {
        let allActivity: any;
        let activity: any;
        let activityID: any;

        allActivity = await <any>this.activityService.getAllActivityNew();
        activity = this.tSCCommonService.getUniqueObject(allActivity, 'keyID', this.ActivityKeyIDEnum.PURCHASED_PRECURSOR);
        activityID = activity.id

        if (activityID) {
            this.sourceInfoMsg = `Precursor that are self-produced using separate production route, embedded emissions will be automatically picked from the latest CBAM run if availbale.<br /><br />For precursors purchased from a supplier, create purchased precursor form for respective precursor by clicking <a href=/carbon-setting/activity-config/activity/${this.ActivityKeyIDEnum.PURCHASED_PRECURSOR}/(activityConfig:create)?activityID=${activityID}&origin=pff&action=create&tabView=YES target="_blank">here</a>.`;
        }
    }

    async getAllProcess(orgID: number) {
        let filterProcess: any;

        this.allProcess = await this.processService.getProcessList(orgID);
        filterProcess = this.allProcess.filter(source => source.isCBAMProcess == true);

        this.allProcess = filterProcess;
        this.processSelectSearch.entityArr = this.allProcess;
        this.processSelectSearch.createSubscription();
    }

    async processChange(orgID: number, processID: number, isLatest: boolean) {
        this.process = await this.processService.getProcessByID(orgID, processID, isLatest);
        this.patchControl(this.activityConfigFG, 'activityConfigData.processID', this.process.processID);
        this.createEntitySource(this.process);
    }

    async getProcessByID(orgID: number, processID: number, isLatest: boolean) {
        this.process = await this.processService.getProcessByID(orgID, processID, isLatest);
        this.createEntitySource(this.process);
    }

    async getDataInputMethodByActivityID(activityID: number, dataInputMethodType: DataInputMethod) {
        this.dataInputMethod = await this.dataInputMethodService.getDataInputMethodByActivityAndType(activityID, dataInputMethodType);
    }

    async getUnit(filter) {
        this.unit = await this.unitService.getUnit(filter);
        this.unitSelectSearch.entityArr = this.unit;
        this.unitSelectSearch.createSubscription();
    }

    getSupplierByType() {
        let supplier: any[] = [];

        this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.PRECURSOR_SUPPLIER).then((res: any[]) => {
            supplier = res;
            this.supplierSelectSearch.entityArr = supplier;
            this.supplierSelectSearch.createSubscription();
        });
    }

    dataInputMethodChange(dataInputMethodKeyID: DataInputMethodKeyIDEnum) {
        if (dataInputMethodKeyID == DataInputMethodKeyIDEnum.METER_READING) {
            this.isMeterReading = true;
            this.addMeterRolloverValidator();
        } else {
            this.isMeterReading = false;
            this.removeMeterRolloverValidator();
        }
    }

    addMeterRolloverValidator() {
        this.activityConfigDataAC.get('meterRolloverValue').setValidators([Validators.required, Validators.min(0)]);
        this.activityConfigDataAC.get('meterRolloverUnitID').setValidators([Validators.required]);
        this.activityConfigDataAC.get('meterRolloverValue').updateValueAndValidity();
        this.activityConfigDataAC.get('meterRolloverUnitID').updateValueAndValidity();
    }

    removeMeterRolloverValidator() {
        this.activityConfigDataAC.get('meterRolloverValue').reset();
        this.activityConfigDataAC.get('meterRolloverUnitID').reset();
        this.activityConfigDataAC.get('meterRolloverValue').clearValidators();
        this.activityConfigDataAC.get('meterRolloverUnitID').clearValidators();
        this.activityConfigDataAC.get('meterRolloverValue').updateValueAndValidity();
        this.activityConfigDataAC.get('meterRolloverUnitID').updateValueAndValidity();
    }

    patchControl(formGroup: FormGroup, controlPath: string, value: any) {
        formGroup.get(controlPath).patchValue(value);
    }

    patchSourceTypeID(sourceTypeID: number, entityIndex: number, sourceIndex: number): void {
        const entityFormGroup = this.entityFA.at(entityIndex) as FormGroup;
        const sourceFormArray = entityFormGroup.get('source') as FormArray;
        const sourceFormGroup = sourceFormArray.at(sourceIndex) as FormGroup;

        sourceFormGroup.patchValue({
            sourceTypeID: sourceTypeID
        });
    }

    createEntitySource(process: any) {
        let inputOutput;
        let entity: any;

        this.entitySource = [];
        this.ioSourceConfigFA.clear();
        this.entityFA.clear();

        inputOutput = process.input.find(input => input.type.keyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT);

        // this.entitySource.forEach((entitySource: any) => {
        //     this.entityFA.push(
        //         this.formBuilder.group({
        //             inputOutputSourceStdID: [entitySource.source.id, Validators.required],
        //             entityTypeID: [entitySource.entityTypeID],
        //             entityID: [entitySource.entityID],
        //             entityName: [entitySource.entityname],
        //             entityKeyID: [entitySource.source.keyID],
        //             sourceTypeID: [],
        //             sourceID: [[]]
        //         })
        //     );
        // });

        if (inputOutput) {
            entity = inputOutput.entities.map(entity => ({
                entityTypeID: inputOutput.sourceTypeID,
                entityID: entity.id,
                entityname: entity.name,
                source: inputOutput.entitySource.filter(source => source.entityID == entity.id)
            }));

            this.entitySource = entity;

            this.entitySource.forEach((entitySource: any) => {
                this.entityFA.push(
                    this.formBuilder.group({
                        entityTypeID: entitySource.entityTypeID,
                        entityID: entitySource.entityID,
                        entityName: entitySource.entityname,
                        // source: entitySource.source
                        source: this.formBuilder.array(
                            entitySource.source.map((source: any) => {
                                return this.formBuilder.group({
                                    id: [source.id, [Validators.required]],
                                    keyID: source.keyID,
                                    name: source.name,
                                    sourceTypeID: [],
                                    sourceID: []
                                })
                            })
                        )
                        // source: entity.entitySource.filter(source => source.entityID == entity.id)
                    })
                );
            });
        } else {
            this.entitySource = [];
            this.ioSourceConfigFA.clear();
            this.entityFA.clear();
            this.toastrService.error('No precursor product is found in this process.');
            this.patchControl(this.activityConfigFG, 'activityConfigData.processID', null);
        }
    }

    isValidForm() {
        this.ioSourceConfigFA.clear();

        this.entityFA.value.forEach((entity: any) => {
            entity.source.forEach((source: any) => {
                this.ioSourceConfigFA.push(this.formBuilder.group({
                    inputOutputSourceStdID: [source.id],
                    entityTypeID: [entity.entityTypeID],
                    entityID: [entity.entityID],
                    sourceTypeID: [source.sourceTypeID],
                    sourceID: source.sourceID ? [[source.sourceID]] : []
                }));
            });
        });

        if (this.activityConfigFG.invalid) {
            this.activityConfigFG.markAllAsTouched();
            console.error('invalid activityConfigFG -', this.activityConfigFG);
            return false;
        }

        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));
        return true;
    }

    errorHandlingForFormArray = (control: string, index: number, error: string): boolean => {
        const activityConfigDetailsFA = this.activityConfigFG.get('entity') as FormArray;
        const formGroup = activityConfigDetailsFA.at(index) as FormGroup;
        return formGroup.get(control).hasError(error);
    }

    patchConfiguration(configuration: any) {
        let activityConfig: any;
        let activityConfigData: any;

        activityConfig = (configuration.activityConfig != null ? configuration['activityConfig'] : null);
        activityConfigData = configuration['activityConfigData'];

        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig.configName,
            });
        } else {
            this.readOnlyForm();
        }

        this.activityConfigDataAC.patchValue({
            processID: activityConfigData.process.id,
            processRecordID: activityConfigData.process.recordID,
            dataInputMethodStdID: activityConfigData.dataInputMethod.id,
            meterRolloverValue: activityConfigData.meterRollover?.value,
            meterRolloverUnitID: activityConfigData.meterRollover?.unit.unitID
        });

        this.dataInputMethodChange(activityConfigData.dataInputMethod.keyID);
        this.getProcessByID(this.currentOrgID, activityConfigData.process.id, false).then((process: any) => {
            // TODO-DELETE
            console.log('activityConfigData.ioSourceConfig', activityConfigData.ioSourceConfig);

            activityConfigData.ioSourceConfig.forEach(element => {
                const entityIndexFound = this.entityFA.controls.findIndex(control =>
                    control.get('entityID').value == element.entity.id
                );

                const entityFormGroup = this.entityFA.at(entityIndexFound) as FormGroup;
                const sourceFormArray = entityFormGroup.get('source') as FormArray;

                // TODO-DELETE
                console.log('element.inputOutputSource', element.inputOutputSource);


                const sourceIndexFound = sourceFormArray.controls.findIndex(control =>
                    control.get('keyID').value == element.inputOutputSource.keyID
                );

                const sourceFormGroup = sourceFormArray.at(sourceIndexFound) as FormGroup;

                sourceFormGroup.patchValue({
                    sourceTypeID: element.sourceType?.id,
                    // sourceID: element.source?.map(s => s.id)
                    sourceID: element.source ? element.source[0].id : null
                });
            });

            if (this.entity == ENTITY_KEY_ID_ENUM.ACTIVITY_DATA) {
                this.readOnlyForm();
            }

            this.updateInitialObject();
        });
    }

}
