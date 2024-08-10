import { Component, OnInit, ViewChild } from '@angular/core';

import { ReportErrorEnum } from '../../../enum/error.enum';
import { DropdownTypeEnum } from '../../../enum/dropdown.enum';

import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { Alert, AlertM } from '../../../model/alert.model';
import { DownloadReportRequest } from '../../../model/report.model';

import { SourceLoadComponent } from '../../_shared/filter/source-load/source-load.component';
import { AggregationDurationComponent } from '../../dropdown/aggregation-duration/aggregation-duration.component';
import { EntityComponent } from '../../dropdown/entity/entity.component';

import { AggregateDataService } from '../../../service/aggregate-data.service';
import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';

// tsc-library
import { CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum, TSCCommonService } from '@library/tsc-common';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-consumption-breakup',
    templateUrl: './consumption-breakup.component.html',
    styles: [
    ]
})

export class ConsumptionBreakupComponent implements OnInit {

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
    applicationKeyID: any;
    paramMetric: any;
    timezone: string;
    category: string;
    startDate: string;
    endDate: string;
    aggDuration: string;
    entityID: any;
    timestamp: any;
    renderTable: any;
    reportData: any;
    showAlert: boolean = false;
    showLoader: boolean = false;

    reportAlertObj: AlertM = new Alert();

    @ViewChild('sourceLoadInput') sourceLoadInput: SourceLoadComponent;
    @ViewChild('customDateInput') customDateInput: DateInputComponent;
    @ViewChild('aggDurationInput') aggDurationInput: AggregationDurationComponent;
    @ViewChild('entityInput') entityInput: EntityComponent;

    constructor(
        private storageService: StorageService,
        private toastService: ToastrService,
        private tscCommonService: TSCCommonService,
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
    }

    sourceLoadInpChange() {
        this.category = this.sourceLoadInput.categoryFC.value;
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
        this.entityID = this.entityInput.multipleEntityFC.value;

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

    createDataRequest() {

        if (this.entityID?.length > 0) {
            this.entityID = this.tscCommonService.removeSelectAllID(this.entityID);
        }

        const requestData = new AggregateDataRequest();

        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityID = this.entityID;
        requestData.params = [
            {
                name: this.paramMetric,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: this.category,
                sourceLoadType: 'all'
            }
        ];
        requestData.nullifyParams();

        return requestData;
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
            requestData.reportName = 'Consumption Breakup Report';
            requestData.reportFormat = format;

            await this.reportService.downloadReport(this.orgID, requestData);

        } catch (error) {
            console.error("Error in downloadReport()", error);
        } finally {
            this.showLoader = false;
        }
    }

    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityInput.multipleEntityFC,
        ];

        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }

}