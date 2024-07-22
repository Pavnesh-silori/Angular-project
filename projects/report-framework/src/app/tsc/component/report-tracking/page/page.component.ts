import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { environment } from 'src/environments/environment';

import { ReportingFramework } from '@report-framework/model/reporting-framework.model';
import { RecordConfigPageM } from '@report-framework/model/record-config.model';
import { LookupCodeEnum } from '@report-framework/enum/lookup-code.enum';

import { ReportConfigController } from '@report-framework/controller/report-config.controller';
import { ReportFrameworkController } from '@report-framework/controller/report-framework.controller';

import { ActivePagePillService } from '@report-framework/service/active-page-pill.service';

// tsc-library
import { ButtonLabelEnum, COMMON_CONSTANT, DialogOneComponent, FunnelFilterComponent, LookupService, LookupValueM, PageM, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
// /tsc-library

const reporting_framework_lookup_url = environment.REPORTING_FRAMEWORK_API_URL;
@Component({
    selector: 'report-tracking-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    dataSource: any;
    resultLength: any;
    displayedColumns: string[] = ['id', 'name', 'framework', 'startDate', 'interval', 'option'];

    searchFC: FormControl = new FormControl('');
    searchValue: any;
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    resetFlag: boolean = false;

    reportingFrameworkList = [new ReportingFramework()];
    intervalList: any[] = [];

    filter: string = '';
    filterArr: any[];

    prev: any;
    k
    // framework filter
    frameworkFlag: boolean = false;
    frameworkFC: FormControl = new FormControl(['all']);
    totalFramework: any;
    selected_framework: any[] = [];

    // interval filter
    intervalFlag: boolean = false;
    intervalFC: FormControl = new FormControl(['all']);
    totalInterval: any;
    selected_interval: any[] = [];

    searchBy: string[] = ['name'];

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    @ViewChild('frameworkSelect') frameworkSelect: FunnelFilterComponent;
    @ViewChild('intervalSelect') invervalSelect: FunnelFilterComponent;

    @ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
    @ViewChild('frameworkBtn') frameworkBtn: ElementRef;
    @ViewChild('intervalBtn') intervalBtn: ElementRef;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private reportConfigController: ReportConfigController,
        private reportFrameworkController: ReportFrameworkController,
        private activePagePillService: ActivePagePillService,
        private stroageService: StorageService,
        private lookupService: LookupService,
        private toastrService: ToastrService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.stroageService.getStorage('currentOrgID');

        this.getReportingFramework();
        this.getFrequency();
    }

    ngAfterViewInit() {
        this.activatedRoute.params.subscribe(() => {
            this.activePagePillService.setOngoingReportBSubject = null;
        })

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.frameworkSelect.multi,
            this.invervalSelect.multi,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
        ).pipe(
            startWith({}),
            switchMap(() => {
                this.filterArr = [];
                if (this.searchFlag) {
                    var searchValue = 'name:' + this.searchValue;
                }

                if (this.frameworkFlag) {
                    if (!this.frameworkFC.value.includes('all')) {
                        this.filterArr.push('reportingFramework:' + this.frameworkFC.value);
                    }else {
                        this.frameworkFlag = false;
                    }
                }

                if (this.intervalFlag) {
                    if (!this.intervalFC.value.includes('all')) {
                        this.filterArr.push('reportingInterval:' + this.intervalFC.value);
                    }else {
                        this.intervalFlag = false;
                    }
                }
                return this.reportConfigController.getRecordConfigPage(
                    this.currentOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    searchValue,
                    this.filterArr
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource: PageM<RecordConfigPageM>) => {
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

    getReportingFramework() {
        this.reportFrameworkController.getAllReportingFramework().subscribe(res => {
            this.reportingFrameworkList = res;
        }, error => {
            console.log('error in getReportingFramework -', error);
        });
    }

    async getFrequency() {
        let lookup = [
            {
                lookupCode: [LookupCodeEnum.REPORT_INTERVAL],
                lookupKey: []
            }
        ]
        this.intervalList = <LookupValueM[]>await this.lookupService.getLookup(reporting_framework_lookup_url, lookup);
    }

    refreshFilter() {
        this.frameworkFlag = false;
        this.intervalFlag = false;
        this.refreshBtn.nativeElement.click();
    }

    searchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        }
        else {
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
    }

    navigateToViewPage(id: any, name: string) {
        this.router.navigate([`/reporting-framework/tab/tracking/${name}/${id}/interval`]);
    }

    deleteConfirmation(id) {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'dangerous',
                header: 'Delete report?',
                body: `This report will be deleted permanently and you won't be able to track it's progress.
                Are you sure you want to continue?`,
                buttonOne: 'Close',
                buttonTwo: 'Delete'
            },
            minWidth: '500px',
            maxWidth: '600px'
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.deleteConfig(id);
            }
        });
    }

    deleteConfig(id) {
        this.reportConfigController.deleteConfig(this.currentOrgID, id).subscribe((deleteRes: any) => {
            this.refreshBtn.nativeElement.click();
        }, error => {
            console.log('Error in deleteConfig', error);
        });
    }

}
