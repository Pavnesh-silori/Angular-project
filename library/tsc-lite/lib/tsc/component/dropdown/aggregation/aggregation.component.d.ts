import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class AggregationComponent implements OnInit {
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
    FormErrorEnum: typeof FormErrorEnum;
    allAggregationIDs: any[];
    totalAggregationCount: number;
    aggregationFC: FormControl;
    emitFilter: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    selectAllAggregation(): void;
    selectedAggregation(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregationComponent, "lib-aggregation", never, {}, { "emitFilter": "emitFilter"; }, never, never>;
}
