import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DevicesWithEntities } from '../../../model/device.model';
import { Parameter } from '../../../model/parameter.model';
import { AlertM } from '../../../model/alert.model';
import { RecentDataService } from '../../../service/recent-data.service';
import { ParameterService } from '../../../service/parameter.service';
import { EntityDeviceService } from '../../../service/entity-device.service';
import { AlertService } from '../../../service/alert.service';
import { TrendService } from '../../../service/trend.service';
import { StorageService } from '@library/storage-service';
import { MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { DateService } from '@library/date';
import * as i0 from "@angular/core";
export declare class MeterDataDashboardComponent implements OnInit {
    private storageService;
    private recentDataService;
    private entityDeviceService;
    private parameterService;
    private alertService;
    dateService: DateService;
    private trendService;
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
    materialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    orgID: any;
    applicationKeyID: any;
    paramMetric: any;
    entityID: any;
    timezone: string;
    meterDataRes: any;
    apiTimer: any;
    showAlert: boolean;
    showLoader: boolean;
    entityDeviceM: DevicesWithEntities[];
    parameterM: Parameter[];
    alertObj: AlertM;
    meterFC: FormControl;
    meterSearchUtil: MatSelectSearchService;
    constructor(storageService: StorageService, recentDataService: RecentDataService, entityDeviceService: EntityDeviceService, parameterService: ParameterService, alertService: AlertService, dateService: DateService, trendService: TrendService);
    ngOnInit(): void;
    getDevicesWithEntitiesByParameter(): Promise<void>;
    meterChange(selectedMeter: any): void;
    getParameterList(): void;
    getParametersByDeviceID(deviceID: any): Promise<void>;
    getRecentMeterData(deviceID: any): Promise<void>;
    showTrend(paramMetric: any, entityID: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MeterDataDashboardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MeterDataDashboardComponent, "lib-meter-data", never, {}, {}, never, never>;
}
