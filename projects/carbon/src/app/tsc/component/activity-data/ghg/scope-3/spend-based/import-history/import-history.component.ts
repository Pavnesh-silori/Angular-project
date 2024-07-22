import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { SpendBasedController } from '@carbon/controller/spend-based.controller';

import { StorageService } from '@library/storage-service';
import { TABLE_CONSTANT, COMMON_CONSTANT, DialogOneComponent, ButtonLabelEnum, FunnelFilterComponent } from '@library/tsc-common';
import { ProfileImg, UserService } from '@library/user-service';

@Component({
    selector: 'app-import-history',
    templateUrl: './import-history.component.html',
    styleUrls: ['./import-history.component.scss'],
})
export class ImportHistoryComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    CARBON_CONSTANT = CARBON_CONSTANT;
    ProfileImg = ProfileImg;

    currentOrgID: string;

    faEllipsisV = faEllipsisV;

    dataSource: MatTableDataSource<any>;
    resultLength: number = 0;
    displayedColumns: string[] = ['name', 'type', 'accountingPeriod', 'createdDate', 'uploadedBy', 'categorizedBy', 'status', 'record', 'action'];

    statusList = [
        { key: 'all', value: 'All' },
        { key: 'DRAFT', value: 'Draft' },
        { key: 'DONE', value: 'Done' },
        { key: 'TODO', value: 'To Do' }
    ];

    searchFlag: boolean = false;
    searchValue: string;

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('all');

    filterArr: Array<string> = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('status') status: FunnelFilterComponent;

    constructor(
        private dialog: MatDialog,
        private spendBasedController: SpendBasedController,
        private storageService: StorageService,
        public userService: UserService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
    }

    searchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
            this.statusFC.reset(['all']);
            this.paginator.pageIndex = 0;
        } else {
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
    }

    ngAfterViewInit() {
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        // this.statusSelect.selectionChange.subscribe((event: any) => {
        //     this.searchFlag = false;
        //     this.paginator.pageIndex = 0;
        // });

        // If the user changes the filter, reset back to the first page.
        fromEvent(this.refreshBtn.nativeElement, "click").subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.status.mono,
            fromEvent(this.refreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.filterArr = [];
                if (this.searchFlag) {
                    this.filterArr.push("search:" + this.searchValue);
                }

                if (this.statusFlag) {
                    if (this.statusFC.value == 'all') {
                        this.statusFlag = false;
                    } else {
                        this.filterArr.push('status:' + this.statusFC.value);
                    }
                }

                return this.spendBasedController.getImportRecordHistory(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.filterArr,
                    this.currentOrgID
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = dataSource["totalCount"];
                return dataSource["configRecord"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });

    }

    addStatus(status) {
        if (status == 'all') {
            this.statusFlag = false;
            return;
        }
    }

    deleteImportRecordConfig(configID) {
        const message = 'This action will delete all transactions and emissions associated with those transactions in this import file. This is an irreversible action.';
        const confirmationMsg = "Are you sure you want to continue?";
        const dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'dangerous',
                header: 'Delete import',
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
                this.deleteRecord(configID);
            }
        });
    }

    deleteRecord(id) {
        this.spendBasedController.deleteImportRecordConfig(this.currentOrgID, id).subscribe((deleteRes: any) => {
            this.refreshBtn.nativeElement.click();
        }, error => {
            console.log('Error in deleteImportRecordConfig', error);
        });
    }
}
