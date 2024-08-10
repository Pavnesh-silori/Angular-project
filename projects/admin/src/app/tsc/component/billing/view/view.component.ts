import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
	faPlus,
	faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

import { BillingProfileM } from '@Admin/model/billing.model';
import { CreateUpdateBillingProfileDialog } from '../create-update-billing-profile/create-update-billing-profile.dialog';
import { BillingController } from '@Admin/controller/billing.controller';

import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { DialogOneComponent, DialogOneEnum, COMMON_CONSTANT } from '@library/tsc-common';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {
	COMMON_CONSTANT = COMMON_CONSTANT;
	faPlus = faPlus;
	faEllipsisV = faEllipsisV;

	rootOrgID: any;

	billingProfileM: BillingProfileM[] = [];
	billingProfile: BillingProfileM;
	defaultProfiles: BillingProfileM[];
	nonDefaultProfiles: BillingProfileM[];
	allProfiles: BillingProfileM[];

	constructor(
		private dialog: MatDialog,
		private billingController: BillingController,
		private toasterService: ToastrService,
		private storageService: StorageService,
	) { }

	ngOnInit(): void {
		this.rootOrgID = this.storageService.getStorage('rootOrgID');
		this.getBillingProfileList();
	}

	getBillingProfileList() {
		this.billingController.getBillingProfileList(this.rootOrgID).subscribe(
			(billingProfileRes: BillingProfileM[]) => {
				this.billingProfileM = billingProfileRes;
				// Split the billingProfileM array into default and non-default profiles
				this.defaultProfiles = this.billingProfileM.filter(profile => profile.isDefault);
				this.nonDefaultProfiles = this.billingProfileM.filter(profile => !profile.isDefault);
				this.allProfiles = this.defaultProfiles.concat(this.nonDefaultProfiles)
			},
			error => {
				console.log('Error in getBillingProfileList -', error);
				this.toasterService.openToast('Error', 'Error in getting Billing Profile List', 'error');
			}
		);
	}

	createUpdateBillingProfile(operation) {
		let dialogRef;
		if (operation == 'create') {
			dialogRef = this.dialog.open(CreateUpdateBillingProfileDialog, {
				data: {
					action: operation,
					rootOrgID: this.rootOrgID,
				},
				minWidth: '600px',
				maxWidth: '600px',
				height: '100%',
				position: { right: '-2px', top: '0px' },
			});
		} else {
			dialogRef = this.dialog.open(CreateUpdateBillingProfileDialog, {
				data: {
					action: operation,
					billingProfile: this.billingProfile,
					rootOrgID: this.rootOrgID,
				},
				minWidth: '600px',
				maxWidth: '600px',
				height: '100%',
				position: { right: '-2px', top: '0px' },
			});
		}
		dialogRef.afterClosed().subscribe((closeRes) => {
			if (closeRes == 'Success') {
				this.getBillingProfileList();
			}
		})
	}

	deleteBillingProfile(billingProfileID) {
		const message = 'This billing profile will be deleted permanently.\nInvoices associated with this billing profile will be unaffected.\nThis is an irreversible action.';
		const confirmationMsg = "Are you sure you want to continue?";
		const dialogRef = this.dialog.open(DialogOneComponent, {
			minWidth: '450px',
			maxWidth: '700px',
			data: {
				type: DialogOneEnum.DELETE,
				icon: 'warning',
				header: 'Delete billing profile',
				body: message + '\n\n' + confirmationMsg,
				buttonOne: 'Cancel',
				buttonTwo: 'Delete'
			}
		});

		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result) {
					this.deleteBillingProfileByID(billingProfileID);
					window.location.reload();
				}
			})
	}

	deleteBillingProfileByID(billingProfileID) {
		this.billingController.deleteBillingProfile(this.rootOrgID, billingProfileID)
			.subscribe(res => {
				let toast = this.toasterService.getToastStatus(res['status']);
				this.toasterService.openToast(toast['title'], res['message'], toast['color']);
			});
	}

	makeDefault(billingProfileID) {
		this.billingController.makeDefault(this.rootOrgID, billingProfileID).subscribe((defaultResp) => {
			let toast = this.toasterService.getToastStatus(defaultResp['status']);
			this.toasterService.openToast(toast['title'], defaultResp['message'], toast['color']);
			window.location.reload();
		},
			error => {
				console.log('Error in makeDefault -', error);
				this.toasterService.openToast(error.error['title'], error.error['message'], error.error['result']);
			})
	}

}
