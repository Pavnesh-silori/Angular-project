import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ProductServiceTypeEnum } from '@netzero/enum/product-service-type.enum';

import { CreateUpdateComponent } from '../../../create-update/create-update.component';

import { SharedProductService } from '@netzero/controller/shared-product-service';
import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';

// library
import { ButtonLabelEnum, DialogEnum, TypeConfirmationDialog, DialogOneComponent } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// library
@Component({
	selector: 'app-tab-one',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
})

export class TabComponent implements OnInit {

	activeLink: any;
	currentOrgID: any;
	source: any;
	productID: any;

	faEllipsisV = faEllipsisV;
	productViewData: any;

	ButtonLabelEnum = ButtonLabelEnum;

	@ViewChild('refreshBtn') refreshBtn: ElementRef;

	tabs: any[] = [
		{
			label: 'Details',
			routerLink: `details`,
		},
		{
			label: 'Emission Factor Databases',
			routerLink: `emission-factor-database`,
		},
		{
			label: 'Emission Records',
			routerLink: `emission-records`,
		}
		// ,
		// {
		// 	label: 'Audit Trail',
		// 	routerLink: `audit-trail`,
		// },
	];

	constructor(
		private dialog: MatDialog,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private storageService: StorageService,
		private sharedProductAndService: SharedProductService,
		private productAndServiceController: ProductAndServiceController,
	) {
	}

	ngOnInit(): void {
		this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));
		this.activatedRoute.paramMap.subscribe(params => {
			this.productID = params.get('productID');
		});

		this.activatedRoute.data.subscribe(data => {
			this.source = data['tabType'];
		});
		if (this.productID) {
			this.getByID(this.productID, this.currentOrgID);
		}
	}

	openDialog = () => {
		let dialogRef;
		dialogRef = this.dialog.open(CreateUpdateComponent, {
			data: {
				action: 'UPDATE',
				id: this.productID,
				source: this.source
			},
			height: '100vh',
			width: '600px',
			position: { right: '-2px', top: '0px' },
			disableClose: true,
			panelClass: 'matDialogContainerOverride',
		});

		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result == DialogEnum.SUCCESS_DR) {
					this.refreshUpdatedData();
				}
			})
	}

	ngAfterViewInit() {
		this.router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				this.setRoute();
			}
		});

		this.activatedRoute.url
			.subscribe(() => this.setRoute());
	}
	getByID(productID, currentOrgID) {
		this.sharedProductAndService.data$.subscribe((response: any) => {
			this.productViewData = response;
		})
	}


	setRoute() {
		const currentPath = window.location.pathname;
		const tab = this.tabs.find(t => currentPath.includes(t.routerLink));
		this.activeLink = tab ? tab.routerLink : this.tabs[0].routerLink;
	}

	changeRoute(tab: any) {
		this.activeLink = tab.routerLink;
		this.router.navigate([tab.routerLink], { relativeTo: this.activatedRoute });
	}

	close() {
		this.router.navigate(['/source/product-service/product/page']);
	}

	removeItem() {
		this.showDeleteConfirmation();
	}

	showDeleteConfirmation() {
		const message = `Are you sure you want to delete these items?`;

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
				this.deleteItems();
			}
		});
	}

	changeItemStatus() {
		const status = this.productViewData.status.toLowerCase() === 'active' ? 'inactive' : 'active';
		this.showUpdateConfirmation(status);
	}

	showUpdateConfirmation(status: string) {
		const newStatus = status.toLowerCase();
		const name = this.productViewData?.name ? this.productViewData?.name : 'product';

		const message = `Mark ${name} as ${newStatus}?`;
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
				this.updateStatusForItems(newStatus);
			} else {
				dialogRef.close();
			}
		});
	}

	updateStatusForItems(status: string) {
		let data = [];
		data.push(this.productViewData.id);
		this.productAndServiceController.updateProductStatus(this.currentOrgID, data, status, ProductServiceTypeEnum.PRODUCT_KEY_ID).subscribe((updateRes: any) => {
			if (updateRes.result == 'success') {
				this.refreshUpdatedData();
			}
		});
	}

	refreshUpdatedData() {
		this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
			this.router.navigate(['/source/product-service/product', this.productID, 'details']);
		});
	}

	deleteItems() {
		let deletedItem = [];
		const numericProductID = Number(this.productID);
		deletedItem.push(numericProductID);
		this.refreshUpdatedData();
	}
}
