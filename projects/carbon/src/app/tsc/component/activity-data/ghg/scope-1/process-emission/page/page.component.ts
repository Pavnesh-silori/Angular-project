import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
} from '@angular/core';

import {
    faPlus,
    faCaretDown,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute, Router } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { ActivityDataController } from '@carbon/controller/activity-data.controller';
import { ActivityService } from '@carbon/service/activity.service';
import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.component'; 

// tsc-library
import { StorageService } from '@library/storage-service';
import { DateFilterComponent, DateFormatEnum, DateService, FrequencyEnum } from '@library/date';
import {
    MATERIAL_CONSTANT,
    TABLE_CONSTANT,
    ButtonTooltipEnum,
    FormAction,
    COMMON_CONSTANT
} from '@library/tsc-common';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ActivityM } from '@carbon/model/activity.model';
// tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class ProcessEmissionActivityDataPageComponent implements OnInit {

    currentOrgID: any;

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormAction = FormAction;

    faPlus = faPlus;
    faCaretDown = faCaretDown;
    faEllipsisV = faEllipsisV;

    searchByPlaceHolder: string = 'facility name';

    resultLength: any;
    dataSource;
    dataSourceLength: number = 0;
    displayedColumns: string[] = ['recordID', 'reportingPeriod', 'process', 'amount', 'emission', 'doc', 'option'];

    allActivities: any[];
    activityID: any;
    activityKeyID: ActivityKeyIDEnum;
    activity = new ActivityM();

    FrequencyEnum = FrequencyEnum;

    searchValue: any
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    filterArr: Array<string> = [];

    activityConfigID: number[] = [];

    dateFlag: boolean = true;
    startDate: string = null;
    endDate: string = null;

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
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

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
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

    routeToAdHoc() {
        this.router.navigate([
            `/activity-data/activity/${this.activityKeyID}`,
            { outlets: { activityConfig: ['create'], activityData: ['create'] } }],
            { queryParams: { activityID: this.activityID, origin: 'ad-hoc', action: 'create', tabView: 'YES', from: 'record' } });
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
