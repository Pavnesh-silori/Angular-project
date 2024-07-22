import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';

import { faEllipsisV, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { ActivityM } from '@carbon/model/activity.model';

import { ActivityService } from '@carbon/service/activity.service';
import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';
import { ActivityDataController } from '@carbon/controller/activity-data.controller';
import { DataInputMethodController } from '@carbon/controller/data-input-method.controller'; 
import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.component'; 

// library
import { DateFilterComponent, DateFormatEnum, DateService } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';
import { FunnelFilterComponent, MATERIAL_CONSTANT, SearchBarOneComponent } from '@library/tsc-common';
/// library

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    emitFilter = new EventEmitter();

    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;

    activityID: any;
    activityKeyID: string;
    activity = new ActivityM();

    faPlus = faPlus;
    faCaretDown = faCaretDown;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;
    resultLength: any = 0;
    dataSource: any;

    searchFlag: boolean = false;
    searchValue: string;
    dataInputMethodFlag: boolean = false;

    displayedColumn: any[] = [
        'recordID',
        'startDate',
        'supplier',
        'energyConsumed',
        'emission',
        'dataInputMethod',
        'dataCollectionMethod',
        'doc',
        'option'
    ];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('dataInputMethod') dataInputMethod: FunnelFilterComponent;
    @ViewChild('dataCollectionMethod') dataCollectionMethod: FunnelFilterComponent;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    dataInputMethodList: any[] = [];
    dataCollectionMethodlist: any[] = [];
    dataInputMethodFC: FormControl = new FormControl();

    data: Object;
    pageSize = 1;

    activityConfig: any;
    dataInputMethodKeyID: any;
    action: any

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('all');

    filterArr: Array<string> = [];

    dataCollectionMethodFlag: boolean = false;
    dataCollectionMethodFC: FormControl = new FormControl();
    isChecked = false;

    allActivities: any[];

    activityConfigID: number[] = [];

    dateFlag: boolean = true;
    startDate: string = null;
    endDate: string = null;

    @ViewChild('filterChild') filterChild: DateFilterComponent;

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private router: Router,
        private activityDataController: ActivityDataController,
        private activityService: ActivityService,
        private dataInputMethodController: DataInputMethodController,
        private dataCollectionMethodService: DataCollectionMethodService,
        private dateService: DateService
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
        this.datacollectionmethodname();
        this.getAllActivitiesAndFindActivityByKeyID();
    }

    async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivities = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivities);
        this.activityID = this.activity.id;
        this.getAllDataInputMethodList();
    }

    searchFn(value: string) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        } else {
            this.statusFC.reset(['all']);
            this.dataCollectionMethodFC.reset(['all']);
            this.dataInputMethodFC.reset(['all']);
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }

    refreshFilter() {
        this.dataCollectionMethodFlag = false;
        this.dataInputMethodFlag = false;
        this.refreshBtn.nativeElement.click();
        this.dataCollectionMethodFC.setValue('all');
        this.dataInputMethodFC.setValue('all');
    }

    dateToogle() {
        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, "click").subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.dataInputMethod.mono,
            this.dataCollectionMethod.mono,
            this.filterChild.emitFilter,
            fromEvent(this.refreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap(() => {
                this.filterArr = ['dummy:dummyfilter'];
                let startDate = null;
                let endDate = null;
                
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
                if (this.dataInputMethodFlag) {
                    if (this.dataInputMethodFC.value == 'all') { this.dataInputMethodFlag = false; }
                    else { this.filterArr.push('dataInputMethodKeyID:' + this.dataInputMethodFC.value); }
                }
                if (this.dataCollectionMethodFlag) {
                    if (this.dataCollectionMethodFC.value == 'all') { this.dataCollectionMethodFlag = false; }
                    else { this.filterArr.push('dataCollectionMethodKeyID:' + this.dataCollectionMethodFC.value) }
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
                return dataSource;
            })
        ).subscribe((response) => {
            this.dataSource = response['data'];
            this.resultLength = response['totalCount']
        })
    }

    async getActivityByID(activityID: any) {
        this.activity = await <any>this.activityService.getActivityByID(activityID);
    }

    async getAllDataInputMethodList() {
        this.dataInputMethodController.getAllDataInputMethodList().subscribe(
            (data: any) => {

                this.dataInputMethodList = data.filter(item => item.activityID == this.activityID)
                this.dataInputMethodList.unshift({ id: 'all', name: 'All', keyID: 'all' });
            },
            (error: any) => {
                console.error("error", error);
            }
        );
    }

    async datacollectionmethodname() {
        this.dataCollectionMethodlist = await this.dataCollectionMethodService.getDataCollectionMethod();
        this.dataCollectionMethodlist.unshift({ id: 'all', dataCollectionMethodName: 'All', keyID: 'all' })
    }

    routeToAdHoc() {
        this.router.navigate([
            `/activity-data/activity/${this.activityKeyID}`,
            { outlets: { activityConfig: ['create'], activityData: ['create'] } }],
            { queryParams: { activityID: this.activityID, origin: 'ad-hoc', action: 'create', tabView: 'YES', from: 'record' } });
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    routeToADUpdate = (activityDataParam) => {
        this.router.navigate([
            `/activity-data/${activityDataParam['activityDataID']}/activity/${this.activityKeyID}`,
            { outlets: { activityConfig: ['update'], activityData: ['update'] } }],
            { queryParams: { activityID: this.activityID, activityDataID: activityDataParam['activityDataID'], activityKeyID: this.activityKeyID, action: 'update', from: 'record' } }
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