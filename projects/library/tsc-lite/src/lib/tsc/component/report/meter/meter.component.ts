import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ReportErrorEnum } from '../../../enum/error.enum';

import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { DevicesWithEntities, DevicesWithEntitiesM } from '../../../model/device.model';
import { Alert, AlertM } from '../../../model/alert.model';
import { DownloadReportRequest } from '../../../model/report.model';

import { AggregationDurationComponent } from '../../dropdown/aggregation-duration/aggregation-duration.component';
import { ParamMetricComponent } from '../../dropdown/param-metric/param-metric.component';

import { EntityDeviceService } from '../../../service/entity-device.service';
import { AggregateDataService } from '../../../service/aggregate-data.service';
import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';

// tsc-library
import { CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, FormErrorEnum, InvalidForm, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum, TSCCommonService } from '@library/tsc-common';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-meter',
    templateUrl: './meter.component.html',
    styles: [
    ]
})
export class MeterReportComponent implements OnInit {

    materialConstant = MATERIAL_CONSTANT;
    commonConstant = COMMON_CONSTANT;
    customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;

    materialFormFieldAppearance = MaterialFormFieldAppearance;
    buttonLabelEnum = ButtonLabelEnum;
    dateFormatEnum = DateFormatEnum;
    dateInputTypeEnum = DateInputTypeEnum;
    dateTypeEnum = DateTypeEnum;
    FormErrorEnum = FormErrorEnum;

    orgID: any;
    applicationKeyID: any;
    paramMetric: any;
    timezone: string;
    startDate: string;
    endDate: string;
    aggDuration: string;
    entityID: any;
    parameterList: any[] = [];
    timestamp: any;
    renderTable: any;
    reportData: any;
    showAlert: boolean = false;
    showLoader: boolean = false;

    entityDeviceM = [new DevicesWithEntities()];
    reportAlertObj: AlertM = new Alert();

    meterFC: FormControl = new FormControl();

    meterSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild('customDateInput') customDateInput: DateInputComponent;
    @ViewChild('aggDurationInput') aggDurationInput: AggregationDurationComponent;
    @ViewChild('paramInput') paramInput: ParamMetricComponent;

    constructor(
        private storageService: StorageService,
        private toastService: ToastrService,
        private tscCommonService: TSCCommonService,
        private entityDeviceService: EntityDeviceService,
        private aggregateDataService: AggregateDataService,
        private reportService: ReportService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');

        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        } else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }

        this.getDevicesWithEntitiesByParameter();
    }

    async getDevicesWithEntitiesByParameter() {
        this.entityDeviceM = <DevicesWithEntitiesM[]>await this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric);

        this.meterSearchUtil.entityArr = this.entityDeviceM;
        this.meterSearchUtil.createSubscription();

        if (this.entityDeviceM.length > 0 && this.entityDeviceM?.[0]?.id) {
            const deviceID = this.entityDeviceM?.[0]?.['devices']?.[0]?.['id'];
            this.meterFC.patchValue(deviceID);
            this.entityID = this.getEntityIDByDeviceID(deviceID);
        }
    }

    meterChange(selectedMeter) {
        this.paramInput?.parameterFC.reset();
        this.paramInput?.parameterFC.updateValueAndValidity();

        this.meterFC.patchValue(selectedMeter);
        this.entityID = this.getEntityIDByDeviceID(selectedMeter);
    }

    getEntityIDByDeviceID(deviceID) {
        for (const entity of this.entityDeviceM) {
            for (const device of entity.devices) {
                if (device.id == deviceID) {
                    return entity.id;
                }
            }
        }
        return null;
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

        this.showLoader = true;

        try {
            const requestData = this.createDataRequest();

            this.reportData = await this.aggregateDataService.getAggregateData(this.orgID, requestData);

            if (this.reportData?.length > 0 && !this.reportData?.every(item => item.data.length == 0) ) {
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
            requestData.reportName = 'Meter Report';
            requestData.reportFormat = format;

            await this.reportService.downloadReport(this.orgID, requestData);

        } catch (error) {
            console.error("Error in downloadReport()", error);
        } finally {
            this.showLoader = false;
        }
    }

    createDataRequest() {

        const requestData = new AggregateDataRequest();

        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityID = [this.entityID];
        requestData.deviceID = [this.meterFC.value];
        requestData.params = [];
        for (const paramMetric of this.parameterList) {
            requestData.params.push({
                name: paramMetric,
                dsAgg: "avg",
                agg: "avg"
            });
        }
        requestData.nullifyParams();

        return requestData;
    }

    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.meterFC,
            this.paramInput.parameterFC
        ];

        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }

}
