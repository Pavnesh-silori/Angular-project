import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReportErrorEnum } from '../../../enum/error.enum';

import { Alert, AlertM } from '../../../model/alert.model';
import { MeterData, MeterDataI } from '../../../model/aggregate-data.model';

import { AggregateDataService } from '../../../service/aggregate-data.service';
import { AlertService } from '../../../service/alert.service';
import { ReportService } from '../../../service/report.service';

// tsc-library
import { ButtonLabelEnum, COMMON_CONSTANT, FileTypeEnum, FormErrorEnum, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'lib-cgwa',
    templateUrl: './cgwa.component.html',
    styles: [
    ]
})
export class CgwaReportComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    DateFormatEnum = DateFormatEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    DateTypeEnum = DateTypeEnum;
    FileTypeEnum = FileTypeEnum;
    FormErrorEnum = FormErrorEnum;

    orgID: any;
    timezone: string;

    reportData = [new MeterData()];
    showAlert: boolean = false;
    showLoader: boolean = false;

    reportAlertObj: AlertM = new Alert();

    reportFG: FormGroup;

    @ViewChild('monthDateInput') monthDateInput: DateInputComponent;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private toastService: ToastrService,
        private alertService: AlertService,
        private aggregateDataService: AggregateDataService,
        private reportService: ReportService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');

        this.reportFGInit();
    }

    reportFGInit() {
        this.reportFG = this.formBuilder.group({
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            sourceConsumer: this.formBuilder.group({
                type: ['SOURCE', Validators.required],
                keyID: ['BOREWELL', Validators.required]
            }),
            params: this.formBuilder.array([this.createParamsGroup()]),
            interval: [, Validators.required]
        });
    }

    createParamsGroup() {
        return this.formBuilder.group({
            name: ['gwFlowTotalizer', Validators.required],
            dsAgg: ['sum', Validators.required],
            agg: ['sum', Validators.required]
        });
    }

    dateInpChange() {
        let startDate = this.monthDateInput.startDateFC.value;
        let endDate = this.monthDateInput.endDateFC.value;

        this.reportFG.get('startDate').patchValue(startDate);
        this.reportFG.get('endDate').patchValue(endDate);
    }

    reportSubmit() {

        this.alertService.resetAlertProperties(this.reportAlertObj);

        if (this.reportFG.invalid) {
            console.log('Invalid form:', this.reportFG.value);
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } else {
            this.showLoader = true;
            this.alertService.resetAlertProperties(this.reportAlertObj);
            this.viewReport();
        }
    }

    async viewReport() {
        try {
            const result = <MeterDataI[]>await this.aggregateDataService.getMeterAggregateDataForReport(this.orgID, this.reportFG.value);

            if (result && result.length > 0 && result[0]['date']) {
                this.reportData = result;
            } else {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
            }

        } catch (error) {
            console.error("Error in viewReport()", error);
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
        } finally {
            this.showLoader = false;
        }
    }

    async downloadReport(format: string) {
        this.alertService.resetAlertProperties(this.reportAlertObj);

        if (this.reportFG.invalid) {
            console.log('Invalid form:', this.reportFG.value);
            this.reportFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.showLoader = true;

        try {
            const requestData = {};

            requestData['request'] = this.reportFG.value;
            requestData['reportName'] = 'CGWA Report';
            requestData['reportFormat'] = format;

            await this.reportService.downloadConsumptionReport(this.orgID, requestData);

        } catch (error) {
            console.error("Error in downloadConsumptionReport()", error);
        } finally {
            this.showLoader = false;
        }
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

    scheduleReport(value) {
        if (value) {
            this.router.navigate([`schedule-report/cgwa`]);
        }
    }

}