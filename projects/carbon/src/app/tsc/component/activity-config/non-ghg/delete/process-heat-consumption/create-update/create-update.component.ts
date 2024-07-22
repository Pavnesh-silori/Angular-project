import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { isEqual } from 'lodash';

import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
import { DataInputMethodKeyIDEnum, DataInputMethod } from '@carbon/enum/data-input-method.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { ProcessController } from '@carbon/controller/process.controller';

import { ProcessService } from '@carbon/service/process.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { ActivityService } from '@carbon/service/activity.service';
import { SupplierService } from '@netzero/service/supplier.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { SourceKeyID } from '@carbon/enum/cbam.enum';
// /tsc-library/

@Component({
    selector: 'app-create',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {

    activityConfigFG: FormGroup;
    currentOrgID: any;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;

    allProcess: any;
    processSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    allSources: any;
    heatSources: any;
    process: any;
    heatSourceName: any[] = [];
    gridSuppliers: any;
    privateSuppliers: any;
    sourceArr: any[] = [];

    activityID: number;
    activityKeyID: string;
    configuration: any;

    dataInputMethodList: any[] = [];
    distanceUnit: any[] = [];

    initialObject: any;
    isMeterReading: boolean = false;

    isGridSupplier: boolean = false;
    isPrivateSupplier: boolean = false;

    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private processService: ProcessService,
        private inputController: ProcessController,
        private storageService: StorageService,
        private supplierService: SupplierService,
        private dataInputMethodService: DataInputMethodService,
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
        this.getProcess();
        // this.getHeatSource();
        // this.getSupplierByType();
        this.getDataInputMethodList(this.activityID)
        // this.getUnit();
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
                inputOutputSourceID: [, Validators.required],
                dataInputMethodStdID: [, Validators.required],
                meterRolloverValue: [],
                meterRolloverUnitID: [],
            }),
            activityConfigSource: this.formBuilder.array([])
        });
        this.createFormGroup();

        // this.activityConfigFG.get('activityConfigData.inputOutputSourceID').valueChanges.subscribe(value => {
        //     this.onInputOutputSourceChange(value);
        // });
    }

    get activityConfigSourceFA(): FormArray {
        return this.activityConfigFG.get('activityConfigSource') as FormArray;
    }

    createFormGroup() {

        const privateSupplierControl = new FormControl();
        const gridSupplierControl = new FormControl();

        this.activityConfigSourceFA.push(
            this.formBuilder.group({
                privateSupplierControl,
                gridSupplierControl,
                sourceID: [[privateSupplierControl.value, gridSupplierControl.value]],
                sourceTypeID: null
            })
        );

        const formGroup = this.activityConfigSourceFA.at(0) as FormGroup;
        const sourceIDControl = formGroup.get('sourceID') as FormControl;
        const currentValue = sourceIDControl.value;
        privateSupplierControl.valueChanges.subscribe(value => {
            currentValue[0] = value;
            sourceIDControl.setValue(currentValue);
        });

        gridSupplierControl.valueChanges.subscribe(value => {
            currentValue[1] = value;
            sourceIDControl.setValue(currentValue);
        });
    }

    setSourceTypeID(data) {
        this.activityConfigFG.get('activityConfigSource').get([0]).get('sourceTypeID').patchValue(data.sourceTypeID, { emitEvent: false });
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
        console.log(this.process)

        const heatInput = this.process.input.find(input => input.type.keyID == PROCESS_OUTPUT_ENUM.HEAT);
        console.log(heatInput);


        if (heatInput) {
            const heatSourceIDs = heatInput.entitySource.map(heatInput => heatInput.id);
            console.log(heatSourceIDs);
            const heatSourceKeyIDs = heatInput.entitySource.map(heatInput => heatInput.keyID);
            console.log(heatSourceKeyIDs);
            
            this.heatSourceName = heatInput.entitySource.map(heatInput => heatInput.description);
            console.log(this.heatSourceName);

            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: []
            });

            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: heatSourceIDs,
            });
            if (heatSourceKeyIDs) {
                this.isGridSupplier = heatSourceKeyIDs.includes(SourceKeyID.GRID);
                console.log(this.isGridSupplier);

                this.isPrivateSupplier = heatSourceKeyIDs.includes(SourceKeyID.PRIVATE_SUPPLIER);
                console.log(this.isPrivateSupplier);
                if (this.isGridSupplier || this.isPrivateSupplier) {

                    this.getSupplierByType();
                }
            }
        } else {
            this.isGridSupplier = false;
            this.isPrivateSupplier = false;
            this.heatSourceName = [];
            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: []
            });
            this.toastrService.openToast(ToastrTitle.WARNING, 'No heat source found for this process', ToastrColor.WARNING);
        }

    }

    async getSupplierByType() {
        this.gridSuppliers = await this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.ENERGY_SUPPLIER);
        this.privateSuppliers = await this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.ENERGY_SUPPLIER);
    }

    async getDataInputMethodList(id) {
        this.dataInputMethodList = await this.dataInputMethodService.getDataInputMethodByActivityAndType(id, DataInputMethod.STANDARD);
    }

    async getUnit() {
        this.distanceUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.ENERGY}`]);
    }

    isValid = () => { return !this.activityConfigFG.invalid; }

    isValidForm(): boolean {
        console.log(this.activityConfigFG);

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
        meterRollOverControl?.updateValueAndValidity();

        const meterUnitIDControl = activityConfigData.get('meterRolloverUnitID');
        meterUnitIDControl?.clearValidators();
        meterUnitIDControl?.updateValueAndValidity();
    }

    patchConfiguration(configuration: any) {
        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });

        let activityConfig = (configuration['activityConfig'] != null ? configuration['activityConfig'] : null);
        let activityConfigData = configuration['activityConfigData'];
        let activityConfigSource = configuration['activityConfigSource'];

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

        if (activityConfigData.inputOutputSource) {
            const sourceIDs = activityConfigData.inputOutputSource.map(source => source.id);
            console.log(sourceIDs);

            this.activityConfigDataAC.patchValue({
                inputOutputSourceID: sourceIDs
            });
            this.heatSourceName = activityConfigData.inputOutputSource.map(source => source.description);
            console.log(this.heatSourceName);
            this.isGridSupplier = sourceIDs.includes(2);
            this.isPrivateSupplier = sourceIDs.includes(4);
            this.getSupplierByType();
        }

        const dataInputMethodForData = activityConfigData.dataInputMethodStdID;
        const selectedMethodForData = this.dataInputMethodList.find(res => dataInputMethodForData == res.id);

        if (selectedMethodForData.keyID == DataInputMethodKeyIDEnum.METER_READING) {
            this.isMeterReading = true;

            this.activityConfigDataAC.patchValue({
                meterRolloverValue: activityConfigData.meterRolloverValue,
                meterRolloverUnitID: activityConfigData.meterRolloverUnitID,
            });
        }

        while (this.activityConfigSourceFA.length !== 0) {
            this.activityConfigSourceFA.removeAt(0);
        }

        activityConfigSource.forEach((source: any) => {
            console.log(source)
            // const privateSupplierControl = new FormControl(source.sourceID[0]);
            // console.log(privateSupplierControl.value);

            // const gridSupplierControl = new FormControl(source.sourceID[1]);

            const group = this.formBuilder.group({
                privateSupplierControl: source.sourceID[0],
                gridSupplierControl: source.sourceID[1],
                sourceID: [[source.sourceID[0], source.sourceID[1]]],
                sourceTypeID: source.sourceTypeID
            });
            console.log(group);
            

            this.activityConfigSourceFA.push(group);
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

    errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
        const activityConfigSourceFA = this.activityConfigFG.get('activityConfigSource') as FormArray;
        const formGroup = activityConfigSourceFA.at(index) as FormGroup;
        return formGroup.get(control).hasError(error);
    }
}
