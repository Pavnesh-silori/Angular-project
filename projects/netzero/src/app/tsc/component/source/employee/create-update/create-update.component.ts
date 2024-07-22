import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import * as moment from 'moment';
import { isEqual } from 'lodash';

import { EmployeeM, Employee } from '@netzero/model/employee.model';

import { EmployeeController } from '@netzero/controller/employee.controller';

// tsc-library
import { ResponseM, MaterialFormFieldAppearance, InvalidForm, ButtonLabelEnum, FormAction, MATERIAL_CONSTANT, ButtonTooltipEnum, FormErrorEnum } from '@library/tsc-common';
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { DateService } from '@library/date';
// /tsc-library/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
})

export class CreateUpdateComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormAction = FormAction;
    currentOrgID: any;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormErrorEnum = FormErrorEnum;

    employeeFG: FormGroup;
    employee = new Employee();

    action: any;
    title: string;
    employeeID: any;
    initialObject: any;
    isEqual: boolean = true;

    separateDialCode = true;
    SearchCountryField = SearchCountryField;
    CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;

    preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];
    phoneFC: FormControl = new FormControl('', [Validators.required]);

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<CreateUpdateComponent>,
        private formBuilder: FormBuilder,
        private renderer: Renderer2,
        public dateService: DateService,
        private employeeController: EmployeeController,
        private toastrService: ToastrService
    ) {
        this.action = this.data.action;
        this.currentOrgID = this.data.currentOrgID;
        this.employeeID = this.data.employeeID;
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        if (this.action == FormAction.CREATE) {
            this.title = ButtonLabelEnum.CREATE_BTN_LABEL;
        } else if (this.action == FormAction.UPDATE) {
            this.title = ButtonLabelEnum.UPDATE_BTN_LABEL;
            this.getEmployeeByID();
        } else {
            this.toastrService.openToast(ToastrTitle.ERROR, 'Unrecognized action!', ToastrColor.ERROR);
        }

        this.employeeFGInit();
    }

    ngAfterViewInit() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);

        this.employeeFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.employeeFG.value));
    }

    employeeFGInit() {
        this.employeeFG = this.formBuilder.group({
            employeeCode: [, Validators.required],
            firstName: [, Validators.required],
            lastName: [],
            emailID: [, [Validators.required, Validators.email]],
            department: [],
            designation: [],
            contactNumber: [],
            contactCountryCode: [],
            joiningDate: [, Validators.required],
            leavingDate: []
        })

        this.phoneFC.valueChanges.subscribe((value) => {
            if (value) {
                const countryCode = value.countryCode;
                const number = value.number;
                this.employeeFG.get('contactCountryCode').setValue(countryCode);
                this.employeeFG.get('contactNumber').setValue(number);
            }
        });
    }

    getEmployeeByID() {
        this.employeeController.getEmployeeByID(this.currentOrgID, this.employeeID).subscribe((res: EmployeeM) => {
            this.employee = res;
            this.patchEmployeeDetails();
        }, error => {
            console.log('error in getEmployeeByID() -', error);
        });
    }

    patchEmployeeDetails() {
        this.employeeFG.patchValue({
            employeeCode: this.employee.code,
            firstName: this.employee.firstName,
            lastName: this.employee.lastName,
            emailID: this.employee.emailID,
            department: this.employee.department,
            designation: this.employee.designation,
            joiningDate: this.employee.joiningDate,
            leavingDate: this.employee.leavingDate == "9999-12-31" ? null : this.employee.leavingDate
        })
        this.phoneFC.patchValue({
            countryCode: this.employee['contactCountryCode'],
            number: this.employee['contactNumber'],
        });

        this.initialObject = this.employeeFG.value;
        this.isEqual = true;
    }

    formatDate(control: string) {
        let date = moment(this.employeeFG.controls[control].value).format("YYYY-MM-DD");
        this.employeeFG.controls[control].patchValue(date);
    }

    createEmployee() {
        if (this.employeeFG.invalid) {
            this.employeeFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.employeeController.createEmployee(this.currentOrgID, this.employeeFG.value).subscribe((createRes: ResponseM) => {
            let toast: any;
            toast = this.toastrService.getToastStatus(createRes.status);
            this.toastrService.openToast(toast.title, createRes['message'], toast.color);
            if (toast.title == 'Success') {
                this.dialogRef.close('opSuccess');
            }
        }, error => {
            console.log('error in createEmployee -', error);
        });
    }

    updateEmployee() {
        if (this.employeeFG.invalid) {
            this.employeeFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.employeeController.updateEmployee(this.currentOrgID, this.employeeID, this.employeeFG.value)
            .subscribe((updateRes: ResponseM) => {
                let toast: any;
                toast = this.toastrService.getToastStatus(updateRes.status);
                this.dialogRef.close('opSuccess');
            }, error => {
                console.log('error in updateEmployee -', error);
            });
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.employeeFG.get(control).hasError(error);
    }
}
