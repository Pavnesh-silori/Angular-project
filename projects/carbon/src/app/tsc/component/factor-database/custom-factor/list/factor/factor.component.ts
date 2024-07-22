import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
    fromEvent,
    merge,
    of as observableOf
} from "rxjs";

import {
    catchError,
    map,
    startWith,
    switchMap,
} from "rxjs/operators";

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';

import {
    ActivatedRoute,
    Router
} from '@angular/router';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { FormControl } from '@angular/forms';
import { ActivityController } from '@carbon/controller/activity.controller';
import { CustomFactorController } from '@carbon/controller/custom-factor.controller';
import { ScopeController } from '@carbon/controller/scope.controller';
import { ScopeKeyIDEnum } from '@carbon/enum/scope.enum';
import { ActivePagePillService } from '@carbon/service/active-page-pill.service';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { ButtonTooltipEnum, DialogResponseEnum, FunnelFilterComponent, MATERIAL_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { ProfileImg, UserService } from '@library/user-service';
import { UpdateFactorDialog } from '../../dialog/update-factor/update-factor-dialog.component';

@Component({
    selector: 'app-list',
    templateUrl: '../list.component.html',
    styleUrls: ['../list.component.scss']
})
export class FactorComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    CARBON_CONSTANT = CARBON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    
    ProfileImg = ProfileImg;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    nameSize: number = 12;
    resultLength: number = 0;
    tableTitle = "factors";
    tableSubTitle = "Create custom emission factors to have a better calculation accuracy as compared to using standard emission factors.";
    tableType = "factor";


    update = (factor: any) => {
        const dialogRef = this.dialog.open(UpdateFactorDialog, {
            data: {
                factorID: factor['id'],
            },
            minWidth: '600px'
        });

        dialogRef.afterClosed()
            .subscribe((res) => {
                if (res == DialogResponseEnum.SUCCESS) { 
                    this.refreshBtn.nativeElement.click(); 
                }
            });
    }

    table = {
        "factor": {
            "searchBy": "factor name",
            "sortBy": "factorName",
            "data": [
                {
                    "databaseType": "all",
                    "header": {
                        "heading": 'Name',
                        "text-center": false,
                        "disable-sort": false,
                        "hasFilter": false,
                        "filterType": '',
                    },
                    "data": {
                        "text-center": false,
                        "cursorPointer": true
                    },
                    "column": 'name',
                    "sort-disabled": true,
                    "isLink": true,
                    "hasProfileImage": false
                },
                {
                    "header": {
                        "heading": 'Scope',
                        "text-center": false,
                        "disable-sort": true,
                        "hasFilter": true,
                        "filterType": 'scope',
                    },
                    "data": {
                        "text-center": false,
                        "cursorPointer": true
                    },
                    "column": 'scope',
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": true,
                    "hasProfileImage": false
                },
                {
                    "header": {
                        "heading": 'Activity Type',
                        "text-center": false,
                        "disable-sort": true,
                        "hasFilter": true,
                        "filterType": 'activity',
                    },
                    "data": {
                        "text-center": false,
                        "cursorPointer":true
                    },
                    "column": 'activityType',
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": true,
                    "hasProfileImage": false
                },
                {
                    "header": {
                        "heading": 'Status',
                        "text-center": true,
                        "disable-sort": true,
                        "hasFilter": true,
                        "filterType": 'status',
                    },
                    "data": {
                        "text-center": false
                    },
                    "column": 'daysLeft',
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": false,
                    "hasProfileImage": false
                },
                {
                    "header": {
                        "heading": 'Created by',
                        "text-center": false,
                        "disable-sort": true,
                        "hasFilter": false,
                        "filterType": '',
                    },
                    "data": {
                        "text-center": false
                    },
                    "column": 'createdBy',
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": false,
                    "hasProfileImage": true
                },
                // {
                //     "header": {
                //         "heading": 'Linked reporting periods',
                //         "text-center": false,
                //         "disable-sort": true,
                //         "hasFilter": false,
                //         "filterType": '',
                //     },
                //     "data": {
                //         "text-center": false
                //     },
                //     "column": 'linkedReportingPeriods',
                //     "databaseType": "estimation",
                //     "sort-disabled": true,
                //     "isLink": false,
                //     "hasProfileImage": false
                // },
                {
                    "header": {
                        "heading": 'Linked records for current reporting period',
                        "text-center": false,
                        "disable-sort": true,
                        "hasFilter": false,
                        "filterType": '',
                    },
                    "data": {
                        "text-center": true
                    },
                    "column": 'linkedRecords',
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": false,
                    "hasProfileImage": false
                },
                {
                    "header": {
                        "heading": '',
                        "text-center": false,
                        "disable-sort": true,
                        "hasFilter": false,
                        "filterType": '',
                    },
                    "data": {
                        "text-center": true
                    },
                    "column": 'actions',
                    "actions": [
                        {
                            icon: 'edit',
                            tooltip: ButtonTooltipEnum.UPDATE,
                            iconClass: 'text-primary updateIconHover',
                            function: this.update,
                        }
                    ],
                    "more-actions": [],
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": false,
                    "hasProfileImage": false
                }
            ]
        }
    };

    tableHeader(index: number) {
        return this.table[this.tableType]['data'][index]['header'];
    }

    tableData(index: number) {
        return this.table[this.tableType]['data'][index]['data'];
    }

    get displayedColumns() {
        return this.table[this.tableType]['data']
            .filter(a => (a['databaseType'] == 'all' || a['databaseType'] == this.databaseType)).map(c => c['column']);
    }

    dataSource: any;

    databaseID: any;
    databaseType: string;

    searchFlag: boolean = false;
    searchValue: String = 'all';

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('activityBtn') activityBtn: ElementRef;
    @ViewChild(SearchBarOneComponent) searchBar: SearchBarOneComponent;

    @ViewChild('scopeSelect') scopeSelect: FunnelFilterComponent;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;
    @ViewChild('activitySelect') activitySelect: MatSelect;

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private scopeController: ScopeController,
        private activityController: ActivityController,
        storageService: StorageService,
        public userService: UserService,
        private toastrService: ToastrService,
        private activePagePillService: ActivePagePillService,
        private customFactorController: CustomFactorController,
    ) { 
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    updateUrl: string;
    ngOnInit(): void {

        this.activatedRoute.params.subscribe((params) => {
            if (params['cefDB']) {
                this.databaseID = params['cefDBID'];
                let databaseName = decodeURIComponent(params['cefDB']);
                this.updateUrl = `/carbon-setting/factor-database/custom-emission-factor/custom/emission/database/${databaseName}/${this.databaseID}/factor`;

                let folder = {
                    name: databaseName,
                    route: `${decodeURI(this.router.url)}`
                }

                const url: String = this.router.url;
                if (url.includes('emission')) {
                    this.databaseType = 'emission';
                    setTimeout(() => this.activePagePillService.cef = folder);
                } else if (url.includes('estimation')) {
                    this.databaseType = 'estimation';
                    this.tableSubTitle = 'Create custom estimation factors to estimate activity data.';
                    setTimeout(() => this.activePagePillService.customEstimationFactor = folder);
                }
            }
        });

        this.getScopeList();
    }

    filterArr: any[];
    ngAfterViewInit() {

        fromEvent(this.activityBtn.nativeElement, "click").subscribe(() => { this.paginator.pageIndex = 0; });
        // this.statusSelect.multi.subscribe(status => this.statusFlag = !((status.length - 1) == this.status.length));

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.scopeSelect.mono,
            // this.statusSelect.multi,
            this.statusSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
            fromEvent(this.activityBtn.nativeElement, "click")
        ).pipe(
            startWith({}),
            switchMap((): any => {
                // this.filter = this.searchValue;

                if (this.activityFlag) {
                    if (this.activityFC.value.length == 0) {
                        this.activityFlag = false;
                        this.selected_activities = this.activity.map(activity => activity);;
                        this.toastrService.openToast('Error', 'Invalid filter for activities', 'error');
                        return [];
                    }
                }

                this.filterArr = [];

                let status = 'all';
                if (this.statusFlag) { status = this.statusFC.value; }
                this.filterArr.push('status:' + status);

                this.filterArr.push("search:" + this.searchValue);

                let scope = 'all';
                if (this.scopeFlag) {
                    if (this.scopeFC.value == 'all') { this.scopeFlag = false; }
                    else scope = this.scopeFC.value;
                }
                this.filterArr.push('scope:' + scope);

                if (this.activityFlag) {
                    let selected_activities = this.activityFC.value.length - 1;

                    if (selected_activities == this.totalActivities) { this.activityFlag = false; }
                    else this.filterArr.push('activity:' + this.activityFC.value);
                }

                return this.customFactorController.getFactor(
                    this.currentOrgID,
                    this.databaseID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.filterArr
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null) {
                    this.resultLength = 0;
                    return [];
                }

                this.resultLength = dataSource['totalCount'];
                return dataSource["factors"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    searchFn(search: String) {
        this.searchValue = search;

        if (search.length == 0) {
            this.searchValue = 'all';

            this.searchBar.searchClear();
        }
        this.refreshBtn.nativeElement.click();
    }

    getRoute(factor, column) {
        switch (column) {
            case 'name':
                return `${factor.name}/${factor.id}/version`;
            case 'scope':
                return `${factor.name}/${factor.id}/version`;
            case 'activityType':
                return `${factor.name}/${factor.id}/version`;
            case 'linkedRecords':
                return `.`;
            default:
                return `.`;
        }
    }

    getTooltipValue(array: any[]) {
        return array.slice(1).join('\n');
    }

    scope = [];
    status = [
        { name: "Active", keyID: 'active' },
        { name: "Scheduled", keyID: 'scheduled' },
        { name: "Expiring", keyID: 'expiring' },
        { name: "Expired", keyID: 'expired' }
    ];

    /* chips */
    chips: any[] = [];

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

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('all');

    scopeFlag: boolean = false;
    scopeFC: FormControl = new FormControl('all');

    activityFlag: boolean = false;
    activityFC: FormControl = new FormControl([]);

    getScopeList() {
        this.scopeController.getScopeList()
            .subscribe((scopeRes: any) => {
                this.scope = scopeRes;
                /* added all-scope object to scope_array */
                this.scope.unshift({ scopeID: 'all', keyID: 'all', name: 'All scope' });

                let scope1ID = this.scope.find(scope => scope['keyID'] ==  ScopeKeyIDEnum.SCOPE_1_KEY_ID)['id'];
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
        this.scope_1_activities.map((activity) => this.scope_1_acitivities_keyIDs.push(activity['keyID']));

        this.scope_2_activities = <any[]><unknown>await this.getActivityListByScopeID(scope2ID);
        this.scope_2_activities.map((activity) => this.scope_2_acitivities_keyIDs.push(activity['keyID']));

        this.scope_3_activities = <any[]><unknown>await this.getActivityListByScopeID(scope3ID);
        this.scope_3_activities.map((activity) => this.scope_3_acitivities_keyIDs.push(activity['keyID']));

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
                // if (this.activityFlag) {
                //     this.selected_activities = [];
                //     this.retained_activities.forEach(activity => {
                //         let _activity = this.all_activities.find(activities => activities['keyID'] == activity);
                //         this.selectActivity(_activity);
                //     });

                //     this.applyActivityFilter();
                //     this.setActivityAccToScope();
                // } else {
                this.selected_activities = this.activity.map(activity => activity);
                this.selectAllActivities();
                // }
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

    prev;
    activityFilterApplied: boolean = false;
    resetOnNoChange(event) {
        if (event) {
            this.prev = this.activityFC.value;
            this.activityFilterApplied = false;
        } else {
            if (this.prev != this.activityFC.value && !this.activityFilterApplied) {
                this.activityFC.patchValue(this.prev, { emitEvent: false });
            }
        }
    }

    resetSearch() {
        // this.searchFlag = false;
        this.searchBar.searchClear();
    }

    resetAllFilter() {
        // this.overViewFC.reset('all');
        this.clearAllChips();
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

    scopeChange() {
        this.activityFC.reset([]);
        this.selectAllActivities();
    }

    toggleScopeChip(scope) {
        this.chips = this.chips.filter(chip => chip['type'] == 'status');
        if (scope['keyID'] == 'all') {
            this.scopeFlag = false;
            return;
        }
        this.chips.push({ type: 'scope', key: scope['id'], filter: `${scope['name']}` });
    }

    // toggleStatusChip(status: Set<any>) {
    //     this.chips = this.chips.filter(chip => chip['type'] != 'status');

    //     if(status.size == this.status.length) { this.statusFlag = false; return };
    //     status.forEach(s => this.chips.push({ type: 'status', key: s['keyID'], filter: `${s['name']}` }))
    // }

    toggleStatusChip(status) {
        this.chips = this.chips.filter(chip => chip['type'] != 'status');
        if (status['keyID'] == 'all') {
            this.statusFlag = false;
            return;
        }
        this.chips.push({ type: 'status', key: status['id'], filter: `${status['name']}` });
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
                case 'scope':
                    this.scopeFlag = false;
                    this.scopeFC.reset('all');
                    this.resetActivityFilter('all');
                    break;
                case 'status':
                    const s = this.statusFC.value.indexOf(chip['key']);
                    if (s > -1) { this.statusFC.value.splice(s, 1); }
                    this.statusFC.setValue(this.statusFC.value);
                    let entity = this.status.find(s => s['keyID'] == chip['key']);
                    this.statusSelect.selected_entities.delete(entity)
                    break;
                default:
                    console.log('undefined case encountered');
            }

            this.chips.splice(index, 1);
            if (this.chips.filter(chip => chip['type'] == 'status').length == 0) {
                this.statusFlag = false;
                this.statusSelect.selectAllEntities()
            }
            if (this.chips.filter(chip => chip['type'] == 'activity').length == 0) {
                this.patchAccToScope();
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
        this.statusFlag = false;
        this.activityFlag = false;

        this.chips = [];
        this.scopeFC.reset('all');
        this.resetActivityFilter('all');

        this.statusFC.reset([]);
        this.statusSelect.selectAllEntities();

        this.refreshBtn.nativeElement.click();
    }

    create() {
        this.router.navigate([this.router.url + '/create']);
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    execute(method, factor) {
        if (method == 'update') {
            this.update(factor);
        } else if (method == 'delete') {
            // this.delete(factor);
        }
    }

}
