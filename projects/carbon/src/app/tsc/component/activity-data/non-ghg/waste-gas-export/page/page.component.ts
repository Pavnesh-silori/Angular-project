import { Component, ElementRef, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Subscription, fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute, Router } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ActivityM } from '@carbon/model/activity.model';

import { ActivityDataController } from '@carbon/controller/activity-data.controller';

import { ActivityService } from '@carbon/service/activity.service';

import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.component';

//tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, FormAction, MATERIAL_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';
import { DateFilterComponent, DateFormatEnum, DateService, FrequencyEnum } from '@library/date';
// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class WasteGasExportPageComponent {

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormAction = FormAction;

    currentOrgID: any;
    resultLength: any;
    dataSource: any;

    faPlus = faPlus;
    faFile = faFile;
    faEllipsisV = faEllipsisV;

    numOfRows: number;
    recordID: number[] = [];
    allComplete: boolean = false;
    bulkBtnFlag: boolean = false;

    searchValue: any
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    filterArr: Array<string> = [];

    allActivities: any[];
    activityID: any;
    activityKeyID: ActivityKeyIDEnum;
    activity = new ActivityM();

    activityConfigID: number[] = [];

    FrequencyEnum = FrequencyEnum;
    displayedColumns: string[] = ['recordID', 'reportingPeriod', 'process', 'gasExported', 'doc', 'option'];

    dateFlag: boolean = true;
    // dateSubscription: Subscription;
    startDate: string = null;
    endDate: string = null;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('filterChild') filterChild: DateFilterComponent;

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private router: Router,
        private activityDataController: ActivityDataController,
        private dateService: DateService,
        private activityService: ActivityService,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID'])
        this.activityKeyID = activatedRoute.snapshot.data['activityKeyID'];
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
        this.getAllActivitiesAndFindActivityByKeyID();
    }

    async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivities = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivities);
        this.activityID = this.activity.id;
    }

    searchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        }
        else {
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        // this.dateSubscription = this.filterChild.emitFilter.subscribe(() => {
        //     this.dateFlag = true;
        //     this.dateSubscription.unsubscribe();
        // }); 
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.filterChild.emitFilter,
            fromEvent(this.refreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap(() => {
                this.filterArr = ['dummy:dummyfilter'];
                let startDate = null;
                let endDate = null;
                let searchValue = null;

                if (this.searchFlag) {
                    searchValue = ('process:' + this.searchValue);
                }

                if (this.activityConfigID.length > 0) {
                    this.filterArr.push('activityConfigID:' + this.activityConfigID);
                }

                if (this.dateFlag) {
                    startDate = this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
                    endDate = this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
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
                    endDate,
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: any) => {
                if (response == null) {
                    return [];
                }
                this.resultLength = response.totalCount;
                return response.records;
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
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
