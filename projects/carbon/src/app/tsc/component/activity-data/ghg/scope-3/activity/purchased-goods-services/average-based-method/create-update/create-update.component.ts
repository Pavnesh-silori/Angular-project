import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, COMMON_CONSTANT, FormAction, FormErrorEnum, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, ResponseM, TypeConfirmationDialog } from '@library/tsc-common';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';


import { PurchasedGoodsServicesController } from '@carbon/controller/purchased-goods-services.controller';
import { PurchasedGoodsServicesM } from '@carbon/model/purchased-goods-services.model';
import { SupplierTypeM } from '@netzero/model/supplier.model';
import { ProductAndServiceService } from '@netzero/service/product-and-service.service';
import { SupplierService } from '@netzero/service/supplier.service';

import { PreferenceController } from '@carbon/controller/preference.controller';
import { EMISSION_SOURCE_KEY_ENUM } from '@netzero/enum/emission-source.enum';
import { isEqual } from 'lodash';
import { CarbonDocumentController } from '@carbon/controller/document.controller';
import { MatDialog } from '@angular/material/dialog';
import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';
import { ActivityKeyIDEnum, MethodKeyIDEnum } from '@carbon/enum/activity.enum';
import { CurrencyService } from '@carbon/service/currency.service';
import { CurrencyM } from '@carbon/model/currency.model';
import { SpendBasedController } from '@carbon/controller/spend-based.controller';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import * as moment from 'moment';
import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
@Component({
    selector: 'create-update-pgs-avg', // pgs = purchased goods and services, avg = average based method
    templateUrl: './create-update.component.html'
})
export class CreateUpdateComponent implements OnInit {
    currentOrgID: any;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    activityForm: FormGroup;
    defaultActivityForm: any;

    // activityID: any;
    activityDataID: any;
    activityKeyID: string;

    supplierList: SupplierTypeM[] = [];
    productList: Array<any> = [];
    serviceList: Array<any> = [];

    sourceList: Array<any> = [];

    dateInputTypeEnum = DateInputTypeEnum;
    dateTypeEnum = DateTypeEnum;
    EMISSION_SOURCE_KEY_ENUM = EMISSION_SOURCE_KEY_ENUM;
    title: string = 'Create';
    actionType: string = 'create';
    ButtonLabelEnum = ButtonLabelEnum;
    activityData: PurchasedGoodsServicesM = new PurchasedGoodsServicesM(); // from route or wanna do it from using service

    unit: any[];
    unitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    currencySearchUtil: MatSelectSearchService = new MatSelectSearchService(['currencyName']); // currencyName

    isReadOnly: boolean = false;
    calculationApproachKeyID: any;

    @ViewChild('fileInput') fileInput: ElementRef;
    // @ViewChild('customDateInput') customDateInput: DateInputComponent;
    @ViewChild('dailyDateInput') dailyDateInput: DateInputComponent;

    @ViewChildren(DateInputComponent) customDateInputs: QueryList<DateInputComponent>;

    sourceTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    supplierTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['supplierName']);
    emfSearchUtil: MatSelectSearchService = new MatSelectSearchService(['emissionFactorSourceName']);

    emfSourceList: any[] = [];
    emfSource: any;

    selectedEmissionFactorSource: any;

    COMMON_CONSTANT = COMMON_CONSTANT;
    FormErrorEnum = FormErrorEnum;

    docFileList: any = new Array(1).fill(null);
    docFile: File = null;
    docFileName: string;
    noDocFileAvailable: boolean = true;
    file: any;
    hideFileDelete: boolean = false;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    // isInflation: boolean;
    // inflationPeriods: string[] = [];
    // inflationRate: any;

    CARBON_CONSTANT = CARBON_CONSTANT;
    isAutoSave: boolean = false;

    customEFList: any[] = [];
    customEFSearchUtil: MatSelectSearchService = new MatSelectSearchService(['newName']);
    hasCustomEmissionFactor: boolean = false;

    private dateRangeSubscription: any;
    emfSourceMetadata: any;

    constructor(
        private supplierService: SupplierService,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private unitService: UnitService,
        private toastrService: ToastrService,
        private dateService: DateService,
        private purchasedGoodsServicesController: PurchasedGoodsServicesController,
        private productAndServiceService: ProductAndServiceService,
        private location: Location,
        private preferenceController: PreferenceController,
        private carbonDocumentController: CarbonDocumentController,
        private dialog: MatDialog,
        private productAndServiceController: ProductAndServiceController,
        private currencyService: CurrencyService,
        private spendBasedController: SpendBasedController,
        private toasterService: ToastrService,
        // private orgPreferencesService: OrgPreferencesService
    ) {
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.setActionType();
        this.setActivityIDs();
        this.setFormTitle();
        this.getOrgPreferenceByActivityAndCal();
        this.getSupplierByType();
        this.createSourceList();
        this.getUnit();
        this.getRecord();
        // this.registerDateRangeChange();
    }

    setActionType() {
        this.activatedRoute?.data.subscribe(data => {
            this.actionType = data.action;
        });
    }

    setActivityIDs() {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['activityDataID']) {
                this.activityDataID = queryParams['activityDataID'];
            }
            if (queryParams['activityKeyID']) {
                this.activityKeyID = queryParams['activityKeyID'];
            }
            if (queryParams['calculationApproachKeyID']) {
                this.calculationApproachKeyID = queryParams['calculationApproachKeyID'];
            }
        });
    }

    setFormTitle() {
        if (this.activityKeyID === ActivityKeyIDEnum.CAPITAL_GOODS) {
            this.title = this.actionType === 'update' ? 'Update Capital Goods Record' : 'Create Capital Goods Record';
        } else {
            this.title = this.actionType === 'update' ? 'Update Purchased Goods and Services Record' : 'Create Purchased Goods and Services Record';
        }
    }

    async getOrgPreferenceByActivityAndCal() {
        const preferenceRes = await this.preferenceController.getOrgPreferenceByActivityAndCal(this.currentOrgID, this.activityKeyID, this.calculationApproachKeyID).toPromise();
        this.emfSource = preferenceRes;
        this.emfSourceList = this.abstractEmissionFactorSourceInfo(this.emfSource?.emissionFactorSource);
        this.emfSearchUtil.entityArr = this.emfSourceList;
        this.emfSearchUtil.createSubscription();
    }

    abstractEmissionFactorSourceInfo(emfData): any {
        return emfData.flatMap(item =>
            item.emissionFactorSourceVersion.map(version => ({
                emissionFactorSourceStdID: item.id,
                emissionFactorSourceName: item.name,
                emissionFactorSourceKeyID: item.keyID,
                emissionFactorSourceVersionID: version.id,
                emissionFactorSourceVersionName: version.name,
                emissionFactorSourceVersionKeyID: version.keyID,
                emissionFactorSourceRecordId: version.recordID,
                emissionFactorSourceEntityId: version.entityID
            }))
        );
    }

    emissionSourceChanged(event) {
        this.selectedEmissionFactorSource = this.emfSourceList.find(item => item.emissionFactorSourceStdID === event.value);
        if (this.selectedEmissionFactorSource) {
            this.activityForm.get('activityMetadata').get('emissionFactorSourceVersionID').patchValue(this.selectedEmissionFactorSource?.emissionFactorSourceVersionID);
            this.updateActivityMetadataFormValidity(this.selectedEmissionFactorSource);
        }
    }

    createSupplierTypeFilter() {
        if (this.activityKeyID == ActivityKeyIDEnum.CAPITAL_GOODS) {
            return SupplierTypeKeyIDEnum.CAPITAL_GOODS_SUPPLIER;
        } else if (this.activityKeyID == ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES) {
            return SupplierTypeKeyIDEnum.PURCHASED_GOODS_AND_SERVICES_SUPPLIER;
        } else {
            return '';
        }
    }

    async getSupplierByType() {
        try {
            this.supplierList = await this.supplierService.getSupplierByType(this.currentOrgID, this.createSupplierTypeFilter()) || [];
            this.supplierTypeSearchUtil.entityArr = this.supplierList;
            this.supplierTypeSearchUtil.createSubscription();
        } catch (error) {
            this.supplierList = [];
            console.log("error", error);
        }
    }

    createProductParams(): any {
        if (this.activityKeyID == ActivityKeyIDEnum.CAPITAL_GOODS) {
            return [`productType:traded-product,purchased-product`, `category:capital-good`];
        } else if (this.activityKeyID == ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES) {
            return [`productType:traded-product,purchased-product`];
        }
        return [];
    }

    async getAllProducts() {
        try {
            this.productList = await this.productAndServiceService.getProductList(this.currentOrgID, this.createProductParams()) || [];
        } catch (error) {
            this.productList = [];
            console.log("error", error);
        }
    }

    async getAllServices() {
        try {
            this.serviceList = await this.productAndServiceService.getServiceList(this.currentOrgID) || [];
        } catch (error) {
            this.serviceList = [];
            console.log("error", error);
        }
    }

    async createSourceList() {
        try {
            await Promise.all([this.getAllProducts(), this.getAllServices()]);
            this.sourceList = this.productList.concat(this.serviceList);
            this.sourceTypeSearchUtil.entityArr = this.sourceList;
            this.sourceTypeSearchUtil.createSubscription();
        } catch (error) {
            this.sourceList = [];
            console.log("error", error);
        }
    }

    async getRecord() {
        try {
            if (this.actionType !== 'create') {
                let response: any = await this.purchasedGoodsServicesController.getRecordByID(this.currentOrgID, this.activityDataID, this.activityKeyID).toPromise();
                this.activityData = new PurchasedGoodsServicesM(response);
                this.createActivityForm();
            } else {
                this.createActivityForm();
            }
        } catch (error) {
            this.createActivityForm();
            console.log("error", error);
        }
    }

    createActivityForm() {
        try {
            this.activityForm = this.formBuilder.group({
                activityData: this.createActivityDataForm(this.activityData?.activityData),
                activityMetadata: this.createActivityMetadataForm(this.activityData?.activityMetadata)
            });
            this.patchInfilationForm(this.activityData?.activityData?.inflation);
            this.updateActivityDataFormValidity();
            const inflation = this.activityForm.get('activityData').get('inflation').value;
            if (!inflation) {
                this.inflationRateMetadataChanged();
            }
            // this.inflationRate = this.activityData?.activityData?.inflation;
            this.defaultActivityForm = Object.assign({}, this.activityForm.value);
        } catch (error) {
            console.log("error", error);
        }
    }

    updateActivityDataFormValidity() {
        const activityData = this.activityForm.get('activityData');
        const fieldsToValidate = this.isAvgCalMethod() ?
            { validate: ['quantity', 'quantityUnitID'], clear: ['amount', 'amountUnitID'] } :
            { validate: ['amount', 'amountUnitID'], clear: ['quantity', 'quantityUnitID'] };

        // Set validators for fields that need validation
        fieldsToValidate.validate.forEach(field => {
            activityData.get(field).setValidators([Validators.required, Validators.min(0)]);
            activityData.get(field).updateValueAndValidity();
        });

        // Clear validators for fields that don't need validation
        fieldsToValidate.clear.forEach(field => {
            activityData.get(field).clearValidators();
            activityData.get(field).updateValueAndValidity();
        });
    }

    createActivityDataForm(activityData: any): any {
        return this.formBuilder.group({
            id: [activityData?.id || null],
            recordID: [activityData?.recordID || null],
            quantity: [activityData?.quantity || null],
            quantityUnitID: [activityData?.quantityUnitID || null],
            amount: [activityData?.amount || null],
            amountUnitID: [activityData?.amountUnitID || null],
            startDate: [activityData?.startDate, Validators.required],
            endDate: [activityData?.endDate, Validators.required],
            docID: [activityData?.docID || null],
            docType: [activityData?.docType || null],
            docName: [activityData?.docName || null],
            docPath: [activityData?.docPath || null],
            docSize: [activityData?.docSize || null],
            file: [activityData?.file || null],
            transactionDate: [activityData?.transactionDate || null],
            inflation: this.formBuilder.array([]) // FormArray for inflation rates
        });
    }

    get inflationControls() {
        return (this.activityForm.get('activityData.inflation') as FormArray).controls;
    }

    private patchInfilationForm(inflation: any): any {
        if (inflation && inflation.length > 0) {
            this.inflationArray.clear();
            inflation.forEach(item => {
                this.inflationArray.push(this.formBuilder.group({
                    year: [item.year],
                    rate: [item.rate, Validators.required]
                }))
            });
        }
    }

    // Utility method to create the form structure
    private createActivityMetadataFormStructure(activityMetadata: any): any {
        let id = activityMetadata?.emissionFactorSourceStdID;
        this.selectedEmissionFactorSource = this.findSelectedEmissionFactorSource(id);
        // let isCustomEmissionFactor = !!activityMetadata?.customEmissionFactorVersionID;
        // let isCustomEmissionFactor = false;

        let sourceID = activityMetadata?.sourceID;

        if (activityMetadata?.customEmissionFactorVersionID) {
            this.hasCustomEmissionFactor = true;
            this.getCustomEmissionFactor(sourceID);
        }

        return {
            id: [activityMetadata?.id || null],
            recordID: [activityMetadata?.recordID || null],
            sourceID: [sourceID || null, [Validators.required]],
            sourceTypeID: [activityMetadata?.sourceTypeID || null],
            supplierID: [activityMetadata?.supplierID || null],
            calculationApproachKeyID: [activityMetadata?.calculationApproachKeyID || this.calculationApproachKeyID],
            customEmissionFactorVersionID: [activityMetadata?.customEmissionFactorVersionID || null],
            emissionFactorSourceVersionID: [activityMetadata?.emissionFactorSourceVersionID || null],
            emissionFactorSourceStdID: [activityMetadata?.emissionFactorSourceStdID || null],
            ukDefraMetadata: this.createUKDefraForm(activityMetadata?.ukDefraMetadata),
            usEeioMetadata: this.createUSEEIOForm(activityMetadata?.usEeioMetadata),
            isCustomEmf: [this.hasCustomEmissionFactor]
        };
    }

    private updateActivityMetadataFormValidity(emissionFactorSource?: any) {
        const ukDefraMetadataForm = this.activityForm.get('activityMetadata.ukDefraMetadata');
        const usEeioMetadataForm = this.activityForm.get('activityMetadata.usEeioMetadata');
        if (!this.hasCustomEmissionFactor) {
            if (this.isUkDefra()) {
                console.log('ukDefraMetadataForm', ukDefraMetadataForm);
                ukDefraMetadataForm.get('materialTypeID').setValidators(Validators.required);
                ukDefraMetadataForm.get('materialOriginTypeID').setValidators(Validators.required);
                usEeioMetadataForm.get('categoryStdID').clearValidators();

                ukDefraMetadataForm.get('materialTypeID').updateValueAndValidity();
                ukDefraMetadataForm.get('materialOriginTypeID').updateValueAndValidity();
                usEeioMetadataForm.get('categoryStdID').updateValueAndValidity();
            } else if (this.isUsEeio()) {
                console.log('usEeioMetadataForm', usEeioMetadataForm);
                ukDefraMetadataForm.get('materialTypeID').clearValidators();
                ukDefraMetadataForm.get('materialOriginTypeID').clearValidators();
                usEeioMetadataForm.get('categoryStdID').setValidators(Validators.required);

                ukDefraMetadataForm.get('materialTypeID').updateValueAndValidity();
                ukDefraMetadataForm.get('materialOriginTypeID').updateValueAndValidity();
                usEeioMetadataForm.get('categoryStdID').updateValueAndValidity();
            }
        } else {
            ukDefraMetadataForm.get('materialTypeID').clearValidators();
            ukDefraMetadataForm.get('materialOriginTypeID').clearValidators();
            usEeioMetadataForm.get('categoryStdID').clearValidators();

            ukDefraMetadataForm.get('materialTypeID').updateValueAndValidity();
            ukDefraMetadataForm.get('materialOriginTypeID').updateValueAndValidity();
            usEeioMetadataForm.get('categoryStdID').updateValueAndValidity();
        }
    }

    // Refactored method to create a new activity metadata form
    createActivityMetadataForm(activityMetadata: any): any {
        return this.formBuilder.group(this.createActivityMetadataFormStructure(activityMetadata));
    }

    // Refactored method to patch the activity metadata form
    patchCreateActivityMetadataForm(activityMetadata: any) {
        // Directly patch the form with the structured data
        this.selectedEmissionFactorSource = this.emfSourceList.find(item => item.emissionFactorSourceStdID === activityMetadata.emissionFactorSourceStdID);
        const data = this.activityForm.get('activityMetadata') as FormGroup;
        if (data) {
            data.get('id').setValue(activityMetadata?.id);
            data.get('recordID').setValue(activityMetadata?.recordID);
            // data.get('supplierID').setValue(activityMetadata?.supplierID);
            data.get('calculationApproachKeyID').setValue(activityMetadata?.calculationApproachKeyID || this.calculationApproachKeyID);
            data.get('emissionFactorSourceVersionID').setValue(activityMetadata?.emissionFactorSourceVersionID || this.selectedEmissionFactorSource?.emissionFactorSourceVersionID);
            data.get('emissionFactorSourceStdID').setValue(activityMetadata?.emissionFactorSourceStdID || this.selectedEmissionFactorSource?.emissionFactorSourceStdID);

            this.patchUKDefraForm(activityMetadata?.ukDefraMetadata);
            this.patchUSEEIOForm(activityMetadata?.usEeioMetadata);
            this.updateActivityMetadataFormValidity(this.selectedEmissionFactorSource);
            // this.inflationRateMetadataChanged();
            Object.assign(this.defaultActivityForm['activityMetadata'], this.activityForm.get('activityMetadata').value);
        }
    }

    get ukDefraMetadataForm() {
        return this.activityForm.get('activityMetadata.ukDefraMetadata');
    }

    createUKDefraForm(ukDefraMetadata: any) {
        try {
            return this.formBuilder.group({
                materialTypeID: [ukDefraMetadata?.materialTypeID || null, Validators.required],
                materialOriginTypeID: [ukDefraMetadata?.materialOriginTypeID || null, Validators.required]
            });
        } catch (error) {
            console.log("error", error);
        }
    }

    patchUKDefraForm(ukDefraMetadata: any) {
        try {
            const data = this.activityForm.get('activityMetadata.ukDefraMetadata') as FormGroup;

            if (data) {
                data.get('materialTypeID').setValue(ukDefraMetadata?.materialTypeID);
                data.get('materialOriginTypeID').setValue(ukDefraMetadata?.materialOriginTypeID);
            }

        } catch (error) {
            console.log("error", error);
        }
    }

    createUSEEIOForm(usEeioMetadata: any) {
        return this.formBuilder.group({
            categoryStdID: [usEeioMetadata?.categoryStdID || null, Validators.required],
        });
    }

    get USEEIOMetadataForm() {
        return this.activityForm.get('activityMetadata.usEeioMetadata');
    }

    patchUSEEIOForm(usEeioMetadata: any) {
        const data = this.activityForm.get('activityMetadata.usEeioMetadata') as FormGroup;
        if (data) {
            data.get('categoryStdID').setValue(usEeioMetadata?.categoryStdID);
        }
    }

    isMetadataChanged(): boolean {
        return !isEqual(this.activityForm.get('activityMetadata').value, this.defaultActivityForm['activityMetadata']);
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityForm?.get(control).hasError(error);
    }

    async getUnit() {
        if (this.isAvgCalMethod()) {
            this.unit = await this.unitService.getUnit([`type:${UnitTypeKeyID.MASS}`]);
            this.unitSearchUtil.entityArr = this.unit.slice();
            this.unitSearchUtil.createSubscription();
        } else {
            this.unit = <CurrencyM[]>await this.currencyService.getCurrency();
            this.currencySearchUtil.entityArr = this.unit;
            this.currencySearchUtil.createSubscription();
        }
    }

    get inflationArray(): FormArray {
        return this.activityForm.get('activityData.inflation') as FormArray;
    }

    // file upload block start !!!!!!!!!!!

    fileUpload(event, formGroup: FormGroup, index: number) {
        this.hideFileDelete = false;
        let file = event.target.files[0];
        if (file) {

            if (file.type !== 'application/pdf') {
                this.toastrService.error(NocFileUploadEnum.INVALID_FILE_TYPE_ERROR)
                return;
            }

            if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.toastrService.error(NocFileUploadEnum.INVAID_FILE_SIZE_ERROR)
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.docFile = file;
            this.docFileName = file['name'];

            formGroup.get('docName').patchValue(file['name']);
            formGroup.get('docSize').patchValue(this.getFileSizeWithUnit(file['size']));

            this.docFileList[index] = this.docFile;

            if (this.actionType.toLowerCase() == FormAction.UPDATE.toLowerCase()) {
                this.hideFileDelete = true;
            }
        }
        else {
            this.toastrService.error('Please upload a file!');
            return;
        }
    }

    getFileSizeWithUnit(billFileSize: number): string {
        const fileSizeInKB = Math.round(billFileSize / 1024);
        const fileSizeInMB = Math.round(fileSizeInKB / 1024);
        const fileSizeInGB = Math.round(fileSizeInMB / 1024);

        if (fileSizeInGB > 1) {
            return fileSizeInGB + ' GB';
        } else if (fileSizeInMB > 1) {
            return fileSizeInMB + ' MB';
        } else {
            return fileSizeInKB + ' KB';
        }
    }

    removeFile(index: number) {

        if (this.actionType?.toLowerCase() === FormAction?.CREATE?.toLowerCase()) {
            this.fileInput.nativeElement.value = null;
        }
        this.docFile = null;
        this.docFileName = '';

        this.activityForm.get('activityData').get('docName').reset();
        this.activityForm.get('activityData').get('docSize').reset();
        this.activityForm.get('activityData').get('docPath').reset(null);
        this.activityForm.get('activityData').get('docID').reset();
        if (index >= 0 && index < this.docFileList.length) {
            this.docFileList[index] = this.docFile;
        }
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('payload', this.docFile);

        return formData;
    }

    fileCreateUpdate(formGroup: FormGroup) {
        if (formGroup.get('docID').value == null) {
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, this.activityKeyID,
                this.toFormData()).subscribe((response) => {
                    this.file = response['response'];
                    this.updateFileFormControl(formGroup);
                }, error => {
                    console.log("error in fileCreate -", error);
                });
        } else {
            this.carbonDocumentController.updateDocument(this.currentOrgID, formGroup.get('docID').value, this.toFormData())
                .subscribe((response) => {
                    this.file = response['response'];
                    this.updateFileFormControl(formGroup);
                }, error => {
                    console.log("error in fileUpdate -", error);
                });
        }
    }

    updateFileFormControl(formGroup) {
        formGroup.get('docID').patchValue(this.file.id);
        formGroup.get('docName').patchValue(this.file.name);
        formGroup.get('docPath').patchValue(this.file.path);
    }

    deleteConfirmation(formGroup: FormGroup, index) {
        const dialogRef = this.dialog.open(TypeConfirmationDialog, {

            minWidth: '650px',
            maxWidth: '600px',
            data: {
                icon: 'delete',
                header: 'Are you sure you want to delete ?',
                body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This file will be deleted permanently and you won`t be able to track it`s progress.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
                confirmationInput: 'DELETE',
                buttonOne: 'Cancel',
                buttonTwo: 'Delete'
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.deleteDocument(formGroup.get('docID').value, formGroup, index);
            } else {
                dialogRef.close()
            }
        });
    }

    deleteDocument(docID, formGroup, index) {
        this.carbonDocumentController.deleteOrgFileByActivity(this.currentOrgID, this.activityKeyID, this.activityData?.activityData?.id, docID).subscribe(res => {
            const activityDataID = res['response']['activityData']['id'];
            if (!this.activityForm) {
                console.error("activityForm is not initialized.");
                return;
            }
            const activityDataControl = this.activityForm.get('activityData');
            if (!activityDataControl) {
                console.error("'activityData' control does not exist.");
                return;
            }
            const idControl = activityDataControl.get('id');
            if (!idControl) {
                console.error("'id' control does not exist within 'activityData'.");
                return;
            }
            idControl.setValue(activityDataID);
            idControl.updateValueAndValidity();
            this.removeFile(index);
        }, error => {
            console.error("error in deleteDocument -", error);
        });
    }

    createFormData(): FormData {
        const formData = new FormData();
        formData.append('payload', JSON.stringify(this.activityForm.value));
        if (this.docFile == null) {
            // formData.append('file', new File([], '', { type: 'application/octet-stream' }));
        } else {
            formData.append('file', this.docFile, this.docFileName);
        }
        return formData;
    }

    createActivity() {
        try {
            this.purchasedGoodsServicesController.createRecord(this.currentOrgID, this.createFormData(), this.activityKeyID)
                .subscribe((_updateRes: ResponseM) => {
                    this.closeForm();
                },
                    error => {
                        console.log('error in updateEquipmentServicingRecord -', error);
                    })
        } catch (error) {
            console.log("error", error);
        }
    }

    updateActivity() {
        try {
            const activityID = this.activityForm?.get('activityData').get('id').value;
            this.purchasedGoodsServicesController.updateRecord(this.currentOrgID, activityID, this.createFormData(), this.activityKeyID)
                .subscribe((_updateRes: ResponseM) => {
                    this.closeForm();
                    // this.dialogRef.close(DialogEnum.SUCCESS_DR);
                },
                    error => {
                        console.log('error in updateEquipmentServicingRecord -', error);
                    })
        } catch (error) {
            console.log("error", error);
        }
    }

    saveForm() {
        if (this.actionType === 'create') {
            if (this.hasCustomEmissionFactor) {
                this.activityForm.get('activityMetadata').get('emissionFactorSourceVersionID').patchValue(null);
            } else {
                this.activityForm.get('activityMetadata').get('customEmissionFactorVersionID').patchValue(null);
            }
            this.createActivity();
        } else {
            if (this.hasCustomEmissionFactor) {
                this.activityForm.get('activityMetadata').get('emissionFactorSourceVersionID').patchValue(null);
            } else {
                this.activityForm.get('activityMetadata').get('customEmissionFactorVersionID').patchValue(null);
            }
            this.updateActivity();
        }
    }

    isFormValid(): boolean {
        this.updateActivityDataFormValidity();
        this.updateActivityMetadataFormValidity(this.selectedEmissionFactorSource);
        console.log('isFormValid', this.activityForm);
        return this.activityForm?.valid;
    }

    isFormEqual(): boolean {
        return isEqual(this.activityForm.value, this.defaultActivityForm);
    }

    canSave() {
        this.activityForm.markAllAsTouched();
        if (this.isAutoSave) {
            this.updateEMFMetadata();
        }
        console.log('isFormValid', this.isFormValid());
        if (this.isFormValid() && !this.isFormEqual()) {
            this.saveForm();
        }
    }

    closeForm() {
        this.location.back();
    }

    dateInpChange() {
        if (this.customDateInputs) {
            const customDateInputInstance = this.customDateInputs.toArray()[0];
            const startDate = customDateInputInstance?.startDateFC.value;
            const endDate = customDateInputInstance?.endDateFC.value;

            if (startDate) {
                const formatted_startDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
                // formGroup.get('startDate').patchValue(formatted_startDate);
                this.activityForm?.get('activityData').get('startDate').patchValue(formatted_startDate);
            }

            if (endDate) {
                const formatted_endDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
                // formGroup.get('endDate').patchValue(formatted_endDate);
                this.activityForm?.get('activityData').get('endDate').patchValue(formatted_endDate);
            }
        }
    }

    dailyDateInpChange() {
        let transactionDate = this.dailyDateInput?.startDateFC.value;
        if (transactionDate) {
            let date = this.dateService.formatDate(transactionDate, DateFormatEnum.YYYY_MM_DD);
            this.activityForm?.get('activityData').get('transactionDate').patchValue(date);
            this.activityForm?.get('activityData').get('startDate').patchValue(date);
            this.activityForm?.get('activityData').get('endDate').patchValue(date);
            this.inflationRateMetadataChanged();
        } else {
            this.activityForm?.get('activityData').get('transactionDate').patchValue(moment().format(DateFormatEnum.YYYY_MM_DD));
            this.activityForm?.get('activityData').get('startDate').patchValue(moment().format(DateFormatEnum.YYYY_MM_DD))
            this.activityForm?.get('activityData').get('endDate').patchValue(moment().format(DateFormatEnum.YYYY_MM_DD));
        }
    }

    registerDateRangeChange() {
        this.dateRangeSubscription = this.customDateInputs.changes.subscribe((list: QueryList<any>) => {
            if (list.length > 0) {
                this.setDateRange();
                this.dateRangeSubscription.unsubscribe();
            }
        });
    }

    ngAfterViewInit() {
        this.registerDateRangeChange();
    }

    setDateRange() {

        const startDate = this.activityData?.activityData?.startDate || null;
        const endDate = this.activityData?.activityData?.endDate || null;
        const transactionDate = this.activityData?.activityData?.transactionDate || null;
        // if (startDate && endDate) {
        //     this.customDateInput?.daterange.patchValue({ startDate: moment(startDate), endDate: moment(endDate) });
        // }

        const customDateInputInstance = this.customDateInputs?.toArray()[0];

        if (customDateInputInstance && startDate && endDate) {
            customDateInputInstance.daterange.patchValue({ startDate: moment(startDate), endDate: moment(endDate) });
        }

        if (transactionDate) {
            this.dailyDateInput?.durationFC.patchValue(moment(transactionDate));
        }
    }

    sourceChanged(event) {
        let source = this.sourceList.find(s => s.id === event.value);
        if (source) {
            this.activityForm?.get('activityMetadata').get('sourceTypeID').patchValue(source.sourceTypeID);
            if (this.hasCustomEmissionFactor) {
                this.getCustomEmissionFactor(source['id']);
            } else {
                this.getEMFSourceMetadata();
            }
        }
    }

    async getEMFSourceMetadata() {
        const sourceID = this.activityForm?.get('activityMetadata').get('sourceID').value;
        const source = this.isProductOrService();
        this.productAndServiceController.getEMFSourceMetadata(this.currentOrgID, source, sourceID).subscribe(response => {
            this.emfSourceMetadata = response;
            this.patchCreateActivityMetadataForm(response);
        }, error => {
            console.log('error in getProductMetaDataByID -', error);
        });
    }

    findSelectedEmissionFactorSource(id) {
        return this.emfSourceList.find(item => item.emissionFactorSourceStdID === id);
    }

    isProductOrService() {
        const sourceTypeID = this.activityForm?.get('activityMetadata').get('sourceTypeID').value;
        const foundProduct = this.productList.find(item => item.sourceTypeID === sourceTypeID);
        return foundProduct ? 'product' : 'service';
    }

    handleCheckboxChange(event) {
        this.isAutoSave = event.checked;
    }

    updateEMFMetadata() {
        // this.updateActivityMetadata();
        const source = this.isProductOrService();
        const sourceID = this.activityForm?.get('activityMetadata').get('sourceID').value;
        const id = this.activityForm?.get('activityMetadata').get('id').value;
        const activityMetadataForm = this.activityForm?.get('activityMetadata').value;
        if (this.isUkDefra()) {
            this.emfSourceMetadata['ukDefraMetadata'] = this.activityForm?.get('activityMetadata').get('ukDefraMetadata').value;
        } else if (this.isUsEeio()) {
            this.emfSourceMetadata['usEeioMetadata'] = this.activityForm?.get('activityMetadata').get('usEeioMetadata').value;
        }

        if (id) {
            this.productAndServiceController.updateEMFMetadata(this.currentOrgID, source, sourceID, this.emfSourceMetadata, id).subscribe(response => {
                Object.assign(this.defaultActivityForm['activityMetadata'], activityMetadataForm);
            }, error => {
                console.log('error', error);
            });
        } else {
            this.productAndServiceController.createEMFMetadata(this.currentOrgID, source, sourceID, activityMetadataForm).subscribe(response => {
                Object.assign(this.defaultActivityForm['activityMetadata'], activityMetadataForm);
            }, error => {
                console.log('error', error);
            });
        }
    }

    // updateActivityMetadata() {
    //     const activityMetadataForm = this.activityForm?.get('activityMetadata').value;

    //     if (this.isUkDefra()) {
    //         activityMetadataForm['ukDefraMetadata'] = this.ukDefraMetadataForm.value;
    //         activityMetadataForm['usEeioMetadata'] = null;
    //     } else if (this.isUsEeio()) {
    //         activityMetadataForm['ukDefraMetadata'] = null;
    //         activityMetadataForm['usEeioMetadata'] = this.USEEIOMetadataForm.value;
    //     }
    // }

    isAvgCalMethod(): boolean {
        return this.calculationApproachKeyID === MethodKeyIDEnum.AVERAGE_BASED_METHOD;
    }

    isUkDefra(): boolean {
        return this.calculationApproachKeyID === MethodKeyIDEnum.AVERAGE_BASED_METHOD;
    }

    isUsEeio(): boolean {
        return this.calculationApproachKeyID === MethodKeyIDEnum.SPEND_BASED_METHOD;
    }

    getInflationRate(methodID: any, startDate: any, endDate: any, currencyUnitID: any) {
        this.spendBasedController.getInflationRate(this.currentOrgID, methodID, startDate, endDate, currencyUnitID).subscribe((inflationRes) => {
            this.patchInfilationForm(inflationRes['response']);
        }, error => {
            console.log("error in getting inflation rate -", error);
            this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting inflation rate', ToastrColor.ERROR);
        });
    }

    inflationRateMetadataChanged() {
        if (!this.isAvgCalMethod()) {
            const methodID = 11;
            const transactionDate = this.dailyDateInput?.startDateFC.value;
            const currencyUnitID = this.activityForm.get('activityData').get('amountUnitID').value;

            if (transactionDate && currencyUnitID) {
                const formattedDate = this.dateService.formatDate(transactionDate, DateFormatEnum.YYYY_MM_DD);
                this.getInflationRate(methodID, formattedDate, formattedDate, currencyUnitID);
            }
        }
    }

    getCustomEmissionFactor(sourceID: any) {
        if (sourceID !== null && sourceID !== undefined) {
            this.productAndServiceController.getCustomEmissionFactor(this.currentOrgID, 'product', sourceID, this.activityKeyID, this.calculationApproachKeyID).subscribe(
                (response) => {
                    this.customEFList = response.map(item => ({
                        ...item,
                        newName: `${item.databaseName} > ${item.customFactorName} > ${item.customFactorVersion}`
                    }));
                    this.customEFSearchUtil.entityArr = this.customEFList;
                    this.customEFSearchUtil.createSubscription();
                },
                (error) => {
                    console.error('Error in getCustomEmissionFactor -', error);
                    // Consider adding user notification or error handling logic here
                }
            );
        }
    }

    customEmissionFactorChanged(event) {
        this.hasCustomEmissionFactor = event;
        let sourceID = this.activityForm?.get('activityMetadata').get('sourceID').value;
        this.getCustomEmissionFactor(sourceID);
    }

    hasSourceID(): boolean {
        if (this.activityForm?.get('activityMetadata').get('sourceID').value) {
            return true;
        } else {
            return false;
        }
    }

    supplierChanged() {
        let newList = this.customEFList.filter(
            item => item.supplierID === this.activityForm?.get('activityMetadata').get('supplierID').value || item.supplierID === null);
        this.customEFSearchUtil.entityArr = newList;
        this.customEFSearchUtil.createSubscription();
    }

}