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
import { EquipmentTabEnum, EquipmentTypeKeyIDEnum } from '@carbon/enum/equiment.enum';

import { EquipmentGroupController } from '@carbon/controller/equipment-group.controller';
import { FugitiveScreeningController } from '@carbon/controller/fugitive-screening.controller';

import { EquipmentGroupService } from '@carbon/service/equipment-group.service';
import { FugitiveService } from '@carbon/service/fugitive.service';

// tsc-library
import { BulkUploadEnum, ButtonLabelEnum, DialogEnum, DialogResponseEnum, FormAction, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum } from '@library/tsc-common';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { UnitService } from '@library/unit-service';
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-screening-create-update',
    templateUrl: './screening-create-update.component.html',
    styles: [
    ]
})
export class ScreeningCreateUpdateDailog implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormAction = FormAction;
    ButtonLabelEnum = ButtonLabelEnum;

    currentOrgID: any;

    action: any;
    title: string = 'Create';
    titleName: any;
    isCreate: boolean = false;
    type: any;
    equipmentCapacityFG: FormGroup;

    equipmentGroupList: any[] = [];
    unitList: any[];
    isReadOnly = false;

    uploadedFile: File = null;
    uploadedFileName: string;
    noFileSelected: boolean = true;

    equipmentCapacityID: any;
    equipmentCapacity: EquipmentCapacityM;

    groupFilterFC: FormControl = new FormControl();
    groupFilterUnsubscribe = new Subject<void>();
    groupFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    //form fields 
    recordDateHeader: any;
    gasQuantityHeader: any;
    totalEquipmentCapacityHeader: any;

    recordDate: any;
    maxLength = 800;
    showGasMessage: boolean = false;

    isEqual: boolean;
    initialObject: any;

    gasSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild('fileInput') fileInput: ElementRef;

    constructor(
        private dialog: MatDialog,

        private equipmentGroupService: EquipmentGroupService,
        private fugitiveScreeningController: FugitiveScreeningController,
        private equipmentGroupController: EquipmentGroupController,
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<ScreeningCreateUpdateDailog>,
        private fugitiveService: FugitiveService,
        private unitService: UnitService,
        private toastrService: ToastrService,
        private storageService: StorageService,
        @Inject(MAT_DIALOG_DATA) private data
    ) {
        this.action = this.data['action'];
        this.currentOrgID = this.data['currentOrgID'];
        this.type = this.data['type'];
        this.recordDate = this.data['recordDate'];

        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {

        this.getEquipmentGroupList();
        this.equipmentFGInit();
        this.getUnit();

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
            this.equipmentCapacityID = this.data['equipmentCapacityID'];
            this.getEquipmentCapacityByGroupID();
        } else {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Unrecognized action!', ToastrColor.ERROR);
            this.dialogRef.close();
        }
    }

    equipmentFGInit() {
        this.equipmentCapacityFG = this.formBuilder.group({
            recordID: [],
            equipmentGroupID: [, Validators.required],
            gasName: [],
            recordDate: [, Validators.required],
            totalEquipmentCapacity: [, Validators.required],
            totalEquipmentCapacityUnitID: [, Validators.required],
            gasQuantity: [, Validators.required],
            gasQuantityUnitID: [, Validators.required],
            equipmentTypeKeyID: [],
            note: []
        })
    }

    formatDate(control: string) {
        let date = moment(this.equipmentCapacityFG.controls[control].value).format("YYYY-MM-DD");
        this.equipmentCapacityFG.controls[control].patchValue(date);
    }


    async getEquipmentGroupList() {
        this.equipmentGroupList = <any>await this.equipmentGroupService.getEquipmentGroup(this.currentOrgID);

        // ngx mat select search
        this.gasSearchUtil.entityArr = this.equipmentGroupList;
        this.gasSearchUtil.createSubscription();
    }

    getGasByEquipmentGroup(groupID) {
        this.showGasMessage = true;
        this.equipmentGroupController.getEquipmentGroupGasListByID(this.currentOrgID, groupID).subscribe(response => {
            this.equipmentCapacityFG.controls['gasName'].patchValue(response['gasName']);
        },
            error => {
                console.log('error in getEquipmentGasList -', error);
            })
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
        formData.append("data", JSON.stringify(this.equipmentCapacityFG.value));
        return formData;
    }

    createEquipmentCapacity() {
        if (!this.checkForValidForm()) {
            return [];
        }

        this.patchActivityTypeKeyID();

        this.fugitiveScreeningController.createEquipmentCapacityRecord(this.currentOrgID, this.toFormData())
            .subscribe((createRes) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in createEquipmentCapacity -', error);
                })
    }

    async getEquipmentCapacityByGroupID() {
        this.equipmentCapacity = await this.fugitiveService.getScreeningRecordByID(this.currentOrgID, this.equipmentCapacityID);
        this.patchEquipmentCapacity(this.equipmentCapacity);
    }

    patchEquipmentCapacity(equipmentCapacity) {
        this.equipmentCapacityFG.patchValue({
            recordID: equipmentCapacity['recordID'],
            equipmentGroupID: equipmentCapacity['equipmentGroupID'],
            recordDate: equipmentCapacity['recordDate'],
            totalEquipmentCapacity: equipmentCapacity['totalEquipmentCapacity'],
            totalEquipmentCapacityUnitID: equipmentCapacity['totalEquipmentCapacityUnitID'],
            equipmentMaintenanceTypeID: equipmentCapacity['equipmentTypeID'],
            gasQuantity: equipmentCapacity['gasQuantity'],
            gasQuantityUnitID: equipmentCapacity['gasQuantityUnitID'],
            note: equipmentCapacity['note']
        });

        this.getGasByEquipmentGroup(equipmentCapacity['equipmentGroupID']);
        this.patchActivityTypeKeyID();

        this.initialObject = this.equipmentCapacityFG.value;
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
                        this.updateEquipmentGroup();
                    }
                    //  else {
                    //     this.dialogRef.close('close');
                    // }
                })
        } else {
            this.updateEquipmentGroup();
        }
    }

    updateEquipmentGroup() {
        this.fugitiveScreeningController.updateEquipmentCapacityRecord(this.currentOrgID, this.equipmentCapacityID, this.equipmentCapacityFG.value)
            .subscribe((updateRes) => {
                this.dialogRef.close(ButtonLabelEnum.YES_BTN_LABEL);
            },
                error => {
                    console.log('error in updateEquipmentCapacity -', error);
                })
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.equipmentCapacityFG.get(control).hasError(error);
    }

    ngOnDestroy() {
        this.storageService.setStorage('switchOrgRedirect', 'NO');
    }

    patchActivityTypeKeyID() {
        if (this.type == EquipmentTabEnum.PURCHASE) {
            this.equipmentCapacityFG.controls['equipmentTypeKeyID'].patchValue(EquipmentTypeKeyIDEnum.SCREENING_NEW_EQUIPMENT);
        } else {
            this.equipmentCapacityFG.controls['equipmentTypeKeyID'].patchValue(EquipmentTypeKeyIDEnum.SCREENING_SOLD_RETIRED_EQUIPMENT);
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
        if (this.equipmentCapacityFG.invalid) {
            this.equipmentCapacityFG.markAllAsTouched();
            console.log('invalid form -', this.equipmentCapacityFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        } else {
            return true;
        }
    }

    showConfirmationDialog() {
        // if only note is updated, no need to show confirmation dailog box because it will not affect calculations
        let showConfirmationDialog = false;
        if (this.equipmentCapacityFG.get('gasQuantity').touched ||
            this.equipmentCapacityFG.get('gasQuantityUnitID').touched ||
            this.equipmentCapacityFG.get('totalEquipmentCapacity').touched ||
            this.equipmentCapacityFG.get('totalEquipmentCapacityUnitID').touched) {
            showConfirmationDialog = true;
        }
        if (!showConfirmationDialog) {
            let newRecordDate = this.equipmentCapacityFG.get('recordDate').value;
            if (newRecordDate !== this.equipmentCapacity['recordDate']) {
                showConfirmationDialog = true;
            }
        }
        return showConfirmationDialog;
    }

    ngAfterViewInit() {
        this.equipmentCapacityFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.equipmentCapacityFG.value));
    }


    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

}
