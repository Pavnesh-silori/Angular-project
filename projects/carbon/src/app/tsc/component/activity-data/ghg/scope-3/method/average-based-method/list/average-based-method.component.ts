import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


import { FormControl } from '@angular/forms';

// import { globalConstant } from '@rootApp/net-zero/common/global/constant';


import {
    merge,
    fromEvent,
    of as observableOf
} from 'rxjs';

import {
    map,
    startWith,
    switchMap,
    catchError,
} from "rxjs/operators";
import { DeleteDialog } from '@carbon/component/sbti/setting/_shared/delete/delete-dialog.component';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { ScopeWithActivity, ScopeWithActivityM } from '@carbon/model/scope.model';
// import { ActivityService } from '@carbon/service/activity.service';
import { ScopeService } from '@carbon/service/scope.service';



//tsc-library
import { MATERIAL_CONSTANT, TABLE_CONSTANT} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { DateFilterComponent, SearchBarOneComponent } from '@library/tsc-common';
import { ToastrService } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'average-based-method-records',
    templateUrl: './average-based-method.component.html',
    styleUrls: ['./average-based-method.component.scss'],
})
export class AverageBasedMethodComponent implements OnInit, AfterViewInit {

    faEllipsisV = faEllipsisV;

    currentOrgID: any;
    // globalConstant = globalConstant;
    TABLE_CONSTANT = TABLE_CONSTANT;
    CARBON_CONSTANT = CARBON_CONSTANT;
	MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    methodID: any;
    calculationEmissionMethod: any;

    dataSource: MatTableDataSource<any>;
    resultLength: number = 0;
    displayedColumns: string[] = ['recordID', 'transactionDate', 'account', 'supplier', 'amount', 'emissions', 'category', 'activityType', 'action'];

    accountList: any[] = [];
    accountFlag: boolean = false;
    accountFC: FormControl = new FormControl([]);

    activityTypeFC: FormControl = new FormControl();
    activityTypeFlag: boolean;
    activityTypeList: any;
    activityList = [new ScopeWithActivity()];
    activityTypeFormattedList:any;

    prevAccount: any;
    totalAccounts: any;
    all_account_ID: any[];
    all_accounts: any[];
    selected_accounts: any[];
    accountFilterApplied: boolean = false;
     
    searchFlag: boolean = false;
    searchValue: string;

    filterArr: Array<string> = [];

    // @ViewChild('records') records: RecordsComponent;
	@ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('accountBtn') accountBtn: ElementRef;
    // @ViewChild('activityType') activityType: FunnelFilter;

	@ViewChild('filterChild') filterChild: DateFilterComponent;

    constructor(
        public toastrService: ToastrService,
        private storageService: StorageService,
        // private importRecordService: ImportRecordService,
        private dialog: MatDialog,
        // private emissionCalculationMethodService: EmissionCalculationMethodService,
        // private activityService: ActivityService,
        private scopeService: ScopeService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.getImportRecordsAccountByOrg();
        this.getEmissionCalculationMethods();
        this.getactivityTypeName();
        //this.getactivityType(this.scopeKeyID);

    }

    async getactivityTypeName(){
        this.activityList=<ScopeWithActivityM[]>await this.scopeService.getAllScopeWithActivity();
        this.activityTypeList = this.activityList.find(scope => scope.keyID === 'SCOPE3')
      
        this.activityTypeFormattedList = this.activityTypeList?.activity
    ? this.activityTypeList.activity.reduce((formattedList, activity) => {
        formattedList.push({ id: activity.id, value: activity.name });
        return formattedList;
      }, [])
    : [];
        this.activityTypeList = this.activityTypeFormattedList;
        this.activityTypeList.unshift({ id: 'all', value: 'all' })
        console.log('activity Type List',this.activityTypeList)
    }

    getImportRecordsAccountByOrg() {
        // this.importRecordService.getImportRecordsAccountByOrg(this.currentOrgID)
        //     .subscribe((accountRes: any) => {
        //         this.accountList = accountRes;

        //         this.all_accounts = this.accountList;
        //         this.totalAccounts = this.accountList.length;

        //         this.all_account_ID = this.accountList.map(accountList => accountList['name']);
        //         this.all_account_ID.unshift('all');

        //         // Select all accounts initially
        //         this.selected_accounts = this.accountList.map(accountList => accountList);
        //         this.accountFC.patchValue(this.all_account_ID);

        //     },
        //         error => {
        //             console.log('error in getImportRecordsAccountByOrg() -', error);
        //             this.toastrService.openToast('Error', 'Error while fetching account for org', 'error');
        //         });
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

    searchFn(value: string) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        } else {
            this.accountFC.reset(['all']);
            this.selectAllAccount();
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
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

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        fromEvent(this.refreshBtn.nativeElement, "click").subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.accountBtn.nativeElement, "click").subscribe(() => { this.paginator.pageIndex = 0; });

        merge(

            // this.activityType.mono,
            this.paginator.page,
            this.sort.sortChange,
            this.filterChild.emitFilter,
            fromEvent(this.refreshBtn.nativeElement, "click"),
            fromEvent(this.accountBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap((): any => {

                if (this.accountFlag) {
                    if (this.accountFC.value.length == 0) {
                        this.toastrService.openToast('Error', 'Invalid filter for accounts', 'error');
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
                if (this.activityTypeFlag) {
                    if (this.activityTypeFC.value == 'all') { this.activityTypeFlag = false; }
                    else { this.filterArr.push('activityType:' + this.activityTypeFC.value) }
                }

				return [];

                // return this.importRecordService.getImportRecordsByOrg(
                //     this.paginator.pageIndex,
                //     this.paginator.pageSize,
                //     this.sort.active,
                //     this.sort.direction,
                //     this.filterArr,
                //     this.currentOrgID,
                //     this.filterChild.startDate.value, 
				// 	this.filterChild.endDate.value
                // ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = dataSource["totalCount"];
                return dataSource["records"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });

    }

    updateCategorizedRecordsDialog(activityDataID) {
        // let dialogRef;
        // dialogRef = this.dialog.open(UpdateCategorizedRecordsComponent, {
        //     data: {
        //         currentOrgID: this.currentOrgID,
        //         activityDataID: activityDataID
        //     },
        //     minWidth: '600px',
        //     maxWidth: '600px',
        //     height: '100%',
        //     position: { right: '-2px', top: '0px' },
        // });

        // dialogRef.afterClosed().subscribe((closeRes) => {
        //     if (closeRes == 'Success') {
        //         this.refreshBtn.nativeElement.click();
        //     }
        // })
    }

    deleteImportRecord(activityDataID) {
        const message = 'Are you sure you want to delete this record ?';
        const confirmationMsg = "Emissions from this record will also be deleted. This is an irreversible action.";
        const dialogRef = this.dialog.open(DeleteDialog, {
            data: {
                currentOrgID: this.currentOrgID,
                activityDataID: activityDataID,
                message: message,
                confirmationMsg: confirmationMsg,
                type: CARBON_CONSTANT.IMPORT_RECORD_DELETE,
            },
            minWidth: '500px',
            maxWidth: '600px'
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == 'success') {
                    this.refreshBtn.nativeElement.click();
                }
            })
    }

    getEmissionCalculationMethods() {
        // this.emissionCalculationMethodService.getEmissionCalculationMethod(this.currentOrgID).subscribe((getCalculationMethodRes: any) => {
        //     this.calculationEmissionMethod = getCalculationMethodRes;

        //     this.calculationEmissionMethod.forEach((method) => {
        //         if (method.methodID === 11) {
        //             this.methodID = method.methodID;
        //         }
        //     });

        // },
        //     error => {
        //         console.log('error in getEmissionCalculationMethods() -', error);
        //         this.toastrService.openToast(error.error['title'], error.error['message'], error.error['result']);
        //     });
    }

    createImportRequestDialog(methodID) {
        // const dialogRef = this.dialog.open(CreateImportRequestDialogComponent, {
        //     data: {
        //         methodID: methodID,
        //     },
        //     minWidth: '500px',
        //     maxWidth: '600px'
        // });
        // dialogRef.afterClosed()
        //     .subscribe((result) => {
        //         if (result == 'Success') {
        //             console.log("Record create successfully")
        //         }
        //     })
    }


}
