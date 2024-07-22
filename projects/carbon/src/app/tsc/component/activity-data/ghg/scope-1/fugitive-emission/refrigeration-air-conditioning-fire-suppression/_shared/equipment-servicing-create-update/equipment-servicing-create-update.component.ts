import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

import { ReplaySubject, Subject } from 'rxjs';
import { isEqual } from 'lodash';


import { ConfirmationDailog } from '../../../_shared/confirmation-dailog/confirmation-dailog.component'; 

import { EquipmentServicingM } from '@carbon/model/fugitive.model';

import { FugitiveServiceByContractorController } from '@carbon/controller/fugitive-service-by-contractor.controller';

import { GasService } from '@carbon/service/gas.service';
import { FugitiveService } from '@carbon/service/fugitive.service';

// tsc-library
import { BulkUploadEnum, ButtonLabelEnum, DialogEnum, DialogResponseEnum, FormAction, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, ResponseM } from '@library/tsc-common';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { UnitService } from '@library/unit-service'; 
// /tsc-library
@Component({
    selector: 'app-equipment-servicing-create-update',
    templateUrl: './equipment-servicing-create-update.component.html',
    styles: [
    ]
})
export class EquipmentServicingCreateUpdateDialog implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormAction = FormAction;
    ButtonLabelEnum = ButtonLabelEnum;
    currentOrgID: any;

    action: any;
    title: string = 'Create';
    isCreate: boolean = false;

    equipmentServicingFG: FormGroup;
    gasList: any[];
    unitList: any[];

    uploadedFile: File = null;
    uploadedFileName: string;
    noFileSelected: boolean = true;

    equipmentServicingRecordID: any;
    equipmentServicingRecord: EquipmentServicingM;


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
        private dialogRef: MatDialogRef<EquipmentServicingCreateUpdateDialog>,
        private unitService: UnitService,
        private gasService: GasService,
		private fugitiveService: FugitiveService,
        private toastrService: ToastrService,
        @Inject(MAT_DIALOG_DATA) private data
    ) {
        this.action = this.data['action'];
        this.currentOrgID = this.data['currentOrgID'];
        this.recordDate = this.data['recordDate'];

        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.equipmentServicingFGInit();
        this.getUnit();
        this.getGas();

        if (this.action == FormAction.CREATE) {
            this.isCreate = true;
        } else if (this.action == FormAction.UPDATE) {
            this.isCreate = false;
            this.isReadOnly = true;

            this.title = "Update";
            this.equipmentServicingRecordID = this.data['id'];
            this.getEquipmentServicingRecordByID();
        } else {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Unrecognized action!', ToastrColor.ERROR);
            this.dialogRef.close();
        }
    }

    equipmentServicingFGInit() {
        this.equipmentServicingFG = this.formBuilder.group({
            recordID: [],
            gasID: [, Validators.required],
            recordDate: [, Validators.required],
            gasQuantity: [, Validators.required],
            gasQuantityUnitID: [, Validators.required],
            note: []
        })
    }

    formatDate(control: string) {
        let date = moment(this.equipmentServicingFG.controls[control].value).format("YYYY-MM-DD");
        this.equipmentServicingFG.controls[control].patchValue(date);
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
        formData.append("data", JSON.stringify(this.equipmentServicingFG.value));
        return formData;
    }

    async getEquipmentServicingRecordByID() {
        this.equipmentServicingRecord = await this.fugitiveService.getEquipmentServicingRecordByID(this.currentOrgID, this.equipmentServicingRecordID);
        this.patchEquipmentServicingRecord(this.equipmentServicingRecord);
    }

    createEquipmentServicingRecord() {
        if (!this.checkForValidForm()) {
            return [];
        }

        this.fugitiveServiceByContractorController.createEquipmentServicingRecord(this.currentOrgID, this.toFormData())
            .subscribe((createRes: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in createEquipmentServicingRecord -', error);
                })
    }

    patchEquipmentServicingRecord(equipmentServicingRecord) {
        this.equipmentServicingFG.patchValue({
            recordID: equipmentServicingRecord['recordID'],
            gasID: equipmentServicingRecord['gasID'],
            recordDate: equipmentServicingRecord['recordDate'],
            gasQuantity: equipmentServicingRecord['gasQuantity'],
            gasQuantityUnitID: equipmentServicingRecord['gasQuantityUnitID'],
            note: equipmentServicingRecord['note']
        });

        this.initialObject = this.equipmentServicingFG.value;
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
                        this.updateEquipmentServicingRecord();
                    }
                    // else {
                    // 	this.dialogRef.close('close');
                    // }
                })
        } else {
            this.updateEquipmentServicingRecord();
        }
    }

    updateEquipmentServicingRecord() {
        this.fugitiveServiceByContractorController.updateEquipmentServicingRecord(this.currentOrgID, this.equipmentServicingRecordID, this.equipmentServicingFG.value)
            .subscribe((updateRes: ResponseM) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in updateEquipmentServicingRecord -', error);
                })
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.equipmentServicingFG.get(control).hasError(error);
    }

    checkForValidForm() {
        if (this.equipmentServicingFG.invalid) {
            this.equipmentServicingFG.markAllAsTouched();
            console.log('invalid form -', this.equipmentServicingFG.value);
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        } else {
            return true;
        }
    }

    showConfirmationDialog() {
        // if only note is updated, no need to show confirmation dailog box because it will not affect calculations
        let showConfirmationDialog = false;
        if (this.equipmentServicingFG.get('gasQuantity').touched ||
            this.equipmentServicingFG.get('gasQuantityUnitID').touched) {
            showConfirmationDialog = true;
        }
        if (!showConfirmationDialog) {
            let newRecordDate = this.equipmentServicingFG.get('recordDate').value;
            if (newRecordDate !== this.equipmentServicingRecord['recordDate']) {
                showConfirmationDialog = true;
            }
        }
        return showConfirmationDialog;
    }

    ngAfterViewInit() {
        this.equipmentServicingFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.equipmentServicingFG.value));
    }

    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

}
