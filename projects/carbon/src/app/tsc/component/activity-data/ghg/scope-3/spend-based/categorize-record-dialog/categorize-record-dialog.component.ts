import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { SpendBasedController } from '@carbon/controller/spend-based.controller';

import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';

@Component({
    selector: 'app-categorize-record-dialog',
    templateUrl: './categorize-record-dialog.component.html',
    styles: [
    ]
})
export class CategorizeRecordDialogComponent implements OnInit {
    orgID: string = '';
    recordID: string = '';
    categoryStdID: string = '';
    activityStdID: string = '';

    rememberChoice = false;

    selectedCategoryFC: FormControl = new FormControl('', Validators.required);
    rememberPreferenceFC: FormControl = new FormControl(false);

    constructor(
        public dialogRef: MatDialogRef<CategorizeRecordDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private spendBasedController: SpendBasedController,
        private toasterService: ToastrService,
    ) {
        this.orgID = data['orgID'];
        this.recordID = data['recordID'];
        this.categoryStdID = data['categoryStdID'];
        this.activityStdID = data['activityStdID'];
    }

    ngOnInit(): void {
        this.getUserPrefrenceCategory();

        this.rememberPreferenceFC.valueChanges.subscribe((enabled) => {
            this.rememberChoice = enabled;
        });
    }

    getUserPrefrenceCategory() {
        this.spendBasedController.getUserPrefrenceCategory(this.orgID, this.recordID).subscribe((getCategoryRes) => {
            this.selectedCategoryFC.patchValue(getCategoryRes['recordKey']);
            this.rememberPreferenceFC.patchValue(getCategoryRes['rememberPreference']);
        }, error => {
            console.log('Error in getUserPrefrenceCategory -', error);
            this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting user preference category', ToastrColor.ERROR);
        })
    }

    saveUserPrefrenceCategory() {
        if (this.rememberChoice == true) {
            this.toasterService.openToast(ToastrTitle.INFO, 'Records will be categorized for future records.', ToastrColor.INFO);
        }

        let preferenceData = {
            recordID: this.recordID,
            categoryStdID: this.categoryStdID,
            activityStdID: this.activityStdID,
            recordKey: this.selectedCategoryFC.value,
            rememberPreference: this.rememberChoice
        };

        this.spendBasedController.saveUserPrefrenceCategory(this.orgID, preferenceData).subscribe((savedCategoryRes) => {
            this.toasterService.openToast(savedCategoryRes['title'], savedCategoryRes['message'], savedCategoryRes['result']);
            this.dialogRef.close({
                result: 'userPreferenceCategorySaved',
                preferenceCategory: this.selectedCategoryFC.value,
                rememberChoice: this.rememberChoice,
            });
        }, error => {
            console.log('Error in saveUserPrefrenceCategory -', error);
            this.toasterService.openToast(ToastrTitle.ERROR, 'Error in saving user preference category', ToastrColor.ERROR);
        })
    }

}
