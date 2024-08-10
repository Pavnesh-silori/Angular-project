import { OnInit } from '@angular/core';
import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { AlertM } from '../../../model/alert.model';
import { SourceLoadComponent } from '../../_shared/filter/source-load/source-load.component';
import { AggregationDurationComponent } from '../../dropdown/aggregation-duration/aggregation-duration.component';
import { EntityComponent } from '../../dropdown/entity/entity.component';
import { AggregateDataService } from '../../../service/aggregate-data.service';
import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class ConsumptionBreakupComponent implements OnInit {
    private storageService;
    private toastService;
    private tscCommonService;
    private aggregateDataService;
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
        Today: import("moment").Moment[];
        Yesterday: import("moment").Moment[];
        'Last 7 Days': import("moment").Moment[];
        'Last 30 Days': import("moment").Moment[];
        'This Month': import("moment").Moment[];
        'Last Month': import("moment").Moment[];
    };
    materialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    buttonLabelEnum: typeof ButtonLabelEnum;
    dropdownTypeEnum: typeof DropdownTypeEnum;
    dateFormatEnum: typeof DateFormatEnum;
    dateInputTypeEnum: typeof DateInputTypeEnum;
    dateTypeEnum: typeof DateTypeEnum;
    orgID: any;
    applicationKeyID: any;
    paramMetric: any;
    timezone: string;
    category: string;
    startDate: string;
    endDate: string;
    aggDuration: string;
    entityID: any;
    timestamp: any;
    renderTable: any;
    reportData: any;
    showAlert: boolean;
    showLoader: boolean;
    reportAlertObj: AlertM;
    sourceLoadInput: SourceLoadComponent;
    customDateInput: DateInputComponent;
    aggDurationInput: AggregationDurationComponent;
    entityInput: EntityComponent;
    constructor(storageService: StorageService, toastService: ToastrService, tscCommonService: TSCCommonService, aggregateDataService: AggregateDataService, reportService: ReportService, alertService: AlertService);
    ngOnInit(): void;
    sourceLoadInpChange(): void;
    dateInpChange(): void;
    aggDurationInpChange(): void;
    entityInpChange(): void;
    viewReport(): Promise<void>;
    createDataRequest(): AggregateDataRequest;
    downloadReport(format: string): Promise<void>;
    isValidInputField(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsumptionBreakupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConsumptionBreakupComponent, "lib-consumption-breakup", never, {}, {}, never, never>;
}
