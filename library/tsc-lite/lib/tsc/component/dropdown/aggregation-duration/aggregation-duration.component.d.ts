import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaterialFormFieldAppearance } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class AggregationDurationComponent implements OnInit {
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
    aggDurationFC: FormControl;
    emitFilter: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onChange(selectedAD: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregationDurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregationDurationComponent, "lib-aggregation-duration", never, {}, { "emitFilter": "emitFilter"; }, never, never>;
}
