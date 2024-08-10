import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import * as i7$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { __awaiter } from 'tslib';
import * as i8 from '@angular/forms';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i1$2 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i3$1 from '@library/tsc-common';
import { MaterialFormFieldAppearance, DialogEnum, NO_DATA_GRAPHIC, LOADING_GRAPHIC, COMMON_CONSTANT, MatSelectSearchService, FREQUENCY_CONSTANT, SkeletonModule, MATERIAL_CONSTANT, SearchBarTwoModule, MessageAlertTypeEnum, MessageAlertIconEnum, MessageAlertModule, ButtonLabelEnum, InvalidForm, TABLE_CONSTANT, SearchBarOneModule, EllipsisPipeModule } from '@library/tsc-common';
import * as i3 from '@library/date';
import { DateTimeIntervalEnum, FrequencyEnum, DateTypeEnum, DateFilterTwoModule, CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputTypeEnum, DateInputModule } from '@library/date';
import * as moment from 'moment';
import * as i1$1 from '@library/storage-service';
import * as i1 from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import * as i7 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3$2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5 from '@angular/material/core';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import * as i11 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i14 from 'ngx-echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatInputModule } from '@angular/material/input';
import * as i6 from 'ngx-mat-select-search';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import * as i1$3 from '@angular/router';
import { RouterModule } from '@angular/router';
import { ApplicationKeyID } from '@library/application-service';
import * as i7$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i8$1 from 'ng-circle-progress';
import { NgCircleProgressModule } from 'ng-circle-progress';
import * as i12 from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import * as i6$1 from '@library/echart';
import { ChartViewStateEnum, DoughnutChart, DoughnutModule } from '@library/echart';
import * as i6$2 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i10 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i13 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i2 from '@library/toastr-service';
import { ToastrColor } from '@library/toastr-service';
import * as i5$1 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { merge, fromEvent, of } from 'rxjs';
import { startWith, switchMap, catchError, map } from 'rxjs/operators';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import * as i4$1 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i6$3 from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import * as i7$3 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i10$1 from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';

class TscLiteService {
    constructor() { }
}
TscLiteService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TscLiteService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TscLiteComponent {
    constructor() { }
    ngOnInit() {
    }
}
TscLiteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TscLiteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TscLiteComponent, selector: "lib-tsc-lite", ngImport: i0, template: `
    <p>
      tsc-lite works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tsc-lite',
                    template: `
    <p>
      tsc-lite works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class TscLiteModule {
    static forRoot(environment) {
        return {
            ngModule: TscLiteModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
TscLiteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TscLiteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteModule, declarations: [TscLiteComponent], exports: [TscLiteComponent] });
TscLiteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TscLiteComponent,
                    ],
                    imports: [],
                    exports: [
                        TscLiteComponent
                    ]
                }]
        }] });

const LIST_CONSTANT = {
    CONDITION: [
        {
            label: '>= (Greater or Equal)',
            value: 'GTE'
        },
        {
            label: '<= (Less or Equal)',
            value: 'LTE'
        },
        {
            label: '= (Equal)',
            value: 'EQUAL'
        },
        {
            label: '> (Greater than)',
            value: 'GREATER'
        },
        {
            label: '< (Less than)',
            value: 'LESS'
        },
        {
            label: 'between',
            value: 'BETWEEN'
        }
    ],
    EMAIL_FREQUENCY: [
        {
            label: "Never",
            value: "NEVER"
        },
        {
            label: "24 Hrs",
            value: "HOURS_24"
        },
        {
            label: "12 Hrs",
            value: "HOURS_12"
        },
        {
            label: "6 Hrs",
            value: "HOURS_6"
        },
        {
            label: "4 Hrs",
            value: "HOURS_4"
        }
    ],
    SMS_FREQUENCY: [
        {
            label: "Never",
            value: "NEVER"
        },
        {
            label: "24 Hrs",
            value: "HOURS_24"
        },
        {
            label: "12 Hrs",
            value: "HOURS_12"
        }
    ],
    ESCALATION_FREQUENCY: [
        {
            label: "Day",
            value: "DAY"
        },
        {
            label: "Hour",
            value: "HOUR"
        },
        {
            label: "Min",
            value: "MIN"
        }
    ],
    ALERT_RULE_FREQUENCY: [
        {
            label: 'Instant',
            value: 'INSTANT'
        },
        {
            label: "Daily(Today)",
            value: "DAILY_TODAY"
        },
        {
            label: "Daily(Yesterday)",
            value: "DAILY_YESTERDAY"
        },
        {
            label: "Monthly(Current month)",
            value: "MONTHLY_CURRENT"
        },
        {
            label: "Monthly(Last month)",
            value: "MONTHLY_LAST"
        },
        {
            label: "Hourly(Current hour)",
            value: "HOURLY_CURRENT"
        },
        {
            label: "Hourly(Last hour)",
            value: "HOURLY_LAST"
        }
    ],
    TREND_DATE_RANGE: [
        {
            label: "Last 24 hrs",
            value: "LAST_24_HRS"
        },
        {
            label: "Last 7 days",
            value: "LAST_7_DAYS"
        },
        {
            label: "Last 30 days",
            value: "LAST_30_DAYS"
        }
    ],
    AGGREGATION_DURATION: [] = [
        {
            label: "15 minutes",
            value: "min_15"
        },
        {
            label: "30 minutes",
            value: "min_30"
        },
        {
            label: "Hourly",
            value: "hour_1"
        },
        {
            label: "12 hours",
            value: "hour_12"
        },
        {
            label: "Daily",
            value: "day_1"
        },
        {
            label: "Monthly",
            value: "month_1"
        }
    ],
    AGGREGATION: [] = [
        {
            label: 'Absolute Average',
            value: 'avgabs'
        },
        {
            label: 'Absolute Maximum',
            value: 'maxabs'
        },
        {
            label: 'Absolute Minimum',
            value: 'minabs'
        },
        {
            label: 'Absolute Sum',
            value: 'sumabs'
        },
        {
            label: 'Average',
            value: 'avg'
        },
        {
            label: 'Count',
            value: 'count'
        },
        {
            label: 'First',
            value: 'first'
        },
        {
            label: 'Last',
            value: 'last'
        },
        {
            label: 'Maximum',
            value: 'max'
        },
        {
            label: 'Minimum',
            value: 'min'
        },
        {
            label: 'Sum',
            value: 'sum'
        }
    ],
    DOWNLOAD_TYPE: [] = [
        {
            label: "pdf",
            value: "PDF"
        },
        {
            label: "csv",
            value: "CSV"
        },
        {
            label: "xlsx",
            value: "XLSX"
        }
    ],
    SOURCE_LOAD: [] = [
        {
            label: "Source",
            value: "source"
        },
        {
            label: "Load",
            value: "load"
        }
    ]
};

class Parameter {
}

class Entity {
}
class EntityTree {
}
class EntityLevelConsumption {
}
class EntityType {
}

class Device {
}
class DevicesWithEntities {
}
class DeviceInfo {
}

class Unit {
}

class Shift {
}

class RecentDataRequestWithParam {
    constructor() {
        this.params = null;
        this.deviceID = null;
        this.includeDescendants = false;
        this.timezone = null;
        this.entityType = null;
        this.backscan = null;
    }
}
class RecentDataRequestWithoutParam {
    constructor() {
        this.deviceID = null;
        this.entityID = null;
        this.includeDescendants = false;
        this.timezone = null;
        this.entityType = null;
        this.backscan = null;
    }
}
class OrgRecentData {
}

class Alert {
    constructor() {
        this.showAlert = false;
        this.alertLabel = '';
        this.alertContent = '';
        this.messageAlertType = '';
        this.messageAlertIcon = '';
    }
}

class AggregateDataRequest {
    constructor() {
        this.interval = null;
        this.entityType = null;
        this.shiftKey = null;
        this.deviceID = null;
        this.entityID = null;
        this.params = null;
        this.showImmediateChildOnly = false;
        this.groupAll = false;
        this.startTime = null;
        this.endTime = null;
    }
    nullifyParams() {
        var _a;
        (_a = this.params) === null || _a === void 0 ? void 0 : _a.forEach(param => {
            param.name = param.name || null;
            param.dsAgg = param.dsAgg || null;
            param.agg = param.agg || null;
            param.source_or_load = param.source_or_load || null;
            param.sourceLoadType = param.sourceLoadType || null;
        });
    }
}

class ParameterController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getParameterByLayoutID(orgID) {
        // return this.http.get<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters`);
        return this.http.get(`${this.environment.MOCK_SERVER}parameter`);
    }
    getParameterByDeviceID(orgID, requestBody) {
        // return this.http.post<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/parameters`, requestBody);
        return this.http.get(`${this.environment.MOCK_SERVER}parameter`);
    }
    getDerivedParameterByLayoutID(orgID) {
        // return this.http.get<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/derived/parameters`);
        return this.http.get(`${this.environment.MOCK_SERVER}parameter`);
    }
}
ParameterController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ParameterController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

// /tsc-library/
class ParameterService {
    constructor(parameterController, storageService) {
        this.parameterController = parameterController;
        this.storageService = storageService;
    }
    getParameterByLayoutID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let parameterM;
            try {
                parameterM = yield this.parameterController.getParameterByLayoutID(orgID).toPromise();
                if (parameterM) {
                    return parameterM;
                }
                else {
                    return [new Parameter()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Parameter()];
            }
        });
    }
    getParameterByDeviceID(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let parameterM;
            try {
                parameterM = yield this.parameterController.getParameterByDeviceID(orgID, requestBody).toPromise();
                if (parameterM) {
                    return parameterM;
                }
                else {
                    return [new Parameter()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Parameter()];
            }
        });
    }
    getDerivedParameterByLayoutID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let derivedParameterM;
            try {
                derivedParameterM = yield this.parameterController.getDerivedParameterByLayoutID(orgID).toPromise();
                if (derivedParameterM) {
                    return derivedParameterM;
                }
                else {
                    return [new Parameter()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Parameter()];
            }
        });
    }
}
ParameterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, deps: [{ token: ParameterController }, { token: i1$1.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
ParameterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: ParameterController }, { type: i1$1.StorageService }]; } });

class AggregateDataController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getAggregateData(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/aggregate`, requestBody);
    }
}
AggregateDataController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
AggregateDataController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class AggregateDataService {
    constructor(aggregateDataController) {
        this.aggregateDataController = aggregateDataController;
    }
    getAggregateData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let aggregatedData;
            try {
                aggregatedData = yield this.aggregateDataController.getAggregateData(orgID, requestBody).toPromise();
                if (aggregatedData) {
                    return aggregatedData;
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
}
AggregateDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, deps: [{ token: AggregateDataController }], target: i0.ɵɵFactoryTarget.Injectable });
AggregateDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AggregateDataController }]; } });

// /tsc-library/
class TrendComponent {
    constructor(dialogRef, data, storageService, dateService, parameterService, aggregateDataService, tscCommonService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.storageService = storageService;
        this.dateService = dateService;
        this.parameterService = parameterService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.dialog = dialog;
        //TODO: SOMYA AGRAWAL, remove all chart dependency once chart library completed..
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.dateTimeIntervalEnum = DateTimeIntervalEnum;
        this.dialogEnum = DialogEnum;
        this.renderFlag = 'LOADING';
        this.parameterM = [new Parameter()];
        this.dateRangeFC = new FormControl('LAST_24_HRS', Validators.required);
        this.trendData = data['trendData'];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.dateRangeChange(this.dateRangeFC.value);
        this.noDataOption = {
            title: {
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };
        this.getParameterByLayoutID();
    }
    getParameterByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByLayoutID(this.orgID));
        });
    }
    dateRangeChange(selectedDateRange) {
        this.renderFlag = 'LOADING';
        this.startTime = this.dateService.getStartDateTime(selectedDateRange);
        switch (selectedDateRange) {
            case DateTimeIntervalEnum.LAST_24_HRS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
                this.interval = 'min_15';
                break;
            case DateTimeIntervalEnum.LAST_7_DAYS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_DAY);
                this.interval = 'hour_1';
                break;
            case DateTimeIntervalEnum.LAST_30_DAYS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_DAY);
                this.interval = 'day_1';
                break;
            default:
                this.endTime = null;
                this.interval = null;
                break;
        }
        this.chartDataCheck();
        this.getTrendData();
    }
    chartDataCheck() {
        if (this.renderFlag == 'LOADING') {
            this.chartDataOption = LOADING_GRAPHIC;
        }
        else if (this.renderFlag == 'DATA') {
            this.drawChart();
        }
        else {
            this.chartDataOption = this.noDataOption;
        }
    }
    getCounterParameter(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
        return parameter ? parameter.isCounter : false;
    }
    getTrendData() {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            this.renderFlag = 'LOADING';
            try {
                let requestData = new AggregateDataRequest();
                const isCounterParameter = this.getCounterParameter((_a = this.trendData) === null || _a === void 0 ? void 0 : _a.paramMetric);
                requestData.interval = this.interval;
                requestData.entityID = ((_b = this.trendData) === null || _b === void 0 ? void 0 : _b.entityID) ? [this.trendData.entityID] : null;
                requestData.deviceID = ((_c = this.trendData) === null || _c === void 0 ? void 0 : _c.deviceID) ? [this.trendData.deviceID] : null;
                requestData.entityType = (_d = this.trendData) === null || _d === void 0 ? void 0 : _d.entityType;
                requestData.params = [
                    {
                        name: this.trendData.paramMetric,
                        dsAgg: "avg",
                        agg: "avg",
                        ourceLoadType: isCounterParameter ? "all" : null,
                        source_or_load: isCounterParameter ? "source" : null,
                    }
                ];
                requestData.nullifyParams();
                requestData.startTime = this.startTime;
                requestData.endTime = this.endTime;
                this.trendData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_f = (_e = this.trendData) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.data.length) > 0) {
                    this.paramLabel = (_g = this.trendData) === null || _g === void 0 ? void 0 : _g[0].paramLabel;
                    this.renderFlag = 'DATA';
                }
                else {
                    this.renderFlag = 'NO_DATA';
                }
                this.chartDataCheck();
            }
            catch (error) {
                console.error(`Error in getTrendData()`, error);
            }
        });
    }
    drawChart() {
        var _a, _b, _c, _d, _e, _f, _g;
        const value = (_a = this.trendData) === null || _a === void 0 ? void 0 : _a[0].data.map(item => item.value);
        const unit = (_b = this.trendData) === null || _b === void 0 ? void 0 : _b[0].unit;
        let formattedDatesForXAxis;
        if (this.dateRangeFC.value == DateTimeIntervalEnum.LAST_24_HRS) {
            formattedDatesForXAxis = (_c = this.trendData) === null || _c === void 0 ? void 0 : _c[0].data.map(item => {
                const date = new Date(item.date);
                return moment(date).format("HH:mm");
            });
        }
        else {
            formattedDatesForXAxis = (_d = this.trendData) === null || _d === void 0 ? void 0 : _d[0].data.map(item => {
                const date = new Date(item.date);
                return moment(date).format("YYYY-MM-DD HH:mm:ss");
            });
        }
        const formattedDatesForTooltip = (_e = this.trendData) === null || _e === void 0 ? void 0 : _e[0].data.map(item => {
            const date = new Date(item.date);
            return moment(date).format("YYYY-MM-DD HH:mm:ss");
        });
        this.chartDataOption = {
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: true },
                    saveAsImage: { show: true }
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    const dataIndex = params[0].dataIndex;
                    let tooltip = '';
                    tooltip += formattedDatesForTooltip[dataIndex] + '<br />';
                    params.forEach(function (param) {
                        tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (param.value != null ? (param.value) + ' ' + unit : COMMON_CONSTANT.HYPHEN) + '</span></b>';
                    });
                    return tooltip;
                }
            },
            dataZoom: [
                {
                    type: 'slider',
                    filterMode: 'none'
                },
                {
                    type: 'inside',
                    filterMode: 'none'
                }
            ],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: formattedDatesForXAxis
            },
            yAxis: {
                type: 'value',
                name: ((_f = this.trendData) === null || _f === void 0 ? void 0 : _f[0].paramLabel) + ' (' + ((_g = this.trendData) === null || _g === void 0 ? void 0 : _g[0].unit) + ')',
                nameLocation: 'middle',
                nameGap: 40
            },
            series: [
                {
                    data: value,
                    type: 'line',
                    areaStyle: {}
                }
            ]
        };
    }
}
TrendComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendComponent, deps: [{ token: i1$2.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i1$1.StorageService }, { token: i3.DateService }, { token: ParameterService }, { token: AggregateDataService }, { token: i3$1.TSCCommonService }, { token: i1$2.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
TrendComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TrendComponent, selector: "lib-trend", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ paramLabel }} Trend\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"dialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n<div class=\"matDialogContent\" mat-dialog-content>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <mat-form-field class=\"mat-field-width-100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                <mat-label>Select daterange</mat-label>\n                <mat-select (selectionChange)=\"dateRangeChange($event.value)\" [formControl]=\"dateRangeFC\">\n                    <mat-option disabled>Select daterange</mat-option>\n                    <mat-option *ngFor=\"let daterange of listConstant.TREND_DATE_RANGE\" [value]=\"daterange.value\">\n                        {{ daterange.label }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div echarts [options]=\"chartDataOption\"></div>\n    </div>\n</div>", components: [{ type: i7.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1$2.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$2.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$2.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-trend',
                    templateUrl: './trend.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1$1.StorageService }, { type: i3.DateService }, { type: ParameterService }, { type: AggregateDataService }, { type: i3$1.TSCCommonService }, { type: i1$2.MatDialog }]; } });

class TrendModule {
}
TrendModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TrendModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, declarations: [TrendComponent], imports: [CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTooltipModule, i14.NgxEchartsModule] });
TrendModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatDialogModule,
            MatButtonModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTooltipModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TrendComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTooltipModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ]
                }]
        }] });

// /tsc-library/
class AggregationComponent {
    constructor() {
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.allAggregationIDs = [];
        this.totalAggregationCount = 0;
        this.aggregationFC = new FormControl(['avg'], [Validators.required]);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
        let aggregationList = this.listConstant.AGGREGATION;
        this.totalAggregationCount = aggregationList.length;
        aggregationList.forEach(aggregation => this.allAggregationIDs.push(aggregation['value']));
    }
    ngAfterViewInit() {
        this.emitFilter.emit();
    }
    selectAllAggregation() {
        if (!this.aggregationFC.value.includes(-1)) {
            this.aggregationFC.reset([]);
            return;
        }
        this.aggregationFC.setValue([-1, ...this.allAggregationIDs]);
        this.emitFilter.emit();
    }
    selectedAggregation() {
        const selected = this.aggregationFC.value;
        if (selected.includes(-1)) {
            selected.shift();
            this.aggregationFC.patchValue(selected);
        }
        else if (this.aggregationFC.value.length == this.totalAggregationCount) {
            this.allAggregationIDs.splice(0, 0, -1);
            this.aggregationFC.patchValue(this.allAggregationIDs);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.aggregationFC.patchValue(filteredSelected);
        }
        this.emitFilter.emit();
    }
}
AggregationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AggregationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationComponent, selector: "lib-aggregation", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation</mat-label>\n    <mat-select [formControl]=\"aggregationFC\" multiple required>\n        <mat-option [value]=\"-1\" (click)=\"selectAllAggregation()\">\n            Select all\n        </mat-option>\n        <mat-option *ngFor=\"let aggregation of listConstant.AGGREGATION\" [value]=\"aggregation.value\"\n            (click)=\"selectedAggregation()\">\n            {{ aggregation.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggregationFC.touched && aggregationFC.hasError('required')\">\n        Select aggregation\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-aggregation',
                    templateUrl: './aggregation.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { emitFilter: [{
                type: Output
            }] } });

class AggregationModule {
}
AggregationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AggregationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationModule, declarations: [AggregationComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [AggregationComponent] });
AggregationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AggregationComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        AggregationComponent
                    ]
                }]
        }] });

// /tsc-library/
class AggregationDurationComponent {
    constructor() {
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.aggDurationFC = new FormControl('min_15', [Validators.required]);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.emitFilter.emit();
    }
    onChange(selectedAD) {
        this.aggDurationFC.patchValue(selectedAD);
        this.emitFilter.emit();
    }
}
AggregationDurationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationDurationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AggregationDurationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation duration</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"aggDurationFC\" required>\n        <mat-option *ngFor=\"let duration of listConstant.AGGREGATION_DURATION\" [value]=\"duration.value\">\n            {{ duration.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggDurationFC.touched && aggDurationFC.hasError('required')\">\n        Select aggregation duration\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationDurationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-aggregation-duration',
                    templateUrl: './aggregation-duration.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { emitFilter: [{
                type: Output
            }] } });

class AggregationDurationModule {
}
AggregationDurationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationDurationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AggregationDurationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationDurationModule, declarations: [AggregationDurationComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [AggregationDurationComponent] });
AggregationDurationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationDurationModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationDurationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AggregationDurationComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        AggregationDurationComponent
                    ]
                }]
        }] });

// /tsc-library/
class ParamMetricComponent {
    constructor(storageService, parameterService) {
        this.storageService = storageService;
        this.parameterService = parameterService;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.commonConstant = COMMON_CONSTANT;
        this.parameterM = [new Parameter()];
        this.allParameterID = [];
        this.totalParameterCount = 0;
        this.parameterFC = new FormControl([], [Validators.required]);
        this.paramSearchUtil = new MatSelectSearchService(['label']);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }
    ngOnChanges(changes) {
        if (changes.deviceInp && this.deviceInp) {
            this.getParameterByDeviceID(this.deviceInp);
        }
    }
    getParameterByDeviceID(selectedDevices) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {};
            requestBody['deviceID'] = [selectedDevices];
            this.parameterM = (yield this.parameterService.getParameterByDeviceID(this.orgID, requestBody));
            this.paramSearchUtil.entityArr = this.parameterM;
            this.paramSearchUtil.createSubscription();
            this.totalParameterCount = this.parameterM.length;
            this.parameterM.forEach(parameter => this.allParameterID.push(parameter['paramMetric']));
            this.emitFilter.emit();
        });
    }
    selectAllParameters() {
        if (!this.parameterFC.value.includes(-1)) {
            this.parameterFC.reset([]);
            return;
        }
        this.parameterFC.setValue([-1, ...this.allParameterID]);
        this.emitFilter.emit();
    }
    selectedParameters() {
        const selected = this.parameterFC.value;
        if (selected.includes(-1)) {
            selected.shift();
            this.parameterFC.patchValue(selected);
        }
        else if (this.parameterFC.value.length == this.totalParameterCount) {
            this.allParameterID.splice(0, 0, -1);
            this.parameterFC.patchValue(this.allParameterID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.parameterFC.patchValue(filteredSelected);
        }
        this.emitFilter.emit();
    }
}
ParamMetricComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricComponent, deps: [{ token: i1$1.StorageService }, { token: ParameterService }], target: i0.ɵɵFactoryTarget.Component });
ParamMetricComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParamMetricComponent, selector: "lib-param-metric", inputs: { deviceInp: "deviceInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select parameter</mat-label>\n    <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"parameterFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"paramSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\" [hidden]=\"paramSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let parameter of paramSearchUtil.filteredEntities | async\" [value]=\"parameter.paramMetric\"\n                (click)=\"selectedParameters()\">\n                {{ parameter.label }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"parameterFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"!deviceInp\">\n        Please select device first\n    </mat-error>\n    <mat-error *ngIf=\"parameterFC.touched && parameterFC.hasError('required') && deviceInp\">\n        Select parameter\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7$1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-param-metric',
                    templateUrl: './param-metric.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: ParameterService }]; }, propDecorators: { deviceInp: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }] } });

class ParamMetricModule {
}
ParamMetricModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParamMetricModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricModule, declarations: [ParamMetricComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [ParamMetricComponent] });
ParamMetricModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParamMetricComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        ParamMetricComponent
                    ]
                }]
        }] });

// /tsc-library/
class ParameterComponent {
    constructor(storageService, parameterService) {
        this.storageService = storageService;
        this.parameterService = parameterService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.emitFilter = new EventEmitter();
        this.parameterM = [new Parameter()];
        this.selectedParameterFC = new FormControl('', [Validators.required]);
        this.parameterSearchUtil = new MatSelectSearchService(['label']);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getParameterByLayoutID();
    }
    getParameterByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByLayoutID(this.orgID));
            this.parameterSearchUtil.entityArr = this.parameterM;
            this.parameterSearchUtil.createSubscription();
        });
    }
    parameterChange(selectedParameter) {
        this.selectedParameterFC.patchValue(selectedParameter);
        this.emitFilter.emit();
    }
}
ParameterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterComponent, deps: [{ token: i1$1.StorageService }, { token: ParameterService }], target: i0.ɵɵFactoryTarget.Component });
ParameterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterComponent, selector: "lib-parameter", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<div class=\"row\">\n    <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select parameter</mat-label>\n        <mat-select (selectionChange)=\"parameterChange($event.value)\" [formControl]=\"selectedParameterFC\" required>\n            <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"parameterSearchUtil.filterFC\"\n                        placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let parameter of parameterSearchUtil.filteredEntities | async\" [value]=\"parameter.id\">\n                    {{ parameter.label }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n        <mat-error *ngIf=\"selectedParameterFC.hasError('required')\">\n            Select parameter\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7$1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parameter',
                    templateUrl: './parameter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: ParameterService }]; }, propDecorators: { emitFilter: [{
                type: Output
            }] } });

class ParameterModule {
}
ParameterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParameterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterModule, declarations: [ParameterComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [ParameterComponent] });
ParameterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParameterComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        ParameterComponent
                    ]
                }]
        }] });

var DropdownTypeEnum;
(function (DropdownTypeEnum) {
    DropdownTypeEnum["SINGLE_DROPDOWN"] = "SINGLE";
    DropdownTypeEnum["MULTIPLE_DROPDOWN"] = "MULTIPLE";
})(DropdownTypeEnum || (DropdownTypeEnum = {}));

class DeviceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getDeviceInfo(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/status`);
    }
    getDevicesByEntityID(orgID, requestBody) {
        // return this.http.post<DeviceM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/devices`, requestBody);
        return this.http.get(`${this.environment.MOCK_SERVER}devices`);
    }
    //TODO: SOMYA AGRAWAL: To discuss below twp api's with Abhinav
    getDevicesWithEntities(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities/devices`, requestBody);
    }
    getDevicesWithEntitiesByParameter(orgID, paramMetric) {
        let params = new HttpParams();
        params = params.append('paramMetric', paramMetric);
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-devices`, { params: params });
    }
}
DeviceController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
DeviceController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class DeviceService {
    constructor(deviceController) {
        this.deviceController = deviceController;
    }
    getDevicesByEntityID(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let deviceM;
            try {
                deviceM = yield this.deviceController.getDevicesByEntityID(orgID, requestBody).toPromise();
                if (deviceM) {
                    return deviceM;
                }
                else {
                    return [new Device()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Device()];
            }
        });
    }
    getDevicesWithEntities(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let devicesWithEntitiesM;
            try {
                devicesWithEntitiesM = yield this.deviceController.getDevicesWithEntities(orgID, requestBody).toPromise();
                if (devicesWithEntitiesM) {
                    return devicesWithEntitiesM;
                }
                else {
                    return [new DevicesWithEntities()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new DevicesWithEntities()];
            }
        });
    }
}
DeviceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceService, deps: [{ token: DeviceController }], target: i0.ɵɵFactoryTarget.Injectable });
DeviceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DeviceController }]; } });

// /tsc-library/
class DeviceComponent {
    constructor(storageService, deviceService) {
        this.storageService = storageService;
        this.deviceService = deviceService;
        this.commonConstant = COMMON_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.deviceM = [new Device()];
        this.allDeviceID = [];
        this.totalDeviceCount = 0;
        this.deviceFC = new FormControl('', [Validators.required]);
        this.multipleDeviceFC = new FormControl([], [Validators.required]);
        this.deviceSearchUtil = new MatSelectSearchService(['name']);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }
    ngOnChanges(changes) {
        var _a;
        if (changes.dropdownTypeInp && this.dropdownTypeInp) {
            this.dropdownType = this.dropdownTypeInp;
        }
        if (this.entityInp && ((_a = this.entityInp) === null || _a === void 0 ? void 0 : _a.length) != 0) {
            if (changes.entityInp) {
                this.getDevicesByEntityID(this.entityInp);
                this.deviceFC.patchValue(null);
                this.emitFilter.emit();
            }
        }
    }
    getDevicesByEntityID(entityID) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {};
            requestBody['entityID'] = entityID;
            this.deviceM = (yield this.deviceService.getDevicesByEntityID(this.orgID, requestBody));
            this.deviceSearchUtil.entityArr = this.deviceM;
            this.deviceSearchUtil.createSubscription();
            this.totalDeviceCount = this.deviceM.length;
            this.deviceM.forEach(device => this.allDeviceID.push(device['id']));
            this.emitFilter.emit();
        });
    }
    onChange(selectedDevice) {
        this.deviceFC.patchValue(selectedDevice);
        this.emitFilter.emit();
    }
    selectAllDevices() {
        if (!this.multipleDeviceFC.value.includes(-1)) {
            this.multipleDeviceFC.reset([]);
            return;
        }
        this.multipleDeviceFC.setValue([-1, ...this.allDeviceID]);
        this.emitFilter.emit();
    }
    selectedDevices() {
        const selected = this.multipleDeviceFC.value;
        if (selected.includes(-1)) {
            selected.shift();
            this.multipleDeviceFC.patchValue(selected);
        }
        else if (this.multipleDeviceFC.value.length == this.totalDeviceCount) {
            this.allDeviceID.splice(0, 0, -1);
            this.multipleDeviceFC.patchValue(this.allDeviceID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.multipleDeviceFC.patchValue(filteredSelected);
        }
        this.emitFilter.emit();
    }
}
DeviceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceComponent, deps: [{ token: i1$1.StorageService }, { token: DeviceService }], target: i0.ɵɵFactoryTarget.Component });
DeviceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DeviceComponent, selector: "lib-device", inputs: { dropdownTypeInp: "dropdownTypeInp", entityInp: "entityInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.SINGLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select device</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"deviceFC\" required>\n        <ng-container *ngIf=\"deviceM && deviceM.length > 0 && deviceM[0]['id']; else noDeviceFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"deviceSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let device of deviceSearchUtil.filteredEntities | async\" [value]=\"device.id\">\n                {{ device.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDeviceFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"!entityInp\">\n        Please select entity first\n    </mat-error>\n    <mat-error\n        *ngIf=\"deviceFC.touched && deviceFC.hasError('required') && entityInp\">\n        Select device\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.MULTIPLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select device</mat-label>\n    <ng-container *ngIf=\"deviceM && deviceM.length > 0 && deviceM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"multipleDeviceFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"deviceSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllDevices()\"  [hidden]=\"deviceSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let device of deviceSearchUtil.filteredEntities | async\" [value]=\"device.id\"\n                (click)=\"selectedDevices()\">\n                {{ device.name }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"multipleDeviceFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"!entityInp\">\n        Please select entity first\n    </mat-error>\n    <mat-error *ngIf=\"multipleDeviceFC.touched && multipleDeviceFC.hasError('required') && entityInp\">\n        Select device\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7$1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-device',
                    templateUrl: './device.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: DeviceService }]; }, propDecorators: { dropdownTypeInp: [{
                type: Input
            }], entityInp: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }] } });

class DeviceModule {
}
DeviceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DeviceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceModule, declarations: [DeviceComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [DeviceComponent] });
DeviceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DeviceComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        DeviceComponent
                    ]
                }]
        }] });

class EntityController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getEntitiesByOrgID(orgID) {
        // return this.http.get<EntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities`);
        return this.http.get(`${this.environment.MOCK_SERVER}entities`);
    }
    getEntityHierarchyByParameterID(orgID, parameterID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters/${parameterID}/entities`);
    }
    getEntityLevelConsumption(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/load-consumption`, requestBody);
    }
    getEntityTypeByLayoutID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/type`);
    }
    getEntitiesWithDevices(orgID, layoutID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entity-device`, requestBody);
    }
    getEntityByParameterID(orgID, requestBody) {
        // return this.http.post<EntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities`, requestBody);
        return this.http.get(`${this.environment.MOCK_SERVER}entities`);
    }
}
EntityController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
EntityController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class EntityService {
    constructor(entityController) {
        this.entityController = entityController;
    }
    getEntitiesByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityM;
            try {
                entityM = yield this.entityController.getEntitiesByOrgID(orgID).toPromise();
                if (entityM) {
                    return entityM;
                }
                else {
                    return [new Entity()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Entity()];
            }
        });
    }
    getEntityHierarchyByParameterID(orgID, parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityTreeM;
            try {
                entityTreeM = yield this.entityController.getEntityHierarchyByParameterID(orgID, parameterID).toPromise();
                if (entityTreeM) {
                    return entityTreeM;
                }
                else {
                    return [new EntityTree()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new EntityTree()];
            }
        });
    }
    getEntityTypeByLayoutID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityTypeM;
            try {
                entityTypeM = yield this.entityController.getEntityTypeByLayoutID(orgID).toPromise();
                if (entityTypeM) {
                    return entityTypeM;
                }
                else {
                    return [new EntityType()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new EntityType()];
            }
        });
    }
    getEntitiesWithDevices(orgID, layoutID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityDeviceM;
            try {
                entityDeviceM = yield this.entityController.getEntitiesWithDevices(orgID, layoutID, requestBody).toPromise();
                if (entityDeviceM) {
                    return entityDeviceM;
                }
                else {
                    return new EntityTree();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new EntityTree();
            }
        });
    }
    getEntityByParameterID(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityM;
            try {
                entityM = yield this.entityController.getEntityByParameterID(orgID, requestBody).toPromise();
                if (entityM) {
                    return entityM;
                }
                else {
                    return [new Entity()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Entity()];
            }
        });
    }
}
EntityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityService, deps: [{ token: EntityController }], target: i0.ɵɵFactoryTarget.Injectable });
EntityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: EntityController }]; } });

// /tsc-library/
class EntityComponent {
    constructor(storageService, entityService) {
        this.storageService = storageService;
        this.entityService = entityService;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.commonConstant = COMMON_CONSTANT;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.entityM = [new Entity()];
        this.dropdownType = this.dropdownTypeEnum.SINGLE_DROPDOWN;
        this.allEntityID = [];
        this.totalEntityCount = 0;
        this.entityFC = new FormControl('', [Validators.required]);
        this.multipleEntityFC = new FormControl([], [Validators.required]);
        this.entitySearchUtil = new MatSelectSearchService(['name']);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getEntitiesByOrgID();
    }
    ngOnChanges(changes) {
        if (changes.dropdownTypeInp && this.dropdownTypeInp) {
            this.dropdownType = this.dropdownTypeInp;
        }
    }
    getEntitiesByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = (yield this.entityService.getEntitiesByOrgID(this.orgID));
            this.entitySearchUtil.entityArr = this.entityM;
            this.entitySearchUtil.createSubscription();
            this.totalEntityCount = this.entityM.length;
            this.entityM.forEach(entity => this.allEntityID.push(entity['id']));
            if (this.entityM.length > 0) {
                this.entityFC.patchValue(this.entityM[0]['id']);
                this.emitFilter.emit();
            }
        });
    }
    onChange(selectedEntity) {
        this.entityFC.patchValue(selectedEntity);
        this.emitFilter.emit();
    }
    selectAllEntities() {
        if (!this.multipleEntityFC.value.includes(-1)) {
            this.multipleEntityFC.reset([]);
            return;
        }
        this.multipleEntityFC.setValue([-1, ...this.allEntityID]);
        this.emitFilter.emit();
    }
    selectedEntities() {
        const selected = this.multipleEntityFC.value;
        if (selected.includes(-1)) {
            selected.shift();
            this.multipleEntityFC.patchValue(selected);
        }
        else if (this.multipleEntityFC.value.length == this.totalEntityCount) {
            this.allEntityID.splice(0, 0, -1);
            this.multipleEntityFC.patchValue(this.allEntityID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.multipleEntityFC.patchValue(filteredSelected);
        }
        this.emitFilter.emit();
    }
}
EntityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityComponent, deps: [{ token: i1$1.StorageService }, { token: EntityService }], target: i0.ɵɵFactoryTarget.Component });
EntityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityComponent, selector: "lib-entity", inputs: { dropdownTypeInp: "dropdownTypeInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.SINGLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"entityFC\" required>\n        <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noDataFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\">\n                {{ entity.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"entityFC.touched && entityFC.hasError('required')\">\n        Select entity\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.MULTIPLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity</mat-label>\n    <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"multipleEntityFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllEntities()\" [hidden]=\"entitySearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\"\n                (click)=\"selectedEntities()\">\n                {{ entity.name }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"multipleEntityFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"multipleEntityFC.touched && multipleEntityFC.hasError('required') && entityInp\">\n        Select entity\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7$1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-entity',
                    templateUrl: './entity.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: EntityService }]; }, propDecorators: { dropdownTypeInp: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }] } });

class EntityModule {
}
EntityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityModule, declarations: [EntityComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [EntityComponent] });
EntityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EntityComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        EntityComponent
                    ]
                }]
        }] });

class UnitController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getUnitByParameterID(orgID, parameterID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/parameters/${parameterID}/unit-type`);
    }
}
UnitController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
UnitController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class UnitService {
    constructor(unitController) {
        this.unitController = unitController;
    }
    getUnitByParameterID(orgID, parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            let unitM;
            try {
                unitM = yield this.unitController.getUnitByParameterID(orgID, parameterID).toPromise();
                if (unitM) {
                    return unitM;
                }
                else {
                    return [new Unit()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Unit()];
            }
        });
    }
}
UnitService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, deps: [{ token: UnitController }], target: i0.ɵɵFactoryTarget.Injectable });
UnitService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: UnitController }]; } });

// /tsc-library/
class UnitComponent {
    constructor(storageService, unitService) {
        this.storageService = storageService;
        this.unitService = unitService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.emitFilter = new EventEmitter();
        this.unitM = [new Unit()];
        this.selectedUnitFC = new FormControl('', [Validators.required]);
        this.unitSearchUtil = new MatSelectSearchService(['name']);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }
    ngOnChanges(changes) {
        if (this.selectedParameterID) {
            if (changes.selectedParameterID) {
                this.getUnitByParameterID(this.selectedParameterID);
            }
        }
    }
    getUnitByParameterID(parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.unitM = (yield this.unitService.getUnitByParameterID(this.orgID, parameterID));
            this.unitSearchUtil.entityArr = this.unitM;
            this.unitSearchUtil.createSubscription();
        });
    }
    unitChange(selectedUnit) {
        this.selectedUnitFC.patchValue(selectedUnit);
        this.emitFilter.emit();
    }
}
UnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitComponent, deps: [{ token: i1$1.StorageService }, { token: UnitService }], target: i0.ɵɵFactoryTarget.Component });
UnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UnitComponent, selector: "lib-unit", inputs: { selectedParameterID: "selectedParameterID" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"row\">\n    <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select unit</mat-label>\n        <mat-select (selectionChange)=\"unitChange($event.value)\" [formControl]=\"selectedUnitFC\" required>\n            <ng-container *ngIf=\"unitM && unitM.length > 0 && unitM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"unitSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                        noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let unit of unitSearchUtil.filteredEntities | async\" [value]=\"unit.id\">\n                    {{ unit.name }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n        <mat-error *ngIf=\"!selectedParameterID\">\n            Please select parameter first\n        </mat-error>\n        <mat-error *ngIf=\"selectedUnitFC.hasError('required') && selectedParameterID\">\n            Select unit\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7$1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-unit',
                    templateUrl: './unit.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: UnitService }]; }, propDecorators: { selectedParameterID: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }] } });

class UnitModule {
}
UnitModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UnitModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitModule, declarations: [UnitComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [UnitComponent] });
UnitModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UnitComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        UnitComponent
                    ]
                }]
        }] });

// /tsc-library/
class HomeComponent {
    constructor(storageService, dateService, tscCommonService, aggregateDataService, entityController, deviceController) {
        this.storageService = storageService;
        this.dateService = dateService;
        this.tscCommonService = tscCommonService;
        this.aggregateDataService = aggregateDataService;
        this.entityController = entityController;
        this.deviceController = deviceController;
        this.commonConstant = COMMON_CONSTANT;
        this.entityConsumption = [new EntityLevelConsumption()];
        this.deviceInfoM = new DeviceInfo();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.label = "Energy";
            this.icon = "bolt";
            this.paramKey = "engEnergyUsed";
            this.outerStrokeColor = "#fa9200";
            this.outerStrokeGradientStopColor = "#fdd130";
            this.innerStrokeColor = "#fbe2a6";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.label = "Water";
            this.icon = "water_drop";
            this.paramKey = "gwFlowTotalizer";
            this.outerStrokeColor = "#4882c2";
            this.outerStrokeGradientStopColor = "#53a9ff";
            this.innerStrokeColor = "#e7e8ea";
        }
        this.getTotalConsumption(DateTimeIntervalEnum.CURRENT_DAY)
            .then(app => {
            this.todayConsumption = app;
        });
        this.getTotalConsumption(DateTimeIntervalEnum.CURRENT_MONTH)
            .then(app => {
            var _a, _b, _c, _d, _e, _f;
            this.currentMonthConsumption = app;
            const totalConsumptionValue = (_d = (_c = (_b = (_a = this.currentMonthConsumption) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['data']) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d['value'];
            this.totalConsumptionCircleData = {
                percent: this.tscCommonService.formatLargeNumber(totalConsumptionValue, 'false', 1),
                maxPercent: 999999999,
                units: (_f = (_e = this.currentMonthConsumption) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.unit,
                showUnits: true,
                radius: 75,
                space: 4,
                outerStrokeGradient: true,
                outerStrokeWidth: 10,
                outerStrokeColor: this.outerStrokeColor,
                outerStrokeGradientStopColor: this.outerStrokeGradientStopColor,
                innerStrokeColor: this.innerStrokeColor,
                showBackground: false,
                innerStrokeWidth: 5,
                showSubtitle: false,
                subtitleFormat: false,
                startFromZero: false,
                animationDuration: 500,
                backgroundColor: '#ffffff',
            };
        });
        this.getTotalConsumption(DateTimeIntervalEnum.CURRENT_YEAR)
            .then(app => {
            this.currentYearConsumption = app;
        });
        this.getTotalEntitiesConsumption();
        this.getEntityLevelConsumption();
        this.getDeviceInfo();
    }
    getTotalConsumption(selectedRange) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestData = new AggregateDataRequest();
                if (selectedRange == DateTimeIntervalEnum.CURRENT_DAY) {
                    requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_DAY);
                    requestData.interval = 'day_1';
                }
                else if (selectedRange == DateTimeIntervalEnum.CURRENT_MONTH) {
                    requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_MONTH);
                    requestData.interval = 'month_1';
                }
                else if (selectedRange == DateTimeIntervalEnum.CURRENT_YEAR) {
                    requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_YEAR);
                    requestData.interval = 'year_1';
                }
                requestData.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
                requestData.params = [
                    {
                        name: this.paramKey,
                        dsAgg: "sum",
                        agg: "sum",
                        source_or_load: "source",
                        sourceLoadType: "all"
                    }
                ];
                requestData.nullifyParams();
                requestData.groupAll = true;
                const result = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                return result;
            }
            catch (error) {
                console.error(`Error in getTotalConsumption for (${selectedRange})`, error);
            }
        });
    }
    getTotalEntitiesConsumption() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let requestData = new AggregateDataRequest();
                requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_MONTH);
                requestData.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
                requestData.interval = "month_1";
                requestData.params = [
                    {
                        name: this.paramKey,
                        dsAgg: "sum",
                        agg: "sum",
                        source_or_load: "load",
                        sourceLoadType: "all"
                    }
                ];
                requestData.nullifyParams();
                requestData.groupAll = true;
                const totalEntitiesConsumData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                const consumptionBreakupValue = (_c = (_b = (_a = totalEntitiesConsumData === null || totalEntitiesConsumData === void 0 ? void 0 : totalEntitiesConsumData[0]) === null || _a === void 0 ? void 0 : _a['data']) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c['value'];
                this.consumptionBreakupCircleData = {
                    percent: this.tscCommonService.formatLargeNumber(consumptionBreakupValue, 'false', 1),
                    maxPercent: 999999999,
                    units: (_d = totalEntitiesConsumData === null || totalEntitiesConsumData === void 0 ? void 0 : totalEntitiesConsumData[0]) === null || _d === void 0 ? void 0 : _d.unit,
                    showUnits: true,
                    radius: 75,
                    space: 4,
                    outerStrokeGradient: true,
                    outerStrokeWidth: 10,
                    outerStrokeColor: this.outerStrokeColor,
                    outerStrokeGradientStopColor: this.outerStrokeGradientStopColor,
                    innerStrokeColor: this.innerStrokeColor,
                    showBackground: false,
                    innerStrokeWidth: 5,
                    showSubtitle: false,
                    subtitleFormat: false,
                    startFromZero: false,
                    animationDuration: 500,
                    backgroundColor: '#ffffff',
                };
            }
            catch (error) {
                console.error(`Error in getTotalEntitiesConsumption()`, error);
            }
        });
    }
    getEntityLevelConsumption() {
        let requestData = new AggregateDataRequest();
        requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_MONTH);
        requestData.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
        requestData.interval = "month_1";
        requestData.params = [
            {
                name: this.paramKey,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: "load",
                sourceLoadType: "all"
            }
        ];
        requestData.nullifyParams();
        requestData.groupAll = false;
        this.entityController.getEntityLevelConsumption(this.orgID, requestData)
            .subscribe((entityConsumRes) => {
            this.entityConsumption = entityConsumRes;
        }, error => {
            console.log('error in getEntityLevelConsumption() -', error);
        });
    }
    highestConsumptionEntity() {
        var _a, _b, _c;
        if (((_a = this.entityConsumption) === null || _a === void 0 ? void 0 : _a.length) == 0) {
            return null;
        }
        return (_b = this.entityConsumption) === null || _b === void 0 ? void 0 : _b.reduce((maxEntity, currentEntity) => {
            return currentEntity.value > maxEntity.value ? currentEntity : maxEntity;
        }, (_c = this.entityConsumption) === null || _c === void 0 ? void 0 : _c[0]);
    }
    calculateProgress(entity) {
        const highestConsumption = this.highestConsumptionEntity();
        if (!highestConsumption) {
            return 0;
        }
        const progress = (entity.value / highestConsumption.value) * 100;
        return progress;
    }
    getDeviceInfo() {
        this.deviceController.getDeviceInfo(this.orgID)
            .subscribe((deviceRes) => {
            this.deviceInfoM = deviceRes;
        }, error => {
            console.log('error in getDeviceInfo() -', error);
        });
    }
}
HomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeComponent, deps: [{ token: i1$1.StorageService }, { token: i3.DateService }, { token: i3$1.TSCCommonService }, { token: AggregateDataService }, { token: EntityController }, { token: DeviceController }], target: i0.ɵɵFactoryTarget.Component });
HomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: HomeComponent, selector: "lib-home", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Home</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"cardTitle\">\n                                Total {{ label }} Consumption\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"col-sm-6\">\n                                <span class=\"centerAlign\">\n                                    <circle-progress [options]=\"totalConsumptionCircleData\" [renderOnClick]=\"false\"\n                                        class=\"copy\"></circle-progress>\n                                </span>\n                                <span class=\"centerAlign\">\n                                    This Month\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6 ms-4\">\n                                <div class=\"row\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'Today',\n                                        value: todayConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: todayConsumption?.[0]?.['unit'],\n                                        matCardClass: 'today'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'This Month',\n                                        value: currentMonthConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: currentMonthConsumption?.[0]?.['unit'],\n                                        matCardClass: 'month'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'This Year',\n                                        value: currentYearConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: currentYearConsumption?.[0]?.['unit'],\n                                        matCardClass: 'year'\n                                    }\"></ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"cardTitle\">\n                                {{ label }} Consumption Breakup\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"col-sm-6\">\n                                <span class=\"centerAlign\">\n                                    <circle-progress [options]=\"consumptionBreakupCircleData\" [renderOnClick]=\"false\"\n                                        class=\"copy\"></circle-progress>\n                                </span>\n                                <span class=\"centerAlign\">\n                                    This Month\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\" *ngIf=\"entityConsumption?.[0]?.id\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[0].name,\n                                        value: entityConsumption[0].value,\n                                        unit: entityConsumption[0].unit,\n                                        entityObj: entityConsumption[0],\n                                        outerProgressBarClass: 'progress1BGColor',\n                                        innerProgressBarClass: 'progress1Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[1]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[1].name,\n                                        value: entityConsumption[1].value,\n                                        unit: entityConsumption[1].unit,\n                                        entityObj: entityConsumption[1],\n                                        outerProgressBarClass: 'progress2BGColor',\n                                        innerProgressBarClass: 'progress2Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[2]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[2].name,\n                                        value: entityConsumption[2].value,\n                                        unit: entityConsumption[2].unit,\n                                        entityObj: entityConsumption[2],\n                                        outerProgressBarClass: 'progress3BGColor',\n                                        innerProgressBarClass: 'progress3Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[3]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[3].name,\n                                        value: entityConsumption[3].value,\n                                        unit: entityConsumption[3].unit,\n                                        entityObj: entityConsumption[3],\n                                        outerProgressBarClass: 'progress4BGColor',\n                                        innerProgressBarClass: 'progress4Color'\n                                    }\"></ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-info\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Total devices',\n                        count: deviceInfoM.total\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-success\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Online devices',\n                        count: deviceInfoM.online\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-warning\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Delayed devices',\n                        count: deviceInfoM.delay\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-danger\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Offline devices',\n                        count: deviceInfoM.offline\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #totalConsumption let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-matCardClass=\"matCardClass\"\n    let-outerProgressBarClass=\"outerProgressBarClass\" let-innerProgressBarClass=\"innerProgressBarClass\">\n    <div class=\"col-sm-12\">\n        <div class=\"d-flex align-items-center\">\n            <mat-card class=\"card main-card square d-flex justify-content-center me-2\" [class]=\"matCardClass\">\n                <span class=\"material-symbols-outlined\">\n                    {{ icon }}\n                </span>\n            </mat-card>\n            <div class=\"row\">\n                <span>{{ label }}</span><br />\n                <span class=\"text-primary fw-bold\">{{ value ? value : commonConstant.HYPHEN }} <span\n                        class=\"unitSize\">{{ value ? unit : '' }}</span></span>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #entityProgress let-name=\"name\" let-value=\"value\" let-unit=\"unit\" let-entityObj=\"entityObj\"\n    let-outerProgressBarClass=\"outerProgressBarClass\" let-innerProgressBarClass=\"innerProgressBarClass\">\n    <div class=\"col-sm-12\">\n        <span>\n            {{ name }}\n        </span>\n        <span class=\"float-end text-primary fw-bold\"> {{ value ? value : commonConstant.HYPHEN }}\n            <span class=\"unitSize\"> {{ value ? unit : '' }} </span>\n        </span>\n        <div class=\"progress progressBarRadius\" [class]=\"outerProgressBarClass\">\n            <div class=\"progress-bar progressBarRadius\" [class]=\"innerProgressBarClass\" role=\"progressbar\"\n                [style.width.%]=\"calculateProgress(entityObj)\"></div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #deviceStatus let-label=\"label\" let-count=\"count\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <span class=\"material-symbols-outlined\">\n                devices\n            </span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12 fs-1 fw-bold centerAlign\">\n            {{ count != undefined && count != null ? count : commonConstant.HYPHEN }}\n        </div>\n    </div>\n    <div class=\"row mt-1\">\n        <div class=\"col-sm-12 fs-5 centerAlign\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", styles: [".cardHeight{height:280px}.square{box-shadow:none!important;border-radius:6px!important;height:50px;width:50px}.unitSize{font-size:.66rem}.today{background-color:#f9dedc;color:#fa7d74}.month{background-color:#c2e7ff;color:#21a1f7}.year{background-color:#c4eed0;color:#04942d}.progressBarRadius{border-radius:16px!important}.progress1BGColor{background-color:#f9dedc}.progress2BGColor{background-color:#c2e7ff}.progress3BGColor{background-color:#fff0d1}.progress4BGColor{background-color:#c4eed0}.progress1Color{background-color:#fa7d74}.progress2Color{background-color:#21a1f7}.progress3Color{background-color:#ffbb29}.progress4Color{background-color:#04942d}.card-info{background-color:#cfe2ff;color:#084298}.card-success{background-color:#c3f1d9;color:#058844}.card-warning{background-color:#fff3cd;color:#664d03}.card-danger{background-color:#f8d7da;color:#842029}\n"], components: [{ type: i7$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i8$1.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }], directives: [{ type: i7$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-home',
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: i3.DateService }, { type: i3$1.TSCCommonService }, { type: AggregateDataService }, { type: EntityController }, { type: DeviceController }]; } });

const routes$g = [
    {
        path: '',
        component: HomeComponent
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HomeRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
HomeRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeRoutingModule, imports: [[RouterModule.forChild(routes$g)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$g)],
                    exports: [RouterModule]
                }]
        }] });

class HomeModule {
}
HomeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HomeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeModule, declarations: [HomeComponent], imports: [CommonModule,
        HomeRoutingModule,
        MatCardModule,
        MatTooltipModule,
        PerfectScrollbarModule, i8$1.NgCircleProgressModule] });
HomeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeModule, imports: [[
            CommonModule,
            HomeRoutingModule,
            MatCardModule,
            MatTooltipModule,
            PerfectScrollbarModule,
            NgCircleProgressModule.forRoot(),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HomeComponent
                    ],
                    imports: [
                        CommonModule,
                        HomeRoutingModule,
                        MatCardModule,
                        MatTooltipModule,
                        PerfectScrollbarModule,
                        NgCircleProgressModule.forRoot(),
                    ]
                }]
        }] });

class ShiftController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getShift(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/shifts`);
    }
}
ShiftController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ShiftController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class ShiftService {
    constructor(shiftController) {
        this.shiftController = shiftController;
    }
    getShift(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let shiftM;
            try {
                shiftM = yield this.shiftController.getShift(orgID).toPromise();
                if (shiftM) {
                    return shiftM;
                }
                else {
                    return [new Shift()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Shift()];
            }
        });
    }
}
ShiftService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftService, deps: [{ token: ShiftController }], target: i0.ɵɵFactoryTarget.Injectable });
ShiftService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: ShiftController }]; } });

// /tsc-library/
class ShiftComponent {
    constructor(storageService, shiftService) {
        this.storageService = storageService;
        this.shiftService = shiftService;
        this.emitFilter = new EventEmitter();
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.shiftM = [new Shift()];
        this.allShiftID = [];
        this.totalShiftCount = 0;
        this.multiSelectedShiftFC = new FormControl([], [Validators.required]);
        this.shiftSearchUtil = new MatSelectSearchService(['name']);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getShift();
    }
    getShift() {
        return __awaiter(this, void 0, void 0, function* () {
            this.shiftM = (yield this.shiftService.getShift(this.orgID));
            this.shiftSearchUtil.entityArr = this.shiftM;
            this.shiftSearchUtil.createSubscription();
            this.totalShiftCount = this.shiftM.length;
            this.shiftM.forEach(shift => this.allShiftID.push(shift['id']));
            this.emitFilter.emit();
        });
    }
    selectAllShifts() {
        if (!this.multiSelectedShiftFC.value.includes(-1)) {
            this.multiSelectedShiftFC.reset([]);
            return;
        }
        this.multiSelectedShiftFC.setValue([-1, ...this.allShiftID]);
        this.emitFilter.emit();
    }
    selectedShift() {
        const selected = this.multiSelectedShiftFC.value;
        if (selected.includes(-1)) {
            selected.shift();
            this.multiSelectedShiftFC.patchValue(selected);
        }
        else if (this.multiSelectedShiftFC.value.length == this.totalShiftCount) {
            this.allShiftID.splice(0, 0, -1);
            this.multiSelectedShiftFC.patchValue(this.allShiftID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.multiSelectedShiftFC.patchValue(filteredSelected);
        }
        this.emitFilter.emit();
    }
}
ShiftComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftComponent, deps: [{ token: i1$1.StorageService }, { token: ShiftService }], target: i0.ɵɵFactoryTarget.Component });
ShiftComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ShiftComponent, selector: "lib-shift", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<div class=\"row\">\n    <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select shift</mat-label>\n        <ng-container *ngIf=\"shiftM && shiftM.length > 0 && shiftM[0]['id']; else noDataOption\">\n            <mat-select [formControl]=\"multiSelectedShiftFC\" multiple required>\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"shiftSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                        noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option [value]=\"-1\" (click)=\"selectAllShifts()\">\n                    Select all\n                </mat-option>\n                <mat-option *ngFor=\"let shift of shiftSearchUtil.filteredEntities | async\" [value]=\"shift.id\"\n                    (click)=\"selectedShift()\">\n                    {{ shift.name }}\n                </mat-option>\n            </mat-select>\n        </ng-container>\n        <ng-template #noDataOption>\n            <mat-select [formControl]=\"multiSelectedShiftFC\">\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </mat-select>\n        </ng-template>\n        <mat-error *ngIf=\"multiSelectedShiftFC.hasError('required')\">\n            Select shift\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7$1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-shift',
                    templateUrl: './shift.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: ShiftService }]; }, propDecorators: { emitFilter: [{
                type: Output
            }] } });

class ShiftModule {
}
ShiftModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ShiftModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftModule, declarations: [ShiftComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [ShiftComponent] });
ShiftModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ShiftComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        ShiftComponent
                    ]
                }]
        }] });

class BalanceComponent {
    constructor(storageService, aggregateDataService, tscCommonService) {
        this.storageService = storageService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
        this.showLoader = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.label = "Energy";
            this.paramMetric = "engEnergyUsed";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.label = "Water";
            this.paramMetric = "gwFlowTotalizer";
        }
        this.formFieldAppearance = MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }
    dateFilterEmitted(data) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        let selectedFrequency = data.frequency;
        if (selectedFrequency == this.frequencyEnum.DAILY) {
            this.interval = "hour_1";
        }
        else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
            this.interval = "day_1";
        }
        else if (selectedFrequency == this.frequencyEnum.YEARLY) {
            this.interval = "month_1";
        }
    }
}
BalanceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceComponent, deps: [{ token: i1$1.StorageService }, { token: AggregateDataService }, { token: i3$1.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
BalanceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BalanceComponent, selector: "lib-balance", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\"> {{ label }} Balance</div>\n        </div>\n    </div>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-balance',
                    templateUrl: './balance.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: AggregateDataService }, { type: i3$1.TSCCommonService }]; } });

const routes$f = [
    {
        path: '',
        component: BalanceComponent
    }
];
class BalanceRoutingModule {
}
BalanceRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BalanceRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
BalanceRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceRoutingModule, imports: [[RouterModule.forChild(routes$f)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$f)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class BalanceModule {
}
BalanceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BalanceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceModule, declarations: [BalanceComponent], imports: [CommonModule,
        BalanceRoutingModule,
        DateFilterTwoModule] });
BalanceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceModule, imports: [[
            CommonModule,
            BalanceRoutingModule,
            DateFilterTwoModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BalanceComponent
                    ],
                    imports: [
                        CommonModule,
                        BalanceRoutingModule,
                        DateFilterTwoModule,
                    ]
                }]
        }] });

class ConsumptionComponent {
    constructor(storageService, aggregateDataService) {
        this.storageService = storageService;
        this.aggregateDataService = aggregateDataService;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }
        this.formFieldAppearance = MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }
    dateFilterEmitted(data) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        let selectedFrequency = data.frequency;
        if (selectedFrequency == this.frequencyEnum.DAILY) {
            this.interval = "hour_1";
        }
        else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
            this.interval = "day_1";
        }
        else if (selectedFrequency == this.frequencyEnum.YEARLY) {
            this.interval = "month_1";
        }
        this.getConsumptionData();
    }
    getConsumptionData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestData = this.createDataRequest();
                const consumptionRes = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
            }
            catch (error) {
                console.error(`Error in getConsumptionData()`, error);
            }
        });
    }
    createDataRequest() {
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.interval;
        requestData.params = [
            {
                name: this.paramMetric,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: "source",
                sourceLoadType: "all"
            }
        ];
        requestData.nullifyParams();
        requestData.groupAll = true;
        return requestData;
    }
}
ConsumptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, deps: [{ token: i1$1.StorageService }, { token: AggregateDataService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionComponent, selector: "app-consumption", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [frequencyInp]=\"frequency\"\n                    [defaultFrequencyInp]=\"defaultFrequency\" [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\"\n                    [timezoneInp]=\"timezone\" (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-consumption',
                    templateUrl: './consumption.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: AggregateDataService }]; } });

const routes$e = [
    {
        path: '',
        component: ConsumptionComponent
    }
];
class ConsumptionRoutingModule {
}
ConsumptionRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
ConsumptionRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionRoutingModule, imports: [[RouterModule.forChild(routes$e)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$e)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ConsumptionModule {
}
ConsumptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, declarations: [ConsumptionComponent], imports: [CommonModule,
        ConsumptionRoutingModule,
        DateFilterTwoModule,
        SkeletonModule,
        MatCardModule] });
ConsumptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, imports: [[
            CommonModule,
            ConsumptionRoutingModule,
            DateFilterTwoModule,
            SkeletonModule,
            MatCardModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionRoutingModule,
                        DateFilterTwoModule,
                        SkeletonModule,
                        MatCardModule
                    ]
                }]
        }] });

// /tsc-library/
class ConsumptionBreakupDashboardComponent {
    constructor(storageService, aggregateDataService, tscCommonService) {
        this.storageService = storageService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
        this.showLoader = true;
        this.viewStateFlagForSource = ChartViewStateEnum.LOADING;
        this.viewStateFlagForLoad = ChartViewStateEnum.LOADING;
        this.chartDataForSource = new DoughnutChart();
        this.chartDataForLoad = new DoughnutChart();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }
        this.formFieldAppearance = MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }
    dateFilterEmitted(data) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        let selectedFrequency = data.frequency;
        if (selectedFrequency == this.frequencyEnum.DAILY) {
            this.interval = "hour_1";
        }
        else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
            this.interval = "day_1";
        }
        else if (selectedFrequency == this.frequencyEnum.YEARLY) {
            this.interval = "month_1";
        }
        this.getOrgLevelSourceConsum("source").then(app => {
            this.orgSourceRes = app;
        });
        this.getOrgLevelSourceConsum("load").then(app => {
            this.orgConsumedRes = app;
        });
        this.getEntiyLevelConsumption();
    }
    getOrgLevelSourceConsum(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestData = this.createDataRequest(category, true);
                const result = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                return result;
            }
            catch (error) {
                console.error(`Error in getOrgLevelSourceConsum(${category})`, error);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    getEntiyLevelConsumption() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getEntityLevelSourceConsum("source");
            yield this.getEntityLevelSourceConsum("load");
        });
    }
    getEntityLevelSourceConsum(category) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const name = category == 'source' ? 'Sourced' : category == 'load' ? 'Consumed' : '';
            const chartData = new DoughnutChart();
            chartData.title = {
                name: name,
                color: 'rgba(0, 0, 0, 0.87)',
            };
            if (category == 'source') {
                this.chartDataForSource = chartData;
                this.viewStateFlagForSource = ChartViewStateEnum.LOADING;
            }
            else {
                this.chartDataForLoad = chartData;
                this.viewStateFlagForLoad = ChartViewStateEnum.LOADING;
            }
            try {
                const requestData = this.createDataRequest(category, false);
                const result = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a.data.length) > 0) {
                    chartData.data = {
                        toolbox: {
                            showDataView: true,
                            showRestore: true,
                            showDownloadImage: true,
                        },
                        metaData: result[0].data.map(item => ({
                            name: item.sourceLoadType,
                            value: item.data[0].value,
                            unit: {
                                code: item.unit,
                            },
                        })),
                    };
                    if (category == 'source') {
                        this.chartDataForSource = chartData;
                        this.viewStateFlagForSource = ChartViewStateEnum.HAS_DATA;
                    }
                    else {
                        this.chartDataForLoad = chartData;
                        this.viewStateFlagForLoad = ChartViewStateEnum.HAS_DATA;
                    }
                }
                else {
                    if (category == 'source') {
                        this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
                    }
                    else {
                        this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
                    }
                }
            }
            catch (error) {
                if (category == 'source') {
                    this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
                }
                else {
                    this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
                }
                console.error(`Error in getEntityLevelSourceConsum(${category})`, error);
            }
        });
    }
    createDataRequest(category, groupAll) {
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.interval;
        requestData.params = [
            {
                name: this.paramMetric,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: category,
                sourceLoadType: "all"
            }
        ];
        requestData.nullifyParams();
        requestData.groupAll = groupAll;
        return requestData;
    }
}
ConsumptionBreakupDashboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardComponent, deps: [{ token: i1$1.StorageService }, { token: AggregateDataService }, { token: i3$1.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionBreakupDashboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupDashboardComponent, selector: "lib-consumption-breakup", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\" (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgSourceRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgSourceRes?.[0]?.['unit'],\n                        label: 'Sourced',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgConsumedRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgConsumedRes?.[0]?.['unit'],\n                        label: 'Consumed',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForSource\" [dataInp]=\"chartDataForSource\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForLoad\" [dataInp]=\"chartDataForLoad\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #sourceConsumTemplate let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-loader=\"loader\">\n    <ng-container *ngIf=\"loader; else dataTemplate\">\n        <lib-skeleton-loader [count]=\"1\" [appearance]=\"''\"\n            [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n    </ng-container>\n\n    <ng-template #dataTemplate>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <span class=\"fs-2 fw-bold text-primary\">{{ value ? tscCommonService.formatLargeNumber(value, 'false', 1)\n                    : commonConstant.HYPHEN\n                    }}</span>\n                <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 fs-4\">\n                {{ label }}\n            </div>\n        </div>\n    </ng-template>\n</ng-template>", components: [{ type: i3.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i7$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i6$1.DoughnutComponent, selector: "lib-doughnut", inputs: ["viewStateInp", "dataInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-consumption-breakup',
                    templateUrl: './consumption-breakup.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: AggregateDataService }, { type: i3$1.TSCCommonService }]; } });

const routes$d = [
    {
        path: '',
        component: ConsumptionBreakupDashboardComponent
    }
];
class ConsumptionBreakupDashboardRoutingModule {
}
ConsumptionBreakupDashboardRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupDashboardRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
ConsumptionBreakupDashboardRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardRoutingModule, imports: [[RouterModule.forChild(routes$d)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$d)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ConsumptionBreakupDashboardModule {
}
ConsumptionBreakupDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardModule, declarations: [ConsumptionBreakupDashboardComponent], imports: [CommonModule,
        ConsumptionBreakupDashboardRoutingModule,
        DateFilterTwoModule,
        SkeletonModule,
        DoughnutModule,
        MatCardModule] });
ConsumptionBreakupDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardModule, imports: [[
            CommonModule,
            ConsumptionBreakupDashboardRoutingModule,
            DateFilterTwoModule,
            SkeletonModule,
            DoughnutModule,
            MatCardModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionBreakupDashboardComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionBreakupDashboardRoutingModule,
                        DateFilterTwoModule,
                        SkeletonModule,
                        DoughnutModule,
                        MatCardModule
                    ]
                }]
        }] });

class RecentDataController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getRecentDataWithParam(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/recent`, requestBody);
    }
    getEntityLevelRecentData(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/data/recent`, requestBody);
    }
    getOrgRecentData(orgID, requestBody) {
        // return this.http.post<OrgRecentDataM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/recent`, requestBody);
        return this.http.get(`${this.environment.MOCK_SERVER}facility-dashboard`);
    }
}
RecentDataController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
RecentDataController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class RecentDataService {
    constructor(recentDataController) {
        this.recentDataController = recentDataController;
    }
    getRecentDataWithParam(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let recentDataWithParam;
            try {
                recentDataWithParam = yield this.recentDataController.getRecentDataWithParam(orgID, requestBody).toPromise();
                if (recentDataWithParam) {
                    return recentDataWithParam;
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
    getEntityLevelRecentData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityLevelRes;
            try {
                entityLevelRes = yield this.recentDataController.getEntityLevelRecentData(orgID, requestBody).toPromise();
                if (entityLevelRes) {
                    return entityLevelRes;
                }
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
    getOrgRecentData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgRes;
            try {
                orgRes = yield this.recentDataController.getOrgRecentData(orgID, requestBody).toPromise();
                if (orgRes) {
                    return orgRes;
                }
                else {
                    return [new OrgRecentData()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
}
RecentDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, deps: [{ token: RecentDataController }], target: i0.ɵɵFactoryTarget.Injectable });
RecentDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: RecentDataController }]; } });

class TrendService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(trendData) {
        let dialogRef;
        dialogRef = this.dialog.open(TrendComponent, {
            data: {
                trendData: trendData
            },
            minWidth: '620px',
            maxWidth: '620px'
        });
    }
}
TrendService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, deps: [{ token: i1$2.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
TrendService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.MatDialog }]; } });

// /tsc-library/
class EntityDashboardComponent {
    constructor(storageService, entityService, recentDataService, dateService, trendService) {
        this.storageService = storageService;
        this.entityService = entityService;
        this.recentDataService = recentDataService;
        this.dateService = dateService;
        this.trendService = trendService;
        this.commonConstant = COMMON_CONSTANT;
        this.materialConstant = MATERIAL_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.isAccordionOpen = true;
        //loader variable declaration
        this.entityTypeLoader = true;
        this.entityDeviceLoader = false;
        this.realTimeDeviceDataLoader = false;
        this.entityTypeM = [new EntityType()];
        this.entityTypeDropdownItem = [new EntityType()];
        this.entityDeviceM = new EntityTree();
        this.filteredEntityDeviceM = [];
        this.entityTypeFC = new FormControl('', Validators.required);
        this.entityFC = new FormControl('', Validators.required);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');
        this.timezone = this.storageService.getStorage('timezone');
        this.getEntityTypeByLayoutID();
    }
    getEntityTypeByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.entityTypeM = (yield this.entityService.getEntityTypeByLayoutID(this.orgID));
                if (this.entityTypeM && this.entityTypeM.length > 0) {
                    const defaultEntityType = this.entityTypeM[0].type;
                    if (defaultEntityType) {
                        this.entityTypeFC.patchValue(defaultEntityType);
                        this.getEntitiesWithDevices(this.entityTypeFC.value);
                    }
                    if (this.entityTypeM.length > 6) {
                        this.entityTypeDropdownItem = this.entityTypeM.slice(6);
                    }
                }
            }
            catch (error) {
                console.error("Error in getEntityTypeByLayoutID()", error);
            }
            finally {
                this.entityTypeLoader = false;
            }
        });
    }
    entityTypeChange() {
        const entityType = this.entityTypeFC.value;
        this.getEntitiesWithDevices(entityType);
    }
    moveToToggleGroup(selectedEntityType) {
        const dropdownIndex = this.entityTypeDropdownItem.findIndex(entityType => entityType.type == selectedEntityType);
        if (dropdownIndex != -1) {
            this.entityTypeDropdownItem.splice(dropdownIndex, 1);
        }
        if (this.entityTypeM.length > 0) {
            this.entityTypeDropdownItem.push(this.entityTypeM.shift());
        }
        this.entityTypeM.unshift({ type: selectedEntityType });
    }
    dropdownSelectionChange(selectedEntityType) {
        this.moveToToggleGroup(selectedEntityType);
        this.entityTypeFC.patchValue(selectedEntityType);
        this.getEntitiesWithDevices(selectedEntityType);
    }
    getEntitiesWithDevices(entityType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.entityDeviceLoader = true;
                let requestBody = {
                    'entityType': [entityType]
                };
                this.entityDeviceM = (yield this.entityService.getEntitiesWithDevices(this.orgID, this.layoutID, requestBody));
                if (this.entityDeviceM.children) {
                    this.filteredEntityDeviceM = [this.entityDeviceM];
                }
            }
            catch (error) {
                console.error("Error in getEntitiesWithDevices()", error);
            }
            finally {
                this.entityDeviceLoader = false;
            }
        });
    }
    searchFn(value) {
        const searchTerm = value.trim().toLowerCase();
        if (searchTerm.length > 0) {
            this.filteredEntityDeviceM = this.searchEntities([this.entityDeviceM], searchTerm);
        }
        else {
            this.filteredEntityDeviceM = [this.entityDeviceM];
        }
    }
    searchEntities(entities, searchTerm) {
        let results = [];
        entities.forEach(entity => {
            if (entity.name.toLowerCase().includes(searchTerm)) {
                results.push(entity);
            }
            if (entity.children && entity.children.length > 0) {
                const matchingChildren = this.searchEntities(entity.children, searchTerm);
                results = results.concat(matchingChildren);
            }
        });
        return results;
    }
    openAccordion() {
        this.isAccordionOpen = true;
    }
    closeAccordion() {
        this.isAccordionOpen = false;
    }
    isDeviceAttached(entity) {
        return (entity.type == 'FACILITY' || entity.type == 'ENTITY') && entity.children && entity.children.some(child => child.type == 'DEVICE');
    }
    onEntityDeviceSelection() {
        const selectedValue = this.entityFC.value;
        this.realTimeDeviceDataLoader = false;
        // this.getRecentEntitiesData(selectedValue);
    }
    getTooltipLabel(entity) {
        if (entity.type == 'FACILITY') {
            return 'Facility';
        }
        else if (entity.type == 'ENTITY') {
            return 'Entity';
        }
        else if (entity.type == 'DEVICE') {
            return 'Device';
        }
    }
    getRecentEntitiesData(selectedValue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let requestData = new RecentDataRequestWithoutParam();
                requestData.entityID = [selectedValue];
                requestData.timezone = this.timezone;
                requestData.backscan = 1;
                this.recentEntitiesData = yield this.recentDataService.getEntityLevelRecentData(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in getRecentEntitiesData()", error);
            }
            finally {
                this.realTimeDeviceDataLoader = false;
            }
        });
    }
    showTrend(paramMetric, entityID, deviceID) {
        let requestBody = {
            paramMetric: paramMetric,
            entityID: entityID,
            deviceID: deviceID
        };
        this.trendService.openDialog(requestBody);
    }
}
EntityDashboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardComponent, deps: [{ token: i1$1.StorageService }, { token: EntityService }, { token: RecentDataService }, { token: i3.DateService }, { token: TrendService }], target: i0.ɵɵFactoryTarget.Component });
EntityDashboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityDashboardComponent, selector: "lib-entity", viewQueries: [{ propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "scrollContainer", first: true, predicate: ["scrollContainer"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Entity Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <ng-container *ngIf=\"entityTypeLoader; else showEntityType\">\n                <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 1 }\"></ng-container>\n            </ng-container>\n\n            <ng-template #showEntityType>\n                <ng-container *ngIf=\"entityTypeM && entityTypeM.length <= 6; else toggleAndDropdownView\">\n                    <div class=\"col-sm-6\">\n                        <div class=\" labelColor\">Select entity type *</div>\n                        <ng-container *ngIf=\"entityTypeM && entityTypeM.length > 0; else noEntityType\">\n                            <mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"entityTypeFC\"\n                                (change)=\"entityTypeChange()\">\n                                <mat-button-toggle *ngFor=\"let entityType of entityTypeM\" value=\"{{ entityType.type }}\">\n                                    {{ entityType.type }}\n                                </mat-button-toggle>\n                            </mat-button-toggle-group>\n                        </ng-container>\n                        <ng-template #noEntityType>\n                            <mat-button-toggle-group class=\"matBtnFilter\" disabled>\n                                <mat-button-toggle>\n                                    <span class=\"textMatError\">\n                                        {{ commonConstant.NO_DATA_FOUND }}\n                                    </span>\n                                </mat-button-toggle>\n                            </mat-button-toggle-group>\n                        </ng-template>\n                    </div>\n                </ng-container>\n\n                <ng-template #toggleAndDropdownView>\n                    <div class=\"col-sm-6\">\n                        <div class=\" labelColor\">Select entity type *</div>\n                        <mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"entityTypeFC\"\n                            (change)=\"entityTypeChange()\">\n                            <mat-button-toggle *ngFor=\"let entityType of entityTypeM.slice(0, 6)\" value=\"{{ entityType.type }}\">\n                                {{ entityType.type }}\n                            </mat-button-toggle>\n                        </mat-button-toggle-group>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <mat-form-field class=\"mat-field-width-100\"\n                            [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                            <mat-label>Select entity type</mat-label>\n                            <mat-select [formControl]=\"entityTypeFC\" (selectionChange)=\"dropdownSelectionChange($event.value)\">\n                                <mat-option *ngFor=\"let entityType of entityTypeDropdownItem\" [value]=\"entityType.type\">\n                                    {{ entityType.type }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </ng-template>\n            </ng-template>\n        </div>\n\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-6\">\n                <mat-accordion>\n                    <mat-expansion-panel class=\"matAccordion\" [expanded]=\"isAccordionOpen\" (opened)=\"openAccordion()\"\n                        (closed)=\"closeAccordion()\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <div class=\"card-title sectionTitle\">\n                                    Select entity *\n                                </div>\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <lib-search-bar-two class=\"float-end me-3\" #searchBar searchBy=\"name\"\n                                    (emitSearch)=\"searchFn($event)\">\n                                </lib-search-bar-two>\n                            </div>\n                        </div>\n                        \n                        <perfect-scrollbar class=\"scrollHeight\" [config]=\"{useBothWheelAxes: true, suppressScrollX: false, suppressScrollY: false}\" #scrollContainer>\n                            <ng-container *ngIf=\"entityDeviceLoader; else entityDeviceView\">\n                                <div class=\"mt-2\">\n                                    <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n                                </div>\n                            </ng-container>\n                            <ng-template #entityDeviceView>\n                                <mat-radio-group [formControl]=\"entityFC\" (change)=\"onEntityDeviceSelection()\">\n                                    <div *ngFor=\"let entity of filteredEntityDeviceM\">\n                                        <ng-container *ngTemplateOutlet=\"entityTemplate; context:{ $implicit: entity }\"></ng-container>\n                                    </div>\n\n                                    <ng-template #entityTemplate let-entity>\n                                        <div class=\"ms-3 mt-2\">\n                                            <ng-container *ngIf=\"isDeviceAttached(entity); else entityView\">\n                                                <mat-radio-button class=\"radioBtnLabel me-2\" [value]=\"entity.id\">\n                                                    <span class=\"badge rounded-pill\" [ngClass]=\"{'facility': entity.type == 'FACILITY', 'entity': entity.type == 'ENTITY', 'device': entity.type == 'DEVICE'}\"\n                                                        [matTooltip]=\"getTooltipLabel(entity)\" matTooltipPosition=\"above\">\n                                                        <div class=\"d-flex align-items-center\">\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'FACILITY'\">factory</span>\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'ENTITY'\">domain</span>\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'DEVICE'\">devices</span>\n                                                            {{ entity.name }}\n                                                        </div>\n                                                    </span>\n                                                </mat-radio-button>\n                                            </ng-container>\n\n                                            <ng-template #entityView>\n                                                <span class=\"badge rounded-pill\" [ngClass]=\"{'facility': entity.type == 'FACILITY', 'entity': entity.type == 'ENTITY', 'device': entity.type == 'DEVICE'}\"\n                                                    [matTooltip]=\"getTooltipLabel(entity)\" matTooltipPosition=\"above\">\n                                                    <div class=\"d-flex align-items-center\">\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'FACILITY'\">factory</span>\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'ENTITY'\">domain</span>\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'DEVICE'\">devices</span>\n                                                        {{ entity.name }}\n                                                    </div>\n                                                </span>\n                                            </ng-template>\n                                        </div>\n\n                                        <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-5 mt-2\">\n                                            <ng-container *ngFor=\"let child of entity.children\">\n                                                <ng-container\n                                                    *ngTemplateOutlet=\"entityTemplate; context:{ $implicit: child }\"></ng-container>\n                                            </ng-container>\n                                        </div>\n                                    </ng-template>\n                                </mat-radio-group>\n                                \n                            </ng-template>\n                        </perfect-scrollbar>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight2\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"material-symbols-outlined me-3\">\n                                    devices\n                                </span>\n                                <span class=\"card-title sectionTitle mt-1\">\n                                    Real time data\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <perfect-scrollbar class=\"scrollHeight\">\n                        <ng-container *ngIf=\"realTimeDeviceDataLoader; else realTimeDeviceDataView\">\n                            <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n                        </ng-container>\n\n                        <ng-template #realTimeDeviceDataView>\n                            <ng-container *ngFor=\"let realTimeData of recentEntitiesData;\">\n                                <ng-container *ngTemplateOutlet=\"parameterSummary; context: {\n                                    device: realTimeData?.deviceData,\n                                    entityID: realTimeData?.entityID\n                                }\"></ng-container>\n                            </ng-container>\n                        </ng-template>\n                    </perfect-scrollbar>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #parameterSummary let-device=\"device\" let-entityID=\"entityID\">\n    <ng-container *ngFor=\"let deviceData of device;\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"d-flex align-items-center fw-bold\">\n                    <span class=\"material-symbols-outlined me-1\"\n                        [ngClass]=\"{'text-success': deviceData.status == 'LIVE', 'text-secondary': deviceData.status == 'OFFLINE'}\">\n                        devices\n                    </span>\n                    {{ deviceData.name ? deviceData.name : commonConstant.HYPHEN }}\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-2\" *ngFor=\"let parameterData of deviceData.paramData;\">\n            <div class=\"col-sm-4 text-start text-secondary\">\n                {{ parameterData.label ? parameterData.label : commonConstant.HYPHEN }}\n            </div>\n            <div class=\"col-sm-4 text-center\">\n                <a class=\"text-primary cursorPointer fw-bold\" matTooltip=\"Trend\" matTooltipPosition=\"above\"\n                    (click)=\"showTrend(parameterData.name, entityID, deviceData.id)\">\n                    <span>{{ parameterData.data.value ? (parameterData.data.value | number: '1.2-2') : commonConstant.HYPHEN\n                        }}</span>\n                    <span> {{ parameterData.data.value ? parameterData.unit : '' }} </span>\n                </a>\n            </div>\n            <div class=\"col-sm-4 text-start text-secondary\">\n                {{ dateService.getRelativeTimeAgoLabel(parameterData.data.date) }}\n            </div>\n        </div>\n        <hr>\n    </ng-container>\n</ng-template>\n\n<ng-template #showLoader let-count=\"count\">\n    <lib-skeleton-loader [count]=\"count\" [appearance]=\"''\"\n        [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n</ng-template>", styles: [".labelColor{color:#0009}.matAccordion{box-shadow:none!important;background:whitesmoke;border-radius:16px!important}.badge{font-weight:normal;font-size:1em;padding:1.4px 15px}.facility{background-color:#e3e2e2;color:#000}.entity{background-color:#e7effc;color:#084298}.device{background-color:#e0f7eb;color:#1c8a51}.cardHeight1{height:490px}.cardHeight2{height:520px}.scrollHeight{height:410px}\n"], components: [{ type: i6$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i10.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i10.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: i3$1.SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i12.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: i13.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i7$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i6$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatLabel, selector: "mat-label" }, { type: i10.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i10.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i13.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i7$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "number": i7$1.DecimalPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-entity',
                    templateUrl: './entity.component.html',
                    styleUrls: ['./entity.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: EntityService }, { type: RecentDataService }, { type: i3.DateService }, { type: TrendService }]; }, propDecorators: { searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }], scrollContainer: [{
                type: ViewChild,
                args: ['scrollContainer']
            }] } });

const routes$c = [
    {
        path: '',
        component: EntityDashboardComponent
    }
];
class EntityDashboardRoutingModule {
}
EntityDashboardRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityDashboardRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
EntityDashboardRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardRoutingModule, imports: [[RouterModule.forChild(routes$c)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$c)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class EntityDashboardModule {
}
EntityDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, declarations: [EntityDashboardComponent], imports: [CommonModule,
        EntityDashboardRoutingModule,
        TrendModule,
        SkeletonModule,
        SearchBarTwoModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatOptionModule,
        MatRadioModule,
        MatTooltipModule,
        PerfectScrollbarModule] });
EntityDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, providers: [TrendService], imports: [[
            CommonModule,
            EntityDashboardRoutingModule,
            TrendModule,
            SkeletonModule,
            SearchBarTwoModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatButtonToggleModule,
            MatExpansionModule,
            MatOptionModule,
            MatRadioModule,
            MatTooltipModule,
            PerfectScrollbarModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EntityDashboardComponent
                    ],
                    imports: [
                        CommonModule,
                        EntityDashboardRoutingModule,
                        TrendModule,
                        SkeletonModule,
                        SearchBarTwoModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatButtonToggleModule,
                        MatExpansionModule,
                        MatOptionModule,
                        MatRadioModule,
                        MatTooltipModule,
                        PerfectScrollbarModule
                    ],
                    providers: [TrendService]
                }]
        }] });

var ReportErrorEnum;
(function (ReportErrorEnum) {
    ReportErrorEnum["INVALID_DATE_LABEL"] = "Invalid dates!";
    ReportErrorEnum["INVALID_DATE_MESSAGE"] = "Select distinct dates to view the desired report.";
    ReportErrorEnum["TIME_EXCEEDED_LABEL"] = "Time exceeded!";
    ReportErrorEnum["TIME_EXCEEDED_MESSAGE"] = "You cannot view or download report for more than 24 hours.";
    ReportErrorEnum["DATA_NOT_FOUND_LABEL"] = "No data found!";
    ReportErrorEnum["DATA_NOT_FOUND_MESSAGE"] = "No data was recorded for the above specified filters. Please keep changing the filters and try again.";
    ReportErrorEnum["INVALID_ERROR_LABEL"] = "Please try again later!";
    ReportErrorEnum["INVALID_ERROR_MESSAGE"] = "We are not able to fetch the data for the specified filters at the moment. Please keep changing the filters and try again.";
})(ReportErrorEnum || (ReportErrorEnum = {}));
var DashboardErrorEnum;
(function (DashboardErrorEnum) {
    DashboardErrorEnum["DATA_NOT_FOUND_LABEL"] = "No data found!";
    DashboardErrorEnum["DATA_NOT_FOUND_MESSAGE"] = "No data was recorded at the moment. Please try again after sometime.";
    DashboardErrorEnum["INVALID_ERROR_LABEL"] = "Please try again later!";
    DashboardErrorEnum["INVALID_ERROR_MESSAGE"] = "We are not able to fetch the requested data at the moment. Please try again after sometime.";
})(DashboardErrorEnum || (DashboardErrorEnum = {}));

class AlertService {
    setAlertProperties(alertObject, label, content, type, icon) {
        alertObject.showAlert = true;
        alertObject.alertLabel = label;
        alertObject.alertContent = content;
        alertObject.messageAlertType = type;
        alertObject.messageAlertIcon = icon;
        return alertObject;
    }
    resetAlertProperties(alertObject) {
        alertObject.showAlert = false;
        alertObject.alertLabel = '';
        alertObject.alertContent = '';
        alertObject.messageAlertType = '';
        alertObject.messageAlertIcon = '';
        return alertObject;
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

// /tsc-library/
class FacilityComponent {
    constructor(router, storageService, dateService, trendService, recentDataService, alertService) {
        this.router = router;
        this.storageService = storageService;
        this.dateService = dateService;
        this.trendService = trendService;
        this.recentDataService = recentDataService;
        this.alertService = alertService;
        this.commonConstant = COMMON_CONSTANT;
        this.showLoader = false;
        this.orgRecentDataM = [new OrgRecentData()];
        this.alertObj = new Alert();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.getOrgRecentData();
    }
    getOrgRecentData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.alertObj);
            try {
                let requestBody = {
                    'timezone': this.timezone
                };
                this.orgRecentDataM = (yield this.recentDataService.getOrgRecentData(this.orgID, requestBody));
                if (this.orgRecentDataM && this.orgRecentDataM.length == 1) {
                    this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                console.error(`Error in getOrgRecentData()`, error);
                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.apiTimer = setTimeout(() => {
                    this.getOrgRecentData();
                }, 300000);
                this.showLoader = false;
            }
        });
    }
    showEntityConsumption(id, name) {
        this.router.navigate(['dashboard/consumption'], { state: { entityID: id, entityName: name } });
    }
    showTrend(paramMetric, deviceID, entityID) {
        let requestBody = {
            paramMetric: paramMetric,
            deviceID: deviceID,
            entityID: entityID
        };
        this.trendService.openDialog(requestBody);
    }
}
FacilityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityComponent, deps: [{ token: i1$3.Router }, { token: i1$1.StorageService }, { token: i3.DateService }, { token: TrendService }, { token: RecentDataService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
FacilityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FacilityComponent, selector: "app-facility", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Facility Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n\n        <div class=\"row\">\n            <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"''\"\n                [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"orgRecentDataM.length > 1\">\n            <div class=\"col-sm-12 mb-3\" *ngFor=\"let recentRes of orgRecentDataM\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-sm-6\">\n                            <span class=\"entity text-primary\">\n                                <div class=\"d-flex align-items-center\">\n                                    <span class=\"material-symbols-outlined me-2\">domain</span>\n                                    {{ recentRes.entityName }}\n                                </div>\n                            </span>\n                        </div>\n                        <div class=\"col-sm-6 text-end\">\n                            <a class=\"text-primary cursorPointer\" matTooltip=\"Entity consumption\"\n                                matTooltipPosition=\"below\"\n                                (click)=\"showEntityConsumption(recentRes.entityID, recentRes.entityName)\">\n                                <span class=\"material-symbols-outlined fs-4 fw-bold\">monitoring</span>\n                            </a>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 ms-3\" *ngFor=\"let deviceRes of recentRes.deviceData\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"material-symbols-outlined text-success me-2\">devices</span>\n                                {{ deviceRes.name }}\n                            </div>\n\n                            <div class=\"row mt-2\">\n                                <div class=\"col-sm-4 mb-3\" *ngFor=\"let paramRes of deviceRes.paramData\">\n                                    <mat-card class=\"cardOverwrite\">\n                                        <ng-container *ngTemplateOutlet=\"parameterData; context: {\n                                                duration: dateService.getRelativeTimeAgoLabel(paramRes?.data?.date),\n                                                value: paramRes?.data?.value,\n                                                unit: paramRes?.unit,\n                                                label: paramRes?.label,\n                                                entityID: recentRes?.entityID,\n                                                deviceID: deviceRes?.id,\n                                                paramName: paramRes?.name\n                                            }\"></ng-container>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #parameterData let-duration=\"duration\" let-label=\"label\" let-value=\"value\" let-unit=\"unit\"\n    let-entityID=\"entityID\" let-deviceID=\"deviceID\" let-paramName=\"paramName\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 textDurationWithAgoTime\">\n            {{ duration }}\n        </div>\n        <div class=\"col-sm-6 text-end\">\n            <a class=\"text-primary cursorPointer\" matTooltip=\"Trend\" matTooltipPosition=\"below\"\n                (click)=\"showTrend(paramName, deviceID, entityID)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">trending_up</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 text-center\">\n            <span class=\"fs-1 fw-bold text-primary\">{{ value ? (value | number: '1.2-2') : commonConstant.HYPHEN\n                }}</span>\n            <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n        </div>\n    </div>\n    <div class=\"row mt-4 mb-4\">\n        <div class=\"col-sm-12 fs-5 text-center\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", styles: [".entity{text-transform:none;font-size:15px;font-weight:600}\n"], components: [{ type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i7$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i7$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "number": i7$1.DecimalPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-facility',
                    templateUrl: './facility.component.html',
                    styleUrls: ['./facility.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$3.Router }, { type: i1$1.StorageService }, { type: i3.DateService }, { type: TrendService }, { type: RecentDataService }, { type: AlertService }]; } });

const routes$b = [
    {
        path: '',
        component: FacilityComponent
    }
];
class FacilityRoutingModule {
}
FacilityRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FacilityRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
FacilityRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityRoutingModule, imports: [[RouterModule.forChild(routes$b)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$b)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class FacilityModule {
}
FacilityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FacilityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, declarations: [FacilityComponent], imports: [CommonModule,
        FacilityRoutingModule,
        TrendModule,
        SkeletonModule,
        MessageAlertModule,
        MatCardModule,
        MatTooltipModule] });
FacilityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, providers: [TrendService], imports: [[
            CommonModule,
            FacilityRoutingModule,
            TrendModule,
            SkeletonModule,
            MessageAlertModule,
            MatCardModule,
            MatTooltipModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FacilityComponent
                    ],
                    imports: [
                        CommonModule,
                        FacilityRoutingModule,
                        TrendModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatCardModule,
                        MatTooltipModule
                    ],
                    providers: [TrendService]
                }]
        }] });

class EntityDeviceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    //to chnge endpoint
    getDevicesWithEntities(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities/devices`, requestBody);
    }
    //TODO: SOMYA AGRAWAL: To discuss this api with Abhinav
    getDevicesWithEntitiesByParameter(orgID, paramMetric) {
        let params = new HttpParams();
        params = params.append('paramMetric', paramMetric);
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-devices`, { params: params });
    }
}
EntityDeviceController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
EntityDeviceController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class EntityDeviceService {
    constructor(entityDeviceController) {
        this.entityDeviceController = entityDeviceController;
    }
    getDevicesWithEntities(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let devicesWithEntitiesM;
            try {
                devicesWithEntitiesM = yield this.entityDeviceController.getDevicesWithEntities(orgID, requestBody).toPromise();
                if (devicesWithEntitiesM) {
                    return devicesWithEntitiesM;
                }
                else {
                    return [new DevicesWithEntities()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new DevicesWithEntities()];
            }
        });
    }
    getDevicesWithEntitiesByParameter(orgID, paramMetric) {
        return __awaiter(this, void 0, void 0, function* () {
            let devicesWithEntitiesM;
            try {
                devicesWithEntitiesM = yield this.entityDeviceController.getDevicesWithEntitiesByParameter(orgID, paramMetric).toPromise();
                if (devicesWithEntitiesM) {
                    return devicesWithEntitiesM;
                }
                else {
                    return [new DevicesWithEntities()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new DevicesWithEntities()];
            }
        });
    }
}
EntityDeviceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceService, deps: [{ token: EntityDeviceController }], target: i0.ɵɵFactoryTarget.Injectable });
EntityDeviceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: EntityDeviceController }]; } });

// /tsc-library/
class MeterDataDashboardComponent {
    constructor(storageService, recentDataService, entityDeviceService, parameterService, alertService, dateService, trendService) {
        this.storageService = storageService;
        this.recentDataService = recentDataService;
        this.entityDeviceService = entityDeviceService;
        this.parameterService = parameterService;
        this.alertService = alertService;
        this.dateService = dateService;
        this.trendService = trendService;
        this.commonConstant = COMMON_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.showAlert = false;
        this.showLoader = false;
        this.entityDeviceM = [new DevicesWithEntities()];
        this.parameterM = [new Parameter()];
        this.alertObj = new Alert();
        this.meterFC = new FormControl();
        this.meterSearchUtil = new MatSelectSearchService(['name']);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }
        this.getDevicesWithEntitiesByParameter();
    }
    getDevicesWithEntitiesByParameter() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            this.entityDeviceM = (yield this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric));
            this.meterSearchUtil.entityArr = this.entityDeviceM;
            this.meterSearchUtil.createSubscription();
            if (this.entityDeviceM.length > 1) {
                const deviceID = (_d = (_c = (_b = (_a = this.entityDeviceM) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['devices']) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d['id'];
                this.meterFC.patchValue(deviceID);
            }
        });
    }
    meterChange(selectedMeter) {
        clearTimeout(this.apiTimer);
        this.showLoader = true;
        this.meterFC.patchValue(selectedMeter);
        this.getParameterList();
    }
    getParameterList() {
        const selectedMeter = this.meterFC.value;
        this.getParametersByDeviceID(selectedMeter);
    }
    getParametersByDeviceID(deviceID) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {};
            requestBody['deviceID'] = [deviceID];
            this.parameterM = (yield this.parameterService.getParameterByDeviceID(this.orgID, requestBody));
            if (this.parameterM.length > 1) {
                this.getRecentMeterData(deviceID);
            }
        });
    }
    getRecentMeterData(deviceID) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.alertObj);
            try {
                let requestData = new RecentDataRequestWithParam();
                requestData.params = this.parameterM.map(param => ({ name: param.paramMetric }));
                requestData.deviceID = [deviceID];
                requestData.backscan = 1;
                requestData.timezone = this.timezone;
                this.meterDataRes = yield this.recentDataService.getRecentDataWithParam(this.orgID, requestData);
                if (((_a = this.meterDataRes) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                    this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                console.error(`Error in getRecentMeterData()`, error);
                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.apiTimer = setTimeout(() => {
                    this.getRecentMeterData(deviceID);
                }, 300000);
                this.showLoader = false;
            }
        });
    }
    showTrend(paramMetric, entityID) {
        let requestBody = {
            paramMetric: paramMetric,
            entityID: entityID,
            deviceID: this.meterFC.value
        };
        this.trendService.openDialog(requestBody);
    }
    ngOnDestroy() {
        clearTimeout(this.apiTimer);
    }
}
MeterDataDashboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardComponent, deps: [{ token: i1$1.StorageService }, { token: RecentDataService }, { token: EntityDeviceService }, { token: ParameterService }, { token: AlertService }, { token: i3.DateService }, { token: TrendService }], target: i0.ɵɵFactoryTarget.Component });
MeterDataDashboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MeterDataDashboardComponent, selector: "lib-meter-data", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Meter Data Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select meter</mat-label>\n                    <mat-select (selectionChange)=\"meterChange($event.value)\" [formControl]=\"meterFC\">\n                        <ng-container *ngIf=\"entityDeviceM && entityDeviceM.length > 1; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"meterSearchUtil.filterFC\"\n                                    placeholderLabel=\"Search by entity name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-optgroup *ngFor=\"let entity of meterSearchUtil.filteredEntities | async\"\n                                [label]=\"entity.name\" [disabled]=\"entity.disabled\">\n                                <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\">\n                                    {{ device.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"meterFC.touched && meterFC.hasError('required')\">\n                        Select meter\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <ng-container *ngIf=\"showLoader; else dataTemplate\">\n                <lib-skeleton-loader [count]=\"3\" [appearance]=\"''\"\n                    [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n            </ng-container>\n            <ng-template #dataTemplate>\n                <div class=\"col-sm-4 mb-3\" *ngFor=\"let meterData of meterDataRes\">\n                    <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                        <ng-container *ngTemplateOutlet=\"parameterData; context: {\n                            duration: dateService.getRelativeTimeAgoLabel(meterData?.data?.date),\n                            value: meterData?.data?.value,\n                            unit: meterData?.unit,\n                            label: meterData?.paramLabel,\n                            entityID: meterData?.entityID,\n                            paramName: meterData?.paramName\n                        }\"></ng-container>\n                    </mat-card>\n                </div>\n            </ng-template>\n        </div>\n\n    </div>\n</div>\n\n<ng-template #parameterData let-duration=\"duration\" let-label=\"label\" let-value=\"value\" let-unit=\"unit\"\n    let-entityID=\"entityID\" let-paramName=\"paramName\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 textDurationWithAgoTime\">\n            {{ duration }}\n        </div>\n        <div class=\"col-sm-6 text-end\">\n            <a class=\"text-primary cursorPointer\" matTooltip=\"Trend\" matTooltipPosition=\"below\"\n                (click)=\"showTrend(paramName, entityID)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">trending_up</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 text-center\">\n            <span class=\"fs-1 fw-bold text-primary\">{{ value ? (value | number: '1.2-2') : commonConstant.HYPHEN\n                }}</span>\n            <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n        </div>\n    </div>\n    <div class=\"row mt-4 mb-4\">\n        <div class=\"col-sm-12 fs-5 text-center\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", components: [{ type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i7$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }, { type: i7$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "async": i7$1.AsyncPipe, "number": i7$1.DecimalPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-meter-data',
                    templateUrl: './meter-data.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: RecentDataService }, { type: EntityDeviceService }, { type: ParameterService }, { type: AlertService }, { type: i3.DateService }, { type: TrendService }]; } });

const routes$a = [
    {
        path: '',
        component: MeterDataDashboardComponent
    }
];
class MeterDataRoutingModule {
}
MeterDataRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterDataRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
MeterDataRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataRoutingModule, imports: [[RouterModule.forChild(routes$a)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$a)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class MeterDataDashboardModule {
}
MeterDataDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterDataDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, declarations: [MeterDataDashboardComponent], imports: [CommonModule,
        MeterDataRoutingModule,
        TrendModule,
        FormsModule,
        ReactiveFormsModule,
        MessageAlertModule,
        SkeletonModule,
        NgxMatSelectSearchModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule] });
MeterDataDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, providers: [TrendService], imports: [[
            CommonModule,
            MeterDataRoutingModule,
            TrendModule,
            FormsModule,
            ReactiveFormsModule,
            MessageAlertModule,
            SkeletonModule,
            NgxMatSelectSearchModule,
            MatCardModule,
            MatTooltipModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MeterDataDashboardComponent
                    ],
                    imports: [
                        CommonModule,
                        MeterDataRoutingModule,
                        TrendModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MessageAlertModule,
                        SkeletonModule,
                        NgxMatSelectSearchModule,
                        MatCardModule,
                        MatTooltipModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule
                    ],
                    providers: [TrendService]
                }]
        }] });

class CgwaReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
CgwaReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CgwaReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CgwaReportComponent, selector: "lib-cgwa", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">CGWA Report</div>\n        </div>\n    </div>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-cgwa',
                    templateUrl: './cgwa.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

const routes$9 = [
    {
        path: '',
        component: CgwaReportComponent
    }
];
class CgwaReportRoutingModule {
}
CgwaReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CgwaReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
CgwaReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportRoutingModule, imports: [[RouterModule.forChild(routes$9)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$9)],
                    exports: [RouterModule]
                }]
        }] });

class CgwaReportModule {
}
CgwaReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CgwaReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, declarations: [CgwaReportComponent], imports: [CommonModule,
        CgwaReportRoutingModule] });
CgwaReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, imports: [[
            CommonModule,
            CgwaReportRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CgwaReportComponent
                    ],
                    imports: [
                        CommonModule,
                        CgwaReportRoutingModule
                    ]
                }]
        }] });

// /tsc-library/
class ReportService {
    constructor(dateService) {
        this.dateService = dateService;
    }
    extractTimestamp(dataInp) {
        if (!dataInp) {
            return [];
        }
        const allTimestamp = dataInp.reduce((timestamps, dataValues) => {
            if (dataValues && dataValues.data) {
                dataValues.data.forEach(entry => {
                    if (entry && entry.date) {
                        timestamps.add(entry.date);
                    }
                });
            }
            return timestamps;
        }, new Set());
        return Array.from(allTimestamp).sort();
    }
    populateTable(timestamp, dataInp, format) {
        return timestamp.map((time, index) => ({
            index: index + 1,
            time: this.dateService.formatDate(time, format),
            data: dataInp.map(aggregation => {
                const matchingEntry = aggregation.data.find(entry => entry.date == time);
                return matchingEntry ? matchingEntry.value : COMMON_CONSTANT.HYPHEN;
            })
        }));
    }
}
ReportService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, deps: [{ token: i3.DateService }], target: i0.ɵɵFactoryTarget.Injectable });
ReportService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i3.DateService }]; } });

class SourceLoadComponent {
    constructor() {
        this.listConstant = LIST_CONSTANT;
        this.categoryFC = new FormControl("source");
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.defaultCategoryInp && this.defaultCategoryInp) {
            this.categoryFC.patchValue(this.defaultCategoryInp);
        }
    }
    ngAfterViewInit() {
        this.emitFilter.emit();
    }
    categoryChange(selectedCategory) {
        this.categoryFC.patchValue(selectedCategory);
        this.emitFilter.emit();
    }
}
SourceLoadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SourceLoadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent, selector: "lib-source-load", inputs: { defaultCategoryInp: "defaultCategoryInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"categoryFC\" (change)=\"categoryChange(categoryFC.value)\">\n    <mat-button-toggle *ngFor=\"let category of listConstant.SOURCE_LOAD\" value=\"{{ category.value }}\">\n        {{ category.label }}\n    </mat-button-toggle>\n</mat-button-toggle-group>", components: [{ type: i6$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i6$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-source-load',
                    templateUrl: './source-load.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { defaultCategoryInp: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }] } });

// /tsc-library/
class ConsumptionBreakupComponent {
    constructor(storageService, toastService, tscCommonService, aggregateDataService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.tscCommonService = tscCommonService;
        this.aggregateDataService = aggregateDataService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.showAlert = false;
        this.showLoader = false;
        this.reportAlertObj = new Alert();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }
    }
    sourceLoadInpChange() {
        this.category = this.sourceLoadInput.categoryFC.value;
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
    }
    entityInpChange() {
        this.entityID = this.entityInput.multipleEntityFC.value;
    }
    viewReport() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (this.isValidInputField()) {
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            if (this.startDate == this.endDate) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
                return;
            }
            this.showLoader = true;
            try {
                const requestData = this.createDataRequest();
                this.reportData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                console.error("Error in viewReport()", error);
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    createDataRequest() {
        var _a;
        if (((_a = this.entityID) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.entityID = this.tscCommonService.removeSelectAllID(this.entityID);
        }
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityID = [this.entityID];
        requestData.params = [
            {
                name: this.paramMetric,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: this.category,
                sourceLoadType: 'all'
            }
        ];
        requestData.nullifyParams();
        return requestData;
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityInput.multipleEntityFC,
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
}
ConsumptionBreakupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupComponent, deps: [{ token: i1$1.StorageService }, { token: i2.ToastrService }, { token: i3$1.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionBreakupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupComponent, selector: "lib-consumption-breakup", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput [dropdownTypeInp]=\"dropdownTypeEnum.MULTIPLE_DROPDOWN\"\n                    (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: SourceLoadComponent, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i3.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-consumption-breakup',
                    templateUrl: './consumption-breakup.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: i2.ToastrService }, { type: i3$1.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { sourceLoadInput: [{
                type: ViewChild,
                args: ['sourceLoadInput']
            }], customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }], entityInput: [{
                type: ViewChild,
                args: ['entityInput']
            }] } });

const routes$8 = [
    {
        path: '',
        component: ConsumptionBreakupComponent
    }
];
class ConsumptionBreakupRoutingModule {
}
ConsumptionBreakupRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
ConsumptionBreakupRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupRoutingModule, imports: [[RouterModule.forChild(routes$8)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$8)],
                    exports: [RouterModule]
                }]
        }] });

class SourceLoadModule {
}
SourceLoadModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourceLoadModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule, declarations: [SourceLoadComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonToggleModule], exports: [SourceLoadComponent] });
SourceLoadModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatButtonToggleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SourceLoadComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatButtonToggleModule
                    ],
                    exports: [
                        SourceLoadComponent
                    ]
                }]
        }] });

// /tsc-library/
class ConsumptionBreakupModule {
}
ConsumptionBreakupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, declarations: [ConsumptionBreakupComponent], imports: [CommonModule,
        ConsumptionBreakupRoutingModule,
        SourceLoadModule,
        DateInputModule,
        AggregationDurationModule,
        EntityModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
ConsumptionBreakupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, imports: [[
            CommonModule,
            ConsumptionBreakupRoutingModule,
            SourceLoadModule,
            DateInputModule,
            AggregationDurationModule,
            EntityModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionBreakupComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionBreakupRoutingModule,
                        SourceLoadModule,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

// /tsc-library/
class DataAvailabilityReportComponent {
    constructor(storageService, toastService, tscCommonService, aggregateDataService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.tscCommonService = tscCommonService;
        this.aggregateDataService = aggregateDataService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.parameterList = [];
        this.showAlert = false;
        this.showLoader = false;
        this.reportAlertObj = new Alert();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }
    entityInpChange() {
        var _a, _b;
        this.entityID = this.entityInput.entityFC.value;
        (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
        (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
    }
    deviceInpChange() {
        var _a, _b;
        this.deviceID = this.deviceInput.deviceFC.value;
        (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
        (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
    }
    paramInpChange() {
        var _a;
        let paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
        if (paramMetric.length > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(paramMetric);
        }
    }
    viewReport() {
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (this.isValidInputField()) {
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            if (this.startDate == this.endDate) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
                return;
            }
            this.showLoader = true;
            try {
                //INFO: SOMYA AGRAWAL, to discuss..
            }
            catch (error) {
                console.error("Error in viewReport()", error);
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.entityInput.entityFC,
            this.deviceInput.deviceFC,
            this.paramInput.parameterFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
}
DataAvailabilityReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportComponent, deps: [{ token: i1$1.StorageService }, { token: i2.ToastrService }, { token: i3$1.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
DataAvailabilityReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DataAvailabilityReportComponent, selector: "lib-data-availability", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Data Availability Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"deviceID\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Entity </td>\n                            <td align=\"center\" class=\"fw-bold\"> Device </td>\n                            <td align=\"center\" class=\"fw-bold\"> Parameter </td>\n                            <td align=\"center\" class=\"fw-bold\"> Min Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Max Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Avg Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Data availability (%) </td>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <!-- INFO: SOMYA AGRAWAL, to discuss.. -->\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-data-availability',
                    templateUrl: './data-availability.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: i2.ToastrService }, { type: i3$1.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], entityInput: [{
                type: ViewChild,
                args: ['entityInput']
            }], deviceInput: [{
                type: ViewChild,
                args: ['deviceInput']
            }], paramInput: [{
                type: ViewChild,
                args: ['paramInput']
            }] } });

const routes$7 = [
    {
        path: '',
        component: DataAvailabilityReportComponent
    }
];
class DataAvailabilityReportRoutingModule {
}
DataAvailabilityReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataAvailabilityReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
DataAvailabilityReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportRoutingModule, imports: [[RouterModule.forChild(routes$7)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$7)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class DataAvailabilityReportModule {
}
DataAvailabilityReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataAvailabilityReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, declarations: [DataAvailabilityReportComponent], imports: [CommonModule,
        DataAvailabilityReportRoutingModule,
        DateInputModule,
        EntityModule,
        DeviceModule,
        ParamMetricModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
DataAvailabilityReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, imports: [[
            CommonModule,
            DataAvailabilityReportRoutingModule,
            DateInputModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DataAvailabilityReportComponent
                    ],
                    imports: [
                        CommonModule,
                        DataAvailabilityReportRoutingModule,
                        DateInputModule,
                        EntityModule,
                        DeviceModule,
                        ParamMetricModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule,
                    ]
                }]
        }] });

// /tsc-library/
class MeterReportComponent {
    constructor(storageService, toastService, tscCommonService, entityDeviceService, aggregateDataService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.tscCommonService = tscCommonService;
        this.entityDeviceService = entityDeviceService;
        this.aggregateDataService = aggregateDataService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.parameterList = [];
        this.showAlert = false;
        this.showLoader = false;
        this.entityDeviceM = [new DevicesWithEntities()];
        this.reportAlertObj = new Alert();
        this.meterFC = new FormControl();
        this.meterSearchUtil = new MatSelectSearchService(['name']);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }
        this.getDevicesWithEntitiesByParameter();
    }
    getDevicesWithEntitiesByParameter() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            this.entityDeviceM = (yield this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric));
            this.meterSearchUtil.entityArr = this.entityDeviceM;
            this.meterSearchUtil.createSubscription();
            if (this.entityDeviceM.length > 1) {
                const deviceID = (_d = (_c = (_b = (_a = this.entityDeviceM) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['devices']) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d['id'];
                this.meterFC.patchValue(deviceID);
                this.entityID = this.getEntityIDByDeviceID(deviceID);
            }
        });
    }
    meterChange(selectedMeter) {
        var _a, _b;
        (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
        (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
        this.meterFC.patchValue(selectedMeter);
        this.entityID = this.getEntityIDByDeviceID(selectedMeter);
    }
    getEntityIDByDeviceID(deviceID) {
        for (const entity of this.entityDeviceM) {
            for (const device of entity.devices) {
                if (device.id == deviceID) {
                    return entity.id;
                }
            }
        }
        return null;
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
    }
    paramInpChange() {
        var _a;
        let paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
        if (paramMetric.length > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(paramMetric);
        }
    }
    viewReport() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (this.isValidInputField()) {
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            if (this.startDate == this.endDate) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
                return;
            }
            this.showLoader = true;
            try {
                const requestData = this.createDataRequest();
                this.reportData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                console.error("Error in viewReport()", error);
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    createDataRequest() {
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityID = [this.entityID];
        requestData.deviceID = [this.meterFC.value];
        requestData.params = [];
        for (const paramMetric of this.parameterList) {
            requestData.params.push({
                name: paramMetric,
                dsAgg: "avg",
                agg: "avg"
            });
        }
        requestData.nullifyParams();
        return requestData;
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.meterFC,
            this.paramInput.parameterFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
}
MeterReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportComponent, deps: [{ token: i1$1.StorageService }, { token: i2.ToastrService }, { token: i3$1.TSCCommonService }, { token: EntityDeviceService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
MeterReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MeterReportComponent, selector: "lib-meter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Meter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select meter</mat-label>\n                    <mat-select (selectionChange)=\"meterChange($event.value)\" [formControl]=\"meterFC\">\n                        <ng-container *ngIf=\"entityDeviceM && entityDeviceM.length > 1; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"meterSearchUtil.filterFC\" placeholderLabel=\"Search by entity name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-optgroup *ngFor=\"let entity of meterSearchUtil.filteredEntities | async\" [label]=\"entity.name\"\n                                [disabled]=\"entity.disabled\">\n                                <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\">\n                                    {{ device.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"meterFC.touched && meterFC.hasError('required')\">\n                        Select meter\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"meterFC.value\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }, { type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i7$1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-meter',
                    templateUrl: './meter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: i2.ToastrService }, { type: i3$1.TSCCommonService }, { type: EntityDeviceService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }], paramInput: [{
                type: ViewChild,
                args: ['paramInput']
            }] } });

const routes$6 = [
    {
        path: '',
        component: MeterReportComponent
    }
];
class MeterReportRoutingModule {
}
MeterReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
MeterReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportRoutingModule, imports: [[RouterModule.forChild(routes$6)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$6)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class MeterReportModule {
}
MeterReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportModule, declarations: [MeterReportComponent], imports: [CommonModule,
        MeterReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputModule,
        AggregationDurationModule,
        ParamMetricModule,
        MessageAlertModule,
        SkeletonModule,
        NgxMatSelectSearchModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule] });
MeterReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportModule, imports: [[
            CommonModule,
            MeterReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            DateInputModule,
            AggregationDurationModule,
            ParamMetricModule,
            MessageAlertModule,
            SkeletonModule,
            NgxMatSelectSearchModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MeterReportComponent
                    ],
                    imports: [
                        CommonModule,
                        MeterReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DateInputModule,
                        AggregationDurationModule,
                        ParamMetricModule,
                        MessageAlertModule,
                        SkeletonModule,
                        NgxMatSelectSearchModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

// /tsc-library/
class ParameterReportComponent {
    constructor(storageService, toastService, tscCommonService, aggregateDataService, parameterService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.tscCommonService = tscCommonService;
        this.aggregateDataService = aggregateDataService;
        this.parameterService = parameterService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.paramMetric = [];
        this.metricListArray = [];
        this.showAlert = false;
        this.showLoader = false;
        this.parameterM = [new Parameter()];
        this.reportAlertObj = new Alert();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.getParameterByLayoutID();
    }
    getParameterByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByLayoutID(this.orgID));
        });
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
    }
    entityInpChange() {
        var _a, _b;
        this.entityID = this.entityInput.entityFC.value;
        (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
        (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
        this.parameterList = [];
    }
    deviceInpChange() {
        var _a, _b;
        this.deviceID = this.deviceInput.deviceFC.value;
        (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
        (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
        this.parameterList = [];
    }
    paramInpChange() {
        var _a, _b;
        this.paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
        if (((_b = this.paramMetric) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(this.paramMetric);
        }
    }
    aggInpChange(dsAgg, metric) {
        const metricList = [];
        if (dsAgg) {
            dsAgg.forEach(aggregation => {
                const metricObject = {
                    name: metric,
                    dsAgg: aggregation,
                    agg: "avg"
                };
                metricList.push(metricObject);
            });
        }
        this.metricListArray = this.metricListArray.filter(entry => entry.name != metric);
        this.metricListArray.push(...metricList);
    }
    viewReport() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (this.isValidInputField()) {
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            if (this.startDate == this.endDate) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
                return;
            }
            this.showLoader = true;
            try {
                const requestData = this.createDataRequest();
                this.reportData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                console.error("Error in viewReport()", error);
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    createDataRequest() {
        const filteredMetricListArray = this.metricListArray.filter(metric => this.parameterList.includes(metric.name));
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityID = [this.entityID];
        requestData.deviceID = [this.deviceID];
        requestData.params = [];
        requestData.params.push(...filteredMetricListArray.map(metric => ({
            name: metric.name,
            dsAgg: metric.dsAgg,
            agg: metric.agg,
        })));
        requestData.nullifyParams();
        return requestData;
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityInput.entityFC,
            this.deviceInput.deviceFC,
            this.paramInput.parameterFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
    getParameterLabel(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'paramMetric', paramMetricValue);
        return parameter ? parameter.label : '';
    }
}
ParameterReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportComponent, deps: [{ token: i1$1.StorageService }, { token: i2.ToastrService }, { token: i3$1.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
ParameterReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterReportComponent, selector: "lib-parameter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }, { propertyName: "aggInput", first: true, predicate: ["aggInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Parameter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"deviceID\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"paramMetric && paramMetric.length > 0\">\n            <table class=\"table\">\n                <tbody>\n                    <tr class=\"tableHeader\">\n                        <td align=\"center\" class=\"fw-bold\"> Metric </td>\n                        <td align=\"center\" class=\"fw-bold\"> Aggregation </td>\n                    </tr>\n                </tbody>\n                <tbody>\n                    <tr *ngFor=\"let metric of parameterList; let i = index\">\n                        <td align=\"center\">\n                            <div class=\"mt-4\">\n                                {{ getParameterLabel(metric) }}\n                            </div>\n                        </td>\n                        <td align=\"center\">\n                            <div class=\"col-sm-6 mt-3\">\n                                <lib-aggregation #aggInput\n                                    (emitFilter)=\"aggInpChange(aggInput.aggregationFC.value, metric)\"></lib-aggregation>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: AggregationComponent, selector: "lib-aggregation", outputs: ["emitFilter"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parameter',
                    templateUrl: './parameter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: i2.ToastrService }, { type: i3$1.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }], entityInput: [{
                type: ViewChild,
                args: ['entityInput']
            }], deviceInput: [{
                type: ViewChild,
                args: ['deviceInput']
            }], paramInput: [{
                type: ViewChild,
                args: ['paramInput']
            }], aggInput: [{
                type: ViewChild,
                args: ['aggInput']
            }] } });

const routes$5 = [
    {
        path: '',
        component: ParameterReportComponent
    }
];
class ParameterReportRoutingModule {
}
ParameterReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParameterReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
ParameterReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportRoutingModule, imports: [[RouterModule.forChild(routes$5)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$5)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ParameterReportModule {
}
ParameterReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParameterReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportModule, declarations: [ParameterReportComponent], imports: [CommonModule,
        ParameterReportRoutingModule,
        DateInputModule,
        AggregationDurationModule,
        EntityModule,
        DeviceModule,
        ParamMetricModule,
        AggregationModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
ParameterReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportModule, imports: [[
            CommonModule,
            ParameterReportRoutingModule,
            DateInputModule,
            AggregationDurationModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            AggregationModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParameterReportComponent
                    ],
                    imports: [
                        CommonModule,
                        ParameterReportRoutingModule,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityModule,
                        DeviceModule,
                        ParamMetricModule,
                        AggregationModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

// /tsc-library/
class RawDataReportComponent {
    constructor(storageService, toastService, tscCommonService, aggregateDataService, parameterService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.tscCommonService = tscCommonService;
        this.aggregateDataService = aggregateDataService;
        this.parameterService = parameterService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.showAlert = false;
        this.showLoader = false;
        this.parameterM = [new Parameter()];
        this.reportAlertObj = new Alert();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }
    entityInpChange() {
        this.entityID = this.entityInput.entityFC.value;
    }
    deviceInpChange() {
        this.deviceID = this.deviceInput.deviceFC.value;
        if (this.deviceID) {
            this.getParameterByDeviceID(this.deviceID);
        }
    }
    getParameterByDeviceID(deviceID) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {};
            requestBody['deviceID'] = [deviceID];
            this.parameterM = (yield this.parameterService.getParameterByDeviceID(this.orgID, requestBody));
        });
    }
    viewReport() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (!this.parameterM || this.parameterM.length == 0 || !this.parameterM[0]['id']) {
                yield this.getParameterByDeviceID(this.deviceID);
            }
            if (this.isValidInputField()) {
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            if (this.startDate == this.endDate) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
                return;
            }
            this.dayDifference = this.getTimeDifference(this.startDate, this.endDate);
            if (this.dayDifference <= 1) {
                try {
                    this.showLoader = true;
                    const requestData = this.createDataRequest();
                    this.reportData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                    if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        this.timestamp = this.reportService.extractTimestamp(this.reportData);
                        this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                    }
                    else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                        this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                    }
                }
                catch (error) {
                    console.error("Error in viewReport()", error);
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
                }
                finally {
                    this.showLoader = false;
                }
            }
            else {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.TIME_EXCEEDED_LABEL, ReportErrorEnum.TIME_EXCEEDED_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            }
        });
    }
    createDataRequest() {
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = "raw";
        requestData.entityID = [this.entityID];
        requestData.deviceID = [this.deviceID];
        requestData.params = this.parameterM.map(param => ({
            name: param.paramMetric,
            dsAgg: 'avg',
            agg: 'avg'
        }));
        requestData.nullifyParams();
        return requestData;
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.entityInput.entityFC,
            this.deviceInput.deviceFC,
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
    getTimeDifference(startTime, endTime) {
        const date1 = new Date(startTime).getTime();
        const date2 = new Date(endTime).getTime();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
}
RawDataReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportComponent, deps: [{ token: i1$1.StorageService }, { token: i2.ToastrService }, { token: i3$1.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
RawDataReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RawDataReportComponent, selector: "lib-raw-data", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Raw Data Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-raw-data',
                    templateUrl: './raw-data.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: i2.ToastrService }, { type: i3$1.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], entityInput: [{
                type: ViewChild,
                args: ['entityInput']
            }], deviceInput: [{
                type: ViewChild,
                args: ['deviceInput']
            }] } });

const routes$4 = [
    {
        path: '',
        component: RawDataReportComponent
    }
];
class RawDataReportRoutingModule {
}
RawDataReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RawDataReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
RawDataReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportRoutingModule, imports: [[RouterModule.forChild(routes$4)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$4)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class RawDataReportModule {
}
RawDataReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RawDataReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportModule, declarations: [RawDataReportComponent], imports: [CommonModule,
        RawDataReportRoutingModule,
        DateInputModule,
        EntityModule,
        DeviceModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
RawDataReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportModule, imports: [[
            CommonModule,
            RawDataReportRoutingModule,
            DateInputModule,
            EntityModule,
            DeviceModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RawDataReportComponent
                    ],
                    imports: [
                        CommonModule,
                        RawDataReportRoutingModule,
                        DateInputModule,
                        EntityModule,
                        DeviceModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

// /tsc-library/
class DerivedParameterComponent {
    constructor(storageService, toastService, tscCommonService, aggregateDataService, parameterService, entityService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.tscCommonService = tscCommonService;
        this.aggregateDataService = aggregateDataService;
        this.parameterService = parameterService;
        this.entityService = entityService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.showAlert = false;
        this.showLoader = false;
        this.totalParameterCount = 0;
        this.allParameterID = [];
        this.parameterM = [new Parameter()];
        this.entityM = [new Entity()];
        this.parameterFC = new FormControl([], [Validators.required]);
        this.entityFC = new FormControl([], [Validators.required]);
        this.paramSearchUtil = new MatSelectSearchService(['label']);
        this.entitySearchUtil = new MatSelectSearchService(['name']);
        this.reportAlertObj = new Alert();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.getDerivedParameterByLayoutID();
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
    }
    getDerivedParameterByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getDerivedParameterByLayoutID(this.orgID));
            this.paramSearchUtil.entityArr = this.parameterM;
            this.paramSearchUtil.createSubscription();
            this.totalParameterCount = this.parameterM.length;
            this.parameterM.forEach(parameter => this.allParameterID.push(parameter['paramMetric']));
        });
    }
    selectAllParameters() {
        if (!this.parameterFC.value.includes(-1)) {
            this.parameterFC.reset([]);
            return;
        }
        this.parameterFC.setValue([-1, ...this.allParameterID]);
        this.getEntityByParameterID();
    }
    selectedParameters() {
        const selected = this.parameterFC.value;
        if (selected.includes(-1)) {
            selected.shift();
            this.parameterFC.patchValue(selected);
        }
        else if (this.parameterFC.value.length == this.totalParameterCount) {
            this.allParameterID.splice(0, 0, -1);
            this.parameterFC.patchValue(this.allParameterID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.parameterFC.patchValue(filteredSelected);
        }
        this.getEntityByParameterID();
    }
    getEntityByParameterID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityFC.reset();
            this.selectedParamMetric = this.tscCommonService.removeSelectAllID(this.parameterFC.value);
            let parameter = this.parameterM.filter(param => this.selectedParamMetric.includes(param.paramMetric));
            let parameterID = parameter.map(param => param.id);
            let requestBody = {};
            requestBody['parameterID'] = parameterID;
            this.entityM = (yield this.entityService.getEntityByParameterID(this.orgID, requestBody));
            this.entitySearchUtil.entityArr = this.entityM;
            this.entitySearchUtil.createSubscription();
        });
    }
    entityChange(selectedEntity) {
        this.entityFC.patchValue(selectedEntity);
    }
    viewReport() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (this.isValidInputField()) {
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            if (this.startDate == this.endDate) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
                return;
            }
            this.showLoader = true;
            try {
                const requestData = this.createDataRequest();
                this.reportData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                console.error("Error in viewReport()", error);
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    createDataRequest() {
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityID = [this.entityFC.value];
        requestData.params = [];
        for (const paramMetric of this.selectedParamMetric) {
            requestData.params.push({
                name: paramMetric,
                dsAgg: "sum",
                agg: "sum"
            });
        }
        requestData.nullifyParams();
        return requestData;
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.parameterFC,
            this.entityFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
}
DerivedParameterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterComponent, deps: [{ token: i1$1.StorageService }, { token: i2.ToastrService }, { token: i3$1.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: EntityService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
DerivedParameterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DerivedParameterComponent, selector: "lib-derived-parameter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Derived Parameter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select parameter</mat-label>\n                    <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noParameterFound\">\n                        <mat-select [formControl]=\"parameterFC\" multiple required>\n                            <ngx-mat-select-search [formControl]=\"paramSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                                noEntriesFoundLabel=\"No matching name found.\">\n                            </ngx-mat-select-search>\n                            <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\" [hidden]=\"paramSearchUtil.filterFC.value\">\n                                Select all\n                            </mat-option>\n                            <mat-option *ngFor=\"let parameter of paramSearchUtil.filteredEntities | async\"\n                                [value]=\"parameter.paramMetric\" (click)=\"selectedParameters()\">\n                                {{ parameter.label }}\n                            </mat-option>\n                        </mat-select>\n                    </ng-container>\n                    <ng-template #noParameterFound>\n                        <mat-select [formControl]=\"parameterFC\">\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </mat-select>\n                    </ng-template>\n                    <mat-error *ngIf=\"parameterFC.touched && parameterFC.hasError('required')\">\n                        Select parameter\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select entity</mat-label>\n                    <mat-select (selectionChange)=\"entityChange($event.value)\" [formControl]=\"entityFC\" required>\n                        <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noEntityFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\">\n                                {{ entity.name }}\n                            </mat-option>\n                        </ng-container>\n                        <ng-template #noEntityFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"entityFC.touched && entityFC.hasError('required')\">\n                        Select entity\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3$2.MatLabel, selector: "mat-label" }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$2.MatError, selector: "mat-error", inputs: ["id"] }, { type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i7$1.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-derived-parameter',
                    templateUrl: './derived-parameter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: i2.ToastrService }, { type: i3$1.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: EntityService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }] } });

const routes$3 = [
    {
        path: '',
        component: DerivedParameterComponent
    }
];
class DerivedParameterRoutingModule {
}
DerivedParameterRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DerivedParameterRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
DerivedParameterRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterRoutingModule, imports: [[RouterModule.forChild(routes$3)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$3)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class DerivedParameterModule {
}
DerivedParameterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DerivedParameterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterModule, declarations: [DerivedParameterComponent], imports: [CommonModule,
        DerivedParameterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputModule,
        AggregationDurationModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        NgxMatSelectSearchModule] });
DerivedParameterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterModule, imports: [[
            CommonModule,
            DerivedParameterRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            DateInputModule,
            AggregationDurationModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DerivedParameterComponent
                    ],
                    imports: [
                        CommonModule,
                        DerivedParameterRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DateInputModule,
                        AggregationDurationModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        NgxMatSelectSearchModule
                    ]
                }]
        }] });

// /tsc-library/
class UsageAcrossFacilityComponent {
    constructor(storageService, toastService, tscCommonService, aggregateDataService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.tscCommonService = tscCommonService;
        this.aggregateDataService = aggregateDataService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.showAlert = false;
        this.showLoader = false;
        this.reportAlertObj = new Alert();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }
    }
    sourceLoadInpChange() {
        this.category = this.sourceLoadInput.categoryFC.value;
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
    }
    viewReport() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (this.isValidInputField()) {
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            if (this.startDate == this.endDate) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
                return;
            }
            this.showLoader = true;
            try {
                const requestData = this.createDataRequest();
                this.reportData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                console.error("Error in viewReport()", error);
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    createDataRequest() {
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.params = [
            {
                name: this.paramMetric,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: this.category,
                sourceLoadType: 'all'
            }
        ];
        requestData.nullifyParams();
        return requestData;
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
}
UsageAcrossFacilityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityComponent, deps: [{ token: i1$1.StorageService }, { token: i2.ToastrService }, { token: i3$1.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
UsageAcrossFacilityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UsageAcrossFacilityComponent, selector: "lib-usage-across-facility", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Usage Across Facility Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: SourceLoadComponent, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i3.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-usage-across-facility',
                    templateUrl: './usage-across-facility.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: i2.ToastrService }, { type: i3$1.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { sourceLoadInput: [{
                type: ViewChild,
                args: ['sourceLoadInput']
            }], customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }] } });

const routes$2 = [
    {
        path: '',
        component: UsageAcrossFacilityComponent
    }
];
class UsageAcrossFacilityRoutingModule {
}
UsageAcrossFacilityRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UsageAcrossFacilityRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
UsageAcrossFacilityRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityRoutingModule, imports: [[RouterModule.forChild(routes$2)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$2)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class UsageAcrossFacilityModule {
}
UsageAcrossFacilityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UsageAcrossFacilityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, declarations: [UsageAcrossFacilityComponent], imports: [CommonModule,
        UsageAcrossFacilityRoutingModule,
        SourceLoadModule,
        DateInputModule,
        AggregationDurationModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
UsageAcrossFacilityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, imports: [[
            CommonModule,
            UsageAcrossFacilityRoutingModule,
            SourceLoadModule,
            DateInputModule,
            AggregationDurationModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UsageAcrossFacilityComponent
                    ],
                    imports: [
                        CommonModule,
                        UsageAcrossFacilityRoutingModule,
                        SourceLoadModule,
                        DateInputModule,
                        AggregationDurationModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

const routes$1 = [
    {
        path: 'page',
        loadChildren: () => Promise.resolve().then(function () { return page_module; }).then(m => m.PageModule)
    },
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
LayoutRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutRoutingModule, imports: [[RouterModule.forChild(routes$1)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule]
                }]
        }] });

class LayoutModule {
}
LayoutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutModule, imports: [CommonModule,
        LayoutRoutingModule] });
LayoutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutModule, imports: [[
            CommonModule,
            LayoutRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        LayoutRoutingModule
                    ]
                }]
        }] });

var TscLiteButtonLabelEnum;
(function (TscLiteButtonLabelEnum) {
    TscLiteButtonLabelEnum["LAYOUT_BTN_LABEL"] = "Layout";
    TscLiteButtonLabelEnum["EXPORT_BTN_LABEL"] = "Export as";
})(TscLiteButtonLabelEnum || (TscLiteButtonLabelEnum = {}));

// /tsc-library/
class LayoutController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getLayoutByPage(pageNo, pageSize, sortBy, orderBy, search, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        search.forEach(search => params = params.append('search', search));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/page`, { params: params });
    }
}
LayoutController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

// /tsc-library/
class PageComponent {
    constructor(storageService, layoutController) {
        this.storageService = storageService;
        this.layoutController = layoutController;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.TscLiteButtonLabelEnum = TscLiteButtonLabelEnum;
        this.faPlus = faPlus;
        this.faEllipsisV = faEllipsisV;
        this.displayedColumn = ['id', 'name', 'description', 'option'];
        this.resultLength = 0;
        this.dataSource = [];
        this.searchFlag = false;
        this.searchArr = [];
        this.entityTypeLoader = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }
    ngAfterViewInit() {
        merge(this.paginator.page, this.sort.sortChange, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), switchMap(() => {
            this.searchArr = [];
            if (this.searchFlag) {
                this.searchArr.push('name:' + this.searchValue);
            }
            return this.layoutController.getLayoutByPage(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.searchArr, this.orgID).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.resultLength = 0;
                return [];
            }
            this.entityTypeLoader = false;
            this.resultLength = response["totalCount"];
            return response["records"];
        })).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }
    searchFn(value) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        }
        else {
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }
    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }
}
PageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageComponent, deps: [{ token: i1$1.StorageService }, { token: LayoutController }], target: i0.ɵɵFactoryTarget.Component });
PageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageComponent, selector: "app-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Layout</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n                <a class=\"btn btn-sm btn-success btnBase\" matRipple>\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>&nbsp; {{ TscLiteButtonLabelEnum.LAYOUT_BTN_LABEL }}\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <table mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\" matSortDirection=\"asc\"\n        matSortDisableClear>\n\n        <ng-container matColumnDef=\"id\">\n            <th class=\"columnWidth1 px-3\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                ID\n            </th>\n            <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">\n                {{ row['id'] }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n            <th class=\"columnWidth2 px-3\" mat-header-cell *matHeaderCellDef> Name </th>\n            <td class=\"columnWidth2 px-3\" mat-cell *matCellDef=\"let row\"\n                [matTooltip]=\"row?.['name']?.length>24? row['name']: ''\" matTooltipPosition=\"above\"\n                matTooltipClass=\"nameTooltip\">\n                {{ row?.['name'] | dotdotdot:24}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"description\">\n            <th class=\"columnWidth2 px-3\" mat-header-cell *matHeaderCellDef> Description </th>\n            <td class=\"columnWidth2 px-3\" mat-cell *matCellDef=\"let row\"\n                [matTooltip]=\"row?.['description']?.length>24? row['description']: ''\" matTooltipPosition=\"above\"\n                matTooltipClass=\"nameTooltip\">\n                {{ row?.['description'] | dotdotdot:24}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"option\">\n            <th class=\"columnWidth3\" mat-header-cell *matHeaderCellDef> Action </th>\n            <td class=\"columnWidth3 text-center\" mat-cell *matCellDef=\"let row\">\n                <div class=\"d-flex align-items-center\">\n                    <div class=\"btn-group\" ngbDropdown placement=\"left\">\n                        <button type=\"button\" ngbDropdownToggle class=\"dropdown-after dropdownAfter btn\">\n                            <fa-icon [icon]=\"faEllipsisV\"></fa-icon>\n                        </button>\n                        <div ngbDropdownMenu>\n                            <button class=\"dropdown-item\">\n                                {{ ButtonLabelEnum.UPDATE }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\" class=\"data-row\"></tr>\n\n        <tr class=\"mat-row\" *matNoDataRow>\n            <ng-container *ngIf=\"entityTypeLoader; else showEntityType\">\n                <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n            </ng-container>\n            <ng-template #showEntityType>\n                <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                    {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                </td>\n            </ng-template>\n        </tr>\n    </table>\n\n    <ng-template #showLoader let-count=\"count\" class=\"text-center\">\n        <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n            <lib-skeleton-loader [count]=\"count\" [appearance]=\"'circle'\"\n                [theme]=\"{}\">\n            </lib-skeleton-loader>\n        </td>\n    </ng-template>\n\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:200px}.columnWidth3{min-width:140px}\n"], components: [{ type: i3$1.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i4$1.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i5$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i6$3.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i5$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i5$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i3$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i7$3.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i6$3.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i5$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i5$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i5$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i5$1.MatCellDef, selector: "[matCellDef]" }, { type: i5$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i10$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i10$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i10$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i5$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i5$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i5$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { type: i7$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "dotdotdot": i3$1.EllipsisPipeService } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-page',
                    templateUrl: './page.component.html',
                    styleUrls: ['./page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.StorageService }, { type: LayoutController }]; }, propDecorators: { sort: [{
                type: ViewChild,
                args: ['sort']
            }], paginator: [{
                type: ViewChild,
                args: ['paginator']
            }], refreshBtn: [{
                type: ViewChild,
                args: ['refreshBtn']
            }], searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }] } });

const routes = [
    {
        path: '',
        component: PageComponent
    }
];
class PageRoutingModule {
}
PageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, imports: [i1$3.RouterModule], exports: [RouterModule] });
PageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class PageModule {
}
PageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, declarations: [PageComponent], imports: [CommonModule,
        PageRoutingModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        NgbModule,
        FontAwesomeModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatTooltipModule,
        SkeletonModule] });
PageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, imports: [[
            CommonModule,
            PageRoutingModule,
            SearchBarOneModule,
            EllipsisPipeModule,
            NgbModule,
            FontAwesomeModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatDialogModule,
            MatTooltipModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageComponent
                    ],
                    imports: [
                        CommonModule,
                        PageRoutingModule,
                        SearchBarOneModule,
                        EllipsisPipeModule,
                        NgbModule,
                        FontAwesomeModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatSortModule,
                        MatDialogModule,
                        MatTooltipModule,
                        SkeletonModule
                    ]
                }]
        }] });

var page_module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PageModule: PageModule
});

/*
 * Public API Surface of tsc-lite
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AggregateDataController, AggregateDataService, AggregationComponent, AggregationDurationComponent, AggregationDurationModule, AggregationModule, Alert, BalanceComponent, BalanceModule, CgwaReportComponent, CgwaReportModule, ConsumptionBreakupComponent, ConsumptionBreakupDashboardComponent, ConsumptionBreakupDashboardModule, ConsumptionBreakupModule, ConsumptionComponent, ConsumptionModule, DataAvailabilityReportComponent, DataAvailabilityReportModule, DerivedParameterComponent, DerivedParameterModule, Device, DeviceComponent, DeviceController, DeviceInfo, DeviceModule, DeviceService, DevicesWithEntities, Entity, EntityComponent, EntityController, EntityDashboardComponent, EntityDashboardModule, EntityLevelConsumption, EntityModule, EntityService, EntityTree, EntityType, FacilityComponent, FacilityModule, HomeComponent, HomeModule, LIST_CONSTANT, LayoutModule, MeterDataDashboardComponent, MeterDataDashboardModule, MeterReportComponent, MeterReportModule, OrgRecentData, PageModule, ParamMetricComponent, ParamMetricModule, Parameter, ParameterComponent, ParameterController, ParameterModule, ParameterReportComponent, ParameterReportModule, ParameterService, RawDataReportComponent, RawDataReportModule, RecentDataController, RecentDataRequestWithParam, RecentDataRequestWithoutParam, RecentDataService, ReportService, Shift, ShiftComponent, ShiftController, ShiftModule, ShiftService, TrendComponent, TrendModule, TrendService, TscLiteComponent, TscLiteModule, TscLiteService, Unit, UnitComponent, UnitController, UnitModule, UnitService, UsageAcrossFacilityComponent, UsageAcrossFacilityModule };
//# sourceMappingURL=library-tsc-lite.js.map
