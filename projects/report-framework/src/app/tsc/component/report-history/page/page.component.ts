import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError, } from 'rxjs/operators';
import { faPlus, faEllipsisV, } from '@fortawesome/free-solid-svg-icons';

import { environment } from 'src/environments/environment';

import { ReportingFrameworkM } from '@report-framework/model/reporting-framework.model';

import { ReportConfigController } from '@report-framework/controller/report-config.controller';
import { ReportFrameworkController } from '@report-framework/controller/report-framework.controller';

// tsc-library/
import { StorageService } from '@library/storage-service';
import { FunnelFilterComponent, COMMON_CONSTANT, ResponseM } from '@library/tsc-common';
import { TABLE_CONSTANT, ButtonLabelEnum } from '@library/tsc-common';
import { ReportingFrameworkKeyIDEnum } from '@report-framework/enum/reporting-framework.enum';
import { PdfController } from '@report-framework/controller/pdf.controller';
import { ToastrService } from '@library/toastr-service';
// /tsc-library/

const reporting_framework = environment.REPORTING_FRAMEWORK_API_URL;

@Component({
	selector: 'report-history-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

	currentOrgID: any;

	TABLE_CONSTANT = TABLE_CONSTANT;
	COMMON_CONSTANT = COMMON_CONSTANT;
	ButtonLabelEnum = ButtonLabelEnum;
	ReportingFrameworkKeyIDEnum = ReportingFrameworkKeyIDEnum;

	faPlus = faPlus;
	faEllipsisV = faEllipsisV;

	dataSource: any;
	resultLength: any;
	displayedColumns: string[] = ['reportName', 'reportingFrameWork', 'reportingYear', 'reportingInterval', 'option'];

	searchFC: FormControl = new FormControl('');
	searchBy: string = '';
	searchFlag: boolean = false;
	refreshFlag: boolean = false;

	frameworkFlag: boolean = false;
	frameworkFC: FormControl = new FormControl(['all']);
	all_framework_keyID: any[] = [];
	totalFramework: any;
	frameworkFilterApplied: boolean = false;
	selected_framework: any[] = [];

	filter: string = '';
	filterArr: any[];

	categoryFlag: boolean = false;
	categoryFC: FormControl = new FormControl([]);

	prev;
	activityFilterApplied: boolean = false;
	selected_activities: any[] = [];

	all_category_keyID: any[] = [];
	totalActivities: any;

	source: string;

	bulkUploadResponse: any;
	title: any;
	response: any;
	message: any;
	error: boolean = false;
	duplicateData: string = null;
	mandatoryData: string = null;

    resetFlag: boolean = false;

	reportingFrameworkList: ReportingFrameworkM[];

	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('frameworkSelect') frameworkSelect: FunnelFilterComponent;
	@ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
	@ViewChild('frameworkBtn') frameworkBtn: ElementRef;
	@ViewChild('refreshBtn') refreshBtn: ElementRef;

	constructor(
		private stroageService: StorageService,
		private toastrService: ToastrService,
		private pdfController: PdfController,
		private reportConfigController: ReportConfigController,
		private reportFrameworkController: ReportFrameworkController,
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.getReportingFramework();

	}

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

		merge(
			this.paginator.page,
			this.sort.sortChange,
            this.frameworkSelect.multi,
			fromEvent(this.refreshBtn.nativeElement, 'click'))
			.pipe(
				startWith({}),
				switchMap(() => {
					this.filterArr = [];

					if (this.searchFlag) {
						var searchBy = ('reportName:' + this.searchBy);
					}
					if (!this.frameworkFC.value.includes('all')) {
						this.filterArr.push('reportingFramework:' + this.frameworkFC.value);
					}
					return this.reportConfigController.getRecordHistoryPage(
						this.paginator.pageIndex,
						this.paginator.pageSize,
						this.sort.active,
						this.sort.direction,
						this.currentOrgID,
						this.filterArr,
						searchBy,
						this.searchFlag
					).pipe(catchError(() => observableOf(null)));
				}),
				map((dataSource) => {
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

	searchFn($event) {
		this.searchBy = $event;
		if (this.searchBy.length > 0) {
			this.searchFlag = true;
		} else {
			this.searchFlag = false;
		}
		console.log(this.searchFlag)
		this.refreshBtn.nativeElement.click();
	}

	refreshFilter() {
		this.frameworkFlag = false;
		this.refreshBtn.nativeElement.click();
	}

	pdfReportGenerate(reportingFrameworkKeyID, configIntervalID) {
		let url: string;
		url = `${reporting_framework}public/organizations/${this.currentOrgID}/reporting-framework/${reportingFrameworkKeyID}/config-interval/${configIntervalID}/download/pdf`;
		window.open(url, '_blank');
	}

	xbrlReportGenerate(reportingFrameworkKeyID, configIntervalID) {
		let url: string;
		url = `${reporting_framework}public/organizations/${this.currentOrgID}/reporting-framework/${reportingFrameworkKeyID}/config-interval/${configIntervalID}/download/xbrl`;
		window.open(url, '_blank');

	}

	msExcelReportGenerate(reportingFrameworkKeyID, configIntervalID) {
		let url: string;
		url = `${reporting_framework}public/organizations/${this.currentOrgID}/reporting-framework/${reportingFrameworkKeyID}/config-interval/${configIntervalID}/download/xlsx`;
		window.open(url, '_blank');

	}

	unlockReport(configIntervalID,reportHistoryID) {
		this.pdfController.unlockReport(this.currentOrgID,configIntervalID,reportHistoryID).subscribe((response: ResponseM) => {
			let toast = this.toastrService.getToastStatus(response.status);
			this.toastrService.openToast(toast.title, response.message, toast.color);
            this.refreshBtn.nativeElement.click();
		}, error => {
			console.log('error in unlockReport() -', error);
		});
	}

}

