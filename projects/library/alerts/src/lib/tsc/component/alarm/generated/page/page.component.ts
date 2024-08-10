import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDatepicker } from '@angular/material/datepicker';

import { Moment } from 'moment';
import * as moment from 'moment-timezone';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError, filter } from "rxjs/operators";

import { AlertTypeLabelEnum, AlertStatusEnum, AlertStatusLabelEnum, AlertTypeEnum } from '../../../../enum/alert.enum';
import { AlarmPageM } from '../../../../model/alarm.model';

import { AlertRuleController } from '../../../../controller/alert.controller';

// tsc-library
import { DateService } from '@library/date';
import { COMMON_CONSTANT, MaterialFormFieldAppearance, PageM, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { OrganizationService } from '@library/organization-service';
// /tsc-library/

@Component({
    selector: 'lib-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class GeneratedAlarmPageComponent implements OnInit {

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    AlertTypeEnum = AlertTypeEnum;
    AlertTypeLabelEnum = AlertTypeLabelEnum;
    AlertStatusEnum = AlertStatusEnum;
    AlertStatusLabelEnum = AlertStatusLabelEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    orgID: any;

    displayedColumn: string[] = ['id', 'alertName', 'parameterLabel', 'associatedWith', 'description', 'time', 'type', 'status'];
    resultLength: number = 0;
    dataSource: any[] = [];

    searchFlag: boolean = false;
    searchValue: string;
    searchArr: any[] = [];
    timeZone: string = null;

    today: Date = new Date();

    selectedMonthFC: FormControl = new FormControl(moment().format('YYYY-MM'));
    startDateFC: FormControl = new FormControl();
    endDateFC: FormControl = new FormControl();

    statusFC: FormControl = new FormControl(AlertStatusEnum.ACTIVE, Validators.required);

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    constructor(
        public dateService: DateService,
        private storageService: StorageService,
        private organizationService: OrganizationService,
        private alertController: AlertRuleController
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getTimezone();
    }

    async getTimezone() {
        this.timeZone = <string>await this.organizationService.getOrgTimezone();

        this.startDateFC.patchValue(moment().startOf('month').tz(this.timeZone).format());
        this.endDateFC.patchValue(moment().add(1, 'months').startOf('month').tz(this.timeZone).format());

        if (this.statusFC.value == AlertStatusEnum.ACTIVE) {
            this.getActiveAlertByPage();
        } else {
            this.getResolvedAlertByPage();
        }
    }

    monthSelectedHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>): void {
        let duration = this.dateService.monthSelectedHandler(normalizedMonth, datepicker);
        this.selectedMonthFC.setValue(duration);

        this.startDateFC.patchValue(moment(normalizedMonth).startOf('month').tz(this.timeZone).format());
        this.endDateFC.patchValue(moment(normalizedMonth).add(1, 'months').startOf('month').tz(this.timeZone).format());

        if (this.statusFC.value == AlertStatusEnum.ACTIVE) {
            this.getActiveAlertByPage();
        } else {
            this.getResolvedAlertByPage();
        }
    }

    getActiveAlertByPage() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            filter(() => this.statusFC.value == AlertStatusEnum.ACTIVE),
            switchMap(() => {
                let requestBody = {};

                if (this.searchFlag) {
                    requestBody['search'] = this.searchValue;
                }
                requestBody['pageNo'] = this.paginator.pageIndex;
                requestBody['pageSize'] = this.paginator.pageSize;
                requestBody['sortBy'] = this.sort.active;
                requestBody['orderBy'] = this.sort.direction;
                requestBody['startDate'] = this.startDateFC.value;
                requestBody['endDate'] = this.endDateFC.value;

                return this.alertController.getActiveAlertByPage(this.orgID, requestBody
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<AlarmPageM>): any => {
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

    getResolvedAlertByPage() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            filter(() => this.statusFC.value == AlertStatusEnum.RESOLVED),
            switchMap(() => {
                let requestBody = {};

                if (this.searchFlag) {
                    requestBody['search'] = this.searchValue;
                }
                requestBody['pageNo'] = this.paginator.pageIndex;
                requestBody['pageSize'] = this.paginator.pageSize;
                requestBody['sortBy'] = this.sort.active;
                requestBody['orderBy'] = this.sort.direction;
                requestBody['startDate'] = this.startDateFC.value;
                requestBody['endDate'] = this.endDateFC.value;

                return this.alertController.getResolvedAlertByPage(this.orgID, requestBody
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<AlarmPageM>): any => {
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

    statusChange() {
        let alertStatus;

        switch (this.statusFC.value) {
            case AlertStatusEnum.ACTIVE:
                alertStatus = AlertStatusEnum.ACTIVE;
                this.getActiveAlertByPage();
                break;
            case AlertStatusEnum.RESOLVED:
                alertStatus = AlertStatusEnum.RESOLVED;
                this.getResolvedAlertByPage();
                break;
            default:
                console.log("undefined case encountered!");
        }
        this.statusFC.patchValue(alertStatus);
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

    getTimeLabel(dateTime) {
        return dateTime ? moment.tz(dateTime, this.timeZone).fromNow() : COMMON_CONSTANT.HYPHEN;
    }

    getStatusLabelAndClass(status: AlertStatusEnum): { label: string, class: string } {
        switch (status) {
            case AlertStatusEnum.ACTIVE:
                return { label: AlertStatusLabelEnum.ACTIVE_LABEL, class: 'badge rounded-pill bg-warning text-white' };
            case AlertStatusEnum.RESOLVED:
                return { label: AlertStatusLabelEnum.RESOLVED_LABEL, class: 'badge rounded-pill bg-success' };
            default:
                return { label: '', class: '' };
        }
    }

}
