import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

import { isEqual } from 'lodash';


import { GhgAuditDetailsM } from '@carbon/model/ghg-audit.model';

import { GhgAuditController } from '@carbon/controller/ghg-audit.controller';

import { GhgAuditService } from '@carbon/service/ghg-audit.service';

// tsc-library
import { ButtonLabelEnum, DialogEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// / tsc-library

@Component({
    selector: 'app-ghg-audit',
    templateUrl: './ghg-audit.dialog.html',
    styles: []
})
export class GhgAuditDialog implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    auditFG: FormGroup;

    currentOrgID: any;
    auditYear: any;
    isAudited: boolean = false;
    ghgAuditDetailM: GhgAuditDetailsM = new GhgAuditDetailsM();

    isEqual: boolean;
    initialObject: any;

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<GhgAuditDialog>,
        @Inject(MAT_DIALOG_DATA) private data,
        private ghgAuditController: GhgAuditController,
        private ghgAuditService: GhgAuditService,
        private toasterService: ToastrService,
    ) {
        this.currentOrgID = this.data['currentOrgID'];
        this.auditYear = this.data['auditYear'];
    }

    async ngOnInit() {
        this.auditGFInit();

        await this.getAuditDetailsByYear();
    }

    auditGFInit() {
        this.auditFG = this.formBuilder.group({
            year: [this.auditYear],
            date: [, Validators.required],
            name: [, Validators.required],
            email: [, [Validators.required, Validators.email]],
            phone: [, [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.maxLength(10)]],
            address: [, Validators.required],
        })
    }

    formatDate(control: string) {
        let date = moment(this.auditFG.controls[control].value).format("YYYY-MM-DD");
        this.auditFG.controls[control].patchValue(date);
    }

    patchAuditRecord(ghgAuditDetailM) {
        this.auditFG.patchValue({
            year: ghgAuditDetailM['year'],
            date: ghgAuditDetailM['date'],
            name: ghgAuditDetailM['name'],
            email: ghgAuditDetailM['email'],
            phone: ghgAuditDetailM['phone'],
            address: ghgAuditDetailM['address'],
        });

        this.initialObject = this.auditFG.value;
        this.isEqual = true;
    }

    saveAuditDetails() {
        if (!this.isFormValid()) {
            return;
        }

        this.ghgAuditController.createGhgAuditDetails(this.currentOrgID, this.auditFG.value)
            .subscribe((createRes) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in saveAuditDetails -', error);
                })
    }

    updateAuditDetails() {
        if (!this.isFormValid()) {
            return;
        }

        this.ghgAuditController.patchGhgAuditDetails(this.currentOrgID, this.ghgAuditDetailM['id'], this.auditFG.value)
            .subscribe((createRes) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in updateAuditDetails -', error);
                })
    }

    isFormValid() {
        if (this.auditFG.invalid) {
            this.auditFG.markAllAsTouched();
            console.log('invalid form -', this.auditFG.value);
            this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        }
        return true;
    }


    async getAuditDetailsByYear() {
        this.ghgAuditDetailM = await this.ghgAuditService.getGhgAuditDetailsByYear(this.currentOrgID, this.auditYear);
        if (this.ghgAuditDetailM['id'] != null) {
            this.isAudited = true;
            this.patchAuditRecord(this.ghgAuditDetailM);
        } else {
            this.isAudited = false;
        }
    }

    ngAfterViewInit() {
        this.auditFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.auditFG.value));
    }

    // Datepicker calender open/close
    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.auditFG.get(control).hasError(error);
    }

}
