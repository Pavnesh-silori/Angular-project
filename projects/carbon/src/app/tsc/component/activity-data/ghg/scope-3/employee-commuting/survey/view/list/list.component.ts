import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { merge, fromEvent, of as observableOf } from 'rxjs';

import { SurveyResponseM } from '@carbon/model/employee-survey.model';
import { EmployeeSurveyController } from '@carbon/controller/employee-survey.controller';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

//tsc-library
import { StorageService } from '@library/storage-service';
import {
    COMMON_CONSTANT,
    TABLE_CONSTANT,
    FunnelFilterComponent,
    MATERIAL_CONSTANT
} from '@library/tsc-common';
// /tsc-library/



@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	@Input() surveyID;

	currentOrgID: any;
	COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
	CARBON_CONSTANT = CARBON_CONSTANT;

	searchFlag: boolean = false;
	searchValue: any = '';

	refreshFlag: boolean = false;
	resultLength: any = '';

	statusFC = new FormControl('all');
	statusFlag:boolean = false;
	statusList = [
		{
			"name": "All",
			"keyID": "all"
		},
		{
			"name": "Pending",
			"keyID": "PENDING"
		},
		{
			"name": "Filled",
			"keyID": "FILLED"
		},
	
	]

	filter: string = '';
	filterArr: any = []
	filterValue: any = 'all';

	dataSource: any;
	constructor(
		private employeeSurveyController: EmployeeSurveyController,
        private storageService: StorageService,

	) { }

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('refreshBtn') refreshBtn: ElementRef;
	@ViewChild('status') status: FunnelFilterComponent;

	displayedColumns: string[] = ['employeeCode', 'employeeName', 'submittedOn', 'status'];

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');	}
	
	getStatus(keyID: string): string {
	const status = this.statusList.find(status => status.keyID === keyID);
	return status ? status.name : keyID;
	}

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		merge(
			this.paginator.page,
			this.sort.sortChange,
			this.status.mono,
			fromEvent(this.refreshBtn.nativeElement, "click"),
		).pipe(
			startWith({}),
			switchMap(() => {
				this.filterArr = [];

				if (this.searchFlag) {
					console.log(this.searchValue, "Value")
					this.searchValue = ('firstName:' + this.searchValue);
				}

				if (this.statusFlag) {
					if (this.statusFC.value == 'all') { this.statusFlag = false; }
					else{this.filterArr.push('status:' + this.statusFC.value)}
				}
				
				return this.employeeSurveyController.getSurveyDataByPage(
					this.currentOrgID,
					this.surveyID,
					this.paginator.pageIndex,
					this.paginator.pageSize,
					this.sort.active,
					this.sort.direction,
					this.filterArr,
					this.searchFlag,
					this.searchValue
				).pipe(catchError(() => observableOf(null)));
			}),
			map((dataSource: SurveyResponseM[]) => {
				if (dataSource == null) {
					return [];
				}
				this.resultLength = dataSource["totalCount"];
				
				return dataSource['record'];
			})
		).subscribe((dataSource: SurveyResponseM) => {
			this.dataSource = dataSource;
		})
	}

	searchFn($event){
		if($event.length != 0){
			this.searchValue = $event;
			this.searchFlag = true;
		}
		else{
			this.searchFlag = false;
		}
		this.refreshBtn.nativeElement.click();
        this.paginator.pageIndex = 0;
	}
	
}