import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import * as moment from 'moment';

import { DashboardErrorEnum, ReportErrorEnum } from '../../../../enum/error.enum';

import { Parameter, ParameterM } from '../../../../model/parameter.model';
import { Alert, AlertM } from '../../../../model/alert.model';
import { AggregateDataRequest } from '../../../../model/aggregate-data.model';

import { AggregationDurationComponent } from '../../../dropdown/aggregation-duration/aggregation-duration.component';
import { EntityTypeComponent } from '../../../dropdown/entity-type/entity-type.component';

import { ParameterController } from '../../../../controller/parameter.controller';

import { AggregateDataService } from '../../../../service/aggregate-data.service';
import { AlertService } from '../../../../service/alert.service';
import { ParameterService } from '../../../../service/parameter.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, COMMON_CONSTANT, FormErrorEnum, InvalidForm, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum, TSCCommonService } from '@library/tsc-common';
import { CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { BasicAreaLineBarChart, ChartTitle, ChartTypeEnum, ChartViewStateEnum } from '@library/echart';
// /tsc-library/

@Component({
    selector: 'lib-by-parameter',
    templateUrl: './by-parameter.component.html',
    styles: [
    ]
})
export class ByParameterComponent implements OnInit {

    materialConstant = MATERIAL_CONSTANT;
    commonConstant = COMMON_CONSTANT;
    customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;

    buttonLabelEnum = ButtonLabelEnum;
    materialFormFieldAppearance = MaterialFormFieldAppearance;
    dateFormatEnum = DateFormatEnum;
    dateInputTypeEnum = DateInputTypeEnum;
    dateTypeEnum = DateTypeEnum;
    FormErrorEnum = FormErrorEnum;

    orgID: any;
    timezone: string;
    startDate: string;
    endDate: string;
    aggDuration: string;
    entityType: string;
    entityID: any;
    showAlert: boolean = false;
    showLoader: boolean = false;

    parameterM = [new Parameter()];
    parameterByEntityTypeM = [new Parameter()];
    alertObj: AlertM = new Alert();

    parameterFC: FormControl = new FormControl('', [Validators.required]);
    parameterSearchUtil: MatSelectSearchService = new MatSelectSearchService(['label']);

    chartType: string = ChartTypeEnum.BASIC_LINE_CHART;
    viewStateFlag: string = ChartViewStateEnum.LOADING;
    chartTitle = new ChartTitle();
    chartData: BasicAreaLineBarChart[] = [];

    @ViewChild('customDateInput') customDateInput: DateInputComponent;
    @ViewChild('aggDurationInput') aggDurationInput: AggregationDurationComponent;
    @ViewChild('entityTypeInput') entityTypeInput: EntityTypeComponent;

    constructor(
        private storageService: StorageService,
        private alertService: AlertService,
        private toastService: ToastrService,
        private parameterController: ParameterController,
        private parameterService: ParameterService,
        private aggregateDataService: AggregateDataService,
        private tscCommonService: TSCCommonService,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
    }

    async getParameterByLayoutID() {
        this.parameterM = <ParameterM[]>await this.parameterService.getParameterByLayoutID(this.orgID);
    }

    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }

    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
    }

    entityTypeInpChange() {
        this.entityType = this.entityTypeInput.entityTypeFC.value;

        this.getParameterByEntityType(this.entityType);
    }

    getParameterByEntityType(entityType) {
        let requestBody = {};
        requestBody['entityType'] = [entityType];

        this.parameterController.getParameterByEntityType(this.orgID, requestBody)
            .subscribe((res: ParameterM[]) => {
                this.parameterByEntityTypeM = res;

                this.parameterSearchUtil.entityArr = this.parameterByEntityTypeM;
                this.parameterSearchUtil.createSubscription();
            },
                error => {
                    console.log('error in getParameterByEntityType() - ', error);
                });
    }

    onParameterChange(selectedParameter) {
        this.parameterFC.patchValue(selectedParameter);
    }

    async viewParameterData() {
        this.chartData = [];
        this.alertService.resetAlertProperties(this.alertObj);

        if (this.isValidInputField()) {
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.startDate == this.endDate) {
            this.alertService.setAlertProperties(this.alertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            return;
        }

        this.showLoader = true;

        try {
            const requestData = this.createDataRequest();
            const aggregateRes = await this.aggregateDataService.getAggregateData(this.orgID, requestData);

            this.showLoader = false;

            if (aggregateRes && aggregateRes.every(item => item.data.length == 0 )) {
                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
            } else {
                this.viewStateFlag = ChartViewStateEnum.HAS_DATA;
                this.chartData = [];

                aggregateRes.forEach((res) => {
                    if (res.data.length > 0) {

                        const newChartdata: BasicAreaLineBarChart = new BasicAreaLineBarChart();

                        newChartdata.metaData = res.data.map(item => ({
                            name: moment(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                            value: item.value
                        }));
                        newChartdata.unit = {
                            name: '',
                            code: res.unit,
                        };
                        newChartdata.yAxisLabel = res.paramLabel + ' (' + res.unit + ')';
                        newChartdata.showDataView = true;
                        newChartdata.showMagicType = true;
                        newChartdata.showRestore = true;
                        newChartdata.showDownloadImage = true;
                        newChartdata.chartTitle = {
                            name: res.entityName,
                            color: 'gray'
                        }

                        this.chartData.push(newChartdata);
                    }
                });
            }

        } catch (error) {

            console.error(`Error in getAggregateData()`, error);
            this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);

        } finally {
            this.showLoader = false;
        }
    }

    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityTypeInput.entityTypeFC,
            this.parameterFC
        ];

        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }

    createDataRequest() {

        const requestData = new AggregateDataRequest();

        const isCounterParameter = this.getCounterParameter(this.parameterFC.value);

        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityType = this.entityTypeInput.entityTypeFC.value;
        requestData.params = [
            {
                name: this.parameterFC.value,
                dsAgg: "avg",
                agg: "avg",
                sourceLoadType: isCounterParameter ? "all" : null,
                source_or_load: isCounterParameter ? "source" : null,
            }
        ];
        requestData.nullifyParams();

        return requestData;
    }

    getCounterParameter(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
        return parameter ? parameter.isCounter : false;
    }

}