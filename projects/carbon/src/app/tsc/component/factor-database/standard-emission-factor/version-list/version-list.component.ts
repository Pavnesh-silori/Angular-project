import { Component, OnInit, ViewChild } from '@angular/core';

import {
    merge,
    of as observableOf
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
    Router
} from '@angular/router';


import { ActivePagePillService } from '@carbon/component/factor-database/active-page-pill/active-page-pill.service';
import { StandardEmissionFactorController } from '@carbon/controller/standard-emission-factor.controller';
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';

@Component({
    selector: 'sef-version-list',
    templateUrl: './version-list.component.html',
    styles: [
    ]
})
export class VersionListComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;
    databaseID: any;

    dataSource: any[] = [];
    resultLength: number = 0;
    displayedColumns: string[] = ['name', 'validFrom', 'validTill', 'source'];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    have_saved_filters: boolean = false;
    retained_pagination;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        // private localStorageUtility: LocalStorageUtility,
        storageService: StorageService,
        private activePagePillService: ActivePagePillService,
        private standardEmissionFactorController: StandardEmissionFactorController,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {

        this.activatedRoute.params.subscribe((params) => {
            if (params['database']) {
                this.databaseID = params['databaseID'];

                let folder = {
                    name: decodeURIComponent(params['database']),
                    route: `${decodeURI(this.router.url)}`
                }
                this.activePagePillService.setData(folder);
            }
        });

        // let retained_pagination = this.localStorageUtility.getPagination('sef_version_pagination');
        // if (retained_pagination) {
        //     this.have_saved_filters = true;
        //     this.retained_pagination = JSON.parse(retained_pagination);
        // }
    }

    ngAfterViewInit() {
        // if (this.have_saved_filters) {
        //     this.sort.direction = this.retained_pagination.find(filter => filter['filter'] === 'sortDirection')['value'];
        //     this.paginator.pageSize = this.retained_pagination.find(filter => filter['filter'] === 'pageSize')['value'];
        //     this.paginator.pageIndex = this.retained_pagination.find(filter => filter['filter'] === 'pageIndex')['value'];

        //     this.have_saved_filters = false;
        // }
        merge(
            this.paginator.page,
            this.sort.sortChange
        ).pipe(
            startWith({}),
            switchMap((): any => {

                // this.saveFilters();

                return this.standardEmissionFactorController.getVersion(
                    this.currentOrgID,
                    this.databaseID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null) {
                    this.resultLength = 0;
                    return [];
                }

                this.resultLength = dataSource["totalCount"];
                return dataSource["versions"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    decodeUrl(url) {
        return decodeURI(url);
    }

    getTooltipValue(array: any[]) {
        return array.slice(1).join('\n');
    }

    saveFilters() {
        // this.localStorageUtility.setPagination('sef_version_pagination', this.paginator.pageSize, this.paginator.pageIndex, this.sort.direction);
    }

}
