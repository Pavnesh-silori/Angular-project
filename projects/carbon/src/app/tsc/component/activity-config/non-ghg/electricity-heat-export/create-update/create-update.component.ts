import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { isEqual } from 'lodash';

import { ProcessM } from '@carbon/model/process.model';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import {
    DataInputMethod,
    DataInputMethodKeyIDEnum
} from '@carbon/enum/data-input-method.enum';
import { ENTITY_KEY_ID_ENUM } from '@carbon/enum/entity.enum';
import { ActivityFormTypeEnum } from '@carbon/enum/activity-form-type.enum';

import { ActivityConfig } from '@carbon/component/activity-config/activity-config';

import { AssetService } from '@carbon/service/asset.service';
import { ProcessService } from '@carbon/service/process.service';
import { ActivityService } from '@carbon/service/activity.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import {
    COMMON_CONSTANT,
    FormAction,
    FormErrorEnum,
    MaterialFormFieldAppearance,
    MatSelectSearchService,
    MessageAlertIconEnum, MessageAlertTypeEnum
} from '@library/tsc-common';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
// /tsc-library/

export interface Process extends ProcessM {
    processID: number;
}

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
})
export class CreateUpdateComponent extends ActivityConfig {
    FormAction = FormAction;
    formErrorEnum = FormErrorEnum
    DataInputMethod = DataInputMethod;
    ActivityKeyIDEnum = ActivityKeyIDEnum;
    ActivityConfigEnum = ActivityConfigEnum;
    MessageAlertTypeEnum = MessageAlertTypeEnum;
    MessageAlertIconEnum = MessageAlertIconEnum;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;
    activityConfigFG: FormGroup;
    formGroup: FormGroup;
    routeData: any;
    action: any;
    currentOrgID: any;
    activityID: number;
    activityKeyID: ActivityKeyIDEnum;
    configuration: any;

    sourceName: string = 'Electricity';
    processList: any[] = [];
    allcombustionEquipment: any;
    inputMethod: any;
    initialObject: any;
    origin: any = null;

    sourceArr: any[] = [];
    distanceUnit: any[] = [];
    dataInputMethodList: any[] = [];
    assetName: any;
    opSource: any[] = [];

    isActivityDataAdHoc: boolean = false;

    processSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    combustionEquipmentSearch: MatSelectSearchService = new MatSelectSearchService(['assetName']);

    infoMsg: string = null;
    isActivityFormUpdate: boolean = false;
    isPffForm: boolean = false;

    @Output() formDataEvent = new EventEmitter<any>();
    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private dataInputMethodService: DataInputMethodService,
        private processService: ProcessService,
        private unitService: UnitService,
        private assetService: AssetService,
        private toastrService: ToastrService,
        private activityService: ActivityService,
    ) {
        super();
        this.initComponent(storageService, activatedRoute);
    }

    ngOnInit(): void {
        this.infoMsg = `For the exported ${this.sourceName}, either the
        emissions of the actually known fuel mix shall be used, or – if the actual fuel mix is unknown – the standard emission factor of fuel
        most commonly used in the country and industrial sector.`

        this.formGroupInit();
        this.getProcessList();
        this.getUnit();
        this.getActivityID(this.activityKeyID);
        this.getCombustionEquipment();
    }

    initComponent(storageService: StorageService, activatedRoute: ActivatedRoute) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
        activatedRoute.queryParams.subscribe((queryParams) => {
            this.action = queryParams['action'];

            if (queryParams['activityID']) {
                this.activityID = queryParams['activityID'];
            }
            if (queryParams['origin']) {
                this.origin = queryParams['origin'];
                this.isPffForm = (this.origin == ActivityFormTypeEnum.PFF);
            }
        });

        let routeData = activatedRoute.snapshot.data;
        if (
            routeData.action == FormAction.UPDATE &&
            routeData.entity == ENTITY_KEY_ID_ENUM.ACTIVITY_FORM
        ) {
            this.isActivityFormUpdate = true;
        }

        this.activityKeyID = routeData.activityKeyID;
        if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_HEAT_EXPORT) {
            this.sourceName = 'Heat';
        }
        if (routeData.entity == ENTITY_KEY_ID_ENUM.ACTIVITY_DATA) {
            this.isActivityDataAdHoc = true;
        }

    }

    formGroupInit(): void {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: [this.activityID, [Validators.required]],
                activityKeyID: [this.activityKeyID, [Validators.required]],
                configName: [, Validators.required],
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
            }),
            activityConfigSource: this.formBuilder.array([])
        });
        if (!this.isActivityFormUpdate && !this.isActivityDataAdHoc) { this.activityConfigSourceFA.push(this.sourceFG) };

        if (!this.isPffForm) { this.configNameAC.disable(); }
    }

    get activityConfigSourceFA(): FormArray {
        return this.activityConfigFG.get('activityConfigSource') as FormArray;
    }

    get activityConfigAC(): FormGroup {
        return this.activityConfigFG.get('activityConfig') as FormGroup;
    }

    get activityConfigSourceAC(): FormGroup {
        return this.activityConfigFG.get('activityConfigSource') as FormGroup;
    }

    get configNameAC() {
        return this.activityConfigAC.get('configName') as AbstractControl;
    }
    get activityConfigDataAC(): FormGroup {
        return this.activityConfigFG.get('activityConfigData') as FormGroup;
    }

    get sourceFG() {
        return this.formBuilder.group({
            sourceID: [],
            sourceTypeID: []
        });
    }

    setSourceTypeID(data) {
        this.activityConfigFG.get('activityConfigSource').get([0]).get('sourceTypeID').patchValue(data.sourceTypeID, { emitEvent: false });
    }

    async getActivityID(activityKeyID: ActivityKeyIDEnum) {
        let activities = await <any>this.activityService.getAllActivityNew()
        const activity = activities.find(activity => activity.keyID == activityKeyID);
        this.activityID = activity.id;
        this.getDataInputMethodList(this.activityID)
    }

    async getDataInputMethodList(activityID) {
        this.dataInputMethodList = await this.dataInputMethodService.getDataInputMethodByActivityAndType(activityID, DataInputMethod.STANDARD);
    }

    async inputMethodChange(value) {
        this.inputMethod = value;
        const controls: string[] = ['meterRolloverValue', 'meterRolloverUnitID'];

        if (this.inputMethod == DataInputMethodKeyIDEnum.METER_READING) {
            controls.forEach(control => {
                this.addValidators(this.activityConfigDataAC, control, [Validators.required]);
            });
        } else {
            controls.forEach(control => {
                this.resetAndRemoveValidators(this.activityConfigDataAC, control, [Validators.required]);
            });
        }
        return this.inputMethod;
    }

    addValidators(formGroup: FormGroup, controlPath: string, validators: ValidatorFn | ValidatorFn[]) {
        formGroup.get(controlPath).addValidators(validators);
        formGroup.get(controlPath).updateValueAndValidity();
    }

    resetAndRemoveValidators(formGroup: FormGroup, controlPath: string, validators: ValidatorFn | ValidatorFn[]) {
        formGroup.get(controlPath).reset(null);
        formGroup.get(controlPath).removeValidators(validators);
        formGroup.get(controlPath).updateValueAndValidity();
    }

    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(this.activityConfigFG.invalid));
    }

    readOnlyForm() {
        this.activityConfigFG.disable();
    }

    patchConfiguration(configuration: any) {
        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });

        const activityConfig = (configuration['activityConfig'] ?? null);
        const activityConfigData = configuration['activityConfigData'];

        const dataInputMethod = activityConfigData.dataInputMethod;
        this.inputMethodChange(dataInputMethod.keyID);

        if (activityConfig != null) {
            this.activityConfigAC.patchValue({ configName: activityConfig.configName });

            const activityConfigSource = configuration['activityConfigSource'];
            if (activityConfigSource.length > 0) {
                activityConfigSource.forEach((source: any) => {
                    this.activityConfigSourceFA.push(
                        this.formBuilder.group({
                            sourceID: [source.sourceID[0]],
                            sourceTypeID: source.sourceTypeID
                        })
                    );
                });
            }
        } else {
            const activityData = configuration.activityData;
            if (activityData.source ?? false) {
                this.activityConfigSourceFA.push(
                    this.formBuilder.group({
                        sourceID: [activityData.source.id],
                        sourceTypeID: activityData.sourceType.id
                    })
                );
            }
            this.readOnlyForm();
        }

        const process = activityConfigData.process;
        this.activityConfigDataAC.patchValue({
            processID: process.id,
            processRecordID: process.recordID,
            dataInputMethodStdID: dataInputMethod.id
        });

        this.setProcessIDAndGetProcess(process.id, false);

        if (dataInputMethod.keyID == DataInputMethodKeyIDEnum.METER_READING) {
            const meterRollover = activityConfigData.meterRollover;
            this.activityConfigDataAC.patchValue({
                meterRolloverValue: meterRollover.value,
                meterRolloverUnitID: meterRollover.unit.unitID,
            });
        }

        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }

    get getConfigJson() {
        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.value));
        this.configuration['activityConfigSource']['sourceID'] = this.configuration['activityConfigSource']['sourceID'];
        return this.configuration;
    }

    emitFormData() {
        if (this.formGroup.valid) {
            this.formDataEvent.emit(this.formGroup.value);
        } else {
            this.formGroup.markAllAsTouched();
        }
    }

    async getProcessList() {
        this.processList = await this.processService.getProcessList(this.currentOrgID);
        const cbam_process_list = this.processList.filter(process => process.isCBAMProcess);

        this.processSearch.entityArr = cbam_process_list;
        this.processSearch.createSubscription();
    }

    outputSources: any[] = [];
    async setProcessIDAndGetProcess(processRecordID: any, isLatest: boolean = true) {
        this.outputSources = [];

        let current_process: Process = await this.processService.getProcessByID(this.currentOrgID, processRecordID, isLatest);
        const output_type = (this.activityKeyID == ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT ? PROCESS_OUTPUT_ENUM.ELECTRICITY : PROCESS_OUTPUT_ENUM.HEAT);

        const output_type_list = (current_process.output as any[]).find(output => (output.type.keyID == output_type));

        if (output_type_list == undefined) {
            this.activityConfigDataAC.get('processID').reset();
            // this.activityConfigDataAC.get('processRecordID').reset();
            this.toastrService.error(`Process does not have ${this.sourceName.toLowerCase()} as an output! Please select another process.`);
            return;
        }

        (output_type_list.entitySource as any[]).forEach(source => {
            this.outputSources.push(source.name)
        });

        if (isLatest) {
            this.activityConfigDataAC.get('processID').patchValue(current_process.processID);
        }
    }

    async getCombustionEquipment() {
        this.allcombustionEquipment = await this.assetService.getAllAsset(this.currentOrgID);
        this.combustionEquipmentSearch.entityArr = this.allcombustionEquipment;
        this.combustionEquipmentSearch.createSubscription();
    }

    async getUnit() {
        this.distanceUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.ENERGY}`]);
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

    radioError = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error) && this.activityConfigFG.get(control).touched;
    }

    errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
        const activityConfigSourceFA = this.activityConfigFG.get('activityConfigSource') as FormArray;
        const formGroup = activityConfigSourceFA.at(index) as FormGroup;
        return formGroup.get(control).hasError(error);
    }
}
