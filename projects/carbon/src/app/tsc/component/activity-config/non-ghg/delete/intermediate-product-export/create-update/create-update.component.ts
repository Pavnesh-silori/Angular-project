import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { isEqual } from 'lodash';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { DataInputMethod } from '@carbon/enum/data-input-method.enum'
import { ActivityService } from '@carbon/service/activity.service';
import { ProcessService } from '@carbon/service/process.service';
import { ProductAndServiceService } from '@netzero/service/product-and-service.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { PROCESS_INPUT_ENUM, PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';

//tsc-library
import { StorageService } from '@library/storage-service';
import { FormAction, FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService, ToastrColor, ToastrTitle } from '@library/toastr-service';
// /tsc-library/
@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent {
    FormAction = FormAction;
    formGroup: FormGroup;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;
    ActivityKeyIDEnum = ActivityKeyIDEnum;
    DataInputMethod = DataInputMethod;
    PROCESS_INPUT_ENUM = PROCESS_INPUT_ENUM;
    formErrorEnum = FormErrorEnum;
    PROCESS_OUTPUT_ENUM = PROCESS_OUTPUT_ENUM;
    routeData: any;
    action: any;
    currentOrgID: any;
    activityID: number;
    activityKeyID: string;
    configuration: any;
    sourceName: string = 'Heat';
    activityConfigFG: FormGroup;
    allProcess: any;
    allProduct: any;
    inputMethod: any;
    initialObject: any;
    origin: any;

    dataInputMethodList: any[] = [];
    distanceUnit: any[] = [];
    readonly NO_CO_PRODUCT = 'No co-product found for this process';
    allProductSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    processSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    isEqual: EventEmitter<boolean> = new EventEmitter();
    @Output() formDataEvent = new EventEmitter<any>();
    productName: string[] = [];

    constructor(
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private dataInputMethodService: DataInputMethodService,
        private processService: ProcessService,
        private unitService: UnitService,
        private productService: ProductAndServiceService,
        private activityService: ActivityService,
        private toastrService: ToastrService

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
        this.getActivityID(ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT);
        this.getProcess();
        this.getUnit();
        this.getProducts();
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
                dataInputMethodStdID: [, Validators.required],
                meterRolloverValue: [],
                meterRolloverUnitID: [],
            }),
            activityConfigSource: this.formBuilder.array([])
        });
        this.createFormGroup();
        if (this.origin == 'ad-hoc') { this.configNameAC.disable(); }
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

    setSourceTypeID(data) {
        this.activityConfigFG.get('activityConfigSource').get([0]).get('sourceTypeID').patchValue(data.sourceTypeID, { emitEvent: false });
    }


    async getProcessByID(orgID, processID) {
        let process = await this.processService.getProcessByID(orgID, processID);
        console.log(process);
        const coProductOutput =  process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT);

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
            this.activityConfigSourceFA.clear();
            this.toastrService.openToast(ToastrTitle.ERROR, this.NO_CO_PRODUCT, ToastrColor.ERROR);
        }

    }

    async getActivityID(activityKeyID) {
        let allActivity = await <any>this.activityService.getAllActivity()
        allActivity.forEach(activity => {
            if (activity.keyID == activityKeyID) {
                this.activityID = activity.id;
                this.getDataInputMethodList(this.activityID)
            }
        });
    }

    async getDataInputMethodList(id) {
        this.dataInputMethodList = await this.dataInputMethodService.getDataInputMethodByActivityAndType(id, DataInputMethod.STANDARD);
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
    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(this.activityConfigFG.invalid));
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
        let activityConfigSource = configuration['activityConfigSource'];

        this.inputMethodChange(activityConfigData.dataInputMethodStdKeyID);

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
            meterRolloverValue: activityConfigData.meterRolloverValue,
            meterRolloverUnitID: activityConfigData.meterRolloverUnitID,
            productID: activityConfigData.productID
        })

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
        });

        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }

    get getConfigJson() {
        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.value));
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

    async getProducts() {
        this.allProduct = await this.productService.getProductList(this.currentOrgID);
        this.allProduct = this.allProduct.filter(p => p.productCategory.find(c => c.keyID == PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT))
        console.log(this.allProduct);
        this.allProductSearch.entityArr = this.allProduct;
        this.allProductSearch.createSubscription();
    }

    async getUnit() {
        this.distanceUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.MASS}`]);
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error);
    }

    radioError = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error) && this.activityConfigFG.get(control).touched;
    }
}