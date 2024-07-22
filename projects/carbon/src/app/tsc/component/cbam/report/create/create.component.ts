import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';

import { environment } from 'src/environments/environment';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { REPORTING_QUARTER } from '@carbon/constant/cbam.constant';

import { CbamEnum } from '@carbon/enum/cbam.enum';

import { CbamRunController } from '@carbon/controller/cbam-run.controller';

//tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import {
    ButtonTooltipEnum,
    COMMON_CONSTANT,
    DialogEnum,
    FormErrorEnum,
    InvalidForm,
    LookupService,
    LookupValueM,
    MATERIAL_CONSTANT,
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    TSCCommonService,
    RESPONSE_STATUS_KEYID_ENUM
} from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { DateFormatEnum, DateService } from '@library/date';
// /tsc-library/

const carbon_lookup_url = environment.CARBON_ACCOUNTING_API_URL;
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styles: []
})
export class CreateComponent implements OnInit {

    currentOrgID: any;
    newReportFG: FormGroup;

    products: any;
    reportingPeriod: any[] = [];
    dataQuality: any;
    runConfigID: any;

    allUnit: UnitM[] = [];
    massVolumeUnit: UnitM[] = [];

    assuranceList: any[];

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    reportingQuarter = REPORTING_QUARTER;

    productSearchUtil: MatSelectSearchService = new MatSelectSearchService(['productName']);
    massVolumeUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name'])

    inputPlaceholder = "email1@domain.com, email2@domain.com";
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private renderer: Renderer2,
        private unitService: UnitService,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private lookupService: LookupService,
        private cbamRunController: CbamRunController,
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<CreateComponent>,
        private dateService: DateService,
        private tscCommonService: TSCCommonService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.formDetailsInit();
        this.getCbamProductRunList();
        this.getUnit();
        this.getDataQualityAssurance();
        this.getSectorSpecificParameter();
        if (this.data) {
            this.patchFormInit(this.data.value);
        }
    }

    ngAfterViewInit() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    formDetailsInit() {
        this.newReportFG = this.formBuilder.group({
            productID: [, Validators.required],
            reportingPeriod: [],
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            quarter: [, Validators.required],
            productExported: [, Validators.required],
            productExportedUnitID: [, Validators.required],
            customerName: [, Validators.required],
            customerEmail: [[]],
            dataQualityID: [, Validators.required],
            assuranceID: [, Validators.required]
        });
    }

    patchFormInit(data) {
        this.newReportFG.patchValue({
            productID: data.productID,
            startDate: data.periodStartDate,
            endDate: data.periodEndDate
        });

        let startDate = this.dateService.formatDate(data.periodStartDate, DateFormatEnum.MMM_YYYY);
        let endDate = this.dateService.formatDate(data.periodEndDate, DateFormatEnum.MMM_YYYY);
        let period = {
            name: `${startDate} - ${endDate}`,
            startDate: data.periodStartDate,
            endDate: data.periodEndDate,
            runConfigID: data.runID
        };

        this.reportingPeriod.push(period);
    }

    getCbamProductRunList() {
        this.cbamRunController.getCbamProductRunList(this.currentOrgID).subscribe(res => {
            this.products = res;
            let cbamProducts = this.products.filter(source => source.isLocked == true);
            this.products = cbamProducts;
            this.productSearchUtil.entityArr = this.products;
            this.productSearchUtil.createSubscription();
        });
    }

    async getDataQualityAssurance() {
        let lookup = [
            {
                lookupCode: ['cbam-data-quality-assurance'],
                lookupKey: []
            }
        ]
        this.assuranceList = <LookupValueM[]>await this.lookupService.getLookup(carbon_lookup_url, lookup);
    }

    onProductSelect(productID) {
        this.reportingPeriod = [];
        let selectedProduct = this.products.find(product => product.productID == productID);
        if (selectedProduct) {
            selectedProduct.run.forEach(run => {
                if (run.lockStatus == CbamEnum.LOCKED) {
                    let startDate = this.dateService.formatDate(run.startDate, DateFormatEnum.MMM_YYYY);
                    let endDate = this.dateService.formatDate(run.endDate, DateFormatEnum.MMM_YYYY);
                    let period = {
                        name: `${startDate} - ${endDate}`,
                        startDate: run.startDate,
                        endDate: run.endDate,
                        runConfigID: run.productRunConfigID
                    };
                    this.reportingPeriod.push(period);
                }
                this.newReportFG.get('startDate').patchValue(run.startDate);
                this.newReportFG.get('endDate').patchValue(run.endDate);
            });
        }
    }

    onReportingPeriodChange(selectedPeriod) {
        if (selectedPeriod) {
            const period = this.reportingPeriod.find(period =>
                period.startDate == selectedPeriod.startDate && period.endDate == selectedPeriod.endDate
            );

            if (period) {
                this.runConfigID = period.runConfigID;
            }
        }
    }

    async getUnit() {
        this.allUnit = await this.unitService.getUnit([]);
        this.massVolumeUnit = this.unitService.filterUnit(this.allUnit, [UnitTypeKeyID.MASS, UnitTypeKeyID.VOLUME]);
        this.massVolumeUnitSearchUtil.entityArr = this.massVolumeUnit;
        this.massVolumeUnitSearchUtil.createSubscription();
    }

    get customerEmails() {
        return this.newReportFG.get('customerEmail');
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

    async getSectorSpecificParameter() {
        let requestBody = [
            {
                lookupCode: ['cbam-report-data-quality'],
                lookupKey: []
            }
        ];
        this.dataQuality = <LookupValueM[]>await this.lookupService.getLookup(carbon_lookup_url, requestBody);
    }

    onSubmit() {
        if (this.newReportFG.invalid) {
            this.newReportFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        }

        this.cbamRunController.createCbamReport(this.currentOrgID, this.runConfigID, this.newReportFG.value).subscribe((res: any) => {
            if (res.status == RESPONSE_STATUS_KEYID_ENUM.SUCCESS) {
                let result = {};
                result['status'] = DialogEnum.SUCCESS_DR;
                result['response'] = res.response;           
                this.dialogRef.close(result);
            }
        });
    }

    errorHandling = (control: string, error: string) => {
        return this.newReportFG.controls[control].hasError(error);
    }
}
