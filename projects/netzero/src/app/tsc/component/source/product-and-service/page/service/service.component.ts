import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { CreateUpdateComponent } from '../../create-update/create-update.component';

import { ProductServiceTypeEnum } from '@netzero/enum/product-service-type.enum';
import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { BulkUploadDialogLib, DialogOneComponent, DialogOneEnum, COMMON_CONSTANT, DialogEnum, ButtonLabelEnum, TABLE_CONSTANT, FormAction, ButtonTooltipEnum, MATERIAL_CONSTANT, TypeConfirmationDialog, FunnelFilterComponent, StatusService } from '@library/tsc-common';
// /tsc-library

@Component({
	selector: 'app-service',
	templateUrl: './service.component.html',
	styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
	TABLE_CONSTANT = TABLE_CONSTANT;
	COMMON_CONSTANT = COMMON_CONSTANT;
	ButtonLabelEnum = ButtonLabelEnum;
	MATERIAL_CONSTANT = MATERIAL_CONSTANT;
	ButtonTooltipEnum = ButtonTooltipEnum;
	FormAction = FormAction;

	faPlus = faPlus;
	faEllipsisV = faEllipsisV;

	currentOrgID: any;

	bulkUploadResponse: any;
	title: any;
	response: any;
	message: any;
	error: boolean = false;
	duplicateData: string;
	mandatoryData: string;

	displayedColumns: string[] = ['code', 'name', 'description', 'status', 'keyID', 'option'];
	resultLength: any;
	dataSource: any = [];

	searchFC: FormControl = new FormControl('');
	searchValue: string = '';
	searchFlag: boolean = false;
	refreshFlag: boolean = false;

	source: string;
	isFirstTemplate: boolean = true;
	selectedServiceID: number = null;

	emissionRecords: any[] = [];

	resetFlag: boolean = false;

	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
	@ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
	@ViewChild('statusSelect') statusSelect: FunnelFilterComponent;

	statusFlag: boolean = false;
	statusFC: FormControl = new FormControl('ALL');

	filterArr: any[];

	bulkBtnFlag: boolean = false;
	allComplete: boolean = false;
	selectedRows: any;

	refreshEvent: any;


	statusList = [
		{ "id": 1, "keyID": 'all', "name": 'All status' },
		{ "id": 2, "keyID": 'active', "name": 'Active' },
		{ "id": 3, "keyID": 'inactive', "name": 'Inactive' }
	];

	constructor(
		private dialog: MatDialog,
		private router: Router,
		private stroageService: StorageService,
		private toastrService: ToastrService,
		private serviceController: ProductAndServiceController,
		private productAndServiceController: ProductAndServiceController,
		private activatedRoute: ActivatedRoute,
		public StatusService: StatusService,
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');

		this.activatedRoute.data.subscribe(data => {
			this.source = data['tabType']
			const view = data['view'];
			this.isFirstTemplate = view !== 'twoPane';
			this.selectedServiceID = this.isFirstTemplate ? null : this.activatedRoute.snapshot.params['productID'];
		});
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

	enableBulkButton(): boolean {
		return this.dataSource.some(row => row['completed']);
	}

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

	validateDelete(items: any[]) {
		const formData = {
			filter: 'sourceID:' + items.map(item => item.id)
		};

		this.productAndServiceController.getFilteredEmissionRecords(this.currentOrgID, this.source.toLowerCase(), formData).subscribe((records: any) => {
			this.emissionRecords = records;
			// if (records.length > 0) {
			this.showDeleteConfirmation(items);
			// } else {

			// }
		});
	}

	showDeleteConfirmation(items: any[]) {
		const isBulk = items.length > 1;
		const name = isBulk ? `${items.length} items` : items[0]?.name;
		const message = isBulk ? `Are you sure you want to delete these ${items.length} items?`
			: `Are you sure you want to delete ${name}?`;

		const dialogRef = this.dialog.open(TypeConfirmationDialog, {
			minWidth: '650px',
			maxWidth: '600px',
			data: {
				icon: 'delete',
				header: message,
				body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This product will be deleted permanently and you wouldn’t be able to add records against this product going forward.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
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

	// Step 2: Generic method for showing confirmation dialog
	showUpdateConfirmation(items: any[], status: string) {
		const isBulk = items.length > 1;
		const name = isBulk ? `${items.length} items` : items[0]?.name;
		const newStatus = status.toLowerCase();
		const message = isBulk ? `Are you sure you want to mark these ${items.length} items as ${newStatus}?`
			: `Are you sure you want to mark ${name} as ${newStatus}?`;
		let body = '';
		if (newStatus === 'active') {
			body = `<p class="ps-1">You will be able to collect data for this service going forward. Existing records wouldn’t be affected.</p>`;
		}
		else {
			body = `<p class="ps-1">You wouldn’t be able to collect data for this service going forward. Existing records wouldn’t be affected.</p>`;
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

	updateStatusForItems(items: any[], status: string) {
		// backend supports it, sending a bulk update request

		this.productAndServiceController.updateProductStatus(this.currentOrgID, items.map(item => item.id), status, ProductServiceTypeEnum.SERVICE_KEY_ID).subscribe((updateRes: any) => {
			this.refreshBtn.nativeElement.click();
		});
	}

	// Step 3: Implement deleteItems method
	deleteItems(items: any[]) {
		const formData = { recordID: items.map(item => item.id) };
		// backend supports it, sending a bulk update request
		this.productAndServiceController.deleteRecord(this.currentOrgID, ProductServiceTypeEnum.SERVICE_KEY_ID, formData).subscribe((_updateRes: any) => {
			this.refreshBtn.nativeElement.click();
		});
	}

	refreshFn() {
		if (this.refreshEvent && !this.refreshEvent.closed) {
			this.refreshBtn.nativeElement.click();
		}
	}

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

		merge(
			this.paginator.page,
			this.sort.sortChange,
			this.statusSelect.mono,
			fromEvent(this.refreshBtn.nativeElement, 'click')
		).pipe(
			startWith({}),
			switchMap(() => {
				this.filterArr = [];

				if (this.searchFlag) {
					var searchBy = ('name:' + this.searchValue);
				}

				if (this.statusFlag) {
					if (this.statusFC.value == 'all') {
						this.statusFlag = false;
					} else {
						this.filterArr.push('status:' + this.statusFC.value);
					}
				}

				return this.serviceController.getServiceByPage(
					this.paginator.pageIndex,
					this.paginator.pageSize,
					this.sort.active,
					this.sort.direction,
					this.currentOrgID,
					searchBy,
					this.filterArr
				).pipe(
					catchError(error => {
						console.error('Error occurred while fetching data:', error);
						return observableOf(null);
					})
				);
			}),
			map((dataSource) => {
				if (dataSource == null) {
					return [];
				}
				this.resultLength = dataSource["totalCount"];
				return dataSource.record;
			})
		).subscribe(
			(dataSource) => {
				this.dataSource = dataSource.map(item => {
					item['completed'] = false;
					return item;
				});
			},
			(error) => {
				console.error('Subscription error:', error);
			}
		);

		if (!this.isFirstTemplate) {
			setTimeout(() => {
				document.getElementById(`${this.selectedServiceID}`).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
			}, 500)
		}
	}

	openDialog = (action, serviceID) => {
		let dialogRef;
		// const source = ProductServiceTabTypeEnum.SERVICE;
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
		} else { 
			dialogRef = this.dialog.open(CreateUpdateComponent, {
				data: {
					action: action,
					id: serviceID,
					source: this.source
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

	bulkUpload() {
		const dialogRef = this.dialog.open(BulkUploadDialogLib, {
			data: { source: "assets/files/service-upload.xlsx" },
			minWidth: "600px",
			maxWidth: "600px",
		});

		dialogRef.afterClosed().subscribe((response) => {
			this.bulkUploadResponse = response;
			if (response) { this.serviceBulkUpload(); }
		});

	}

	toFormData(): FormData {
		const formData = new FormData();
		formData.append('file', this.bulkUploadResponse);
		return formData;
	}

	serviceBulkUpload() {
		this.serviceController.bulkUploadService(this.currentOrgID, this.toFormData())
			.subscribe((bulkUploadRes) => {
				if (bulkUploadRes['title'] == 'Success') {
					this.refreshBtn.nativeElement.click();
				} else if (bulkUploadRes['title'] == 'Error') {
					this.error = true;
					this.title = bulkUploadRes['title']
					this.message = bulkUploadRes['message'];
					this.response = bulkUploadRes['response'];
					this.errorDialog(this.title, this.message);
					this.getErrorData();
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

		const dialogRef = this.dialog.open(DialogOneComponent, {
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
					this.bulkUpload();
				}
			})
	}

	searchFn($event) {
		this.searchValue = $event;
		if (this.searchValue.length > 0) {
			this.searchFlag = true;
		} else {
			this.searchFlag = false;
		}
		this.refreshBtn.nativeElement.click();
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

	deleteConfirmation = (id) => {
		const dialogRef = this.dialog.open(TypeConfirmationDialog, {

			minWidth: '650px',
			maxWidth: '600px',
			data: {
				icon: 'delete',
				header: 'Are you sure you want to delete ?',
				body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This service will be deleted permanently.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
				confirmationInput: 'DELETE',
				buttonOne: 'Cancel',
				buttonTwo: 'Delete'
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.deleteService(id)
			}
			else {
				dialogRef.close()
			}
		});
	}

	deleteService(id) {
		this.serviceController.deleteService(this.currentOrgID, id).subscribe((deleteRes: any) => {
			let toast = this.toastrService.getToastStatus(deleteRes['status']);
			this.refreshBtn.nativeElement.click();
		});
	}

	navigateToViewPage(id) {
		this.selectedServiceID = id;
		setTimeout(() => {
			document.getElementById(`${id}`).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		}, 500)
		this.router.navigate([`/source/product-service/service/${id}/details`]);
	}

	handleClick(func: Function, params: any[]) {
		func(...params);
	}

	resetFilter() {
		this.statusFlag = false;
		this.statusFC.reset();
		this.refreshBtn.nativeElement.click();
	}

	changeItemStatus(item) {
		const selectedRows = [item];
		const status = item.status.toLowerCase() === 'active' ? 'inactive' : 'active';
		this.showUpdateConfirmation(selectedRows, status);
	}

	removeItem(item) {
		const selectedRows = [item];
		this.validateDelete(selectedRows);
	}
}
