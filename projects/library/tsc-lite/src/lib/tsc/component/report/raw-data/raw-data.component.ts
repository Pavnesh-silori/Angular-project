import { Component, OnInit, ViewChild } from '@angular/core';

import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
import { ReportErrorEnum } from '../../../enum/error.enum';

import { Parameter, ParameterM } from '../../../model/parameter.model';
import { Alert, AlertM } from '../../../model/alert.model';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { DownloadReportRequest } from '../../../model/report.model';

import { EntityComponent } from '../../dropdown/entity/entity.component';
import { DeviceComponent } from '../../dropdown/device/device.component';

import { AggregateDataService } from '../../../service/aggregate-data.service';
import { ParameterService } from '../../../service/parameter.service';
import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';

// tsc-library
import { CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
// /tsc-library/


@Component({
    selector: 'lib-raw-data',
    templateUrl: './raw-data.component.html',
    styles: [
    ]
})
export class RawDataReportComponent implements OnInit {

    materialConstant = MATERIAL_CONSTANT;
    commonConstant = COMMON_CONSTANT;
    customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;

    materialFormFieldAppearance = MaterialFormFieldAppearance;
    buttonLabelEnum = ButtonLabelEnum;
    dropdownTypeEnum = DropdownTypeEnum;
    dateFormatEnum = DateFormatEnum;
    dateInputTypeEnum = DateInputTypeEnum;
    dateTypeEnum = DateTypeEnum;

    orgID: any;
    timezone: string;
    startDate: string;
    endDate: string;
    entityID: any;
    deviceID: any;
    dayDifference: any;
    timestamp: any;
    renderTable: any;
    reportData: any;
    showAlert: boolean = false;
    showLoader: boolean = false;

    parameterM = [new Parameter()];
    reportAlertObj: AlertM = new Alert();

    @ViewChild('customDateInput') customDateInput: DateInputComponent;
    @ViewChild('entityInput') entityInput: EntityComponent;
    @ViewChild('deviceInput') deviceInput: DeviceComponent;

    constructor(
        private storageService: StorageService,
        private toastService: ToastrService,
        private aggregateDataService: AggregateDataService,
        private parameterService: ParameterService,
        private reportService: ReportService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
    }

    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    entityInpChange() {
        this.entityID = this.entityInput.entityFC.value;

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    deviceInpChange() {
        this.deviceID = this.deviceInput.deviceFC.value;

        if (this.deviceID) {
            this.getParameterByDeviceID(this.deviceID);
        }

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    async getParameterByDeviceID(deviceID) {
        let requestBody = {};
        requestBody['deviceID'] = [deviceID];

        this.parameterM = <ParameterM[]>await this.parameterService.getParameterByDeviceID(this.orgID, requestBody);
    }

    async viewReport() {

        this.alertService.resetAlertProperties(this.reportAlertObj);

        if (!this.parameterM || this.parameterM.length == 0 || !this.parameterM[0]['id']) {
            await this.getParameterByDeviceID(this.deviceID);
        }

        if (this.isValidInputField()) {
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.startDate == this.endDate) {
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            return;
        }

        this.dayDifference = this.getTimeDifference(this.startDate, this.endDate);

        if (this.dayDifference <= 1) {

            try {
                this.showLoader = true;

                const requestData = this.createDataRequest();

                this.reportData = await this.aggregateDataService.getAggregateData(this.orgID, requestData);

                if (this.reportData?.length > 0 && !this.reportData?.every(item => item.data.length == 0)) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                } else {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }

            } catch (error) {
                console.error("Error in viewReport()", error);
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            } finally {
                this.showLoader = false;
            }

        } else {
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.TIME_EXCEEDED_LABEL, ReportErrorEnum.HOUR_24_TIME_EXCEEDED_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
        }

    }

    async downloadReport(format: string) {
        this.alertService.resetAlertProperties(this.reportAlertObj);

        if (!this.parameterM || this.parameterM.length == 0 || !this.parameterM[0]['id']) {
            await this.getParameterByDeviceID(this.deviceID);
        }

        if (this.isValidInputField()) {
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.startDate == this.endDate) {
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            return;
        }

        this.dayDifference = this.getTimeDifference(this.startDate, this.endDate);

        if (this.dayDifference <= 1) {
            try {
                const requestData = new DownloadReportRequest();

                requestData.request = this.createDataRequest();
                requestData.reportName = 'Parameter Report';
                requestData.reportFormat = format;

                await this.reportService.downloadReport(this.orgID, requestData);

            } catch (error) {
                console.error("Error in downloadReport()", error);
            } finally {
                this.showLoader = false;
            }
        } else {
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.TIME_EXCEEDED_LABEL, ReportErrorEnum.HOUR_24_TIME_EXCEEDED_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
        }
    }

    createDataRequest() {
        const requestData = new AggregateDataRequest();

        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = "raw";
        requestData.entityID = [this.entityID];
        requestData.deviceID = [this.deviceID];

        requestData.params = this.parameterM.map(param => ({
            name: param.paramMetric,
            dsAgg: 'avg',
            agg: 'avg'
        }));
        requestData.nullifyParams();

        return requestData;
    }

    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.entityInput.entityFC,
            this.deviceInput.deviceFC,
        ];

        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }

    getTimeDifference(startTime: string, endTime: string): number {
        const date1 = new Date(startTime).getTime();
        const date2 = new Date(endTime).getTime();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

}
