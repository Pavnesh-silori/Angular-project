import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { isEqual } from "lodash";

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { ProductAndServiceService } from '@netzero/service/product-and-service.service';
import { CarbonDocumentController } from '@carbon/controller/document.controller';
import { ProcessService } from '@carbon/service/process.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService } from '@library/toastr-service';
import { DateFormatEnum, DateInputTypeEnum, DateService } from '@library/date';
import { FormErrorEnum, MaterialFormFieldAppearance, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
import { Subscription } from 'rxjs';
// /tsc-library/
@Component({
	selector: 'app-meter-reading',
	templateUrl: './meter-reading.component.html',
	styles: []
})

export class MeterReadingComponent implements OnInit {

	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	formErrorEnum = FormErrorEnum;
	dateInputTypeEnum = DateInputTypeEnum;

	@Input() activityDataFG: FormGroup;
	@Input() defaultDataCollectionMethodID: any;
	@Input() docFileList: any[];
	@Input() activityConfig: any;
	@Input() entity: any;
	@Input() sourceTypeID: any;

	@Output('validFields') private _valid_fields = new EventEmitter<string[]>();

	getAllSource: any[] = [];
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

	isEqual: boolean = true;
	isReadOnly: boolean = true;
	initialObject: any;

	fileIndexN: any;

	unitM: UnitM[];
	unitMassVolume: UnitM[];

	startDate: string;
	endDate: string;

	billFile: File = null;
	billFileName: string;
	noBillFileAvailable: boolean = true;
	file: any;

	allProcess: any;
	activityKeyID: any;
	ActivityKeyIDEnum = ActivityKeyIDEnum;

	fileInputArr: ElementRef[];

	DateFomratEnum = DateFormatEnum;

	@ViewChildren('customDateInput') customDateInputs: QueryList<any>;
	@ViewChildren('fileInput') fileInput: QueryList<ElementRef>;

	valid_fields = [
		'openingMeterReading',
		'closingMeterReading',
		'meterUnitID',
		'startDate',
		'endDate'
	];

	constructor(
		private dialog: MatDialog,
		private activatedRoute: ActivatedRoute,
		private carbonDocumentController: CarbonDocumentController,
		private processService: ProcessService,
		private formBuilder: FormBuilder,
		private toastrService: ToastrService,
		private dateService: DateService,
		private storageService: StorageService,
		private unitService: UnitService,
		private productService: ProductAndServiceService,
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.getUnit();
		this.getProducts();
	}

	ngOnChanges(changes: SimpleChanges) {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.activatedRoute.queryParams.subscribe((queryParam) => {
			this.action = queryParam.action;
			this.activityID = queryParam.activityID;
			this.activityKeyID = this.activatedRoute.snapshot.data.activityKeyID;
		});
		this.getConfiguration(this.activityConfig);

		if (this.activityKeyID === ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT || this.activityKeyID === ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT) {
			this.valid_fields.push('productExportedOpeningMeterReading');
			this.valid_fields.push('productExportedClosingMeterReading');
		}

		if (changes?.defaultDataCollectionMethodID) {
			if (this.defaultDataCollectionMethodID != undefined || this.defaultDataCollectionMethodID != null)
				this.setDataCollectionMethod();
		}

		this._valid_fields.emit(this.valid_fields);

	}

	dateInputSub: Subscription;
	fileInputLoadSub: Subscription;
	ngAfterViewInit() {
		this.fileInputLoadSub = this.fileInput.changes.subscribe(() => this.updateFileInputArray());
		this.updateFileInputArray();

		if (this.action == 'update') {
			this.activityData = this.activityConfig.activityData;
			this.patchActivityData();
			this.dateInputSub = this.customDateInputs.changes.subscribe((list: QueryList<any>) => {
				if (list.length > 0) {
					this.patchDate();
					this.dateInputSub.unsubscribe();
				}
			});
		}
	}

	private updateFileInputArray() {
		if (this.fileInput && this.fileInput.length > 0) {
			this.fileInputArr = this.fileInput.toArray();
		}
	}

	patchDate() {
		const customDateInputInstance = this.customDateInputs.toArray()[0];
		if (customDateInputInstance) {
			customDateInputInstance.daterange.patchValue({ startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) });
		}
	}

	dateInpChange(index) {
		if (this.customDateInputs) {
			const customDateInputInstance = this.customDateInputs.toArray()[index];
			let startDate = customDateInputInstance.startDateFC.value;
			let endDate = customDateInputInstance.endDateFC.value;

			if (startDate) {
				this.startDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
				this.activityDataFA.controls[index].get('startDate').patchValue(this.startDate);
			}
			if (endDate) {
				this.endDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
				this.activityDataFA.controls[index].get('endDate').patchValue(this.endDate);
			}
		}
	}

	setDataCollectionMethod() {
		this.activityDataFA.controls.forEach(group => {
			group.get('dataCollectionMethodID').patchValue(this.defaultDataCollectionMethodID);
		})
	}

	async getConfiguration(configuration) {

		if (this.action == 'create') {
			this.entity.forEach((res: any) => {
				this.isSource = true;
				this.dataSource.push({
					id: res,
				})
			})
			this.addFormControls();
		} else {
			this.docFileList = new Array(1).fill(null);
		}
	}

	async getProcess(processID: number) {
		let process = await this.processService.getProcessByID(this.currentOrgID, processID, true);
		return process;
	}

	isValidInputField() {
		if (this.customDateInputs && this.customDateInputs.length > 0) {
			this.customDateInputs.forEach(customDateInput => {
				customDateInput.validate();
				if (!customDateInput.isValid()) {
					alert('Please enter a valid date.');
					return;
				}
			});
		}
	}

	addFormControls() {
		if (this.isSource) {
			this.dataSource.forEach((ds) => {
				this.initFormControl(ds.id);
			})
		} else {
			this.initFormControl(null);
		}
		// this.updateValidators();
		this.isValidInputField();
	}

	get activityDataFA(): FormArray {
		return this.activityDataFG.get('activityDataDetails') as FormArray;
	}

	initFormControl(sourceID) {
		const meterRolloverUnit = this.activityConfig.activityConfigData.meterRollover.unit;
		this.activityDataFA.push(
			this.formBuilder.group({
				activityID: this.activityID,
				activityDataID: [],
				recordID: [],
				sourceID: sourceID.id,
				sourceTypeID: this.sourceTypeID,
				startDate: [],
				endDate: [],
				productProduced: [],
				productProducedUnitID: [],
				openingMeterReading: [],
				closingMeterReading: [],
				meterUnitID: meterRolloverUnit.unitID,
				meterRolloverUnitID: [],
				productExportedMeterUnitID: meterRolloverUnit.unitID,
				productExportedOpeningMeterReading: [],
				productExportedClosingMeterReading: [],
				docID: [],
				docType: [],
				docName: [],
				docSize: [],
				docPath: [],
				dataCollectionMethodID: this.defaultDataCollectionMethodID,
				file: []
			})
		);
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
					// this.addValidators(item);
				}
				this.filled = false;
			});
		}
	}

	isFormFilled(formGroup) {
		if (formGroup.get('openingMeterReading').value != null) this.filled = true;
		if (formGroup.get('closingMeterReading').value != null) this.filled = true;
		if (formGroup.get('meterUnitID').value != null) this.filled = true;
	}

	addValidators(formGroup) {
		formGroup.get('openingMeterReading').addValidators([Validators.required, Validators.min(0)]);
		formGroup.get('closingMeterReading').addValidators([Validators.required, Validators.min(0)]);
		formGroup.get('meterUnitID').addValidators([Validators.required]);

		this.updateValueAndValidity(formGroup);
	}

	removeValidators(formGroup) {
		formGroup.get('openingMeterReading').clearValidators();
		formGroup.get('closingMeterReading').clearValidators();
		formGroup.get('meterUnitID').clearValidators();

		this.updateValueAndValidity(formGroup);
	}

	updateValueAndValidity(formGroup) {
		formGroup.get('openingMeterReading').updateValueAndValidity({ emitEvent: false });
		formGroup.get('closingMeterReading').updateValueAndValidity({ emitEvent: false });
		formGroup.get('meterUnitID').updateValueAndValidity({ emitEvent: false });
	}

	async getProducts() {
		this.getAllSource = await this.productService.getProductList(this.currentOrgID);
	}

	getProductName(id) {
		if (this.getAllSource) {
			const product = this.getAllSource.find(item => item.id === id);
			return product.name;
		}
	}

	async getUnit() {
		this.unitM = await this.unitService.getUnit([]);
		this.unitMassVolume = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.MASS, UnitTypeKeyID.VOLUME]);
	}

	patchActivityData() {
		this.activityData = this.activityConfig.activityData;
		let source = this.activityConfig.source;
		this.sourceName = source.source.name;
		this.sourceTypeID = this.activityConfig.source.sourceType.id;
		let sourceID = source.source.id;
		this.activityDataFA.push(
			this.formBuilder.group({
				activityDataID: this.activityData.id,
				recordID: this.activityData.recordID,
				sourceTypeID: this.sourceTypeID,
				sourceTypeName: this.sourceName,
				sourceID: sourceID,
				startDate: this.activityData.startDate,
				endDate: this.activityData.endDate,
				productProduced: this.activityData.productProduced,
				productProducedUnitID: this.activityData.productProducedUnitID,
				openingMeterReading: this.activityData.openingMeterReading,
				closingMeterReading: this.activityData.closingMeterReading,
				meterUnitID: this.activityData.meterUnit.unitID,
				meterRolloverUnitID: this.activityData.meterUnit.unitID,
				productExportedOpeningMeterReading: this.activityData.productExportedOpeningMeterReading,
				productExportedClosingMeterReading: this.activityData.productExportedClosingMeterReading,
				productExportedMeterUnitID: this.activityData.productExportedMeterUnit.unitID,
				activityID: this.activityID,
				docID: [this.activityData.file ? this.activityData.file.id : null],
				docName: [this.activityData.file ? this.activityData.file.name : null],
				docPath: [this.activityData.file ? this.activityData.file.path : null],
				docSize: []
			})
		);

		this.dataSource.push({
			id: this.activityData.source
		})

		if (this.activityData.sourceName != null) {
			this.sourceName = this.activityData.sourceName;
			this.isSource = true;
		}
		// this.updateValidators();
		this.activityDataFA.valueChanges
			.subscribe(() => this.isEqual = isEqual(this.initialObject, this.activityDataFA.value));

		this.initialObject = this.activityDataFA.value;
		this.isEqual = true;
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

			this.docFileList[index] = this.billFile;

			if (this.action == 'update') {
				this.fileCreateUpdate(formGroup);
			}
		}
		else {
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
			this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, this.activityKeyID,
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

	isExportActivity() {
		if (this.activityKeyID === ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT || this.activityKeyID === ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT) {
			return true;
		} else {
			return false;
		}
	}

	errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
		const activityConfigDetailsFA = this.activityDataFG.get('activityDataDetails') as FormArray;
		const formGroup = activityConfigDetailsFA.at(index) as FormGroup;
		return formGroup.get(control).hasError(error);
	}
}