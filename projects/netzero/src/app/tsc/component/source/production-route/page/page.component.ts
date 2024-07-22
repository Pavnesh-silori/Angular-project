import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router';

import {
    fromEvent,
    merge,
    of as observableOf
} from 'rxjs';
import {
    catchError,
    map,
    startWith, 
    switchMap
} from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { ProductionRouteController } from '@netzero/controller/production-route.controller';

//tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, MATERIAL_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library/
@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    searchValue: any
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    displayedColumns: string[] = ['name', 'action'];

    dataSource: any[] = [];
    resultLength: number = 0;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;

    constructor(
        storageService: StorageService,
        private router: Router,
        private productionRouteController: ProductionRouteController,
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
    }

    ngOnInit() {
    }

    formatTooltip(products: any[]) {
        let viewList = cloneDeep(products);
        viewList.shift();
        return viewList.join('\n');
    }

    productCount(products: any[]) {
        let length: number = products.length;
        return length > 1 ? `+${--length}` : false;
    }

    SearchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        } else {
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap(() => {
                let searchValue = null;

                if (this.refreshFlag) { this.refreshFlag = false; }

                if (this.searchFlag) { searchValue = 'name:' + this.searchValue; }

                return this.productionRouteController.getProductionRoutePage(
                    this.currentOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    searchValue
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource) => {
                if (dataSource === null) { return []; }

                this.resultLength = dataSource.totalCount;
                return dataSource.records;
            })
        ).subscribe((dataSource: any[]) => this.dataSource = dataSource);
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    routeToUpdateProductionRoute = (row) => {
        this.router.navigate(['/source/production-route', row.id, 'update'])
    }

    navigateTo(productionRouteID) {
        this.router.navigate(['/source/production-route', productionRouteID, 'view'])
    }
}
