import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PreferenceController } from '@carbon/controller/preference.controller';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { StorageService } from '@library/storage-service';
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
	currentOrgID: string | number;
	preference: any[] = [];

	purchasedGoodServiceEFDB: string[] = [
		EMISSION_SOURCE_KEY_ENUM.UK_GOVERNMENT_GHG_CONVERSION_FACTORS_FOR_COMPANY_REPORTING,
		EMISSION_SOURCE_KEY_ENUM.US_EEIO
	];

	form: FormGroup;
	defaultForm: FormGroup;

	@Input('productID') productID: any;
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
		this.getProductEMFMetadataByID();
	}

	async getOrgPreference() {
		// let filterArr: any[] = [];
		// filterArr.push('activityKeyID:' + ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES);

		// this.preferenceController.getOrgPreference(this.currentOrgID)
		// 	.subscribe(preferenceRes => {
		// 		this.preference = this.preference['activity'].find(activity => activity.activityKeyID === ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES);
		// 	});

		// this.preference = [{
		// 	"activityName": "Purchased Goods and Services",
		// 	"activityID": 10,
		// 	"scopeKeyID": "SCOPE3",
		// 	"bq": "NO",
		// 	"calculationApproachID": [
		// 		11,
		// 		15
		// 	],
		// 	"calculationApproach": [
		// 		{
		// 			"id": 11,
		// 			"keyID": "spend-based",
		// 			"name": "Scope 3 Spend Based",
		// 			"emissionFactorSourceID": [
		// 				15
		// 			],
		// 			"emissionFactorSource": [
		// 				{
		// 					"id": 15,
		// 					"name": "US EEIO",
		// 					"keyID": "us-eeio",
		// 					"emissionFactorSourceVersionID": 25,
		// 					"emissionFactorSourceVersion": [
		// 						{
		// 							"id": 25,
		// 							"name": "v2021.1",
		// 							"keyID": null,
		// 							"description": null,
		// 							"isStandard": null,
		// 							"entityID": null,
		// 							"recordID": null
		// 						}
		// 					]
		// 				}
		// 			]
		// 		},
		// 		{
		// 			"id": 15,
		// 			"keyID": "average-method",
		// 			"name": "Average Method",
		// 			"emissionFactorSourceID": [
		// 				4
		// 			],
		// 			"emissionFactorSource": [
		// 				{
		// 					"id": 4,
		// 					"name": "UK Government GHG Conversion Factors for Company Reporting ",
		// 					"keyID": "uk-government-ghg-conversion-factors-for-company-reporting",
		// 					"emissionFactorSourceVersionID": 27,
		// 					"emissionFactorSourceVersion": [
		// 						{
		// 							"id": 27,
		// 							"name": "v2023.1",
		// 							"keyID": null,
		// 							"description": null,
		// 							"isStandard": null,
		// 							"entityID": null,
		// 							"recordID": null
		// 						}
		// 					]
		// 				}
		// 			]
		// 		}
		// 	]
		// }];

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

	async getProductEMFMetadataByID() {
		// this.productEMFMetadata = {
		// 	"id": 2,
		// 	"recordID": 2,
		// 	"sourceID": 50,
		// 	"sourceTypeID": 12,
		// 	"emissionFactorSourceStdID": null,
		// 	"ukDefraMetadata": {
		// 		"materialTypeID": 1,
		// 		"materialOriginTypeID": 1
		// 	},
		// 	"usEeioMetadata": null
		// };
		if (this.productID) {
			this.productAndServiceController.getProductEMFMetadataByID(this.currentOrgID, this.productID).subscribe(response => {
				this.productEMFMetadata = response;
				this.createForm();
			}, error => {
				console.log('error in getProductMetaDataByID -', error);
			});
		}else {
			this.createForm();
		}
	}

	createForm() {
			this.form = this.formBuilder.group({
				id: [this.productEMFMetadata?.id || null],
				recordID: [this.productEMFMetadata?.recordID || null],
				sourceID: [this.productEMFMetadata?.sourceID || null],
				sourceTypeID: [this.productEMFMetadata?.sourceTypeID || null],
				emissionFactorSourceStdID: [this.productEMFMetadata?.emissionFactorSourceStdID || null],
				ukDefraMetadata: this.createUKDefraForm(),
				usEeioMetadata: this.createUSEEIOForm()
			});
			console.log("!11111111111111111111111")
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
		return JSON.stringify(this.form.value) !== JSON.stringify(this.defaultForm);
	}

	shouldDisplayMetadataComponent(key: string): boolean {
		// console.log(key);
		return this.purchasedGoodServiceEFDB.includes(key);
	}

}