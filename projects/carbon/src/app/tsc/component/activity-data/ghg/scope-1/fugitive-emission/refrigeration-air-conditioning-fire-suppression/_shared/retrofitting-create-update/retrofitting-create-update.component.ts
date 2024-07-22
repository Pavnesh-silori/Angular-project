import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

import { ReplaySubject, Subject } from 'rxjs';

import { isEqual } from 'lodash';

import { ConfirmationDailog } from '../../../_shared/confirmation-dailog/confirmation-dailog.component'; 

import { EquipmentCapacityM } from '@carbon/model/fugitive.model';
import { CalculationApproachKeyIDEnum, EquipmentTabEnum } from '@carbon/enum/equiment.enum';

import { FugitiveServiceByContractorController } from '@carbon/controller/fugitive-service-by-contractor.controller';

import { FugitiveActivityTypeService } from '@carbon/service/fugitive-activity-type.service';
import { FugitiveService } from '@carbon/service/fugitive.service';
import { GasService } from '@carbon/service/gas.service';


// tsc-library
import { BulkUploadEnum, ButtonLabelEnum, DialogEnum, DialogResponseEnum, FormAction, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, ResponseM } from '@library/tsc-common';
import { UnitService } from '@library/unit-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
// /tsc-library


@Component({
	selector: 'app-retrofitting-create-update',
	templateUrl: './retrofitting-create-update.component.html',
	styles: []
})
export class RetrofittingCreateUpdateDialog implements OnInit {
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormAction = FormAction;
    ButtonLabelEnum = ButtonLabelEnum;

	currentOrgID: any;

	action: any;
	title: string = 'Create';
	isCreate: boolean = false;

	retrofittingFG: FormGroup;
	gasList: any[];
	unitList: any[];
	retrofitTypeList: any[] = [];

	uploadedFile: File = null;
	uploadedFileName: string;
	noFileSelected: boolean = true;

	retrofittingRecordID: any;
	retrofittingRecord: EquipmentCapacityM;

	isReadOnly = false;

	gasFilterFC: FormControl = new FormControl();
	gasFilterUnsubscribe = new Subject<void>();
	gasFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

	recordDate: any;
	maxLength = 800;

	isEqual: boolean;
	initialObject: any;

    gasSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

	@ViewChild('fileInput') fileInput: ElementRef;

	constructor(
		private dialog: MatDialog,
		private fugitiveServiceByContractorController: FugitiveServiceByContractorController,
		private formBuilder: FormBuilder,
		private dialogRef: MatDialogRef<RetrofittingCreateUpdateDialog>,
		private fugitiveActivityTypeService: FugitiveActivityTypeService,
		private fugitiveService: FugitiveService,
        private unitService: UnitService,
		private gasService: GasService,

        private toastrService: ToastrService,

		@Inject(MAT_DIALOG_DATA) private data
	) {
		this.action = this.data['action'];
		this.currentOrgID = this.data['currentOrgID'];
		this.dialogRef.disableClose = true;
		this.recordDate = this.data['recors'];
	}

	ngOnInit(): void {
		this.retrofittingFGInit();
		this.getUnit();
		this.getGas();
		this.getRetrofitTypeList();

		if (this.action == FormAction.CREATE) {
			this.isCreate = true;
		} else if (this.action == FormAction.UPDATE) {
			this.isCreate = false;
			this.isReadOnly = true;

			this.title = "Update";
			this.retrofittingRecordID = this.data['equipmentCapacityID'];
			this.getRetrofittingRecordByID();
		} else {
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Unrecognized action!',ToastrColor.ERROR);
			this.dialogRef.close();
		}
	}

	retrofittingFGInit() {
		this.retrofittingFG = this.formBuilder.group({
			recordID: [],
			gasID: [, Validators.required],
			recordDate: [, Validators.required],
			gasQuantity: [, Validators.required],
			gasQuantityUnitID: [, Validators.required],
			equipmentTypeKeyID: [, Validators.required],
			totalEquipmentCapacity: [, Validators.required],
			totalEquipmentCapacityUnitID: [, Validators.required],
			note: []
		})
	}

	formatDate(control: string) {
		let date = moment(this.retrofittingFG.controls[control].value).format("YYYY-MM-DD");
		this.retrofittingFG.controls[control].patchValue(date);
	}

	async getGas() {
		this.gasList = <any>await this.gasService.getGas();

		// ngx mat select search
        this.gasSearchUtil.entityArr = this.gasList;
        this.gasSearchUtil.createSubscription();
	}

	async getUnit() {
		let unitFilter: any[] = [];
		unitFilter = ['unitType:MASS'];
		this.unitList = <any>await this.unitService.getUnit(unitFilter);
	}

	fileUpload(event) {
		let file = event.target.files[0];
		if (file) {
			if (file.type !== 'application/pdf') {
				this.toastrService.openToast(ToastrTitle.ERROR, NocFileUploadEnum.INVALID_FILE_TYPE_ERROR, ToastrColor.ERROR);
				return;
			}

			if (file.size > BulkUploadEnum.MAX_FILE_SIZE) {
				this.toastrService.openToast(ToastrTitle.ERROR, NocFileUploadEnum.INVAID_FILE_SIZE_ERROR, ToastrColor.ERROR);
				return;
			}

			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = (e: any) => { };

			this.uploadedFile = file;
			this.noFileSelected = false;
			this.uploadedFileName = file['name'];
		}
	}

	removeFile() {
		this.uploadedFile = null;
		this.uploadedFileName = '';
		this.noFileSelected = true;
		this.fileInput.nativeElement.value = null;
	}

	uploadFile() {
		this.fileInput.nativeElement.click();
	}

	toFormData() {
		const formData = new FormData();
		formData.append("file", this.uploadedFile);
		formData.append("data", JSON.stringify(this.retrofittingFG.value));
		return formData;
	}

	async getRetrofittingRecordByID() {
		this.retrofittingRecord = await this.fugitiveService.getServiceByContractorRecordByID(this.currentOrgID, this.retrofittingRecordID);
		this.patchRetrofittingRecord(this.retrofittingRecord);
	}

	createRetrofittingRecord() {
		if (!this.checkForValidForm()) {
			return [];
		}

		this.fugitiveServiceByContractorController.createEquipmentCapacityRecord(this.currentOrgID, this.toFormData())
			.subscribe((createRes: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			},
				error => {
					console.log('error in createRetrofittingRecord -', error);
				})
	}

	patchRetrofittingRecord(retrofittingRecord) {
		this.retrofittingFG.patchValue({
			recordID: retrofittingRecord['recordID'],
			gasID: retrofittingRecord['gasID'],
			recordDate: retrofittingRecord['recordDate'],
			gasQuantity: retrofittingRecord['gasQuantity'],
			gasQuantityUnitID: retrofittingRecord['gasQuantityUnitID'],
			equipmentTypeKeyID: retrofittingRecord['equipmentTypeKeyID'],
			totalEquipmentCapacity: retrofittingRecord['totalEquipmentCapacity'],
			totalEquipmentCapacityUnitID: retrofittingRecord['totalEquipmentCapacityUnitID'],
			note: retrofittingRecord['note']
		});

		this.initialObject = this.retrofittingFG.value;
		this.isEqual = true;
	}

	getConfirmation() {
		if (!this.checkForValidForm()) {
			return [];
		}

		if (this.showConfirmationDialog()) {
			let recalculationDate = moment(this.recordDate).startOf('month').format('DD-MMM-YYYY');
			const message = 'This will cause re-calculation from ' + recalculationDate + '. Fugitive emissions from refrigeration, air conditioning and fire suppression after the above date will be re-calculated.';
			const dialogRef = this.dialog.open(ConfirmationDailog, {
				data: {
					currentOrgID: this.currentOrgID,
					message: message,
				},
				maxWidth: '500px',
				maxHeight: '600px'
			});
			dialogRef.afterClosed()
				.subscribe((result) => {
					if (result == DialogResponseEnum.YES) {
						this.updateRetrofittingRecord();
					}
					//  else {
					// 	this.dialogRef.close('close');
					// }
				})
		} else {
			this.updateRetrofittingRecord();
		}
	}

	updateRetrofittingRecord() {
		this.fugitiveServiceByContractorController.updateEquipmentCapacityRecord(this.currentOrgID, this.retrofittingRecordID, this.retrofittingFG.value)
			.subscribe((updateRes: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			},
				error => {
					console.log('error in updateRetrofittingRecord -', error);
				})
	}

	errorHandling = (control: string, error: string): boolean => {
		return this.retrofittingFG.get(control).hasError(error);
	}

	async getRetrofitTypeList() {
		this.retrofitTypeList = <any>await this.fugitiveActivityTypeService.getFugitiveActivityType(EquipmentTabEnum.RETROFIT, CalculationApproachKeyIDEnum.CALCULATION_SERVICE_BY_CONTRACTOR);
	}

	checkForValidForm() {
		if (this.retrofittingFG.invalid) {
			this.retrofittingFG.markAllAsTouched();
			console.log('invalid form -', this.retrofittingFG.value);
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return false;
		} else {
			return true;
		}
	}

	showConfirmationDialog() {
		// if only note is updated, no need to show confirmation dailog box because it will not affect calculations
		let showConfirmationDialog = false;
		if (this.retrofittingFG.get('gasQuantity').touched ||
			this.retrofittingFG.get('gasQuantityUnitID').touched ||
			this.retrofittingFG.get('totalEquipmentCapacity').touched ||
			this.retrofittingFG.get('totalEquipmentCapacityUnitID').touched ||
			this.retrofittingFG.get('equipmentTypeKeyID').touched) {
			showConfirmationDialog = true;
		}
		if (!showConfirmationDialog) {
			let newRecordDate = this.retrofittingFG.get('recordDate').value;
			if (newRecordDate !== this.retrofittingRecord['recordDate']) {
				showConfirmationDialog = true;
			}
		}
		return showConfirmationDialog;
	}

	ngAfterViewInit() {
		this.retrofittingFG.valueChanges
			.subscribe(() => this.isEqual = isEqual(this.initialObject, this.retrofittingFG.value));
	}

    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

}
