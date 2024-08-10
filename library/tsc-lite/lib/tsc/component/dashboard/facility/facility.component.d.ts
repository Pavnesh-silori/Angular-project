import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrgRecentData } from '../../../model/recent-data.model';
import { AlertM } from '../../../model/alert.model';
import { RecentDataService } from '../../../service/recent-data.service';
import { TrendService } from '../../../service/trend.service';
import { AlertService } from '../../../service/alert.service';
import { DateService } from '@library/date';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class FacilityComponent implements OnInit {
    private router;
    private storageService;
    dateService: DateService;
    private trendService;
    private recentDataService;
    private alertService;
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
    orgID: any;
    timezone: any;
    apiTimer: any;
    showLoader: boolean;
    orgRecentDataM: OrgRecentData[];
    alertObj: AlertM;
    constructor(router: Router, storageService: StorageService, dateService: DateService, trendService: TrendService, recentDataService: RecentDataService, alertService: AlertService);
    ngOnInit(): void;
    getOrgRecentData(): Promise<void>;
    showEntityConsumption(id: any, name: any): void;
    showTrend(paramMetric: any, deviceID: any, entityID: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FacilityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FacilityComponent, "app-facility", never, {}, {}, never, never>;
}
