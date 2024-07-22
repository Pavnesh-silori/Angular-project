import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';

import { isEqual } from 'lodash';

import { ConfirmationDailog } from '@carbon/component/activity-data/ghg/scope-1/fugitive-emission/_shared/confirmation-dailog/confirmation-dailog.component'; 

import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { StorageService } from '@library/storage-service';
import { OtherFugitiveSourceController } from '@carbon/controller/other-fugitive-source.controller';
import { FugitiveActivityTypeService } from '@carbon/service/fugitive-activity-type.service';
import { ButtonLabelEnum, DialogEnum, FormAction, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { UnitService } from '@library/unit-service';

@Component({
    selector: 'app-fugitive-releases-create-update',
    templateUrl: './fugitive-releases-create-update.component.html',
    styles: []
})
export class FugitiveReleasesCreateUpdateDailog implements OnInit {

	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    FormAction = FormAction;

    currentOrgID: any;

    action: any;
    title: string = 'Create';
    isCreate: boolean = false;

    otherFugitiveSourceFG: FormGroup;
    gasList: any[] = [];
    unitList: any[];
    showGasField: boolean = false;

    otherFugitiveSourceList: any[];
    activityDataID: any;
    fugitiveReleased: any;

    initialObject: any;
    isEqual: boolean = false;

    isReadOnly: boolean = false;

    sourceSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;

    constructor(
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private otherFugitiveSourceController: OtherFugitiveSourceController,
        private fugitiveActivityTypeService: FugitiveActivityTypeService,
        private toastrService: ToastrService,
        private unitService: UnitService,
        private dialogRef: MatDialogRef<FugitiveReleasesCreateUpdateDailog>,
        @Inject(MAT_DIALOG_DATA) private data
    ) {
        this.action = this.data['action'];
        this.currentOrgID = this.data['currentOrgID'];

        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {

        this.otherFugitiveSourceFGInit();
        this.getOtherFugitiveSourceList();
        this.getUnit();

        if (this.action == FormAction.CREATE) {
            this.isCreate = true;
        } else if (this.action == FormAction.UPDATE) {
            this.isCreate = false;

            this.title = "Update";
            this.activityDataID = this.data['activityDataID'];
            this.isReadOnly = true;
            this.getFugitiveSourceByGroupID();
        } else {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Unrecognized action!', ToastrColor.ERROR);
            this.dialogRef.close();
        }
    }

    formatDate() {
        let date = this.otherFugitiveSourceFG.get('dateRange').value;

        let startDate = moment(date.startDate).format("YYYY-MM-DD");
        let endDate = moment(date.endDate).format("YYYY-MM-DD");

        this.otherFugitiveSourceFG.controls['startDate'].patchValue(startDate);
        this.otherFugitiveSourceFG.controls['endDate'].patchValue(endDate);
    }

    ngAfterViewInit() {
        this.otherFugitiveSourceFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.otherFugitiveSourceFG.value); });
    }

    otherFugitiveSourceFGInit() {
        this.otherFugitiveSourceFG = this.formBuilder.group({
            recordID: [null],
            fugitiveSourceID: [, Validators.required],
            dateRange: [, Validators.required],
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            gas: this.formBuilder.array([]),

        })
    }

    async getGasesByOtherFugitiveSourceID(sourceID) {
        this.gasList = [];
        this.gasList = await this.fugitiveActivityTypeService.getGasesByFugitiveSourceID(this.currentOrgID, sourceID)
        this.addGases(this.gasList, 'Create');
    }

    addGases(gases, value) {
        if (value == 'Create') {
            this.formDataArray.clear();
            gases.forEach((gas) => {
                this.formDataArray.push(
                    this.formBuilder.group({
                        gasID: gas['id'],
                        gasName: gas['name'],
                        gasQuantity: [],
                        gasQuantityUnitID: []
                    }));

                this.showGasField = true;
            })
        } else {
            gases.forEach((gas) => {
                this.formDataArray.push(
                    this.formBuilder.group({
                        gasID: gas['gasID'],
                        gasName: gas['gasName'],
                        gasQuantity: gas['gasQuantity'],
                        gasQuantityUnitID: gas['gasQuantityUnitId']
                    }));

                this.showGasField = true;
            })
        }
    }

    async getUnit() {
        let unitFilter: any[] = [];
        unitFilter = ['unitType:MASS'];
        this.unitList = <any>await this.unitService.getUnit(unitFilter);

    }

    get formDataArray(): FormArray {
        return this.otherFugitiveSourceFG.get('gas') as FormArray;
    }

    getOtherFugitiveSourceList() {
        this.otherFugitiveSourceController.getOtherFugitiveSourceListByOrg(this.currentOrgID).subscribe((res: any[]) => {
            this.otherFugitiveSourceList = res;

            // ngx mat select search
            this.sourceSearchUtil.entityArr = this.otherFugitiveSourceList;
            this.sourceSearchUtil.createSubscription();
        },
            error => {
                console.log('error in getOtherFugitiveSourceList -', error);
            })
    }

    createFugitiveRelease() {
        if (this.otherFugitiveSourceFG.invalid) {
            console.log('invalid form -', this.otherFugitiveSourceFG.value);
            this.otherFugitiveSourceFG.markAllAsTouched();
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return [];
        }

        this.otherFugitiveSourceController.createOtherFugitiveSource(this.currentOrgID, this.otherFugitiveSourceFG.value)
            .subscribe((createRes) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in createOtherFugitiveSource -', error);
                })
    }

    getFugitiveSourceByGroupID() {

        this.otherFugitiveSourceController.getOtherFugitiveReleasedByID(this.currentOrgID, this.activityDataID).subscribe(response => {
            this.fugitiveReleased = response;
            this.patchFugitiveSource(this.fugitiveReleased);
        },error => {
                console.log('error in getEquipmentCapacityByID -', error);
            })
    }

    getConfirmation() {
        const message = 'This will cause recalculation of this record for the mentioned accounting period.';
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
                if (result == 'YES') {
                    this.updateFugitiveRelease();
                } else {
                    this.dialogRef.close('close');
                }
            })
    }

    patchFugitiveSource(fugitiveReleased) {
        this.otherFugitiveSourceFG.patchValue({
            recordID: fugitiveReleased['recordID'],
            fugitiveSourceID: fugitiveReleased['fugitiveSourceID'],
            dateRange: { startDate: moment(fugitiveReleased['startDate']), endDate: moment(fugitiveReleased['endDate']) }
        });

        this.addGases(fugitiveReleased['gases'], 'Update');

        this.initialObject = this.otherFugitiveSourceFG.value;
        this.isEqual = true;

    }

    updateFugitiveRelease() {
        if (this.otherFugitiveSourceFG.invalid) {
            console.log('invalid form -', this.otherFugitiveSourceFG.value);
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return [];
        }

        this.otherFugitiveSourceController.updateOtherFugitiveSource(this.currentOrgID, this.activityDataID, this.otherFugitiveSourceFG.value)
            .subscribe((createRes) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },error => {
                    console.log('error in updateOtherFugitiveSource -', error);
                })
    }

    public errorHandlingArray = (index, control: string, error: string) => {
        return this.formDataArray.controls[index]['controls'][control].hasError(error);
    }

    ngOnDestroy() {
        this.storageService.setStorage('switchOrgRedirect', 'NO');
    }

}
