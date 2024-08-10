import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { AlertTypeLabelEnum, AlertTypeEnum } from '../../../../enum/alert.enum';

import { AlertPageM } from '../../../../model/alert.model';

import { AlertRuleController } from '../../../../controller/alert.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { TABLE_CONSTANT, COMMON_CONSTANT, StatusEnum, PageM, SearchBarOneComponent } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class ConfiguredAlarmPageComponent implements OnInit {

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    AlertTypeEnum = AlertTypeEnum;
    AlertTypeLabelEnum = AlertTypeLabelEnum;
    StatusEnum = StatusEnum;

    orgID: any;

    displayedColumn: string[] = ['id', 'name', 'associatedWith', 'ruleDescription', 'type', 'status'];
    resultLength: number = 0;
    dataSource: any[] = [];

    searchFlag: boolean = false;
    searchValue: string;
    searchArr: any[] = [];

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    constructor(
        private storageService: StorageService,
        private alertController: AlertRuleController,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];
                if (this.searchFlag) {
                    this.searchArr.push('name:' + this.searchValue)
                }

                const alertType = AlertTypeEnum.ALL;

                return this.alertController.getAlertRuleByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    alertType,
                    this.orgID
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<AlertPageM>): any => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = response["totalCount"];
                return response["records"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    searchFn(value: string) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        } else {
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }

}
