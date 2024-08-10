import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EChartsOption } from 'echarts';
import { Parameter } from '../../../../model/parameter.model';
import { ParameterService } from '../../../../service/parameter.service';
import { AggregateDataService } from '../../../../service/aggregate-data.service';
import { DialogEnum, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import { DateService, DateTimeIntervalEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class TrendComponent implements OnInit {
    private dialogRef;
    data: any;
    private storageService;
    private dateService;
    private parameterService;
    private aggregateDataService;
    private tscCommonService;
    private dialog;
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
    noDataOption: any;
    renderFlag: string;
    chartDataOption: EChartsOption;
    parameterM: Parameter[];
    dateRangeFC: FormControl;
    constructor(dialogRef: MatDialogRef<TrendComponent>, data: any, storageService: StorageService, dateService: DateService, parameterService: ParameterService, aggregateDataService: AggregateDataService, tscCommonService: TSCCommonService, dialog: MatDialog);
    ngOnInit(): void;
    getParameterByLayoutID(): Promise<void>;
    dateRangeChange(selectedDateRange: any): void;
    chartDataCheck(): void;
    getCounterParameter(paramMetricValue: any): any;
    getTrendData(): Promise<void>;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendComponent, "lib-trend", never, {}, {}, never, never>;
}
