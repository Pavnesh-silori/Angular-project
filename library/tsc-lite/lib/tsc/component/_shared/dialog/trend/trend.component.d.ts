import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Parameter } from '../../../../model/parameter.model';
import { ParameterService } from '../../../../service/parameter.service';
import { AggregateDataService } from '../../../../service/aggregate-data.service';
import { DialogEnum, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import { DateService, DateTimeIntervalEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { BasicAreaLineBarChart, ChartTitle } from '@library/echart';
import * as i0 from "@angular/core";
export declare class TrendComponent implements OnInit {
    data: any;
    private storageService;
    private dateService;
    private parameterService;
    private aggregateDataService;
    private tscCommonService;
    listConstant: {
        CONDITION: {
            label: string;
            value: string;
        }[];
        EMAIL_FREQUENCY: {
            label: string;
            value: string;
        }[];
        SMS_FREQUENCY: {
            label: string;
            value: string;
        }[];
        ESCALATION_FREQUENCY: {
            label: string;
            value: string;
        }[];
        ALERT_RULE_FREQUENCY: {
            label: string;
            value: string;
        }[];
        TREND_DATE_RANGE: {
            label: string;
            value: string;
        }[];
        AGGREGATION_DURATION: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        AGGREGATION: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        DOWNLOAD_TYPE: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        SOURCE_LOAD: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        HOURLY_NOTIFICATION_FREQUENCY: [{
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }];
        HOURLY_REMINDER_FREQUENCY: [{
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }];
        ENERGY_APP_SCHEDULE_REPORT_TYPE: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        WATER_APP_SCHEDULE_REPORT_TYPE: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
    };
    materialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    dateTimeIntervalEnum: typeof DateTimeIntervalEnum;
    dialogEnum: typeof DialogEnum;
    orgID: any;
    trendData: any;
    startTime: any;
    endTime: any;
    interval: any;
    paramLabel: any;
    parameterM: Parameter[];
    chartType: string;
    viewStateFlag: string;
    chartTitle: ChartTitle;
    chartData: BasicAreaLineBarChart;
    dateRangeFC: FormControl;
    constructor(data: any, storageService: StorageService, dateService: DateService, parameterService: ParameterService, aggregateDataService: AggregateDataService, tscCommonService: TSCCommonService);
    ngOnInit(): void;
    getParameterByLayoutID(): Promise<void>;
    dateRangeChange(selectedDateRange: any): void;
    getCounterParameter(paramMetricValue: any): any;
    getTrendData(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendComponent, "lib-trend", never, {}, {}, never, never>;
}
