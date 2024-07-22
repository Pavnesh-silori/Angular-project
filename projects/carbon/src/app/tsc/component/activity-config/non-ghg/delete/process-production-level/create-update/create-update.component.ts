import { Component, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { isEqual } from 'lodash';

import { PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { DataInputMethodKeyIDEnum, DataInputMethod } from '@carbon/enum/data-input-method.enum';

import { ProcessService } from '@carbon/service/process.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrService, ToastrColor, ToastrTitle } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styles: []
})
export class CreateUpdateComponent implements OnInit {

    currentOrgID: any;
    activityConfigFG: FormGroup;
    activityID: number;
    activityKeyID: string;
    configuration: any;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;
    readonly NO_CO_PRODUCT = 'No co-product found for this process';

    allProcess: any;
    process: any;
    productName: string[] = [];

    unitM: UnitM[];
    unitMassVolume: UnitM[] = [];

    processSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    massVolumeUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name'])

    dataInputMethodList: any[] = [];

    initialObject: any;
    isMeterReading: boolean = false;

    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private processService: ProcessService,
        private dataInputService: DataInputMethodService,
        private storageService: StorageService,
        private unitService: UnitService,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams.activityID) {
                this.activityID = queryParams.activityID;
            }
        });

        this.activatedRoute.data.subscribe((data) => {
            this.activityKeyID = data.activityKeyID;
        });

        this.activityConfigInit();
        this.getProcess()
        this.getDataInputMethodList(this.activityID);
    }

    activityConfigInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: this.activityID,
                activityKeyID: this.activityKeyID,
                configName: [],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                processID: [],
                dataInputMethodStdID: [, Validators.required],
                meterRolloverValue: [],
                meterRolloverUnitID: [],
            }),
            activityConfigSource: this.formBuilder.array([])
        });
        this.createFormGroup();
    }

    get activityConfigSourceFA(): FormArray {
        return this.activityConfigFG.get('activityConfigSource') as FormArray;
    }

    createFormGroup() {
        this.activityConfigSourceFA.push(
            this.formBuilder.group({
                sourceID: [[], Validators.required],
                sourceTypeID: [, Validators.required]
            })
        );
    }

    get activityConfigAC() {
        return this.activityConfigFG.get('activityConfig') as AbstractControl;
    }

    get activityConfigDataAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigData') as AbstractControl;
    }

    async getProcess() {
        this.allProcess = await this.processService.getProcessList(this.currentOrgID);
        let cbamProcess = this.allProcess.filter(source => source.isCBAMProcess == true);
        this.allProcess = cbamProcess;
        this.processSearchUtil.entityArr = this.allProcess;
        this.processSearchUtil.createSubscription();
    }

    async getProcessByID(orgID, processID) {
        this.process = await this.processService.getProcessByID(orgID, processID);
        const coProductOutput = this.process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT);

        if (coProductOutput) {
            const coProductIDs = coProductOutput.entities.map(coProduct => coProduct.id);
            const sourceTypeID = coProductOutput.sourceTypeID;
            this.productName = coProductOutput.entities.map(coProduct => coProduct.name);

            this.activityConfigSourceFA.clear();

            this.activityConfigSourceFA.push(
                this.formBuilder.group({
                    sourceTypeID: sourceTypeID,
                    sourceID: [coProductIDs]
                }));

        } else {
            this.productName = [];
            this.createFormGroup();
            this.toastrService.openToast(ToastrTitle.WARNING, this.NO_CO_PRODUCT, ToastrColor.WARNING);
        }
    }

    async getDataInputMethodList(id) {
        this.dataInputMethodList = await this.dataInputService.getDataInputMethodByActivityAndType(id, DataInputMethod.STANDARD);
    }

    async getUnit() {
        this.unitM = await this.unitService.getUnit([]);
        this.unitMassVolume = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.MASS, UnitTypeKeyID.VOLUME]);
        this.massVolumeUnitSearchUtil.entityArr = this.unitMassVolume;
        this.massVolumeUnitSearchUtil.createSubscription();
    }

    isValid = () => { return !this.activityConfigFG.invalid; }

    isValidForm(): boolean {
        if (this.activityConfigFG.invalid) {
            this.activityConfigFG.markAllAsTouched();
            return false;
        }
        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));

        return true;
    }

    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(this.activityConfigFG.invalid));
    }

    readOnlyForm() {
        this.activityConfigFG.disable();
    }

    alterValidatorsForDataInput(res: any) {
        if (res == DataInputMethodKeyIDEnum.METER_READING) {
            this.isMeterReading = true;
            this.applyValidators();
            this.getUnit();
        } else {
            this.isMeterReading = false;
            this.removeValidators();
        }
    }

    applyValidators() {
        const activityConfigData = this.activityConfigFG.get('activityConfigData') as FormGroup;

        const meterRollOverControl = activityConfigData.get('meterRolloverValue');
        meterRollOverControl?.setValidators([Validators.required, Validators.min(0)]);
        meterRollOverControl?.updateValueAndValidity();

        const meterUnitIDControl = activityConfigData.get('meterRolloverUnitID');
        meterUnitIDControl?.setValidators(Validators.required);
        meterUnitIDControl?.updateValueAndValidity();
    }

    removeValidators() {
        const activityConfigData = this.activityConfigFG.get('activityConfigData') as FormGroup;

        const meterRollOverControl = activityConfigData.get('meterRolloverValue');
        meterRollOverControl?.clearValidators();
        meterRollOverControl?.reset();
        meterRollOverControl?.updateValueAndValidity();

        const meterUnitIDControl = activityConfigData.get('meterRolloverUnitID');
        meterUnitIDControl?.clearValidators();
        meterUnitIDControl?.reset();
        meterUnitIDControl?.updateValueAndValidity();
    }

    patchConfiguration(configuration: any) {
        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });

        let activityConfig = (configuration.activityConfig != null ? configuration.activityConfig : null);
        let activityConfigData = configuration.activityConfigData;
        let activityConfigSource = configuration.activityConfigSource;
        console.log(configuration, 'configuration')
        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig.configName,
            });
        } else {
            this.readOnlyForm();
        }

        this.activityConfigDataAC.patchValue({
            processID: activityConfigData.processID,
            dataInputMethodStdID: activityConfigData.dataInputMethodStdID,
        });
        console.log(activityConfigData, 'activityConfigData')
        const dataInputMethodForData = activityConfigData.dataInputMethodStdID;
        console.log(dataInputMethodForData, 'dataInputMethodData')
        const selectedMethodForData = this.dataInputMethodList.find(res => dataInputMethodForData == res.id);
        console.log(selectedMethodForData, 'selected method data')
        if (selectedMethodForData.keyID == DataInputMethodKeyIDEnum.METER_READING) {
            this.isMeterReading = true;
            this.getUnit();
            this.activityConfigDataAC.patchValue({
                meterRolloverValue: activityConfigData.meterRolloverValue,
                meterRolloverUnitID: activityConfigData.meterRolloverUnitID,
            });
        }

        while (this.activityConfigSourceFA.length !== 0) {
            this.activityConfigSourceFA.removeAt(0);
        }

        activityConfigSource.forEach((source: any) => {
            this.activityConfigSourceFA.push(
                this.formBuilder.group({
                    sourceID: [source.sourceID],
                    sourceTypeID: source.sourceTypeID
                })
            );
            this.productName = source.source.map(source => source.name)
        });

        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error);
    }

    radioError = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error) && this.activityConfigFG.get(control).touched;
    }
}
