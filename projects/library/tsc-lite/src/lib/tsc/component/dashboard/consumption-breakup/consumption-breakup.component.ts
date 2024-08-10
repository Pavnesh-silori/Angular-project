import { Component, OnInit } from '@angular/core';

import { AggregateDataRequest } from '../../../model/aggregate-data.model';

import { AggregateDataService } from '../../../service/aggregate-data.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FREQUENCY_CONSTANT, TSCCommonService } from '@library/tsc-common';
import { DateTypeEnum, FrequencyEnum } from '@library/date';
import { ApplicationKeyID } from '@library/application-service';
import { ChartTitleM, ChartViewStateEnum, DoughnutChart } from '@library/echart';
// /tsc-library/

@Component({
    selector: 'lib-consumption-breakup',
    templateUrl: './consumption-breakup.component.html',
    styles: [
    ]
})
export class ConsumptionBreakupDashboardComponent implements OnInit {

    commonConstant = COMMON_CONSTANT;
    frequencyConstant = FREQUENCY_CONSTANT;
    frequencyEnum = FrequencyEnum;

    dateType: any;
    orgID: any;
    applicationKeyID: any;
    timezone: any;
    paramMetric: string;
    frequency: any[] = [];
    defaultFrequency: string;
    startDate: any;
    endDate: any;
    selectedFrequency: any;
    interval: any;
    orgSourceRes: any;
    orgConsumedRes: any;
    showLoader: boolean = true;

    viewStateFlagForSource: string = ChartViewStateEnum.LOADING;
    viewStateFlagForLoad: string = ChartViewStateEnum.LOADING;
    chartDataForSource = new DoughnutChart();
    chartDataForLoad = new DoughnutChart();

    chartTitleForSource: ChartTitleM = {
        name: 'Sourced',
        color: 'grey',
    };

    chartTitleForLoad: ChartTitleM = {
        name: 'Consumed',
        color: 'grey',
    };

    constructor(
        private storageService: StorageService,
        private aggregateDataService: AggregateDataService,
        public tscCommonService: TSCCommonService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');

        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        } else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }

        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }

    dateFilterEmitted(data: any) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        let selectedFrequency = data.frequency;

        if (selectedFrequency == this.frequencyEnum.DAILY) {
            this.interval = "day_1";
        } else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
            this.interval = "month_1";
        } else if (selectedFrequency == this.frequencyEnum.YEARLY) {
            this.interval = "year_1";
        }

        this.getOrgLevelSourceConsum("source").then(app => {
            this.orgSourceRes = app;
        })

        this.getOrgLevelSourceConsum("load").then(app => {
            this.orgConsumedRes = app;
        })

        this.getEntiyLevelConsumption();
    }

    async getOrgLevelSourceConsum(category: string) {
        try {
            const requestData = this.createDataRequest(category, true);

            const result = await this.aggregateDataService.getAggregateData(this.orgID, requestData);
            return result;

        } catch (error) {
            console.error(`Error in getOrgLevelSourceConsum(${category})`, error);
        } finally {
            this.showLoader = false;
        }
    }

    async getEntiyLevelConsumption() {
        await this.getEntityLevelSourceConsum("source");
        await this.getEntityLevelSourceConsum("load");
    }

    async getEntityLevelSourceConsum(category: string) {

        if (category == 'source') {
            this.viewStateFlagForSource = ChartViewStateEnum.LOADING;
        } else {
            this.viewStateFlagForLoad = ChartViewStateEnum.LOADING;
        }

        try {
            const requestData = this.createDataRequest(category, false);
            const result = await this.aggregateDataService.getAggregateData(this.orgID, requestData);

            if (result?.length > 0) {
                if (result?.every(item => item.data.length == 0)) {
                    if (category == 'source') {
                        this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
                    } else {
                        this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
                    }
                } else {
                    let chartData = new DoughnutChart();

                    chartData = {
                        showDataView: true,
                        showRestore: true,
                        showDownloadImage: true,
                        metaData: result.map(item => ({
                            name: item.sourceLoadType,
                            value: item.data?.[0]?.value,
                            unit: {
                                code: item.unit,
                            },
                        })),
                    };

                    if (category == 'source') {
                        this.chartDataForSource = chartData;
                        this.viewStateFlagForSource = ChartViewStateEnum.HAS_DATA;
                    } else {
                        this.chartDataForLoad = chartData;
                        this.viewStateFlagForLoad = ChartViewStateEnum.HAS_DATA;
                    }
                }

            } else {
                if (category == 'source') {
                    this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
                } else {
                    this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
                }
            }

        } catch (error) {
            if (category == 'source') {
                this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
            } else {
                this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
            }

            console.error(`Error in getEntityLevelSourceConsum(${category})`, error);
        }
    }

    createDataRequest(category: string, groupAll: boolean) {

        const requestData = new AggregateDataRequest();

        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.interval;
        requestData.params = [
            {
                name: this.paramMetric,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: category,
                sourceLoadType: "all"
            }
        ];
        requestData.nullifyParams();
        requestData.groupAll = groupAll;

        return requestData;
    }

}
