import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { BaseYearController } from '@carbon/controller/base-year.controller';
import { ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model';

// tsc-library
import { ToastrTitle, ToastrColor, ToastrService } from '@library/toastr-service';
import { DialogEnum, InvalidForm, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';

// /tsc-library

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styles: []
})
export class UpdateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    rootOrgID: any;

    updateFG: FormGroup;

    baseYearKeyID: string;
    isSbtiBaseYear: boolean = false;
    maxThreshold: number = 100;
    isEqual: boolean = true;
    initialObject: any;

    constructor(
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) data,
        private dialogRef: MatDialogRef<UpdateComponent>,
        private baseYearController: BaseYearController,
        private storageService: StorageService,
        private toastrService: ToastrService
    ) {
        this.dialogRef.disableClose = true;
        this.baseYearKeyID = data.baseYearKeyID;
        this.isSbtiBaseYear = data.isSbtiBaseYear;
    }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.formDetailsInit();
        this.getBaseYearByType();
    }

    formDetailsInit() {
        this.maxThreshold = this.isSbtiBaseYear ? 5 : 100;
        this.updateFG = this.formBuilder.group({
            recalculationPolicy: [, Validators.required],
            significanceThreshold: [, [Validators.required, Validators.min(0), Validators.max(this.maxThreshold)]],
        })
    }

    getBaseYearByType() {
        this.baseYearController.getBaseYearByType(this.rootOrgID, this.baseYearKeyID)
            .subscribe((response: ghgBaseYearEmissionViewM) => {
                this.patchData(response);
            },
                error => {
                    console.log('error in getBaseYearByType() -', error);
                    this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                });
    }

    patchData(update) {
        this.updateFG.patchValue({
            recalculationPolicy: update['recalculationPolicy'],
            significanceThreshold: update['significanceThreshold']
        });
        this.updateFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.initialObject, this.updateFG.value);
        });
    }

    // isValidForm() {
    //     if (this.updateFG.invalid) {
    //         this.updateFG.markAllAsTouched();
    //         this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
    //         return;
    //     }
    // }

    updateData() {
        if (this.updateFG.invalid) {
            this.updateFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        let toast: any;
        this.baseYearController.updateData(this.rootOrgID, this.baseYearKeyID, this.updateFG.value)
            .subscribe((updateRes: ResponseM) => {
                toast = this.toastrService.getToastStatus(updateRes.status);
                this.toastrService.openToast(toast.title, updateRes.message, toast.color);
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            }, error => {
                console.error('Error updating data:', error);
            });
    }
}
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDialogModule,
        MatFormFieldModule,
    ],
    declarations: [UpdateComponent],
    exports: []
})
export class UpdateModule { }