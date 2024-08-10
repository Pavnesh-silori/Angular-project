import { Component, OnInit, ViewChild } from '@angular/core';

import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
import { ReportErrorEnum } from '../../../enum/error.enum';

import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { Parameter, ParameterM } from '../../../model/parameter.model';
import { Alert, AlertM } from '../../../model/alert.model';
import { DownloadReportRequest } from '../../../model/report.model';

import { AggregationDurationComponent } from '../../dropdown/aggregation-duration/aggregation-duration.component';
import { EntityComponent } from '../../dropdown/entity/entity.component';
import { DeviceComponent } from '../../dropdown/device/device.component';
import { ParamMetricComponent } from '../../dropdown/param-metric/param-metric.component';
import { AggregationComponent } from '../../dropdown/aggregation/aggregation.component';

import { AggregateDataService } from '../../../service/aggregate-data.service';
import { ParameterService } from '../../../service/parameter.service';
import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';

// tsc-library
import { CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum, TSCCommonService } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-parameter',
    templateUrl: './parameter.component.html',
    styles: [
    ]
})
export class ParameterReportComponent implements OnInit {

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
    aggDuration: string;
    entityID: any;
    deviceID: any;
    parameterList: any;
    timestamp: any;
    renderTable: any;
    reportData: any;
    paramMetric: any[] = [];
    metricListArray: any[] = [];
    showAlert: boolean = false;
    showLoader: boolean = false;

    parameterM = [new Parameter()];
    reportAlertObj: AlertM = new Alert();

    @ViewChild('customDateInput') customDateInput: DateInputComponent;
    @ViewChild('aggDurationInput') aggDurationInput: AggregationDurationComponent;
    @ViewChild('entityInput') entityInput: EntityComponent;
    @ViewChild('deviceInput') deviceInput: DeviceComponent;
    @ViewChild('paramInput') paramInput: ParamMetricComponent;
    @ViewChild('aggInput') aggInput: AggregationComponent;

    constructor(
        private storageService: StorageService,
        private toastService: ToastrService,
        private tscCommonService: TSCCommonService,
        private aggregateDataService: AggregateDataService,
        private parameterService: ParameterService,
        private reportService: ReportService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');

        this.getParameterByLayoutID();
    }

    async getParameterByLayoutID() {
        this.parameterM = <ParameterM[]>await this.parameterService.getParameterByLayoutID(this.orgID);
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

    entityInpChange() {
        this.entityID = this.entityInput.entityFC.value;

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    deviceInpChange() {
        this.deviceID = this.deviceInput.deviceFC.value;

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    paramInpChange() {
        this.paramMetric = this.paramInput?.parameterFC.value;

        if (this.paramMetric?.length > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(this.paramMetric);
        }

        this.alertService.resetAlertProperties(this.reportAlertObj);
    }

    aggInpChange(dsAgg?: any, metric?: any) {
        const metricList: any[] = [];

        if (dsAgg) {
            dsAgg.forEach(aggregation => {
                const metricObject = {
                    name: metric,
                    dsAgg: aggregation,
                    agg: "avg"
                };
                metricList.push(metricObject);
            });
        }

        this.metricListArray = this.metricListArray.filter(entry => entry.name != metric);

        this.metricListArray.push(...metricList);
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
            requestData.reportName = 'Parameter Report';
            requestData.reportFormat = format;

            await this.reportService.downloadReport(this.orgID, requestData);

        } catch (error) {
            console.error("Error in downloadReport()", error);
        } finally {
            this.showLoader = false;
        }
    }

    createDataRequest() {

        const filteredMetricListArray = this.metricListArray.filter(metric => this.parameterList.includes(metric.name));

        const requestData = new AggregateDataRequest();

        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityID = [this.entityID];
        requestData.deviceID = [this.deviceID];
        requestData.params = [];
        requestData.params.push(
            ...filteredMetricListArray.map(metric => ({
                name: metric.name,
                dsAgg: metric.dsAgg,
                agg: metric.agg,
            }))
        );
        requestData.nullifyParams();

        return requestData;
    }

    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityInput.entityFC,
            this.deviceInput.deviceFC,
            this.paramInput.parameterFC
        ];

        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }

    getParameterLabel(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'paramMetric', paramMetricValue);
        return parameter ? parameter.label : '';
    }

}