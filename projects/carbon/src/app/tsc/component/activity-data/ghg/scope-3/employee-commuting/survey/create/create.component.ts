import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment-timezone';

import { sampleSetFrequency } from '@carbon/constant/employee.constant';

import { EmployeeSurveyController } from '@carbon/controller/employee-survey.controller';

// tsc-library
import { ButtonLabelEnum, DialogEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService,ToastrColor } from '@library/toastr-service';
// /tsc-library/
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})
export class CreateComponent implements OnInit {

    DialogEnum = DialogEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    createSurveyFG: FormGroup;

    sampleSetFrequency = sampleSetFrequency;
    ButtonLabelEnum = ButtonLabelEnum;
    rootOrgID: any;

    constructor(
        private formbuilder: FormBuilder,
        private employeeSurveyController: EmployeeSurveyController,
        public toastrService: ToastrService,
        private storageService: StorageService,
        private dialogRef: MatDialogRef<CreateComponent>,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.getEmployeeCount();
        this.createSurveyFG = this.formbuilder.group({
            surveyName: [, Validators.required],
            accountingStartDate: [, Validators.required],
            totalEmployee: [, Validators.required],
            sampleSetPercentage: [, Validators.required]
        });
    }

    getEmployeeCount() {
        this.employeeSurveyController.getEmployeeCount(this.rootOrgID).subscribe((res: any) => {
            this.createSurveyFG.patchValue({
                totalEmployee: res
            })
        })
    }

    formatDate(control: string) {
        if (this.createSurveyFG.controls[control].value === null) return;
        let date = moment(this.createSurveyFG.controls[control].value).format("YYYY-MM-DD");
        this.createSurveyFG.controls[control].patchValue(date);
    }

    onSubmit() {
        if (this.createSurveyFG.invalid) {
            this.createSurveyFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.employeeSurveyController.createSurvey(this.rootOrgID, this.createSurveyFG.value).subscribe((response) => {
            console.log(response);
            if(response['status'] == 'success')
            {this.dialogRef.close('opSuccess');}
        }, error => {
            console.log('error in sendSurveyForm() -', error);
        });
    }

    public errorHandling = (control: string, error: string) => {
        return this.createSurveyFG.controls[control].hasError(error);
    }

    openDatepicker(datepicker: MatDatepicker<Moment>) {
		if (!datepicker.opened) { datepicker.open(); }
	}

}

