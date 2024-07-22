// Below are shared for this component
// PROCESS_ELECTRICITY_CONSUMPTION
// PROCESS_HEAT_CONSUMPTION

import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ActivityConfig } from '@carbon/component/activity-config/activity-config';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { DataInputMethod, DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';
import { SourceKeyID } from '@carbon/enum/cbam.enum';
import { ENTITY_KEY_ID_ENUM } from '@carbon/enum/entity.enum';
import { ProcessService } from '@carbon/service/process.service';
import { SupplierService } from '@netzero/service/supplier.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormAction, MatSelectSearchService, MessageAlertTypeEnum, MessageAlertIconEnum } from '@library/tsc-common';
import { ToastrService } from '@library/toastr-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
// /tsc-library/

@Component({
    selector: 'app-electricity-consumption-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})

export class ElectricityConsumptionActivityConfigCreateComponent extends ActivityConfig implements OnInit {

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private dataInputMethodService: DataInputMethodService,
        private processService: ProcessService,
        private supplierService: SupplierService,

        // tsc-library
        storageService: StorageService,
        private toastrService: ToastrService,
        private unitService: UnitService,
        // /tsc-library/
    ) {
        super();
        this.currentOrgID = storageService.getStorage('currentOrgID');
    }

    COMMON_CONSTANT = COMMON_CONSTANT;
    MessageAlertTypeEnum = MessageAlertTypeEnum;
    MessageAlertIconEnum = MessageAlertIconEnum;

    SourceKeyID = SourceKeyID;

    currentOrgID: any;
    action: FormAction;
    entity: any;
    entityTypeLabel: string = 'Entity';
    noEntityFoundError: string = 'Please select valid process for this activity form.';
    sourceInfoMsg: string = 'Select multiple sources in case of a common sub-meter at the process.';
    isMeterReading: boolean = false;
    entitySource: any[] = [];

    allProcess: any[] = [];
    process: any;
    dataInputMethod: any[] = [];
    unit: any[] = [];

    processSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    unitSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    supplierSelectSearch: MatSelectSearchService = new MatSelectSearchService(['supplierName']);

    configuration: any;
    saveAsPffFC: FormControl;
    activityConfigFG: FormGroup;
    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    initialObject: any;
    FormAction: typeof FormAction;

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['activityID']) {
                this.activityID = queryParams.activityID;
            }
        });

        this.activatedRoute.data.subscribe((data) => {
            this.action = data.action;
            this.entity = data.entity;
            this.activityKeyID = data.activityKeyID;
        });

        this.setEntityTypeLabel(this.activityKeyID)
        this.formGroupInit();
        this.getAllProcess(this.currentOrgID);
        this.getDataInputMethodByActivityID(this.activityID, DataInputMethod.STANDARD);
        this.getUnit([`type:${UnitTypeKeyID.ENERGY}`]);
        this.getSupplierByType();
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

    // createSource(): FormGroup {
    //     return this.formBuilder.group({
    //         isSelected: [],
    //         inputOutputSourceStdID: [, Validators.required],
    //         entityTypeID: [],
    //         entityID: [],
    //         sourceTypeID: [],
    //         sourceID: [[]],
    //         entityName: [],
    //         entityKeyID: []
    //     });
    // }

    get ioSourceConfigFA(): FormArray {
        return this.activityConfigFG.get('activityConfigData').get('ioSourceConfig') as FormArray;
    }

    get entityFA(): FormArray {
        return this.activityConfigFG.get('entity') as FormArray;
    }

    async getAllProcess(orgID: number) {
        let filterProcess: any;

        this.allProcess = await this.processService.getProcessList(orgID);
        filterProcess = this.allProcess.filter(source => source.isCBAMProcess == true);

        // cbamProcess = this.allProcess.filter(source => source.isCBAMProcess == true && source.input.find(input => input.type.keyID == PROCESS_INPUT_ENUM.ELECTRICITY));

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

        this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.ENERGY_SUPPLIER).then((res: any[]) => {
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

    patchSourceTypeID(sourceTypeID: number, index: number,) {
        this.entityFA.at(index).patchValue({
            sourceTypeID: sourceTypeID
        });
    }

    // TODO
    createEntitySource(process: any) {
        let inputOutput;

        this.entitySource = [];
        this.ioSourceConfigFA.clear();
        this.entityFA.clear();

        switch (this.activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION: {
                inputOutput = process.input.find(input => input.type.keyID == PROCESS_INPUT_ENUM.ELECTRICITY);
                break;
            }
            case ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION: {
                inputOutput = process.input.find(input => input.type.keyID == PROCESS_INPUT_ENUM.HEAT);
                break;
            }
        }

        if (inputOutput) {
            this.entitySource = inputOutput.entitySource;

            // this.entitySource = this.entitySource.map((entitySource: any) => {
            //     return {
            //         ...entitySource,
            //         isSelected: true
            //     };
            // });

            // this.ioSourceConfigFA.clear();
            // inputOutput.entitySource.forEach((entitySource: any) => {
            //     this.ioSourceConfigFA.push(
            //         this.formBuilder.group({
            //             inputOutputSourceStdID: [entitySource.id, Validators.required],
            //             entityTypeID: [],
            //             entityID: [],
            //             sourceTypeID: [],
            //             sourceID: [[]],
            //             entityName: [],
            //             entityKeyID: []
            //         })
            //     );
            // });

            this.entitySource.forEach(entitySource => {
                this.entityFA.push(
                    this.formBuilder.group({
                        isSelected: [(this.action == FormAction.CREATE && this.entity == ENTITY_KEY_ID_ENUM.ACTIVITY_FORM) ? true : false],
                        inputOutputSourceStdID: [entitySource.id, Validators.required],
                        entityTypeID: [],
                        entityID: [],
                        sourceTypeID: [],
                        // sourceID: (entitySource.keyID == SourceKeyID.GRID || entitySource.keyID == SourceKeyID.PRIVATE_SUPPLIER) ? [, [Validators.required]] : [[]],
                        sourceID: [],
                        entityName: [entitySource.name],
                        entityKeyID: [entitySource.keyID]
                    })
                );

                // this.ioSourceConfigFA.push(
                //     this.formBuilder.group({
                //         isSelected: [true],
                //         inputOutputSourceStdID: [entitySource.id, Validators.required],
                //         entityTypeID: [],
                //         entityID: [],
                //         sourceTypeID: [],
                //         sourceID: [[]],
                //         entityName: [entitySource.name],
                //         entityKeyID: [entitySource.keyID]
                //     })
                // );
            });
        } else {
            this.entitySource = [];
            this.ioSourceConfigFA.clear();
            this.entityFA.clear();
            // this.ioSourceConfigFA.push(this.createSource());
            this.toastrService.error(this.noEntityFoundError);
            this.patchControl(this.activityConfigFG, 'activityConfigData.processID', null);
        }
    }

    isValidForm() {
        this.ioSourceConfigFA.clear();

        const isSelectedEntity = this.entityFA.value.filter(entity => entity.isSelected);
        isSelectedEntity.forEach(entity => this.ioSourceConfigFA.push(this.formBuilder.group({
            inputOutputSourceStdID: [entity.inputOutputSourceStdID],
            sourceTypeID: [entity.sourceTypeID],
            // sourceID: [entity.sourceID]
            sourceID: entity.sourceID ? [[entity.sourceID]] : []
        })));

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

    // TODO
    patchConfiguration(configuration: any) {
        let activityConfig: any;
        let activityConfigData: any;

        activityConfig = (configuration.activityConfig != null ? configuration['activityConfig'] : null);
        activityConfigData = configuration['activityConfigData'];

        const dataInputMethod = activityConfigData.dataInputMethod;

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
            dataInputMethodStdID: dataInputMethod.id,
        });

        if (dataInputMethod.keyID == DataInputMethodKeyIDEnum.METER_READING) {
            const meterRollover = activityConfigData.meterRollover;
            this.activityConfigDataAC.patchValue({
                meterRolloverValue: meterRollover.value,
                meterRolloverUnitID: meterRollover.unit.unitID
            });
        }

        this.dataInputMethodChange(activityConfigData.dataInputMethod.keyID);
        this.getProcessByID(this.currentOrgID, activityConfigData.process.id, false).then((process: any) => {
            activityConfigData.ioSourceConfig.forEach(element => {
                const indexFound = this.entityFA.controls.findIndex(control =>
                    control.get('inputOutputSourceStdID').value === element.inputOutputSource.id
                );

                const control = this.entityFA.at(indexFound);
                control.patchValue(
                    {
                        isSelected: true,
                        sourceTypeID: element.sourceType?.id,
                        // sourceID: element.source?.map(s => s.id)
                        sourceID: element.source ? element.source[0].id : null
                    }
                );

                // if (element.inputOutputSource.keyID == SourceKeyID.GRID || element.inputOutputSource.keyID == SourceKeyID.PRIVATE_SUPPLIER) {
                //     control.patchValue(
                //         {
                //             sourceTypeID: element.sourceType.id,
                //             sourceID: element.source.id
                //         }
                //     );
                // }
            });

            if (this.entity == ENTITY_KEY_ID_ENUM.ACTIVITY_DATA) {
                this.readOnlyForm();
            }

            this.updateInitialObject();
        });
    }

    setEntityTypeLabel(activityKeyID: ActivityKeyIDEnum) {
        switch (activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION:
                this.entityTypeLabel = 'Electricity Source';
                this.noEntityFoundError = 'No electricity source is found in this process.';
                this.sourceInfoMsg = 'Select multiple electricity sources in case of a common sub-meter at the process.';
                break;
            case ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION:
                this.entityTypeLabel = 'Heat Source';
                this.noEntityFoundError = 'No heat source is found in this process.';
                this.sourceInfoMsg = 'Select multiple heat sources in case of a common sub-meter at the process.';
                break;
        }
    }
}
