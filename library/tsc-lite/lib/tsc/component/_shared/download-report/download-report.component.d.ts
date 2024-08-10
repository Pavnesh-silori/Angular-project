import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { FileTypeEnum } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class DownloadReportComponent implements OnInit {
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
    materialConstant: {
        MAT_RIPPLE_CENTER: boolean;
    };
    fileTypeEnum: typeof FileTypeEnum;
    excludeFileTypeInp: FileTypeEnum;
    fileTypeEmitted: EventEmitter<string>;
    excludeFileType: string;
    constructor();
    ngOnInit(): void;
    onChange(selectedType: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DownloadReportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DownloadReportComponent, "lib-download-report", never, { "excludeFileTypeInp": "excludeFileTypeInp"; }, { "fileTypeEmitted": "fileTypeEmitted"; }, never, never>;
}
