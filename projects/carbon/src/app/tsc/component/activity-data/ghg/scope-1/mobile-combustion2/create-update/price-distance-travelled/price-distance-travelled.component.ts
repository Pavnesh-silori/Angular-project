import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Subscription, forkJoin } from 'rxjs';
import * as moment from 'moment';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { CurrencyM } from '@carbon/model/currency.model';
import { CurrencyService } from '@carbon/service/currency.service';
import { FuelService } from '@carbon/service/fuel.service';
import { CarbonDocumentController } from '@carbon/controller/document.controller';

// tsc-library/
import { FormErrorEnum, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrColor } from '@library/toastr-service';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
// tsc-library.

@Component({
	selector: 'price-distance-travelled',
	templateUrl: './price-distance-travelled.component.html',
	styleUrls: ['../create-update.component.scss']
})
export class PriceDistanceTravelledComponent implements OnInit {
	// Inputs and Outputs
	@Input() activityConfig: any;
	@Input() allVechile: any[] = [];
	@Input() activityID: number;
	@Input() docFileList: File[];
	@Output() docUploadChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

	// Enums and Constants
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	DateFormatEnum = DateFormatEnum;
	DateInputTypeEnum = DateInputTypeEnum;
	CARBON_CONSTANT = CARBON_CONSTANT;
	FormErrorEnum = FormErrorEnum;

	// Form and Array
	currentFormArr: FormArray;
	activityDataFG: FormGroup;

	// Miscellaneous
	currentOrgID: any;
	noOfVeh: number = 0;
	vehicleName: string;
	vechileTypeID: number;
	activityData: any;
	currency: any;
	distanceUnit: any;
	action: any = 'create';
	milageDenum: any;
	milageNum: any;
	dataSourceLength: number;
	currencyFlag: boolean = false;
	distanceFlag: boolean = false;
	milageNumFlag: boolean = false;
	milagedenumFlag: boolean = false;
	submit: boolean = false;
	filled: boolean = false;
	isSource: boolean = false;
	isEqual: boolean = true;
	dataSource: any = [];
	sourceTypeArray: any = [];
	unitM: UnitM[] = [];
	massUnitList: UnitM[] = [];
	fuelUnitList: UnitM[] = [];
	distanceUnitlist: UnitM[] = [];
	volumnUnitList: UnitM[] = [];
	unitIdList: UnitM[] = [];
	currencyList: CurrencyM[] = [];
	billFile: File = null;
	billFileName: string;
	file: any;

	fuelTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['fuelSourceName']);
	currencyTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['currencyName']);
	fileInputArr: ElementRef[] = [];
	formFields: any[] = [
		'dateRange', 'billAmount', 'billCurrencyID', 'fuelTypeID', 'fuelRate',
		'fuelRateNumeratorUnitID', 'fuelRateDenominatorUnitID', 'distanceTravelled',
		'distanceTravelledUnitID', 'mileage', 'mileageNumeratorUnitID', 'mileageDenominatorUnitID'
	];

	// ViewChildren and Subscriptions
	@ViewChildren('fileInput') fileInput: QueryList<ElementRef>;
	@ViewChildren('customDateInput') customDateInputs: QueryList<DateInputComponent>;
	dateInputSub: Subscription;
	fileInputLoadSub: Subscription;

	constructor(
		private dialog: MatDialog,
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private unitService: UnitService,
		public currencyService: CurrencyService,
		private fuelService: FuelService,
		private storageService: StorageService,
		private toastrService: ToastrService,
		private carbonDocumentController: CarbonDocumentController,
		private dateService: DateService,
	) { }

	ngOnChanges() {
		this.activatedRoute.data.subscribe((routeData) => {
			this.action = routeData.action;
		});
		this.vechileTypeID = this.activityConfig.activityConfigData.vehicleTypeID;
		this.activityDataInit();
		this.getConfiguration(this.activityConfig);
	}

	ngOnInit(): void {
		this.vechileTypeID = this.activityConfig.activityConfigData.vehicleTypeID;
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.getUnitList();
		this.getCurrency();
	}

	ngAfterViewInit() {
		this.fileInputLoadSub = this.fileInput.changes.subscribe(() => this.updateFileInputArray());
		this.updateFileInputArray();
	}

	private updateFileInputArray() {
		if (this.fileInput && this.fileInput.length > 0) {
			this.fileInputArr = this.fileInput.toArray();
		}
	}

	activityDataInit() {
		this.activityDataFG = this.formBuilder.group({
			activityDataDetails: this.formBuilder.array([]),
		});
		this.addFormControls();
	}

	get activityDataDetailsFA(): FormArray {
		return this.activityDataFG.get('activityDataDetails') as FormArray;
	}

	toggleFlag(checked: boolean, flag: string) {
		switch (flag) {
			case 'currencyFlag':
				this.currencyFlag = checked;
				break;
			case 'distanceFlag':
				this.distanceFlag = checked;
				break;
			case 'milageNumFlag':
				this.milageNumFlag = checked;
				break;
			case 'milagedenumFlag':
				this.milagedenumFlag = checked;
				break;
			default:
		}
	}

	selectedvalue(value, dropdownType: string) {
		switch (dropdownType) {
			case 'currency':
				this.currency = value;
			case 'distanceUnit':
				this.distanceUnit = value;
				break;
			case 'milageNumerator':
				this.milageNum = value;
				break;
			case 'milageDenumerator':
				this.milageDenum = value;
				break;
		}
		this.updateFormControls();
	}

	updateFormControls() {
		this.activityDataDetailsFA.controls.forEach((formGroup: FormGroup) => {
			if (this.currency) {
				formGroup.get('billCurrencyID').setValue(this.currency);
			}
			if (this.distanceUnit) {
				formGroup.get('distanceTravelledUnitID').setValue(this.distanceUnit);
			}
			if (this.milageNum) {
				formGroup.get('mileageNumeratorUnitID').setValue(this.milageNum);
			}
			if (this.milageDenum) {
				formGroup.get('mileageDenominatorUnitID').setValue(this.milageDenum);
			}
		});
	}

	addFormControls() {
		this.activityDataDetailsFA.clear();
		this.dataSource.forEach((ds) => {
			let name = "";
			this.sourceTypeArray.forEach((res) => {
				if (ds.id == res.id) {
					name = res.name;
				}
			});
			const formGroup = this.formBuilder.group({
				recordID: [],
				sourceTypeID: this.activityConfig.activityConfigSource.sourceTypeID,
				sourceID: [ds.id],
				dateRange: [],
				startDate: [],
				endDate: [],
				fuelTypeID: [],
				billAmount: [],
				billCurrencyID: [],
				fuelRate: [],
				fuelRateNumeratorUnitID: [],
				fuelRateDenominatorUnitID: [],
				distanceTravelled: [],
				distanceTravelledUnitID: [],
				mileage: [],
				mileageNumeratorUnitID: [],
				mileageDenominatorUnitID: [],
				docID: [],
				docType: [],
				docName: [],
				docSize: [],
				docPath: [],
				activityID: this.activityID,
				activityDataID: []
			});
			formGroup.get('billCurrencyID')?.valueChanges.subscribe((value) => {
				formGroup.get('fuelRateNumeratorUnitID')?.setValue(value);
			});
			const initialBillCurrencyID = formGroup.get('billCurrencyID')?.value;
			if (initialBillCurrencyID) {
				formGroup.get('fuelRateNumeratorUnitID')?.setValue(initialBillCurrencyID);
			}
			this.activityDataDetailsFA.push(formGroup);
		});
		this.updateValidators();
	}

	updateValidators() {
		this.currentFormArr = this.activityDataFG.get('activityDataDetails') as FormArray;
		for (let i = 0; i < this.currentFormArr.controls.length; ++i) {
			let item = this.currentFormArr.controls[i];
			this.removeValidators(item);
			item.valueChanges.subscribe(() => {
				this.removeValidators(item);
				this.isFormFilled(item);
				this.submit = false;
				if (this.filled) {
					this.submit = true;
					this.addValidators(item);
				}
				this.filled = false;
			});
		}
		this.formGroupChange.emit(this.activityDataFG);
	}

	isFormFilled(formGroup) {
		this.filled = this.formFields.some(field => formGroup.get(field).value != null);
	}

	addValidators(formGroup) {
		const minFields = ['billAmount', 'fuelRate', 'distanceTravelled', 'mileage'];

		this.formFields.forEach(field => {
			formGroup.get(field).addValidators([Validators.required]);
		});
		minFields.forEach(field => {
			formGroup.get(field).addValidators([Validators.min(0)]);
		});
		const fuelRate = formGroup.get('fuelRate').value;
		const distanceTravelled = formGroup.get('distanceTravelled').value;
		const mileage = formGroup.get('mileage').value;
		const billAmount = formGroup.get('billAmount').value;

		if (fuelRate != null && distanceTravelled != null) {
			['mileage', 'mileageNumeratorUnitID', 'mileageDenominatorUnitID', 'billAmount', 'billCurrencyID'].forEach(field => {
				formGroup.get(field).clearValidators();
			});
		} else if (distanceTravelled != null && mileage != null) {
			['billAmount', 'billCurrencyID', 'fuelRate', 'fuelRateNumeratorUnitID', 'fuelRateDenominatorUnitID'].forEach(field => {
				formGroup.get(field).clearValidators();
			});
		} else if (billAmount != null && fuelRate != null && distanceTravelled != null) {
			['mileage', 'mileageNumeratorUnitID', 'mileageDenominatorUnitID'].forEach(field => {
				formGroup.get(field).clearValidators();
			});
		} else if (billAmount != null && fuelRate != null && mileage != null) {
			['distanceTravelled', 'distanceTravelledUnitID'].forEach(field => {
				formGroup.get(field).clearValidators();
			});
		}
		this.updateValueAndValidity(formGroup);
	}

	removeValidators(formGroup) {
		this.formFields.forEach(field => {
			formGroup.get(field)?.clearValidators();
		});
		this.updateValueAndValidity(formGroup);
	}

	updateValueAndValidity(formGroup) {
		this.formFields.forEach(field => {
			formGroup.get(field)?.updateValueAndValidity({ emitEvent: false });
		});
	}

	async getConfiguration(configuration) {
		this.noOfVeh = configuration.activityConfigSource.sourceID.length;
		if (this.action == 'create') {
			const sourceID = configuration.activityConfigSource.sourceID;
			if (sourceID != null && sourceID.length > 0) {
				this.isSource = true;
				this.dataSource = [];
				sourceID.forEach((res) => {
					const vehicle = this.allVechile.find(item => item.id == res);
					this.dataSource.push({
						id: res,
						name: vehicle.vehicleName,
					})
				})
			} else {
				this.isSource = false;
			}
			this.dataSourceLength = 0;
			this.addFormControls();
		}
	}

	patchData() {
		this.activityDataDetailsFA.push(
			this.formBuilder.group({
				recordID: this.activityData.recordID,
				sourceTypeID: this.activityData.sourceTypeID,
				sourceID: this.activityData.sourceID,
				startDate: this.activityData.startDate,
				endDate: this.activityData.endDate,
				dateRange: { startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) },
				fuelTypeID: this.activityData.fuelTypeID,
				billAmount: this.activityData.billAmount,
				billCurrencyID: this.activityData.billCurrencyID,
				fuelRate: this.activityData.fuelRate,
				fuelRateNumeratorUnitID: this.activityData.fuelRateNumeratorUnitID,
				fuelRateDenominatorUnitID: this.activityData.fuelRateDenominatorUnitID,
				distanceTravelled: this.activityData.distanceTravelled,
				distanceTravelledUnitID: this.activityData.distanceTravelledUnitID,
				mileage: this.activityData.mileage,
				mileageNumeratorUnitID: this.activityData.mileageNumeratorUnitID,
				mileageDenominatorUnitID: this.activityData.mileageDenominatorUnitID,
				docID: [this.activityData?.file?.id],
				docType: [this.activityData?.docType],
				docName: [this.activityData?.file?.name],
				docPath: [this.activityData?.file?.path],
				docSize: [this.activityData?.docSize],
				activityID: this.activityID,
				activityDataID: this.activityData.id,
			})
		);

		if (this.activityData.sourceName != null) {
			this.vehicleName = this.activityData.sourceName;
			this.isSource = true;
		}
		this.updateValidators();
	}

	dateInpChange(formGroup: FormGroup, index: number) {
		if (this.customDateInputs) {
			const customDateInputInstance = this.customDateInputs.toArray()[index];
			let startDate;
			let endDate;

			if (customDateInputInstance) {
				startDate = customDateInputInstance.startDateFC?.value;
				endDate = customDateInputInstance.endDateFC?.value;
			}

			if (startDate) {
				const formattedStartDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
				formGroup.get('startDate').patchValue(formattedStartDate);
			}

			if (endDate) {
				const formattedEndDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
				formGroup.get('endDate').patchValue(formattedEndDate);
			}

			if (startDate && endDate) {
				const formattedStartDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
				const formattedEndDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
				const dateRangeFormatted = [formattedStartDate, formattedEndDate];
				formGroup.get('dateRange').patchValue(dateRangeFormatted);
			}
		}
	}


	patchDate() {
		const customDateInputInstance = this.customDateInputs.toArray()[0];
		if (customDateInputInstance) {
			customDateInputInstance.daterange.patchValue({ startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) });
		}
	}


	isValidForm() {
		this.activityDataFG.markAllAsTouched();
		if (this.action == 'create') {
			if (this.activityDataFG.invalid || this.submit == false) {
				this.toastrService.openToast('Error', 'Fill at least one record detail', 'error');
				return;
			}
		} else if (this.action == 'update') {
			if (!this.isEqual && (this.activityDataFG.invalid || this.submit == false)) {
				this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
				return;
			}
		}
		this.activityData = {};
		const validControls: FormGroup[] = [];
		const formArray = this.activityDataFG.get('activityDataDetails') as FormArray;

		formArray.controls.forEach((control: FormGroup, index: number) => {
			if (control.get('fuelTypeID').value != null) {
				validControls.push(control);
			}
			if (control.get('fuelTypeID').value == null) {
				this.docFileList.splice(index, 1);
			}
		});
		const newFormArray = new FormArray(validControls);
		this.activityData = JSON.parse(JSON.stringify(newFormArray.value));
		return true;
	}

	async getCurrency() {
		this.currencyList = <CurrencyM[]>await this.currencyService.getCurrency();
		this.currencyTypeSearchUtil.entityArr = this.currencyList;
		this.currencyTypeSearchUtil.createSubscription();
	}

	getUnitList() {
		forkJoin([
			this.fuelService.getFuelSource(),
			this.unitService.getUnit([])
		]).subscribe(([fuelUnitM, unitM]) => {
			this.fuelUnitList = fuelUnitM;
			this.unitM = unitM;
			this.massUnitList = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.MASS]);
			this.distanceUnitlist = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.LENGTH]);
			this.volumnUnitList = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.VOLUME]);

			// ngx mat select search
			this.fuelTypeSearchUtil.entityArr = this.fuelUnitList;
			this.fuelTypeSearchUtil.createSubscription();

			if (this.action == 'update') {
				this.activityData = this.activityConfig.activityData;
				this.patchData();
				this.dateInputSub = this.customDateInputs.changes.subscribe((list: QueryList<any>) => {
                    if (list.length > 0) {
                        this.patchDate();
                        this.dateInputSub.unsubscribe();
                    }
                });
			}
		},
			error => {
				console.error('error in getUnitList -', error);
			});
	}

	fileUpload(event, formGroup: FormGroup, index: number) {
		let file = event.target.files[0];
		if (file) {

			if (file.type !== 'application/pdf') {
				this.toastrService.error(NocFileUploadEnum.INVALID_FILE_TYPE_ERROR)
				return;
			}
			if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
				this.toastrService.error(NocFileUploadEnum.INVAID_FILE_SIZE_ERROR)
				return;
			}
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = (e: any) => { };

			this.billFile = file;
			this.billFileName = file['name'];

			formGroup.get('docName').patchValue(file['name']);
			formGroup.get('docSize').patchValue(this.getFileSizeWithUnit(file['size']));

			this.docFileList[index] = file;

			if (this.action == 'update') {
				this.fileCreateUpdate(formGroup);
			}
		} else {
			this.toastrService.error('Please upload a file!');
			return;
		}
	}

	getFileSizeWithUnit(billFileSize: number): string {
		const fileSizeInKB = Math.round(billFileSize / 1024);
		const fileSizeInMB = Math.round(fileSizeInKB / 1024);
		const fileSizeInGB = Math.round(fileSizeInMB / 1024);

		if (fileSizeInGB > 1) {
			return fileSizeInGB + ' GB';
		} else if (fileSizeInMB > 1) {
			return fileSizeInMB + ' MB';
		} else {
			return fileSizeInKB + ' KB';
		}
	}

	removeFile(formGroup: FormGroup, index: number) {
		if (this.action == 'create') {
			this.fileInputArr[index].nativeElement.value = null;
		}
		this.billFile = null;
		this.billFileName = '';

		formGroup.get('docName').reset();
		formGroup.get('docSize').reset();
		formGroup.get('docPath').reset(null);
		formGroup.get('docID').reset();
		this.docFileList[index] = this.billFile;
	}

	toFormData(): FormData {
		const formData = new FormData();
		formData.append('payload', this.billFile);
		return formData;
	}

	fileCreateUpdate(formGroup: FormGroup) {
		if (formGroup.get('docID').value == null) {
			this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.MOBILE_COMBUSTION,
				this.toFormData()).subscribe((response) => {
					this.file = response['response'];
					this.updateFileFormControl(formGroup);
				}, error => {
					console.log("error in fileCreate -", error);
				});
		} else {
			this.carbonDocumentController.updateDocument(this.currentOrgID, formGroup.get('docID').value, this.toFormData())
				.subscribe((response) => {
					this.file = response['response'];
					this.updateFileFormControl(formGroup);
				}, error => {
					console.log("error in fileUpdate -", error);
				});
		}
	}

	updateFileFormControl(formGroup) {
		formGroup.get('docID').patchValue(this.file.id);
		formGroup.get('docName').patchValue(this.file.name);
		formGroup.get('docPath').patchValue(this.file.path);
	}

	deleteConfirmation(formGroup: FormGroup, index) {
		const dialogRef = this.dialog.open(TypeConfirmationDialog, {
			minWidth: '650px',
			maxWidth: '600px',
			data: {
				icon: 'delete',
				header: 'Are you sure you want to delete ?',
				body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This file will be deleted permanently and you won`t be able to track it`s progress.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
				confirmationInput: 'DELETE',
				buttonOne: 'Cancel',
				buttonTwo: 'Delete'
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.deleteDocument(formGroup.get('docID').value, formGroup, index);
			} else {
				dialogRef.close()
			}
		});
	}

	deleteDocument(docID, formGroup, index) {
		this.carbonDocumentController.deleteDocument(this.currentOrgID, docID).subscribe(res => {
			this.removeFile(formGroup, index);
		}, error => {
			console.log("error in deleteDocument -", error);
		});
	}

	uploadDoc(index: number) {
		this.fileInputArr[index].nativeElement.click();
	}

}
