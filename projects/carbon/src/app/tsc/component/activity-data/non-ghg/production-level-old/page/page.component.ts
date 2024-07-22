import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';

import { ProductionLevel, ProductionLevelM } from '@carbon/model/non-ghg.model';
import { ActivityM } from '@carbon/model/activity.model';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { ActivityDataController } from '@carbon/controller/activity-data.controller';
import { ActivityService } from '@carbon/service/activity.service';

import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.component';

//tsc-library
import { StorageService } from '@library/storage-service';
import { DateFilterComponent, DateFormatEnum, DateService, FrequencyEnum } from '@library/date';
import { ButtonTooltipEnum, COMMON_CONSTANT, MATERIAL_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class ProductionLevelPageComponent implements OnInit {

    currentOrgID: any;
    resultLength: any;
    filterArr: Array<string> = [];
    isChecked = false;

    dataSource: ProductionLevelM[] = [new ProductionLevel()];
    selectedRows: ProductionLevelM[] = [];

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    ActivityKeyIDEnum = ActivityKeyIDEnum;

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

    allActivities: any[];
    activityID: any;
    activityKeyID: ActivityKeyIDEnum;
    activity = new ActivityM();

    activityConfigID: number[] = [];

    FrequencyEnum = FrequencyEnum;
    displayedColumns: string[] = ['recordID', 'reportingPeriod', 'process', 'source', 'quantity', 'doc', 'action'];


    dateFlag: boolean = true;
    startDate: string = null;
    endDate: string = null;

    pageSubtitle: string = null;
    quantityHeading: string = null;
    source: string = null;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('filterChild') filterChild: DateFilterComponent;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    constructor(
        activatedRoute: ActivatedRoute,
        storageService: StorageService,
        private router: Router,
        private dialog: MatDialog,
        private activityService: ActivityService,
        private dateService: DateService,
        private activityDataController: ActivityDataController,
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
        this.showPageSubtitleAndHeading();

        this.showColumn();
    }

    showColumn() {
        if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT || this.activityKeyID == ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT) {
            this.displayedColumns = ['recordID', 'reportingPeriod', 'process', 'source', 'quantity', 'quantityExported', 'doc', 'action'];
            return true;
        } else {
            this.displayedColumns = ['recordID', 'reportingPeriod', 'process', 'source', 'quantity', 'doc', 'action'];
            return false;
        }
    }

    async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivities = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivities);
        this.activityID = this.activity.id;
    }

    showPageSubtitleAndHeading() {
        if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL) {
            this.pageSubtitle = 'Records of products produced from any process.';
            this.quantityHeading = 'Quantity of product produced';
            this.source = 'Product Name';

        } else if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT) {
            this.pageSubtitle = 'Records of intermediate products exported out of any process.';
            this.quantityHeading = 'Quantity of product produced';
            this.source = 'Product Name';

        } else if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION) {
            this.pageSubtitle = 'Records of precursors consumed in any process.';
            this.quantityHeading = 'Quantity of precursor consumed';
            this.source = 'Precursor';

        } else if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT) {
            this.pageSubtitle = 'Records of precursors consumed in any process.';
            this.quantityHeading = 'Quantity of precursor produced';
            this.source = 'Precursor';
        }
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
                let searchValue = null;

                if (this.searchFlag) {
                    searchValue = this.searchValue;
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

    searchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
            this.searchValue = 'process:' + $event;
        }
        else {
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
    }

    routeToADUpdate = (activityData) => {
        this.router.navigate([
            `/activity-data/${activityData['id']}/activity/${this.activityKeyID}`,
            { outlets: { activityConfig: ['update'], activityData: ['update'] } }],
            { queryParams: { activityID: this.activityID, activityDataID: activityData['id'], activityKeyID: this.activityKeyID, action: 'update', from: 'record' } }
        );
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    // routeToADUpdate = (activityData) => {
    //     this.router.navigate([
    //         `/activity-data/${activityData['id']}/activity/${this.activityKeyID}`,
    //         { outlets: { activityConfig: ['update'], activityData: ['update'] } }],
    //         { queryParams: { activityID: this.activityID, activityDataID: activityData['id'], activityKeyID: this.activityKeyID, action: 'update', from: 'record' } }
    //     );
    // }

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

