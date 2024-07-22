import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { PrecursorCPage, PrecursorEPage } from '@carbon/model/non-ghg.model';

import { NonGhgController } from '@carbon/controller/non-ghg.controller';

//tsc-library
import { StorageService } from '@library/storage-service';
import { DateFilterComponent, DateService, FrequencyEnum } from '@library/date';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, DialogOneComponent, MATERIAL_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
import { ActivityDataController } from '@carbon/controller/activity-data.controller';
// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {

    currentOrgID: any;
    resultLength: any;
    filterArr: Array<string> = [];
    isChecked = false;

    source: string;
    activityKeyID: any;
    dataSource: any;
    selectedRows: any;

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    faPlus = faPlus;
    faFile = faFile;
    faEllipsisV = faEllipsisV;

    searchValue: any
    searchFlag: boolean = false;
    searchArr: any[] = [];
    searchByPlaceHolder: string = 'process name';

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('ALL');
    statusList: any[] = [1, 2, 3];

    numOfRows: number;
    recordID: number[] = [];
    allComplete: boolean = false;
    bulkBtnFlag: boolean = false;

    FrequencyEnum = FrequencyEnum;
    displayedColumns: string[];

    activityConfigID: number[] = [];

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('filterChild') filterChild: DateFilterComponent;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    constructor(
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private storageService: StorageService,
        private dateService: DateService,
        private activityDataController: ActivityDataController,
    ) {
        activatedRoute.queryParams.subscribe((queryParam) => {
            if (queryParam['activityConfigID']) {
                this.activityConfigID = queryParam['activityConfigID'];
            }
        });
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.data.subscribe(data => {
            this.activityKeyID = data.activityKeyID;
            console.log("source", this.activityKeyID)

            if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION) {
                this.source = 'consumed';
                this.displayedColumns = ['recordID', 'reportingPeriod', 'process', 'precursor', 'quantityPrecursorConsumed', 'document', 'edit', 'delete', 'action'];
                this.dataSource = [new PrecursorCPage()]
                this.dataSource.forEach(row => (row['completed'] = false));
            } else if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT) {
                this.source = 'exported';
                this.displayedColumns = ['recordID', 'reportingPeriod', 'process', 'precursor', 'quantityPrecursorExported', 'document', 'edit', 'delete', 'action'];
                this.dataSource = [new PrecursorEPage()]
                this.dataSource.forEach(row => (row['completed'] = false));
            }
        });
        console.log(this.displayedColumns);
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.filterChild.emitFilter,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap(() => {

                this.searchArr = [];
                if (this.searchFlag) {
                    this.searchArr.push('process:' + this.searchValue)
                }

                if (this.activityConfigID.length > 0) {
                    this.filterArr.push('activityConfigID:' + this.activityConfigID);
                }
                
                let startDate = this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD');
                let endDate = this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD');

                return this.activityDataController.getActivityDataByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.currentOrgID,
                    this.activityKeyID,
                    this.filterArr,
                    startDate,
                    endDate,
                    this.isChecked
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource) => {
                if (dataSource == null) {
                    return [];
                }
                this.resultLength = dataSource.totalCount;
                return dataSource.records;
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
            console.log("this.dataSource", this.dataSource)
        });
    }

    searchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        } else {
            this.searchFlag = false;
        }
    }

    updateAllComplete() {
        this.allComplete = this.dataSource.every(row => row['completed']);
        console.log(this.allComplete);
        this.dataSource.filter(row => row['completed']).forEach(row => {
            console.log('Clicked checkbox for:', row);
        });
        this.setBulkButton();
    }

    // someComplete(recordID: number): boolean {
    //     return this.dataSource.some(row => row.recordID == recordID && row['completed']) && !this.allComplete;
    // }

    setAll(completed: boolean) {
        this.allComplete = completed;
        this.dataSource.forEach(row => (row['completed'] = completed));
        this.dataSource.filter(row => row['completed']).forEach(row => {
            console.log('Clicked checkbox for:', row);
        });
        this.setBulkButton();
        console.log(this.allComplete);
    }

    getNumberOfSelectedRows() {
        this.selectedRows = this.dataSource.filter(row => row['completed']);
        return this.selectedRows.length;
    }

    setBulkButton() {
        console.log('number of selected rows', this.getNumberOfSelectedRows());
        if (this.getNumberOfSelectedRows() != 0) {
            this.bulkBtnFlag = true;
            console.log('bulkfalg', this.bulkBtnFlag)
        }
        else {
            this.bulkBtnFlag = false;
            console.log('bulkfalg', this.bulkBtnFlag)
        }
    }

    deleteRows(row, level) {
        if (level == 'bulk') {
            this.recordID = [];
            this.selectedRows.forEach(row => {
                this.recordID.push(row.recordID);
            });
        }
        else {
            this.recordID = [row.recordID];
        }
        console.log('RecordID:', this.recordID);
        const numberOfSelectedRows = this.getNumberOfSelectedRows();
        const dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'dangerous',
                header: `Delete ${numberOfSelectedRows > 1 ? numberOfSelectedRows : ''} CBAM ${numberOfSelectedRows > 1 ? 'records' : 'record'}?`,
                body: `${numberOfSelectedRows > 1 ? 'These' : 'This'} record${numberOfSelectedRows > 1 ? 's' : ''} will be deleted permanently and will not be reflected in any ongoing runs.
                Locked CBAM runs in which ${numberOfSelectedRows > 1 ? 'these' : 'this'} record${numberOfSelectedRows > 1 ? 's were' : ' was'} used wouldn’t be affected. 
        
                <span class="fw-bold">Are you sure you want to continue?</span>`,
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            },
            minHeight: '200px',
            minWidth: '450px'
        });

        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log("delete works");
            }
            else {
                console.log("does not works");
            }
        });
    }
}


