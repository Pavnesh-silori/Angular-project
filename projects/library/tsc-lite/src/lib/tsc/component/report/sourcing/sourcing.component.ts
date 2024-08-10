import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';

import { ReportErrorEnum } from '../../../enum/error.enum';

import { ConsumptionParameterM } from '../../../model/parameter.model';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { Alert, AlertM } from '../../../model/alert.model';
import { DownloadReportRequest } from '../../../model/report.model';

import { AggregationDurationComponent } from '../../dropdown/aggregation-duration/aggregation-duration.component';

import { ParameterService } from '../../../service/parameter.service';
import { AggregateDataService } from '../../../service/aggregate-data.service';
import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';

// tsc-library
import { CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, FormErrorEnum, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum, TSCCommonService } from '@library/tsc-common';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-sourcing',
    templateUrl: './sourcing.component.html',
    styles: [
    ]
})
export class SourcingReportComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    CUSTOM_RANGE_CONSTANT = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    DateFormatEnum = DateFormatEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    DateTypeEnum = DateTypeEnum;
    FormErrorEnum = FormErrorEnum;

    pageTitle: string;

    orgID: any;
    applicationKeyID: any;
    consumptionParamM: any;
    paramMetric: any;
    timezone: string;
    startDate: string;
    endDate: string;
    aggDuration: string;

    allParameterID: any[] = [];
    parameterList: any[] = [];
    totalParameterCount: number = 0;

    timestamp: any;
    renderTable: any;
    reportData: any;

    showAlert: boolean = false;
    showLoader: boolean = false;

    reportAlertObj: AlertM = new Alert();

    parameterFC: FormControl = new FormControl([], [Validators.required]);

    @ViewChild('customDateInput') customDateInput: DateInputComponent;
    @ViewChild('aggDurationInput') aggDurationInput: AggregationDurationComponent;

    constructor(
        private router: Router,
        private storageService: StorageService,
        private toastService: ToastrService,
        private aggregateDataService: AggregateDataService,
        private parameterService: ParameterService,
        private reportService: ReportService,
        private alertService: AlertService,
        private tscCommonService: TSCCommonService,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');

        const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';
        this.pageTitle = `${applicationName} Sourcing Report`;

        this.getConsumptionParameter();
    }

    async getConsumptionParameter() {
        const consumptionParamM = <ConsumptionParameterM>await this.parameterService.getConsumptionParameter(this.orgID);

        this.consumptionParamM = consumptionParamM.consumptionParameter;

        this.totalParameterCount = this.consumptionParamM.length;
        this.consumptionParamM.forEach(parameter => this.allParameterID.push(parameter['paramMetric']));
    }

    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    selectAllParameters() {
        if (!this.parameterFC.value.includes(-1)) {
            this.parameterFC.reset([]);
            return;
        }
        this.parameterFC.setValue([-1, ...this.allParameterID]);

        this.paramInpChange();
    }

    selectedParameters() {
        const selected = this.parameterFC.value;

        if (selected.includes(-1)) {
            selected.shift();
            this.parameterFC.patchValue(selected);
        } else if (this.parameterFC.value.length == this.totalParameterCount) {
            this.allParameterID.splice(0, 0, -1);
            this.parameterFC.patchValue(this.allParameterID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.parameterFC.patchValue(filteredSelected);
        }

        this.paramInpChange();
    }

    paramInpChange() {
        let paramMetric = this.parameterFC.value;

        if (paramMetric.length > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(paramMetric);
        }

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    async viewReport() {

        this.alertService.resetAlertProperties(this.reportAlertObj);

        if (this.isValidInputField()) {
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.startDate == this.endDate) {
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            return;
        }

        this.showLoader = true;

        try {
            const requestData = this.createDataRequest();

            this.reportData = await this.aggregateDataService.getAggregateData(this.orgID, requestData);

            if (this.reportData?.length > 0 && !this.reportData?.every(item => item.data.length == 0)) {
                this.timestamp = this.reportService.extractTimestamp(this.reportData);
                this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.DateFormatEnum.DATE_TIME);
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

        if (this.isValidInputField()) {
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.startDate == this.endDate) {
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            return;
        }

        this.showLoader = true;

        try {
            const requestData = new DownloadReportRequest();

            requestData.request = this.createDataRequest();
            requestData.reportName = this.pageTitle;
            requestData.reportFormat = format;

            await this.reportService.downloadReport(this.orgID, requestData);

        } catch (error) {
            console.error("Error in downloadReport()", error);
        } finally {
            this.showLoader = false;
        }
    }

    createDataRequest() {

        let parameter;

        if (this.parameterFC.value?.length > 0) {
            parameter = this.tscCommonService.removeSelectAllID(this.parameterFC.value);
        }

        const requestData = new AggregateDataRequest();

        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.params = parameter.map(param => ({
            name: param,
            dsAgg: "sum",
            agg: "sum",
            source_or_load: "source",
            sourceLoadType: 'all'
        }));
        requestData.nullifyParams();

        return requestData;
    }

    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.parameterFC
        ];

        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }

    scheduleReport(value) {
        if (value) {
            const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'water' : 'energy';
            this.router.navigate([`schedule-report/${applicationName}-sourcing`]);
        }
    }

}
