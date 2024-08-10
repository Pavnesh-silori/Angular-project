import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as moment from 'moment';

import { LIST_CONSTANT } from '../../../../constant/list.constant';

import { AggregateDataRequest } from '../../../../model/aggregate-data.model';
import { Parameter, ParameterM } from '../../../../model/parameter.model';

import { ParameterService } from '../../../../service/parameter.service';
import { AggregateDataService } from '../../../../service/aggregate-data.service';

// tsc-library
import { DialogEnum, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import { DateService, DateTimeIntervalEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ChartViewStateEnum, BasicAreaLineBarChart, ChartTypeEnum, ChartTitle } from '@library/echart';
// /tsc-library/

@Component({
    selector: 'lib-trend',
    templateUrl: './trend.component.html',
    styles: [
    ]
})

export class TrendComponent implements OnInit {

    listConstant = LIST_CONSTANT;

    materialFormFieldAppearance = MaterialFormFieldAppearance;
    dateTimeIntervalEnum = DateTimeIntervalEnum;
    dialogEnum = DialogEnum;

    orgID: any;
    trendData: any;
    startTime: any;
    endTime: any;
    interval: any;
    paramLabel: any;
    parameterM = [new Parameter()];

    chartType: string = ChartTypeEnum.BASIC_AREA_CHART;
    viewStateFlag: string = ChartViewStateEnum.LOADING;
    chartTitle = new ChartTitle();
    chartData = new BasicAreaLineBarChart();

    dateRangeFC: FormControl = new FormControl('LAST_24_HRS', Validators.required);

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private storageService: StorageService,
        private dateService: DateService,
        private parameterService: ParameterService,
        private aggregateDataService: AggregateDataService,
        private tscCommonService: TSCCommonService,
    ) {
        this.trendData = data['trendData'];
    }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.dateRangeChange(this.dateRangeFC.value);
        this.getParameterByLayoutID();
    }

    async getParameterByLayoutID() {
        this.parameterM = <ParameterM[]>await this.parameterService.getParameterByLayoutID(this.orgID);
    }

    dateRangeChange(selectedDateRange) {

        this.startTime = this.dateService.getStartDateTime(selectedDateRange);

        switch (selectedDateRange) {
            case DateTimeIntervalEnum.LAST_24_HRS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
                this.interval = 'min_15';
                break;

            case DateTimeIntervalEnum.LAST_7_DAYS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_DAY);
                this.interval = 'hour_1';
                break;

            case DateTimeIntervalEnum.LAST_30_DAYS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_DAY);
                this.interval = 'day_1';
                break;
            default:
                this.endTime = null;
                this.interval = null;
                break;
        }

        this.getTrendData();
    }

    getCounterParameter(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
        return parameter ? parameter.isCounter : false;
    }

    async getTrendData() {

        this.viewStateFlag = ChartViewStateEnum.LOADING;

        try {
            let requestData = new AggregateDataRequest();

            const isCounterParameter = this.getCounterParameter(this.trendData?.paramMetric);

            requestData.interval = this.interval;
            requestData.entityID = this.trendData?.entityID ? [this.trendData.entityID] : null;
            requestData.deviceID = this.trendData?.deviceID ? [this.trendData.deviceID] : null;
            requestData.entityType = this.trendData?.entityType;

            requestData.params = [
                {
                    name: this.trendData.paramMetric,
                    dsAgg: "avg",
                    agg: "avg",
                    sourceLoadType: isCounterParameter ? "all" : null,
                    source_or_load: isCounterParameter ? "source" : null,
                }
            ];
            requestData.nullifyParams();

            requestData.startTime = this.startTime;
            requestData.endTime = this.endTime;

            const trendRes = await this.aggregateDataService.getAggregateData(this.orgID, requestData);

            if (trendRes?.[0]?.data.length > 0) {
                this.paramLabel = trendRes?.[0].paramLabel;

                this.chartData.metaData = trendRes?.[0].data.map(item => ({
                    name: moment(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                    value: item.value
                }));

                this.chartData.unit = {
                    name: '',
                    code: trendRes?.[0].unit,
                };

                this.chartData.yAxisLabel = trendRes?.[0].paramLabel + ' (' + trendRes?.[0].unit + ')';
                this.chartData.showDataZoomSlider = true;
                this.chartData.showDataView = true;
                this.chartData.showMagicType = true;
                this.chartData.showRestore = true;
                this.chartData.showDownloadImage = true;

                this.viewStateFlag = ChartViewStateEnum.HAS_DATA;

            } else {
                this.viewStateFlag = ChartViewStateEnum.NO_DATA;
            }

        } catch (error) {
            this.viewStateFlag = ChartViewStateEnum.NO_DATA;

            console.error(`Error in getTrendData()`, error);
        }
    }

}
