import { OnInit } from '@angular/core';
import { AggregateDataService } from '../../../service/aggregate-data.service';
import { StorageService } from '@library/storage-service';
import { MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import { FrequencyEnum } from '@library/date';
import * as i0 from "@angular/core";
export declare class BalanceComponent implements OnInit {
    private storageService;
    private aggregateDataService;
    tscCommonService: TSCCommonService;
    commonConstant: {
        PRIVACY: string;
        TERMS: string;
        PRICING: string;
        SUPPORT_EMAIL: string;
        HYPHEN: string;
        NO_DATA_FOUND: string;
        NO_DATA: string;
        EMAIL_PATTERN: string;
        ZIPCODE_PATTERN: string;
        GST_NUMBER_PATTERN: string;
        ALLOWED_IMAGE_TYPES: string[];
        MAX_IMAGE_SIZE: number;
    };
    frequencyConstant: {
        name: string;
        keyID: string;
    }[];
    frequencyEnum: typeof FrequencyEnum;
    formFieldAppearance: MaterialFormFieldAppearance;
    dateType: any;
    orgID: any;
    applicationKeyID: any;
    timezone: any;
    label: string;
    paramMetric: string;
    frequency: any[];
    defaultFrequency: string;
    startDate: any;
    endDate: any;
    selectedFrequency: any;
    interval: any;
    showLoader: boolean;
    constructor(storageService: StorageService, aggregateDataService: AggregateDataService, tscCommonService: TSCCommonService);
    ngOnInit(): void;
    dateFilterEmitted(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BalanceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BalanceComponent, "lib-balance", never, {}, {}, never, never>;
}
