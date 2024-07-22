import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CbamRunController } from '@carbon/controller/cbam-run.controller';

//tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import {
    ButtonTooltipEnum,
    CountryM,
    CountryService,
    DialogEnum,
    FormErrorEnum,
    InvalidForm,
    MATERIAL_CONSTANT,
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    RESPONSE_STATUS_KEYID_ENUM
} from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-audit-details',
    templateUrl: './audit-details.component.html',
    styles: []
})
export class AuditDetailsComponent implements OnInit {

    auditDetailsFG: FormGroup;
    currentOrgID: any;
    action: string;
    cbamReportID: any;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;

    countryM: CountryM[] = [];
    countryFiltered: MatSelectSearchService = new MatSelectSearchService(['countryName']);

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private renderer: Renderer2,
        private cbamRunController: CbamRunController,
        private countryService: CountryService,
        private toastrService: ToastrService,
        private storageService: StorageService,
        @Inject(MAT_DIALOG_DATA) data,
        private dialogRef: MatDialogRef<AuditDetailsComponent>
    ) {
        this.cbamReportID = data.dataSource;
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.formInit();
        this.getCountry();
        // if (this.action == 'update') {
        //     this.getAuditDetails();
        // }
    }

    ngAfterViewInit() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    formInit() {
        this.auditDetailsFG = this.formBuilder.group({
            verifierCompanyName: [],
            verifierStreet: [],
            verifierCity: [],
            verifierPostCode: [],
            verifierCountryCode: [],
            headVerifierName: [],
            headVerifierEmail: [, [Validators.required, Validators.email]],
            headVerifierPhoneNumber: [],
            headVerifierFax: [],
            accreditationMemberState: [],
            accreditationBodyName: [],
            accreditationRegistrationNumber: []
        });
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();
        this.countryFiltered.entityArr = this.countryM;
        this.countryFiltered.createSubscription();
    }

    // getAuditDetails() {
    //     this.cbamRunController.getAuditDetails(this.currentOrgID, this.cbamReportID).subscribe(res => {
    //         console.log(res);
    //         this.patchDetails(res);
    //     })
    // }

    // patchDetails(response) {
    //     this.auditDetailsFG.patchValue({
    //         verifierCompanyName: response.verifierCompanyName,
    //         verifierStreet: response.verifierStreet,
    //         verifierCity: response.verifierCity,
    //         verifierPostCode: response.verifierPostCode,
    //         verifierCountryCode: response.verifierCountryCode,
    //         headVerifierName: response.headVerifierName,
    //         headVerifierEmail: response.headVerifierEmail,
    //         headVerifierPhoneNumber: response.headVerifierPhoneNumber,
    //         headVerifierFax: response.headVerifierFax,
    //         accreditationMemberState: response.accreditationMemberState,
    //         accreditationBodyName: response.accreditationBodyName,
    //         accreditationRegistrationNumber: response.accreditationRegistrationNumber
    //     });
    // }

    onSubmit() {
        if (this.auditDetailsFG.invalid) {
            this.auditDetailsFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        }

        this.cbamRunController.createAuditDetails(this.currentOrgID, this.cbamReportID, this.auditDetailsFG.value).subscribe((res: any) => {
            if (res.status == RESPONSE_STATUS_KEYID_ENUM.SUCCESS) {
                this.dialogRef.close(DialogEnum.SUCCESS_DR)
            }
        },
            error => {
                console.log('error in creating AuditDetails', error)
            });
    }

    // updateAudit() {
    //     if (this.auditDetailsFG.invalid) {
    //         this.auditDetailsFG.markAllAsTouched();
    //         this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
    //         return false;
    //     }

    //     this.cbamRunController.updateAuditDetails(this.currentOrgID, this.cbamReportID, this.auditDetailsFG.value).subscribe(res => {
    //         this.dialogRef.close(DialogEnum.SUCCESS_DR)
    //     },
    //         error => {
    //             console.log('error in creating AuditDetails', error)
    //         });
    // }

    errorHandling = (control: string, error: string): boolean => {
        return this.auditDetailsFG.get(control).hasError(error);
    }

}
