import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { isEqual } from "lodash";

import { ProductServiceTabTypeEnum } from '@netzero/enum/product-service-type.enum';
import { LookupCodeEnum } from '@netzero/model/lookup-code.enum';
import { ProductAndService } from '@netzero/model/product-service.model';

import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';

// tsc-library
import { AccountingPreferenceM } from '@carbon/model/accounting-preference.model';
import { AccountingPreferenceService } from '@carbon/service/accounting-preference.service';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, DialogEnum, FormAction, FormErrorEnum, InvalidForm, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import { MessagesConstant } from '@netzero/enum/message.enum';
// /tsc-library/
@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styles: ['']
})
export class CreateUpdateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ProductServiceTabTypeEnum = ProductServiceTabTypeEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;

    messagesConstant = MessagesConstant;

    currentOrgID: any;
    rootOrgID: any;

    formDataFG: FormGroup;

    isCBAMProduct: boolean = true;

    productCategoryList: any[];
    productTypeList: any[];

    productAndServiceResponse = new ProductAndService();

    isEqual: boolean;
    initialObject: any;

    productCodeLabel: string;

    pageTitle: string;
    action: string;
    id: number;
    source: string;

    maxLength: number = 500;

    categorySearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    productTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;
    emfFormData: any;

    constructor(
        private formBuilder: FormBuilder,
        private renderer: Renderer2,
        private storageService: StorageService,
        private productAndServiceController: ProductAndServiceController,
        private toastrService: ToastrService,
        public tSCCommonService: TSCCommonService,
        private dialogRef: MatDialogRef<CreateUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private accountingPreferenceService: AccountingPreferenceService
    ) {
        dialogRef.disableClose = true;
        this.action = this.data['action'];
        this.id = this.data['id'];
        this.source = this.data['source'];
    }

    ngOnInit(): void {
        this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));
        this.rootOrgID = parseInt(this.storageService.getStorage('rootOrgID'));
        this.getAccountingPreferenceByID();

        if (this.action.toLowerCase() == FormAction.CREATE.toLowerCase()) {
            this.pageTitle = 'Create new';
        } else {
            this.pageTitle = 'Update';
        }

        if (this.action.toLowerCase() == FormAction.UPDATE.toLowerCase()) {
            if (this.isProduct()) {
                this.getProductByID();
            } else if (this.isService()) {
                this.getServiceByID();
            }
        }

        this.formGroupInit();

        if (this.source.toLowerCase() == ProductServiceTabTypeEnum.PRODUCT.toLowerCase()) {
            this.getProductTypeList();
            this.getCategoryList();
            this.productCodeLabel = 'Internal Product Code';
            this.formDataFG.get('isCbamCompliant').addValidators([Validators.required]);
            this.formDataFG.get('isCbamCompliant').updateValueAndValidity();

        } else {
            this.productCodeLabel = 'Internal Service Code';
        }
    }

    isProduct(): boolean {
        return this.source.toLowerCase() == ProductServiceTabTypeEnum.PRODUCT.toLowerCase();
    }

    isService(): boolean {
        return this.source.toLowerCase() == ProductServiceTabTypeEnum.SERVICE.toLowerCase();
    }

    formGroupInit() {
        this.formDataFG = this.formBuilder.group({
            code: [ ,Validators.required],
            name: [, [Validators.required]],
            description: [],
            isCbamCompliant: [],
            productTypeID: [],
            category: [],
            cn: [],
            hsn: [],
            sac: [],
            ean: [],
            upc: [],
            isbn: [],
            aggregatedCode: [{ value: null, disabled: true }],
        });

        if (this.source == ProductServiceTabTypeEnum.PRODUCT) {
            this.formDataFG.controls['productTypeID'].setValidators(Validators.required);
            this.formDataFG.controls['category'].setValidators(Validators.required);
            this.formDataFG.controls['category'].updateValueAndValidity();
        }
    }

    ngAfterViewInit() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);

        this.formDataFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.formDataFG.value));
    }

    async getCategoryList() {
        this.productAndServiceController.getProductCategoryList()
            .subscribe((res: any) => {
                this.productCategoryList = res;
                // ngx mat select search
                this.categorySearchUtil.entityArr = this.productCategoryList;
                console.log(this.categorySearchUtil.filteredEntities, 'final entitty')
                this.categorySearchUtil.createSubscription();
            });
    }

    async getProductTypeList() {
        this.productAndServiceController.getProductTypeList()
            .subscribe((res: any) => {
                this.productTypeList = res;
                // ngx mat select search
                this.productTypeSearchUtil.entityArr = this.productTypeList;
                this.productTypeSearchUtil.createSubscription();
            });
    }

    checkValue(event) {
        if (event.value) {
            this.formDataFG.controls['cn'].setValidators(Validators.required);
        } else {
            this.formDataFG.controls['cn'].clearValidators();
        }
        this.formDataFG.controls['cn'].updateValueAndValidity();
    }

    getProductByID() {
        this.productAndServiceController.getProductByID(this.currentOrgID, this.id).subscribe(response => {
            this.productAndServiceResponse = response;
            this.patchFormGroup();
        }, error => {
            console.log('error in getProductDetails -', error);
        });
    }

    getServiceByID() {
        this.productAndServiceController.getServiceByID(this.currentOrgID, this.id).subscribe(response => {
            this.productAndServiceResponse = response;
            this.patchFormGroup();
        }, error => {
            console.log('error in getServiceDetails -', error);
        });
    }

    patchFormGroup() {
        this.formDataFG.patchValue({
            code: this.productAndServiceResponse['code'],
            name: this.productAndServiceResponse['name'],
            description: this.productAndServiceResponse['description'],
            isCbamCompliant: this.productAndServiceResponse['isCbamCompliant'],
            cn: this.productAndServiceResponse['cn'],
            hsn: this.productAndServiceResponse['hsn'],
            sac: this.productAndServiceResponse['sac'],
            ean: this.productAndServiceResponse['ean'],
            upc: this.productAndServiceResponse['upc'],
            isbn: this.productAndServiceResponse['isbn'],
            productTypeID: this.productAndServiceResponse['productTypeID'],
            category: this.productAndServiceResponse['categoryID'],
            aggregatedCode: this.productAndServiceResponse['aggregatedCode']
        });
        this.validateCBAMProduct();
        this.initialObject = this.formDataFG.value;
        this.isEqual = true;
    }

    submit() {
        if (this.action.toLowerCase() == FormAction.CREATE.toLowerCase()) {
            if (!this.validateForm()) return;
            this.handleCreateAction();
        } else if (this.action.toLowerCase() == FormAction.UPDATE.toLowerCase()) {
            if (!this.validateForm()) return;
            this.handleUpdateAction();
        }
    }

    validateForm() {
        if (this.formDataFG.invalid) {
            this.formDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        }
        return true;
    }

    handleCreateAction() {
        if (this.source.toLowerCase() == ProductServiceTabTypeEnum.PRODUCT.toLowerCase()) {
            this.createProduct();
        } else if (this.source == ProductServiceTabTypeEnum.SERVICE) {
            this.createService();
        } else {
            console.log('error in create source');
        }
    }

    handleUpdateAction() {
        if (this.source.toLowerCase() == ProductServiceTabTypeEnum.PRODUCT.toLowerCase()) {
            this.updateProduct();
        } else if (this.source == ProductServiceTabTypeEnum.SERVICE) {
            this.updateService();
        } else {
            console.log('error in update data');
        }
    }

    createProduct() {
        this.productAndServiceController.createProduct(this.currentOrgID, this.formDataFG.getRawValue()).subscribe((response) => {
            this.id = response['response']['id'];
            this.handleEMFMetadata(response['response']['sourceTypeID']);
        }, error => {
            console.log('error in create product() -', error);
        });
    }

    handleEMFMetadata(sourceTypeID?: string | number) {
        if (!this.emfFormData) {
            this.dialogRef.close(DialogEnum.SUCCESS_DR);
            return;
        }
        this.emfFormData['sourceID'] = this.id;
        this.emfFormData['sourceTypeID'] = sourceTypeID;
        if (this.emfFormData['id']) {
            this.updateProductEMFMetadata();
        } else {
            this.createProductEMFMetadata();
        }
    }

    updateProductEMFMetadata() {
        this.productAndServiceController.updateProductEMFMetadata(this.currentOrgID, this.id, this.emfFormData, this.emfFormData['id']).subscribe(res => {
            this.dialogRef.close(DialogEnum.SUCCESS_DR);
        });
    }

    createProductEMFMetadata() {
        this.productAndServiceController.createProductEMFMetadata(this.currentOrgID, this.id, this.emfFormData, this.source.toLowerCase()).subscribe(res => {
            this.dialogRef.close(DialogEnum.SUCCESS_DR);
        });
    }

    createService() {
        this.productAndServiceController.createService(this.currentOrgID, this.formDataFG.getRawValue()).subscribe((response) => {
            this.id = response['response']['id'];
            this.handleEMFMetadata(response['response']['sourceTypeID']);
            this.dialogRef.close(DialogEnum.SUCCESS_DR);
        }, error => {
            console.log('error in create service() -', error);
        });
    }

    updateProduct() {
        this.productAndServiceController.updateProduct(this.currentOrgID, this.formDataFG.getRawValue(), this.id).subscribe((response) => {
            this.id = response['response']['id'];
            this.handleEMFMetadata(response['response']['sourceTypeID']);
            // this.dialogRef.close(DialogEnum.SUCCESS_DR);
        }, error => {
            console.log('error in update product() -', error);
        });
    }

    updateService() {
        this.productAndServiceController.updateService(this.currentOrgID, this.formDataFG.getRawValue(), this.id).subscribe((response) => {
            this.handleEMFMetadata(response['response']['sourceTypeID']);
            // this.dialogRef.close(DialogEnum.SUCCESS_DR);
        }, error => {
            console.log('error in update service() -', error);
        });
    }

    onCnInput(event) {
        if (this.formDataFG.get('cn').value != null) {
            this.productAndServiceController.getCnAggerated(LookupCodeEnum.CN_CODE, event.target.value.trim()).subscribe(res => {
                this.formDataFG.patchValue({
                    aggregatedCode: res['name']
                });
            })
        }
    }

    charactersRemainingFn = (fg: FormGroup): number => {
        let description = fg.get('description').value;
        if (description) return (this.maxLength - description.length);
        else return this.maxLength;
    }

    public errorHandling = (control: string, error: string) => {
        return this.formDataFG.controls[control].hasError(error);
    }

    public radioGroupHasError = (control: string, error: string) => {
        return this.formDataFG.controls[control].hasError(error) && this.formDataFG.controls[control].touched;
    }

    async getAccountingPreferenceByID() {
        let accountingPreferenceM = <AccountingPreferenceM>await this.accountingPreferenceService.getAccountingPreferenceByOrgID(this.rootOrgID);
        this.isCBAMProduct = accountingPreferenceM?.isProductEmbeddedEmission;
    }

    validateCBAMProduct() {
        const cbamCompliantControl = this.formDataFG.controls['isCbamCompliant'];
        if (this.isFinishedProduct() && (this.isSoldProduct() || this.isTradedProduct())) {
            cbamCompliantControl.enable();
        } else {
            cbamCompliantControl.setValue(false);
            cbamCompliantControl.disable();
        }
    }

    isFinishedProduct(): boolean {
        const categoryID = this.formDataFG.get('category').value;
        const category = this.productCategoryList.find(x => x.keyID === 'finished-product');
        return categoryID.includes(category.id);
    }

    isSoldProduct(): boolean {
        const productID = this.formDataFG.get('productTypeID').value;
        const product = this.productTypeList.find(x => x.id === productID);
        const productKey = product?.keyID;

        return productKey === 'sold-product';
    }

    isTradedProduct(): boolean {
        const productID = this.formDataFG.get('productTypeID').value;
        const product = this.productTypeList.find(x => x.id === productID);
        const productKey = product?.keyID;

        return productKey === 'traded-product';
    }

    updateFormData(emfFormData: any) {
        console.log('check emf form data', emfFormData)
        this.emfFormData = emfFormData;
        this.isEqual = false;
        // console.log('Updated Aggregated Form Data:', this.aggregatedFormData);
        // this.formUpdate.emit(this.aggregatedFormData);
    }
}
