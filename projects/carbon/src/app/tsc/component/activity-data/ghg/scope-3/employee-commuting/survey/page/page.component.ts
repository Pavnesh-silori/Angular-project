import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { fromEvent, merge, of as observableOf } from 'rxjs';

import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { EmployeeSurveyController } from '@carbon/controller/employee-survey.controller';

import { CreateComponent } from '../create/create.component';

// tsc-library
import { StorageService } from '@library/storage-service';
import {
	COMMON_CONSTANT,
	TABLE_CONSTANT,
	SearchBarOneComponent,
	FunnelFilterComponent,
	MATERIAL_CONSTANT
} from '@library/tsc-common';
import { DateFilterComponent, DateService } from '@library/date';
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
// /tsc-library/



@Component({
	selector: 'app-list',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

	currentOrgID: any;
	COMMON_CONSTANT = COMMON_CONSTANT;
	TABLE_CONSTANT = TABLE_CONSTANT;
	MATERIAL_CONSTANT = MATERIAL_CONSTANT;
	CARBON_CONSTANT = CARBON_CONSTANT;
	resultLength: any;
	dataSource: any;

	faPlus = faPlus;
	faEllipsisV = faEllipsisV;

	displayedColumns: string[] = ['id', 'surveyName', 'AccStartDate', 'totalEmployee', 'sampleSetPCT', 'status', 'reminder', 'sendData'];
	statusList = [
		{
			"name": "In progress",
			"keyID": "INPROGRESS"
		},
		{
			"name": "Completed",
			"keyID": "COMPLETED"
		}

	]

	filterArr: any[];
	searchValue: string;

	statusGroupFlag: boolean = false;
	statusGroupFC: FormControl = new FormControl();
	statusFlag: boolean = false;
	statusFC: FormControl = new FormControl();

	isChecked = false;
	searchFlag: boolean = false;

	checkExistingSurveyData: any;
	viewSurveyID: any;

	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('searchBar') searchBar: SearchBarOneComponent;
	@ViewChild('statusSelect') statusSelect: FunnelFilterComponent;
	@ViewChild('refreshBtn') refreshBtn: ElementRef;
	@ViewChild('searchBtn') searchBtn: ElementRef;
	@ViewChild('filterChild') filterChild: DateFilterComponent;

	constructor(
		private dialog: MatDialog,
		private employeeSurveyController: EmployeeSurveyController,
		private storageService: StorageService,
		private toastrService: ToastrService,
		private dateService: DateService
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
	}

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		merge(
			this.paginator.page,
			this.sort.sortChange,
			this.statusSelect.mono,
			this.filterChild.emitFilter,
			fromEvent(this.refreshBtn.nativeElement, "click"),
		).pipe(
			startWith({}),
			switchMap(() => {
				this.filterArr = [];
				if (this.statusFlag) {
					this.filterArr.push('status:' + this.statusFC.value)
				}

				this.searchValue = this.searchFlag ? ('surveyName:' + this.searchValue) : null;

				return this.employeeSurveyController.getEmployeeSurveyByPage(
					this.currentOrgID,
					this.paginator.pageIndex,
					this.paginator.pageSize,
					this.sort.active,
					this.sort.direction,
					this.filterArr,
					this.searchValue,
					this.isChecked,
					this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
					this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
				).pipe(catchError(() => observableOf(null)));
			}),
			map((dataSource) => {
				if (dataSource == null) {
					return [];
				}
				this.resultLength = dataSource["totalCount"];
				return dataSource.record;
			})
		).subscribe((dataSource) => {
			this.dataSource = dataSource;
		})
	}


	getStatusName(keyID: string): string {
		const status = this.statusList.find(status => status.keyID === keyID);
		return status ? status.name : keyID;
	}

	searchFn(value: string) {
		this.searchValue = value;
		this.statusFC.reset('all');
		this.searchFlag = value.length > 0;
		this.refreshBtn.nativeElement.click();
		this.paginator.pageIndex = 0;
	}

	resetSearch() {
		this.searchFlag = false;
		this.searchBar.searchClear();
	}

	dateToogle() {
		this.refreshBtn.nativeElement.click();
	}
	refreshFilter() {
		this.statusFlag = false;
		this.refreshBtn.nativeElement.click();
	}

	createSurvey() {
		this.employeeSurveyController.getExistingSurveyStatus(this.currentOrgID).subscribe(
			(res: any) => {
				this.checkExistingSurveyData = res;
				if (this.checkExistingSurveyData.existingSurvey == false) {
					this.createDialog();
				} else {
					this.toastrService.openToast(ToastrTitle.WARNING, 'Survey is already existed', ToastrColor.WARNING);
				}
			},
			(error) => {
				console.log(error);
			}
		);
	}

	createDialog() {
		const dialogRef = this.dialog.open(CreateComponent, {
			minWidth: '600px',
			maxWidth: '600px',
			height: '100%',
			position: { right: '-2px', top: '0px' },
			data: {}
		});
		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result) {
					this.refreshBtn.nativeElement.click();
				}
			})
	}

	reminder(row: any) {
		this.employeeSurveyController.sendReminderSurvey(this.currentOrgID, row.surveyID).subscribe(
			res => {
				this.refreshBtn.nativeElement.click();
			},
			error => {
				console.log('Error reminder survey', error)
			},
		);
	}

	endSurvey(row: any) {
		this.employeeSurveyController.endSurvey(this.currentOrgID, row.surveyID).subscribe(
			res => {
				this.refreshBtn.nativeElement.click();
			},
			error => {
				console.error('Error ending survey:', error);
			}
		);
	}

	routeToView(data) {
		this.viewSurveyID = data.surveyID;
		return '/activity-data/employee-commuting/survey/view/' + this.viewSurveyID;
	}
}