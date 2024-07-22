import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { isEqual } from "lodash";
import * as moment from 'moment';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
import { FormErrorEnum, InvalidForm, MaterialFormFieldAppearance, NocFileUploadEnum } from '@library/tsc-common';
// /tsc-library/
@Component({
	selector: 'app-meter-reading',
	templateUrl: './meter-reading.component.html',
	styles: []
})
export class MeterReadingComponent implements OnInit {

	activityDataFG: FormGroup
	currentOrgID: any;

	currentFormArr: FormArray;
	filled: boolean = false;
	submit: boolean = false;

	action: any;
	activityID: any;
	activityData: any;

	sourceName: string = null;
	isSource: boolean = false;
	dataSource: any = [];

	docList: any[] = [];

	isEqual: boolean = true;
	initialObject: any;

	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	formErrorEnum = FormErrorEnum;
	dateInputTypeEnum = DateInputTypeEnum;

	allUnit: any;

	startDate: string;
	endDate: string;
	format = 'YYYY-MM-DD'

	billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;

	@Input() activityConfig: any;
	@Input() getAllSource: any[] = [];
	@Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    @Output() docUploadChange: EventEmitter<any> = new EventEmitter<any>();

	@ViewChildren('customDateInput') customDateInputs: QueryList<any>;

    @ViewChild('fileInput') fileInput: ElementRef;

	constructor(
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private toastrService: ToastrService,
		private dateService: DateService,
		private storageService: StorageService,
		private unitService: UnitService
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.getUnit();
	}

	ngOnChanges() {
		this.activatedRoute.queryParams.subscribe((queryParam) => {
			this.action = queryParam.action;
			this.activityID = queryParam.activityID;
		});
		this.activatedRoute.data.subscribe(data => {
			console.log(data)
            // this.sourceData = data.activityKeyID;
            // console.log("source", this.sourceData)
            // if (this.sourceData == ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION) {
            //     this.source = 'electricity'
            // } else if (this.sourceData == ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION) {
            //     this.source = 'heat'
            // }
        });

		this.activityDataInit();
		this.getConfiguration(this.activityConfig);
	}

	dateInpChange(index) {
		if (this.customDateInputs) {
			const customDateInputInstance = this.customDateInputs.toArray()[index];
			let startDate = customDateInputInstance.startDateFC.value;
			let endDate = customDateInputInstance.endDateFC.value;

			if (startDate) {
				// this.startDate = this.dateService.formatDate(startDate, this.format)
				this.activityDataFA.controls[index].get('startDate').patchValue(this.startDate);
				console.log(index, this.startDate);
			}

			if (endDate) {
				// this.endDate = this.dateService.formatDate(endDate, this.format)
				this.activityDataFA.controls[index].get('endDate').patchValue(this.endDate);
				console.log(index, this.endDate);
			}
		}
	}

	activityDataInit() {
		this.activityDataFG = this.formBuilder.group({
			activityDataDetails: this.formBuilder.array([]),
		});
	}

	get activityDataFA(): FormArray {
		return this.activityDataFG.get('activityDataDetails') as FormArray;
	}

	initFormControl(sourceID) {
		this.activityDataFA.push(
			this.formBuilder.group({
				recordID: [],
				sourceTypeID: this.activityConfig['activityConfigSource']['sourceTypeID'],
				sourceID: [sourceID],
				dateRange: [],
				startDate: [this.startDate],
				endDate: [this.endDate],
				quantityProduced: [],
				quantityUnit: [],
				openingMeterReading: [],
				closingMeterReading: [],
				meterReadingUnitID: this.activityConfig['activityConfigData']['meterRolloverUnitID'],
				activityID: this.activityID,
			})
		);
	}

	uploadDoc() {
        this.fileInput.nativeElement.click();
    }

	fileUpload(event) {
        let file = event.target.files[0];
        if (file) {

            if (file.type !== 'application/pdf') {
                this.toastrService.openToast('Error', NocFileUploadEnum.INVALID_FILE_TYPE_ERROR, 'error');
                return;
            }

            if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.toastrService.openToast('Error', NocFileUploadEnum.INVAID_FILE_SIZE_ERROR, 'error');
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.billFile = file;
            this.noBillFileAvailable = false;
            this.billFileName = file['name'];
            this.fileInput.nativeElement.value = null;
            this.docUploadChange.emit(this.billFile);
        }
    }

	removeFile() {
        this.billFile = null;
        this.billFileName = '';
        this.noBillFileAvailable = true;
        this.fileInput.nativeElement.value = null;
        this.docUploadChange.emit(this.billFile);
    }

	addFormControls() {
		if (this.isSource) {
			this.dataSource.forEach((ds) => {
				this.initFormControl(ds.id);
			})
		} else {
			this.initFormControl(null);
		}
		this.updateValidators();
	}

	async getUnit() {
        this.allUnit = await this.unitService.getUnit([]);
		// this.unitMLength = this.unitService.filterUnit(this.allUnit, [UnitTypeKeyID.LENGTH]);
    }

	// async getUnit() {
    //     this.unitM = await this.unitService.getUnit([]);
    //     this.unitMLength = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.LENGTH]);
    //     this.unitMVolume = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.VOLUME]);
    //     this.volumeUnitSearchUtil.entityArr = this.unitMVolume;
    //     this.volumeUnitSearchUtil.createSubscription();
    // }

	pathFormData() {
		this.activityDataFA.push(
			this.formBuilder.group({
				recordID: this.activityData.recordID,
				sourceTypeID: this.activityData.sourceTypeID,
				sourceTypeName: this.activityData.sourceTypeName,
				sourceID: this.activityData.sourceID,
				dateRange: { startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) },
				startDate: this.activityData.startDate,
				endDate: this.activityData.endDate,
				quantityProduced: this.activityData.quantityProduced,
				quantityUnit: this.activityData.quantityUnit,
				openingMeterReading: this.activityData.openingMeterReading,
				closingMeterReading: this.activityData.closingMeterReading,
				meterReadingUnitID: this.activityData.meterReadingUnitID,
				activityID: this.activityData.activityID,
			})
		);
		if (this.activityData.sourceName != null) {
			this.sourceName = this.activityData.sourceName;
			this.isSource = true;
		}
		this.updateValidators();

		this.activityDataFA.valueChanges
			.subscribe(() => this.isEqual = isEqual(this.initialObject, this.activityDataFA.value));

		this.initialObject = this.activityDataFA.value;
		this.isEqual = true;
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
		if (formGroup.get('dateRange').value != null) this.filled = true;
		if (formGroup.get('openingMeterReading').value != null) this.filled = true;
		if (formGroup.get('closingMeterReading').value != null) this.filled = true;
		if (formGroup.get('meterReadingUnitID').value != null) this.filled = true;
	}

	addValidators(formGroup) {
		formGroup.get('dateRange').addValidators([Validators.required]);
		formGroup.get('openingMeterReading').addValidators([Validators.required, Validators.min(0)]);
		formGroup.get('closingMeterReading').addValidators([Validators.required, Validators.min(0)]);
		formGroup.get('meterReadingUnitID').addValidators([Validators.required]);

		this.updateValueAndValidity(formGroup);
	}

	removeValidators(formGroup) {
		formGroup.get('dateRange').clearValidators();
		formGroup.get('openingMeterReading').clearValidators();
		formGroup.get('closingMeterReading').clearValidators();
		formGroup.get('meterReadingUnitID').clearValidators();

		this.updateValueAndValidity(formGroup);
	}

	updateValueAndValidity(formGroup) {
		formGroup.get('dateRange').updateValueAndValidity({ emitEvent: false });
		formGroup.get('openingMeterReading').updateValueAndValidity({ emitEvent: false });
		formGroup.get('closingMeterReading').updateValueAndValidity({ emitEvent: false });
		formGroup.get('meterReadingUnitID').updateValueAndValidity({ emitEvent: false });
	}

	async getConfiguration(configuration) {
		if (this.action == 'create') {
			const sourceID = configuration.activityConfigSource.sourceID;
			if (sourceID != null && sourceID.length > 0) {
				this.isSource = true;
				this.dataSource = [];
				sourceID.forEach((res) => {
					this.dataSource.push({
						id: res,
					})
				})
			} else {
				this.isSource = false;
			}
			this.addFormControls();
		}
	}

	getProductName(id) {
		const product = this.getAllSource.find(item => item.id === id);
		return product.name;
	}

	isValidForm(): boolean {
		this.docList = [];
		this.activityDataFG.markAllAsTouched();
		if (this.action == 'create') {
			if (this.activityDataFG.invalid || this.submit == false) {
				this.toastrService.openToast('Error', 'Fill at least one record detail', 'error');
				return;
			}
		} else if (this.action == 'update') {
			if (!this.isEqual && (this.activityDataFG.invalid || this.submit == false)) {
				this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR); return;
			}
		}

		this.activityData = {};
		const validControls: FormGroup[] = [];
		const formArray = this.activityDataFG.get('activityDataDetails') as FormArray;

		formArray.controls.forEach((control: FormGroup) => {
			if (control.get('openingMeterReading').value != null) {
				validControls.push(control);
			}
		});
		const newFormArray = new FormArray(validControls);
		this.activityData = JSON.parse(JSON.stringify(newFormArray.value));
		this.docList.push(null);
		return true;
	}

	errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
		const activityConfigDetailsFA = this.activityDataFG.get('activityDataDetails') as FormArray;
		const formGroup = activityConfigDetailsFA.at(index) as FormGroup;
		return formGroup.get(control).hasError(error);
	}
}