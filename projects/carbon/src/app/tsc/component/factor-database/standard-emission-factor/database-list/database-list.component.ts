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

import { TABLE_CONSTANT } from '@library/tsc-common';

import { ActivePagePillService } from '@carbon/component/factor-database/active-page-pill/active-page-pill.service';
import { StandardEmissionFactorController } from '@carbon/controller/standard-emission-factor.controller';

@Component({
    selector: 'sef-database-list',
    templateUrl: './database-list.component.html',
    styles: [
    ]
})
export class DatabaseListComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;

    dataSource: any[] = [];
    resultLength: number = 0;
    displayedColumns: string[] = ['type', 'name', 'country', 'linkedActivities'];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private activePagePillService: ActivePagePillService,
        private standardEmissionFactorController: StandardEmissionFactorController,
    ) { }

    ngOnInit(): void {
        this.activePagePillService.setData(null);
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
        ).pipe(
            startWith({}),
            switchMap((): any => {

                return this.standardEmissionFactorController.getDatabase(
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
                return dataSource["databases"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }
}
