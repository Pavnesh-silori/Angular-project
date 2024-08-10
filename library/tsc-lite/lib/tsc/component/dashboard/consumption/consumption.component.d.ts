import { OnInit } from '@angular/core';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { AggregateDataService } from '../../../service/aggregate-data.service';
import { StorageService } from '@library/storage-service';
import { MaterialFormFieldAppearance } from '@library/tsc-common';
import { FrequencyEnum } from '@library/date';
import * as i0 from "@angular/core";
export declare class ConsumptionComponent implements OnInit {
    private storageService;
    private aggregateDataService;
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
    paramMetric: string;
    frequency: any[];
    defaultFrequency: string;
    startDate: any;
    endDate: any;
    selectedFrequency: any;
    interval: any;
    constructor(storageService: StorageService, aggregateDataService: AggregateDataService);
    ngOnInit(): void;
    dateFilterEmitted(data: any): void;
    getConsumptionData(): Promise<void>;
    createDataRequest(): AggregateDataRequest;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsumptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConsumptionComponent, "app-consumption", never, {}, {}, never, never>;
}
