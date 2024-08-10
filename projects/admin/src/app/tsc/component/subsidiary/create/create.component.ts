import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Subject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SubsidiaryController } from '@Admin/controller/subsidiary.controller';

import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { MaterialFormFieldAppearance, CountryService, StateService, MatSelectSearchService, InvalidForm, CountryM, StateM } from '@library/tsc-common';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { ButtonLabelEnum } from '@library/tsc-common';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: []
})
export class CreateComponent implements OnInit {
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	ButtonLabelEnum = ButtonLabelEnum;

	rootOrgID: any;
	createSubsidiaryFG: FormGroup;

	stateM: StateM[] = [];
	stateFilterFC: FormControl = new FormControl();
	stateFilterUnsubscribe = new Subject<void>();
	stateFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
	stateSearch = new MatSelectSearchService(['name']);

	countryM: CountryM[] = [];
	countryFilterFC: FormControl = new FormControl();
	countryFilterUnsubscribe = new Subject<void>();
	countryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
	countrySearch = new MatSelectSearchService(['countryName']);

	entityName: any;
	isEntityTypeSelected = false;

	constructor(
		private createSubsidiaryFB: FormBuilder,
		private router: Router,
		private location: Location,
		private countryService: CountryService,
		private stateServie: StateService,
		private subsidiaryController: SubsidiaryController,
		private toasterService: ToastrService,
		private storageService: StorageService,
	) { }

	ngOnInit(): void {
		this.rootOrgID = this.storageService.getStorage('rootOrgID');

		this.createSubsidiaryInit();
		this.getCountry();
	}

	createSubsidiaryInit() {
		this.createSubsidiaryFG = this.createSubsidiaryFB.group({
			subsidiaryOrgID: [],
			name: ['', [Validators.required]],
			operationalControlPct: ['', [Validators.required]],
			financialControlPct: ['', [Validators.required]],
			equityControlPct: ['', [Validators.required]],
			address1: ['', [Validators.required]],
			countryCode: [, Validators.required],
			stateCode: ['', [Validators.required]],
			city: ['', [Validators.required]],
			zipCode: [, [Validators.required, Validators.pattern(COMMON_CONSTANT.ZIPCODE_PATTERN)]],
			type: [, [Validators.required]],
			useSustainabilityCloud: [, [Validators.required]]
		});
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
	
	async getStatesByCountry(countryCode) {
		this.stateM = <StateM[]>await this.stateServie.getState(countryCode);

		// ngx mat select search
		this.stateFiltered.next(this.stateM.slice());
		this.stateFilterFC.valueChanges
			.pipe(takeUntil(this.stateFilterUnsubscribe)).subscribe(async () => {
				this.stateFiltered = await this.stateSearch.filterMultipleValue(this.stateM, this.stateFilterFC.value, ['name']);
			});
	}

	changeType(type) {
		this.isEntityTypeSelected = true;
		if (type == 'SUBSIDIARY') {
			this.entityName = 'Subsidiary';
			this.createSubsidiaryFG.patchValue({
				useSustainabilityCloud: 'SUBSIDIARY'
			});
		} else {
			this.entityName = 'Joint Venture';
			this.createSubsidiaryFG.patchValue({
				useSustainabilityCloud: 'JOINT_VENTURE'
			});
		}
	}

	useSustainabilityCloudChange(usingSustainabilityCloud) {
		const organizationIDControl = this.createSubsidiaryFG.get('subsidiaryOrgID');

		if (usingSustainabilityCloud == true) {
			this.createSubsidiaryFG.patchValue({
				useSustainabilityCloud: true
			});
			organizationIDControl.setValidators([Validators.required]);
		} else {
			this.createSubsidiaryFG.patchValue({
				useSustainabilityCloud: false
			});
			organizationIDControl.setValue(null);
			organizationIDControl.clearValidators();
		}

		// Update the validation status of the control
		organizationIDControl.updateValueAndValidity();
	}

	createSubsidiary() {

		if (this.createSubsidiaryFG.invalid) {
			this.createSubsidiaryFG.markAllAsTouched();
			this.toasterService.openToast("Error", InvalidForm.INVALID_FORM_MESSAGE, "error");
			return;
		}
		this.subsidiaryController.createSubsidiary(this.rootOrgID, this.createSubsidiaryFG.value)
			.subscribe((subsidiaryRes) => {
				let toast = this.toasterService.getToastStatus(subsidiaryRes['status']);
				this.toasterService.openToast(toast['title'], subsidiaryRes['message'], toast['color']);
				this.router.navigate(['/subsidiary/page'])
			},
				error => {
					console.log('error in createSubsidiary - ', error);
				});
	}

	cancelButtonAction() {
		this.location.back();
	}

	public errorHandling = (control: string, error: string) => {
		return this.createSubsidiaryFG.controls[control].hasError(error);
	}
}