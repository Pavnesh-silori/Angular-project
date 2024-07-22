import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';
import { Moment } from 'moment';

import { MatDatepicker } from '@angular/material/datepicker';
import { isEqual } from 'lodash';

import { ReplaySubject, Subject } from 'rxjs';

import { ConfirmationDailog } from '../../../_shared/confirmation-dailog/confirmation-dailog.component'; 
import { EquipmentCapacityM } from '@carbon/model/fugitive.model';

import { EquipmentTypeKeyIDEnum, EquipmentTabEnum } from '@carbon/enum/equiment.enum';

import { FugitiveServiceByContractorController } from '@carbon/controller/fugitive-service-by-contractor.controller';

import { GasService } from '@carbon/service/gas.service';

import { FugitiveService } from '@carbon/service/fugitive.service';

// tsc-library
import { BulkUploadEnum, ButtonLabelEnum, DialogEnum, DialogResponseEnum, FormAction, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, ResponseM } from '@library/tsc-common';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { UnitService } from '@library/unit-service'; 
// /tsc-library

@Component({
	selector: 'app-contractor-purchase-sales-dialog',
	templateUrl: './contractor-purchase-sales-dialog.component.html',
	styles: [
	]
})
export class ContractorPurchaseSalesDialog implements OnInit {
    ButtonLabelEnum = ButtonLabelEnum;
    FormAction = FormAction;
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	currentOrgID: any;

	action: any;
	title: string = 'Create';
	titleName: any;
	isCreate: boolean = false;

	purchaseAcquisitionFG: FormGroup;
	gasList: any[];
	unitList: any[];

	type: any;
	recordDate: any;

	uploadedFile: File = null;
	uploadedFileName: string;
	noFileSelected: boolean = true;

	equipmentCapacityRecordID: any;
	equipmentCapacityRecord: EquipmentCapacityM;

	@ViewChild('fileInput') fileInput: ElementRef;

	isReadOnly = false;

	gasFilterFC: FormControl = new FormControl();
	gasFilterUnsubscribe = new Subject<void>();
	gasFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

	//form fields 
	recordDateHeader: any;
	gasQuantityHeader: any;
	totalEquipmentCapacityHeader: any;

	maxLength = 800;
	isEqual: boolean;
	initialObject: any;

    gasSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

	constructor(
		private dialog: MatDialog,
		private fugitiveServiceByContractorController: FugitiveServiceByContractorController,
		private formBuilder: FormBuilder,
		private unitService: UnitService,
		private dialogRef: MatDialogRef<ContractorPurchaseSalesDialog>,
		private gasService: GasService,
		private fugitiveService: FugitiveService,
        private toastrService: ToastrService,

		@Inject(MAT_DIALOG_DATA) private data
	) {
		this.action = this.data['action'];
		this.currentOrgID = this.data['currentOrgID'];
		this.type = this.data['type'];
		this.recordDate = this.data['recordDate'];

		this.dialogRef.disableClose = true;
	}

	ngOnInit(): void {
		this.purchaseOrSalesFGInit();
		this.getUnit();
		this.getGas();

		//form field headers
		this.titleName = this.data['titleName'];
		this.getFormHeaderRecordDate();
		this.getFormHeaderGasQuantity();
		this.getFormHeaderTotalEquipmentCapacity();

		if (this.action == FormAction.CREATE) {
			this.isCreate = true;
		} else if (this.action == FormAction.UPDATE) {
			this.isCreate = false;
			this.isReadOnly = true;

			this.title = "Update";
			this.equipmentCapacityRecordID = this.data['equipmentCapacityID'];
			this.getPurchaseOrSalesRecordByID();
		} else {
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Unrecognized action!',ToastrColor.ERROR);
			this.dialogRef.close();
		}
	}

	purchaseOrSalesFGInit() {
		this.purchaseAcquisitionFG = this.formBuilder.group({
			recordID: [],
			gasID: [, Validators.required],
			recordDate: [, Validators.required],
			gasQuantity: [, Validators.required],
			gasQuantityUnitID: [, Validators.required],
			totalEquipmentCapacity: [, Validators.required],
			totalEquipmentCapacityUnitID: [, Validators.required],
			equipmentTypeKeyID: [],
			note: []
		})

		this.patchActivityTypeKeyID();
	}

	formatDate(control: string) {
		let date = moment(this.purchaseAcquisitionFG.controls[control].value).format("YYYY-MM-DD");
		this.purchaseAcquisitionFG.controls[control].patchValue(date);
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
		formData.append("data", JSON.stringify(this.purchaseAcquisitionFG.value));
		return formData;
	}

	async getPurchaseOrSalesRecordByID() {
		this.equipmentCapacityRecord = await this.fugitiveService.getServiceByContractorRecordByID(this.currentOrgID, this.equipmentCapacityRecordID);
		this.patchPurchaseOrSalesRecord(this.equipmentCapacityRecord);
	}

	createPurchaseOrSalesRecord() {
		if (!this.checkForValidForm()) {
			return [];
		}

		this.fugitiveServiceByContractorController.createEquipmentCapacityRecord(this.currentOrgID, this.toFormData())
			.subscribe((res: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			},
				error => {
					console.log('error in createPurchaseOrSalesRecord -', error);
				})
	}

	patchPurchaseOrSalesRecord(equipmentCapacityRecord) {
		this.purchaseAcquisitionFG.patchValue({
			recordID: equipmentCapacityRecord['recordID'],
			gasID: equipmentCapacityRecord['gasID'],
			recordDate: equipmentCapacityRecord['recordDate'],
			totalEquipmentCapacity: equipmentCapacityRecord['totalEquipmentCapacity'],
			totalEquipmentCapacityUnitID: equipmentCapacityRecord['totalEquipmentCapacityUnitID'],
			gasQuantity: equipmentCapacityRecord['gasQuantity'],
			gasQuantityUnitID: equipmentCapacityRecord['gasQuantityUnitID'],
			equipmentTypeKeyID: equipmentCapacityRecord['equipmentTypeKeyID'],
			note: equipmentCapacityRecord['note']
		});

		this.initialObject = this.purchaseAcquisitionFG.value;
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
						this.updatePurchaseOrSalesRecord();
					}
					//  else {
					// 	this.dialogRef.close('close');
					// }
				})
		} else {
			this.updatePurchaseOrSalesRecord();
		}
	}

	updatePurchaseOrSalesRecord() {
		this.fugitiveServiceByContractorController.updateEquipmentCapacityRecord(this.currentOrgID, this.equipmentCapacityRecordID, this.purchaseAcquisitionFG.value)
			.subscribe((res: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			},
				error => {
					console.log('error in updatePurchaseOrSalesRecord -', error);
				})
	}

	errorHandling = (control: string, error: string): boolean => {
		return this.purchaseAcquisitionFG.get(control).hasError(error);
	}

	patchActivityTypeKeyID() {
		if (this.type == EquipmentTabEnum.PURCHASE) {
			this.purchaseAcquisitionFG.controls['equipmentTypeKeyID'].patchValue(EquipmentTypeKeyIDEnum.CONTRACTOR_NEW_EQUIPMENT);
		} else {
			this.purchaseAcquisitionFG.controls['equipmentTypeKeyID'].patchValue(EquipmentTypeKeyIDEnum.CONTRACTOR_SOLD_RETIRED_EQUIPMENT);
		}
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
			this.gasQuantityHeader = 'Quantity of gas recovered from retiring equipment (Enter 0 if it was sold with gas in it)';
		} else {
			this.gasQuantityHeader = 'Quantity of gas';
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

	checkForValidForm() {
		if (this.purchaseAcquisitionFG.invalid) {
			this.purchaseAcquisitionFG.markAllAsTouched();
			console.log('invalid form -', this.purchaseAcquisitionFG.value);
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return false;
		} else {
			return true;
		}
	}

	showConfirmationDialog() {
		// if only note is updated, no need to show confirmation dailog box because it will not affect calculations
		let showConfirmationDialog = false;
		if (this.purchaseAcquisitionFG.get('gasQuantity').touched ||
			this.purchaseAcquisitionFG.get('gasQuantityUnitID').touched ||
			this.purchaseAcquisitionFG.get('totalEquipmentCapacity').touched ||
			this.purchaseAcquisitionFG.get('totalEquipmentCapacityUnitID').touched) {
			showConfirmationDialog = true;
		}
		if (!showConfirmationDialog) {
			let newRecordDate = this.purchaseAcquisitionFG.get('recordDate').value;
			if (newRecordDate !== this.equipmentCapacityRecord['recordDate']) {
				showConfirmationDialog = true;
			}
		}
		return showConfirmationDialog;
	}

	ngAfterViewInit() {
		this.purchaseAcquisitionFG.valueChanges
			.subscribe(() => this.isEqual = isEqual(this.initialObject, this.purchaseAcquisitionFG.value));
	}

    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

}
