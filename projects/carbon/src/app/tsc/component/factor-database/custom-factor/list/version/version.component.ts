import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
    pipe,
    merge,
    fromEvent,
    of as observableOf,
} from "rxjs";

import {
    map,
    startWith,
    switchMap,
    catchError,
} from "rxjs/operators";

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import {
    ActivatedRoute,
    Router,
} from '@angular/router';

import {
    faEllipsisV,
    faPlus
} from '@fortawesome/free-solid-svg-icons';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { TABLE_CONSTANT, MATERIAL_CONSTANT, SearchBarOneComponent } from '@library/tsc-common';
import { ProfileImg, UserService } from '@library/user-service';

import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';

import { ActivePagePillService } from '@carbon/service/active-page-pill.service';
import { CustomFactorController } from '@carbon/controller/custom-factor.controller';
import { CustomFactorVersionController } from '@carbon/controller/custom-factor-version.controller';

@Component({
    selector: 'app-list',
    templateUrl: '../list.component.html',
    styles: []
})
export class VersionComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    CARBON_CONSTANT = CARBON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    ProfileImg = ProfileImg;
    
    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    nameSize: number = 12;
    resultLength: number = 0;
    tableTitle = "versions";
    tableSubTitle = "We realise custom emission factors will vary with time. Create versions of the same custom emission factors.";
    tableType = "version";
    table = {
        "version": {
            "searchBy": "version name",
            "sortBy": "versionName",
            "data": [
                {
                    "header": {
                        "heading": 'Name',
                        "text-center": false,
                        "disable-sort": true,
                    },
                    "data": {
                        "text-center": false,
                        "cursorPointer": true
                    },
                    "column": 'name',
                    "actions": [
                        {
                            name: 'Update',
                            method: 'update'
                        },
                    ],
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": true
                },
                {
                    "header": {
                        "heading": 'Valid from',
                        "text-center": false,
                        "disable-sort": true,
                    },
                    "data": {
                        "text-center": false,
                        "cursorPointer": true
                    },
                    "column": 'validFrom',
                    "actions": [
                        {
                            name: 'Update',
                            method: 'update'
                        },
                    ],
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": true
                },
                {
                    "header": {
                        "heading": 'Valid till',
                        "text-center": false,
                        "disable-sort": true,
                    },
                    "data": {
                        "text-center": false,
                        "cursorPointer": true
                    },
                    "column": 'validTill',
                    "actions": [
                        {
                            name: 'Update',
                            method: 'update'
                        },
                    ],
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": true
                },
                {
                    "header": {
                        "heading": 'Version Source',
                        "text-center": false,
                        "disable-sort": true,
                    },
                    "data": {
                        "text-center": false
                    },
                    "column": 'versionSourceName',
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": false
                },
                // {
                //     "header": {
                //         "heading": 'Linked reporting periods',
                //         "text-center": false,
                //         "disable-sort": true,
                //     },
                //     "data": {
                //         "text-center": false
                //     },
                //     "column": 'linkedReportingPeriods',
                //     "databaseType": "all",
                //     "sort-disabled": true,
                //     "isLink": false
                // },
                {
                    "header": {
                        "heading": 'Linked records for current reporting period',
                        "text-center": false,
                        "disable-sort": true,
                    },
                    "data": {
                        "text-center": true
                    },
                    "column": 'linkedRecords',
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": false
                },
                {
                    "header": {
                        "heading": '',
                        "text-center": false,
                        "disable-sort": true,
                    },
                    "data": {
                        "text-center": true
                    },
                    "column": 'actions',
                    "actions": [
                        // {
                        //     icon: 'edit',
                        //     tooltip: ButtonTooltipEnum.UPDATE,
                        //     iconClass: 'text-primary updateIconHover',
                        //     function: this.update,
                        // }
                    ],
                    "more-actions": [],
                    "databaseType": "all",
                    "sort-disabled": true,
                    "isLink": false
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
        let activeColumns = this.table[this.tableType]['data']
            .filter(table => (table['databaseType'] == 'all' || table['databaseType'] == this.databaseType));

        return activeColumns.map(activeColumn => activeColumn['column']);
    }

    dataSource: any;

    databaseType: string;
    searchValue: string = 'all';

    factorID: any;
    databaseID: any;
    currentOrgID: any;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild(SearchBarOneComponent) searchBar: SearchBarOneComponent;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private customFactorController: CustomFactorController,
        private customFactorVersionController: CustomFactorVersionController,
        public userService: UserService,
        // private dialog: MatDialog,
        storageService: StorageService,
        private toastrService: ToastrService,
        private activePagePillService: ActivePagePillService,
    ) { 
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    customFactorType: string = 'emission';
    ngOnInit(): void {

        this.activatedRoute.params.subscribe((params) => {
            if (params['cefDB']) {

                const url: String = this.router.url;
                const parts = url.split('/'); parts.splice(-3);
                const finalUrl = parts.join('/');

                let folder = {
                    name: decodeURIComponent(params['cefDB']),
                    route: `${decodeURI(finalUrl)}`
                }

                if (url.includes('emission')) {
                    this.customFactorType = 'emission';
                    this.activePagePillService.cef = folder;
                } else if (url.includes('estimation')) {
                    this.customFactorType = 'estimation';
                    this.activePagePillService.customEstimationFactor = folder;
                }
            }

            if (params['factorID']) {
                this.factorID = params['factorID'];
                this.databaseID = params['cefDBID'];

                let folder = {
                    name: decodeURIComponent(params['factorName']),
                    route: `${decodeURI(this.router.url)}`
                }
                const url: String = this.router.url;
                if (url.includes('emission')) {
                    this.databaseType = 'emission';
                    setTimeout(() => this.activePagePillService.cef = folder);
                } else if (url.includes('estimation')) {
                    this.databaseType = 'estimation';
                    this.tableSubTitle = 'We realise custom estimation factors will vary with time. Create versions of the same custom estimation factors.';
                    setTimeout(() => this.activePagePillService.customEstimationFactor = folder);
                }
            }
        });
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {

                return this.customFactorVersionController.getVersion(
                    this.currentOrgID,
                    this.databaseID,
                    this.factorID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchValue /* this.filter */
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null || dataSource['factors'].length == 0) {
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

    searchFn(search: string) {
        this.searchValue = search;

        if (search.length == 0) {
            this.searchValue = 'all';

            this.searchBar.searchClear();
        }
        this.refreshBtn.nativeElement.click();
    }

    getRoute(version, column) {
        switch (column) {
            case 'name':
                return `.`;
            case 'linkedRecords':
                return `.`;
            default:
                return `.`;
        }
    }

    getTooltipValue(array: any[]) {
        return array.slice(1).join('\n');
    }

    create() {
        console.log('create')
        this.getFactorByID('create', this.factorID);
    }

    getFactorByID(action, factorID) {
        this.customFactorController.getFactorByID(this.currentOrgID, factorID)
            .subscribe(cefRes => {
                if (action == 'update') {
                    this.router.navigate([this.router.url, this.versionID, 'update', {
                        outlets: {
                            reference: [cefRes['details']['activityKeyID']],
                            value: this.customFactorType == 'emission' ?
                                [this.customFactorType, 'factor-value'] :
                                [this.customFactorType, cefRes['details']['activityKeyID']] /* TODO_PN same factor values for all activities */
                        }
                    }]);
                } else {
                    this.router.navigate([this.router.url, 'create', {
                        outlets: {
                            reference: [cefRes['details']['activityKeyID']],
                            value: this.customFactorType == 'emission' ?
                                [this.customFactorType, 'factor-value'] :
                                [this.customFactorType, cefRes['details']['activityKeyID']] /* TODO_PN same factor values for all activities */
                        }
                    }]);
                }
            },
                error => {
                    console.log('error in getFactorByID() -', error);
                    this.toastrService.openToast(error.error['title'], error.error['message'], error.error['result']);
                });
    }

    versionID;
    execute(method, version) {
        this.versionID = version['id'];
        this.getFactorByID('update', this.factorID);

        // this.router.navigate([this.router.url, version['id'], 'update']);
    }
}
