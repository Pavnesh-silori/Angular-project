import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
    fromEvent,
    merge,
    of as observableOf,
} from "rxjs";

import {
    catchError,
    map,
    startWith,
    switchMap,
} from "rxjs/operators";

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {
    ActivatedRoute,
    Router,
} from '@angular/router';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';


import { CustomDatabaseController } from '@carbon/controller/custom-database.service';

import { ActivePagePillService } from '@carbon/component/factor-database/active-page-pill/active-page-pill.service';

import { MatDialog } from '@angular/material/dialog';
// import { DeleteDialog } from '@rootNetZero/component/_shared/delete/delete-dialog.component';

import { ButtonTooltipEnum, DialogResponseEnum, FormAction, MATERIAL_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';

import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { ProfileImg, UserService } from '@library/user-service';
import { CreateDatabaseDialog } from '../../dialog/create-update-database/create-update-database-dialog.component';

@Component({
    selector: 'custom-factor-database-list',
    templateUrl: '../list.component.html',
    styles: [
    ]
})
/* c_emission_fdb_pagination: CUSTOM_EMISSION_FACTOR_DATABASE */
export class DatabaseComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    CARBON_CONSTANT = CARBON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    ProfileImg = ProfileImg;
    ButtonTooltipEnum = ButtonTooltipEnum;

    currentOrgID: any;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    nameSize: number = 50;
    resultLength: number = 0;
    tableTitle = "databases"
    tableSubTitle = "Create your own custom emission factor database to organise custom emission factors across your organization."
    tableType = "database";

    update = (database: any) => {
        const dialogRef = this.dialog.open(CreateDatabaseDialog, {
            data: {
                action: 'update',
                isUpdate: true,
                databaseID: database['id'],
                customFactorTypeStdID: this.customFactorTypeStdID,
            },
            minWidth: '600px'
        });

        dialogRef.afterClosed()
            .subscribe((res) => {
                if (res == DialogResponseEnum.SUCCESS) { this.refreshBtn.nativeElement.click(); }
            });
    }

    table = {
        database: {
            searchBy: "database name",
            sortBy: "name",
            data: [
                {
                    "databaseType": "all",
                    "header": {
                        "heading": 'Name',
                        "text-center": false,
                        "disable-sort": false,
                        "hasFilter": false,
                    },
                    "data": {
                        "cursorPointer": true,
                        "text-center": false
                    },
                    "column": 'name',
                    "sort-disabled": true,
                    "isLink": true,
                    "hasProfileImage": false
                },
                {
                    "databaseType": "all",
                    "header": {
                        "heading": 'Created By',
                        "text-center": false,
                        "disable-sort": true,
                        "hasFilter": false,
                    },
                    "data": {
                        "text-center": false
                    },
                    "column": 'createdBy',
                    "sort-disabled": true,
                    "isLink": false,
                    "hasProfileImage": true
                },
                {
                    "databaseType": "all",
                    "header": {
                        "heading": '',
                        "text-center": false,
                        "disable-sort": true,
                        "hasFilter": false,
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
                        },
                        /* TODO will have to add later */
                        // {
                        //     name: 'Delete',
                        //     class: 'btn btn-outline-danger rounded-0',
                        //     method: 'delete',
                        // }
                    ],
                    "more-actions": [],
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

    async execute(method, database) {
        if (method == 'update') {
            this.update(database);
        } else if (method == 'delete') {
            if (await this.confirmDelete()) { this.delete(database); }
        }
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    dataSource: any;

    databaseType: string;
    searchValue: string = 'all';

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild(SearchBarOneComponent) searchBar: SearchBarOneComponent;

    /* filter_retaintion */
    have_saved_filters: boolean = false;
    retained_pagination;
    retained_pagination_key: string;
    retained_filter_key: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public userService: UserService,
        private dialog: MatDialog,
        storageService: StorageService,
        private toastrService: ToastrService,
        private emissionDatabaseService: CustomDatabaseController,
        private activePagePillService: ActivePagePillService,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(async () => {
            const url: String = this.router.url;
            if (url.includes('emission')) {
                this.databaseType = 'emission';
                this.activePagePillService.cef = null;

                this.retained_filter_key = 'c_emission_fdb_filter';
                this.retained_pagination_key = 'c_emission_fdb_pagination';
            } else if (url.includes('estimation')) {
                this.databaseType = 'estimation';
                this.tableSubTitle = "Create your own custom estimation factor database to organise custom estimation factors across your organization."
                this.activePagePillService.customEstimationFactor = null;

                this.retained_filter_key = 'c_estimation_fdb_filter';
                this.retained_pagination_key = 'c_estimation_fdb_pagination';
            }
            this.customFactorTypeStdID = await this.getFactorTypeStdList();
        });

        // if (this.localStorageUtility.getLocalStorage(this.retained_filter_key)) {
        //     this.have_saved_filters = true;

        //     let retained_filter = JSON.parse(this.localStorageUtility.getLocalStorage(this.retained_filter_key));
        //     this.searchValue = retained_filter['search'];
        //     this.retained_pagination = JSON.parse(this.localStorageUtility.getPagination(this.retained_pagination_key));
        // }
    }

    customFactorTypeStdID: any;
    factorTypeStdList: any[];
    async getFactorTypeStdList() {
        this.emissionDatabaseService.getFactorTypeStdList()
            .subscribe((ftsRes: any[]) => {
                this.factorTypeStdList = ftsRes;
                let currentFactorType = this.factorTypeStdList.find(fType => fType['keyID'] == (this.databaseType == 'emission' ?
                    this.CARBON_CONSTANT['CUSTOM_EMISSION_FACTOR'] : this.CARBON_CONSTANT['CUSTOM_ESTIMATION_FACTOR']));

                this.customFactorTypeStdID = currentFactorType['id'];
                this.getDatabases();
            },
                error => {
                    console.log('error in getFactorTypeStdList() -', error);
                    this.toastrService.openToast(`${error.error['title']}`, `${error.error['message']}`, `${error.error['result']}`)
                });
    }

    getDatabases() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {
                if (this.have_saved_filters) {
                    this.have_saved_filters = false;

                    if (this.searchValue != 'all') {
                        this.searchBar.active = true;
                        this.searchBar.searchFC.patchValue(this.searchValue);
                    }

                    this.sort.direction = this.retained_pagination.find(filter => filter['filter'] == 'sortDirection')['value'];
                    this.paginator.pageSize = this.retained_pagination.find(filter => filter['filter'] == 'pageSize')['value'];
                    this.paginator.pageIndex = this.retained_pagination.find(filter => filter['filter'] == 'pageIndex')['value'];
                }

                this.saveFilters();

                return this.emissionDatabaseService.getDatabase(
                    this.currentOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.customFactorTypeStdID,
                    this.searchValue
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null) {
                    this.resultLength = 0;
                    return [];
                }

                this.resultLength = dataSource["totalCount"];
                return dataSource["databases"];
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

    getRoute(database, column) {
        switch (column) {
            case 'name':
                return `${database.name}/${database.id}/factor`;
            case 'linkedRecords':
                return `.`;
            default:
                return `.`;
        }
    }

    create() {
        const dialogRef = this.dialog.open(CreateDatabaseDialog, {
            data: {
                action: 'create',
                customFactorTypeStdID: this.customFactorTypeStdID,
            },
            minWidth: '600px'
        });

        dialogRef.afterClosed()
            .subscribe((res) => {
                if (res == DialogResponseEnum.SUCCESS) { this.refreshBtn.nativeElement.click(); }
            });
    }


    confirmDelete(): Promise<boolean> {
        return new Promise(resolve => {
            let confirm: boolean = false;

            // const message = 'This will delete your custom emission factor database permanently.';
            // const confirmationMsg = "Are you sure you want to continue?";
            // const dialogRef = this.dialog.open(DeleteDialog, {
            //     data: {
            //         message: message,
            //         confirmationMsg: confirmationMsg,
            //         type: CARBON_CONSTANT['CEF_DATABASE'],
            //     },
            //     minWidth: '500px',
            //     maxWidth: '600px'
            // });

            // dialogRef.afterClosed()
            //     .subscribe((response) => {
            //         console.log('confirm -', response);
            //         if (response == globalConstant['CONFIRM']) { confirm = true; }
            //     }).add(() => resolve(confirm));
        });
    }

    delete(database) {
        this.emissionDatabaseService.deleteDatabaseByID(this.currentOrgID, database['id'])
            .subscribe((res) => {
                console.log(res)
                this.toastrService.openToast(`${res['title']}`, `${res['message']}`, `${res['result']}`);
                this.refreshBtn.nativeElement.click();
            },
                error => {
                    console.log('error in delete() -', error);
                    this.toastrService.openToast(`${error.error['title']}`, `${error.error['message']}`, `${error.error['result']}`);
                });
    }

    saveFilters() {
        // this.localStorageUtility.setLocalStorage(this.retained_filter_key, JSON.stringify({ search: this.searchValue }));
        // this.localStorageUtility.setPagination(this.retained_pagination_key, this.paginator.pageSize, this.paginator.pageIndex, this.sort.direction);
    }
}
