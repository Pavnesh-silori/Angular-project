import { Component, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { MatDatepicker } from '@angular/material/datepicker';
import { ReportController } from '@carbon/controller/report.controller';
import { ConsolidationApproachM } from '@carbon/model/consolidation-approach.model';
import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { InvalidForm } from '@library/tsc-common';
import * as moment from 'moment';
import { Moment } from 'moment';

import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-ghg-emission-report',
    templateUrl: './ghg-emission-report.component.html',
    styleUrls: ['./ghg-emission-report.component.scss'],
})

export class GhgEmissionReportComponent implements OnInit {
    environment = environment;
    currentOrgID: any;
    filterFG: FormGroup;
    durationField: any;

    reportView: string = 'NO';
    reportData: any;

    includeFacilityValue = false;
    includeSubsidiaryValue = false;
    consolidationApproach: ConsolidationApproachM[];

    constructor(
        private fb: FormBuilder,
        private storageService: StorageService,
        private reportController: ReportController,
        private consolidationApproachService: ConsolidationApproachService,
        private toasterService: ToastrService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.filterFGInit();
        this.getConsolidationAppraoches();
    }

    filterFGInit() {
        this.filterFG = this.fb.group({
            startDate: [, [Validators.required]],
            endDate: [, [Validators.required]],
            includeFacility: [],
            includeSubsidiary: [],
            consolidationApproachID: []
        });
    }

    getReport() {
        if (this.filterFG.invalid) {
            this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Please seelect date range', ToastrColor.ERROR);
            return false;
        } else {
            this.reportController.getReport(this.currentOrgID, this.filterFG.controls['startDate'].value, this.filterFG.controls['endDate'].value,this.filterFG.controls['includeFacility'].value, 
            this.filterFG.controls['includeSubsidiary'].value,this.filterFG.controls['consolidationApproachID'].value)
            .subscribe(data => {
                this.reportData = data;
                this.reportView = this.reportData?.totalEmission ? 'YES' : 'NO';
            }, error => {
                console.log('error in getReport() -', error);
            });
        }

    }

    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

    formatDate(control: string) {
        if (this.filterFG.controls[control].invalid) return;

        let date = moment(this.filterFG.controls[control].value).format("YYYY-MM-DD");
        this.filterFG.controls[control].patchValue(date);
    }

    takeFocusAway(durationField) {
        this.durationField = document.getElementById(durationField);
        this.durationField.classList.remove('mat-focused');

        if (this.durationField.classList.contains('mat-form-field-invalid')) {
            this.durationField.classList.remove('mat-form-field-should-float');
        } else {
            this.durationField.classList.add('mat-form-field-should-float');
        }
    }

    exportReport() {
        let url: string;
        url = `${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}organizations/${this.currentOrgID}/reports/ghg-emission-report/generate?startDate=${this.filterFG.controls['startDate'].value}&endDate=${this.filterFG.controls['endDate'].value}
        &includeFacility=${this.filterFG.controls['includeFacility'].value}&includeSubsidiary=${this.filterFG.controls['includeSubsidiary'].value}`;

        window.open(url, '_blank');
    }

    async getConsolidationAppraoches() {
        this.consolidationApproach = <ConsolidationApproachM[]>await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.currentOrgID);
        this.filterFG.patchValue({
            consolidationApproachID: this.consolidationApproach[0].keyID
        })
    }

    errorHandling(control: string, error: string) {
        return this.filterFG.controls[control].hasError(error);
    }

}
