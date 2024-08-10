import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from '@library/toastr-service';
import { COMMON_CONSTANT } from '@library/tsc-common';

import { BillingController } from '@Admin/controller/billing.controller';
import { BillingProfileM } from '@Admin/model/billing.model';
import { CreateUpdateBillingProfileDialog } from '../create-update-billing-profile/create-update-billing-profile.dialog';

@Component({
	selector: 'app-change-billing-profile-dialog',
	templateUrl: './change-billing-profile-dialog.html',
	styles: []
})

export class ChangeBillingProfileDialog implements OnInit {
	COMMON_CONSTANT = COMMON_CONSTANT;
	rootOrgID: any;
	billingProfileID: string = '';

	faPlus = faPlus;

	billingProfileM: BillingProfileM[] = [];
	selectedBillingProfileFC: FormControl = new FormControl('');

	constructor(
		public dialogRef: MatDialogRef<ChangeBillingProfileDialog>,
		@Inject(MAT_DIALOG_DATA) public data,
		private billingController: BillingController,
		private toasterService: ToastrService,
		private dialog: MatDialog,
	) {
		this.rootOrgID = data['rootOrgID'];
		this.billingProfileID = data['billingProfileID'];
		this.dialogRef.disableClose = true;
	}

	ngOnInit(): void {
		this.getBillingProfileList();
	}

	getBillingProfileList() {
		this.billingController.getBillingProfileList(this.rootOrgID).subscribe((billingProfileRes: BillingProfileM[]) => {
			this.billingProfileM = billingProfileRes;

			// Set selected profile to the first profile with isDefault=true
			const defaultProfile = this.billingProfileM.find(profile => profile.isDefault);

			this.selectedBillingProfileFC.patchValue(this.billingProfileID);
			if (this.billingProfileM.length == 0) {
				this.toasterService.openToast('Info', 'There are no billing profiles available. Please create new billing profile', 'info');
			}
		},
			error => {
				console.log('Error in getBillingProfileList -', error);
				this.toasterService.openToast('Error', 'Error in getting Billing Profile List', 'error');
			})
	}

	selectedBillingProfile() {
		let selectedBillingProfileID = this.selectedBillingProfileFC.value;
		this.billingController.getSelectedBillingProfile(this.rootOrgID, selectedBillingProfileID).subscribe((updatedBillingProfile) => {
			this.dialogRef.close({
				result: 'BillingProfileChangedSuccessfuly',
				billingProfile: updatedBillingProfile
			});
		},
			error => {
				console.log('Error in selectedBillingProfile -', error);
				this.toasterService.openToast('Error', 'Error in getting Billing Profile', 'error');
			})

	}

	createBillingProfile(operation) {
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
		}
		dialogRef.afterClosed().subscribe((closeRes) => {
			this.getBillingProfileList();
		})
	}

}
