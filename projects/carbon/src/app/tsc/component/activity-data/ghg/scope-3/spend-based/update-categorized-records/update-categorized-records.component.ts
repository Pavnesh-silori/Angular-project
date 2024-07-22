import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { ActivityDataController } from '@carbon/controller/activity-data.controller';
import { SpendBasedController } from '@carbon/controller/spend-based.controller';
import { EmissionCalculationMethodController } from '@carbon/controller/emission-calculation-method.controller';

import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import {
    InvalidForm, MaterialFormFieldAppearance, MatSelectSearchService, ButtonLabelEnum
} from '@library/tsc-common';

@Component({
    selector: 'app-update-categorized-records',
    templateUrl: './update-categorized-records.component.html',
    styles: [
    ]
})
export class UpdateCategorizedRecordsComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    currentOrgID: any;

    activityDataID: any;
    recordData: any;

    updateCategoryFG: FormGroup;

    categoryMappingList: any;
    calculationEmissionMethod: any;
    activityList: any;

    categorySearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    activitySearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    isEqual: boolean = false;
    initialObject: any;

    constructor(
        private updateCategoryFB: FormBuilder,
        public dialogRef: MatDialogRef<UpdateCategorizedRecordsComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private activityDataController: ActivityDataController,
        private emissionCalculationMethodController: EmissionCalculationMethodController,
        private spendBasedController: SpendBasedController,
        private toasterService: ToastrService,
    ) {
        this.currentOrgID = data['currentOrgID'];
        this.activityDataID = data['activityDataID'];
        this.dialogRef.disableClose = false;
    }

    ngOnInit(): void {
        this.getRecordByID();
        this.updateCategoryInit();
        this.getCategoryMapping();
        this.getEmissionCalculationMethods();

        this.updateCategoryFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.updateCategoryFG.getRawValue()); });
    }

    getRecordByID() {
        this.activityDataController.getScope3ActivityDataByID(this.currentOrgID, this.activityDataID).subscribe(
            (recordRes) => {
                this.recordData = recordRes['activityData'];
                this.patchCategoryDetails(this.recordData);
            }, error => {
                console.log('error in getRecordByID() -', error);
            }
        );
    }

    updateCategoryInit() {
        this.updateCategoryFG = this.updateCategoryFB.group({
            recordID: [],
            transactionDate: [{ value: null, disabled: true }],
            accountName: [{ value: null, disabled: true }],
            supplierName: [{ value: null, disabled: true }],
            amount: [{ value: null, disabled: true }],
            categoryID: [, Validators.required],
            activityID: [, Validators.required]
        });
    }

    getCategoryMapping() {
        this.spendBasedController.getCategoryMapping(this.currentOrgID).subscribe((categoryMappingRes) => {
            // Transforming the categoryMappingRes array
            this.categoryMappingList = categoryMappingRes.map(item => {
                const name = `${item.databaseName} > ${item.categoryName}`;
                return { id: item.id, name: name };
            });

            this.categorySearchUtil.entityArr = this.categoryMappingList;
            this.categorySearchUtil.createSubscription();

        }, error => {
            console.log("error in getCategoryMapping() -", error);
        });
    }

    getEmissionCalculationMethods() {
        this.emissionCalculationMethodController.getEmissionCalculationMethod(this.currentOrgID).subscribe((getCalculationMethodRes: any) => {
            this.calculationEmissionMethod = getCalculationMethodRes;

            // Apply condition to set method definition
            this.calculationEmissionMethod.forEach((method) => {
                if (method.methodID === 11) {
                    this.getActivities(method.methodID);
                }
            });
        }, error => {
            console.log('error in getEmissionCalculationMethods() -', error);
        });
    }

    getActivities(methodID) {
        this.spendBasedController.getActivities(this.currentOrgID, methodID).subscribe(
            (activityRes) => {
                this.activityList = activityRes;

                this.activitySearchUtil.entityArr = this.activityList;
                this.activitySearchUtil.createSubscription();
            }, error => {
                console.log('error in getActivities() -', error);
            }
        );
    }

    patchCategoryDetails(recordData) {
        this.updateCategoryFG.patchValue({
            recordID: recordData.recordID,
            transactionDate: recordData.transactionDate,
            accountName: recordData.accountName,
            supplierName: recordData.supplierName,
            amount: recordData.amount,
            categoryID: recordData.categoryID,
            activityID: recordData.activityID
        })
        this.isEqual = true;
    }

    updateCategorizedRecords() {
        if (this.updateCategoryFG.invalid) {
            this.updateCategoryFG.markAllAsTouched();
            this.toasterService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.spendBasedController.updateCategorizedRecords(this.currentOrgID, this.activityDataID, this.updateCategoryFG.value)
            .subscribe((categorizeRes) => {
                this.toasterService.openToast(ToastrTitle.SUCCESS, categorizeRes['message'], ToastrColor.SUCCESS);
                this.dialogRef.close('Success');
            }, error => {
                console.log('Error in updateCategorizedRecords -', error);
                this.toasterService.openToast(ToastrTitle.ERROR, "Error in updating record", ToastrColor.ERROR);
            });
    }

}