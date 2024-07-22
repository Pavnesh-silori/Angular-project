import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { ActivityKeyIDEnum, MethodKeyIDEnum } from '@carbon/enum/activity.enum';

//  tsc-library
import { DateFilterComponent, DateService } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, COMMON_CONSTANT, MATERIAL_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum, FunnelFilterComponent, SearchBarOneComponent, TABLE_CONSTANT, TypeConfirmationDialog } from '@library/tsc-common';
// / tsc-library

import { PurchasedGoodsServicesController } from '@carbon/controller/purchased-goods-services.controller';
import { ActivityService } from '@carbon/service/activity.service';
import { GenerateRoutesService } from '../../../../generate-routes.service';
import { FormControl } from '@angular/forms';
import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	TABLE_CONSTANT = TABLE_CONSTANT;
	COMMON_CONSTANT = COMMON_CONSTANT;
	MATERIAL_CONSTANT = MATERIAL_CONSTANT;
	ButtonLabelEnum = ButtonLabelEnum;
	messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;

	faPlus = faPlus;
	faEllipsisV = faEllipsisV;

	currentOrgID: any;

	dataSource: any;
	resultLength: number;

	displayedColumns: string[] = [
		'recordID',
		'sourceName',
		'startDate',
		'supplier',
		'quantityOrAmount',
		'emissions',
		'dataCollectionMethod',
		'doc',
		'option',
	];

	filterArr: Array<string> = [];
	chips: any[] = [];

	activityKeyID: any;
	allActivity: any[];
	activity: any;
	activityID: any;

	// titleName: string = '';
	calculationApproachKeyID: string = '';

	searchFlag: boolean = false;
	searchValue: string;

	refreshBtnTooltip: 'Refresh'




	@ViewChild('refreshBtn') refreshBtn: ElementRef;
	@ViewChild('searchBar') searchBar: SearchBarOneComponent;
	@ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
	@ViewChild('filterChild') filterChild: DateFilterComponent;
	@ViewChild('dataCollectionMethod') dataCollectionMethod: FunnelFilterComponent;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	dynamicContent: string;

	//bulk action
	bulkBtnFlag: boolean = false;
	allComplete: boolean = false;
	selectedRows: any;

    // dataCollectionMethod filter
    dataCollectionMethodlist: any[] = [];
    dataCollectionMethodFilterHeader: string = 'Data Source';
    dataCollectionMethodFilterFlag: boolean = false;
    dataCollectionMethodFilterShowSearchBar: boolean = true;
    dataCollectionMethodFiltersearchByPlaceholder: string = 'name';
    dataCollectionMethodFilterSearchBy: string[] = ['dataCollectionMethodName'];
    dataCollectionMethodFilterAllLabel: string = 'All';
    dataCollectionMethodFilterView: string = 'dataCollectionMethodName';
    dataCollectionMethodFilterValue: string = 'keyID';
    dataCollectionMethodFilterType: string = 'mono';
    dataCollectionMethodFilterFC: FormControl = new FormControl(['all']);
    dataCollectionMethodFilterResetFlag: boolean = false;
    // /dataCollectionMethod filter/


	constructor(
		private storageService: StorageService,
		private purchasedGoodsServicesController: PurchasedGoodsServicesController,
		private dateService: DateService,
		private dataCollectionMethodService: DataCollectionMethodService,
		private router: Router,
		private activityService: ActivityService,
		private generateRoutesService: GenerateRoutesService,
		private activatedRoute: ActivatedRoute,
		private dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');

		this.activatedRoute.parent?.data.subscribe(data => {
			this.calculationApproachKeyID = data?.MethodKeyID ?? null; // Default to null if undefined
		});

		this.activatedRoute.parent?.parent?.data.subscribe(data => {
			this.activityKeyID = data?.ActivityKeyID ?? null; // Default to null if undefined
		});

		this.setTitleAndContent();

		this.getDatacollectionMethodName();
		this.getAllActivitiesAndFindActivityByKeyID();
	}

	setTitleAndContent() {
		let contentBase = "Estimate emissions for ";
		let contentMethod = this.isAvgCalMethod() ? "collecting data on the mass (e.g., kilograms or pounds), or other relevant units" : "collecting data on the economic value";
		// let exampleUnit = this.isAvgCalMethod() ? "1000 kg" : "$1000 worth";

		switch (this.activityKeyID) {
			case ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES:
				// this.titleName = 'purchase goods and services';
				this.dynamicContent = `${contentBase}purchased goods and services by ${contentMethod} of goods or services purchased.`;
				break;
			case ActivityKeyIDEnum.CAPITAL_GOODS:
				// this.titleName = 'capital goods';
				this.dynamicContent = `${contentBase}capital goods by ${contentMethod} of capital goods.`;
				break;
			default:
				// this.titleName = this.activityKeyID;
				this.dynamicContent = `${contentBase}${this.activityKeyID} by collecting data on its relevant units.`;
				break;
		}
	}

	async getDatacollectionMethodName() {
		this.dataCollectionMethodlist = await this.dataCollectionMethodService.getDataCollectionMethod();
		this.dataCollectionMethodlist.unshift({ dataCollectionMethodID: 'all', dataCollectionMethodName: 'All', keyID: 'all' })
	}

	async getAllActivitiesAndFindActivityByKeyID() {
		this.allActivity = await this.activityService.getAllActivityNew();
		this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivity);
		this.activityID = this.activity.id;
	}


	ngAfterViewInit() {
		this.getPurchasedGoodServicesFilteredList();
	}

	getPurchasedGoodServicesFilteredList() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		merge(
			this.paginator.page,
			this.sort.sortChange,
			this.dataCollectionMethod.mono,
			this.filterChild.emitFilter,
			fromEvent(this.refreshBtn.nativeElement, "click"),
		).pipe(
			startWith({}),
			switchMap(() => {
				this.filterArr = [];

				if (this.dataCollectionMethodFilterFlag) {
					if (this.dataCollectionMethodFilterFC.value == 'all') { this.dataCollectionMethodFilterFlag = false; }
					else { this.filterArr.push('dataCollectionMethodID:' + this.dataCollectionMethodFilterFC.value) }
				}

				return this.purchasedGoodsServicesController.getActivityDataByPage(
					this.paginator.pageIndex,
					this.paginator.pageSize,
					this.sort.active,
					this.sort.direction,
					this.currentOrgID,
					this.activityKeyID,
					this.filterArr,
					this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
					this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
					true,
					this.searchFlag,
					this.getSearchValue(),
					this.calculationApproachKeyID
				).pipe(catchError(() => observableOf(null)));
			}),
			map((dataSource) => {
				if (dataSource == null) {
					return [];
				}
				this.resultLength = dataSource["totalCount"];
				return dataSource['records'];
			})
		).subscribe((dataSource) => {
			this.dataSource = dataSource.map(item => {
				item['completed'] = false;
				return item;
			});
		});
	}

	getSearchValue() {
		if (this.searchValue) {
			return 'sourceName:' + this.searchValue;
		}
		return '';
	}

	getPurchasedGoodServicesList() {
		try {
			return this.purchasedGoodsServicesController.getRecords(
				this.paginator.pageIndex,
				this.paginator.pageSize,
				this.sort?.active,
				this.sort?.direction,
				this.filterArr,
				this.currentOrgID,
				this.activityKeyID,
				this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
				this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
				this.calculationApproachKeyID
			);
		} catch (error) {
			console.log(error);
		}
	}

	searchFn(value: string) {
		this.searchFlag = true;
		this.searchValue = value;
		if (value.length == 0) {
			this.resetSearch();
		} else {
			this.dataCollectionMethodFilterFC.reset(['all']);
			this.paginator.pageIndex = 0;
		}
		this.refreshFn();
	}

	refreshFn() {
		this.refreshBtn.nativeElement.click();
	}

	resetSearch() {
		this.searchFlag = false;
		this.searchBar.searchClear();
	}

	resetFilter() {
		this.dataCollectionMethodFilterFlag = false;
		this.dataCollectionMethodFilterFC.setValue('all');
		this.refreshFn();
	}

	routeToCreate() {
		// const routeUrl = this.generateRoutesService.getPurchasedGoodsServicesCreateUrl();
		const routeUrl = this.generateRoutesService.getAcitivityMethodActionUrl(this.activityKeyID, this.calculationApproachKeyID, 'create');

		this.router.navigate([routeUrl], {
			queryParams: {
				activityID: this.activityID,
				activityKeyID: this.activityKeyID,
				calculationApproachKeyID: this.calculationApproachKeyID
			}
		});
	}

	routeToUpdate(activityData) {
		// const routeUrl = this.generateRoutesService.getPurchasedGoodsServicesUpdateUrl();
		const routeUrl = this.generateRoutesService.getAcitivityMethodActionUrl(this.activityKeyID, this.calculationApproachKeyID, 'update');

		this.router.navigate([routeUrl], {
			queryParams: {
				activityID: this.activityID,
				activityDataID: activityData['activityDataID'],
				activityKeyID: this.activityKeyID,
				calculationApproachKeyID: this.calculationApproachKeyID
			}
		});
	}

	routerLink(record) {
		return `/sustainability-accounting/carbon/view/${this.activityKeyID}/${record['activityDataID']}/${record['calculatedEmissionDataID']}`;
	}

	isAvgCalMethod(): boolean {
		return this.calculationApproachKeyID == MethodKeyIDEnum.AVERAGE_BASED_METHOD;
	}

	// bulk action

	enableBulkButton(): boolean {
		return this.dataSource.some(row => row['completed']);
	}

	selectAll(completed: boolean): void {
		this.allComplete = completed;
		this.dataSource.forEach(row => row['completed'] = completed);
		this.bulkBtnFlag = completed;
	}

	rowSelected(): void {
		this.allComplete = this.isAllRowSelected();
		this.bulkBtnFlag = this.enableBulkButton();
	}

	isAllRowSelected(): boolean {
		return this.dataSource.every(row => row['completed']);
	}

	bulkUpdate(status: string) {
		const selectedRows = this.dataSource.filter(row => row['completed']);
		if (selectedRows.length === 0) {
			console.error('No items selected.');
			return;
		}

		if (status === 'delete') {
			this.showDeleteConfirmation(selectedRows);
		}
	}


	deleteItems(items: any[]) {
		// backend supports it, sending a bulk update request
		const formData = { recordID: items.map(item => item.activityDataID) };
		this.purchasedGoodsServicesController.deleteRecord(this.currentOrgID, this.activityKeyID, formData).subscribe((_updateRes: any) => {
			this.allComplete = false;
			this.refreshFn();
		});
	}

	showDeleteConfirmation(items: any[]) {
		const isBulk = items.length > 1;
		const name = isBulk ? `${items.length} items` : items[0]?.sourceName;
		const message = isBulk ? `Are you sure you want to delete these ${items.length} record?`
			: `Are you sure you want to delete ${name}?`;

		const dialogRef = this.dialog.open(TypeConfirmationDialog, {
			minWidth: '650px',
			maxWidth: '600px',
			data: {
				icon: 'delete',
				header: message,
				body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This record will be deleted permanently and you wouldn’t be able to add records against this product going forward.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
				confirmationInput: 'DELETE',
				buttonOne: 'Cancel',
				buttonTwo: 'Delete'
			}
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.deleteItems(items);
			}
		});
	}


	removeItem(item) {
		const selectedRows = [item];
		this.showDeleteConfirmation(selectedRows);
	}

}