import { Component, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    styles: []
})
export class CreateUpdateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    readonly NO_PRECURSOR = 'No precursor found for this process';

    activityConfigFG: FormGroup;
    currentOrgID: any;
    activityID: number;
    activityKeyID: string;
    configuration: any;

    allProcess: any;
    process: any;

    productName: any;
    matchingEntitySources: any;

    suppliers: any;

    processSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    dataInputMethodList: any[] = [];
    distanceUnit: any[] = [];
    productNamesWithEntitySources: { productName: string, entitySources: string[], isSupplier: boolean }[] = [];

    initialObject: any;
    isMeterReading: boolean = false;

    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private processService: ProcessService,
        private storageService: StorageService,
        private supplierService: SupplierService,
        private dataInputUtility: DataInputMethodService,
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
                supplierID: [[]],
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
        this.activityConfigSourceFA.push(
            this.formBuilder.group({
                sourceID: [[]],
                sourceTypeID: null
            })
        );
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
        const precursorInput = this.process.input.find(input => input.type.keyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT);

        if (precursorInput) {
            this.productName = precursorInput.entities.map(precursorInput => precursorInput.name);
            this.activityConfigSourceFA.clear();
            this.matchingEntitySources = precursorInput.entities.map(entity =>
                precursorInput.entitySource.filter(source => source.entityID === entity.id)
            );

            const precursorProductIDs = precursorInput.entities.map(precursorProduct => precursorProduct.id);
            const sourceTypeID = precursorInput.sourceTypeID;
            this.activityConfigSourceFA.push(
                this.formBuilder.group({
                    sourceTypeID: sourceTypeID,
                    sourceID: [precursorProductIDs]
                }));

            const precursorSourceIDs = precursorInput.entitySource.map(precursorInput => precursorInput.id);
            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: []
            });
            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: precursorSourceIDs
            });

            for (let i = 0; i < this.productName.length; i++) {
                const productName = this.productName[i];
                const entitySources = this.matchingEntitySources[i].map(entitySource => entitySource.name);
                const entitySourceKeyID = this.matchingEntitySources[i].map(entitySource => entitySource.keyID);

                let isSupplier = false;
                if (entitySourceKeyID) {
                    isSupplier = entitySourceKeyID.includes(SourceKeyID.PURCHASED_FROM_A_SUPPLIER);
                    if (isSupplier) {
                        this.getSupplierByType();
                    }
                }
                this.productNamesWithEntitySources.push({ productName, entitySources, isSupplier });
            }
        } else {
            this.activityConfigSourceFA.clear();
            this.activityConfigFG.get('activityConfigData').patchValue({
                inputOutputSourceID: []
            });
            this.productNamesWithEntitySources = [];
            this.toastrService.openToast(ToastrTitle.WARNING, this.NO_PRECURSOR, ToastrColor.WARNING);
        }
    }

    async getSupplierByType() {
        this.suppliers = await this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.PRECURSOR_SUPPLIER);
    }

    async getDataInputMethodList(id) {
        this.dataInputMethodList = await this.dataInputUtility.getDataInputMethodByActivityAndType(id, DataInputMethod.STANDARD);
    }

    async getUnit() {
        this.distanceUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.MASS}`]);
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

        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig.configName,
            });
        } else {
            this.readOnlyForm();
        }

        this.activityConfigDataAC.patchValue({
            processID: activityConfigData.processID,
            inputOutputSourceID: activityConfigData.inputOutputSource.id,
            dataInputMethodStdID: activityConfigData.dataInputMethodStdID,
        });

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
            this.activityConfigSourceFA.push(
                this.formBuilder.group({
                    sourceID: [source.sourceID[0]],
                    sourceTypeID: source.sourceTypeID
                })
            );
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
