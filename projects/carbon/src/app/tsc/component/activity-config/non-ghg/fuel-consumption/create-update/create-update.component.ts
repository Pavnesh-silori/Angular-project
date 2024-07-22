import { Component, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivityConfigI } from '@carbon/component/activity-config/activity-config.interface';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { DataInputMethod, DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { isEqual } from 'lodash';
import { startWith } from 'rxjs/operators';

import { ActivityService } from '@carbon/service/activity.service';
import { AssetService } from '@carbon/service/asset.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { ProcessService } from '@carbon/service/process.service';

/* tsc-library */
import { StorageService } from '@library/storage-service';
import {
    FormAction,
    FormErrorEnum,
    MatSelectSearchService,
    MaterialFormFieldAppearance
} from '@library/tsc-common';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ActivatedRoute } from '@angular/router';
import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';
import { ToastrService } from '@library/toastr-service';
/* tsc-library */

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit, ActivityConfigI {
    FormAction: typeof FormAction = FormAction;
    FormErrorEnum: typeof FormErrorEnum = FormErrorEnum;
    ActivityKeyIDEnum: typeof ActivityKeyIDEnum = ActivityKeyIDEnum;
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    configuration: any;
    initialObject: any;

    activityID: any;
    activityKeyID: ActivityKeyIDEnum;

    saveAsPffFC: FormControl;
    activityConfigFG: FormGroup;

    isEqual: EventEmitter<boolean> = new EventEmitter<boolean>();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    currentOrgID: any;

    origin: string = null;
    inputMethod: any;

    isActivityDataAdHoc: boolean = false;

    ActivityConfigEnum = ActivityConfigEnum;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    dataInputMethodList: any[];
    processList: any[];
    processSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    combustionEquipmentList: any[];
    combustionEquipmentSearch: MatSelectSearchService = new MatSelectSearchService(['assetName']);

    distanceUnit: any[];

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private unitService: UnitService,
        private assetService: AssetService,
        private toastrService: ToastrService,
        private processService: ProcessService,
        private activityService: ActivityService,
        private dataInputMethodService: DataInputMethodService,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);

        activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['origin']) {
                this.origin = queryParams['origin'];
            }
        });

        let routeData = activatedRoute.snapshot.data;
        if (routeData.entity == 'activity-data') {
            this.isActivityDataAdHoc = true;
        }
    }

    formGroupInit() {
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
                processRecordID: [, Validators.required],
                dataInputMethodStdID: [, [Validators.required]],
                meterRolloverValue: [],
                meterRolloverUnitID: [],
            }),
            activityConfigSource: this.formBuilder.array([this.sourceFG])
        });
    }

    get sourceFG(): FormGroup {
        return this.formBuilder.group({
            sourceID: [[], Validators.required],
            sourceTypeID: [, Validators.required]
        });
    }

    get configNameAC(): AbstractControl {
        return this.activityConfigAC.get('configName') as AbstractControl;
    }

    get activityConfigAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfig') as AbstractControl;
    }

    get activityConfigDataAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigData') as AbstractControl;
    }

    get activityConfigSourceFA(): FormArray {
        return this.activityConfigFG.get('activityConfigSource') as FormArray;
    }

    ngOnInit(): void {
        this.formGroupInit();
        this.getProcessList();
        this.getCombustionEquipment();
        this.getUnit();
        this.getActivityID(ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION);
    }

    isValidForm(): boolean {
        if (this.activityConfigFG.invalid) {
            this.activityConfigFG.markAllAsTouched();
            console.error('invalid form - ', this.activityConfigFG);
            return false;
        }

        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));
        return true;
    }

    isValid = (): boolean => { return !this.activityConfigFG.invalid; }

    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(this.activityConfigFG.invalid));
    }

    readOnlyForm() {
        this.activityConfigFG.disable();
    }

    async setProcessIDAndGetProcess(processRecordID: any, isLatest: boolean = true) {
        let current_process: any = await this.processService.getProcessByID(this.currentOrgID, processRecordID, isLatest);
        const fuel_input = (current_process.input as any[]).find(input => (input.type.keyID == PROCESS_INPUT_ENUM.FUEL));

        if (fuel_input == undefined) {
            this.activityConfigDataAC.get('processID').reset();
            // this.activityConfigDataAC.get('processRecordID').reset();
            this.toastrService.error('Process does not have fuel as an input! Please select another process.');
            return;
        }

        this.activityConfigDataAC.get('processID').patchValue(current_process.processID);
    }

    async getActivityID(activityKeyID: ActivityKeyIDEnum) {
        let allActivity = await <any>this.activityService.getAllActivity()
        allActivity.forEach(activity => {
            if (activity.keyID == activityKeyID) {
                this.activityID = activity.id;
                this.getDataInputMethodByActivityAndType(this.activityID)
            }
        });
    }

    async getDataInputMethodByActivityAndType(activityID: number) {
        this.dataInputMethodList = await this.dataInputMethodService.getDataInputMethodByActivityAndType(activityID, DataInputMethod.STANDARD);
    }

    async getProcessList() {
        this.processList = await this.processService.getProcessList(this.currentOrgID);
        const cbam_process_list = this.processList.filter(process => process.isCBAMProcess);
        this.processSearch.entityArr = cbam_process_list;
        this.processSearch.createSubscription();
    }

    async getCombustionEquipment() {
        this.combustionEquipmentList = await this.assetService.getAllAsset(this.currentOrgID);
        this.combustionEquipmentSearch.entityArr = this.combustionEquipmentList;
        this.combustionEquipmentSearch.createSubscription();
    }

    async getUnit() {
        this.distanceUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.VOLUME}`]);
    }

    inputMethodChange(inputMethodKeyID: DataInputMethodKeyIDEnum) {
        this.inputMethod = inputMethodKeyID;
        if (inputMethodKeyID == DataInputMethodKeyIDEnum.METER_READING) {
            this.activityConfigDataAC.get('meterRolloverValue').setValidators(Validators.required);
            this.activityConfigDataAC.get('meterRolloverUnitID').setValidators(Validators.required);
        } else {
            this.activityConfigDataAC.get('meterRolloverValue').clearValidators();
            this.activityConfigDataAC.get('meterRolloverUnitID').clearValidators();
        }

        this.activityConfigDataAC.get('meterRolloverValue').updateValueAndValidity();
        this.activityConfigDataAC.get('meterRolloverUnitID').updateValueAndValidity();
    }

    setSourceTypeID(formGroup: FormGroup, data) {
        formGroup.get('sourceTypeID').patchValue(data.sourceTypeID, { emitEvent: false });
    }

    patchConfiguration(configuration: any) {
        const activityConfig = (configuration['activityConfig'] ?? null);
        const activityConfigData = configuration['activityConfigData'];
        const activityConfigSource = configuration['activityConfigSource'];

        const dataInputMethod = activityConfigData.dataInputMethod;
        this.inputMethodChange(dataInputMethod.keyID);

        if (activityConfig ?? false) {
            this.activityConfigAC.patchValue({ configName: activityConfig.configName });
        }

        const process = activityConfigData.process;
        this.activityConfigDataAC.patchValue({
            processID: process.id,
            processRecordID: process.recordID,
            dataInputMethodStdID: dataInputMethod.id,
        });

        if (dataInputMethod.keyID == DataInputMethodKeyIDEnum.METER_READING) {
            const meterRollover = activityConfigData.meterRollover;
            this.activityConfigDataAC.patchValue({
                meterRolloverValue: meterRollover.value, 
                meterRolloverUnitID: meterRollover.unit.unitID 
            });
        }

        this.activityConfigSourceFA.clear();

        if (activityConfig ?? false) {
            activityConfigSource.forEach((source: any) => {
                this.activityConfigSourceFA.push(
                    this.formBuilder.group({
                        sourceID: [source.sourceID],
                        sourceTypeID: source.sourceTypeID
                    })
                );
            });
        } else {
            const source = configuration.source;
            this.activityConfigSourceFA.push(
                this.formBuilder.group({
                    sourceID: [[source.source.id]],
                    sourceTypeID: source.sourceType.id
                })
            );
        }

        if (!(activityConfig ?? false)) { this.readOnlyForm(); } /* disables the form */

        this.initialObject = this.activityConfigFG.value;
        this.activityConfigFG.valueChanges.pipe(startWith({})).subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error);
    }

    errorHandlingRadio = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error) && this.activityConfigFG.get(control).touched;
    }

    errorHandlingFA = (formGroup: FormGroup, control: string, error: string): boolean => {
        return formGroup.get(control).hasError(error);
    }

}
