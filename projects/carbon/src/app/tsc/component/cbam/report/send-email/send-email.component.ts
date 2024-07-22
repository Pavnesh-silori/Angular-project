import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CbamRunController } from '@carbon/controller/cbam-run.controller';

//tsc-library
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import {
    ButtonTooltipEnum,
    DialogEnum, FormErrorEnum,
    InvalidForm,
    MATERIAL_CONSTANT,
    MaterialFormFieldAppearance,
    RESPONSE_STATUS_KEYID_ENUM,
    TSCCommonService
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-send-email',
    templateUrl: './send-email.component.html',
    styles: [
    ]
})
export class SendEmailComponent implements OnInit {

    sendEmailFG: FormGroup;
    reportID: any;
    currentOrgID: any;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonTooltipEnum = ButtonTooltipEnum;
    formErrorEnum = FormErrorEnum;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    inputPlaceholder = "email1@domain.com, email2@domain.com";
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    constructor(
        private formBuilder: FormBuilder,
        private cbamRunController: CbamRunController,
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<SendEmailComponent>,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private tscCommonService: TSCCommonService
    ) {
        this.dialogRef.disableClose = true;
        this.reportID = this.data.dataSource;
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.formInit();
        this.getReportDetails();
    }

    formInit() {
        this.sendEmailFG = this.formBuilder.group({
            customerEmail: [[], Validators.required]
        });
    }

    getReportDetails() {
        this.cbamRunController.getCbamReportByID(this.currentOrgID, this.reportID).subscribe(res => {
            this.patchForm(res);
        });
    }

    patchForm(response) {
        this.sendEmailFG.patchValue({
            customerEmail: response.customerEmail
        });
    }

    get customerEmails() {
        return this.sendEmailFG.get('customerEmail');
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            const emails = value.split(',').map(email => email.trim());
            const validEmails = emails.filter(email => this.tscCommonService.isValidEmail(email));
            if (validEmails.length > 0) {
                this.customerEmails.patchValue(this.customerEmails.value.concat(validEmails));
            }
        }
        event.chipInput!.clear();
    }

    removeEmail(email): void {
        const index = this.customerEmails.value.indexOf(email);
        if (index >= 0) {
            const emails = [...this.customerEmails.value];
            emails.splice(index, 1);
            this.customerEmails.setValue(emails);
        }
    }

    onInput() {
        this.inputPlaceholder = '';
    }

    onSubmit() {
        if (this.sendEmailFG.invalid) {
            this.sendEmailFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        }

        this.cbamRunController.sendEmail(this.currentOrgID, this.reportID, this.sendEmailFG.value.customerEmail).subscribe((res: any) => {
            if (res.status == RESPONSE_STATUS_KEYID_ENUM.SUCCESS) {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            }
        });
    }

    errorHandling = (control: string, error: string) => {
        return this.sendEmailFG.controls[control].hasError(error);
    }

}
