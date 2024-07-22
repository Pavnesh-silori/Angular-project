import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ActiveFugitiveApproachM } from '@carbon/model/fugitive.model';
import { FUGITIVE_EMISSION } from '@carbon/constant/fugitive-emission.constant';

import { FugitiveActivityConfiguratorController } from '@carbon/controller/fugitive-activity-configurator.controller';

import { FugitiveConfiguratorService } from '@carbon/service/fugitive.configurator.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, InvalidForm } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// /tsc-library
@Component({
	selector: 'app-fugitive-emission-configurator',
	templateUrl: './fugitive-emission-configurator.component.html',
	styleUrls: ['./fugitive-emission-configurator.component.scss']
})

export class FugitiveEmissionConfiguratorComponent implements OnInit {
    ButtonLabelEnum = ButtonLabelEnum;
    FUGITIVE_EMISSION = FUGITIVE_EMISSION;

	approachFC: FormControl = new FormControl();
	approachFG: FormGroup;

	purchaseManufacturer: boolean = false;
	selectedApproach: string = 'screeningApproach';
	preSelectedApproach: any;

	currentOrgID: any;
	isConfigured: boolean = false;
	isOtherThanManufacturer: boolean = true;

	fugitiveApproachM: ActiveFugitiveApproachM;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private fugitiveActivityConfiguratorController: FugitiveActivityConfiguratorController,
		private fugitiveConfiguratorService: FugitiveConfiguratorService,
		private toastrService: ToastrService,
		private storageService: StorageService,

	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');

		this.isActivityConfiguratorConfigured();
		this.approachFGInit();
		this.getActivityConfiguration();

	}

	fugitiveApproaches: any[] = [
		{
			keyID: 'screeningApproach',
			label: ' Screening (Screening Method)',
			name: ' know total gas capacity, date of purchase/ sale and type of equipments available (Eg.commercial air conditioners, vehicle refrigeration etc.).',
		},
		{
			keyID: 'serviceByContractorApproach',
			label: 'Lifecycle stage approach (Service by contractor Method)',
			name: 'service the equipment through a contractor/ third party AND maintain purchase/ acquisitions, sales/ disbursements, servicing and retrofitting records of gas transactions.',
		},
		{
			keyID: 'serviceMyselfApproach',
			label: 'Sales based approach (Service myself Method)',
			name: 'service the equipment myself AND maintain inventory, purchase, sale and retrofitting records of gas transactions.',
		},
		{
			keyID: 'all',
			label: 'All',
			name: 'use a combination of above methods for different equipments',
		}
	];

	approachFGInit() {
		this.approachFG = this.formBuilder.group({
			screeningApproach: [false],
			serviceByContractorApproach: [false],
			serviceMyselfApproach: [false],
			purchaseManufacturerApproach: [],
		})
	}

	ngAfterViewInit() {
		this.approachFC.valueChanges.subscribe(value => {
			this.isOtherThanManufacturer = value != null ? true : false;
		});
	}

	onSubmit() {
		if (this.approachFC.value == 'all') {
			this.approachFG.patchValue({
				screeningApproach: true,
				serviceByContractorApproach: true,
				serviceMyselfApproach: true
			});
		} else if (this.approachFC.value != null) {
			this.approachFG.get(this.approachFC.value).patchValue(true);
		}

		if (!this.isFormValid()) {
			return;
		}
		if (!this.isConfigured) {
			this.createActivityConfigurator();
		} else {
			this.updateActivityConfigurator();
		}
	}

	createActivityConfigurator() {
		this.fugitiveActivityConfiguratorController.createActivityConfigurator(this.currentOrgID, this.approachFG.value)
			.subscribe((createRes) => {
				let toast = this.toastrService.getToastStatus(createRes['status']);
				this.toastrService.openToast(toast['title'], createRes['message'], toast['color']);
				this.navigateTo();
			}, error => {
				console.log('error in createActivityConfigurator() -', error);
			})
	}

	updateActivityConfigurator() {
		this.fugitiveActivityConfiguratorController.updateActivityConfigurator(this.currentOrgID, this.approachFG.value)
			.subscribe((createRes) => {
				let toast = this.toastrService.getToastStatus(createRes['status']);
				this.toastrService.openToast(toast['title'], createRes['message'], toast['color']);
				this.navigateTo();
			}, error => {
				console.log('error in updateActivityConfigurator() -', error);
			})
	}

	changeFugitiveApproach() {
		this.isOtherThanManufacturer = !this.isOtherThanManufacturer;
		if (this.isOtherThanManufacturer) {
			this.selectedApproach = this.preSelectedApproach;
		} else {
			this.selectedApproach = null;
		}
	}

	async getActivityConfiguration() {
		this.fugitiveApproachM = await this.fugitiveConfiguratorService.getActiveActivityConfiguration(this.currentOrgID);
		this.getSelectedApproach();

		this.purchaseManufacturer = this.fugitiveApproachM['createPurchaseManufacturerApproach'];
		this.purchaseManufacturerApproachAC.patchValue(this.fugitiveApproachM.createPurchaseManufacturerApproach);
	}

	isActivityConfiguratorConfigured() {
		this.fugitiveActivityConfiguratorController.isActivityConfiguratorConfigured(this.currentOrgID).subscribe(response => {
			this.isConfigured = response['isConfigured'];
		}, error => {
			console.log('error in isActivityConfiguratorConfigured() -', error);
		})
	}

	getSelectedApproach() {
		let createScreeningApproach = this.fugitiveApproachM['createScreeningApproach'];
		let createServiceByContractorApproach = this.fugitiveApproachM['createServiceByContractorApproach'];
		let createServiceMyselfApproach = this.fugitiveApproachM['createServiceMyselfApproach'];

		if (createScreeningApproach && createServiceByContractorApproach && createServiceMyselfApproach) {
			this.selectedApproach = 'all';
		} else if (createScreeningApproach) {
			this.selectedApproach = 'screeningApproach';
		} else if (createServiceByContractorApproach) {
			this.selectedApproach = 'serviceByContractorApproach';
		} else if (createServiceMyselfApproach) {
			this.selectedApproach = 'serviceMyselfApproach';
		} else {
			this.selectedApproach = null;
		}
		this.preSelectedApproach = this.selectedApproach;
	}

	get screeningApproachAC(): AbstractControl {
		return this.approachFG.get('screeningApproach') as AbstractControl;
	}

	get serviceByContractorApproachAC(): AbstractControl {
		return this.approachFG.get('serviceByContractorApproach') as AbstractControl;
	}

	get serviceMyselfApproachAC(): AbstractControl {
		return this.approachFG.get('serviceMyselfApproach') as AbstractControl;
	}

	get purchaseManufacturerApproachAC(): AbstractControl {
		return this.approachFG.get('purchaseManufacturerApproach') as AbstractControl;
	}

	isFormValid() {
		if (!this.screeningApproachAC.value && !this.serviceByContractorApproachAC.value
			&& !this.serviceMyselfApproachAC.value && !this.purchaseManufacturerApproachAC.value) {
			console.log('invalid form -', this.approachFG.value);
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, "Please select at least one approach", ToastrColor.ERROR);
			return false;
		}
		return true;
	}

	navigateTo() {
		this.router.navigate(['/carbon-setting/activity-configurator']);
	}

}
