import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';

import { isEqual } from 'lodash';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { AssetService } from '@carbon/service/asset.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';

// tsc-library
import { UnitM, UnitService, UnitTypeKeyID } from "@library/unit-service";
import { MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// tsc-library
@Component({
	selector: 'app-create-update',
	templateUrl: './create-update.component.html',
	styleUrls: ['create-update.scss']
})
export class CreateUpdateComponent implements OnInit {

	carbonConstant = CARBON_CONSTANT;
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;

	currentOrgID: any;
	activityID: any;
	activityKeyID: string;
	configuration: any;
	origin: string = 'default';
	queryParam: any;

	activityConfigFG: FormGroup;

	getAllSource: any;
	dataInputMethodList: any = [];

	fuelEnergyMonitor: any = [];
	statndardMointor: any = [];

	isDataButton: boolean = false;
	isMeterReading: boolean = false;

	unitM: UnitM[];
	unitMLength: UnitM[];
	unitMVolume: UnitM[];
	unitMEnergy: UnitM[];
	unitLengVolum: UnitM[];

	isFuelGenerated: boolean = false;
	isEnergyGenerated: boolean = false;

	getAllUnit: any = [];

	initialObject: any;

	unitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
	sourceSearchUtil: MatSelectSearchService = new MatSelectSearchService(['assetName']);

	isEqual: EventEmitter<boolean> = new EventEmitter();
	validity: EventEmitter<boolean> = new EventEmitter<boolean>();


	constructor(
		private fb: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private assetService: AssetService,
		private dataInputMethodService: DataInputMethodService,
		private unitService: UnitService,
		private storageService: StorageService
	) {

	}

	ngOnInit(): void {
		this.currentOrgID = parseInt(this.storageService.getStorage(['currentOrgID']));

		this.activatedRoute.queryParams.subscribe((queryParams) => {
			this.queryParam = queryParams;
			if (queryParams['activityID']) {
				this.activityID = queryParams['activityID'];
				this.activityKeyID = queryParams['activityKeyID'];
				this.origin = queryParams['origin'];
			}

			// if (queryParams['origin']) {
			//   this.origin = queryParams['origin'];
			//   if (queryParams['origin'] == 'ad-hoc') {
			//     // this.createSaveAsPFFControlSubscription();
			//   }
			// }
		});

		this.getUnit();
		this.activityConfigInit();
		this.getAllAsset();
		this.getAllDataInputMethodList();
	}

	activityConfigInit() {
		this.activityConfigFG = this.fb.group({
			activityConfig: this.fb.group({
				configName: [],
			}),
			activityConfigData: this.fb.group({
				fuelMonitorDataInputMethodID: [, Validators.required],
				dataInputMethodID: [, Validators.required],
				meterRollOver: [],
				meterUnitID: [],
			}),
			activityConfigSource: this.fb.group({
				sourceTypeID: [],
				sourceID: null,
			}),
		});
	}

	async getAllAsset() {
		try {
			this.getAllSource = await this.assetService.getAllAsset(this.currentOrgID);
			this.sourceSearchUtil.entityArr = this.getAllSource;
			this.sourceSearchUtil.createSubscription();
		} catch (error) {
			console.error('Error fetching asset:', error);
		}
	}

	async getAllDataInputMethodList() {
		try {
			this.dataInputMethodList = await this.dataInputMethodService.getAllDataInputMethodList();
			this.dataInputMethodList.forEach(res => {
				if (res.activityID == this.activityID && res.type == this.carbonConstant.fuelEnergyMonitorInput) {
					this.fuelEnergyMonitor.push(res);
				}
				if (res.activityID == this.activityID && res.type == this.carbonConstant.standardDataInput) {
					this.statndardMointor.push(res);
				}
			})
		} catch (error) {
			console.error('Error fetching data input methods:', error);
		}
	}

	alterValidators(res: any) {
		this.isDataButton = true;
		if (res == DataInputMethodKeyIDEnum.FUEL_CONSUMPTION) {
			this.getAllUnit = this.unitLengVolum;
			this.unitSearchUtil.entityArr = this.getAllUnit;
			this.unitSearchUtil.createSubscription();
		} else {
			this.getAllUnit = this.unitMEnergy;
			this.unitSearchUtil.entityArr = this.getAllUnit;
			this.unitSearchUtil.createSubscription();
		}

	}

	alterValidatorsForDataInput(res: any) {
		if (res == DataInputMethodKeyIDEnum.METER_READING) {
			this.isMeterReading = true;
			this.applyValidators();
		} else {
			this.isMeterReading = false;
			this.removeValidators();
		}
	}

	async getUnit() {
		this.unitM = await this.unitService.getUnit([]);
		this.unitLengVolum = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.VOLUME, UnitTypeKeyID.MASS]);
		this.unitMEnergy = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.ENERGY]);
	}

	// Apply validators for if the user choose meter-reading
	applyValidators() {
		const activityConfigData = this.activityConfigFG.get('activityConfigData') as FormGroup;

		const meterRollOverControl = activityConfigData.get('meterRollOver');
		meterRollOverControl?.setValidators([Validators.required, Validators.min(0)]);
		meterRollOverControl?.updateValueAndValidity();

		const meterUnitIDControl = activityConfigData.get('meterUnitID');
		meterUnitIDControl?.setValidators(Validators.required);
		meterUnitIDControl?.updateValueAndValidity();
	}

	// remove the validators on other case
	removeValidators() {
		const activityConfigData = this.activityConfigFG.get('activityConfigData') as FormGroup;

		const meterRollOverControl = activityConfigData.get('meterRollOver');
		meterRollOverControl?.clearValidators();
		meterRollOverControl?.updateValueAndValidity();

		const meterUnitIDControl = activityConfigData.get('meterUnitID');
		meterUnitIDControl?.clearValidators();
		meterUnitIDControl?.updateValueAndValidity();
	}

	requiredCheck(control) {
		const formArray = this.activityConfigFG.get('activityConfigData') as FormArray;
		return formArray.get(control).touched && formArray.get(control).hasError('required');
	}

	minCheck(control) {
		const formArray = this.activityConfigFG.get('activityConfigData') as FormArray;
		return formArray.get(control).touched && formArray.get(control).hasError('min');
	}

	isValid = () => { return !this.activityConfigFG.invalid; }

	get getConfigJson() {
		this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.value));
		this.configuration['activityConfigSource']['sourceID'] = this.configuration['activityConfigSource']['sourceID'];
		return this.configuration;
	}

	setSourceTypeID(data) {
		this.activityConfigFG.get('activityConfigSource').get('sourceTypeID').patchValue(data.sourceTypeID), { emitEvent: false }
	}

	isValidForm(): boolean {
		if (this.activityConfigFG.invalid) {
			this.activityConfigFG.markAllAsTouched();
			return false;
		}

		this.configuration = {};
		this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));
		this.configuration['activityConfigSource']['sourceID'] = this.configuration['activityConfigSource']['sourceID'];
		return true;
	}

	activityConfigValidity() {
		this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(!this.activityConfigFG.invalid));
	}

// Here i patch the data
	patchConfiguration(configuration) {
		this.activityConfigFG.valueChanges.subscribe(() => {
			this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
		});
		let activityConfig = configuration['activityConfig'];
		let activityConfigData = configuration['activityConfigData'];
		let activityConfigSource = configuration['activityConfigSource'];

		if (activityConfig != null) {
			this.activityConfigAC.patchValue({
				configName: activityConfig['configName'],
			});
		} else {
			this.readOnlyForm();
		}

		if (activityConfigSource['sourceID'] != null) {
			this.activityConfigSourceAC.patchValue({
				sourceID: activityConfigSource['sourceID'],
				sourceTypeID: activityConfigSource['sourceTypeID']
			});
		}

		// here I find the dataInputMethod for user selection
		const dataInputMethod = activityConfigData['fuelMonitorDataInputMethodID'];
		const dataInputMethodForData = activityConfigData['dataInputMethodID'];
		const selectedMethod = this.dataInputMethodList.find(res => dataInputMethod === res.id);
		const selectedMethodForData = this.dataInputMethodList.find(res => dataInputMethodForData === res.id);

		if (selectedMethod) {
			this.alterValidators(selectedMethod.keyID);
		}

		this.activityConfigDataAC.patchValue({
			fuelMonitorDataInputMethodID: activityConfigData['fuelMonitorDataInputMethodID']
		})

		this.isDataButton = true;

		if (selectedMethodForData.keyID == DataInputMethodKeyIDEnum.TOTAL_AMOUNT) {
			this.activityConfigDataAC.patchValue({
				dataInputMethodID: activityConfigData['dataInputMethodID'],
			});
		} else if (selectedMethodForData.keyID == DataInputMethodKeyIDEnum.METER_READING) {
			this.isMeterReading = true;

			this.activityConfigDataAC.patchValue({
				dataInputMethodID: activityConfigData['dataInputMethodID'],
				meterUnitID: activityConfigData['meterUnitID'],
				meterRollOver: activityConfigData['meterRollOver']
			});
		} 
	}

	readOnlyForm() {
		this.activityConfigFG.disable({ emitEvent: false })
	}

	get activityConfigAC() {
		const array = this.activityConfigFG.get('activityConfig') as AbstractControl;
		return array;
	}

	get activityConfigSourceAC(): AbstractControl {
		return this.activityConfigFG.get('activityConfigSource') as AbstractControl;
	}

	get activityConfigDataAC(): AbstractControl {
		return this.activityConfigFG.get('activityConfigData') as AbstractControl;
	}

	// here i check myForm details
	// save() {
	//   if (this.activityConfigFG.valid) {
	//     console.log(this.activityConfigFG);
	//   } else {
	//     console.log("Value")
	//   }
	// }

}

