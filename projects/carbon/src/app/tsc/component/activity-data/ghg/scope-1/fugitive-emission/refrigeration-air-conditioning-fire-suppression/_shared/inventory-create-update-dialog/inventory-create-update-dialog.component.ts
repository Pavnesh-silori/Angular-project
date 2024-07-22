import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';
import { Moment } from 'moment';

import { isEqual } from 'lodash';

import { ReplaySubject, Subject } from 'rxjs';

import { MatDatepicker } from '@angular/material/datepicker';

import { ConfirmationDailog } from '../../../_shared/confirmation-dailog/confirmation-dailog.component';

import { InventoryM } from '@carbon/model/fugitive.model';

import { FugitiveInventoryController } from '@carbon/controller/fugitive-inventory.controller';

import { GasService } from '@carbon/service/gas.service';
import { FugitiveService } from '@carbon/service/fugitive.service';
import { ToastrColor, ToastrService } from '@library/toastr-service';

// tsc-library
import { ButtonLabelEnum, DialogEnum, DialogResponseEnum, FormAction, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
import { UnitService } from '@library/unit-service';

// /tsc-library

@Component({
	selector: 'app-inventory-create-update-dialog',
	templateUrl: './inventory-create-update-dialog.component.html',
	styles: []
})
export class InventoryCreateUpdateDialog implements OnInit {
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	FormAction = FormAction;
	ButtonLabelEnum = ButtonLabelEnum;

	currentOrgID: any;

	action: any;
	title: string = 'Create';
	isCreate: boolean = false;

	inventoryFG: FormGroup;
	gasList: any[];
	unitList: any[];

	inventoryID: any;
	calculationApproachKeyID: any;

	isReadOnly = false;

	gasFilterFC: FormControl = new FormControl();
	gasFilterUnsubscribe = new Subject<void>();
	gasFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

	recordDate: any;
	maxLength = 800;

	inventoryM: InventoryM;
	isEqual: boolean;
	initialObject: any;

	gasSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

	constructor(
		private dialog: MatDialog,
		private fugitiveInventoryController: FugitiveInventoryController,
		private formBuilder: FormBuilder,
		private unitService: UnitService,
		private dialogRef: MatDialogRef<InventoryCreateUpdateDialog>,
		private gasService: GasService,
		private fugitiveService: FugitiveService,
		private toastrService: ToastrService,
		@Inject(MAT_DIALOG_DATA) private data
	) {
		this.action = this.data['action'];
		this.currentOrgID = this.data['currentOrgID'];
		this.calculationApproachKeyID = this.data['calculationApproachKeyID'];
		this.recordDate = this.data['recordDate'];

		this.dialogRef.disableClose = true;
	}

	ngOnInit(): void {
		this.inventoryFGInit();
		this.getUnit();
		this.getGas();

		if (this.action == FormAction.CREATE) {
			this.isCreate = true;
		} else if (this.action == FormAction.UPDATE) {
			this.isCreate = false;
			this.isReadOnly = true;

			this.title = "Update";
			this.inventoryID = this.data['id'];
			this.getInventoryRecordByID();
		} else {
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Unrecognized action!', ToastrColor.ERROR);
			this.dialogRef.close();
		}
	}

	inventoryFGInit() {
		this.inventoryFG = this.formBuilder.group({
			recordID: [],
			gasID: [, Validators.required],
			recordDate: [, Validators.required],
			gasQuantity: [, Validators.required],
			gasQuantityUnitID: [, Validators.required],
			note: [],
			calculationApproachKeyID: [this.calculationApproachKeyID]
		})
	}

	formatDate(control: string) {
		let date = moment(this.inventoryFG.controls[control].value).format("YYYY-MM-DD");
		this.inventoryFG.controls[control].patchValue(date);
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

	async getInventoryRecordByID() {
		this.inventoryM = await this.fugitiveService.getInventoryRecordByID(this.currentOrgID, this.inventoryID);
		this.patchInventoryRecord(this.inventoryM);
	}

	createInventoryRecord() {
		if (!this.checkForValidForm()) {
			return [];
		}

		this.fugitiveInventoryController.createInventoryRecord(this.currentOrgID, this.inventoryFG.value)
			.subscribe((createRes: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			},
				error => {
					console.log('error in createInventoryRecord -', error);
				})
	}

	patchInventoryRecord(inventoryRecord) {
		this.inventoryFG.patchValue({
			recordID: inventoryRecord['recordID'],
			gasID: inventoryRecord['gasID'],
			recordDate: inventoryRecord['recordDate'],
			gasQuantity: inventoryRecord['gasQuantity'],
			gasQuantityUnitID: inventoryRecord['gasQuantityUnitID'],
			note: inventoryRecord['note']
		});

		this.initialObject = this.inventoryFG.value;
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
						this.updateInventoryRecord();
					}
					// else {
					// 	this.dialogRef.close('close');
					// }
				})
		} else {
			this.updateInventoryRecord();
		}
	}

	updateInventoryRecord() {
		this.fugitiveInventoryController.updateInventoryRecord(this.currentOrgID, this.inventoryID, this.inventoryFG.value)
			.subscribe((updateRes: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			},
				error => {
					console.log('error in updateInventoryRecord -', error);
				})
	}

	errorHandling = (control: string, error: string): boolean => {
		return this.inventoryFG.get(control).hasError(error);
	}

	checkForValidForm() {
		if (this.inventoryFG.invalid) {
			this.inventoryFG.markAllAsTouched();
			console.log('invalid form -', this.inventoryFG.value);
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return false;
		} else {
			return true;
		}
	}

	showConfirmationDialog() {
		// if only note is updated, no need to show confirmation dailog box because it will not affect calculations
		let showConfirmationDialog = false;
		if (this.inventoryFG.get('gasQuantity').touched ||
			this.inventoryFG.get('gasQuantityUnitID').touched) {
			showConfirmationDialog = true;
		}
		if (!showConfirmationDialog) {
			let newRecordDate = this.inventoryFG.get('recordDate').value;
			if (newRecordDate !== this.inventoryM['recordDate']) {
				showConfirmationDialog = true;
			}
		}
		return showConfirmationDialog;
	}

	ngAfterViewInit() {
		this.inventoryFG.valueChanges
			.subscribe(() => this.isEqual = isEqual(this.initialObject, this.inventoryFG.value));
	}

	openDatepicker(datepicker: MatDatepicker<Moment>) {
		if (!datepicker.opened) { datepicker.open(); }
	}


}
