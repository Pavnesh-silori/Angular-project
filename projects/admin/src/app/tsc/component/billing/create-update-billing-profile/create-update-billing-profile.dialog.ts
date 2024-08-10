import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { isEqual } from 'lodash';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
	SearchCountryField,
	CountryISO,
	PhoneNumberFormat,
	NgxIntlTelInputModule
} from 'ngx-intl-tel-input';

import { BillingController } from '@Admin/controller/billing.controller';

import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, CountryService, InvalidForm } from '@library/tsc-common';
import { StateService } from '@library/tsc-common';
import { MatSelectSearchService } from '@library/tsc-common';
import { MaterialFormFieldAppearance } from '@library/tsc-common';
import { CountryM, StateM } from '@library/tsc-common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-create-update-billing-profile',
	templateUrl: './create-update-billing-profile.dialog.html',
	styleUrls: ['./create-update-billing-profile.dialog.scss']
})
export class CreateUpdateBillingProfileDialog implements OnInit {
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	ButtonLabelEnum = ButtonLabelEnum;

	Title: string = 'Create';
	action: string = 'create';

	maxLength = 15;

	rootOrgID: any;

	stateM: StateM[] = [];
	stateFilterFC: FormControl = new FormControl();
	stateFilterUnsubscribe = new Subject<void>();
	stateFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

	countryM: CountryM[] = [];
	countryFilterFC: FormControl = new FormControl();
	countryFilterUnsubscribe = new Subject<void>();
	countryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

	contactDailingCode: CountryM[] = [];

	selectedCountryCode: string;

	showGSTNumber: any;

	billingProfileID: any;
	isEqual: boolean = false;
	initialObject: any;

	billingProfileFG: FormGroup;

	selectable = true;
	removable = true;
	addOnBlur = true;
	readonly separatorKeysCodes = [ENTER, COMMA] as const;

	inputPlaceholder = "email1@domain.com,email2@domain.com";

	separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;

	preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];

	phoneFormControl: FormControl = new FormControl('', [Validators.required]);
	countrySearch = new MatSelectSearchService(['countryName']);
	stateSearch = new MatSelectSearchService(['name']);

	constructor(
		private billingProfileFB: FormBuilder,
		public dialogRef: MatDialogRef<CreateUpdateBillingProfileDialog>,
		@Inject(MAT_DIALOG_DATA) public data,
		private countryService: CountryService,
		private stateService: StateService,
		private billingController: BillingController,
		private toasterService: ToastrService,
	) {
		this.action = data['action'];
		this.rootOrgID = data['rootOrgID'];
		this.dialogRef.disableClose = true;
	}

	ngOnInit(): void {
		this.billingProfileInit();
		this.getCountry();

		if (this.action == 'update') {
			this.Title = 'Update';
			this.patchProfile(this.data['billingProfile']);
			this.billingProfileID = this.data['billingProfile'].billingProfileID;
		}
		this.billingProfileFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.billingProfileFG.getRawValue()); });

	}

	onInput() {
		this.inputPlaceholder = '';
	}

	billingProfileInit() {
		this.billingProfileFG = this.billingProfileFB.group({
			userName: [, Validators.required],
			userEmail: [this.action == 'update' ? { value: '', disabled: true } : '', [Validators.required]],
			userCountryCode: [, Validators.required],
			userContactNumber: [, Validators.required],
			companyName: [this.action == 'update' ? { value: '', disabled: true } : '', [Validators.required]],
			billingAddress: [this.action == 'update' ? { value: '', disabled: true } : '', [Validators.required]],
			countryCode: [this.action == 'update' ? { value: '', disabled: true } : '', [Validators.required]],
			stateCode: [this.action == 'update' ? { value: '', disabled: true } : '', [Validators.required]],
			city: [this.action == 'update' ? { value: '', disabled: true } : '', [Validators.required]],
			zipCode: [this.action == 'update' ? { value: '', disabled: true } : '', [Validators.required]],
			tinNo: [''],
			extraInvoiceEmails: [[]],
		});

		// Subscribe to the valueChanges of phoneFormControl
		this.phoneFormControl.valueChanges.subscribe((value) => {
			if (value) {
				// Extract country code and number from the phoneFormControl value
				const countryCode = value.countryCode;
				const number = value.number;

				// Set the values in the userSignUpFG controls
				this.billingProfileFG.get('userCountryCode').setValue(countryCode);
				this.billingProfileFG.get('userContactNumber').setValue(number);
			}
		});
	}

	get extraInvoiceEmails() {
		return this.billingProfileFG.get('extraInvoiceEmails');
	}

	isValidEmail(email: string): boolean {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(email);
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		if (value) {
			const emails = value.split(',').map(email => email.trim());
			const validEmails = emails.filter(email => this.isValidEmail(email));
			if (validEmails.length > 0) {
				this.extraInvoiceEmails.patchValue(this.extraInvoiceEmails.value.concat(validEmails));
			}
		}
		event.chipInput!.clear();
	}

	removeEmail(email): void {
		const index = this.extraInvoiceEmails.value.indexOf(email);
		if (index >= 0) {
			const emails = [...this.extraInvoiceEmails.value];
			emails.splice(index, 1);
			this.extraInvoiceEmails.setValue(emails);
		}
	}

	async getCountry() {
		this.countryM = <CountryM[]>await this.countryService.getCountry();

		// ngx mat select search
		this.countryFiltered.next(this.countryM.slice());
		this.countryFilterFC.valueChanges
			.pipe(takeUntil(this.countryFilterUnsubscribe)).subscribe(async () => {
				this.countryFiltered = await this.countrySearch.filterMultipleValue(this.countryM, this.countryFilterFC.value, ['countryName']);
			});
	}

	async countryChange(countryCode) {
		this.stateM = <StateM[]>await this.stateService.getState(countryCode);

		// ngx mat select search
		this.stateFiltered.next(this.stateM.slice());
		this.stateFilterFC.valueChanges
			.pipe(takeUntil(this.stateFilterUnsubscribe)).subscribe(async () => {
				this.stateFiltered = await this.stateSearch.filterMultipleValue(this.stateM, this.stateFilterFC.value, ['name']);
			});

		this.selectedCountryCode = this.billingProfileFG.get('countryCode').value;
		if (this.selectedCountryCode == 'IN') {
			this.showGSTNumber = 'YES';
		} else {
			this.showGSTNumber = 'NO';
		}
	}

	createBillingProfile() {
		if (this.billingProfileFG.invalid || this.phoneFormControl.invalid) {
			this.phoneFormControl.markAsTouched();
			this.billingProfileFG.markAllAsTouched();
			this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return;
		}

		this.billingController.createBillingProfile(this.rootOrgID, this.billingProfileFG.value)
			.subscribe((profileRes) => {
				let toast = this.toasterService.getToastStatus(profileRes['status']);
				this.toasterService.openToast(toast['title'], profileRes['message'], toast['color']);
				this.dialogRef.close('Success');
			},
				error => {
					console.log('Error in createBillingProfile -', error);
					this.toasterService.openToast(error.error['title'], error.error['message'], error.error['result']);
				});
	}

	patchProfile(billingProfile) {
		if (this.action === 'update') {
			this.phoneFormControl.disable();
		}
		this.billingProfileFG.patchValue({
			userName: billingProfile['userName'],
			userEmail: billingProfile['userEmail'],
			userCountryCode: billingProfile['userCountryCode'],
			userContactNumber: billingProfile['userContactNumber'],
			companyName: billingProfile['companyName'],
			billingAddress: billingProfile['billingAddress'],
			countryCode: billingProfile['countryCode'],
			city: billingProfile['city'],
			zipCode: billingProfile['zipCode'],
			tinNo: billingProfile['tinNo'],
			extraInvoiceEmails: billingProfile['extraInvoiceEmails']
		});

		// Patch the values directly in phoneFormFG
		this.phoneFormControl.patchValue({
			countryCode: billingProfile['userCountryCode'],
			number: billingProfile['userContactNumber'],
		});

		this.countryChange(billingProfile['countryCode']);
		this.billingProfileFG.patchValue({ 'stateCode': billingProfile['stateCode'] });
		this.isEqual = true;
	}

	updateBillingProfile() {
		if (this.billingProfileFG.invalid || this.phoneFormControl.invalid) {
			this.phoneFormControl.markAsTouched();
			this.billingProfileFG.markAllAsTouched();
			this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return;
		}
		this.billingController.updateBillingProfile(this.rootOrgID, this.billingProfileFG.getRawValue(), this.billingProfileID)
			.subscribe((profileRes) => {
				let toast = this.toasterService.getToastStatus(profileRes['status']);
				this.toasterService.openToast(toast['title'], profileRes['message'], toast['color']);
				this.dialogRef.close('Success');
			},
				error => {
					console.log('Error in updateBillingProfile -', error);
					this.toasterService.openToast(error.error['title'], error.error['message'], error.error['result']);
				});
	}

	public errorHandling = (control: string, error: string) => {
		return this.billingProfileFG.controls[control].hasError(error);
	}

}

@NgModule({
	declarations: [
		CreateUpdateBillingProfileDialog
	],
	imports: [
		CommonModule,
		MatCardModule,
		FormsModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule,
		MatFormFieldModule,
		NgbModule,
		NgxMatSelectSearchModule,
		NgxIntlTelInputModule,
		MatChipsModule,
	],
	exports: [
		CreateUpdateBillingProfileDialog
	]
})
export class CreateUpdateBillingProfileDialogModule { }
