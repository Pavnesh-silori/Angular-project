import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ActivityService } from '@carbon/service/activity.service';
import { ActivityController } from '@carbon/controller/activity.controller';
import { ActivityConfigController } from '@carbon/controller/activity-config.controller';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { ActivitySelectionComponent } from '../activity-selection/activity-selection.component';

import {
    merge,
    fromEvent,
    of as observableOf
} from 'rxjs';

import {
    map,
    startWith,
    switchMap,
    catchError,
} from "rxjs/operators";

import { ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT } from '@carbon/constant/activity.constant';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';

//tsc-library
import { TABLE_CONSTANT, COMMON_CONSTANT, FunnelFilterComponent, ButtonTooltipEnum, MATERIAL_CONSTANT, StatusService, VIEW_TYPE_ENUM, } from '@library/tsc-common';
import { SelectionModel } from '@angular/cdk/collections';
import { StorageService } from '@library/storage-service';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
// /tsc-library/

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    @Output() closeDialogEvent = new EventEmitter<void>();

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    ActivityConfigEnum = ActivityConfigEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;

    faEllipsisV = faEllipsisV;
    faPlus = faPlus;

    ACTIVITY_FORM_TYPE_KEYID_ENUM = ACTIVITY_FORM_TYPE_KEYID_ENUM;

    currentOrgID: any;

    dataSource: any;
    resultLength: number = 0;
    checkAll: FormControl = new FormControl(false);
    bulkActionArr = [];
    selection = new SelectionModel(true, []);

    displayedColumns: string[] = ['id', 'name', 'activityType', 'formType', 'status', 'linkedRecords', 'options', 'useActivityConfig'];

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('ALL');

    searchFC: FormControl = new FormControl('');
    searchBy: string = '';
    searchFlag: boolean = false;

    resetFlag: boolean = false;

    activityFlag: boolean = false;
    activityFC: FormControl = new FormControl(['all']);

    formTypeFlag: boolean = false;
    formTypeFC: FormControl = new FormControl(['all']);


    allActivity: any;
    allFormType: any;
    totalFormType: number;

    filterArr: any[] = [];
    totalActivities: any;

    categoryFC: FormControl = new FormControl([]);

    searchValue: string = '';
    origin: any;
    viewType: VIEW_TYPE_ENUM;

    statusList = [
        { "id": 1, "keyID": 'ALL', "name": 'All status' },
        { "id": 2, "keyID": 'active', "name": 'Active' },
        { "id": 3, "keyID": 'inactive', "name": 'Inactive' }
    ];

    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('formType') formType: FunnelFilterComponent;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;
    @ViewChild('formBtn') formBtn: ElementRef;
    @ViewChild('activityBtn') activityBtn: ElementRef;
    @ViewChild('activitySelect') activitySelect: FunnelFilterComponent;
    @ViewChild('formSelect') formSelect: FunnelFilterComponent;

    // retained filters
    retainedFilters;
    isQueryParamFilters: boolean = false;
    //

    constructor(
        private dialog: MatDialog,
        private storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private router: Router,
        private activityService: ActivityService,
        private activityConfigController: ActivityConfigController,
        private activityController: ActivityController,
        public StatusService: StatusService
    ) {
        activatedRoute.queryParams.subscribe((params) => {
            this.origin = params.origin;
        });

        this.viewType = activatedRoute.snapshot.data.viewType;

        let q_params = activatedRoute.snapshot.queryParams;
        this.retainedFilters = q_params;
        this.isQueryParamFilters = Boolean(q_params['haveFilters']);
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.getAllActivity();
        this.getAllFormType();
    }

    async getAllActivity() {
        this.allActivity = await <any>this.activityService.getAllActivity();
        this.totalActivities = this.allActivity.length;
    }

    getAllFormType() {
        this.activityController.getAllFormsType().subscribe((res: any) => {
            this.allFormType = res;
            this.totalFormType = res.length;
        }, error => {
            console.log('error in getAllFormType -', error);
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

    ngAfterViewInit() {
        // getting retained filters
        // this.getRetainedFilters();

        this.getActivityFormList();
    }

    getActivityFormList() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.statusSelect.mono,
            this.formSelect.multi,
            this.activitySelect.multi,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
        ).pipe(
            startWith({}),
            switchMap(() => {
                // initially push dummy filter to handle one multi-select filter in backend (spring-boot issue)
                this.filterArr = ['dummy:dummyfilter'];

                if (this.searchFlag) {
                    var searchBy = ('name:' + this.searchValue);
                }

                if (this.statusFlag) {
                    if (this.statusFC.value == 'ALL') {
                        this.statusFlag = false;
                    } else {
                        this.filterArr.push('status:' + this.statusFC.value);
                    }
                }

                if (this.formTypeFlag) {
                    let selected_forms = this.formTypeFC.value.length - 1;
                    if (selected_forms == this.totalFormType) { this.formTypeFlag = false; }
                    else this.filterArr.push('activityTypes:' + this.formTypeFC.value);
                }

                if (this.activityFlag) {
                    let selected_activities = this.activityFC.value.length - 1;
                    if (selected_activities == this.totalActivities) { this.activityFlag = false; }
                    else this.filterArr.push('activities:' + this.activityFC.value);
                }

                // retaining and saving filters to local storage
                // this.saveFilters();

                return this.activityConfigController.getActivityConfigByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.currentOrgID,
                    this.filterArr,
                    searchBy,
                    this.searchFlag
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource) => {
                if (dataSource == null) {
                    return [];
                }
                this.resultLength = dataSource["totalCount"];
                return dataSource.records;
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        })
    }

    manualSelect(id: number, status: boolean, datasource: any[]) {
        if (status) {
            this.bulkActionArr.push({ "id": id });
        } else {
            for (let i = this.bulkActionArr.length - 1; i >= 0; i--) {
                if (this.bulkActionArr[i].id == id) { this.bulkActionArr.splice(i, 1); }
            }
        }
        if (this.bulkActionArr.length === datasource.length) {
            this.checkAll.setValue(true);
        } else {
            this.checkAll.setValue(false);
        }

    }

    selectAll() {
        this.bulkActionArr = [];
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.bulkActionArr);
        this.dataSource.forEach(element => {
            this.selection.select(element.id);
            this.bulkActionArr.push({ "id": element.id, "status": element.runStatus });
        });
    }

    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return selected === numRows;
    }

    refreshFilter() {
        this.activityFlag = false;
        this.formTypeFlag = false;
        this.statusFlag = false;

        // reset retaining filters
        // this.saveFilters();

        this.refreshBtn.nativeElement.click();
    }

    closeDialog(activityConfig) {
        this.routeToPFF(activityConfig);
        this.closeDialogEvent.emit();
    }

    routeToPFF(activityConfigData) {
        let activityConfig = activityConfigData.activity;
        let activityConfigID = activityConfigData.id;

        if (activityConfig['keyID'] == ActivityKeyIDEnum.MOBILE_COMBUSTION) { 
            this.router.navigate([
                `/activity-data/activity/${activityConfig['keyID']}/create-using-prefilled/${activityConfigID}`,
            ]);
        }else{
            this.router.navigate([
                `/activity-data/activity/${activityConfig['keyID']}`,
                { outlets: { activityData: ['create'], activityConfig: ['update'] } }],
                { queryParams: { activityID: activityConfig['id'], origin: ActivityConfigEnum.AD_HOC, action: 'create', tabView: 'YES', usePFF: 'YES', activityConfigID: activityConfigID } });
        }
        }

        selectActivityForm() {
            let dialogRef;
            dialogRef = this.dialog.open(ActivitySelectionComponent, {
                height: '100vh',
                width: '800px',
                position: { right: '-2px', top: '0px' },
                data: {
                    origin: this.origin,
                    action: 'create'
                }
            });

            dialogRef.afterClosed()
                .subscribe((result) => {
                    if (result === 'opSuccess') {
                    }
                });
        }

        handleClick(func: Function, params: any[]) {
            func(...params);
        }

        updateActivityConfig = (row) => {
            if (row['activity']['keyID'] == ActivityKeyIDEnum.MOBILE_COMBUSTION) {
                this.router.navigate([`/carbon-setting/activity-config`, row.id, 'activity', row.activity.keyID, 'update',
                ]);
            } else {
                this.router.navigate(['/carbon-setting/activity-config', row.id, 'activity', row.activity.keyID,
                    { outlets: { activityConfig: ['update'] } }],
                    { queryParams: { activityID: row.activity.id, origin: ActivityConfigEnum.PFF, action: 'update', tabView: 'YES' } });
            }
        }

        viewActivityConfig = (row) => {
            if (this.viewType != VIEW_TYPE_ENUM.PAGE) {
                this.closeDialogEvent.emit();
            }

            if (ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT.includes(row.activity.keyID)) {
                this.router.navigate(['/carbon-setting/activity-config', row.id, 'activity', row.activity.keyID, { outlets: { activityConfig: ['view'] } }], { queryParams: { origin: ActivityConfigEnum.PFF, activityKeyID: row.activity.keyID } });
            } else {
                return;
            }
        }

        showCursorPointer(row) {
            let isCursorPointer: boolean = false;

            if (ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT.includes(row.activity.keyID)) {
                isCursorPointer = true;
            } else {
                isCursorPointer = false;
            }

            return isCursorPointer;
        }

        routeActivityDataPage(row) {
            if (row.linkedRecordsCount != 0) {
                if (row.activityType.keyID == ACTIVITY_FORM_TYPE_KEYID_ENUM.GHG_FORM) {
                    this.router.navigate(
                        [`/activity-data/${row.activity.keyID}/page`], { queryParams: { activityConfigID: row.id, dateFlag: false } });
                } else {
                    this.router.navigate(
                        [`/cbam/activity-data/activity/${row.activity.keyID}/page`], { queryParams: { activityConfigID: row.id, dateFlag: false } });
                }
            }
        }

        getRetainedFilters() {
            let fiterJson = JSON.parse(this.storageService.getStorage('filters'));
            let isFiltersApplied: boolean = fiterJson != null;

            if (isFiltersApplied) {
                let retainedStorageFilters = fiterJson['activity_config'];
                if (!this.isQueryParamFilters && retainedStorageFilters != null) {
                    this.retainedFilters = retainedStorageFilters;
                }
            }

            for (let key in this.retainedFilters) {
                let value = this.retainedFilters[key];
                if (key != 'haveFilters' && key != 'origin') {
                    if (key == 'activities' || key == 'activityTypes') {
                        value = this.getRetainedValueMulti(key, value);
                    }

                    this.setRetainedFilters(key, value);
                }
            }
        }

        getRetainedValueMulti(key, value) {
            if (this.retainedFilters[key] instanceof Array) {
                value = this.retainedFilters[key];
            } else {
                value = [this.retainedFilters[key]];
            }
            return value;
        }

        setRetainedFilters(filter, value) {
            switch (filter) {
                case 'search':
                    this.searchFlag = true;
                    this.searchValue = value;
                    this.filterArr.push(`${filter}:${value}`);
                    break;
                case 'status':
                    this.statusFlag = true;
                    this.statusFC.patchValue(value);
                    this.filterArr.push(`${filter}:${value}`);
                    break;
                case 'activityTypes':
                    this.formTypeFlag = true;
                    this.formTypeFC.patchValue(value);
                    this.filterArr.push(`${filter}:${value}`);
                    break;
                case 'activities':
                    this.activityFlag = true;
                    this.activityFC.patchValue(value);
                    this.filterArr.push(`${filter}:${value}`);
                    break;
                case 'sortBy':
                    this.sort.active = value;
                    break;
                case 'sort':
                    this.sort.direction = value;
                    break;
                case 'pageIndex':
                    this.paginator.pageIndex = Number(value);
                    break;
                case 'pageSize':
                    this.paginator.pageSize = Number(value);
                    break;
                default:
                    console.log('unidentified filter encountered - ', filter);
            }
        }

        saveFilters() {
            let filters = {
                haveFilters: true,
                pageSize: this.paginator.pageSize,
                pageIndex: this.paginator.pageIndex,
                sortBy: this.sort.active,
                sort: this.sort.direction,
                origin: 'pff',
            };

            // status filter
            if (this.statusFlag && this.statusFC.value != 'ALL') {
                filters['status'] = this.statusFC.value;
            }
            // activityTypes filter (form type)
            if (this.formTypeFlag && this.formTypeFC.value != 'all') {
                filters['activityTypes'] = this.formTypeFC.value;
            }
            // activities filter  
            if (this.activityFlag && this.activityFC.value != 'all') {
                filters['activities'] = this.activityFC.value;
            }
            //search
            if (this.searchFlag) {
                filters['search'] = this.searchValue;
            }

            //saving to local storage
            this.setToStorage('activity_config', filters);
        }

        setToStorage(key: string, filters: any) {
            let json = {};
            json[key] = filters;
            this.storageService.setStorage('filters', JSON.stringify(json));
            this.router.navigate([location.pathname], { queryParams: filters });
        }
    }
