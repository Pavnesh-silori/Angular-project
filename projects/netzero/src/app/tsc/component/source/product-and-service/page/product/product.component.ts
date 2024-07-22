import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError, } from 'rxjs/operators';

import { faPlus, faEllipsisV, } from '@fortawesome/free-solid-svg-icons';

import { CreateUpdateComponent } from '../../create-update/create-update.component';
import { ProductServiceTypeEnum } from '@netzero/enum/product-service-type.enum';
import { ProductPageDataM } from '@netzero/model/product-service.model';

import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';

// tsc-library/
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, DialogEnum, FormAction, FunnelFilterComponent, MATERIAL_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum, StatusService, TypeConfirmationDialog } from '@library/tsc-common';
import { DialogOneComponent, DialogOneEnum, COMMON_CONSTANT, ButtonLabelEnum } from '@library/tsc-common';
import { TABLE_CONSTANT } from '@library/tsc-common';
import { TableInfoDialogComponent } from '@netzero/component/source/shared/table-info-dialog/table-info-dialog.component';
// /tsc-library/

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

	currentOrgID: any;

	TABLE_CONSTANT = TABLE_CONSTANT;
	COMMON_CONSTANT = COMMON_CONSTANT;
	ButtonLabelEnum = ButtonLabelEnum;
	MATERIAL_CONSTANT = MATERIAL_CONSTANT;
	ButtonTooltipEnum = ButtonTooltipEnum;
	FormAction = FormAction;

	faPlus = faPlus;
	faEllipsisV = faEllipsisV;

	dataSource: any;
	dataSourceLength: number = 0;
	displayedColumns: string[] = ['productCode', 'name', 'description', 'productType', 'category', 'status', 'keyID', 'option'];
	displayedDeleteColumns: string[] = ['sourceName', 'ghgEmission', 'cbamEmission'];

	searchFC: FormControl = new FormControl('');
	searchValue: string = '';
	searchFlag: boolean = false;
	refreshFlag: boolean = false;

	categories: any[];

	filter: string = '';
	filterArr: any[];

	categoryFlag: boolean = false;
	categoryFC: FormControl = new FormControl(['all']);

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

	// view: string = 'list';
	isFirstTemplate: boolean = true;
	selectedProductID: number = null;

	refreshEvent: any;

	@ViewChild(MatSort, { static: false }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('statusSelect') statusSelect: FunnelFilterComponent;
	@ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
	@ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
	@ViewChild('categorySelect') categorySelect: FunnelFilterComponent;
	productIDChanged: boolean = false;

	// productType funnel filter //
	productTypeFlag: boolean = false;
	productTypeFC: FormControl = new FormControl(['all']);
	productTypes: any[] = [];
	@ViewChild('productTypeFilter') productTypeFilter: FunnelFilterComponent;

	// status Funnel filter //
	statusFlag: boolean = false;
	statusFC: FormControl = new FormControl('all');
	statusList = [
		{ "id": 1, "keyID": 'all', "name": 'All status' },
		{ "id": 2, "keyID": 'active', "name": 'Active' },
		{ "id": 3, "keyID": 'inactive', "name": 'Inactive' }
	];
	@ViewChild('statusFilter') statusFilter: FunnelFilterComponent;

	bulkBtnFlag: boolean = false;
	allComplete: boolean = false;
	selectedRows: any;

	messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;
	emissionRecords: any[] = [];

	constructor(
		private dialog: MatDialog,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private stroageService: StorageService,
		private productAndServiceController: ProductAndServiceController,
		public StatusService: StatusService,
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.getProductTypeList();
		this.getCategoryList();

		this.activatedRoute.data.subscribe(data => {
			this.source = data['tabType']
			const view = data['view'];
			this.isFirstTemplate = view !== 'twoPane';
			this.selectedProductID = this.isFirstTemplate ? null : this.activatedRoute.snapshot.params['productID'];
		});
	}

	async getProductTypeList() {
		this.productAndServiceController.getProductTypeList()
			.subscribe((res: any) => {
				this.productTypes = res;
			});
	}

	async getCategoryList() {
		this.productAndServiceController.getProductCategoryList()
			.subscribe((res: any) => {
				this.categories = res;
			});
	}

	ngAfterViewInit() {
		this.getProductCategoryList();
	}

	ngOnDestroy() {
		//not sure if this is needed
		this.closeAllDialogs();
		this.refreshEvent?.unsubscribe();
	}

	resetPageIndexOnSortChange() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
	}

	resetPageIndexOnRefresh() {
		this.refreshEvent = fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);
	}

	getMergedObservable() {
		return merge(
			this.paginator.page,
			this.sort.sortChange,
			this.statusFilter.mono,
			this.productTypeFilter.multi,
			this.categorySelect.multi,
			fromEvent(this.refreshBtn.nativeElement, 'click')
		);
	}

	prepareFilters() {
		this.filterArr = [];
		this.getFilter('status');
		this.getFilter('productType');
		this.getFilter('category');
	}

	getSearchValue() {
		if (this.searchValue) {
			return 'sourceName:' + this.searchValue;
		}
		return '';
	}

	fetchProductByPage() {
		return this.productAndServiceController.getProductByPage(
			this.paginator.pageIndex,
			this.paginator.pageSize,
			this.sort.active,
			this.sort.direction,
			this.currentOrgID,
			this.filterArr,
			this.getSearchValue(),
			this.searchFlag
		).pipe(catchError(() => observableOf(null)));
	}

	processDataSource(dataSource: ProductPageDataM) {
		if (dataSource == null) {
			return [];
		}
		this.dataSourceLength = dataSource["totalCount"];
		return dataSource['record'];
	}

	getProductCategoryList() {
		this.resetPageIndexOnSortChange();
		this.resetPageIndexOnRefresh();

		this.getMergedObservable().pipe(
			startWith({}),
			switchMap(() => {
				this.prepareFilters();
				return this.fetchProductByPage();
			}),
			map((dataSource: ProductPageDataM) => {
				return this.processDataSource(dataSource);
			})
		).subscribe((dataSource) => {
			this.dataSource = dataSource.map(item => {
				item['completed'] = false;
				return item;
			});
		});
		if (!this.isFirstTemplate) {
			setTimeout(() => {
				document.getElementById(`${this.selectedProductID}`).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
			}, 500)
		}
	}

	getFilter(filterType: string) {
		if (this[filterType + 'Flag']) {
			if (!this[filterType + 'FC'].value.includes('all')) {
				this.filterArr.push(filterType + ':' + this[filterType + 'FC'].value);
			} else {
				this[filterType + 'Flag'] = false;
			}
		}
	}

	createUpdateProductOrService = (action, productID) => {
		let dialogRef;
		if (action == FormAction.CREATE) {
			dialogRef = this.dialog.open(CreateUpdateComponent, {
				data: {
					action: action,
					source: this.source
				},
				height: '100vh',
				width: '900px',
				position: { right: '-2px', top: '0px' },
				disableClose: true,
				panelClass: 'matDialogContainerOverride',
			});
		}
		else {
			dialogRef = this.dialog.open(CreateUpdateComponent, {
				data: {
					action: FormAction.UPDATE,
					source: this.source,
					id: productID
				},
				height: '100vh',
				width: '900px',
				position: { right: '-2px', top: '0px' },
				disableClose: true,
				panelClass: 'matDialogContainerOverride',
			});
		}

		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result == DialogEnum.SUCCESS_DR) {
					this.refreshBtn.nativeElement.click();
				}
			})
	}

	searchFn(value: string) {
		this.searchValue = value;
		this.searchFlag = this.searchValue.length > 0;
		this.refreshFn();
	}

	refreshFn() {
		if (this.refreshEvent && !this.refreshEvent.closed) {
			this.refreshBtn.nativeElement.click();
		}
		else {
			this.getProductCategoryList();
		}
	}

	isAnyFlagTrue(): boolean {
		return this.productTypeFlag || this.categoryFlag || this.statusFlag;
	}

	resetFilter() {
		if (this.isAnyFlagTrue()) {
			if (this.statusFlag) {
				this.statusFC.reset();
			}
			if (this.categoryFlag) {
				let allCategory = ['all'];
				this.categories.forEach((res: any) => {
					allCategory.push(res.keyID);
				})

				this.categoryFC.setValue(allCategory);

			}
			if (this.productTypeFlag) {
				let productType = ['all'];
				this.productTypes.forEach((res: any) => {
					productType.push(res.keyID);
				})
				this.productTypeFC.setValue(productType);
			}
			this.productTypeFlag = false;
			this.categoryFlag = false;
			this.statusFlag = false;
			this.refreshFn();
		}
	}

	categoryDisplayCount(category: any[]): string {
		if (category.length > 0) {
			const categoryCount = category.length - 1;
			return `+${categoryCount}`;
		}
	}

	formatCaegoryTooltip(category: any[]): string {
		return category.slice(1).join('\n');
	}

	bulkUpload() {
		let routeUrl = `/source/product-service/import-records`;
		this.router.navigate([routeUrl]);
		// let dialogRef = this.dialog.open(BulkUploadDialogLib, {
		// 	data: { source: "assets/files/product-upload.xlsx" },
		// 	minWidth: "600px",
		// 	maxWidth: "600px",
		// });

		// dialogRef.afterClosed().subscribe((response) => {
		// 	this.bulkUploadResponse = response;
		// 	if (response) { this.productBulkUpload(); }
		// });
	}

	toFormData(): FormData {
		const formData = new FormData();
		formData.append('file', this.bulkUploadResponse);
		return formData;
	}

	productBulkUpload() {
		this.productAndServiceController.bulkUploadProduct(this.currentOrgID, this.toFormData())
			.subscribe((bulkUploadRes) => {
				if (bulkUploadRes['title'] == 'Success') {
					this.refreshBtn.nativeElement.click();

				} else if (bulkUploadRes['title'] == 'Error') {
					this.error = true;
					this.title = bulkUploadRes['title']
					this.message = bulkUploadRes['message'];
					this.response = bulkUploadRes['response'];
					this.errorDialog(this.title, this.message);

				}
			});
	}

	errorDialog(title, message) {
		this.getErrorData();

		if (this.mandatoryData) {
			message = message + `<br>S.No. ` + this.mandatoryData + ` is mandatory field. Please enter valid data and upload file again.`;
		}

		if (this.duplicateData) {
			message = message + `<br>S.No. ` + this.duplicateData + ` has duplicate code. Please check your file and upload again.`;

		}

		let dialogRef = this.dialog.open(DialogOneComponent, {
			minWidth: '450px',
			maxWidth: '700px',
			data: {
				type: DialogOneEnum.CONFIRMATION,
				icon: 'warning',
				header: title,
				body: message,
				buttonOne: 'Cancel',
				buttonTwo: 'Try again',
			}
		});

		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result) {
					this.bulkUpload()
				}
				else { }
			})
	}

	getErrorData() {
		if (this.response) {
			if (this.response['duplicateDataInRows'].length != 0) {
				let dupDataInRows = this.response['duplicateDataInRows'];
				this.duplicateData = [dupDataInRows.slice(0, -1).join(', '), dupDataInRows.slice(-1)[0]].join(dupDataInRows.length < 2 ? '' : ' and ');
			}
			if (this.response['mandatoryDataMissingInRows'].length != 0) {
				let manDataMissingInRows = this.response['mandatoryDataMissingInRows'];
				this.mandatoryData = [manDataMissingInRows.slice(0, -1).join(', '), manDataMissingInRows.slice(-1)[0]].join(manDataMissingInRows.length < 2 ? '' : ' and ');
			}
		}
	}

	navigateToViewPage(id) {
		this.selectedProductID = id; // need to show selected product
		setTimeout(() => {
			document.getElementById(`${id}`).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		}, 500)
		this.router.navigate([`/source/product-service/product/${id}/details`]);
	}

	handleClick(func: Function, params: any[]) {
		func(...params);
	}

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

	// Step 1: UpdateBulkStatus to use a generic confirmation method
	bulkUpdate(status: string) {
		const selectedRows = this.dataSource.filter(row => row['completed']);
		if (selectedRows.length === 0) {
			console.error('No items selected.');
			return;
		}

		if (status === 'delete') {
			this.validateDelete(selectedRows);
			// this.showDeleteConfirmation(selectedRows);
		} else {
			this.showUpdateConfirmation(selectedRows, status);
		}
	}

	// Step 2: Generic method for showing confirmation dialog
	showUpdateConfirmation(items: any[], status: string) {
		const isBulk = items.length > 1;
		const name = isBulk ? `${items.length} items` : items[0]?.name;
		const newStatus = status.toLowerCase();
		const message = isBulk ? `Mark these ${items.length} product(s) as ${newStatus}?`
			: `Mark ${name} as ${newStatus}?`;
		let body = '';
		if (newStatus === 'active') {
			body = `<p class="ps-1">You will be able to collect data for this product going forward. Existing records wouldn’t be affected.</p>`;
		}
		else {
			body = `<p class="ps-1">You wouldn’t be able to collect data for this product going forward. Existing records wouldn’t be affected.</p>`;
		}

		const dialogRef = this.dialog.open(DialogOneComponent, {
			// minWidth: '650px',
			maxWidth: '600px',
			data: {
				type: 'confirmation',
				icon: '',
				header: message,
				body: body,
				// confirmationInput: `${newStatus.toUpperCase()}`,
				buttonOne: 'Cancel',
				buttonTwo: `Mark as ${newStatus}`
			}
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.updateStatusForItems(items, newStatus);
			} else {
				dialogRef.close();
			}
		});
	}

	// Step 3: Method to update status for items (bulk or solo)
	updateStatusForItems(items: any[], status: string) {
		// backend supports it, sending a bulk update request
		console.log('Updating status for items:', items, 'to', status);

		this.productAndServiceController.updateProductStatus(this.currentOrgID, items.map(item => item.id), status, ProductServiceTypeEnum.PRODUCT_KEY_ID).subscribe((updateRes: any) => {
			this.refreshBtn.nativeElement.click();
		});
	}

	//Method modified to use the new generic method
	changeItemStatus(item) {
		const selectedRows = [item];
		const status = item.status.toLowerCase() === 'active' ? 'inactive' : 'active';

		this.showUpdateConfirmation(selectedRows, status);
	}

	// Step 1: Adapt updateBulkStatus to handle delete as well
	// This step is integrated into the updateBulkStatus method above.

	// Step 2: Update showUpdateConfirmation to handle delete confirmation
	showDeleteConfirmation(items: any[]) {
		const isBulk = items.length > 1;
		if (this.hasEmissionRecords()) {
			const title = isBulk ? 'These products have records linked to them. Delete all the records and try again.' : 'This product has records linked to it. Delete all the records and try again.';
			const dialogRef = this.dialog.open(TableInfoDialogComponent,
				{
					data: { records: this.emissionRecords, columns: this.displayedDeleteColumns, title: title },
					minWidth: '900px',
					maxWidth: '900px',
				});
		} else {
			const isBulk = items.length > 1;
			const name = isBulk ? `${items.length} items` : items[0]?.name;
			const message = isBulk ? `Delete ${items.length} records?`
				: `Delete ${name}?`;

			const dialogRef = this.dialog.open(TypeConfirmationDialog, {
				minWidth: '650px',
				maxWidth: '600px',
				data: {
					icon: 'delete',
					header: message,
					body: '<p class = "ps-1">This product will be deleted permanently and you wouldn’t be able to add records against this product going forward.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
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

	}

	// Step 3: Implement deleteItems method
	deleteItems(items: any[]) {
		// backend supports it, sending a bulk update request
		const formData = { recordID: items.map(item => item.id) };
		this.productAndServiceController.deleteRecord(this.currentOrgID, ProductServiceTypeEnum.PRODUCT_KEY_ID, formData).subscribe((_updateRes: any) => {
			this.refreshFn();
		});
	}

	removeItem(item) {
		const selectedRows = [item];
		this.validateDelete(selectedRows);
	}

	validateDelete(items: any[]) {
		const formData = {
			filter: 'sourceID:' + items.map(item => item.id)
		};

		this.productAndServiceController.getFilteredEmissionRecords(this.currentOrgID, this.source.toLowerCase(), formData).subscribe((records: any) => {
			this.emissionRecords = records;
			this.showDeleteConfirmation(items);
		});
	}

	closeAllDialogs() {
		this.dialog.closeAll();
	}

	hasEmissionRecords() {
		return this.emissionRecords.some(record =>
			(record.ghgEmission?.count ?? 0) > 0 || (record.cbamEmission?.count ?? 0) > 0
		);
	}

}                                                                 