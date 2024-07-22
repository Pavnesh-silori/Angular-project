import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

import { ReplaySubject, Subject } from 'rxjs';
import { isEqual } from 'lodash';

import { ConfirmationDailog } from '../../../_shared/confirmation-dailog/confirmation-dailog.component'; 

import { ProductManufactureM } from '@carbon/model/fugitive.model';
import { EquipmentTabEnum } from '@carbon/enum/equiment.enum';

import { FugitiveMyselfManufacturerController } from '@carbon/controller/fugitive-myself-manufacture.controller';

import { FugitiveActivityTypeService } from '@carbon/service/fugitive-activity-type.service';
import { FugitiveService } from '@carbon/service/fugitive.service';
import { GasService } from '@carbon/service/gas.service';

// tsc-library
import { BulkUploadEnum, ButtonLabelEnum, DialogEnum, DialogResponseEnum, FormAction, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, ResponseM } from '@library/tsc-common';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { UnitService } from '@library/unit-service';

// /tsc-library

@Component({
	selector: 'app-myself-purchase-sale-retrofit-dialog',
	templateUrl: './myself-purchase-sale-retrofit-dialog.component.html',
	styles: []
})
export class MyselfPurchaseSaleRetrofitDialog implements OnInit {
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormAction = FormAction;
    ButtonLabelEnum = ButtonLabelEnum;
	currentOrgID: any;

	action: any;
	title: string = 'Create';
	titleName: any;
	isCreate: boolean = false;

	fugitiveFormFG: FormGroup;
	gasList: any[];
	unitList: any[];
	activityTypeList: any[];
	type: any;

	uploadedFile: File = null;
	uploadedFileName: string;
	noFileSelected: boolean = true;

	equipmentCapacityID: any;
	fugitiveRecord: ProductManufactureM;
	calculationApproachKeyID: any;

	@ViewChild('fileInput') fileInput: ElementRef;

	isReadOnly = false;
	isTotalCapacityRequired: boolean = false;

	gasFilterFC: FormControl = new FormControl();
	gasFilterUnsubscribe = new Subject<void>();
	gasFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

	//form fields 
	recordDateHeader: any;
	gasQuantityHeader: any;
	typeHeader: any;
	totalEquipmentCapacityHeader: any;

	recordDate: any;
	maxLength = 800;

	isEqual: boolean;
	initialObject: any;

    gasSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

	constructor(
		private dialog: MatDialog,
		private formBuilder: FormBuilder,
		private dialogRef: MatDialogRef<MyselfPurchaseSaleRetrofitDialog>,
		private fugitiveActivityTypeService: FugitiveActivityTypeService,
        private gasService: GasService,
		private unitService: UnitService,
		private fugitiveMyselfManufacturerController: FugitiveMyselfManufacturerController,
		private fugitiveService: FugitiveService,
        private toastrService: ToastrService,

		@Inject(MAT_DIALOG_DATA) private data
	) {
		this.action = this.data['action'];
		this.currentOrgID = this.data['currentOrgID'];
		this.type = this.data['type'];
		this.calculationApproachKeyID = this.data['calculationApproachKeyID'];
		this.recordDate = this.data['recordDate'];

		this.dialogRef.disableClose = true;
	}

	ngOnInit(): void {
		this.fugitiveFormFGInit();
		this.getUnit();
		this.getGas();
		this.getActivityTypeList();

		//form field headers
		this.titleName = this.data['titleName'];
		this.getFormHeaderRecordDate();
		this.getFormHeaderGasQuantity();
		this.getFormHeaderTypeName();
		this.getFormHeaderTotalEquipmentCapacity();

		if (this.action == FormAction.CREATE) {
			this.isCreate = true;
		} else if (this.action == FormAction.UPDATE) {
			this.isCreate = false;
			this.isReadOnly = true;
			this.title = "Update";
			this.equipmentCapacityID = this.data['equipmentCapacityID'];
			this.getRecordByID();
		} else {
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Unrecognized action!',ToastrColor.ERROR);
			this.dialogRef.close();
		}
	}

	fugitiveFormFGInit() {
		this.fugitiveFormFG = this.formBuilder.group({
			recordID: [],
			gasID: [, Validators.required],
			recordDate: [, Validators.required],
			gasQuantity: [, Validators.required],
			gasQuantityUnitID: [, Validators.required],
			totalEquipmentCapacity: [],
			totalEquipmentCapacityUnitID: [],
			equipmentType: this.type,
			equipmentTypeID: [],
			note: [],
			calculationApproachKeyID: [this.calculationApproachKeyID]
		})
	}

	formatDate(control: string) {
		let date = moment(this.fugitiveFormFG.controls[control].value).format("YYYY-MM-DD");
		this.fugitiveFormFG.controls[control].patchValue(date);
	}

	async getGas() {
		this.gasList = <any>await this.gasService.getGas();

		// ngx mat select search
        this.gasSearchUtil.entityArr = this.gasList;
        this.gasSearchUtil.createSubscription();

		// this.gasFiltered.next(this.gasList.slice());
		// this.gasFilterFC.valueChanges
		// 	.pipe(takeUntil(this.gasFilterUnsubscribe)).subscribe(async () => {
		// 		this.gasFiltered = await this.utility.filterValue(this.gasList, this.gasFilterFC.value, 'name');
		// 	});
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
		formData.append("data", JSON.stringify(this.fugitiveFormFG.value));
		return formData;
	}

	async getRecordByID() {
		this.fugitiveRecord = await this.fugitiveService.getServiceMyselfRecordByID(this.currentOrgID, this.equipmentCapacityID, this.calculationApproachKeyID);
		this.patchRecord(this.fugitiveRecord);
	}

	createRecord() {
		if (!this.checkForValidForm()) {
			return [];
		}

		this.fugitiveMyselfManufacturerController.createEquipmentGasQuantityRecord(this.currentOrgID, this.toFormData(), this.calculationApproachKeyID)
			.subscribe((createRes: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			},
				error => {
					console.log('error in createRecord -', error);
				})
	}

	patchRecord(fugitiveRecord) {
		this.fugitiveFormFG.patchValue({
			recordID: fugitiveRecord['recordID'],
			gasID: fugitiveRecord['gasID'],
			recordDate: fugitiveRecord['recordDate'],
			gasQuantity: fugitiveRecord['gasQuantity'],
			gasQuantityUnitID: fugitiveRecord['gasQuantityUnitID'],
			totalEquipmentCapacity: fugitiveRecord['totalEquipmentCapacity'],
			totalEquipmentCapacityUnitID: fugitiveRecord['totalEquipmentCapacityUnitID'],
			equipmentTypeID: fugitiveRecord['equipmentTypeID'],
			note: fugitiveRecord['note']
		});

		if (fugitiveRecord['totalEquipmentCapacity'] != null && fugitiveRecord['totalEquipmentCapacityUnitID'] != null) {
			this.isTotalCapacityRequired = true;
		}

		this.initialObject = this.fugitiveFormFG.value;
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
						this.updateRecord();
					}
					// else {
					// 	this.dialogRef.close('close');
					// }
				})
		} else {
			this.updateRecord();
		}
	}

	updateRecord() {
		this.fugitiveMyselfManufacturerController.updateEquipmentGasQuantityRecord(this.currentOrgID, this.equipmentCapacityID, this.fugitiveFormFG.value, this.calculationApproachKeyID)
			.subscribe((updateRes: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			},
				error => {
					console.log('error in updateRecord -', error);
				})
	}

	errorHandling = (control: string, error: string): boolean => {
		return this.fugitiveFormFG.get(control).hasError(error);
	}

	async getActivityTypeList() {
		this.activityTypeList = <any>await this.fugitiveActivityTypeService.getFugitiveActivityType(this.type, this.calculationApproachKeyID);
	}

	getFormHeaderRecordDate() {
		if (this.type == EquipmentTabEnum.PURCHASE) {
			this.recordDateHeader = 'Purchase/ Acquired on';
		} else if (this.type == EquipmentTabEnum.SALES) {
			this.recordDateHeader = 'Sold / Disposed on';
		} else {
			this.recordDateHeader = 'Date';
		}
	}

	getFormHeaderGasQuantity() {
		if (this.type == EquipmentTabEnum.PURCHASE) {
			this.gasQuantityHeader = 'Quantity of gas used to charge new equipment on-site (Enter 0 if it was pre-charged by manufacturer)';
		} else if (this.type == EquipmentTabEnum.SALES) {
			this.gasQuantityHeader = 'Quantity of gas sold/ disposed';
		} else {
			this.gasQuantityHeader = 'Quantity of gas';
		}
	}

	getFormHeaderTypeName() {
		if (this.type == EquipmentTabEnum.PURCHASE) {
			this.typeHeader = 'Purchase type';
		} else if (this.type == EquipmentTabEnum.SALES) {
			this.typeHeader = 'Sale type';
		} else if (this.type == EquipmentTabEnum.RETROFIT) {
			this.typeHeader = 'Retrofit type';
		} else {
			this.typeHeader = 'Type';
		}
	}

	getFormHeaderTotalEquipmentCapacity() {
		if (this.type == EquipmentTabEnum.PURCHASE) {
			this.totalEquipmentCapacityHeader = 'Total gas capacity of new equipment';
		} else if (this.type == EquipmentTabEnum.SALES) {
			this.totalEquipmentCapacityHeader = 'Total gas capacity of retiring equipment';
		} else {
			this.totalEquipmentCapacityHeader = 'Total gas capacity of equipment';
		}
	}

	showTotalEquipmentCapacity(type) {
		this.isTotalCapacityRequired = type.totalCapacityRequired;

		if (!this.isCreate) {
			if (type.id != this.fugitiveRecord['equipmentTypeID']) {
				this.setEquipmentCapacityAndUnit(null, null);
			} else {
				this.setEquipmentCapacityAndUnit(this.fugitiveRecord['totalEquipmentCapacity'], this.fugitiveRecord['totalEquipmentCapacityUnitID']);
			}
		}
	}

	checkForValidForm() {
		let isFormValid = true;
		if (this.fugitiveFormFG.invalid) {
			this.fugitiveFormFG.markAllAsTouched();

			if (!this.isTotalCapacityRequired && this.fugitiveFormFG.get('equipmentTypeID').value != null) {
				this.setEquipmentCapacityAndUnit(null, null);
				isFormValid = true;
			} else {
				console.log('invalid form -', this.fugitiveFormFG.value);
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
				isFormValid = false;
			}
		}
		return isFormValid;
	}

	showConfirmationDialog() {
		// if only note is updated, no need to show confirmation dailog box because it will not affect calculations
		let showConfirmationDialog = false;
		if (this.fugitiveFormFG.get('gasQuantity').touched ||
			this.fugitiveFormFG.get('gasQuantityUnitID').touched ||
			this.fugitiveFormFG.get('totalEquipmentCapacity').touched ||
			this.fugitiveFormFG.get('totalEquipmentCapacityUnitID').touched ||
			this.fugitiveFormFG.get('equipmentTypeID').touched) {
			showConfirmationDialog = true;
		}
		if (!showConfirmationDialog) {
			let newRecordDate = this.fugitiveFormFG.get('recordDate').value;
			if (newRecordDate !== this.fugitiveRecord['recordDate']) {
				showConfirmationDialog = true;
			}
		}
		return showConfirmationDialog;
	}

	setEquipmentCapacityAndUnit(totalEquipmentCapacity, totalEquipmentCapacityUnitID) {
		this.fugitiveFormFG.patchValue({
			totalEquipmentCapacity: totalEquipmentCapacity,
			totalEquipmentCapacityUnitID: totalEquipmentCapacityUnitID,
		});
	}

	ngAfterViewInit() {
		this.fugitiveFormFG.valueChanges
			.subscribe(() => this.isEqual = isEqual(this.initialObject, this.fugitiveFormFG.value));
	}

    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

}
