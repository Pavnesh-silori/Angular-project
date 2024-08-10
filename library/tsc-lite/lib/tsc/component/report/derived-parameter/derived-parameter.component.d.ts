import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment-timezone';
import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { Parameter } from '../../../model/parameter.model';
import { Entity } from '../../../model/entity.model';
import { AlertM } from '../../../model/alert.model';
import { AggregationDurationComponent } from '../../dropdown/aggregation-duration/aggregation-duration.component';
import { AggregateDataService } from '../../../service/aggregate-data.service';
import { ParameterService } from '../../../service/parameter.service';
import { EntityService } from '../../../service/entity.service';
import { ReportService } from '../../../service/report.service';
import { AlertService } from '../../../service/alert.service';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, MatSelectSearchService, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class DerivedParameterComponent implements OnInit {
    private storageService;
    private toastService;
    private tscCommonService;
    private aggregateDataService;
    private parameterService;
    private entityService;
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
    timestamp: any;
    renderTable: any;
    reportData: any;
    selectedParamMetric: any;
    showAlert: boolean;
    showLoader: boolean;
    totalParameterCount: number;
    allParameterID: any[];
    parameterM: Parameter[];
    entityM: Entity[];
    parameterFC: FormControl;
    entityFC: FormControl;
    paramSearchUtil: MatSelectSearchService;
    entitySearchUtil: MatSelectSearchService;
    reportAlertObj: AlertM;
    customDateInput: DateInputComponent;
    aggDurationInput: AggregationDurationComponent;
    constructor(storageService: StorageService, toastService: ToastrService, tscCommonService: TSCCommonService, aggregateDataService: AggregateDataService, parameterService: ParameterService, entityService: EntityService, reportService: ReportService, alertService: AlertService);
    ngOnInit(): void;
    dateInpChange(): void;
    aggDurationInpChange(): void;
    getDerivedParameterByLayoutID(): Promise<void>;
    selectAllParameters(): void;
    selectedParameters(): void;
    getEntityByParameterID(): Promise<void>;
    entityChange(selectedEntity: any): void;
    viewReport(): Promise<void>;
    createDataRequest(): AggregateDataRequest;
    isValidInputField(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DerivedParameterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DerivedParameterComponent, "lib-derived-parameter", never, {}, {}, never, never>;
}
