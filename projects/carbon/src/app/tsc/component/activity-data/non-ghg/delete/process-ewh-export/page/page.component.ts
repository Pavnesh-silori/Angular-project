import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Page, PageM } from '@carbon/model/non-ghg.model';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum'
import { NonGhgController } from '@carbon/controller/non-ghg.controller';

//tsc-library
import { StorageService } from '@library/storage-service';
import { FrequencyEnum } from '@library/date';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library
@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent {
	

	source: any;
	routeData: any;
	title: string;
	subTitle: string;

	ActivityKeyIDEnum = ActivityKeyIDEnum;

	currentOrgID: any;
	resultLength: any;
  
	dataSource: PageM[] = [new Page()];
	selectedRows:PageM[] = [];
  
	TABLE_CONSTANT = TABLE_CONSTANT;
	COMMON_CONSTANT = COMMON_CONSTANT;
  
	faPlus = faPlus;
	faEllipsisV = faEllipsisV;
  
	numOfRows: number;
	recordID: number[] = [];
	allComplete: boolean = false;
	bulkBtnFlag: boolean = false;
  
	searchValue: any
	searchFlag: boolean = false;
	refreshFlag: boolean = false;
  
	FrequencyEnum = FrequencyEnum;
	quantityOfSourceExported:string;
	displayedColumns: string[] = ['isChecked', 'recordID', 'reportingPeriod', 'process', 'quantityOfSourceExported', 'document','edit','delete', 'action'];
  
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('refreshBtn') refreshBtn: ElementRef;

	constructor(
		private activatedRoute: ActivatedRoute,
		private dialog: MatDialog,
		private storageService: StorageService,
		private nonGhgController: NonGhgController
	) {    this.dataSource.forEach(row => (row['completed'] = false));
}

	ngOnInit() {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');

		this.routeData = this.activatedRoute.snapshot.data;
		this.source = this.routeData.routeData;
		console.log(this.routeData.routeData);
		this.getSubtitle(this.source)
	}

	getSubtitle(source) {
		switch (source) {
			case ActivityKeyIDEnum.PROCESS_HEAT_EXPORT:
				this.quantityOfSourceExported = 'Quantity of heat exported'
				this.title = 'Process Heat Export'
				this.subTitle = 'Records of heat exported out of any process';
				break;
			case ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT:
				this.quantityOfSourceExported = 'Quantity of electricity exported'
				this.title = 'Process Electricity Export'
				this.subTitle = 'Records of electricity exported out of any process';
				break;
			case ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT:
				this.quantityOfSourceExported = 'Quantity of waste gases exported'
				this.title = 'Process Waste Gases Export'
				this.subTitle = 'Records of waste gas exported out of any process';
				break;
			default:
				this.subTitle = 'source not found';
		}
	}

	SearchFn($event) {
		this.searchValue = $event;
		if (this.searchValue.length > 0) {
			this.searchFlag = true;
		}
		else {
			this.searchFlag = false;
		}
		this.refreshBtn.nativeElement.click();
	}
	
	  ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		merge(
		  this.paginator.page,
		  this.sort.sortChange,
		  fromEvent(this.refreshBtn.nativeElement, "click"),
		).pipe(
		  startWith({}),
		  switchMap(() => {
			if (this.searchFlag) {
			  this.searchValue = ('process:' + this.searchValue);
		  }
			return this.nonGhgController.getProcessHeatElectricityWasteExport(
			  this.currentOrgID,
			  this.paginator.pageIndex,
			  this.paginator.pageSize,
			  this.sort.active,
			  this.sort.direction,
			  this.searchFlag,
			  this.searchValue
			).pipe(catchError(() => observableOf(null)));
		  }),
		  map((response) => {
			if (response == null) {
			  return [];
			}
			this.resultLength = response.totalCount;
			return response.records;
		  })
		).subscribe((dataSource:PageM[]) => {
		  this.dataSource = dataSource;
		  console.log("this.dataSource", this.dataSource)
		});
	  }
	
	  updateAllComplete() {
		this.allComplete = this.dataSource.every(row => row['completed']);
		console.log(this.allComplete);
		this.dataSource.filter(row => row['completed']).forEach(row => {
		  console.log('Clicked checkbox for:', row);
		});
		this.setBulkButton();
	  }
	
	  // someComplete(recordID: number): boolean {
	  //     return this.dataSource.some(row => row.recordID == recordID && row['completed']) && !this.allComplete;
	  // }
	
	  setAll(completed: boolean) {
		this.allComplete = completed;
		this.dataSource.forEach(row => (row['completed'] = completed));
		this.dataSource.filter(row => row['completed']).forEach(row => {
		  console.log('Clicked checkbox for:', row);
		});
		this.setBulkButton();
		console.log(this.allComplete);
	  }
	
	  getNumberOfSelectedRows() {
		this.selectedRows = this.dataSource.filter(row => row['completed']);
		return this.selectedRows.length;
	  }
	
	  setBulkButton() {
		console.log('number of selected rows', this.getNumberOfSelectedRows());
		if (this.getNumberOfSelectedRows() != 0) {
		  this.bulkBtnFlag = true;
		  console.log('bulkfalg', this.bulkBtnFlag)
		}
		else {
		  this.bulkBtnFlag = false;
		  console.log('bulkfalg', this.bulkBtnFlag)
		}
	  }
	
	  deleteRows(row, level) {
		if (level == 'bulk') {
		  this.recordID = [];
		  this.selectedRows.forEach(row => {
			this.recordID.push(row.recordID);
		  });
		}
		else {
		  this.recordID = [row.recordID];
		}
		console.log('RecordID:', this.recordID);
		const numberOfSelectedRows = this.getNumberOfSelectedRows();
		const dialogRef = this.dialog.open(DialogOneComponent, {
		  data: {
			type: 'delete',
			icon: 'dangerous',
			header: `Delete ${numberOfSelectedRows > 1 ? numberOfSelectedRows : ''} CBAM ${numberOfSelectedRows > 1 ? 'records' : 'record'}?`,
			body: `${numberOfSelectedRows > 1 ? 'These' : 'This'} record${numberOfSelectedRows > 1 ? 's' : ''} will be deleted permanently and will not be reflected in any ongoing runs.
				  Locked CBAM runs in which ${numberOfSelectedRows > 1 ? 'these' : 'this'} record${numberOfSelectedRows > 1 ? 's were' : ' was'} used wouldn’t be affected. 
		  
				  <span class="fw-bold">Are you sure you want to continue?</span>`,
			buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
			buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
		  },
		  minHeight: '200px',
		  minWidth: '450px'
		});
	
		dialogRef.disableClose = true;
		dialogRef.afterClosed().subscribe(result => {
		  if (result) {
			console.log("delete works");
		  }
		  else {
			console.log("does not works");
		  }
		});
	  }
	}
	