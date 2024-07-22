import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { ScopeWithActivityM, ScopeWithActivity } from '@carbon/model/scope.model';
import { UpdateCategorizedRecordsComponent } from '../update-categorized-records/update-categorized-records.component';
import { CreateImportRequestDialogComponent } from '@carbon/component/activity-data/ghg/scope-3/spend-based/create-import-request-dialog/create-import-request-dialog.component';
import { ScopeService } from '@carbon/service/scope.service';
import { SpendBasedController } from '@carbon/controller/spend-based.controller';
import { EmissionCalculationMethodController } from '@carbon/controller/emission-calculation-method.controller';

import {
    TABLE_CONSTANT, MATERIAL_CONSTANT, COMMON_CONSTANT, FunnelFilterComponent, DialogOneComponent, ButtonLabelEnum
} from '@library/tsc-common';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ScopeKeyIDEnum } from '@carbon/enum/scope.enum';
import { DateFilterComponent, DateService } from '@library/date';

@Component({
    selector: 'app-records',
    templateUrl: './records.component.html',
    styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit, AfterViewInit {
    faEllipsisV = faEllipsisV;
    COMMON_CONSTANT = COMMON_CONSTANT;
    CARBON_CONSTANT = CARBON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    currentOrgID: any;

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
    activityTypeFormattedList: any;

    prevAccount: any;
    totalAccounts: any;
    all_account_ID: any[];
    all_accounts: any[];
    selected_accounts: any[];
    accountFilterApplied: boolean = false;

    searchFlag: boolean = false;
    searchValue: string;

    filterArr: Array<string> = [];

    @ViewChild('records') records: RecordsComponent;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('activityType') activityType: FunnelFilterComponent;
    @ViewChild('accountSelect') accountSelect: FunnelFilterComponent;
    @ViewChild('filterChild') filterChild: DateFilterComponent;

    constructor(
        private dialog: MatDialog,
        private spendBasedController: SpendBasedController,
        private emissionCalculationMethodController: EmissionCalculationMethodController,
        private scopeService: ScopeService,
        private toasterService: ToastrService,
        private storageService: StorageService,
        private dateService: DateService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.getImportRecordsAccountByOrg();
        this.getEmissionCalculationMethods();
        this.getactivityTypeName();
        //this.getactivityType(this.scopeKeyID);
    }

    async getactivityTypeName() {
        this.activityList = <ScopeWithActivityM[]>await this.scopeService.getAllScopeWithActivity();
        this.activityTypeList = this.activityList.find(scope => scope.keyID === ScopeKeyIDEnum.SCOPE_3_KEY_ID)

        this.activityTypeFormattedList = this.activityTypeList?.activity
            ? this.activityTypeList.activity.reduce((formattedList, activity) => {
                formattedList.push({ id: activity.id, value: activity.name });
                return formattedList;
            }, [])
            : [];
        this.activityTypeList = this.activityTypeFormattedList;
        this.activityTypeList.unshift({ id: 'all', value: 'all' })
    }

    getImportRecordsAccountByOrg() {
        this.spendBasedController.getImportRecordsAccountByOrg(this.currentOrgID)
            .subscribe((accountRes: any) => {
                this.accountList = accountRes;

                this.all_accounts = this.accountList;
                this.totalAccounts = this.accountList.length;

                this.all_account_ID = this.accountList.map(accountList => accountList['name']);
                this.all_account_ID.unshift('all');

                // Select all accounts initially
                this.selected_accounts = this.accountList.map(accountList => accountList);
                this.accountFC.patchValue(this.all_account_ID);

            }, error => {
                console.log('error in getImportRecordsAccountByOrg() -', error);
                this.toasterService.openToast(ToastrTitle.ERROR, 'Error while fetching account for org', ToastrColor.ERROR);
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

    searchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;

            this.accountFC.reset(['all']);
            this.selectAllAccount();
            this.paginator.pageIndex = 0;
        } else {
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
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
        merge(
            this.activityType.mono,
            this.paginator.page,
            this.sort.sortChange,
            this.filterChild.emitFilter,
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
                if (this.activityTypeFlag) {
                    if (this.activityTypeFC.value == 'all') { this.activityTypeFlag = false; }
                    else { this.filterArr.push('activityType:' + this.activityTypeFC.value) }
                }

                return this.spendBasedController.getImportRecordsByOrg(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.filterArr,
                    this.currentOrgID,
                    this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
                    this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
                ).pipe(catchError(() => observableOf(null)));
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
        let dialogRef;
        dialogRef = this.dialog.open(UpdateCategorizedRecordsComponent, {
            data: {
                currentOrgID: this.currentOrgID,
                activityDataID: activityDataID
            },
            minWidth: '600px',
            maxWidth: '600px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        dialogRef.afterClosed().subscribe((closeRes) => {
            if (closeRes == 'Success') {
                this.refreshBtn.nativeElement.click();
            }
        })
    }

    deleteImportRecord(activityDataID) {
        const message = 'Are you sure you want to delete this record ?';
        const confirmationMsg = "Emissions from this record will also be deleted. This is an irreversible action.";
        const dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'dangerous',
                header: 'Delete record',
                body: message + "\n" + confirmationMsg,
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            },
            minWidth: '500px',
            maxWidth: '600px'
        });

        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.deleteRecord(activityDataID);
            } else {
                console.log("does not works");
            }
        });
    }

    deleteRecord(id) {
        this.spendBasedController.deleteImportRecord(this.currentOrgID, id).subscribe((deleteRes: any) => {
            this.refreshBtn.nativeElement.click();
        }, error => {
            console.log('Error in deleteImportRecord()', error);
        });
    }

    getEmissionCalculationMethods() {
        this.emissionCalculationMethodController.getEmissionCalculationMethod(this.currentOrgID).subscribe((getCalculationMethodRes: any) => {
            this.calculationEmissionMethod = getCalculationMethodRes;

            this.calculationEmissionMethod.forEach((method) => {
                if (method.methodID === 11) {
                    this.methodID = method.methodID;
                }
            });

        }, error => {
            console.log('error in getEmissionCalculationMethods() -', error);
            this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting calculation methods', ToastrColor.ERROR);
        });
    }

    createImportRequestDialog(methodID) {
        const dialogRef = this.dialog.open(CreateImportRequestDialogComponent, {
            data: {
                methodID: methodID,
            },
            minWidth: '500px',
            maxWidth: '600px'
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == 'Success') {
                    console.log("Record create successfully")
                }
            })
    }

}
