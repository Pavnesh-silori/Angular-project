import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PreferenceController } from '@carbon/controller/preference.controller';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum } from '@library/tsc-common';
import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';

// tsc-library
import { EMISSION_SOURCE_KEY_ENUM } from '@netzero/enum/emission-source.enum';
// /tsc-library

@Component({
	selector: 'app-emission-source-form',
	templateUrl: './emission-source-form.component.html'
})

export class EmissionSourceFormComponent implements OnInit {

	EMISSION_SOURCE_KEY_ENUM = EMISSION_SOURCE_KEY_ENUM;
	ButtonLabelEnum = ButtonLabelEnum;
	currentOrgID: string | number;
	preference: any[] = [];

	purchasedGoodServiceEFDB: string[] = [
		EMISSION_SOURCE_KEY_ENUM.UK_GOVERNMENT_GHG_CONVERSION_FACTORS_FOR_COMPANY_REPORTING,
		EMISSION_SOURCE_KEY_ENUM.US_EEIO
	];

	form: FormGroup;
	defaultForm: FormGroup;

	@Input('sourceID') sourceID: any;
	@Input('source') source: any;
	@Input('showSave') showSave: boolean;
	@Output() emissionSourceFormUpdate = new EventEmitter<any>();
	productEMFMetadata: any;

	constructor(
		private stroageService: StorageService,
		private preferenceController: PreferenceController,
		private productAndServiceController: ProductAndServiceController,
		private formBuilder: FormBuilder) {
	}

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.getOrgPreference();
		this.getEMFSourceMetadata();
	}

	async getOrgPreference() {
		this.preference = [];
		this.preferenceController.getOrgPreference(this.currentOrgID)
			.subscribe(preferenceRes => {
				let foundPreferences = preferenceRes['activity'].filter(activity => activity.activityKeyID === ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES);
				if (foundPreferences.length > 0) {
					this.preference = this.abstractEmissionFactorSourceInfo(foundPreferences);
					// console.log('Preference:', this.preference);
				}
			});
	}

	abstractEmissionFactorSourceInfo(data): any {
		return data.flatMap(activity =>
			activity.calculationApproach.flatMap(approach =>
				approach.emissionFactorSource.map(source => ({
					emissionFactorSourceID: source.id,
					emissionFactorSourceName: source.name,
					emissionFactorSourceKeyID: source.keyID,

					calculationApproachID: approach.id,
					calculationApproachName: approach.name,
					calculationApproachKeyID: approach.keyID,

					activityID: activity.activityID,
					activityName: activity.activityName,
					activityKeyID: activity.activityKeyID,
				}))
			)
		);
	}

	async getEMFSourceMetadata() {
		if (this.sourceID) {
			this.productAndServiceController.getEMFSourceMetadata(this.currentOrgID, this.source.toLowerCase(), this.sourceID).subscribe(response => {
				this.productEMFMetadata = response;
				this.createForm();
			}, error => {
				console.log('error in getProductMetaDataByID -', error);
			});
		} else {
			this.createForm();
		}
	}

	createForm() {
		this.form = this.formBuilder.group({
			id: [this.productEMFMetadata?.id || null],
			recordID: [this.productEMFMetadata?.recordID || null],
			sourceID: [this.sourceID || null],
			sourceTypeID: [this.productEMFMetadata?.sourceTypeID || null],
			emissionFactorSourceStdID: [this.productEMFMetadata?.emissionFactorSourceStdID || null],
			ukDefraMetadata: this.createUKDefraForm(),
			usEeioMetadata: this.createUSEEIOForm()
		});
		this.defaultForm = Object.assign({}, this.form.value);
		this.registerForm();
	}

	createUKDefraForm() {
		return this.formBuilder.group({
			materialTypeID: [this.productEMFMetadata?.ukDefraMetadata?.materialTypeID || null],
			materialOriginTypeID: [this.productEMFMetadata?.ukDefraMetadata?.materialOriginTypeID || null]
		});
	}

	createUSEEIOForm() {
		return this.formBuilder.group({
			categoryStdID: [this.productEMFMetadata?.usEeioMetadata?.categoryStdID || null],
		});
	}

	get usEeioMetadata() {
		return this.form.get('usEeioMetadata');
	}

	get ukDefraMetadata() {
		return this.form.get('ukDefraMetadata');
	}

	registerForm() {
		if (sub) sub.unsubscribe;
		var sub = this.form.valueChanges.subscribe(values => {
			this.emissionSourceFormUpdate.emit(values);
		});
	}

	isFormChanged(): boolean {
		return JSON.stringify(this.form?.value) !== JSON.stringify(this.defaultForm);
	}

	shouldDisplayMetadataComponent(key: string): boolean {
		// console.log(key);
		return this.purchasedGoodServiceEFDB.includes(key);
	}

	canSave() {
		if (this.isFormChanged()) {
			if (this.form['id']) {
				this.updateProductEMFMetadata();
			} else {
				this.createProductEMFMetadata();
			}
		}
	}

	updateProductEMFMetadata() {
		this.productAndServiceController.updateProductEMFMetadata(this.currentOrgID, this.sourceID, this.form.value, this.form['id']).subscribe(res => {
			Object.assign(this.defaultForm, this.form.value);
			console.log('EMF Metadata Updated:', res);
		});
	}

	createProductEMFMetadata() {
		this.productAndServiceController.createProductEMFMetadata(this.currentOrgID, this.sourceID, this.form.value, this.source.toLowerCase()).subscribe(res => {
			Object.assign(this.defaultForm, this.form.value);
			console.log('EMF Metadata Created:', res);
		});
	}

	isUkDefra(sourceKeyID: string): boolean{
		return sourceKeyID === EMISSION_SOURCE_KEY_ENUM.UK_GOVERNMENT_GHG_CONVERSION_FACTORS_FOR_COMPANY_REPORTING;
	}

	isUsEeio(sourceKeyID: string): boolean{
		return sourceKeyID === EMISSION_SOURCE_KEY_ENUM.US_EEIO;
	}

}