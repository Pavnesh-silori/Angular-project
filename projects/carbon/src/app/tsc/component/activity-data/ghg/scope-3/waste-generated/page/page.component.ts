import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPlus, faCaretDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Subscription, fromEvent, merge, of as observableOf } from 'rxjs';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum'

import { Scope3ActivityM, WasteTypeM } from '@carbon/model/waste-generated.model';

import { ActivityService } from '@carbon/service/activity.service';
import { ActivityM } from '@carbon/model/activity.model';
import { WasteGeneratedController } from '@carbon/controller/waste-generatd.controller';
import { WasteGeneratedService } from '@carbon/service/waste-generated.service';
import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.component'; 

//tsc-library
import { StorageService } from '@library/storage-service';
import {
    COMMON_CONSTANT,
    TABLE_CONSTANT,
    SearchBarOneComponent,
    FunnelFilterComponent,
    MATERIAL_CONSTANT,
    ButtonLabelEnum,
    ButtonTooltipEnum
} from '@library/tsc-common';
import { DateFilterComponent, DateFormatEnum, DateService } from '@library/date';

// /tsc-library/
@Component({
    selector: 'app-list',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {

    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;

    faPlus = faPlus;
    faCaretDown = faCaretDown;
    faEllipsisV = faEllipsisV;

    resultLength: number;

    searchFlag: boolean = false;
    searchValue: string;

    currentOrgID: any;

    dataSource: any;
    filterArr: any = [];

    displayedColumns: any[] = [
        'recordID',
        'startDate',
        'supplier',
        "wasteType",
        'wasteTreatmentMethod',
        'wasteGenerated',
        'emission',
        'doc',
        'option'
    ];

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('all');
    searchValue1: string = null;

    chips: any = [];
    wasteTypeList: any = [];
    wasteFlag: boolean = false;
    wasteFC: FormControl = new FormControl('all');

    wasteTreatemntTypeList: any = [];
    wasteTreatmentFlag: boolean = false;
    wasteTreatmentFC: FormControl = new FormControl('all');

    isChecked = false;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
    @ViewChild('wasteType') wasteType: FunnelFilterComponent;
    @ViewChild('wasteTreatment') wasteTreatment: FunnelFilterComponent;
    @ViewChild('filterChild') filterChild: DateFilterComponent;

    activityID: any;
    activityKeyID: any;
    activity = new ActivityM();

    durationValueFC = new FormControl(moment());
    durationPeriod = new FormControl();
    startDate: any;
    endDate: any;
    startDateStore: any;
    endDateStore: any;

    scope3WasteTypeM: WasteTypeM[];
    scope3WasteTreatmentM: WasteTypeM[];
    allActivity: any;

    activityConfigID: number[] = [];

    dateFlag: boolean = true;
    startDateQueryParam: string = null;
    endDateQueryParam: string = null;

    constructor(
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private storageService: StorageService,
        private wasteGeneratedService: WasteGeneratedService,
        private activityService: ActivityService,
        private wasteGeneratedController: WasteGeneratedController,
        private dateService: DateService
    ) {
        activatedRoute.queryParams.subscribe((queryParam) => {
            if (queryParam['activityConfigID']) {
                this.activityConfigID = queryParam['activityConfigID'];
                this.dateFlag = queryParam['dateFlag'].toLowerCase() === 'true';
            }

            if (queryParam['startDate']) {
                this.startDateQueryParam = queryParam['startDate'];
                this.endDateQueryParam = queryParam['endDate'];
            }
        });
     }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activityKeyID = ActivityKeyIDEnum.WASTE_GENERATED_IN_OPERATIONS;
        this.startDate = moment().startOf('month').format('YYYY-MM-DD');
        this.endDate = moment().format('YYYY-MM-DD');
        const dateRange = {
            startDate: this.startDate,
            endDate: this.endDate
        }
        this.durationPeriod.patchValue(dateRange);
        this.getAllActivitiesAndFindActivityByKeyID()
    }

    async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivity = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivity);
        console.log(this.activity)
        this.activityID = this.activity.id;
        this.getAllWasteType();
        this.getAllWasteTreatmentMethod();
    }

    async getAllWasteType() {
        this.scope3WasteTypeM = <WasteTypeM[]>await this.wasteGeneratedService.getAllWasteTypes(this.activityID);
        this.wasteTypeList = this.scope3WasteTypeM;
    }

    async getAllWasteTreatmentMethod() {
        this.scope3WasteTreatmentM = <WasteTypeM[]>await this.wasteGeneratedService.getAllWasteTreatmentMethod(this.activityID);
        this.wasteTreatemntTypeList = this.scope3WasteTreatmentM;
    }

    async getActivityByID(activityID: any) {
        this.activity = await <any>this.activityService.getActivityByID(activityID);
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.wasteType.mono,
            this.wasteTreatment.mono,
            this.filterChild.emitFilter,
            this.durationPeriod.valueChanges,
            fromEvent(this.refreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap(() => {
                this.filterArr = ['dummy:dummyfilter'];
                let startDate = null;
                let endDate = null;

                let searchValue;
                if (this.searchFlag) {
                    searchValue = ('supplier:' + this.searchValue);
                }
                if (this.wasteFlag) {
                    if (this.wasteFC.value == 'all') { this.wasteFlag = false; }
                    else this.filterArr.push('wasteType:' + this.wasteFC.value);

                }
                if (this.wasteTreatmentFlag) {
                    if (this.wasteTreatmentFC.value == 'all') { this.wasteTreatmentFlag = false; }
                    else this.filterArr.push('wasteTreatment:' + this.wasteTreatmentFC.value);
                }

                if (this.dateFlag) {
                    startDate = this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
                    endDate = this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
                }

                if (this.activityConfigID.length > 0) {
                    this.filterArr.push('activityConfigID:' + this.activityConfigID);
                }

                if (this.startDateQueryParam != null) {
                    startDate = this.startDateQueryParam;
                    endDate = this.endDateQueryParam;
                }

                return this.wasteGeneratedController.getWasteGenerationActivities(
                    this.currentOrgID,
                    this.activityKeyID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.filterArr,
                    searchValue,
                    this.searchFlag,
                    startDate,
                    endDate,
                    ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource: Scope3ActivityM) => {
                if (dataSource == null) {
                    return [];
                }
                this.resultLength = dataSource["totalCount"];
                return dataSource['data'];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        })
    }

    searchFn(value: string) {
        if (value.length != 0) {
            this.searchValue = value;
            this.statusFC.reset('all');
            this.wasteFC.reset('all');
            this.wasteTreatmentFC.reset('all');
            this.searchFlag = value.length > 0;
        }
        else {
            this.refreshFilter();
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
        this.paginator.pageIndex = 0;
    }


    openDatepicker() {
        this.pickerDirective.open();
    }

    refreshFilter() {
        this.wasteFlag = false;
        this.wasteTreatmentFlag = false;
        this.refreshBtn.nativeElement.click();
        this.wasteFC.setValue('all');
        this.wasteTreatmentFC.setValue('all');
        this.durationValueFC.reset(['all']);
    }

    dateToogle() {
        this.refreshBtn.nativeElement.click();
    }

    routeToAdHoc() {
        this.router.navigate([
            `/activity-data/activity/${this.activityKeyID}`,
            { outlets: { activityConfig: ['create'], activityData: ['create'] } }],
            { queryParams: { activityID: this.activityID, origin: 'ad-hoc', action: 'create', tabView: 'YES', from: 'record' } });
    }

    // routeToADUpdate(activityDataParam) {
    //     this.router.navigate([
    //         `/activity-data/update/activity/${this.activityKeyID}`,
    //         { outlets: { activityConfig: ['update'], activityData: ['update'] } }],
    //         { queryParams: { activityID: this.activityID, activityDataID: activityDataParam['activityDataID'], activityKeyID: this.activityKeyID, action: 'update', from: 'record' } }
    //     );
    // }

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