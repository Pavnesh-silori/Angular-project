import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { AbstractControl, FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { faEllipsisV, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import {
    Subject,
    fromEvent,
    merge,
    of as observableOf
} from "rxjs";

import {
    catchError,
    map,
    startWith,
    switchMap,
    takeUntil,
} from "rxjs/operators";

import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatPaginator } from '@angular/material/paginator';

import * as moment from 'moment';

import { CarbonFilterComponent } from '@carbon/component/_shared/filter/filter.component';
// import { UpdateCategorizedRecordsComponent } from '@CarbonNetZero/component/import-records-emissions/update-categorized-records/update-categorized-records.component';

import { EmissionDataTypeEnum } from '@carbon/enum/emission-data-type.enum';
import { ButtonTooltipEnum, DialogEnum, FormAction, FunnelFilterComponent, MATERIAL_CONSTANT } from '@library/tsc-common';

// library //
import { DateFilterComponent, DateFormatEnum, DateService } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';

// / library //

import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ScopeKeyIDEnum } from '@carbon/enum/scope.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';

import { FugitiveReleasesCreateUpdateDailog } from '@carbon/component/activity-data/ghg/scope-1/fugitive-emission/other-fugitive-sources/_shared/fugitive-release-create-update/fugitive-releases-create-update.component';
import { ActivityController } from '@carbon/controller/activity.controller';
import { DataCollectionMethodController } from '@carbon/controller/data-collection-method.controller';
import { ScopeController } from '@carbon/controller/scope.controller';
import { SustainabilityAccountingController } from '@carbon/controller/sustainability-accounting.controller';
import { ActivitySelectionComponent } from '@carbon/component/activity-config/activity-selection/activity-selection.component';
// import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection/activity-config-selection';
import { ActivityConfigSelection } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.component'; 

@Component({
    selector: 'app-carbon',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    // providers: constants.date_format_providers
})
export class CarbonComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    FormAction = FormAction;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;

    faPlus = faPlus;
    faCaretDown = faCaretDown;
    faEllipsisV = faEllipsisV;

    currentOrgID: string;

    title: string = 'Carbon Ledger';

    taskCount: any[] = [];
    dataSource: any[] = [];
    resultLength: number = 0;
    displayedColumns: string[] = ['recordID', 'scope', 'activity', 'source', 'startDate', 'emission', 'recordType', 'option'];

    scope = [];

    activity: any[] = [];
    all_activity_keyID: any[] = [];
    selected_activities: any[] = [];

    scope_1_activities: any[] = [];
    scope_1_acitivities_keyIDs: any[] = ['all'];

    scope_2_activities: any[] = [];
    scope_2_acitivities_keyIDs: any[] = ['all'];

    scope_3_activities: any[] = [];
    scope_3_acitivities_keyIDs: any[] = ['all'];

    totalActivities;
    all_activities;

    searchFlag: boolean = false;
    searchValue: string = '';

    filterArr: Array<string> = [];

    startDate: any;
    endDate: any;
    durationPeriodFC: FormControl = new FormControl;
    isChecked: boolean = false;

    scopeFlag: boolean = false;
    scopeFC: FormControl = new FormControl('all');

    activityFlag: boolean = false;
    activityFC: FormControl = new FormControl([]);

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('activityBtn') activityBtn: ElementRef;
    @ViewChild('recordTypeBtn') recordTypeBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    @ViewChild('activitySelect') activitySelect: MatSelect;
    @ViewChild('scopeSelect') scopeSelect: FunnelFilterComponent;

    @ViewChild('filterChild') filterChild: DateFilterComponent;
    @ViewChild('carbonFilterChild') carbonFilterChild: CarbonFilterComponent;

    dcm: any[] = []; /* data_collection_method */
    recordTypeFlag: boolean = false;
    prev_record_type;
    totalDcms: number = this.dcm.length;
    all_dcm_key_ids: any[] = [];
    recordTypeFilterApplied: boolean = false;
    selected_dcms: any[] = [];
    recordTypeFC: FormControl = new FormControl(['all']);

    chips: any[] = [];

    retained_filters;
    retained_pagination;
    retained_activities;
    have_saved_filters: boolean = false;

    hasDateFilter: boolean = false;
    retained_frequency: string = 'DEFAULT';

    retained_duration: string = '';

    hasStartDate: boolean = false;
    retained_startDate = '';
    retained_endDate = '';

    prev;
    activityFilterApplied: boolean = false;

    query_filters: any;
    have_query_filters: boolean = false;

    retained_include_subsidiary: boolean = false;
    retained_consolidation_approach: string = null;
    have_retained_consolidation_approach: boolean = false;

    constructor(
        activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private router: Router,
        private dialog: MatDialog,
        private scopeController: ScopeController,
        private activityController: ActivityController,
        private dataCollectionMethodController: DataCollectionMethodController,
        private sustainabilityAccountingController: SustainabilityAccountingController,
        private dateService: DateService,
        private toastrService: ToastrService
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);

        let q_params = activatedRoute.snapshot.queryParams;
        this.have_query_filters = Boolean(q_params['haveFilters']);
        this.retained_filters = q_params;
    }

    ngOnInit(): void {
        this.getScopeList();
        this.getDataCollectionMethodList();
    }

    getDataCollectionMethodList() {
        this.dataCollectionMethodController.getDataCollectionMethodList()
            .subscribe((dcmRes: any) => {
                this.dcm = dcmRes;
                this.totalDcms = this.dcm.length;
                this.all_dcm_key_ids.unshift('all');
                this.dcm.map((dcm) => { this.all_dcm_key_ids.push(dcm['dataCollectionMethodID']) });
                this.selected_dcms = this.dcm.map(dcm => dcm);

                if (!this.recordTypeFlag)
                    this.selectAllRecordTypes();
                else {
                    this.selected_dcms = this.dcm.filter(dcm => dcm.dataCollectionMethodID == this.recordTypeFC.value[0]);
                    this.applyRecordTypeFilter();
                }
            },
                error => {
                    console.log('error in getDataCollectionMethodList() -', error);
                    this.toastrService.openToast('Error', 'Error while fetching data collection methods', 'error');
                });
    }

    getScopeList() {
        this.scopeController.getScopeList()
            .subscribe((scopeRes: any) => {
                this.scope = scopeRes;
                /* added all-scope object to scope_array */
                this.scope.unshift({ scopeID: 'all', keyID: 'all', name: 'All scope' });

                let scope1ID = this.scope.find(scope => scope['keyID'] == ScopeKeyIDEnum.SCOPE_1_KEY_ID)['id'];
                let scope2ID = this.scope.find(scope => scope['keyID'] == ScopeKeyIDEnum.SCOPE_2_KEY_ID)['id'];
                let scope3ID = this.scope.find(scope => scope['keyID'] == ScopeKeyIDEnum.SCOPE_3_KEY_ID)['id'];
                this.getActivities(scope1ID, scope2ID, scope3ID);
            },
                error => {
                    console.log('error in getScopeList() -', error);
                    this.toastrService.openToast('Error', 'Error while fetching scopes', 'error');
                });
    }

    async getActivities(scope1ID, scope2ID, scope3ID) {
        this.scope_1_activities = <any[]><unknown>await this.getActivityListByScopeID(scope1ID);
        this.scope_1_activities.forEach((activity) => this.scope_1_acitivities_keyIDs.push(activity['keyID']));

        this.scope_2_activities = <any[]><unknown>await this.getActivityListByScopeID(scope2ID);
        this.scope_2_activities.forEach((activity) => this.scope_2_acitivities_keyIDs.push(activity['keyID']));

        this.scope_3_activities = <any[]><unknown>await this.getActivityListByScopeID(scope3ID);
        this.scope_3_activities.forEach((activity) => this.scope_3_acitivities_keyIDs.push(activity['keyID']));

        /* getting all_activities */
        this.getAllActivity();
    }

    getAllActivity() {
        this.activityController.getAllActivity()
            .subscribe((activityRes: any[]) => {
                this.activity = activityRes;

                this.all_activities = this.activity;
                this.totalActivities = this.activity.length;

                this.all_activity_keyID = this.activity.map(activity => activity['keyID']);
                this.all_activity_keyID.unshift('all');

                /* to use retained filters */
                if (this.activityFlag) {
                    this.selected_activities = [];
                    this.retained_activities.forEach(activity => {
                        let _activity = this.all_activities.find(activities => activities['keyID'] == activity);
                        this.selectActivity(_activity);
                    });

                    this.applyActivityFilter();
                    this.setActivityAccToScope();
                } else {
                    this.selected_activities = this.activity.map(activity => activity);
                    this.selectAllActivities();
                }
            },
                error => {
                    console.log('error in getAllActivity -', error);
                    this.toastrService.openToast('Error', 'Error while fetching activities', 'error');
                })
    }

    async getActivityListByScopeID(scopeID): Promise<any[]> {
        return new Promise(resolve => {
            let activityList: any[] = [];
            this.activityController.getActivityListByScopeID(scopeID)
                .subscribe((activityRes: any[]) => {
                    activityList = activityRes;
                },
                    error => {
                        console.log('error in getDataFormListByScope -', error);
                        this.toastrService.openToast('Error', 'Error while fetching activities', 'error');
                    }).add(() =>
                        resolve(activityList)
                    );
        })
    }

    formatDate(date: Date, control: AbstractControl) {
        let formatted = moment(date).format("YYYY-MM-DD");
        control.patchValue(formatted);
    }

    resetOnNoChange(event) {
        if (event) {
            this.prev = this.activityFC.value;
            this.activityFilterApplied = false;
        } else {
            if (this.prev != this.activityFC.value && !this.activityFilterApplied) {
                this.activityFC.patchValue(this.prev, { onlySelf: true });
            }
        }
    }

    ngAfterViewInit() {
        this.getRetainedFilters();

        if (this.hasDateFilter) {
            this.filterChild.frequencyFC.patchValue(this.retained_frequency);
            this.filterChild.startDateFC.patchValue(this.retained_startDate);
            this.filterChild.endDateFC.patchValue(this.retained_endDate);
            this.filterChild.durationFC.patchValue(this.retained_duration);
            this.filterChild.daterange.patchValue({ startDate: moment(this.retained_startDate), endDate: moment(this.retained_endDate) });
        }

        if (this.retained_consolidation_approach != null) {
            this.carbonFilterChild.consolidationApproachFC.patchValue(this.retained_consolidation_approach);
        }

        if (this.retained_include_subsidiary) {
            this.carbonFilterChild.subsidiaryFC.patchValue(this.retained_include_subsidiary, { emitEvent: false });
        }

        merge(
            this.filterChild.emitFilter,
            this.carbonFilterChild.emitFilter,
        ).pipe(takeUntil(this.end_subscription)).subscribe(() => this.checkAllFilters());
    }

    getRetainedFilters() {
        let have_filters: boolean = JSON.parse(this.storageService.getStorage('filters')) != null;

        if (have_filters) {
            let retained_storage_filters = JSON.parse(this.storageService.getStorage('filters'))['sustainability_accounting'];
            if (!this.have_query_filters && retained_storage_filters != null) {
                this.have_saved_filters = true;
                this.retained_filters = retained_storage_filters;
            }
        }
        if (this.have_query_filters || this.have_saved_filters) {
            for (let key in this.retained_filters) {
                let value = this.retained_filters[key];
                if (key == 'activity') {
                    if (this.retained_filters['activity'] instanceof Array) {
                        value = this.retained_filters['activity'];
                    } else {
                        value = [this.retained_filters['activity']];
                    }
                }

                this.setRetainedFilters(key, value);
            }
        }
    }

    setRetainedFilters(filter, value) {
        switch (filter) {
            case 'search':
                this.searchFlag = true;
                this.searchValue = value;
                this.filterArr.push(`${filter}:${value}`);
                break;
            case 'scope':
                this.scopeFlag = true;
                this.scopeFC.patchValue(value);
                this.filterArr.push(`${filter}:${value}`);

                let scope;
                if (value == ScopeKeyIDEnum.SCOPE_1_KEY_ID) { scope = { name: "Scope 1", keyID: 'SCOPE1' }; }
                else if (value == ScopeKeyIDEnum.SCOPE_2_KEY_ID) { scope = { name: "Scope 2", keyID: 'SCOPE2' }; }
                else if (value == ScopeKeyIDEnum.SCOPE_3_KEY_ID) { scope = { name: "Scope 3", keyID: 'SCOPE3' }; }
                else { scope = { name: "Scope 3", keyID: 'SCOPE3' }; }

                this.toggleScopeChip(scope);
                break;
            case 'activity':
                this.activityFlag = true;
                this.retained_activities = value;
                this.activityFC.patchValue(this.retained_activities);
                this.filterArr.push(`${filter}:${value}`);
                break;
            case 'frequency':
                this.hasDateFilter = true;
                this.retained_frequency = value;
                break;
            case 'startDate':
                this.hasStartDate = true;
                this.retained_startDate = value;
                break;
            case 'endDate':
                this.retained_endDate = value;
                break;
            case 'duration':
                this.retained_duration = value;
                break;
            case 'dataSource':
                this.record_type = value;
                this.filterArr.push(`${filter}:${value}`);

                if (this.record_type != 'all') {
                    this.recordTypeFlag = true;
                    this.recordTypeFC.patchValue([Number(this.record_type)]);
                }
                break;
            case 'includeSubsidiary':
                this.retained_include_subsidiary = Boolean(value);
                break;
            case 'consolidationApproach':
                this.have_retained_consolidation_approach = true;
                this.retained_consolidation_approach = value;
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

    end_subscription: Subject<any> = new Subject();

    checkAllFilters() {
        if (this.carbonFilterChild.consolidationApproach != null) {
            this.getCarbonAccountingData();
            this.end_subscription.next();
        }
    }

    record_type: any;
    getCarbonAccountingData() {
        this.sort.sortChange.subscribe(() => { this.paginator.pageIndex = 0; });
        fromEvent(this.refreshBtn.nativeElement, "click").subscribe(() => { this.paginator.pageIndex = 0; });
        fromEvent(this.activityBtn.nativeElement, "click").subscribe(() => { this.paginator.pageIndex = 0; });

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.scopeSelect.mono,
            this.durationPeriodFC.valueChanges,
            fromEvent(this.refreshBtn.nativeElement, "click"),
            fromEvent(this.activityBtn.nativeElement, "click"),
            fromEvent(this.recordTypeBtn.nativeElement, "click"),
            merge(this.filterChild.emitFilter, this.carbonFilterChild.emitFilter)
        ).pipe(
            startWith({}),
            switchMap((): any => {
                if (this.filterChild.startDateFC.value > this.filterChild.endDateFC.value) {
                    this.toastrService.openToast('Error', 'Invalid date range', 'error');
                    return [];
                }

                if (this.recordTypeFC.value.length == 0) {
                    this.toastrService.openToast('Error', 'Invalid filter for record type', 'error');
                    return [];
                }

                if (this.activityFlag) {
                    if (this.activityFC.value.length == 0) {
                        this.toastrService.openToast('Error', 'Invalid filter for activities', 'error');
                        return [];
                    }
                }

                this.filterArr = [];
                {
                    let selected_recordTypes = this.recordTypeFC.value.length - 1;
                    if (selected_recordTypes == this.totalDcms) {
                        this.recordTypeFlag = false;
                        this.record_type = ['all'];
                    } else {
                        this.record_type = this.recordTypeFC.value;
                    }

                    this.filterArr.push('dataSource:' + this.record_type);
                }
                if (this.searchFlag) {
                    this.filterArr.push("search:" + this.searchValue);
                }

                if (this.scopeFlag) {
                    if (this.scopeFC.value == 'all') { this.scopeFlag = false; }
                    else this.filterArr.push('scope:' + this.scopeFC.value);
                }

                if (this.activityFlag) {
                    let selected_activities = this.activityFC.value.length - 1;

                    if (selected_activities == this.totalActivities) { this.activityFlag = false; }
                    else this.filterArr.push('activity:' + this.activityFC.value);
                }

                this.saveFilters();

                let startDate = this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
                let endDate = this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);

                return this.sustainabilityAccountingController.getAccountList(
                    this.currentOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    startDate,
                    endDate,
                    this.carbonFilterChild.subsidiaryFC.value,
                    this.carbonFilterChild.consolidationApproachFC.value,
                    this.filterArr,
                    this.isChecked
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null) {
                    this.resultLength = 0;
                    return [];
                }

                this.taskCount = dataSource['count'];
                this.resultLength = dataSource["totalCount"];
                return dataSource["record"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    searchFn(value: string) {
        if (!this.searchFlag) {
            this.resetAllFilter();
            this.searchFlag = true;
        }

        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
            this.resetAllFilter();
        } else {
            this.scopeFC.reset('all');
            this.activityFC.reset(['all']);

            this.selectAllActivities();
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }

    resetAllFilter() {
        this.clearAllChips();
    }

    onApplyFilterClick() {
        if (this.activityFC.value.length != 0) {
            this.activityFlag = true
            this.applyActivityFilter();
            this.activitySelect.close();
        }
    }

    applyActivityFilter() {
        if (this.activityFC.value.length == 0) { return; }

        this.activityFilterApplied = true;
        this.chips = this.chips.filter(chip => chip['type'] != 'activity');

        if (this.activityFC.value.includes('all')) {
            this.activityFlag = false;
            return;
        }

        this.selected_activities.forEach(activity => {
            let chip = this.chips.find(chip => chip['filter'].includes(`${activity['name']}`));
            if (chip) {
                const index = this.chips.indexOf(chip);
                if (index >= 0) { this.chips.splice(index, 1); }
            } else {
                this.chips.push({ type: 'activity', key: activity['keyID'], filter: `${activity['name']}` });
            }
        });
    }

    resetActivityFilter(domainKeyID) {
        this.activityFlag = false;
        this.activityFC.reset([]);
        this.chips = this.chips.filter(chip => chip['type'] != 'activity');

        if (domainKeyID == 'all') this.activity = this.all_activities;
        else {
            let selected_domain = domainKeyID;
            if (selected_domain == 'scope_1') this.activity = this.scope_1_activities;
            else if (selected_domain == 'scope_2') this.activity = this.scope_2_activities;
            else this.activity = this.all_activities;
        }

        this.totalActivities = this.activity.length;
        this.all_activity_keyID = ['all'];
        this.activity.map((activity) => { this.all_activity_keyID.push(activity['keyID']) });

        this.selectAllActivities();
        this.selected_activities = this.activity.map(activity => activity);
    }

    selectActivity(activity /* activity: json{} */) {
        const index = this.selected_activities.indexOf(activity);
        if (index >= 0) {
            this.selected_activities.splice(index, 1);
        } else {
            this.selected_activities.push(activity);
        }

        const k = this.activityFC.value.indexOf('all');
        if (k > -1) {
            if (this.activityFC.value.length > this.totalActivities) {
                this.activityFC.patchValue([]);
            } else if (this.activityFC.value.length == this.totalActivities) {
                this.activityFC.value.splice(k, 1);
                this.activityFC.patchValue(this.activityFC.value);
            } else {
                this.activityFC.patchValue(this.all_activity_keyID);
            }
        } else {
            if (this.activityFC.value.length == this.totalActivities) {
                this.activityFC.patchValue(this.all_activity_keyID);
            }
        }
    }

    selectAllActivities() {
        if (!this.activityFC.value.includes('all') && this.activityFC.value.length > 0) {
            this.activityFC.reset([]);
            this.selected_activities = [];
            return;
        }

        this.patchAccToScope();
    }

    reset_recordTypeOnNoChange(event) {
        if (event) {
            this.prev_record_type = this.recordTypeFC.value;
            this.recordTypeFilterApplied = false;
        } else {
            if (this.prev != this.recordTypeFC.value && !this.recordTypeFilterApplied) {
                this.recordTypeFC.patchValue(this.prev_record_type, { onlySelf: true });
            }
        }
    }

    applyRecordTypeFilter() {
        if (this.recordTypeFC.value.length == 0) return;

        this.recordTypeFilterApplied = true;
        this.chips = this.chips.filter(chip => chip['type'] != 'dcm');

        if (this.recordTypeFC.value.includes('all')) {
            this.recordTypeFlag = false;
            return;
        }

        this.selected_dcms.forEach(dcm => {
            let chip = this.chips.find(chip => chip['filter'].includes(`${dcm['dataCollectionMethodName']}`));
            if (chip) {
                const index = this.chips.indexOf(chip);
                if (index >= 0) { this.chips.splice(index, 1); }
            } else {
                this.chips.push({ type: 'dcm', key: dcm['dataCollectionMethodID'], filter: `${dcm['dataCollectionMethodName']}` });
            }
        });
    }

    resetRecordTypeFilter() {
        this.recordTypeFC.reset([]);
        this.chips = this.chips.filter(chip => chip['type'] != 'dcm');

        this.selectAllRecordTypes();
        this.selected_dcms = this.dcm.map(dcm => dcm);
    }

    selectRecordType(dcm /* data_collection_method: json{} */) {
        const index = this.selected_dcms.indexOf(dcm);
        if (index >= 0) {
            this.selected_dcms.splice(index, 1);
        } else {
            this.selected_dcms.push(dcm);
        }

        const k = this.recordTypeFC.value.indexOf('all');
        if (k > -1) {
            if (this.recordTypeFC.value.length > this.totalDcms) {
                this.recordTypeFC.patchValue([]);
            } else if (this.recordTypeFC.value.length == this.totalDcms) {
                this.recordTypeFC.value.splice(k, 1);
                this.recordTypeFC.patchValue(this.recordTypeFC.value);
            } else {
                this.recordTypeFC.patchValue(this.all_dcm_key_ids);
            }
        } else {
            if (this.recordTypeFC.value.length == this.totalDcms) {
                this.recordTypeFC.patchValue(this.all_dcm_key_ids);
            }
        }
    }

    selectAllRecordTypes() {
        if (!this.recordTypeFC.value.includes('all') && this.recordTypeFC.value.length > 0) {
            this.recordTypeFC.reset([]);
            this.selected_dcms = [];
            return;
        }

        this.recordTypeFC.patchValue(this.all_dcm_key_ids);
    }

    scopeChange() {
        this.activityFC.reset([]);
        this.selectAllActivities();
    }

    toggleScopeChip(scope) {
        this.chips = this.chips.filter((chip) => chip['type'] == 'dcm');
        if (scope['keyID'] == 'all') {
            this.scopeFlag = false;
            return;
        }
        this.chips.push({ type: 'scope', key: scope['id'], filter: `${scope['name']}` });
    }

    removeChip(chip): void {
        const index = this.chips.indexOf(chip);

        if (index >= 0) {
            switch (chip['type']) {
                case 'activity':
                    const k = this.activityFC.value.indexOf(chip['key']);
                    if (k > -1) { this.activityFC.value.splice(k, 1); }
                    this.activityFC.setValue(this.activityFC.value);
                    let found = this.selected_activities.findIndex((activity) => activity['keyID'] == chip['key']);
                    this.selected_activities.splice(found, 1);
                    break;
                case 'dcm':
                    const d = this.recordTypeFC.value.indexOf(chip['key']);
                    if (d > -1) { this.recordTypeFC.value.splice(d, 1); }
                    this.recordTypeFC.setValue(this.recordTypeFC.value);
                    let dcm_found = this.selected_dcms.findIndex((dcm) => dcm['keyID'] == chip['key']);
                    this.selected_dcms.splice(dcm_found, 1);
                    break;
                case 'scope':
                    this.scopeFlag = false;
                    this.scopeFC.reset('all');
                    this.resetActivityFilter('all');
                    break;
                default:
                    console.log('undefined case encountered');
            }

            this.chips.splice(index, 1);
            if (this.chips.filter(chip => chip['type'] == 'activity').length == 0) {
                this.patchAccToScope();
            }

            if (this.chips.filter(chip => chip['type'] == 'dcm').length == 0) {
                this.recordTypeFC.patchValue(this.all_dcm_key_ids);
                this.selected_dcms = this.dcm.map(dcm => dcm);
            }
            this.refreshBtn.nativeElement.click();
        }
    }

    patchAccToScope() {
        this.setActivityAccToScope();
        if (this.scopeFC.value == ScopeKeyIDEnum.SCOPE_1_KEY_ID) {
            this.activityFC.patchValue(this.scope_1_acitivities_keyIDs);
        } else if (this.scopeFC.value == ScopeKeyIDEnum.SCOPE_2_KEY_ID) {
            this.activityFC.patchValue(this.scope_2_acitivities_keyIDs);
        } else if (this.scopeFC.value == ScopeKeyIDEnum.SCOPE_3_KEY_ID) {
            this.activityFC.patchValue(this.scope_3_acitivities_keyIDs);
        } else {
            this.activityFC.patchValue(this.all_activity_keyID);
        }
        this.selected_activities = this.activity.map(activity => activity);
    }

    setActivityAccToScope() {
        if (this.scopeFC.value == ScopeKeyIDEnum.SCOPE_1_KEY_ID) {
            this.activity = this.scope_1_activities;
            this.totalActivities = this.scope_1_activities.length;
        } else if (this.scopeFC.value == ScopeKeyIDEnum.SCOPE_2_KEY_ID) {
            this.activity = this.scope_2_activities;
            this.totalActivities = this.scope_2_activities.length;
        } else if (this.scopeFC.value == ScopeKeyIDEnum.SCOPE_3_KEY_ID) {
            this.activity = this.scope_3_activities;
            this.totalActivities = this.scope_3_activities.length;
        } else {
            this.activity = this.all_activities;
            this.totalActivities = this.all_activities.length;
        }
    }

    clearAllChips() {
        this.scopeFlag = false;
        this.activityFlag = false;
        this.recordTypeFlag = false;

        this.chips = [];
        this.scopeFC.reset('all');
        this.resetRecordTypeFilter();
        this.resetActivityFilter('all');

        this.refreshBtn.nativeElement.click();
    }

    getRoute(record: any): string {
        return '.';
    }

    private saveFilters() {
        let startDate = this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD');
        let endDate = this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD')

        let frequency = this.filterChild.frequencyFC.value
        let duration = this.filterChild.durationFC.value

        let filters = {
            haveFilters: true,
            frequency: frequency,
            duration: duration,
            startDate: startDate,
            endDate: endDate,
            dataSource: this.record_type,
            includeSubsidiary: this.carbonFilterChild.subsidiaryFC.value,
            consolidationApproach: this.carbonFilterChild.consolidationApproachFC.value,
            pageSize: this.paginator.pageSize,
            pageIndex: this.paginator.pageIndex,
            sortBy: this.sort.active,
            sort: this.sort.direction
        };

        if (this.scopeFC.value != 'all') {
            filters['scope'] = this.scopeFC.value;
        }

        const selected_activities = this.activityFC.value;
        if (selected_activities instanceof Array && !selected_activities.includes('all') && selected_activities.length != 0) {
            filters['activity'] = selected_activities;
        }

        if (this.searchFlag) {
            filters['search'] = this.searchValue;
        }

        this.setToStorage('sustainability_accounting', filters);
    }

    setToStorage(key: string, filters: any) {
        let json = {};
        json[key] = filters;
        this.storageService.setStorage('filters', JSON.stringify(json));
        this.router.navigate([location.pathname], { queryParams: filters });
    }

    isLink(activityKeyID) {
        const activityKeyIDArray = [ActivityKeyIDEnum.REFRIGERATION_AC_AND_FIRE_SUPPRESSION];
        return !activityKeyIDArray.includes(activityKeyID);
    }

    optionVisibility(row) {
        let activityKeyID: string = row?.activityKeyID;
        const activityKeyIDArray = [ActivityKeyIDEnum.REFRIGERATION_AC_AND_FIRE_SUPPRESSION.toString()];

        if (!activityKeyIDArray.includes(activityKeyID)) {
            return true;
        }
        return false;
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    routeToADUpdate = (record) => {
        // if (record.scopeKeyID == ScopeKeyIDEnum.SCOPE_3_KEY_ID && record.activityKeyID != ActivityKeyIDEnum.WASTE_GENERATED_IN_OPERATIONS) {
        //     let dialogRef;
        // dialogRef = this.dialog.open(UpdateCategorizedRecordsComponent, {
        //     data: {
        //         currentOrgID: this.currentOrgID,
        //         activityDataID: record['activityDataID']
        //     },
        //     minWidth: '600px',
        //     maxWidth: '600px',
        //     height: '100%',
        //     position: { right: '-2px', top: '0px' },
        // });

        // dialogRef.afterClosed().subscribe((closeRes) => {
        //     if (closeRes == 'Success') {
        //         this.refreshBtn.nativeElement.click();
        //     }
        // })
        // } 
        console.log(record);
        if (record.activityKeyID == ActivityKeyIDEnum.OTHER_FUGITIVE_EMISSION) {
            let dialogRef;
            dialogRef = this.dialog.open(FugitiveReleasesCreateUpdateDailog, {
                data: {
                    currentOrgID: this.currentOrgID,
                    action: FormAction.UPDATE,
                    activityDataID: record.recordID
                },
                minWidth: '600px',
                maxWidth: '600px',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });

            dialogRef.afterClosed().subscribe((closeRes) => {
                if (closeRes == DialogEnum.SUCCESS_DR) {
                    this.refreshBtn.nativeElement.click();
                }
            })
        } else if (record.activityKeyID == ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES || record.activityKeyID == ActivityKeyIDEnum.CAPITAL_GOODS) {
            this.router.navigate([
                `/activity-data/activity/${record['activityKeyID']}/method/${record['calculationApproachKeyID']}/update`],
                { queryParams: { activityID: record['activityID'], activityDataID: record['activityDataID'], activityKeyID: record['activityKeyID'], calculationApproachKeyID: record['calculationApproachKeyID'] } }
            );
        } else {
            this.router.navigate([
                `/activity-data/${record['activityDataID']}/activity/${record['activityKeyID']}`,
                { outlets: { activityConfig: ['update'], activityData: ['update'] } }],
                { queryParams: { activityID: record['activityID'], activityDataID: record['activityDataID'], activityKeyID: record['activityKeyID'], action: 'update', from: 'record' } }
            );
        }
    }

    dateToogle() {
        this.refreshBtn.nativeElement.click()
    }

    routerLink(record) {
        const activityDataKeys = ["capital-goods", "upstream-transportation-and-distribution", "downstream-transportation-and-distribution", "business-travel", "purchased-goods-and-services", "mobile-combustion", "stationary-combustion", "purchased-electricity", "purchased-heat-steam", "purchased-cooling", "waste-generated-in-operations", "other-fugitive-emission"];
        const activityDataKeysForEmployee = ["employee-commuting"];

        if (record.activityKeyID == ActivityKeyIDEnum.PROCESS_EMISSION) {
            return null;
        } else if (activityDataKeys.includes(record['activityKeyID'])) {
            return `/sustainability-accounting/carbon/view/${record['activityKeyID']}/${record['activityDataID']}/${record['calculatedEmissionDataID']}`;
        } else if (activityDataKeysForEmployee == record['activityKeyID']) {
            return `/sustainability-accounting/carbon/view/${record['activityKeyID']}/${record['recordID']}/${record['calculatedEmissionDataID']}`;
        } else if (
            record['type'] === EmissionDataTypeEnum.SUBSIDIARY_EMISSION ||
            record['type'] === EmissionDataTypeEnum.MERGER_ACQUISITION ||
            record['type'] === EmissionDataTypeEnum.DIVESTMENT ||
            record['type'] === EmissionDataTypeEnum.OUTSOURCING ||
            record['type'] === EmissionDataTypeEnum.INSOURCING) {
            return true;
        } else {
            return `/sustainability-accounting/carbon/record-details/${record['calculationApproachKeyID']}/${record['calculatedEmissionDataID']}`
        }
    }

    selectActivityForm() {
        let dialogRef;
        dialogRef = this.dialog.open(ActivitySelectionComponent, {
            height: '100vh',
            width: '800px',
            position: { right: '-2px', top: '0px' },
            data: {
                origin: ActivityConfigEnum.AD_HOC,
                action: 'create'
            }
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                console.log(result)
                if (result === 'opSuccess') {
                }
            });
    }

    // showActivityConfigSelection() {
    //     const dialogRef = this.dialog.open(ActivityConfigSelection, {
    //         height: "100%",
    //         minWidth: '800px',
    //         position: { right: "-2px", top: "0px" },
    //     });
    // }

    showActivityConfigSelection() {
        const dialogRef = this.dialog.open(ActivityConfigSelection, {
            height: "100%",
            width: '700px',
            position: { right: "-2px", top: "0px" },
            panelClass: 'matDialogContainerOverride',
            data: {
                showActivityType: true,
                activityTypeKeyID: ACTIVITY_FORM_TYPE_KEYID_ENUM.GHG_FORM
            }
        });
    }
}
