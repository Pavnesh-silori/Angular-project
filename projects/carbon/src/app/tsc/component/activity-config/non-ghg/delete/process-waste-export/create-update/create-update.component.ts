import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { isEqual } from 'lodash';

import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { ProcessService } from '@carbon/service/process.service';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { DataInputMethod } from '@carbon/enum/data-input-method.enum'
import { AssetService } from '@carbon/service/asset.service';
import { ActivityService } from '@carbon/service/activity.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { FormAction, FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
// /tsc-library/
@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent {
    FormAction = FormAction;
    formGroup: FormGroup;
    activityConfigFG: FormGroup;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;
    ActivityKeyIDEnum = ActivityKeyIDEnum;
    DataInputMethod = DataInputMethod;
    formErrorEnum = FormErrorEnum

    routeData: any;
    action: any;
    currentOrgID: any;
    activityID: number;
    activityKeyID: string;
    configuration: any;
    allProcess: any;
    allcombustionEquipment: any;
    inputMethod: any;
    initialObject: any;
    origin: any
    dataInputMethodList: any[] = [];
    VolumeUnit: any[] = [];

    processSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    @Output() formDataEvent = new EventEmitter<any>();
    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private dataInputService: DataInputMethodService,
        private processService: ProcessService,
        private unitService: UnitService,
        private activityService: ActivityService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.action = queryParams['action'];
            if (queryParams['activityID']) {
                this.activityID = queryParams['activityID'];
            }
            if (queryParams['origin']) {
                this.origin = queryParams['origin'];
            }
        });
        this.activityKeyID = this.activatedRoute.snapshot.data['activityKeyID'];

        this.activityConfigInit();
        this.getUnit();
        this.getProcess();
        this.getActivityID(ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT);
    }

    activityConfigInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: this.activityID,
                activityKeyID: this.activityKeyID,
                configName: [, Validators.required],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                processID: [, Validators.required],
                dataInputMethodStdID: [],
                meterRolloverValue: [],
                meterRolloverUnitID: [],
            }),
            activityConfigSource: []
        });

        if (this.origin == 'ad-hoc') { this.configNameAC.disable(); }
    }

    async getActivityID(activityKeyID) {
        let allActivity = await <any>this.activityService.getAllActivity()
        console.log(allActivity);
        allActivity.forEach(activity => {
            if (activity.keyID == activityKeyID) {
                this.activityID = activity.id;
                this.getDataInputMethodList(this.activityID)
            }
        });
    }

    async getDataInputMethodList(id) {
        this.dataInputMethodList = await this.dataInputService.getDataInputMethodByActivityAndType(id, DataInputMethod.STANDARD);
    }

    async inputMethodChange(value) {
        this.inputMethod = value;
        const activityConfigDataGroup = this.activityConfigFG as FormGroup;
        if (this.inputMethod == DataInputMethodKeyIDEnum.METER_READING) {
            activityConfigDataGroup.get('activityConfigData').get('meterRolloverValue').setValidators(Validators.required);
            activityConfigDataGroup.get('activityConfigData').get('meterRolloverUnitID').setValidators(Validators.required);
        } else {
            activityConfigDataGroup.get('activityConfigData').get('meterRolloverValue').clearValidators();
            activityConfigDataGroup.get('activityConfigData').get('meterRolloverUnitID').clearValidators();
            activityConfigDataGroup.get('activityConfigData').get('meterRolloverValue').reset();
            activityConfigDataGroup.get('activityConfigData').get('meterRolloverUnitID').reset();
        }
        return this.inputMethod;
    }

    readOnlyForm() {
        this.activityConfigFG.disable();
    }

    get activityConfigAC() {
        return this.activityConfigFG.get('activityConfig') as AbstractControl;
    }

    get activityConfigSourceAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigSource') as AbstractControl;
    }

    get configNameAC() {
        return this.activityConfigAC.get('configName') as AbstractControl;
    }
    get activityConfigDataAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigData') as AbstractControl;
    }


    patchConfiguration(configuration: any) {
        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });

        let activityConfig = (configuration['activityConfig'] != null ? configuration['activityConfig'] : null);
        let activityConfigData = configuration['activityConfigData'];
        this.inputMethodChange(activityConfigData.dataInputMethodStdKeyID);

        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig.configName,
            });
        } else {
            this.readOnlyForm();
        }

        this.activityConfigDataAC.patchValue({
            processID: activityConfigData.process.id,
            dataInputMethodStdID: activityConfigData.dataInputMethod.id,
        });

        if (activityConfigData.meterRollover != null) {
            this.activityConfigDataAC.get('meterRolloverValue').patchValue(activityConfigData.meterRollover.value);
            this.activityConfigDataAC.get('meterRolloverUnitID').patchValue(activityConfigData.meterRollover.unit.unitID);
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

    isValid = () => { return !this.activityConfigFG.invalid; }

    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(this.activityConfigFG.invalid));
    }

    isValidForm(): boolean {
        if (this.activityConfigFG.invalid) {
            this.activityConfigFG.markAllAsTouched();
            return false;
        }
        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));
        return true;
    }

    async getProcess() {
        this.allProcess = await this.processService.getProcessList(this.currentOrgID);
        this.processSearch.entityArr = this.allProcess;
        this.processSearch.createSubscription();
    }

    async getUnit() {
        this.VolumeUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.VOLUME}`]);
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error);
    }

    radioError = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error) && this.activityConfigFG.get(control).touched;
    }
}