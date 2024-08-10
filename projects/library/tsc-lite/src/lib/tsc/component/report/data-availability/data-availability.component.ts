import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
import { ReportErrorEnum } from '../../../enum/error.enum';

import { Alert, AlertM } from '../../../model/alert.model';
import { DownloadReportRequest } from '../../../model/report.model';
import { DataAvailability, DataAvailabilityM } from '../../../model/data-availability.model';

import { EntityComponent } from '../../dropdown/entity/entity.component';
import { DeviceComponent } from '../../dropdown/device/device.component';
import { ParamMetricComponent } from '../../dropdown/param-metric/param-metric.component';

import { DataAvailabilityController } from '../../../controller/data-availability.controller';

import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';

// tsc-library
import { DateFormatEnum, DateInputTypeEnum, DateTypeEnum, DateService, FrequencyEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, FREQUENCY_CONSTANT, FormErrorEnum, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum, TSCCommonService } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-data-availability',
    templateUrl: './data-availability.component.html',
    styles: [
    ]
})
export class DataAvailabilityReportComponent implements OnInit {

    materialConstant = MATERIAL_CONSTANT;
    commonConstant = COMMON_CONSTANT;
    frequencyConstant = FREQUENCY_CONSTANT;

    materialFormFieldAppearance = MaterialFormFieldAppearance;
    buttonLabelEnum = ButtonLabelEnum;
    dropdownTypeEnum = DropdownTypeEnum;
    dateFormatEnum = DateFormatEnum;
    dateInputTypeEnum = DateInputTypeEnum;
    dateTypeEnum = DateTypeEnum;
    frequencyEnum = FrequencyEnum;
    FormErrorEnum = FormErrorEnum;

    orgID: any;
    timezone: string;
    startDate: string;
    endDate: string;
    entityID: any;
    deviceID: any;
    parameterList: any[] = [];
    timestamp: any;
    renderTable: any;
    dayDifference: any;
    showAlert: boolean = false;
    showLoader: boolean = false;
    format = DateFormatEnum.DATE_TIME;

    dateType: any;
    frequency: any[] = [];
    defaultFrequency: string;
    selectedFrequency: string;

    dataAvailabilityM = [new DataAvailability()];

    reportAlertObj: AlertM = new Alert();

    aggDurationFC: FormControl = new FormControl('day_1', [Validators.required]);

    @ViewChild('entityInput') entityInput: EntityComponent;
    @ViewChild('deviceInput') deviceInput: DeviceComponent;
    @ViewChild('paramInput') paramInput: ParamMetricComponent;

    constructor(
        private storageService: StorageService,
        private toastService: ToastrService,
        private tscCommonService: TSCCommonService,
        private dataAvailabilityController: DataAvailabilityController,
        public dateService: DateService,
        private reportService: ReportService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');

        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM' && frequency.keyID != 'YEARLY');
        this.defaultFrequency = this.frequencyEnum.DAILY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }

    dateFilterEmitted(data: any) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.selectedFrequency = data.frequency;

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    aggDurationChange(selectedAD) {
        this.aggDurationFC.patchValue(selectedAD);

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    entityInpChange() {
        this.entityID = this.entityInput.entityFC.value;

        this.paramInput?.parameterFC.reset();
        this.paramInput?.parameterFC.updateValueAndValidity();

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    deviceInpChange() {
        this.deviceID = this.deviceInput.deviceFC.value;

        this.paramInput?.parameterFC.reset();
        this.paramInput?.parameterFC.updateValueAndValidity();

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    paramInpChange() {
        let paramMetric = this.paramInput?.parameterFC.value;

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

        try {
            this.showLoader = true;
            const requestData = this.createDataRequest();

            this.dataAvailabilityController.getDataAvailability(this.orgID, requestData)
                .subscribe((res: DataAvailabilityM[]) => {
                    if (res?.length > 0) {
                        this.dataAvailabilityM = res;
                    } else {
                        this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                    }
                },
                    error => {
                        console.log('error in getDataAvailability() - ', error);
                        throw error;
                    });

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

        try {
            this.showLoader = true;
            const requestData = new DownloadReportRequest();

            requestData.request = this.createDataRequest();
            requestData.reportName = 'Data Availability Report';
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

        if (this.paramInput.parameterFC.value?.length > 0) {
            parameter = this.tscCommonService.removeSelectAllID(this.paramInput.parameterFC.value);
        }

        let requestData = {};

        requestData['startTime'] = this.startDate;
        requestData['endTime'] = this.endDate;
        requestData['interval'] = this.aggDurationFC.value;
        requestData['entityID'] = this.entityInput.entityFC.value;
        requestData['deviceID'] = this.deviceInput.deviceFC.value;
        requestData['parameters'] = parameter;

        return requestData;
    }

    isValidInputField() {
        const controls = [
            this.entityInput.entityFC,
            this.deviceInput.deviceFC,
            this.paramInput.parameterFC
        ];

        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }

}