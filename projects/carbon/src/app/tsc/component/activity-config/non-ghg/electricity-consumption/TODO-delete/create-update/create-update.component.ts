import { Component, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { isEqual } from 'lodash';

import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
import { DataInputMethodKeyIDEnum, DataInputMethod } from '@carbon/enum/data-input-method.enum';
import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';
import { SourceKeyID } from '@carbon/enum/cbam.enum';

import { ProcessService } from '@carbon/service/process.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { SupplierService } from '@netzero/service/supplier.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-create',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;

    activityConfigFG: FormGroup;
    currentOrgID: any;

    allProcess: any;
    allSource: any;
    electricitySource: any[] = [];
    suppliers: any;

    process: any;
    gridSuppliers: any;
    privateSuppliers: any;
    sourceArr: any[] = [];

    processSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

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
        private supplierService: SupplierService,
        private dataInputMethodService: DataInputMethodService,
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
        this.getProcess();
        this.getDataInputMethodList(this.activityID)
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
        // this.sourceArr.push(data.supplierID)
        // console.log(this.sourceArr);

        // this.activityConfigFG.get('activityConfigSource').get('sourceID').patchValue(this.sourceArr);
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

        const electricityInput = this.process.input.find(input => input.type.keyID == PROCESS_INPUT_ENUM.ELECTRICITY);

        if (electricityInput) {
            const electricitySourceIDs = electricityInput.entitySource.map(electricityInput => electricityInput.id);
            const electricitySourceKeyIDs = electricityInput.entitySource.map(electricityInput => electricityInput.keyID);
            this.electricitySource = electricityInput.entitySource.map(electricityInput => electricityInput.name);

            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: []
            });

            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: electricitySourceIDs
            });

            if (electricitySourceKeyIDs) {
                this.isGridSupplier = electricitySourceKeyIDs.includes(SourceKeyID.GRID);
                this.isPrivateSupplier = electricitySourceKeyIDs.includes(SourceKeyID.PRIVATE_SUPPLIER);
                if (this.isGridSupplier || this.isPrivateSupplier) {
                    this.getSupplierByType();
                }
            }

        } else {
            this.isGridSupplier = false;
            this.isPrivateSupplier = false;
            this.electricitySource = [];

            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: []
            });
            this.toastrService.openToast(ToastrTitle.WARNING, 'No electricity source found for this process', ToastrColor.WARNING);
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
            const electricitySourceIDs = activityConfigData.inputOutputSource.map(source => source.id);
            this.activityConfigDataAC.patchValue({
                inputOutputSourceID: electricitySourceIDs
            });
            const electricitySourceKeyID = activityConfigData.inputOutputSource.map(source => source.keyID);

            console.log(electricitySourceKeyID);
            this.electricitySource = activityConfigData.inputOutputSource.map(source => source.description);
            this.isGridSupplier = electricitySourceKeyID.includes(SourceKeyID.GRID);
            this.isPrivateSupplier = electricitySourceKeyID.includes(SourceKeyID.PRIVATE_SUPPLIER);
            if (this.isGridSupplier || this.isPrivateSupplier) {
                this.getSupplierByType();
            }
        }

        const dataInputMethodForData = activityConfigData.dataInputMethodStdID;
        const selectedMethodForData = this.dataInputMethodList.find(res => res.id == dataInputMethodForData);

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
            const privateSupplier = source.source.find(source => source.keyID === 'contractual-electricity');
            console.log(privateSupplier);

            const gridSupplier = source.source.find(source => source.keyID === 'grid-electricity');
            console.log(gridSupplier);

            const group = this.formBuilder.group({
                privateSupplierControl: [privateSupplier ? privateSupplier.id : null],
                gridSupplierControl: [gridSupplier ? gridSupplier.id : null],
                sourceID: [source.sourceID],
                sourceTypeID: source.sourceTypeID
            });
            console.log(group.value);

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
