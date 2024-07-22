import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance, TABLE_CONSTANT } from '@library/tsc-common';
import { Location } from '@angular/common';
import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { EmissionMetadatasController } from '@netzero/controller/efdb-metadatas.controller';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { MatSelectChange } from '@angular/material/select';
@Component({
    selector: 'app-preview-record-error',
    templateUrl: './preview-record-error.component.html',
    styleUrls: ['./preview-record-error.component.scss']
})


export class PreviewRecordErrorComponent implements OnInit {

    categorizeDataFG: FormGroup;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    currentOrgID: string | number;

    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    isDisabled: boolean = false;

    displayedColumns: string[] = ['includeExcludeRecord', 'internalCode', 'name', 'description', 'type', 'category', 'isCbamCompliant', 'cnCode', 'hsnCode',
        'eanCode', 'upcCode', 'isbnCode', 'materialType', 'materialOriginType', 'categoryStd'];
    // , 'ukDefra', 'useeio'

    otherColumns: string[] = ['product', 'ukDefra', 'usEeio'];

    @Input() type: string = null;
    @Input('importedRecords') importedRecords: any;
    @Output() previewErrorRecordsEmit = new EventEmitter<any>();

    productCategoryList: any[];
    productTypeList: any[];

    productCategorySearchUtil: MatSelectSearchService[] = [];
    productTypeSearchUtil: MatSelectSearchService[] = [];

    TABLE_CONSTANT = TABLE_CONSTANT;

    recordsKeys: string[] = [];
    maxLength: number = 500;
    remainingChars: number = this.maxLength;
    dataSource: any[] = [];
    headers: string[] = [];
    FormErrorEnum = FormErrorEnum;

    materialTypes: any[] = [];
    materialOriginTypes: any[] = [];
    categoryTypes: any[] = [];

    materialTypeSearchUtil: MatSelectSearchService[] = [];
    materialOriginTypeSearchUtil: MatSelectSearchService[] = [];
    categoryTypeSearchUtil: MatSelectSearchService[] = [];

    // validationError: string[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private location: Location,
        private productAndServiceController: ProductAndServiceController,
        private toasterService: ToastrService,
        private emissionMetadatasController: EmissionMetadatasController

    ) { }

    ngOnInit(): void {
        this.dataSource = this.importedRecords['records'];
        this.headers = this.importedRecords['headers'];
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.initializeData();
    }

    async initializeData(): Promise<void> {
        await Promise.all([
            this.getMaterialTypes(),
            this.getCategoryTypes(),
            this.getCategoryList(),
            this.getProductTypeList(),
        ]);
        this.categorizeInit();

    }

    cancelBtn() {
        this.location.back();
    }

    submit(_action: string) {

        // this.categorizeDataFG.markAllAsTouched();
        // if (this.categorizeDataFG.invalid) {
        //     return;
        // }
        this.saveRecords();
    }

    saveRecords() {
        try {
            const selectedRecords = this.categoryValues.controls
                .filter(control => control.get('enableRecord').value as boolean)
                .map(control => control.value);

            const recordsData = { records: selectedRecords, headers: this.headers, displayedColumns: this.getDisplayColumnList(), otherColumns: this.getOtherHeaders() };

            const formData = {
                records: selectedRecords,
                headers: this.headers,
            }

            this.productAndServiceController.bulkValidateRecords(this.currentOrgID, 'product', formData)
                .subscribe((response) => {
                    if (response['title'] == 'Success') {
                        if (this.hasValidationErrorInResponse(response['response'])) {
                            this.toasterService.openToast(ToastrTitle.ERROR, 'Validation Error', ToastrColor.ERROR);
                        } else {
                            this.toasterService.openToast(ToastrTitle.SUCCESS, response['message'], ToastrColor.SUCCESS);
                            this.previewErrorRecordsEmit.emit(recordsData);
                        }
                    } else if (response['title'] == 'Error') {
                        this.toasterService.openToast(ToastrTitle.ERROR, response['message'], ToastrColor.ERROR);
                    }
                });
        } catch (error) {
            console.log("error", error);
        }
    }

    categorizeInit() {
        try {
            this.categorizeDataFG = this.formBuilder.group({
                categoryValues: this.formBuilder.array([]),
                status: [],
            });
            if (this.dataSource?.length) {
                const categoryValues = this.categorizeDataFG.get('categoryValues') as FormArray;
                const record = this.dataSource[0];
                this.recordsKeys = Object.keys(record);

                this.dataSource.forEach(record => {
                    categoryValues.push(this.createProductForm(record));
                });
            }

            this.categorizeDataFG.markAllAsTouched();
        } catch (error) {
            console.log('error in categorizeInit -', error);
        }

    }

    createProductForm(record) {
        return this.formBuilder.group({
            code: [record['code'], Validators.required],
            name: [record['name'], Validators.required],
            description: record['description'],
            isCbamCompliant: [record['isCbamCompliant'], Validators.required],
            cn: record['cn'],
            hsn: record['hsn'],
            sac: record['sac'],
            ean: record['ean'],
            upc: record['upc'],
            isbn: record['isbn'],
            productTypeID: [record['productTypeID'], Validators.required],
            productTypeName: record['productTypeName'],
            category: [record['category'], Validators.required],
            categoryName: [record['categoryName'], Validators.required],

            enableRecord: [true],
            materialTypeID: record['materialTypeID'],
            materialTypeName: record['materialTypeName'],
            materialOriginTypeID: record['materialOriginTypeID'],
            materialOriginTypeName: record['materialOriginTypeName'],
            categoryStdID: record['categoryStdID'],
            categoryStdName: record['categoryStdName'],
        });
    }

    get categoryValues(): FormArray {
        return this.categorizeDataFG.get('categoryValues') as FormArray;
    }

    getenableRecordFormControl(recordID: number): FormControl {
        const index = this.categoryValues.controls.findIndex(
            (control) => control.get('recordID').value === recordID
        );
        return this.categoryValues.controls[index].get('enableRecord') as FormControl;
    }

    async getCategoryList() {
        try {
            this.productAndServiceController.getProductCategoryList()
                .subscribe((res: any) => {
                    this.productCategoryList = res;
                    this.dataSource.forEach(() => {
                        let searchUtil2: MatSelectSearchService = new MatSelectSearchService(['name']);
                        searchUtil2.entityArr = this.productCategoryList;
                        searchUtil2.createSubscription();
                        this.productCategorySearchUtil.push(searchUtil2);
                    });
                });
        } catch (error) {
            console.log('error in getCategoryList -', error);
        }
    }

    async getProductTypeList() {
        try {
            this.productAndServiceController.getProductTypeList()
                .subscribe((res: any) => {
                    this.productTypeList = res;
                    // ngx mat select search
                    this.dataSource.forEach(() => {
                        let searchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
                        searchUtil.entityArr = this.productTypeList;
                        searchUtil.createSubscription();
                        this.productTypeSearchUtil.push(searchUtil);
                    });
                });
        } catch (error) {
            console.log('error in getProductTypeList -', error);
        }
    }

    gotoBackPage() {
        this.location.back();
    }

    getDisplayColumnList(): any {
        // return ['internalCode'];
        if (!this.showUkDefra()) {
            this.displayedColumns = this.displayedColumns.filter(column => column !== 'materialType');
            this.displayedColumns = this.displayedColumns.filter(column => column !== 'materialOriginType');
        }
        if (!this.showUSEEIO()) {
            this.displayedColumns = this.displayedColumns.filter(column => column !== 'categoryStd');
        }

        return this.displayedColumns;
    }

    showColumn(column: string): boolean {
        return this.getDisplayColumnList().includes(column);
    }

    isbnCodeChanged() {
        console.log('isbnCodeChanged', this.categorizeDataFG);
    }

    updateRemainingChars(event: Event) {
        const input = event.target as HTMLTextAreaElement;
        this.remainingChars = this.maxLength - input.value.length;
    }

    hasValidationErrorInResponse(records): boolean {
        return records.some(record => !record['validator']['valid']);
    }

    hasValidationError2(formGroup: FormGroup, key: string, error: string): boolean {
        const control = formGroup.get(key); // Navigate to the nested control
        if (!control) {
            console.error('Control not found:', key);
            return false;
        }
        return control.hasError(error); // Check if the nested control has the specified error
    }

    hasValidationError(record, key, formControl: FormControl): boolean {
        const recordValue = record[key];
        const controlValue = formControl?.value[key];
        if (recordValue == controlValue && record['validator'][key]) {
            return true;
        } else {
            return false;
        }
    }

    showUkDefra(): boolean {
        return this.headers.includes('material type');
    }

    showUSEEIO(): boolean {
        return this.headers.includes('category');
    }

    getOtherHeaders(): any {
        if (!this.showUSEEIO()) {
            this.otherColumns = this.otherColumns.filter(column => column !== 'category');
        }
        if (!this.showUkDefra()) {
            this.otherColumns = this.otherColumns.filter(column => column !== 'material type');
        }
        if (!this.showUSEEIO() && !this.showUkDefra()) {
            this.otherColumns = [];
        }
        return this.otherColumns;
    }

    async getMaterialTypes() {
        try {
            this.emissionMetadatasController.getMaterialTypes(this.currentOrgID, ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES, "uk-government-ghg-conversion-factors-for-company-reporting")
                .subscribe((res: any) => {
                    this.materialTypes = res;
                    for (let i = 0; i < this.dataSource.length; i++) {
                        let searchUtil3: MatSelectSearchService = new MatSelectSearchService(['name']);
                        searchUtil3.entityArr = this.materialTypes;
                        searchUtil3.createSubscription();
                        this.materialTypeSearchUtil.push(searchUtil3);

                        if (this.dataSource[i]?.materialTypeID) {
                            const materialType = this.materialTypes.find(mt => mt.id === this.dataSource[i]?.materialTypeID);
                            if (materialType) {
                                let searchUtil4: MatSelectSearchService = new MatSelectSearchService(['name']);
                                searchUtil4.entityArr = materialType.originType;
                                searchUtil4.createSubscription();
                                this.materialOriginTypeSearchUtil.push(searchUtil4);
                            }
                        }
                        else {
                            let searchUtil4: MatSelectSearchService = new MatSelectSearchService(['name']);
                            searchUtil4.entityArr = [];
                            searchUtil4.createSubscription();
                            this.materialOriginTypeSearchUtil.push(searchUtil4);
                        
                        }
                    }
                });
        } catch (error) {
            console.log('error in getMaterialTypes -', error);
        }

    }

    async materialTypeChanged(event: MatSelectChange, i: number) {
        // this.materialOriginTypes = [];
        const materialType = this.materialTypes.find(mt => mt?.id === event?.value);
        if (materialType) {
            let materialOriginTypes = materialType?.originType;
            this.materialOriginTypeSearchUtil[i].entityArr = materialOriginTypes;
            this.materialOriginTypeSearchUtil[i].createSubscription();
        }
    }

    async getCategoryTypes() {
        this.emissionMetadatasController.getCategory(this.currentOrgID, ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES, "us-eeio")
            .subscribe((res: any) => {
                this.categoryTypes = res;
                this.dataSource.forEach(() => {
                    let searchUtil5: MatSelectSearchService = new MatSelectSearchService(['name']);
                    searchUtil5.entityArr = this.categoryTypes;
                    searchUtil5.createSubscription();
                    this.categoryTypeSearchUtil.push(searchUtil5);
                });
            });
    }

    validateCBAMProduct() {

    }

    productChanged(control: FormGroup) {
        const id = control.get('productTypeID')?.value;
        const productType = this.productTypeList.find(pt => pt.id === id);
        control.get('productTypeName')?.setValue(productType?.name ?? '');
    }

    categoryChanged(control: FormGroup) {
        const ids = control.get('category').value; // Assuming this is now an array of IDs
        if (ids && ids.length) {
            const categories = ids.map(id =>
                this.productCategoryList.find(pc => pc.id === id)?.name // Find each category by ID and return its name
            ).filter(name => name !== undefined); // Filter out any undefined values (in case an ID wasn't found)

            control.get('categoryName').setValue(categories); // Set the array of names to the 'category' control
        }
    }

    materialTypeChangedInForm(control: FormGroup) {
        const id = control.get('materialTypeID')?.value;
        const materialType = this.materialTypes.find(mt => mt.id === id);
        control.get('materialTypeName')?.setValue(materialType?.name ?? '');
    }

    materialOriginTypeChangedInForm(control: FormGroup) {
        const materialTypeID = control.get('materialTypeID').value;
        if (!materialTypeID) return;

        const materialType = this.materialTypes.find(mt => mt.id === materialTypeID);
        if (!materialType) return;

        const id = control.get('materialOriginTypeID').value;
        const materialOriginType = materialType.originType.find(mot => mot.id === id);
        if (!materialOriginType) return;

        control.get('materialOriginTypeName').setValue(materialOriginType.name);
    }

    categoryTypeChangedInForm(control: FormGroup) {
        const id = control.get('categoryStdID')?.value;
        const categoryType = this.categoryTypes.find(ct => ct.id === id);
        control.get('categoryStdName')?.setValue(categoryType?.name ?? '');
    }

}