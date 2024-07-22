import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { cloneDeep } from 'lodash-es';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';

import { ActivityDataController } from '@carbon/controller/activity-data.controller';
import { ActivityService } from '@carbon/service/activity.service';

import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.component';

//tsc-library
import { DateFilterComponent, DateFormatEnum, DateService, FrequencyEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, DialogOneComponent, FormAction, MATERIAL_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
    FormAction = FormAction;
    FrequencyEnum = FrequencyEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    faPlus = faPlus;
    faFile = faFile;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;
    resultLength: any;
    source: string;

    activityID: number;
    activityKeyID: any;

    dataSource: any = [];
    selectedRows: any;
    filterArr: Array<string> = [];
    isChecked = false;

    searchValue: any
    searchFlag: boolean = false;
    searchArr: any[] = [];
    searchByPlaceHolder: string = 'process name';

    numOfRows: number;
    recordID: number[] = [];
    allComplete: boolean = false;
    bulkBtnFlag: boolean = false;

    displayedColumns: string[] = ['recordID', 'reportingPeriod', 'process', 'source', 'consumptionQuantity', 'document', 'option'];

    activityConfigID: number[] = [];

    dateFlag: boolean = true;
    startDate: string = null;
    endDate: string = null;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('filterChild') filterChild: DateFilterComponent;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    constructor(
        private router: Router,
        activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        storageService: StorageService,
        private dateService: DateService,
        private activityService: ActivityService,
        private activityDataController: ActivityDataController,
    ) {
        this.initComponent(storageService, activatedRoute);

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

    ngOnInit(): void { }

    initComponent(storageService: StorageService, activatedRoute: ActivatedRoute) {
        this.currentOrgID = storageService.getStorage('currentOrgID');

        activatedRoute.data.subscribe(data => {
            this.activityKeyID = data.activityKeyID;
            this.getAllActivitiesAndFindActivityByKeyID(this.activityKeyID);

            if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION) {
                this.source = PROCESS_INPUT_ENUM.ELECTRICITY;
            } else if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION) {
                this.source = PROCESS_INPUT_ENUM.HEAT;
            }
        });
    }

    entityCount(entities: any[]) {
        if (!(entities ?? false)) return false;

        let length: number = entities.length;
        return length > 1 ? `+${--length}` : false;
    }

    formatTooltip(entities: any[]) {
        let viewList = cloneDeep(entities);
        viewList.shift();
        return viewList.join('\n');
    }

    async getAllActivitiesAndFindActivityByKeyID(activityKeyID: ActivityKeyIDEnum) {
        const allActivities = await this.activityService.getAllActivityNew();
        const activity = this.activityService.getActivityByKeyIDFromActivityList(activityKeyID, allActivities);
        this.activityID = activity.id;
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
                let searchValue: string = null;

                if (this.searchFlag) {
                    searchValue = ('process:' + this.searchValue);
                }

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
                    searchValue,
                    this.filterArr,
                    startDate,
                    endDate
                ).pipe(catchError(() => observableOf(null)));
            }),
            map(dataSource => {
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

    searchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        } else {
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
    }

    getNumberOfSelectedRows() {
        this.selectedRows = this.dataSource.filter(row => row['completed']);
        return this.selectedRows.length;
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

