import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControlOptions } from '@angular/forms';
import { Location } from '@angular/common';

import { isEqual } from 'lodash';
import * as moment from 'moment';
import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { CategoryRecordDataM } from '@carbon/model/spend-based.model';
import { CategorizeRecordDialogComponent } from '../categorize-record-dialog/categorize-record-dialog.component';
import { SpendBasedController } from '@carbon/controller/spend-based.controller';
import { EmissionCalculationMethodController } from '@carbon/controller/emission-calculation-method.controller';

import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { CurrencyService } from '@carbon/service/currency.service';
import {
    InvalidForm, MaterialFormFieldAppearance, MatSelectSearchService, TABLE_CONSTANT, MATERIAL_CONSTANT, COMMON_CONSTANT, NocFileUploadEnum, FunnelFilterComponent
} from '@library/tsc-common';
import { DateService } from '@library/date';

@Component({
    selector: 'app-import-data',
    templateUrl: './import-data.component.html',
    styleUrls: ['./import-data.component.scss'],
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false }
        }
    ]
})

export class ImportDataComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    CARBON_CONSTANT = CARBON_CONSTANT;

    currentOrgID: any;
    methodID: any;

    calculationEmissionMethod: any;
    methodName: any;

    configureDataFG: FormGroup;
    categorizeDataFG: FormGroup;

    hasValue: boolean = false;

    progress: any;
    isFileUpload: any;
    fileName: string;
    sampleFileSrc: string;
    uploadedFileName: string;

    isInflation = false;
    inflationPeriods: string[] = [];
    inflationRate: any;

    today: Date = new Date();

    configID: any;

    dataSource: any = []; 
    resultLength: number = 0;
    displayedColumns: string[] = ['includeExcludeRecord', 'recordID', 'transactionDate', 'account', 'supplier', 'amount', 'categorize', 'activity'];
    totalCategorizedRecord: any;
    startRecordDate: any;
    endRecordDate: any;
    categoryCurrencySymbol: any;

    categoryMappingList: any = [];
    activityList: any = [];

    currencySearchUtil: MatSelectSearchService = new MatSelectSearchService(['currencyName', 'currencyCode']);
    activitySearchUtil: any[] = [];
    categorySearchUtil: any[] = [];

    searchFlag: boolean = false;
    searchValue: string;

    filterArr: Array<string> = [];

    previewDataSource: MatTableDataSource<CategoryRecordDataM>;
    previewResultLength: number = 0;
    previewDisplayedColumns: string[] = ['recordID', 'transactionDate', 'account', 'supplier', 'amount', 'categorize', 'activity'];
    previewSearchFlag: boolean = false;
    previewSearchValue: string;
    previewCurrencySymbol: any;

    accountList: any[] = [];
    accountFlag: boolean = false;
    accountFC: FormControl = new FormControl([]);
    prevAccount;
    totalAccounts;
    all_account_ID: any[];
    all_accounts: any[];
    selected_accounts: any[];
    accountFilterApplied: boolean = false;

    initialObject: any;
    isEqual: boolean;

    initialConfigureObject: any;
    isEqualConfigure: boolean;

    previewAccountFlag: boolean = false;
    previewAccountFC: FormControl = new FormControl([]);
    prevAccountForPreview;
    totalAccountsForPreview;
    all_account_IDForPreview: any[];
    all_accountsForPreview: any[];
    selected_accountsForPreview: any[];
    accountFilterAppliedForPreview: boolean = false;

    isConfigEdit: any;
    isCategorizeEdit: any;

    configuredData: any;
    categorizedData: any;

    configuredID: any;
    configMethodID: any;

    isConfigureBack: boolean = false;

    availableForCategorization: any;
    initialConfigureBackObject: any;
    isEqualBackConfigure: boolean;

    showMessage: string = 'NO';

    range: any = [];

    @ViewChild(MatStepper) stepper: MatStepper;
    @ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
    @ViewChild('fileUpload') fileUpload: ElementRef;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('previewRefreshBtn') previewRefreshBtn: ElementRef;
    @ViewChild('paginator', { read: MatPaginator }) paginator: MatPaginator;
    @ViewChild('sort', { read: MatSort }) sort: MatSort;
    @ViewChild('previewPaginator', { read: MatPaginator }) previewPaginator: MatPaginator;
    @ViewChild('previewSort', { read: MatSort }) previewSort: MatSort;
    @ViewChild('accountSelect') accountSelect: FunnelFilterComponent;
    @ViewChild('previewAccountSelect') previewAccountSelect: FunnelFilterComponent;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private location: Location,
        private configureDataFB: FormBuilder,
        private categorizeDataFB: FormBuilder,
        public currencyService: CurrencyService,
        private emissionCalculationMethodController: EmissionCalculationMethodController,
        private spendBasedController: SpendBasedController,
        private toasterService: ToastrService,
        private storageService: StorageService,
        public dateService: DateService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.sampleFileSrc = "assets/files/scope3-spend-based.xlsx";

        this.configureInit();
        this.getCurrency();
        this.categorizeInit();

        this.activatedRoute.queryParams.subscribe((queryParam) => {
            console.log(queryParam);
            if (queryParam.methodID) {
                this.methodID = parseInt(queryParam.methodID);
                this.getEmissionCalculationMethods(this.methodID);
            }
            if (queryParam.configID) {
                this.configuredID = parseInt(queryParam.configID);
            }
            if (queryParam.configMethodID) {
                this.configMethodID = parseInt(queryParam.configMethodID);
                this.getEmissionCalculationMethods(this.configMethodID);
            }
            if (queryParam.isConfigEdit) {
                this.isConfigEdit = queryParam.isConfigEdit;
                this.getConfiguredData(this.configuredID);
            }
            if (queryParam.isCategorizeEdit) {
                this.isCategorizeEdit = queryParam.isCategorizeEdit;
            }
        })
    }

    getEmissionCalculationMethods(methodID) {
        this.emissionCalculationMethodController.getEmissionCalculationMethod(this.currentOrgID).subscribe((getCalculationMethodRes: any) => {
            this.calculationEmissionMethod = getCalculationMethodRes;
            const selectedMethod = this.calculationEmissionMethod.find(method => method.methodID == methodID);
            this.methodName = selectedMethod.methodName;
        }, error => {
            console.log('error in getEmissionCalculationMethods() -', error);
            this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting calculation methods', ToastrColor.ERROR);
        });
    }

    getConfiguredData(configuredID) {
        this.configureDataFG.valueChanges.subscribe(() => { this.isEqualConfigure = isEqual(this.initialConfigureObject, this.configureDataFG.getRawValue()); });
        this.spendBasedController.getImportRecordConfiguredData(this.currentOrgID, configuredID).subscribe(
            (configuredRes) => {
                this.configuredData = configuredRes;
                if (this.configuredData['uploadedFileName'] != null) {
                    this.fileName = this.configuredData['uploadedFileName'];
                }
                if (this.configuredData['configuredData'] != null) {
                    this.inflationRate = this.configuredData['configuredData']['inflation'];
                    this.configuredData['configuredData']['inflation'].forEach((item) => {
                        this.inflation.push(this.configureDataFB.group({ [item.year]: [item.rate, Validators.required] }));
                        this.isInflation = true;
                    });
                }
                this.configureDataFG.patchValue(this.configuredData['configuredData']);
                this.initialConfigureObject = this.configureDataFG.value;
                this.isEqualConfigure = true;
            }, (error) => {
                console.log('Error in getConfigureData() -', error);
                this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting data', ToastrColor.ERROR);
            }
        );
    }

    configureInit() {
        this.configureDataFG = this.configureDataFB.group({
            importName: [, Validators.required],
            currencyUnitID: [, Validators.required],
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            inflation: this.configureDataFB.array([]) // FormArray for inflation rates
        })
    } 

    categorizeInit() {
        this.categorizeDataFG = this.categorizeDataFB.group({
            categoryValues: this.categorizeDataFB.array([]),
            status: [],
        })
    }

    get inflation(): FormArray {
        return this.configureDataFG.get('inflation') as FormArray;
    }

    get startDateValue(): Date {
        return this.configureDataFG.get('startDate').value;
    }

    get categoryValues(): FormArray {
        return this.categorizeDataFG.get('categoryValues') as FormArray;
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (!this.isFileAllowed(file.name)) {
                this.resetFileInput();
                this.toasterService.openToast(ToastrTitle.ERROR, NocFileUploadEnum.INVALID_FILE_TYPE_ERROR, ToastrColor.ERROR);
                return;
            } else if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.resetFileInput();
                this.toasterService.openToast(ToastrTitle.ERROR, NocFileUploadEnum.INVAID_FILE_SIZE_ERROR, ToastrColor.ERROR);
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', () => {
                this.isFileUpload = file;
                this.fileName = file.name;
            });
            reader.addEventListener('loadend', () => this.progress = false);
            reader.addEventListener('abort', () => {
                this.resetFileInput();
                this.toasterService.openToast(ToastrTitle.ERROR, 'Something went wrong!', ToastrColor.ERROR);

            });
            reader.addEventListener('error', () => {
                this.resetFileInput();
                this.toasterService.openToast(ToastrTitle.ERROR, 'Error while uploading file!', ToastrColor.ERROR);
            });
        }
    }

    resetFileInput() {
        this.fileName = null;
        this.isFileUpload = null;
        this.fileUpload.nativeElement.value = null;
    }

    isFileAllowed(fileName: string) {
        let isFileAllowed = false;
        const allowedFiles = ['.xlsx', '.xls'];
        const regex = /(?:\.([^.]+))?$/;
        const extension = regex.exec(fileName);
        if (undefined !== extension && null !== extension) {
            allowedFiles.forEach(extnsn => {
                if (extnsn === extension[0]) {
                    isFileAllowed = true;
                }
            });
        }
        return isFileAllowed;
    }

    isFileUploadBtn(controlName) {
        document.getElementById(controlName).click();
    }

    async getCurrency() {
        this.currencySearchUtil.entityArr = <any>await this.currencyService.getCurrency();
        this.currencySearchUtil.createSubscription();
    }

    getInflationRate() {
        let methodID;
        if (this.methodID) {
            methodID = this.methodID;
        } else if (this.configMethodID) {
            methodID = this.configMethodID;
        }
        this.spendBasedController.getInflationRate(this.currentOrgID, methodID, this.configureDataFG.get('startDate').value, this.configureDataFG.get('endDate').value, this.configureDataFG.get('currencyUnitID').value).subscribe((inflationRes) => {
            this.isInflation = true;
            this.inflationRate = inflationRes['response'];
            this.inflation.clear();
            this.inflationRate.forEach(item => {
                this.inflation.push(this.configureDataFB.group({ [item.year]: [item.rate, Validators.required] }))
            });
        }, error => {
            console.log("error in getting inflation rate -", error);
            this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting inflation rate', ToastrColor.ERROR);
        });
    }

    toFormData() {
        const formData = new FormData();
        if (this.isConfigureBack) {
            formData.append('file', undefined);
        } else {
            formData.append('file', this.isFileUpload);
        }
        formData.append('payload', JSON.stringify(this.configureDataFG.value));
        if (this.methodID) {
            formData.append('methodID', this.methodID);
        }
        if (this.configMethodID) {
            formData.append('methodID', this.configMethodID);
        }
        return formData;
    }

    saveConfigureData() {
        if (this.isFileUpload == null) {
            if (this.configureDataFG.invalid) {
                this.configureDataFG.markAllAsTouched();
                this.toasterService.openToast(ToastrTitle.ERROR, 'Please upload a file and fix the form errors!', ToastrColor.ERROR);
            } else {
                this.toasterService.openToast(ToastrTitle.ERROR, NocFileUploadEnum.NO_FILE, ToastrColor.ERROR);
            }
            return;
        }

        if (this.configureDataFG.invalid) {
            this.configureDataFG.markAllAsTouched();
            this.toasterService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.inflationRate.length > 0 || this.inflationRate.length == 0) {
            this.spendBasedController.saveConfigureData(this.currentOrgID, this.toFormData())
                .subscribe(
                    (configureRes) => {
                        if (configureRes['result'] == 'success') {
                            this.stepper.next();
                            this.configID = configureRes['response']['id'];
                            this.getCategoryRecords(this.configID);
                            this.toasterService.openToast(ToastrTitle.SUCCESS, configureRes['message'], ToastrColor.SUCCESS);
                        }
                    },
                    error => {
                        console.log("error in saveConfigureData() -", error);
                        this.toasterService.openToast(ToastrTitle.ERROR, error.error['message'], ToastrColor.ERROR);
                    }
                );
        }
    }

    gotoBackPage() {
        this.stepper.previous();

        this.isConfigureBack = true;
        this.configureDataFG.valueChanges.subscribe(() => {
            this.isEqualBackConfigure = isEqual(this.initialConfigureBackObject, this.configureDataFG.getRawValue());
        });

        this.initialConfigureBackObject = this.configureDataFG.value;
        this.isEqualBackConfigure = true;
    }

    updateConfiguredData() {
        const configID = (this.isConfigEdit || this.isCategorizeEdit) ? this.configuredID : this.configID;

        if (this.isFileUpload == null && this.configureDataFG.invalid && !this.configuredData) {
            this.configureDataFG.markAllAsTouched();
            this.toasterService.openToast(ToastrTitle.ERROR, 'Please upload a file and fix the form errors!', ToastrColor.ERROR);
        } else if (this.isFileUpload == null && !this.configuredData) {
            this.toasterService.openToast(ToastrTitle.ERROR, 'Please upload a file!', ToastrColor.ERROR);
            return;
        }

        if (this.configureDataFG.invalid) {
            this.configureDataFG.markAllAsTouched();
            this.toasterService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if ((this.isConfigEdit == CARBON_CONSTANT.NO && this.configuredData['configuredData']) || this.isEqualConfigure || this.isEqualBackConfigure) {
            this.stepper.next();
            this.getCategoryRecords(configID);
        } else {
            this.spendBasedController.updateConfiguredData(this.currentOrgID, configID, this.toFormData())
                .subscribe(
                    (getCategorizedRes) => {
                        this.stepper.next();
                        this.getCategoryRecords(configID);
                        this.toasterService.openToast(ToastrTitle.SUCCESS, getCategorizedRes['message'], ToastrColor.SUCCESS);
                    },
                    error => {
                        console.log('Error in saveConfiguredData() -', error);
                        this.toasterService.openToast(ToastrTitle.ERROR, error.error['message'], ToastrColor.ERROR);
                    }
                );
        }
    }

    formatDate(date: Date, control) {
        let formattedDate = moment(date).format("YYYY-MM-DD");
        this.configureDataFG.get(control).patchValue(formattedDate);
    }

    public errorHandling = (control: string, error: string) => {
        return this.configureDataFG.get(control).hasError(error);
    }

    public errorHandlingArray = (index, control: string, error: string) => {
        return this.inflation.controls[index]['controls'][control].hasError(error);
    }

    getConfigAccountList(configID) {
        this.spendBasedController.getConfigAccount(this.currentOrgID, configID)
            .subscribe((accountRes: any) => {
                this.accountList = accountRes;

                this.all_accounts = this.accountList;
                this.totalAccounts = this.accountList.length;
                this.all_account_ID = this.accountList.map(accountList => accountList['name']);
                this.all_account_ID.unshift('all');

                // Select all accounts initially
                this.selected_accounts = this.accountList.map(accountList => accountList);
                this.accountFC.patchValue(this.all_account_ID);

                //For preview
                this.all_accountsForPreview = this.accountList;
                this.totalAccountsForPreview = this.accountList.length;

                this.all_account_IDForPreview = this.accountList.map(accountList => accountList['name']);
                this.all_account_IDForPreview.unshift('all');

                this.selected_accountsForPreview = this.accountList.map(accountList => accountList);
                this.previewAccountFC.patchValue(this.all_account_IDForPreview);
            },
                error => {
                    console.log('error in getConfigAccountList() -', error);
                    this.toasterService.openToast(ToastrTitle.ERROR, 'Error while fetching account', ToastrColor.ERROR);
                });
    }

    selectAllAccount() {
        if (!this.accountFC.value.includes('all') && this.accountFC.value.length > 0) {
            this.accountFC.reset([]);
            this.selected_accounts = [];
        } else {
            this.accountList = this.all_accounts;
            this.totalAccounts = this.all_accounts.length;
            this.selected_accounts = this.accountList.map(accountList => accountList); // Copy all accounts to selected_accounts
            this.accountFC.patchValue(this.all_account_ID); // Select all account IDs
        }
    }

    selectAccount(account) {
        const index = this.selected_accounts.indexOf(account);
        if (index >= 0) {
            this.selected_accounts.splice(index, 1);
        } else {
            this.selected_accounts.push(account);
        }
        const k = this.accountFC.value.indexOf('all');
        if (k > -1) {
            if (this.selected_accounts.length < this.totalAccounts) {
                this.accountFC.patchValue(this.selected_accounts.map(account => account['name']));
            } else {
                this.accountFC.patchValue([]);
            }
        } else {
            if (this.selected_accounts.length === this.totalAccounts) {
                this.accountFC.patchValue(this.all_account_ID);
            }
        }
    }

    categorizeSearchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
            this.accountFC.reset(['all']);
            this.selectAllAccount();
            this.paginator.pageIndex = 0;
        } else {
            this.searchFlag = false;
        }
        this.previewRefreshBtn.nativeElement.click();
    }

    resetOnNoChange(event) {
        if (event) {
            this.prevAccount = this.accountFC.value;
            this.accountFilterApplied = false;
        } else {
            if (this.prevAccount != this.accountFC.value && !this.accountFilterApplied) {
                this.accountFC.patchValue(this.prevAccount, { onlySelf: true });
            }
        }
    }

    getCategoryRecords(configID) {
        this.categoryValues.clear();

        this.categoryValues.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.categoryValues.value));

        this.getConfigAccountList(configID);

        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        fromEvent(this.refreshBtn.nativeElement, "click").subscribe(() => this.previewPaginator.pageIndex = 0);

        this.getCategoryMapping();
        const methodID = (this.isConfigEdit || this.isCategorizeEdit) ? this.configMethodID : this.methodID;
        this.getActivities(methodID);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.accountSelect.multi,
            fromEvent(this.refreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap((): any => {
                if (this.accountFlag) {
                    if (this.accountFC.value.length == 0) {
                        this.toasterService.openToast(ToastrTitle.ERROR, 'Invalid filter for accounts', ToastrColor.ERROR);
                        return [];
                    }
                }
                this.filterArr = [];
                if (this.searchFlag) {
                    this.filterArr.push("search:" + this.searchValue);
                }
                if (this.accountFlag) {
                    let selected_accounts = this.accountFC.value.length - 1;
                    if (selected_accounts == this.totalAccounts) {
                        this.accountFlag = false;
                    } else {
                        this.filterArr.push('account:' + this.accountFC.value);
                    }
                }
                return this.spendBasedController.getCategoryRecords(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.filterArr,
                    this.currentOrgID,
                    configID
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null) {
                    this.resultLength = 0;
                    return [];
                }
                this.totalCategorizedRecord = dataSource["totalCategorizedRecord"];
                this.startRecordDate = dataSource["startDate"];
                this.endRecordDate = dataSource["endDate"];
                this.resultLength = dataSource["totalCount"];
                this.categoryCurrencySymbol = dataSource['currencySymbol'];
                return dataSource["record"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
            // if (this.categoryMappingList.length == 0) {
            //     this.getCategoryMapping();
            //     const methodID = (this.isConfigEdit || this.isCategorizeEdit) ? this.configMethodID : this.methodID;
            //     this.getActivities(methodID);
            // }
            if (this.categoryMappingList.length != 0) {
                this.createCategorySearchList();
                this.createActivitySearchList();
            }

            for (const record of dataSource) {
                const transactionDate = record["transactionDate"];
                if (transactionDate >= this.startRecordDate && transactionDate <= this.endRecordDate) {
                    this.showMessage = "NO";
                } else {
                    this.showMessage = "YES";
                    break;
                }
            }

            this.range = [];
            for (let i = (this.paginator.pageIndex * this.paginator.pageSize); i < this.paginator.pageSize * (this.paginator.pageIndex + 1); i++) {
                this.range.push(i);
            }
            dataSource.forEach((record, index) => {

                const pageIndex = this.paginator.pageIndex;
                const pageSize = this.paginator.pageSize;
                record['index'] = this.range[index];
                let matchId = false;
                this.categoryValues?.getRawValue()?.forEach((item) => {
                    if (item.recordID == record.recordID) matchId = true
                });

                if (!matchId) this.categoryValuesArray(record);
            });

            //Update the initialObject to match the current state of the categoryValues FormArray.
            this.initialObject = this.categoryValues.value;
            this.isEqual = true;
        });
    }

    getenableRecordFormControl(recordID: number): FormControl {
        const index = this.categoryValues.controls.findIndex(
            (control) => control.get('recordID').value === recordID
        );
        return this.categoryValues.controls[index].get('enableRecord') as FormControl;
    }

    categoryValuesArray(record) {
        this.categoryValues.push(this.categorizeDataFB.group({
            id: [record.id],
            recordID: [record.recordID],
            categoryStdID: [record.categoryStdID],
            activityStdID: [record.activityStdID],
            recordKey: [],
            rememberPreference: [],
            enableRecord: [record.enableRecord],
        }, { validator: this.dependentCategoryValues } as AbstractControlOptions));
    }

    recordAvailableForCategorization(transactionDate): string {
        if (transactionDate >= this.startRecordDate && transactionDate <= this.endRecordDate) {
            this.availableForCategorization = CARBON_CONSTANT.YES;
        } else {
            this.availableForCategorization = CARBON_CONSTANT.NO;
        }
        return this.availableForCategorization;
    }

    applyAccountFilter() {
        if (this.accountFC.value.length == 0) {
            return;
        }
        this.accountFilterApplied = true;
        if (this.accountFC.value.includes('all')) {
            this.accountFlag = false;
            return;
        }
    }

    getCategoryMapping() {
        this.spendBasedController.getCategoryMapping(this.currentOrgID).subscribe(
            (categoryMappingRes) => {
                this.categoryMappingList = categoryMappingRes.map((item) => {
                    const name = `${item.databaseName} > ${item.categoryName}`;
                    return { id: item.id, name: name };
                });

                // Create an instance of NgxMatSelectSearchUtility for each row
                // if (this.categoryMappingList.length != 0) {
                //     for (let i = 0; i < this.resultLength; i++) {
                //         let searchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
                //         searchUtil.entityArr = this.categoryMappingList;
                //         searchUtil.createSubscription();
                //         this.categorySearchUtil.push(searchUtil);
                //     }
                // }
            },
            (error) => {
                console.log('error in getCategoryMapping() -', error);
                this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting category mapping list', ToastrColor.ERROR);
            }
        );
    }

    createCategorySearchList() {
        if (this.categoryMappingList.length != 0) {
            for (let i = 0; i < this.resultLength; i++) {
                let searchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
                searchUtil.entityArr = this.categoryMappingList;
                searchUtil.createSubscription();
                this.categorySearchUtil.push(searchUtil);
            }
        }
    }
 
    createActivitySearchList() {
        for (let i = 0; i < this.resultLength; i++) {
            let searchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
            searchUtil.entityArr = this.activityList;
            searchUtil.createSubscription();
            this.activitySearchUtil.push(searchUtil);
        }
    }

    getActivities(methodID) {
        this.spendBasedController.getActivities(this.currentOrgID, methodID).subscribe(
            (activityRes) => {
                this.activityList = activityRes;
                // for (let i = 0; i < this.resultLength; i++) {
                //     let searchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
                //     searchUtil.entityArr = this.activityList;
                //     searchUtil.createSubscription();
                //     this.activitySearchUtil.push(searchUtil);
                // }
            },
            (error) => {
                console.log('error in getActivities() -', error);
                this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting activity list', ToastrColor.ERROR);
            }
        );
    }

    preferneceModel(recordID, categoryStdID, activityStdID, index) {
        if (categoryStdID && activityStdID) {
            const dialogRef = this.dialog.open(CategorizeRecordDialogComponent, {
                data: {
                    orgID: this.currentOrgID,
                    recordID: recordID,
                    categoryStdID: categoryStdID,
                    activityStdID: activityStdID,
                },
                minWidth: '500px',
                maxWidth: '600px'
            });
            dialogRef.afterClosed()
                .subscribe((closeRes) => {
                    if (closeRes['result'] == 'userPreferenceCategorySaved') {
                        this.categoryValues.controls[index].get('recordKey').setValue(closeRes['preferenceCategory']);
                        this.categoryValues.controls[index].get('rememberPreference').setValue(closeRes['rememberChoice']);
                        this.updateRecordsAsPreferenceSelected(closeRes['preferenceCategory'], recordID, categoryStdID, activityStdID)
                    }
                })
        }
    }

    updateRecordsAsPreferenceSelected(preference, recordID, category, activity) {
        let record = this.dataSource.find(item => item.recordID === recordID);
        let recordList: any[] = [];
        if (preference == 'account') {
            let accountName = record.account;
            recordList = this.dataSource.filter(items => items.account == accountName);
        } else {
            let supplierName = record.supplier;
            recordList = this.dataSource.filter(items => items.supplier == supplierName);
        }
        for (let i = 0; i < recordList.length; i++) {
            let updateRecord = this.recordAvailableForCategorization(recordList[i].transactionDate);
            if (updateRecord == "YES") {
                this.categoryValues.controls.find((control: FormGroup) => {
                    return control.value.recordID === recordList[i].recordID;
                }).patchValue({
                    categoryStdID: category,
                    activityStdID: activity
                });
            }
        }
    }

    dependentCategoryValues(group) {
        let categoryID = group.get('categoryStdID');
        let activityID = group.get('activityStdID');
        if ((categoryID.value && activityID.value) || (!categoryID.value && !activityID.value)) {
            categoryID.setErrors(null);
            activityID.setErrors(null);
            return null;
        } else {
            if (!categoryID.value) categoryID.setErrors({ required: true })
            if (!activityID.value) activityID.setErrors({ required: true })
            return { required: true };
        }
    }

    saveCategoryRecordsData(action) {
        if (this.isCategorizeEdit == CARBON_CONSTANT.NO) {
            this.stepper.next();
            this.getImportRecordsPreview(this.configuredID);
        }
        this.categorizeDataFG.patchValue({ status: action });
        let hasValue = false;
        for (const control of this.categoryValues.controls) {
            const categoryStdID = control.get('categoryStdID').value;
            const activityStdID = control.get('activityStdID').value;
            if (categoryStdID && activityStdID) {
                hasValue = true;
                break;
            }
            else {
                hasValue = false;
            }
        }
        if (this.isEqual && action == 'DRAFT' && hasValue && this.categoryValues.valid) {
            this.router.navigate(['/activity-data/spend-based-method/import-history']);
        }
        if (hasValue && this.categoryValues.valid) {
            if (this.isEqual && action == 'DRAFT') {
                this.router.navigate(['/activity-data/spend-based-method/import-history']);
            } else {
                const configID = (this.isConfigEdit || this.isCategorizeEdit) ? this.configuredID : this.configID;
                this.spendBasedController.saveCategoryRecordsData(this.currentOrgID, configID, this.categorizeDataFG.value)
                    .subscribe((categoryRes) => {
                        if (categoryRes['result'] == 'success') {
                            if (action == 'DONE') {
                                this.stepper.next();
                            } else if (action == 'DRAFT') {
                                this.router.navigate(['/activity-data/spend-based-method/import-history']);
                            }
                            this.getImportRecordsPreview(configID);
                            this.toasterService.openToast(ToastrTitle.SUCCESS, categoryRes['message'], ToastrColor.SUCCESS);
                        }
                    }, error => {
                        console.log("error in saveCategoryRecordsData() -", error);
                        this.toasterService.openToast(ToastrTitle.ERROR, 'Error in saving category records data', ToastrColor.ERROR);
                    });
            }
        } else {
            this.toasterService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
        }
    }

    previewSearchFn($event) {
        this.previewSearchValue = $event;
        if (this.previewSearchValue.length > 0) {
            this.previewSearchFlag = true;
            this.previewPaginator.pageIndex = 0;
        } else {
            this.previewSearchFlag = false;
        }
        this.previewRefreshBtn.nativeElement.click();
    }

    resetOnNoChangeForPreview(event) {
        if (event) {
            this.prevAccountForPreview = this.previewAccountFC.value;
            this.accountFilterAppliedForPreview = false;
        } else {
            if (this.prevAccountForPreview != this.previewAccountFC.value && !this.accountFilterAppliedForPreview) {
                this.previewAccountFC.patchValue(this.prevAccountForPreview, { onlySelf: true });
            }
        }
    }

    selectAllAccountForPreview() {
        if (!this.previewAccountFC.value.includes('all') && this.previewAccountFC.value.length > 0) {
            this.previewAccountFC.reset([]);
            this.selected_accountsForPreview = [];
        } else {
            this.accountList = this.all_accountsForPreview;
            this.totalAccountsForPreview = this.all_accountsForPreview.length;
            this.selected_accountsForPreview = this.accountList.map(accountList => accountList); // Copy all accounts to selected_accounts
            this.previewAccountFC.patchValue(this.all_account_IDForPreview); // Select all account IDs
        }
    }

    selectAccountForPreview(account) {
        const index = this.selected_accountsForPreview.indexOf(account);
        if (index >= 0) {
            this.selected_accountsForPreview.splice(index, 1);
        } else {
            this.selected_accountsForPreview.push(account);
        }
        const k = this.previewAccountFC.value.indexOf('all');
        if (k > -1) {
            if (this.selected_accountsForPreview.length < this.totalAccountsForPreview) {
                this.previewAccountFC.patchValue(this.selected_accountsForPreview.map(account => account['name']));
            } else {
                this.previewAccountFC.patchValue([]);
            }
        } else {
            if (this.selected_accountsForPreview.length === this.totalAccountsForPreview) {
                this.previewAccountFC.patchValue(this.all_account_IDForPreview);
            }
        }
    }

    applyAccountFilterForPreview() {
        if (this.previewAccountFC.value.length == 0) {
            return;
        }
        this.accountFilterAppliedForPreview = true;
        if (this.previewAccountFC.value.includes('all')) {
            this.previewAccountFlag = false;
            return;
        }
    }

    getImportRecordsPreview(configID) {
        this.previewSort.sortChange.subscribe(() => (this.previewPaginator.pageIndex = 0));
        fromEvent(this.previewRefreshBtn.nativeElement, "click").subscribe(() => this.previewPaginator.pageIndex = 0);
        merge(
            this.previewPaginator.page,
            this.previewSort.sortChange,
            this.previewAccountSelect.multi,
            fromEvent(this.previewRefreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap((): any => {
                if (this.previewAccountFlag) {
                    if (this.previewAccountFC.value.length == 0) {
                        this.toasterService.openToast(ToastrTitle.ERROR, 'Invalid filter for accounts', ToastrColor.ERROR);
                        return [];
                    }
                }
                this.filterArr = [];
                if (this.previewSearchFlag) {
                    this.filterArr.push("search:" + this.previewSearchValue);
                }
                if (this.previewAccountFlag) {
                    let selected_accountsForPreview = this.previewAccountFC.value.length - 1;
                    if (selected_accountsForPreview == this.totalAccountsForPreview) {
                        this.previewAccountFlag = false;
                    } else {
                        this.filterArr.push('account:' + this.previewAccountFC.value);
                    }
                }
                return this.spendBasedController.getImportRecordsPreview(
                    this.previewPaginator.pageIndex,
                    this.previewPaginator.pageSize,
                    this.previewSort.active,
                    this.previewSort.direction,
                    this.filterArr,
                    this.currentOrgID,
                    configID
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((previewDataSource): any => {
                if (previewDataSource === null) {
                    this.previewResultLength = 0;
                    return [];
                }
                this.previewResultLength = previewDataSource["totalCount"];
                this.previewCurrencySymbol = previewDataSource["currencySymbol"];
                return previewDataSource["configRecord"];
            })
        ).subscribe((previewDataSource) => {
            this.previewDataSource = previewDataSource;
        });
    }

    submitPreviewData(status) {
        const configID = (this.isConfigEdit || this.isCategorizeEdit) ? this.configuredID : this.configID;
        this.spendBasedController.submitPreviewData(this.currentOrgID, configID, status)
            .subscribe((previewRes) => {
                this.toasterService.openToast(ToastrTitle.SUCCESS, previewRes['message'], ToastrColor.SUCCESS);
            }, error => {
                console.log("error in submitPreviewData() -", error);
                this.toasterService.openToast(ToastrTitle.ERROR, error.error['message'], ToastrColor.ERROR);
            });
    }

    cancelButtonAction() {
        this.location.back();
    }

}
