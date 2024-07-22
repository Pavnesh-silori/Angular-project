import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { isEqual } from 'lodash';

import { AccountingPreference, AccountingPreferenceM } from '@carbon/model/accounting-preference.model';

import { AccountingPreferenceController } from '@carbon/controller/accounting-preference.controller';
import { AccountingPreferenceService } from '@carbon/service/accounting-preference.service';

import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { ButtonLabelEnum, InvalidForm, ResponseM } from '@library/tsc-common';

@Component({
    selector: 'app-accounting-preference',
    templateUrl: './accounting-preference.component.html',
    styles: [],
})

export class AccountingPreferenceComponent implements OnInit {
    ButtonLabelEnum = ButtonLabelEnum;

    rootOrgID: any;
    accountingPrefFG: FormGroup;

    isEqual: boolean;
    initialObject: any;
    isProductEmbeddedEmissionValid = true;
    accountingPreferenceM = new AccountingPreference();

    isUpdate: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private accountingPreferenceController: AccountingPreferenceController,
        private accountingPreferenceService: AccountingPreferenceService,
        private stroageService: StorageService,
        private toastrService: ToastrService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.stroageService.getStorage('rootOrgID');

        this.accountingPrefFGInit();
        this.getAccountingPreferenceByID();
    }

    accountingPrefFGInit() {
        this.accountingPrefFG = this.formBuilder.group({
            isProductIntensity: [false],
            isProductEmbeddedEmission: [, Validators.required],
            isProductCarbonFootPrint: [false]
        });
    }

    async getAccountingPreferenceByID() {
        this.accountingPreferenceM = <AccountingPreferenceM>await this.accountingPreferenceService.getAccountingPreferenceByOrgID(this.rootOrgID);
        if (this.accountingPreferenceM.id) {
            this.isUpdate = true;
            this.patchFormGroup();
        }
    }

    patchFormGroup() {
        this.accountingPrefFG.patchValue({
            isProductIntensity: this.accountingPreferenceM.isProductIntensity,
            isProductEmbeddedEmission: this.accountingPreferenceM.isProductEmbeddedEmission,
            isProductCarbonFootPrint: this.accountingPreferenceM.isProductCarbonFootPrint
        });

        this.initialObject = this.accountingPrefFG.value;
        this.isEqual = true;
    }

    ngAfterViewInit() {
        this.accountingPrefFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.accountingPrefFG.value));

        // this.accountingPrefFG.get('isProductEmbeddedEmission').valueChanges.subscribe(value => {
        //     if (!this.isUpdate) {
        //         this.isProductEmbeddedEmissionValid = value;
        //     }
        // });
    }

    onSubmit() {
        if (!this.isFormValid()) {
            return;
        }

        if (!this.isUpdate) {
            this.createAccountingPreference();
        } else {
            this.updateAccountingPreference();
        }
    }

    createAccountingPreference() {
        this.accountingPreferenceController.createAccountingPreference(this.rootOrgID, this.accountingPrefFG.value).subscribe((response: ResponseM) => {
            this.getAccountingPreferenceByID();
        }, error => {
            console.log('error in createAccountingPreference() -', error);
        });
    }

    updateAccountingPreference() {
        this.accountingPreferenceController.updateAccountingPreference(this.rootOrgID, this.accountingPrefFG.value)
            .subscribe((response: ResponseM) => {
                this.getAccountingPreferenceByID();
            }, error => {
                console.log('error in updateAccountingPreference() -', error);
            });
    }

    isFormValid() {
        if (this.accountingPrefFG.invalid) {
            console.log('invalid form -', this.accountingPrefFG.value);
            this.isProductEmbeddedEmissionValid = false;
            this.accountingPrefFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        }

        // if (this.isUpdate) {
        //     return true;
        // } else if (!this.accountingPrefFG.get('isProductEmbeddedEmission').value) {
        //     this.isProductEmbeddedEmissionValid = false;
        //     return false;
        // }

        return true;
    }

}
