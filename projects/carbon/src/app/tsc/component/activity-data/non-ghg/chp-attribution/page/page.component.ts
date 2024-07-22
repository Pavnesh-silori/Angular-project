import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';

import { ChpPageM, ChpPage } from '@carbon/model/non-ghg.model';
import { ActivityDataController } from '@carbon/controller/activity-data.controller';

import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.component'; 

//tsc-library
import { StorageService } from '@library/storage-service';
import { DateFilterComponent, DateFormatEnum, DateService, FrequencyEnum } from '@library/date';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, DialogOneComponent, MATERIAL_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';
import { ActivityService } from '@carbon/service/activity.service';
// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {

    currentOrgID: any;

    activityKeyID: any;
    activityID: any;
    allActivities: any;
    activity: any;

    filterArr: Array<string> = [];
    isChecked = false;
    resultLength: any;

    dataSource: ChpPageM[] = [new ChpPage()];
    selectedRows: ChpPageM[] = [];

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    ButtonTooltipEnum = ButtonTooltipEnum;

    faPlus = faPlus;
    faFile = faFile;
    faEllipsisV = faEllipsisV;

    numOfRows: number;
    recordID: number[] = [];
    allComplete: boolean = false;
    bulkBtnFlag: boolean = false;

    searchValue: any
    searchFlag: boolean = false;

    activityConfigID: number[] = [];

    displayedColumns: string[] = ['recordID', 'reportingPeriod', 'electricityGenerated', 'heatGenerated', 'document', 'option'];

    dateFlag: boolean = true;
    startDate: string = null;
    endDate: string = null;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('filterChild') filterChild: DateFilterComponent;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private activityService: ActivityService,
        private activityDataController: ActivityDataController,
        private storageService: StorageService,
        private dateService: DateService
    ) {
        // this.dataSource.forEach(row => (row['completed'] = false));

        activatedRoute.queryParams.subscribe((queryParam) => {
            if (queryParam['activityConfigID']) {
                this.activityConfigID = queryParam['activityConfigID'];
                this.dateFlag = queryParam['dateFlag'].toLowerCase() === 'true';
            }

            if (queryParam['startDate']) {
                this.startDate = queryParam['startDate'];
                this.endDate = queryParam['endDate'];
            }
        });
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.data.subscribe((res) => {
            this.activityKeyID = res.activityKeyID;
        });

        this.getAllActivitiesAndFindActivityByKeyID();
    }

    async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivities = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivities);
        this.activityID = this.activity.id;
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
                this.filterArr = ['dummy:dummyfilter'];
                let startDate = null;
                let endDate = null;

                if (this.dateFlag) {
                    startDate = this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
                    endDate = this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
                }

                if (this.activityConfigID.length > 0) {
                    this.filterArr.push('activityConfigID:' + this.activityConfigID);
                }

                if (this.startDate != null) {
                    startDate = this.startDate;
                    endDate = this.endDate;
                }

                return this.activityDataController.getActivityDataPageNew(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.currentOrgID,
                    this.activityKeyID,
                    this.searchFlag,
                    this.searchValue,
                    this.filterArr,
                    startDate,
                    endDate
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
        });
    }

    // updateAllComplete() {
    //     this.allComplete = this.dataSource.every(row => row['completed']);
    //     console.log(this.allComplete);
    //     this.dataSource.filter(row => row['completed']).forEach(row => {
    //         console.log('Clicked checkbox for:', row);
    //     });
    //     this.setBulkButton();
    // }

    // setAll(completed: boolean) {
    //     this.allComplete = completed;
    //     this.dataSource.forEach(row => (row['completed'] = completed));
    //     this.dataSource.filter(row => row['completed']).forEach(row => {
    //         console.log('Clicked checkbox for:', row);
    //     });
    //     this.setBulkButton();
    //     console.log(this.allComplete);
    // }

    // getNumberOfSelectedRows() {
    //     this.selectedRows = this.dataSource.filter(row => row['completed']);
    //     return this.selectedRows.length;
    // }

    // setBulkButton() {
    //     console.log('number of selected rows', this.getNumberOfSelectedRows());
    //     if (this.getNumberOfSelectedRows() != 0) {
    //         this.bulkBtnFlag = true;
    //         console.log('bulkfalg', this.bulkBtnFlag)
    //     }
    //     else {
    //         this.bulkBtnFlag = false;
    //         console.log('bulkfalg', this.bulkBtnFlag)
    //     }
    // }

    // deleteRows(row, level) {
    //     if (level == 'bulk') {
    //         this.recordID = [];
    //         this.selectedRows.forEach(row => {
    //             this.recordID.push(row.recordID);
    //         });
    //     }
    //     else {
    //         this.recordID = [row.recordID];
    //     }
    //     console.log('RecordID:', this.recordID);
    //     const numberOfSelectedRows = this.getNumberOfSelectedRows();
    //     const dialogRef = this.dialog.open(DialogOneComponent, {
    //         data: {
    //             type: 'delete',
    //             icon: 'dangerous',
    //             header: `Delete ${numberOfSelectedRows > 1 ? numberOfSelectedRows : ''} CBAM ${numberOfSelectedRows > 1 ? 'records' : 'record'}?`,
    //             body: `${numberOfSelectedRows > 1 ? 'These' : 'This'} record${numberOfSelectedRows > 1 ? 's' : ''} will be deleted permanently and will not be reflected in any ongoing runs.
    //             Locked CBAM runs in which ${numberOfSelectedRows > 1 ? 'these' : 'this'} record${numberOfSelectedRows > 1 ? 's were' : ' was'} used wouldn’t be affected. 

    //             <span class="fw-bold">Are you sure you want to continue?</span>`,
    //             buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
    //             buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
    //         },
    //         minHeight: '200px',
    //         minWidth: '450px'
    //     });

    //     dialogRef.disableClose = true;
    //     dialogRef.afterClosed().subscribe(result => {
    //         if (result) {
    //             console.log("delete works");
    //         }
    //         else {
    //             console.log("does not works");
    //         }
    //     });
    // }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    routeToADUpdate = (activityData) => {
        this.router.navigate([
            `/activity-data/${activityData['id']}/activity/${this.activityKeyID}`,
            { outlets: { activityConfig: ['update'], activityData: ['update'] } }],
            { queryParams: { activityID: this.activityID, activityDataID: activityData['id'], activityKeyID: this.activityKeyID, action: 'update', from: 'record' } }
        );
    }

    showActivityConfigSelection() {
        const dialogRef = this.dialog.open(ActivityConfigSelection, {
            height: "100%",
            width: '700px',
            position: { right: "-2px", top: "0px" },
            panelClass: 'matDialogContainerOverride',
            data: {
                activityKeyID: this.activityKeyID
            }
        });
    }
}
