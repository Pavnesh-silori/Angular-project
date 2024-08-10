import { OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { Parameter } from '../../../model/parameter.model';
import { AlertM } from '../../../model/alert.model';
import { AggregationDurationComponent } from '../../dropdown/aggregation-duration/aggregation-duration.component';
import { EntityComponent } from '../../dropdown/entity/entity.component';
import { DeviceComponent } from '../../dropdown/device/device.component';
import { ParamMetricComponent } from '../../dropdown/param-metric/param-metric.component';
import { AggregationComponent } from '../../dropdown/aggregation/aggregation.component';
import { AggregateDataService } from '../../../service/aggregate-data.service';
import { ParameterService } from '../../../service/parameter.service';
import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class ParameterReportComponent implements OnInit {
    private storageService;
    private toastService;
    private tscCommonService;
    private aggregateDataService;
    private parameterService;
    private reportService;
    private alertService;
    materialConstant: {
        MAT_RIPPLE_CENTER: boolean;
    };
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
    customRangeConstant: {
        Today: moment.Moment[];
        Yesterday: moment.Moment[];
        'Last 7 Days': moment.Moment[];
        'Last 30 Days': moment.Moment[];
        'This Month': moment.Moment[];
        'Last Month': moment.Moment[];
    };
    materialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    buttonLabelEnum: typeof ButtonLabelEnum;
    dropdownTypeEnum: typeof DropdownTypeEnum;
    dateFormatEnum: typeof DateFormatEnum;
    dateInputTypeEnum: typeof DateInputTypeEnum;
    dateTypeEnum: typeof DateTypeEnum;
    orgID: any;
    timezone: string;
    startDate: string;
    endDate: string;
    aggDuration: string;
    entityID: any;
    deviceID: any;
    paramMetric: any[];
    parameterList: any;
    metricListArray: any[];
    timestamp: any;
    renderTable: any;
    reportData: any;
    showAlert: boolean;
    showLoader: boolean;
    parameterM: Parameter[];
    reportAlertObj: AlertM;
    customDateInput: DateInputComponent;
    aggDurationInput: AggregationDurationComponent;
    entityInput: EntityComponent;
    deviceInput: DeviceComponent;
    paramInput: ParamMetricComponent;
    aggInput: AggregationComponent;
    constructor(storageService: StorageService, toastService: ToastrService, tscCommonService: TSCCommonService, aggregateDataService: AggregateDataService, parameterService: ParameterService, reportService: ReportService, alertService: AlertService);
    ngOnInit(): void;
    getParameterByLayoutID(): Promise<void>;
    dateInpChange(): void;
    aggDurationInpChange(): void;
    entityInpChange(): void;
    deviceInpChange(): void;
    paramInpChange(): void;
    aggInpChange(dsAgg?: any, metric?: any): void;
    viewReport(): Promise<void>;
    createDataRequest(): AggregateDataRequest;
    isValidInputField(): boolean;
    getParameterLabel(paramMetricValue: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterReportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParameterReportComponent, "lib-parameter", never, {}, {}, never, never>;
}
