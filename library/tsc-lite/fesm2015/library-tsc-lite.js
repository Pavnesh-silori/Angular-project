import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { map, catchError, startWith, switchMap, filter, tap } from 'rxjs/operators';
import * as i1$1 from '@angular/router';
import { RouterModule, NavigationEnd } from '@angular/router';
import * as i1$2 from '@library/storage-service';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import * as i14 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/forms';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i1$3 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i6 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i12$3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i11 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { __awaiter, __rest } from 'tslib';
import * as moment from 'moment';
import * as i3 from '@library/tsc-common';
import { MaterialFormFieldAppearance, DialogEnum, MATERIAL_CONSTANT, FileTypeEnum, FormErrorEnum, COMMON_CONSTANT, MatSelectSearchService, FREQUENCY_CONSTANT, SkeletonModule, SearchBarTwoModule, MessageAlertTypeEnum, MessageAlertIconEnum, MessageAlertModule, ButtonLabelEnum, InvalidForm, Static, TABLE_CONSTANT, ButtonTooltipEnum, DialogResponseEnum, FormAction, DialogOneComponent, DialogOneEnum, SearchBarOneModule, FunnelFilterModule, EllipsisPipeModule, PageTitleEnum } from '@library/tsc-common';
import * as i2 from '@library/date';
import { DateTimeIntervalEnum, FrequencyEnum, DateTypeEnum, DateFilterTwoModule, CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputTypeEnum, DateInputModule } from '@library/date';
import * as i10$1 from '@library/echart';
import { ChartTypeEnum, ChartViewStateEnum, ChartTitle, BasicAreaLineBarChart, BasicAreaLineBarModule, StackBarChart, StackBarModule, DoughnutChart, DoughnutModule } from '@library/echart';
import * as i10 from '@angular/material/core';
import { MatRippleModule, MatOptionModule } from '@angular/material/core';
import * as i13 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i12$2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i12 from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i5 from '@library/layout-service';
import { Layout } from '@library/layout-service';
import * as i3$2 from '@library/organization-service';
import * as i6$1 from 'ngx-mat-select-search';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import * as i9 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i12$1 from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import * as i7 from 'ng-circle-progress';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ApplicationKeyID } from '@library/application-service';
import * as i1$4 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i5$1 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i2$2 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import * as i2$3 from '@library/toastr-service';
import { ToastrColor, ToastrTitle } from '@library/toastr-service';
import * as i7$1 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i9$1 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i11$1 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import * as i4$1 from '@library/user-service';
import { UserContext, User, ProfileImg } from '@library/user-service';
import * as i8 from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import * as i9$2 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i10$2 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i6$2 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { merge, fromEvent, of } from 'rxjs';
import { faPlus, faCaretDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { isEqual } from 'lodash';
import * as i10$3 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i4$2 from 'ngx-echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import * as i17 from '@angular/cdk/clipboard';
import { ClipboardModule } from '@angular/cdk/clipboard';
import * as i11$2 from 'ngx-smart-popover';
import { PopoverModule } from 'ngx-smart-popover';
import { SelectionModel } from '@angular/cdk/collections';

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
            label: "PDF",
            value: "pdf"
        },
        {
            label: "CSV",
            value: "csv"
        },
        {
            label: "XLSX",
            value: "xlsx"
        }
    ],
    SOURCE_LOAD: [] = [
        {
            label: "Source",
            value: "source"
        },
        {
            label: "Consumer",
            value: "load"
        }
    ],
    HOURLY_NOTIFICATION_FREQUENCY: [] = [
        {
            hour: 1,
            label: "1 Hr",
            value: "HOURS_1"
        },
        {
            hour: 2,
            label: "2 Hrs",
            value: "HOURS_2"
        },
        {
            hour: 4,
            label: "4 Hrs",
            value: "HOURS_4"
        },
        {
            hour: 6,
            label: "6 Hrs",
            value: "HOURS_6"
        },
        {
            hour: 8,
            label: "8 Hrs",
            value: "HOURS_8"
        },
        {
            hour: 12,
            label: "12 Hrs",
            value: "HOURS_12"
        },
        {
            hour: 24,
            label: "24 Hrs",
            value: "HOURS_24"
        }
    ],
    HOURLY_REMINDER_FREQUENCY: [] = [
        {
            hour: 2,
            label: "2 Hrs",
            value: "HOURS_2"
        },
        {
            hour: 4,
            label: "4 Hrs",
            value: "HOURS_4"
        },
        {
            hour: 6,
            label: "6 Hrs",
            value: "HOURS_6"
        },
        {
            hour: 12,
            label: "12 Hrs",
            value: "HOURS_12"
        },
        {
            hour: 24,
            label: "24 Hrs",
            value: "HOURS_24"
        },
        {
            hour: 48,
            label: "48 Hrs",
            value: "HOURS_48"
        }
    ],
    ENERGY_APP_SCHEDULE_REPORT_TYPE: [] = [
        {
            label: "Energy sourcing report",
            value: "SOURCING_REPORT"
        },
        {
            label: "Energy breakup report",
            value: "BREAKUP_REPORT"
        },
        {
            label: "Energy consumption report",
            value: "CONSUMPTION_REPORT"
        },
        {
            label: "Temperature Report",
            value: "TEMPERATURE_REPORT"
        }
    ],
    WATER_APP_SCHEDULE_REPORT_TYPE: [] = [
        {
            label: "Water sourcing report",
            value: "SOURCING_REPORT"
        },
        {
            label: "Water breakup report",
            value: "BREAKUP_REPORT"
        },
        {
            label: "Water consumption report",
            value: "CONSUMPTION_REPORT"
        },
        {
            label: "CGWA Report",
            value: "CGWA_REPORT"
        }
    ]
};

var ReportErrorEnum;
(function (ReportErrorEnum) {
    ReportErrorEnum["INVALID_DATE_LABEL"] = "Invalid dates!";
    ReportErrorEnum["INVALID_DATE_MESSAGE"] = "Select distinct dates to view the desired report.";
    ReportErrorEnum["TIME_EXCEEDED_LABEL"] = "Time exceeded!";
    ReportErrorEnum["HOUR_24_TIME_EXCEEDED_MESSAGE"] = "You cannot view or download report for more than 24 hours.";
    ReportErrorEnum["DAY_30_TIME_EXCEEDED_MESSAGE"] = "You cannot view or download report for more than 30 days.";
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

var ScheduleReportTypeEnum;
(function (ScheduleReportTypeEnum) {
    ScheduleReportTypeEnum["SOURCING_REPORT"] = "SOURCING_REPORT";
    ScheduleReportTypeEnum["BREAKUP_REPORT"] = "BREAKUP_REPORT";
    ScheduleReportTypeEnum["CONSUMPTION_REPORT"] = "CONSUMPTION_REPORT";
    ScheduleReportTypeEnum["CGWA_REPORT"] = "CGWA_REPORT";
    ScheduleReportTypeEnum["TEMPERATURE_REPORT"] = "TEMPERATURE_REPORT";
})(ScheduleReportTypeEnum || (ScheduleReportTypeEnum = {}));

class Alert {
    constructor() {
        this.showAlert = false;
        this.alertLabel = '';
        this.alertContent = '';
        this.messageAlertType = '';
        this.messageAlertIcon = '';
    }
}

class Parameter {
}
class ConsumptionParameter {
}
class SavedConsumptionParameter {
}

class Entity {
}
class ParameterEntity {
}
class EntityWithChildren {
    constructor() {
        this.id = null;
        this.name = null;
        this.type = null;
        this.entityStatusFlag = false;
        this.children = [];
    }
}
class EntityLevelConsumption {
}
class EntityType {
    constructor() {
        this.type = null;
    }
}
class DashboardEntities {
    constructor() {
        this.id = null;
        this.name = null;
        this.type = null;
        this.status = null;
    }
}

class Device {
}
class DevicesWithEntities {
}
class StatusInfo {
}
class DeviceMapping {
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
        this.entityID = null;
        this.timezone = null;
        this.entityType = null;
        this.backscan = null;
    }
}
class OrgRecentData {
    constructor() {
        this.orgID = null;
        this.entityID = null;
        this.entityName = null;
        this.entityType = null;
        this.entityStatusFlag = false;
        this.deviceData = null;
    }
}
class DeviceRecentData {
    constructor() {
        this.deviceID = null;
        this.deviceName = null;
        this.status = null;
        this.paramData = [];
    }
}

class DownloadReportRequest {
    constructor() {
        this.request = null;
        this.reportName = null;
        this.reportFormat = null;
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
class MeterData {
}

class MakeModel {
}

class RegulatorType {
}
class RegulatorsEntities {
    constructor() {
        this.regulator = {
            id: null,
            name: null
        };
        this.entity = {
            id: null,
            name: null
        };
        this.status = null;
    }
}

class ParameterController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getParameterByOrgID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/parameters`);
    }
    getParameterByLayoutID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters`);
    }
    getParameterByDeviceID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/parameters`, requestBody);
    }
    getParameterByEntityType(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entity-type/parameters`, requestBody);
    }
    getConsumptionParameter(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption-parameters`);
    }
    saveConsumptionParameter(orgID, parameter) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption-parameters`, parameter);
    }
    getSavedConsumptionParameter(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/saved-consumption-parameters`);
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
class ResolveGuard {
    constructor(router, storageService, parameterController) {
        this.router = router;
        this.storageService = storageService;
        this.parameterController = parameterController;
    }
    resolve(next, state) {
        const layoutID = this.storageService.getStorage('layoutID');
        const orgID = this.storageService.getStorage('currentOrgID');
        if (!layoutID) {
            this.router.navigate(['/not-found']);
            return false;
        }
        else {
            return this.parameterController.getSavedConsumptionParameter(orgID).pipe(map((response) => {
                if (response && response.length == 0) {
                    this.router.navigate(['/not-found']);
                    return false;
                }
                else {
                    return true;
                }
            }), catchError(error => {
                console.log('error in getSavedConsumptionParameter -', error);
                this.router.navigate(['/not-found']);
                return [false];
            }));
        }
    }
}
ResolveGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ResolveGuard, deps: [{ token: i1$1.Router }, { token: i1$2.StorageService }, { token: ParameterController }], target: i0.ɵɵFactoryTarget.Injectable });
ResolveGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ResolveGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ResolveGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$2.StorageService }, { type: ParameterController }]; } });

class ParameterService {
    constructor(parameterController) {
        this.parameterController = parameterController;
    }
    getParameterByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let parameterM;
            try {
                parameterM = yield this.parameterController.getParameterByOrgID(orgID).toPromise();
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
    getConsumptionParameter(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let consumptionParamM;
            try {
                consumptionParamM = yield this.parameterController.getConsumptionParameter(orgID).toPromise();
                if (consumptionParamM) {
                    return consumptionParamM;
                }
                else {
                    return new ConsumptionParameter();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new ConsumptionParameter();
            }
        });
    }
    getSavedConsumptionParameter(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let savedConsumptionParamM;
            try {
                savedConsumptionParamM = yield this.parameterController.getSavedConsumptionParameter(orgID).toPromise();
                if (savedConsumptionParamM) {
                    return savedConsumptionParamM;
                }
                else {
                    return [new SavedConsumptionParameter()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new SavedConsumptionParameter()];
            }
        });
    }
}
ParameterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, deps: [{ token: ParameterController }], target: i0.ɵɵFactoryTarget.Injectable });
ParameterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: ParameterController }]; } });

class AggregateDataController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getAggregateData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/aggregate`, requestBody, { headers: headers });
    }
    getMeterAggregateDataForReport(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/meter-data`, requestBody, { headers: headers });
    }
    getDeviceAggregateData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/data/aggregate`, requestBody, { headers: headers });
    }
    getCumulativeConsumption(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption`, requestBody, { headers: headers });
    }
    getEntityParameterData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entity/parameter-data`, requestBody, { headers: headers });
    }
    getAvoidedEmissionData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/avoided-emissions`, requestBody, { headers: headers });
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
    getMeterAggregateDataForReport(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let meterReportData;
            try {
                meterReportData = yield this.aggregateDataController.getMeterAggregateDataForReport(orgID, requestBody).toPromise();
                if (meterReportData) {
                    return [new MeterData()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
    getDeviceAggregateData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let deviceAggregateData;
            try {
                deviceAggregateData = yield this.aggregateDataController.getDeviceAggregateData(orgID, requestBody).toPromise();
                if (deviceAggregateData) {
                    return deviceAggregateData;
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
    constructor(data, storageService, dateService, parameterService, aggregateDataService, tscCommonService) {
        this.data = data;
        this.storageService = storageService;
        this.dateService = dateService;
        this.parameterService = parameterService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.dateTimeIntervalEnum = DateTimeIntervalEnum;
        this.dialogEnum = DialogEnum;
        this.parameterM = [new Parameter()];
        this.chartType = ChartTypeEnum.BASIC_AREA_CHART;
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        this.chartTitle = new ChartTitle();
        this.chartData = new BasicAreaLineBarChart();
        this.dateRangeFC = new FormControl('LAST_24_HRS', Validators.required);
        this.trendData = data['trendData'];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.dateRangeChange(this.dateRangeFC.value);
        this.getParameterByLayoutID();
    }
    getParameterByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByLayoutID(this.orgID));
        });
    }
    dateRangeChange(selectedDateRange) {
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
        this.getTrendData();
    }
    getCounterParameter(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
        return parameter ? parameter.isCounter : false;
    }
    getTrendData() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            this.viewStateFlag = ChartViewStateEnum.LOADING;
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
                        sourceLoadType: isCounterParameter ? "all" : null,
                        source_or_load: isCounterParameter ? "source" : null,
                    }
                ];
                requestData.nullifyParams();
                requestData.startTime = this.startTime;
                requestData.endTime = this.endTime;
                const trendRes = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_e = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0]) === null || _e === void 0 ? void 0 : _e.data.length) > 0) {
                    this.paramLabel = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].paramLabel;
                    this.chartData.metaData = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].data.map(item => ({
                        name: moment(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                        value: item.value
                    }));
                    this.chartData.unit = {
                        name: '',
                        code: trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].unit,
                    };
                    this.chartData.yAxisLabel = (trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].paramLabel) + ' (' + (trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].unit) + ')';
                    this.chartData.showDataZoomSlider = true;
                    this.chartData.showDataView = true;
                    this.chartData.showMagicType = true;
                    this.chartData.showRestore = true;
                    this.chartData.showDownloadImage = true;
                    this.viewStateFlag = ChartViewStateEnum.HAS_DATA;
                }
                else {
                    this.viewStateFlag = ChartViewStateEnum.NO_DATA;
                }
            }
            catch (error) {
                this.viewStateFlag = ChartViewStateEnum.NO_DATA;
                console.error(`Error in getTrendData()`, error);
            }
        });
    }
}
TrendComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$2.StorageService }, { token: i2.DateService }, { token: ParameterService }, { token: AggregateDataService }, { token: i3.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
TrendComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TrendComponent, selector: "lib-trend", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ paramLabel }} Trend\n    </strong>\n\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"dialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <mat-form-field class=\"matFieldWidth100\"\n                [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                <mat-label>Select daterange</mat-label>\n                <mat-select (selectionChange)=\"dateRangeChange($event.value)\" [formControl]=\"dateRangeFC\">\n                    <mat-option disabled>Select daterange</mat-option>\n                    <mat-option *ngFor=\"let daterange of listConstant.TREND_DATE_RANGE\" [value]=\"daterange.value\">\n                        {{ daterange.label }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <lib-basic-area-line-bar [chartTypeInp]=\"chartType\" [chartTitleInp]=\"chartTitle\" [viewStateInp]=\"viewStateFlag\"\n                [dataInp]=\"chartData\"></lib-basic-area-line-bar>\n        </div>\n    </div>\n</div>", components: [{ type: i6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i10$1.BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: ["chartTypeInp", "viewStateInp", "chartTitleInp", "dataInp"] }], directives: [{ type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-trend',
                    templateUrl: './trend.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1$2.StorageService }, { type: i2.DateService }, { type: ParameterService }, { type: AggregateDataService }, { type: i3.TSCCommonService }]; } });

// /tsc-library/
class TrendModule {
}
TrendModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TrendModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, declarations: [TrendComponent], imports: [CommonModule,
        BasicAreaLineBarModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTooltipModule] });
TrendModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, imports: [[
            CommonModule,
            BasicAreaLineBarModule,
            ReactiveFormsModule,
            MatDialogModule,
            MatButtonModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTooltipModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TrendComponent
                    ],
                    imports: [
                        CommonModule,
                        BasicAreaLineBarModule,
                        ReactiveFormsModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTooltipModule,
                    ]
                }]
        }] });

// /tsc-library/
class EntityDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.DialogEnum = DialogEnum;
        this.entityFC = new FormControl('', Validators.required);
        this.entityID = data === null || data === void 0 ? void 0 : data.entityID;
        this.entityType = data === null || data === void 0 ? void 0 : data.entityType;
        this.entityObject = data === null || data === void 0 ? void 0 : data.entityObject;
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        if (this.entityID) {
            this.entityFC.patchValue(this.entityID);
        }
    }
    onEntityChange(selectedValue) {
        this.entityFC.patchValue(selectedValue);
        this.dialogRef.close({
            result: DialogEnum.CLOSE_DR,
            entityID: this.entityFC.value
        });
    }
}
EntityDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDialogComponent, deps: [{ token: i1$3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
EntityDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityDialogComponent, selector: "lib-entity", ngImport: i0, template: "<div mat-dialog-title>\n    <div class=\"row\">\n        <div class=\"col-sm-11\">\n            <div class=\"pageTitle dialogHeader fw-bold\"> Select Entity </div>\n            <div class=\"pageSubtitle\">\n                Entities displayed in gray color have never had consumption, whereas those in black have consumption.\n            </div>\n        </div>\n        <div class=\"col-sm-1\">\n            <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\"\n                matTooltip=\"Close\" matTooltipPosition=\"before\">\n                <span class=\"material-symbols-outlined\">\n                    close\n                </span>\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <mat-radio-group [formControl]=\"entityFC\" (change)=\"onEntityChange($event.value)\" *ngIf=\"entityObject && entityObject.length > 0 && entityObject[0].id\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div *ngFor=\"let entity of entityObject; let i = index\" class=\"mt-2\">\n                    <mat-radio-button class=\"radioBtnLabel me-2\" [ngClass]=\"{'text-secondary': !entity.entityStatusFlag}\"\n                        [value]=\"entity.id\" [disabled]=\"!entity.entityStatusFlag\">\n                        {{ entity.name }}\n                    </mat-radio-button>\n                    <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-5\">\n                        <ng-container *ngTemplateOutlet=\"recursiveTemplate; context:{ $implicit: entity.children }\"></ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <ng-template #recursiveTemplate let-entities>\n            <div *ngFor=\"let entity of entities; let i = index\" class=\"mt-2\">\n                <mat-radio-button class=\"radioBtnLabel me-2\" [ngClass]=\"{'text-secondary': !entity.entityStatusFlag}\"\n                    [value]=\"entity.id\" [disabled]=\"!entity.entityStatusFlag\">\n                    {{ entity.name }}\n                </mat-radio-button>\n                <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-5\">\n                    <ng-container *ngTemplateOutlet=\"recursiveTemplate; context:{ $implicit: entity.children }\"></ng-container>\n                </div>\n            </div>\n        </ng-template>\n    </mat-radio-group>\n</div>", components: [{ type: i6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i13.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }], directives: [{ type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i13.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i14.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDialogComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-entity',
                    templateUrl: './entity.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });

class EntityDialogModule {
}
EntityDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDialogModule, declarations: [EntityDialogComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule] });
EntityDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDialogModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatRadioModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            MatDialogModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EntityDialogComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatRadioModule,
                        MatIconModule,
                        MatButtonModule,
                        MatTooltipModule,
                        MatDialogModule
                    ]
                }]
        }] });

// /tsc-library/
class DownloadReportComponent {
    constructor() {
        this.listConstant = LIST_CONSTANT;
        this.materialConstant = MATERIAL_CONSTANT;
        this.fileTypeEnum = FileTypeEnum;
        this.fileTypeEmitted = new EventEmitter();
        this.excludeFileType = '';
    }
    ngOnInit() {
    }
    onChange(selectedType) {
        this.fileTypeEmitted.emit(selectedType);
    }
    ngOnChanges(changes) {
        if (changes.excludeFileTypeInp && this.excludeFileTypeInp) {
            this.excludeFileType = this.excludeFileTypeInp;
        }
    }
}
DownloadReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DownloadReportComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DownloadReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DownloadReportComponent, selector: "lib-download-report", inputs: { excludeFileTypeInp: "excludeFileTypeInp" }, outputs: { fileTypeEmitted: "fileTypeEmitted" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"btn-group\" ngbDropdown>\n    <button type=\"button\" ngbDropdownToggle class=\"btn btn-sm btn-primary ms-2 dropdownAfter\" matRipple\n        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n        <div class=\"d-flex align-items-center\">\n            <span class=\"me-2\">\n                Export as\n            </span>\n            <span class=\"material-symbols-outlined iconSize\">\n                arrow_drop_down\n            </span>\n        </div>\n    </button>\n\n    <div ngbDropdownMenu>\n        <button *ngFor=\"let type of listConstant.DOWNLOAD_TYPE\" class=\"dropdown-item\" [hidden]=\"excludeFileType == type.value\"\n            (click)=\"onChange(type.value)\">\n            <div class=\"d-flex align-items-center\">\n                <span class=\"material-symbols-outlined me-2 fs-5\" [ngSwitch]=\"type.value\">\n                    <span *ngSwitchCase=\"fileTypeEnum.PDF\" class=\"material-symbols-outlined pdfColor\">\n                        picture_as_pdf\n                    </span>\n                    <span *ngSwitchCase=\"fileTypeEnum.CSV\" class=\"material-symbols-outlined csvXlsxColor\">\n                        csv\n                    </span>\n                    <span *ngSwitchCase=\"fileTypeEnum.XLSX\" class=\"material-symbols-outlined csvXlsxColor\">\n                        description\n                    </span>\n                </span>\n                <span>\n                    {{ type.label }}\n                </span>\n            </div>\n        </button>\n    </div>\n</div>", styles: [".funnelFilterDD{width:0;height:0;overflow:hidden}.pdfColor{color:#dc3545}.csvXlsxColor{color:#1d712b}.iconSize{font-size:18px}\n"], directives: [{ type: i12.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i12.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i12.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i14.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DownloadReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-download-report',
                    templateUrl: './download-report.component.html',
                    styleUrls: ['./download-report.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { excludeFileTypeInp: [{
                type: Input
            }], fileTypeEmitted: [{
                type: Output
            }] } });

class DownloadReportModule {
}
DownloadReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DownloadReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DownloadReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DownloadReportModule, declarations: [DownloadReportComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule], exports: [DownloadReportComponent] });
DownloadReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DownloadReportModule, imports: [[
            CommonModule,
            NgbModule,
            ReactiveFormsModule,
            FormsModule,
            MatInputModule,
            MatSelectModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DownloadReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DownloadReportComponent
                    ],
                    imports: [
                        CommonModule,
                        NgbModule,
                        ReactiveFormsModule,
                        FormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule
                    ],
                    exports: [DownloadReportComponent]
                }]
        }] });

class LayoutNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutNotFoundComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutNotFoundComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LayoutNotFoundComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutNotFoundComponent, selector: "lib-layout-not-found", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h-100\">\n    <div class=\"card-body\">\n        <div class=\"container d-flex align-items-center\">\n            <div class=\"mx-auto text-center\">\n                <img class=\"layoutNotFindImg\" src=\"/assets/images/tsc-restrict.jpg\" alt=\"Layout not found\" />\n                <br />\n                <br />\n                You don't have any layout to showcase the respective page. Please create a layout for better experience.\n                <br />\n                Click <a [href]=\"'layout/page'\">here</a> to create a layout.\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".layoutNotFindImg{max-width:450px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutNotFoundComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-layout-not-found',
                    templateUrl: './layout-not-found.component.html',
                    styleUrls: ['./layout-not-found.component.scss']
                }]
        }], ctorParameters: function () { return []; } });

class LayoutNotFoundModule {
    static forRoot(environment) {
        return {
            ngModule: LayoutNotFoundModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
LayoutNotFoundModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutNotFoundModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutNotFoundModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutNotFoundModule, declarations: [LayoutNotFoundComponent], imports: [CommonModule], exports: [LayoutNotFoundComponent] });
LayoutNotFoundModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutNotFoundModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutNotFoundModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LayoutNotFoundComponent,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        LayoutNotFoundComponent
                    ]
                }]
        }] });

// /tsc-library/
class TscRestrictComponent {
    constructor(storageService, parameterService) {
        this.storageService = storageService;
        this.parameterService = parameterService;
        this.consumptionParameter = [new SavedConsumptionParameter()];
        this.setLayoutRedirectUrl = '/layout/page';
        this.setConsumptionRedirectUrl = '/preference/consumption-parameter/add';
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');
        this.getSavedConsumptionParameter();
    }
    getSavedConsumptionParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.consumptionParameter = (yield this.parameterService.getSavedConsumptionParameter(this.orgID));
        });
    }
}
TscRestrictComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictComponent, deps: [{ token: i1$2.StorageService }, { token: ParameterService }], target: i0.ɵɵFactoryTarget.Component });
TscRestrictComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TscRestrictComponent, selector: "lib-tsc-restrict", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h-100\">\n    <div class=\"card-body\">\n        <div class=\"container d-flex align-items-center\">\n            <div class=\"mx-auto text-center\">\n                <img class=\"img\" src=\"/assets/images/tsc-restrict.jpg\" alt=\"Not found\" />\n                <br />\n                <br />\n                <ng-container\n                    *ngIf=\"!consumptionParameter?.[0]?.['consumptionParamID'] && !layoutID; else setConsumptionParameter\">\n                    You have not set consumption parameters. Please add consumption parameters for better experience.\n                    <br />\n                    Click <a [href]=\"setConsumptionRedirectUrl\">here</a> to add consumption parameters.\n                    <br />\n                    <br />\n                    You don't have any layout to showcase the respective page. Please create a layout for better\n                    experience.\n                    <br />\n                    Click <a [href]=\"setLayoutRedirectUrl\">here</a> to create a layout.\n                </ng-container>\n                <ng-template #setConsumptionParameter>\n                    <ng-container\n                        *ngIf=\"!consumptionParameter?.[0]?.['consumptionParamID'] && layoutID; else setLayout\">\n                        You have not set consumption parameters. Please add consumption parameters for better\n                        experience.\n                        <br />\n                        Click <a [href]=\"setConsumptionRedirectUrl\">here</a> to add consumption parameters.\n                    </ng-container>\n                    <ng-template #setLayout>\n                        You don't have any layout to showcase the respective page. Please create a layout for better\n                        experience.\n                        <br />\n                        Click <a [href]=\"setLayoutRedirectUrl\">here</a> to create a layout.\n                    </ng-template>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".img{max-width:600px}\n"], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tsc-restrict',
                    templateUrl: './tsc-restrict.component.html',
                    styleUrls: ['./tsc-restrict.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: ParameterService }]; } });

class TscRestrictModule {
    static forRoot(environment) {
        return {
            ngModule: TscRestrictModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
TscRestrictModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TscRestrictModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictModule, declarations: [TscRestrictComponent], imports: [CommonModule], exports: [TscRestrictComponent] });
TscRestrictModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TscRestrictComponent,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TscRestrictComponent
                    ]
                }]
        }] });

// /tsc-library/
class SuccessComponent {
    constructor(activatedRoute, router, layoutService, organizationService, storageService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.layoutService = layoutService;
        this.organizationService = organizationService;
        this.storageService = storageService;
        this.redirectUrl = '/';
        this.noTimezone = './timezone-not-found';
        this.layoutM = [new Layout()];
        this.timezone = null;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(queryParam => {
            if (queryParam.redirectUrl) {
                this.redirectUrl = queryParam.redirectUrl;
            }
        });
        // INFO: SOMYA AGRAWAL
        // Clearing layoutID from storage in switch org because previous layoutID remains in local storage even if current org does not have any layout!
        this.storageService.deleteStorage('layoutID');
        this.timeZoneCheck();
    }
    timeZoneCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timezone = (yield this.organizationService.getOrgTimezone());
            if (this.timezone) {
                this.storageService.setStorage('timezone', this.timezone);
                this.getLayoutsByOrgID();
            }
            else {
                this.router.navigate([this.noTimezone]);
            }
        });
    }
    getLayoutsByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            let orgID = this.storageService.getStorage('currentOrgID');
            this.layoutM = (yield this.layoutService.getLayoutByOrgID(orgID));
            const defaultLayout = this.layoutM.find(layout => layout.isDefault);
            if (defaultLayout) {
                const defaultLayoutID = defaultLayout.id;
                this.storageService.setStorage('layoutID', defaultLayoutID);
            }
            else {
                console.error('No layout found.');
            }
            this.router.navigate([this.redirectUrl]);
        });
    }
}
SuccessComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SuccessComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }, { token: i5.LayoutService }, { token: i3$2.OrganizationService }, { token: i1$2.StorageService }], target: i0.ɵɵFactoryTarget.Component });
SuccessComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SuccessComponent, selector: "app-success", ngImport: i0, template: "<div class=\"d-flex h-100 justify-content-center align-items-center\">\n    <div class=\"text-center fs-4\"><img class=\"appAuthImg\"\n            src=\"assets/images/application-logo/tsc-with-name.png\" />\n        <br />\n        <br />\n        <span class=\"spinner-border spinner-border-sm text-success\"></span> ..\n    </div>\n</div>\n", styles: [".appAuthImg{height:55px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SuccessComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-success',
                    templateUrl: './success.component.html',
                    styleUrls: ['./success.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: i5.LayoutService }, { type: i3$2.OrganizationService }, { type: i1$2.StorageService }]; } });

// /tsc-library/
class AggregationComponent {
    constructor() {
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.FormErrorEnum = FormErrorEnum;
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
AggregationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationComponent, selector: "lib-aggregation", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation</mat-label>\n    <mat-select [formControl]=\"aggregationFC\" multiple required>\n        <mat-option [value]=\"-1\" (click)=\"selectAllAggregation()\">\n            Select all\n        </mat-option>\n        <mat-option *ngFor=\"let aggregation of listConstant.AGGREGATION\" [value]=\"aggregation.value\"\n            (click)=\"selectedAggregation()\">\n            {{ aggregation.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggregationFC.touched && aggregationFC.hasError('required')\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }] });
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
        this.FormErrorEnum = FormErrorEnum;
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
AggregationDurationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation duration</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"aggDurationFC\" required>\n        <mat-option *ngFor=\"let duration of listConstant.AGGREGATION_DURATION\" [value]=\"duration.value\">\n            {{ duration.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggDurationFC.touched && aggDurationFC.hasError('required')\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }] });
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
        this.FormErrorEnum = FormErrorEnum;
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
            this.parameterFC.reset([]);
            this.emitFilter.emit();
        }
    }
    getParameterByDeviceID(selectedDevices) {
        return __awaiter(this, void 0, void 0, function* () {
            this.allParameterID = [];
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
ParamMetricComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricComponent, deps: [{ token: i1$2.StorageService }, { token: ParameterService }], target: i0.ɵɵFactoryTarget.Component });
ParamMetricComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParamMetricComponent, selector: "lib-param-metric", inputs: { deviceInp: "deviceInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select parameter</mat-label>\n\n    <mat-select [formControl]=\"parameterFC\" multiple required>\n        <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataOption\">\n            <ngx-mat-select-search [formControl]=\"paramSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\" [hidden]=\"paramSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let parameter of paramSearchUtil.filteredEntities | async\" [value]=\"parameter.paramMetric\"\n                (click)=\"selectedParameters()\">\n                {{ parameter.label }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataOption>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n\n    <mat-error *ngIf=\"!deviceInp\">\n        Please select device first\n    </mat-error>\n    <mat-error *ngIf=\"parameterFC.touched && parameterFC.hasError('required') && deviceInp\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-param-metric',
                    templateUrl: './param-metric.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: ParameterService }]; }, propDecorators: { deviceInp: [{
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
        this.FormErrorEnum = FormErrorEnum;
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
ParameterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterComponent, deps: [{ token: i1$2.StorageService }, { token: ParameterService }], target: i0.ɵɵFactoryTarget.Component });
ParameterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterComponent, selector: "lib-parameter", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<div class=\"row\">\n    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select parameter</mat-label>\n        <mat-select (selectionChange)=\"parameterChange($event.value)\" [formControl]=\"selectedParameterFC\" required>\n            <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"parameterSearchUtil.filterFC\"\n                        placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let parameter of parameterSearchUtil.filteredEntities | async\" [value]=\"parameter.id\">\n                    {{ parameter.label }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n        <mat-error *ngIf=\"selectedParameterFC.hasError('required')\">\n            {{ FormErrorEnum.REQUIRED }}\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parameter',
                    templateUrl: './parameter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: ParameterService }]; }, propDecorators: { emitFilter: [{
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

// /tsc-library/
class DeviceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getDeviceStatusInfo(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/status`);
    }
    getDevicesByEntityID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/devices`, requestBody);
    }
    getUnMappedDevices(pageNo, pageSize, sortBy, orderBy, search, orgID, layoutID, entityID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        search.forEach(search => params = params.append('search', search));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/devices/unmapped`, { params: params });
    }
    getMappedDevices(pageNo, pageSize, search, orgID, layoutID, entityID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        search.forEach(search => params = params.append('search', search));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/devices/mapped`, { params: params });
    }
    saveDeviceMapping(orgID, layoutID, entityID, devices) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/map-devices`, devices);
    }
    deleteDeviceMapping(orgID, layoutID, entityID, deviceID) {
        let params = new HttpParams();
        params = params.append('deviceID', deviceID);
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/devices`, { params: params });
    }
    updateSourceLoad(orgID, layoutID, entityID, deviceID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/devices/${deviceID}/source-load`, requestBody);
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
        this.FormErrorEnum = FormErrorEnum;
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
            const requestBody = { 'entityID': this.dropdownTypeInp == 'SINGLE' ? [entityID] : entityID };
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
DeviceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceComponent, deps: [{ token: i1$2.StorageService }, { token: DeviceService }], target: i0.ɵɵFactoryTarget.Component });
DeviceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DeviceComponent, selector: "lib-device", inputs: { dropdownTypeInp: "dropdownTypeInp", entityInp: "entityInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.SINGLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select device</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"deviceFC\" required>\n        <ng-container *ngIf=\"deviceM && deviceM.length > 0 && deviceM[0]['id']; else noDeviceFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"deviceSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let device of deviceSearchUtil.filteredEntities | async\" [value]=\"device.id\">\n                {{ device.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDeviceFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"!entityInp\">\n        Please select entity first\n    </mat-error>\n    <mat-error *ngIf=\"deviceFC.touched && deviceFC.hasError('required') && entityInp\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.MULTIPLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select device</mat-label>\n\n    <mat-select [formControl]=\"multipleDeviceFC\" multiple required>\n        <ng-container *ngIf=\"deviceM && deviceM.length > 0 && deviceM[0]['id']; else noDataOption\">\n            <ngx-mat-select-search [formControl]=\"deviceSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllDevices()\" [hidden]=\"deviceSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let device of deviceSearchUtil.filteredEntities | async\" [value]=\"device.id\"\n                (click)=\"selectedDevices()\">\n                {{ device.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataOption>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n\n    <mat-error *ngIf=\"!entityInp\">\n        Please select entity first\n    </mat-error>\n    <mat-error *ngIf=\"multipleDeviceFC.touched && multipleDeviceFC.hasError('required') && entityInp\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-device',
                    templateUrl: './device.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: DeviceService }]; }, propDecorators: { dropdownTypeInp: [{
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
    getEntitiesHavingDevicesByOrgID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-having-devices`);
    }
    getEntityByID(orgID, layoutID, entityID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`);
    }
    getConsumptionEntities(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/consumption-entities`);
    }
    getEntitiesByParameterID(orgID, parameterID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters/${parameterID}/entities`);
    }
    getEntitiesByLayoutID(orgID, layoutID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities`);
    }
    getEntitiesWithDevicesByLayoutID(orgID, layoutID, requestBody, skipLoader) {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entity-device`, requestBody, { headers: headers });
    }
    getEntitiesByEntityType(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entity-type/entities`, requestBody);
    }
    getEntitiesByParamMetric(orgID, paramName) {
        let params = new HttpParams();
        params = params.append('paramName', paramName);
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/parameter-entities`, { params: params });
    }
    getEntityLevelConsumption(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/load-consumption`, requestBody);
    }
    getEntityTypeByLayoutID(orgID, skipLoader) {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/type`, { headers: headers });
    }
    createEntity(orgID, layoutID, entityID, entity) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/add-child`, entity);
    }
    updateEntity(orgID, layoutID, entityID, entity) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`, entity);
    }
    deleteEntity(orgID, layoutID, entityID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`);
    }
    getEntityStatusInfo(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/status`);
    }
    getDashboardEntities(entityTypeFilterArr, orgID) {
        let params = new HttpParams();
        entityTypeFilterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/dashboard/entities`, { params: params });
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
    getEntitiesHavingDevicesByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityM;
            try {
                entityM = yield this.entityController.getEntitiesHavingDevicesByOrgID(orgID).toPromise();
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
    getEntitiesByParameterID(orgID, parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityTreeM;
            try {
                entityTreeM = yield this.entityController.getEntitiesByParameterID(orgID, parameterID).toPromise();
                if (entityTreeM) {
                    return entityTreeM;
                }
                else {
                    return [new ParameterEntity()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new ParameterEntity()];
            }
        });
    }
    getEntityTypeByLayoutID(orgID, skipLoader) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityTypeM;
            try {
                entityTypeM = yield this.entityController.getEntityTypeByLayoutID(orgID, skipLoader).toPromise();
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
    getEntitiesWithDevicesByLayoutID(orgID, layoutID, requestBody, skipLoader) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityDeviceM;
            try {
                entityDeviceM = yield this.entityController.getEntitiesWithDevicesByLayoutID(orgID, layoutID, requestBody, skipLoader).toPromise();
                if (entityDeviceM) {
                    return entityDeviceM;
                }
                else {
                    return new ParameterEntity();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new ParameterEntity();
            }
        });
    }
    getEntityByID(orgID, layoutID, entityID) {
        return __awaiter(this, void 0, void 0, function* () {
            let layoutM;
            try {
                layoutM = yield this.entityController.getEntityByID(orgID, layoutID, entityID).toPromise();
                if (layoutM) {
                    return layoutM;
                }
                else {
                    return new Entity();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new Entity();
            }
        });
    }
    getEntitiesByParamMetric(orgID, paramName) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityM;
            try {
                entityM = yield this.entityController.getEntitiesByParamMetric(orgID, paramName).toPromise();
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
        this.commonConstant = COMMON_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.FormErrorEnum = FormErrorEnum;
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
        this.getEntitiesHavingDevicesByOrgID();
    }
    ngOnChanges(changes) {
        if (changes.dropdownTypeInp && this.dropdownTypeInp) {
            this.dropdownType = this.dropdownTypeInp;
        }
    }
    getEntitiesHavingDevicesByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = (yield this.entityService.getEntitiesHavingDevicesByOrgID(this.orgID));
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
EntityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityComponent, deps: [{ token: i1$2.StorageService }, { token: EntityService }], target: i0.ɵɵFactoryTarget.Component });
EntityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityComponent, selector: "lib-entity", inputs: { dropdownTypeInp: "dropdownTypeInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.SINGLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"entityFC\" required>\n        <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noDataFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\">\n                {{ entity.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"entityFC.touched && entityFC.hasError('required')\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.MULTIPLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity</mat-label>\n\n    <mat-select [formControl]=\"multipleEntityFC\" multiple required>\n        <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noDataOption\">\n            <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllEntities()\" [hidden]=\"entitySearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\"\n                (click)=\"selectedEntities()\">\n                {{ entity.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataOption>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"multipleEntityFC.hasError('required')\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-entity',
                    templateUrl: './entity.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: EntityService }]; }, propDecorators: { dropdownTypeInp: [{
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

// /tsc-library/
class EntityTypeComponent {
    constructor(storageService, entityService) {
        this.storageService = storageService;
        this.entityService = entityService;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.commonConstant = COMMON_CONSTANT;
        this.FormErrorEnum = FormErrorEnum;
        this.entityTypeM = [new EntityType()];
        this.entityTypeFC = new FormControl('', Validators.required);
        this.entityTypeSearchUtil = new MatSelectSearchService(['type']);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');
        this.getEntityTypeByLayoutID();
    }
    getEntityTypeByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityTypeM = (yield this.entityService.getEntityTypeByLayoutID(this.orgID, 'NO'));
            this.entityTypeSearchUtil.entityArr = this.entityTypeM;
            this.entityTypeSearchUtil.createSubscription();
            if (this.entityTypeM && this.entityTypeM.length > 0) {
                const defaultEntityType = this.entityTypeM[0].type;
                if (defaultEntityType) {
                    this.entityTypeFC.patchValue(defaultEntityType);
                    this.emitFilter.emit();
                }
            }
        });
    }
    onChange(selectedType) {
        this.entityTypeFC.patchValue(selectedType);
        this.emitFilter.emit();
    }
}
EntityTypeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityTypeComponent, deps: [{ token: i1$2.StorageService }, { token: EntityService }], target: i0.ɵɵFactoryTarget.Component });
EntityTypeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityTypeComponent, selector: "lib-entity-type", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity type</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"entityTypeFC\" required>\n        <ng-container *ngIf=\"entityTypeM && entityTypeM.length > 0 && entityTypeM?.[0]?.type; else noDataFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"entityTypeSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let type of entityTypeSearchUtil.filteredEntities | async\" [value]=\"type.type\">\n                {{ type.type | titlecase }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"entityTypeFC.touched && entityTypeFC.hasError('required')\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i14.AsyncPipe, "titlecase": i14.TitleCasePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityTypeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-entity-type',
                    templateUrl: './entity-type.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: EntityService }]; }, propDecorators: { emitFilter: [{
                type: Output
            }] } });

class EntityTypeModule {
}
EntityTypeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityTypeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityTypeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityTypeModule, declarations: [EntityTypeComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule], exports: [EntityTypeComponent] });
EntityTypeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityTypeModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityTypeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EntityTypeComponent
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
                        EntityTypeComponent
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
        this.FormErrorEnum = FormErrorEnum;
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
UnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitComponent, deps: [{ token: i1$2.StorageService }, { token: UnitService }], target: i0.ɵɵFactoryTarget.Component });
UnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UnitComponent, selector: "lib-unit", inputs: { selectedParameterID: "selectedParameterID" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"row\">\n    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select unit</mat-label>\n\n        <mat-select (selectionChange)=\"unitChange($event.value)\" [formControl]=\"selectedUnitFC\" required>\n            <ng-container *ngIf=\"unitM && unitM.length > 0 && unitM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"unitSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                        noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let unit of unitSearchUtil.filteredEntities | async\" [value]=\"unit.id\">\n                    {{ unit.name }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n\n        <mat-error *ngIf=\"!selectedParameterID\">\n            Please select parameter first\n        </mat-error>\n        <mat-error *ngIf=\"selectedUnitFC.hasError('required') && selectedParameterID\">\n            {{ FormErrorEnum.REQUIRED }}\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-unit',
                    templateUrl: './unit.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: UnitService }]; }, propDecorators: { selectedParameterID: [{
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
    constructor(storageService, dateService, aggregateDataService, entityController, deviceController) {
        this.storageService = storageService;
        this.dateService = dateService;
        this.aggregateDataService = aggregateDataService;
        this.entityController = entityController;
        this.deviceController = deviceController;
        this.commonConstant = COMMON_CONSTANT;
        this.entityConsumption = [new EntityLevelConsumption()];
        this.deviceInfoM = new StatusInfo();
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
            this.innerStrokeColor = "#dbe7ff";
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
                percent: totalConsumptionValue,
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
        this.getDeviceStatusInfo();
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
                    percent: consumptionBreakupValue,
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
    getDeviceStatusInfo() {
        this.deviceController.getDeviceStatusInfo(this.orgID)
            .subscribe((deviceRes) => {
            this.deviceInfoM = deviceRes;
        }, error => {
            console.log('error in getDeviceStatusInfo() -', error);
        });
    }
}
HomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeComponent, deps: [{ token: i1$2.StorageService }, { token: i2.DateService }, { token: AggregateDataService }, { token: EntityController }, { token: DeviceController }], target: i0.ɵɵFactoryTarget.Component });
HomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: HomeComponent, selector: "lib-home", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Home</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"cardTitle\">\n                                Total {{ label }} Consumption\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"col-sm-6\">\n                                <span class=\"centerAlign\">\n                                    <circle-progress [options]=\"totalConsumptionCircleData\" [renderOnClick]=\"false\"\n                                        class=\"copy\"></circle-progress>\n                                </span>\n                                <span class=\"centerAlign\">\n                                    This Month\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6 ms-4\">\n                                <div class=\"row\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'Today',\n                                        value: todayConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: todayConsumption?.[0]?.['unit'],\n                                        matCardClass: 'today'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'This Month',\n                                        value: currentMonthConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: currentMonthConsumption?.[0]?.['unit'],\n                                        matCardClass: 'month'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'This Year',\n                                        value: currentYearConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: currentYearConsumption?.[0]?.['unit'],\n                                        matCardClass: 'year'\n                                    }\"></ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"cardTitle\">\n                                {{ label }} Consumption Breakup\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"col-sm-6\">\n                                <span class=\"centerAlign\">\n                                    <circle-progress [options]=\"consumptionBreakupCircleData\" [renderOnClick]=\"false\"\n                                        class=\"copy\"></circle-progress>\n                                </span>\n                                <span class=\"centerAlign\">\n                                    This Month\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\" *ngIf=\"entityConsumption?.[0]?.id\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[0].name,\n                                        value: entityConsumption[0].value,\n                                        unit: entityConsumption[0].unit,\n                                        entityObj: entityConsumption[0],\n                                        outerProgressBarClass: 'progress1BGColor',\n                                        innerProgressBarClass: 'progress1Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[1]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[1].name,\n                                        value: entityConsumption[1].value,\n                                        unit: entityConsumption[1].unit,\n                                        entityObj: entityConsumption[1],\n                                        outerProgressBarClass: 'progress2BGColor',\n                                        innerProgressBarClass: 'progress2Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[2]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[2].name,\n                                        value: entityConsumption[2].value,\n                                        unit: entityConsumption[2].unit,\n                                        entityObj: entityConsumption[2],\n                                        outerProgressBarClass: 'progress3BGColor',\n                                        innerProgressBarClass: 'progress3Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[3]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[3].name,\n                                        value: entityConsumption[3].value,\n                                        unit: entityConsumption[3].unit,\n                                        entityObj: entityConsumption[3],\n                                        outerProgressBarClass: 'progress4BGColor',\n                                        innerProgressBarClass: 'progress4Color'\n                                    }\"></ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-info\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Total devices',\n                        count: deviceInfoM.total\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-success\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Online devices',\n                        count: deviceInfoM.online\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-warning\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Delayed devices',\n                        count: deviceInfoM.delay\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-danger\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Offline devices',\n                        count: deviceInfoM.offline\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #totalConsumption let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-matCardClass=\"matCardClass\"\n    let-outerProgressBarClass=\"outerProgressBarClass\" let-innerProgressBarClass=\"innerProgressBarClass\">\n    <div class=\"col-sm-12\">\n        <div class=\"d-flex align-items-center\">\n            <mat-card class=\"card main-card square d-flex justify-content-center me-2\" [class]=\"matCardClass\">\n                <span class=\"material-symbols-outlined\">\n                    {{ icon }}\n                </span>\n            </mat-card>\n            <div class=\"row\">\n                <span>{{ label }}</span><br />\n                <span class=\"text-primary fw-bold\">{{ value ? value : commonConstant.HYPHEN }} <span\n                        class=\"unitSize\">{{ value ? unit : '' }}</span></span>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #entityProgress let-name=\"name\" let-value=\"value\" let-unit=\"unit\" let-entityObj=\"entityObj\"\n    let-outerProgressBarClass=\"outerProgressBarClass\" let-innerProgressBarClass=\"innerProgressBarClass\">\n    <div class=\"col-sm-12\">\n        <span>\n            {{ name }}\n        </span>\n        <span class=\"float-end text-primary fw-bold\"> {{ value ? value : commonConstant.HYPHEN }}\n            <span class=\"unitSize\"> {{ value ? unit : '' }} </span>\n        </span>\n        <div class=\"progress progressBarRadius\" [class]=\"outerProgressBarClass\">\n            <div class=\"progress-bar progressBarRadius\" [class]=\"innerProgressBarClass\" role=\"progressbar\"\n                [style.width.%]=\"calculateProgress(entityObj)\"></div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #deviceStatus let-label=\"label\" let-count=\"count\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <span class=\"material-symbols-outlined\">\n                devices\n            </span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12 fs-1 fw-bold centerAlign\">\n            {{ count != undefined && count != null ? count : commonConstant.HYPHEN }}\n        </div>\n    </div>\n    <div class=\"row mt-1\">\n        <div class=\"col-sm-12 fs-5 centerAlign\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", styles: [".cardHeight{height:280px}.square{box-shadow:none!important;border-radius:6px!important;height:50px;width:50px}.unitSize{font-size:.66rem}.today{background-color:#f9dedc;color:#fa7d74}.month{background-color:#c2e7ff;color:#21a1f7}.year{background-color:#c4eed0;color:#04942d}.progressBarRadius{border-radius:16px!important}.progress1BGColor{background-color:#f9dedc}.progress2BGColor{background-color:#c2e7ff}.progress3BGColor{background-color:#fff0d1}.progress4BGColor{background-color:#c4eed0}.progress1Color{background-color:#fa7d74}.progress2Color{background-color:#21a1f7}.progress3Color{background-color:#ffbb29}.progress4Color{background-color:#04942d}.card-info{background-color:#cfe2ff;color:#084298}.card-success{background-color:#c3f1d9;color:#058844}.card-warning{background-color:#fff3cd;color:#664d03}.card-danger{background-color:#f8d7da;color:#842029}\n"], components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i7.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }], directives: [{ type: i14.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-home',
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i2.DateService }, { type: AggregateDataService }, { type: EntityController }, { type: DeviceController }]; } });

const routes$z = [
    {
        path: '',
        component: HomeComponent
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HomeRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
HomeRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeRoutingModule, imports: [[RouterModule.forChild(routes$z)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$z)],
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
        PerfectScrollbarModule, i7.NgCircleProgressModule] });
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
    getShift(orgID, skipLoader) {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/shifts`, { headers: headers });
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
    getShift(orgID, skipLoader) {
        return __awaiter(this, void 0, void 0, function* () {
            let shiftM;
            try {
                shiftM = yield this.shiftController.getShift(orgID, skipLoader).toPromise();
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
        this.FormErrorEnum = FormErrorEnum;
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
            this.shiftM = (yield this.shiftService.getShift(this.orgID, 'NO'));
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
ShiftComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftComponent, deps: [{ token: i1$2.StorageService }, { token: ShiftService }], target: i0.ɵɵFactoryTarget.Component });
ShiftComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ShiftComponent, selector: "lib-shift", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<div class=\"row\">\n    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select shift</mat-label>\n\n        <mat-select [formControl]=\"multiSelectedShiftFC\" multiple required>\n            <ng-container *ngIf=\"shiftM && shiftM.length > 0 && shiftM[0]['id']; else noDataOption\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"shiftSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                        noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option [value]=\"-1\" (click)=\"selectAllShifts()\">\n                    Select all\n                </mat-option>\n                <mat-option *ngFor=\"let shift of shiftSearchUtil.filteredEntities | async\" [value]=\"shift.id\"\n                    (click)=\"selectedShift()\">\n                    {{ shift.name }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataOption>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n\n        <mat-error *ngIf=\"multiSelectedShiftFC.hasError('required')\">\n            {{ FormErrorEnum.REQUIRED }}\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-shift',
                    templateUrl: './shift.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: ShiftService }]; }, propDecorators: { emitFilter: [{
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

// /tsc-library/
class ConsumptionComponent {
    constructor(storageService, activatedRoute, entityService, entityController, aggregateDataController, dialog) {
        this.storageService = storageService;
        this.activatedRoute = activatedRoute;
        this.entityService = entityService;
        this.entityController = entityController;
        this.aggregateDataController = aggregateDataController;
        this.dialog = dialog;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
        this.entityM = new Entity();
        this.consumptionEntityM = [new EntityWithChildren()];
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        this.chartTitle = new ChartTitle();
        this.chartData = new StackBarChart();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        this.activatedRoute.queryParams
            .subscribe(queryParam => {
            this.entityID = queryParam.entityID;
            if (this.entityID) {
                this.getEntityByID(this.entityID);
            }
        });
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
        this.getConsumptionEntities();
    }
    getEntityByID(entityID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = yield this.entityService.getEntityByID(this.orgID, this.layoutID, entityID);
            this.entityName = this.entityM.name;
        });
    }
    getConsumptionEntities() {
        this.entityController.getConsumptionEntities(this.orgID)
            .subscribe((res) => {
            this.consumptionEntityM = [res];
        }, error => {
            console.log('error in getConsumptionEntities() - ', error);
        });
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
        this.getCumulativeConsumption();
    }
    getCumulativeConsumption() {
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        const requestData = this.createDataRequest();
        this.aggregateDataController.getCumulativeConsumption(this.orgID, requestData)
            .subscribe((consumptionRes) => {
            var _a;
            if (((_a = consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes.records) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.chartData.metaData = consumptionRes.records.map(record => ({
                    xAxisSeries: moment(record.date).format("YYYY-MM-DD HH:mm:ss"),
                    totalData: {
                        value: record.totalConsumption.value,
                        unitCode: record.totalConsumption.unit
                    },
                    barData: record.paramData.map(param => ({
                        name: param.label,
                        value: param.value,
                        unit: {
                            code: param.unit
                        }
                    }))
                }));
                this.chartData.totalDataLabel = 'Total consumption';
                this.chartData.showDataView = true;
                this.chartData.showMagicType = true;
                this.chartData.showRestore = true;
                this.chartData.showDownloadImage = true;
                this.viewStateFlag = ChartViewStateEnum.HAS_DATA;
            }
            else {
                this.viewStateFlag = ChartViewStateEnum.NO_DATA;
            }
        }, error => {
            this.viewStateFlag = ChartViewStateEnum.NO_DATA;
            console.log('error in getCumulativeConsumption() -', error);
        });
    }
    openEntityDialog() {
        const dialog = this.dialog.open(EntityDialogComponent, {
            data: {
                entityID: this.entityID,
                entityObject: this.consumptionEntityM
            },
            width: '50vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });
        dialog.afterClosed().subscribe((dialogRes) => {
            if (dialogRes.entityID) {
                this.entityID = dialogRes.entityID;
                this.getEntityByID(this.entityID);
                this.getCumulativeConsumption();
            }
        });
    }
    createDataRequest() {
        let requestBody = {};
        requestBody['startTime'] = this.startDate;
        requestBody['endTime'] = this.endDate;
        requestBody['interval'] = this.interval;
        requestBody['entityID'] = this.entityID ? this.entityID : null;
        return requestBody;
    }
}
ConsumptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, deps: [{ token: i1$2.StorageService }, { token: i1$1.ActivatedRoute }, { token: EntityService }, { token: EntityController }, { token: AggregateDataController }, { token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionComponent, selector: "app-consumption", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Dashboard{{ entityName ? ' - ' + entityName : '' }}</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n            <div class=\"col-sm-4\">\n                <button class=\"btn btn-link selectEntityText mt-2 float-end\" type=\"button\" (click)=\"openEntityDialog()\">\n                    Change entity\n                </button>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-stack-bar [chartTitleInp]=\"chartTitle\" [viewStateInp]=\"viewStateFlag\"\n                                [dataInp]=\"chartData\"></lib-stack-bar>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".selectEntityText{font-size:.88rem}\n"], components: [{ type: i2.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10$1.StackBarComponent, selector: "lib-stack-bar", inputs: ["viewStateInp", "chartTitleInp", "dataInp"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-consumption',
                    templateUrl: './consumption.component.html',
                    styleUrls: ['./consumption.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i1$1.ActivatedRoute }, { type: EntityService }, { type: EntityController }, { type: AggregateDataController }, { type: i1$3.MatDialog }]; } });

const routes$y = [
    {
        path: '',
        component: ConsumptionComponent
    }
];
class ConsumptionRoutingModule {
}
ConsumptionRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ConsumptionRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionRoutingModule, imports: [[RouterModule.forChild(routes$y)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$y)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ConsumptionModule {
}
ConsumptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, declarations: [ConsumptionComponent], imports: [CommonModule,
        ConsumptionRoutingModule,
        EntityDialogModule,
        DateFilterTwoModule,
        StackBarModule,
        MatCardModule] });
ConsumptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, imports: [[
            CommonModule,
            ConsumptionRoutingModule,
            EntityDialogModule,
            DateFilterTwoModule,
            StackBarModule,
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
                        EntityDialogModule,
                        DateFilterTwoModule,
                        StackBarModule,
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
        this.chartTitleForSource = {
            name: 'Sourced',
            color: 'grey',
        };
        this.chartTitleForLoad = {
            name: 'Consumed',
            color: 'grey',
        };
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
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }
    dateFilterEmitted(data) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        let selectedFrequency = data.frequency;
        if (selectedFrequency == this.frequencyEnum.DAILY) {
            this.interval = "day_1";
        }
        else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
            this.interval = "month_1";
        }
        else if (selectedFrequency == this.frequencyEnum.YEARLY) {
            this.interval = "year_1";
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
        return __awaiter(this, void 0, void 0, function* () {
            if (category == 'source') {
                this.viewStateFlagForSource = ChartViewStateEnum.LOADING;
            }
            else {
                this.viewStateFlagForLoad = ChartViewStateEnum.LOADING;
            }
            try {
                const requestData = this.createDataRequest(category, false);
                const result = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                    if (result === null || result === void 0 ? void 0 : result.every(item => item.data.length == 0)) {
                        if (category == 'source') {
                            this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
                        }
                        else {
                            this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
                        }
                    }
                    else {
                        let chartData = new DoughnutChart();
                        chartData = {
                            showDataView: true,
                            showRestore: true,
                            showDownloadImage: true,
                            metaData: result.map(item => {
                                var _a, _b;
                                return ({
                                    name: item.sourceLoadType,
                                    value: (_b = (_a = item.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value,
                                    unit: {
                                        code: item.unit,
                                    },
                                });
                            }),
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
ConsumptionBreakupDashboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardComponent, deps: [{ token: i1$2.StorageService }, { token: AggregateDataService }, { token: i3.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionBreakupDashboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupDashboardComponent, selector: "lib-consumption-breakup", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgSourceRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgSourceRes?.[0]?.['unit'],\n                        label: 'Sourced',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgConsumedRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgConsumedRes?.[0]?.['unit'],\n                        label: 'Consumed',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForSource\" [chartTitleInp]=\"chartTitleForSource\" [dataInp]=\"chartDataForSource\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForLoad\" [chartTitleInp]=\"chartTitleForLoad\" [dataInp]=\"chartDataForLoad\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #sourceConsumTemplate let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-loader=\"loader\">\n    <ng-container *ngIf=\"loader; else dataTemplate\">\n        <lib-skeleton-loader [count]=\"1\" [appearance]=\"''\"\n            [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n    </ng-container>\n\n    <ng-template #dataTemplate>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <span class=\"fs-2 fw-bold text-primary\">{{ value ? tscCommonService.formatLargeNumber(value, 'false', 1)\n                    : commonConstant.HYPHEN\n                    }}</span>\n                <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 cardTitle\">\n                {{ label }}\n            </div>\n        </div>\n    </ng-template>\n</ng-template>", components: [{ type: i2.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10$1.DoughnutComponent, selector: "lib-doughnut", inputs: ["viewStateInp", "chartTitleInp", "dataInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i14.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-consumption-breakup',
                    templateUrl: './consumption-breakup.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: AggregateDataService }, { type: i3.TSCCommonService }]; } });

const routes$x = [
    {
        path: '',
        component: ConsumptionBreakupDashboardComponent
    }
];
class ConsumptionBreakupDashboardRoutingModule {
}
ConsumptionBreakupDashboardRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupDashboardRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ConsumptionBreakupDashboardRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardRoutingModule, imports: [[RouterModule.forChild(routes$x)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$x)],
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
TrendService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, deps: [{ token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
TrendService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialog }]; } });

class RecentDataController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getRecentDataWithParam(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/recent`, requestBody, { headers: headers });
    }
    getOrgRecentData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/recent-data`, requestBody, { headers: headers });
    }
    getDeviceRecentData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/data/recent`, requestBody, { headers: headers });
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
    getDeviceRecentData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let deviceRes;
            try {
                deviceRes = yield this.recentDataController.getDeviceRecentData(orgID, requestBody).toPromise();
                if (deviceRes) {
                    return deviceRes;
                }
                else {
                    return [new DeviceRecentData()];
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

// /tsc-library/
class EntityDashboardComponent {
    constructor(storageService, entityService, recentDataService, dateService, trendService) {
        this.storageService = storageService;
        this.entityService = entityService;
        this.recentDataService = recentDataService;
        this.dateService = dateService;
        this.trendService = trendService;
        this.commonConstant = COMMON_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.FormErrorEnum = FormErrorEnum;
        this.isAccordionOpen = true;
        //loader variable declaration
        this.entityTypeLoader = true;
        this.entityDeviceLoader = false;
        this.realTimeDeviceDataLoader = false;
        this.entityTypeM = [new EntityType()];
        this.entityDeviceM = new ParameterEntity();
        this.filteredEntityDeviceM = [];
        this.orgRecentDataM = [new OrgRecentData()];
        this.entityTypeFC = new FormControl('', Validators.required);
        this.entityFC = new FormControl('', Validators.required);
        this.entityTypeSearchUtil = new MatSelectSearchService(['type']);
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
                this.entityTypeM = (yield this.entityService.getEntityTypeByLayoutID(this.orgID, 'YES'));
                this.entityTypeSearchUtil.entityArr = this.entityTypeM;
                this.entityTypeSearchUtil.createSubscription();
                if (this.entityTypeM && this.entityTypeM.length > 0) {
                    const defaultEntityType = this.entityTypeM[0].type;
                    if (defaultEntityType) {
                        this.entityTypeFC.patchValue(defaultEntityType);
                        this.getEntitiesWithDevicesByLayoutID(this.entityTypeFC.value);
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
    entityTypeChange(selectedType) {
        this.entityFC.setValue('');
        this.entityTypeFC.patchValue(selectedType);
        this.orgRecentDataM = [new OrgRecentData()];
        this.getEntitiesWithDevicesByLayoutID(selectedType);
    }
    getEntitiesWithDevicesByLayoutID(entityType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.entityDeviceLoader = true;
                let requestBody = {
                    'entityType': [entityType]
                };
                this.entityDeviceM = yield this.entityService.getEntitiesWithDevicesByLayoutID(this.orgID, this.layoutID, requestBody, 'YES');
                this.filteredEntityDeviceM = [this.entityDeviceM];
            }
            catch (error) {
                console.error("Error in getEntitiesWithDevicesByLayoutID()", error);
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
            this.searchBar.searchClear();
            this.filteredEntityDeviceM = [this.entityDeviceM];
        }
    }
    searchEntities(entities, searchTerm) {
        let results = [];
        entities.forEach(entity => {
            if (entity.name.toLowerCase().includes(searchTerm)) {
                results.push(entity);
            }
            else if (entity.children && entity.children.length > 0) {
                const matchingChildren = this.searchEntities(entity.children, searchTerm);
                if (matchingChildren.length > 0) {
                    const parentCopy = Object.assign({}, entity);
                    parentCopy.children = matchingChildren;
                    results.push(parentCopy);
                }
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
        this.realTimeDeviceDataLoader = true;
        this.getOrgRecentData(selectedValue);
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
    getOrgRecentData(selectedValue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let requestBody = new RecentDataRequestWithoutParam();
                requestBody.entityID = selectedValue;
                requestBody.timezone = this.timezone;
                requestBody.backscan = 1;
                this.orgRecentDataM = (yield this.recentDataService.getOrgRecentData(this.orgID, requestBody));
            }
            catch (error) {
                console.error("Error in getOrgRecentData()", error);
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
EntityDashboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardComponent, deps: [{ token: i1$2.StorageService }, { token: EntityService }, { token: RecentDataService }, { token: i2.DateService }, { token: TrendService }], target: i0.ɵɵFactoryTarget.Component });
EntityDashboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityDashboardComponent, selector: "lib-entity", viewQueries: [{ propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "scrollContainer", first: true, predicate: ["scrollContainer"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Entity Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <ng-container *ngIf=\"entityTypeLoader; else showEntityType\">\n                <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 1 }\"></ng-container>\n            </ng-container>\n\n            <ng-template #showEntityType>\n                <div class=\"col-sm-3\">\n                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label>Select entity type</mat-label>\n                        <mat-select (selectionChange)=\"entityTypeChange($event.value)\" [formControl]=\"entityTypeFC\" required>\n                            <ng-container *ngIf=\"entityTypeM && entityTypeM.length > 0 && entityTypeM?.[0]?.type; else noDataFound\">\n                                <mat-option>\n                                    <ngx-mat-select-search [formControl]=\"entityTypeSearchUtil.filterFC\"\n                                        placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                                    </ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let type of entityTypeSearchUtil.filteredEntities | async\"\n                                    [value]=\"type.type\">\n                                    {{ type.type | titlecase }}\n                                </mat-option>\n                            </ng-container>\n                            <ng-template #noDataFound>\n                                <mat-option disabled>\n                                    {{ commonConstant.NO_DATA_FOUND }}\n                                </mat-option>\n                            </ng-template>\n                        </mat-select>\n                        <mat-error *ngIf=\"entityTypeFC.touched && entityTypeFC.hasError('required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-6\">\n                <mat-accordion>\n                    <mat-expansion-panel class=\"matAccordion\" [expanded]=\"isAccordionOpen\" (opened)=\"openAccordion()\"\n                        (closed)=\"closeAccordion()\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <div class=\"cardTitle\">\n                                    Select entity\n                                </div>\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <lib-search-bar-two class=\"float-end me-3\" #searchBar searchBy=\"name\"\n                                    (emitSearch)=\"searchFn($event)\">\n                                </lib-search-bar-two>\n                            </div>\n                        </div>\n                        \n                        <perfect-scrollbar class=\"scrollHeight\" [config]=\"{useBothWheelAxes: true, suppressScrollX: false, suppressScrollY: false}\" #scrollContainer>\n                            <ng-container *ngIf=\"entityDeviceLoader; else entityDeviceView\">\n                                <div class=\"mt-2\">\n                                    <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n                                </div>\n                            </ng-container>\n                            <ng-template #entityDeviceView>\n                                <mat-radio-group [formControl]=\"entityFC\" (change)=\"onEntityDeviceSelection()\">\n                                    <div *ngFor=\"let entity of filteredEntityDeviceM\">\n                                        <ng-container *ngTemplateOutlet=\"entityTemplate; context:{ $implicit: entity }\"></ng-container>\n                                    </div>\n\n                                    <ng-template #entityTemplate let-entity>\n                                        <div class=\"ms-3 mt-2\">\n                                            <ng-container *ngIf=\"isDeviceAttached(entity); else entityView\">\n                                                <mat-radio-button class=\"radioBtnLabel me-2\" [value]=\"entity.id\">\n                                                    <span class=\"badge rounded-pill\" [ngClass]=\"{'facility': entity.type == 'FACILITY', 'entity': entity.type == 'ENTITY', 'device': entity.type == 'DEVICE'}\"\n                                                        [matTooltip]=\"getTooltipLabel(entity)\" matTooltipPosition=\"above\">\n                                                        <div class=\"d-flex align-items-center\">\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'FACILITY'\">factory</span>\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'ENTITY'\">domain</span>\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'DEVICE'\">devices</span>\n                                                            {{ entity.name }}\n                                                        </div>\n                                                    </span>\n                                                </mat-radio-button>\n                                            </ng-container>\n\n                                            <ng-template #entityView>\n                                                <span class=\"badge rounded-pill\" [ngClass]=\"{'facility': entity.type == 'FACILITY', 'entity': entity.type == 'ENTITY', 'device': entity.type == 'DEVICE'}\"\n                                                    [matTooltip]=\"getTooltipLabel(entity)\" matTooltipPosition=\"above\">\n                                                    <div class=\"d-flex align-items-center\">\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'FACILITY'\">factory</span>\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'ENTITY'\">domain</span>\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'DEVICE'\">devices</span>\n                                                        {{ entity.name }}\n                                                    </div>\n                                                </span>\n                                            </ng-template>\n                                        </div>\n\n                                        <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-3 mt-2\">\n                                            <ng-container *ngFor=\"let child of entity.children\">\n                                                <ng-container\n                                                    *ngTemplateOutlet=\"entityTemplate; context:{ $implicit: child }\"></ng-container>\n                                            </ng-container>\n                                        </div>\n                                    </ng-template>\n                                </mat-radio-group>\n                                \n                            </ng-template>\n                        </perfect-scrollbar>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight2\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"material-symbols-outlined me-3\">\n                                    devices\n                                </span>\n                                <span class=\"cardTitle mt-1\">\n                                    Real time data\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <perfect-scrollbar class=\"scrollHeight\">\n                        <ng-container *ngIf=\"realTimeDeviceDataLoader; else realTimeDeviceDataView\">\n                            <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n                        </ng-container>\n\n                        <ng-template #realTimeDeviceDataView>\n                            <ng-container *ngFor=\"let realTimeData of orgRecentDataM;\">\n                                <ng-container *ngTemplateOutlet=\"parameterSummary; context: {\n                                    device: realTimeData?.deviceData,\n                                    entityID: realTimeData?.entityID\n                                }\"></ng-container>\n                            </ng-container>\n                        </ng-template>\n                    </perfect-scrollbar>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #parameterSummary let-device=\"device\" let-entityID=\"entityID\">\n    <ng-container *ngFor=\"let deviceData of device;\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"d-flex align-items-center fw-bold\">\n                    <span class=\"material-symbols-outlined me-1\"\n                        [ngClass]=\"{'text-success': deviceData.status == 'LIVE', 'text-secondary': deviceData.status == 'OFFLINE' || deviceData.status == 'NO_DATA'}\">\n                        devices\n                    </span>\n                    {{ deviceData.name ? deviceData.name : commonConstant.HYPHEN }}\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-2\" *ngFor=\"let parameterData of deviceData.paramData;\">\n            <div class=\"col-sm-4 text-start text-secondary\">\n                {{ parameterData.label ? parameterData.label : commonConstant.HYPHEN }}\n            </div>\n            <div class=\"col-sm-4 text-center\">\n                <a class=\"text-primary cursorPointer fw-bold\" matTooltip=\"Trend\" matTooltipPosition=\"above\"\n                    (click)=\"showTrend(parameterData?.name, entityID, deviceData?.id)\">\n                    <span> {{ parameterData?.data?.value ? parameterData?.data?.value : commonConstant.HYPHEN }} </span>\n                    <span> {{ parameterData?.data?.value ? parameterData?.unit : '' }} </span>\n                </a>\n            </div>\n            <div class=\"col-sm-4 text-start text-secondary\">\n                {{ dateService.getRelativeTimeAgoLabel(parameterData?.data?.date, timezone) }}\n            </div>\n        </div>\n        <hr>\n    </ng-container>\n</ng-template>\n\n<ng-template #showLoader let-count=\"count\">\n    <lib-skeleton-loader [count]=\"count\" [appearance]=\"''\"\n        [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n</ng-template>", styles: [".labelColor{color:#0009}.matAccordion{box-shadow:none!important;background:whitesmoke;border-radius:16px!important}.badge{font-weight:normal;font-size:1em;padding:1.4px 15px;text-transform:none}.facility{background-color:#e3e2e2;color:#000}.entity{background-color:#e7effc;color:#084298}.device{background-color:#e0f7eb;color:#1c8a51}.cardHeight1{height:490px}.cardHeight2{height:520px}.scrollHeight{height:410px}\n"], components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5$1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i5$1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: i3.SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i12$1.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: i13.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i5$1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i5$1.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i13.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "async": i14.AsyncPipe, "titlecase": i14.TitleCasePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-entity',
                    templateUrl: './entity.component.html',
                    styleUrls: ['./entity.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: EntityService }, { type: RecentDataService }, { type: i2.DateService }, { type: TrendService }]; }, propDecorators: { searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }], scrollContainer: [{
                type: ViewChild,
                args: ['scrollContainer']
            }] } });

const routes$w = [
    {
        path: '',
        component: EntityDashboardComponent
    }
];
class EntityDashboardRoutingModule {
}
EntityDashboardRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityDashboardRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
EntityDashboardRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardRoutingModule, imports: [[RouterModule.forChild(routes$w)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$w)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class EntityDashboardModule {
}
EntityDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, declarations: [EntityDashboardComponent], imports: [CommonModule,
        EntityDashboardRoutingModule,
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
        NgxMatSelectSearchModule,
        PerfectScrollbarModule,
        TrendModule,
        SkeletonModule,
        SearchBarTwoModule] });
EntityDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, providers: [TrendService], imports: [[
            CommonModule,
            EntityDashboardRoutingModule,
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
            NgxMatSelectSearchModule,
            PerfectScrollbarModule,
            TrendModule,
            SkeletonModule,
            SearchBarTwoModule
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
                        NgxMatSelectSearchModule,
                        PerfectScrollbarModule,
                        TrendModule,
                        SkeletonModule,
                        SearchBarTwoModule
                    ],
                    providers: [TrendService]
                }]
        }] });

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
    constructor(router, storageService, dateService, entityService, trendService, recentDataService, alertService) {
        this.router = router;
        this.storageService = storageService;
        this.dateService = dateService;
        this.entityService = entityService;
        this.trendService = trendService;
        this.recentDataService = recentDataService;
        this.alertService = alertService;
        this.commonConstant = COMMON_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.FormErrorEnum = FormErrorEnum;
        this.entityTypeLoader = true;
        this.facilityDataLoader = false;
        this.entityTypeM = [new EntityType()];
        this.orgRecentDataM = [new OrgRecentData()];
        this.alertObj = new Alert();
        this.last48HrsMeterData = {};
        this.entityTypeFC = new FormControl('', Validators.required);
        this.entityTypeSearchUtil = new MatSelectSearchService(['type']);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.getEntityTypeByLayoutID();
    }
    getEntityTypeByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.entityTypeM = (yield this.entityService.getEntityTypeByLayoutID(this.orgID, 'YES'));
                this.entityTypeSearchUtil.entityArr = this.entityTypeM;
                this.entityTypeSearchUtil.createSubscription();
                if (this.entityTypeM && this.entityTypeM.length > 0) {
                    const defaultEntityType = this.entityTypeM[0].type;
                    if (defaultEntityType) {
                        this.entityTypeFC.patchValue(defaultEntityType);
                        this.getOrgRecentData(this.entityTypeFC.value);
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
    entityTypeChange(selectedType) {
        // Clear the timer when changing the device
        clearTimeout(this.apiTimer);
        this.entityTypeFC.patchValue(selectedType);
        this.orgRecentDataM = [new OrgRecentData()];
        this.getOrgRecentData(selectedType);
    }
    getOrgRecentData(entityType) {
        return __awaiter(this, void 0, void 0, function* () {
            this.facilityDataLoader = true;
            this.alertService.resetAlertProperties(this.alertObj);
            try {
                let requestBody = new RecentDataRequestWithoutParam();
                requestBody.timezone = this.timezone;
                requestBody.entityType = entityType;
                requestBody.backscan = 1;
                this.orgRecentDataM = (yield this.recentDataService.getOrgRecentData(this.orgID, requestBody));
                if (this.orgRecentDataM && this.orgRecentDataM.length == 0) {
                    this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                console.error(`Error in getOrgRecentData()`, error);
                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.apiTimer = setTimeout(() => {
                    this.getOrgRecentData(entityType);
                }, 300000);
                this.facilityDataLoader = false;
            }
        });
    }
    getLast48HrsMeterData(deviceID, paramName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let requestData = new RecentDataRequestWithParam();
                requestData.params = [{ name: paramName }];
                requestData.deviceID = [deviceID];
                requestData.backscan = 48;
                requestData.timezone = this.timezone;
                const result = yield this.recentDataService.getRecentDataWithParam(this.orgID, requestData);
                if (result.length > 0) {
                    if (!this.last48HrsMeterData[deviceID]) {
                        this.last48HrsMeterData[deviceID] = {};
                    }
                    this.last48HrsMeterData[deviceID][paramName] = result[0];
                }
                else {
                    if (!this.last48HrsMeterData[deviceID]) {
                        this.last48HrsMeterData[deviceID] = {};
                    }
                    this.last48HrsMeterData[deviceID][paramName] = null;
                }
            }
            catch (error) {
                console.error(`Error in getLast48HrsMeterData()`, error);
            }
        });
    }
    showEntityConsumption(id) {
        this.router.navigate(['/analytics-insights/consumption'], { queryParams: { entityID: id } });
    }
    showTrend(paramMetric, deviceID, entityID) {
        let requestBody = {
            paramMetric: paramMetric,
            deviceID: deviceID,
            entityID: entityID
        };
        this.trendService.openDialog(requestBody);
    }
    ngOnDestroy() {
        clearTimeout(this.apiTimer);
    }
}
FacilityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityComponent, deps: [{ token: i1$1.Router }, { token: i1$2.StorageService }, { token: i2.DateService }, { token: EntityService }, { token: TrendService }, { token: RecentDataService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
FacilityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FacilityComponent, selector: "app-facility", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Facility Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <ng-container *ngIf=\"entityTypeLoader; else showEntityType\">\n                <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 1 }\"></ng-container>\n            </ng-container>\n\n            <ng-template #showEntityType>\n                <div class=\"col-sm-3\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label>Select entity type</mat-label>\n                        <mat-select (selectionChange)=\"entityTypeChange($event.value)\" [formControl]=\"entityTypeFC\"\n                            required>\n                            <ng-container *ngIf=\"entityTypeM && entityTypeM.length > 0 && entityTypeM?.[0]?.type; else noDataFound\">\n                                <mat-option>\n                                    <ngx-mat-select-search [formControl]=\"entityTypeSearchUtil.filterFC\"\n                                        placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                                    </ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let type of entityTypeSearchUtil.filteredEntities | async\"\n                                    [value]=\"type.type\">\n                                    {{ type.type | titlecase }}\n                                </mat-option>\n                            </ng-container>\n                            <ng-template #noDataFound>\n                                <mat-option disabled>\n                                    {{ commonConstant.NO_DATA_FOUND }}\n                                </mat-option>\n                            </ng-template>\n                        </mat-select>\n                        <mat-error *ngIf=\"entityTypeFC.touched && entityTypeFC.hasError('required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class=\"row mt-2\" *ngIf=\"facilityDataLoader\">\n            <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row mt-2\" *ngIf=\"orgRecentDataM.length > 0 && orgRecentDataM[0].orgID != null\">\n            <div class=\"col-sm-12 mb-3\" *ngFor=\"let recentRes of orgRecentDataM\">\n                <mat-card class=\"cardOverwrite border\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"cardTitle me-2\">{{ recentRes.entityName }}</span>\n                                <span class=\"badge rounded-pill info\">\n                                    {{ recentRes.entityType }}\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6 text-end\" *ngIf=\"recentRes.entityStatusFlag\">\n                            <a class=\"text-primary cursorPointer\" matTooltip=\"Entity consumption\"\n                                matTooltipPosition=\"below\"\n                                (click)=\"showEntityConsumption(recentRes.entityID)\">\n                                <span class=\"material-symbols-outlined fs-4 fw-bold\">monitoring</span>\n                            </a>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\" *ngFor=\"let deviceRes of recentRes.deviceData\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"material-symbols-outlined me-1\"\n                                    [ngClass]=\"{'text-success': deviceRes.status == 'LIVE', 'text-secondary': deviceRes.status == 'OFFLINE' || deviceRes.status == 'NO_DATA'}\">\n                                    devices\n                                </span>\n                                {{ deviceRes.name }}\n                            </div>\n\n                            <div class=\"row mt-2\">\n                                <div class=\"col-sm-4 mb-3\" *ngFor=\"let paramRes of deviceRes.paramData\">\n                                    <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                                            <ng-container *ngTemplateOutlet=\"parameterData; context: {\n                                                duration: last48HrsMeterData[deviceRes.id]?.[paramRes.name]?.data?.date ? dateService.getRelativeTimeAgoLabel(last48HrsMeterData[deviceRes.id][paramRes.name]?.data?.date, timezone) : dateService.getRelativeTimeAgoLabel(paramRes?.data?.date, timezone),\n                                                value: last48HrsMeterData[deviceRes.id]?.[paramRes.name]?.data?.value != null ? last48HrsMeterData[deviceRes.id][paramRes.name]?.data?.value : paramRes?.data?.value,\n                                                unit: paramRes?.unit,\n                                                label: paramRes?.label,\n                                                entityID: recentRes?.entityID,\n                                                deviceID: deviceRes?.id,\n                                                paramName: paramRes?.name,\n                                                paramStatus: paramRes?.status\n                                            }\"></ng-container>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #parameterData let-duration=\"duration\" let-label=\"label\" let-value=\"value\" let-unit=\"unit\"\n    let-entityID=\"entityID\" let-deviceID=\"deviceID\" let-paramName=\"paramName\" let-paramStatus=\"paramStatus\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 textDurationWithAgoTime\">\n            {{ duration }}\n        </div>\n        <div class=\"col-sm-6 text-end\">\n            <a *ngIf=\"paramStatus == 'OFFLINE'\" class=\"text-secondary cursorPointer me-2\"\n                matTooltip=\"Currently parameter is offline, click here to see data of last 48 hrs.\" matTooltipPosition=\"below\"\n                (click)=\"getLast48HrsMeterData(deviceID, paramName)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">devices</span>\n            </a>\n\n            <a class=\"text-primary cursorPointer\" matTooltip=\"Trend\" matTooltipPosition=\"below\"\n                (click)=\"showTrend(paramName, deviceID, entityID)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">trending_up</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 text-center\">\n            <span class=\"fs-1 fw-bold text-primary\">{{ value ? value : commonConstant.HYPHEN }}</span>\n            <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n        </div>\n    </div>\n    <div class=\"row mt-4 mb-4\">\n        <div class=\"col-sm-12 fs-5 text-center\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #showLoader let-count=\"count\">\n    <lib-skeleton-loader [count]=\"count\" [appearance]=\"''\"\n        [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n</ng-template>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i14.AsyncPipe, "titlecase": i14.TitleCasePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-facility',
                    templateUrl: './facility.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$2.StorageService }, { type: i2.DateService }, { type: EntityService }, { type: TrendService }, { type: RecentDataService }, { type: AlertService }]; } });

const routes$v = [
    {
        path: '',
        component: FacilityComponent
    }
];
class FacilityRoutingModule {
}
FacilityRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FacilityRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
FacilityRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityRoutingModule, imports: [[RouterModule.forChild(routes$v)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$v)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class FacilityModule {
}
FacilityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FacilityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, declarations: [FacilityComponent], imports: [CommonModule,
        FacilityRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        NgxMatSelectSearchModule,
        TrendModule,
        SkeletonModule,
        SearchBarTwoModule,
        MessageAlertModule] });
FacilityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, providers: [TrendService], imports: [[
            CommonModule,
            FacilityRoutingModule,
            ReactiveFormsModule,
            MatCardModule,
            MatTooltipModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatOptionModule,
            NgxMatSelectSearchModule,
            TrendModule,
            SkeletonModule,
            SearchBarTwoModule,
            MessageAlertModule
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
                        ReactiveFormsModule,
                        MatCardModule,
                        MatTooltipModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatOptionModule,
                        NgxMatSelectSearchModule,
                        TrendModule,
                        SkeletonModule,
                        SearchBarTwoModule,
                        MessageAlertModule
                    ],
                    providers: [TrendService]
                }]
        }] });

class EntityDeviceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getDevicesWithEntities(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities/devices`, requestBody);
    }
    getDevicesWithEntitiesByParameter(orgID, paramName) {
        let params = new HttpParams();
        params = params.append('paramName', paramName);
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-devices`, { params: params });
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
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.FormErrorEnum = FormErrorEnum;
        this.last48HrsMeterData = {};
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
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            this.entityDeviceM = (yield this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric));
            this.meterSearchUtil.entityArr = this.entityDeviceM;
            this.meterSearchUtil.createSubscription();
            if (this.entityDeviceM.length > 0 && ((_b = (_a = this.entityDeviceM) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id)) {
                const deviceID = (_f = (_e = (_d = (_c = this.entityDeviceM) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d['devices']) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f['id'];
                this.meterFC.patchValue(deviceID);
                this.getParameterList();
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
        this.getParameterByDeviceID(selectedMeter);
    }
    getParameterByDeviceID(deviceID) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {};
            requestBody['deviceID'] = [deviceID];
            this.parameterM = (yield this.parameterService.getParameterByDeviceID(this.orgID, requestBody));
            if (this.parameterM.length > 0 && ((_b = (_a = this.parameterM) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id)) {
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
    getLast48HrsMeterData(paramName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let requestData = new RecentDataRequestWithParam();
                requestData.params = [{ name: paramName }];
                requestData.deviceID = [this.meterFC.value];
                requestData.backscan = 48;
                requestData.timezone = this.timezone;
                const result = yield this.recentDataService.getRecentDataWithParam(this.orgID, requestData);
                if (result.length > 0) {
                    this.last48HrsMeterData[paramName] = result[0];
                }
                else {
                    this.last48HrsMeterData[paramName] = null;
                }
                this.currentParamName = paramName;
            }
            catch (error) {
                console.error(`Error in getLast48HrsMeterData()`, error);
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
MeterDataDashboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardComponent, deps: [{ token: i1$2.StorageService }, { token: RecentDataService }, { token: EntityDeviceService }, { token: ParameterService }, { token: AlertService }, { token: i2.DateService }, { token: TrendService }], target: i0.ɵɵFactoryTarget.Component });
MeterDataDashboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MeterDataDashboardComponent, selector: "lib-meter-data", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Meter Data Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select meter</mat-label>\n                    <mat-select (selectionChange)=\"meterChange($event.value)\" [formControl]=\"meterFC\" required>\n                        <ng-container\n                            *ngIf=\"entityDeviceM && entityDeviceM.length > 0 && entityDeviceM?.[0]?.id; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"meterSearchUtil.filterFC\"\n                                    placeholderLabel=\"Search by entity name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-optgroup *ngFor=\"let entity of meterSearchUtil.filteredEntities | async\"\n                                [label]=\"entity.name\" [disabled]=\"entity.disabled\">\n                                <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\">\n                                    {{ device.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"meterFC.touched && meterFC.hasError('required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row mt-2\">\n            <ng-container *ngIf=\"showLoader; else dataTemplate\">\n                <lib-skeleton-loader [count]=\"3\" [appearance]=\"''\"\n                    [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n            </ng-container>\n            <ng-template #dataTemplate>\n                <div class=\"col-sm-4 mb-3\" *ngFor=\"let meterData of meterDataRes\">\n                    <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                        <ng-container *ngTemplateOutlet=\"parameterData; context: {\n                            duration: last48HrsMeterData && last48HrsMeterData[meterData.paramName]?.data?.date ? dateService.getRelativeTimeAgoLabel(last48HrsMeterData[meterData.paramName]?.data?.date, timezone) : dateService.getRelativeTimeAgoLabel(meterData?.data?.date, timezone),\n                            value: last48HrsMeterData && last48HrsMeterData[meterData.paramName]?.data?.value != null ? last48HrsMeterData[meterData.paramName]?.data?.value : meterData?.data?.value,\n                            unit: meterData?.unit,\n                            label: meterData?.paramLabel,\n                            entityID: meterData?.entityID,\n                            paramName: meterData?.paramName,\n                            status: meterData?.status\n                        }\"></ng-container>\n                    </mat-card>\n                </div>\n            </ng-template>\n        </div>\n\n    </div>\n</div>\n\n<ng-template #parameterData let-duration=\"duration\" let-label=\"label\" let-value=\"value\" let-unit=\"unit\"\n    let-entityID=\"entityID\" let-paramName=\"paramName\" let-status=\"status\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 textDurationWithAgoTime\">\n            {{ duration }}\n        </div>\n        <div class=\"col-sm-6 text-end\">\n            <a *ngIf=\"status == 'OFFLINE'\" class=\"text-secondary cursorPointer me-2\"\n                matTooltip=\"Currently parameter is offline, click here to see data of last 48 hrs.\"\n                matTooltipPosition=\"below\" (click)=\"getLast48HrsMeterData(paramName)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">devices</span>\n            </a>\n            <a class=\"text-primary cursorPointer\" matTooltip=\"Trend\" matTooltipPosition=\"below\"\n                (click)=\"showTrend(paramName, entityID)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">trending_up</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 text-center\">\n            <span class=\"fs-1 fw-bold text-primary\">{{ value != null && value != undefined ? (value | number: '1.2-2' ||\n                COMMON_CONSTANT.HYPHEN) : COMMON_CONSTANT.HYPHEN }}</span>\n            <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n        </div>\n    </div>\n    <div class=\"row mt-4 mb-4\">\n        <div class=\"col-sm-12 fs-5 text-center\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i10.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i14.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "async": i14.AsyncPipe, "number": i14.DecimalPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-meter-data',
                    templateUrl: './meter-data.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: RecentDataService }, { type: EntityDeviceService }, { type: ParameterService }, { type: AlertService }, { type: i2.DateService }, { type: TrendService }]; } });

const routes$u = [
    {
        path: '',
        component: MeterDataDashboardComponent
    }
];
class MeterDataRoutingModule {
}
MeterDataRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterDataRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
MeterDataRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataRoutingModule, imports: [[RouterModule.forChild(routes$u)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$u)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class MeterDataDashboardModule {
}
MeterDataDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterDataDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, declarations: [MeterDataDashboardComponent], imports: [CommonModule,
        MeterDataRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        NgxMatSelectSearchModule,
        TrendModule,
        MessageAlertModule,
        SkeletonModule] });
MeterDataDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, providers: [TrendService], imports: [[
            CommonModule,
            MeterDataRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatTooltipModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            NgxMatSelectSearchModule,
            TrendModule,
            MessageAlertModule,
            SkeletonModule
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
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatTooltipModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        NgxMatSelectSearchModule,
                        TrendModule,
                        MessageAlertModule,
                        SkeletonModule
                    ],
                    providers: [TrendService]
                }]
        }] });

const routes$t = [];
class ParameterTabRoutingModule {
}
ParameterTabRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParameterTabRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ParameterTabRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabRoutingModule, imports: [[RouterModule.forChild(routes$t)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$t)],
                    exports: [RouterModule]
                }]
        }] });

class ParameterTabComponent {
    constructor(router) {
        this.router = router;
        this.tab = [];
    }
    ngOnInit() {
        this.tab = [
            {
                icon: 'stacked_line_chart',
                label: 'By Entity',
                routerLink: '/dashboard/all-parameters',
            },
            {
                icon: 'show_chart',
                label: 'By parameter',
                routerLink: '/dashboard/single-parameter',
            }
        ];
        this.setActiveLink();
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setActiveLink();
            }
        });
    }
    setActiveLink() {
        let currentPath = window.location.pathname;
        for (let i = 0; i < this.tab.length; i++) {
            if (currentPath.includes(this.tab[i].routerLink)) {
                this.activeLink = this.tab[i].routerLink;
                break;
            }
        }
    }
}
ParameterTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabComponent, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component });
ParameterTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterTabComponent, selector: "lib-tab", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Parameter Dashboard</div>\n        </div>\n    </div>\n\n    <nav mat-tab-nav-bar>\n        <ng-container *ngFor=\"let tabs of tab; let i = index;\">\n            <a mat-tab-link [routerLink]=\"tabs.routerLink\" (click)=\"activeLink = tabs.routerLink\"\n                [active]=\"activeLink == tabs.routerLink\">\n                <div class=\"d-flex align-items-center\">\n                    <span class=\"material-symbols-outlined me-2\">\n                        {{ tabs.icon }}\n                    </span>\n                    {{ tabs.label }}\n                </div>\n            </a>\n        </ng-container>\n    </nav>\n    <router-outlet></router-outlet>\n\n</div>", components: [{ type: i2$2.MatTabNav, selector: "[mat-tab-nav-bar]", inputs: ["color"], exportAs: ["matTabNavBar", "matTabNav"] }], directives: [{ type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2$2.MatTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matTabLink"] }, { type: i1$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tab',
                    templateUrl: './tab.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }]; } });

class ParameterTabModule {
}
ParameterTabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParameterTabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabModule, declarations: [ParameterTabComponent], imports: [CommonModule,
        ParameterTabRoutingModule,
        MatTabsModule,
        NgbModule] });
ParameterTabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabModule, imports: [[
            CommonModule,
            ParameterTabRoutingModule,
            MatTabsModule,
            NgbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParameterTabComponent
                    ],
                    imports: [
                        CommonModule,
                        ParameterTabRoutingModule,
                        MatTabsModule,
                        NgbModule
                    ]
                }]
        }] });

// /tsc-library/
class ByEntityComponent {
    constructor(storageService, alertService, toastService, entityController, aggregateDataController, dialog) {
        this.storageService = storageService;
        this.alertService = alertService;
        this.toastService = toastService;
        this.entityController = entityController;
        this.aggregateDataController = aggregateDataController;
        this.dialog = dialog;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.selectEntityType = false;
        this.isViewData = false;
        this.showAlert = false;
        this.showLoader = false;
        this.entityByEntityTypeM = [new EntityWithChildren()];
        this.alertObj = new Alert();
        this.entityFC = new FormControl([], [Validators.required]);
        this.chartType = ChartTypeEnum.BASIC_LINE_CHART;
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        this.chartTitle = new ChartTitle();
        this.chartData = [];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
    }
    entityTypeInpChange() {
        this.entityType = this.entityTypeInput.entityTypeFC.value;
        this.entityFC.reset([]);
        this.getEntitiesByEntityType(this.entityType);
    }
    getEntitiesByEntityType(entityType) {
        let requestBody = {};
        requestBody['entityType'] = [entityType];
        this.entityController.getEntitiesByEntityType(this.orgID, requestBody)
            .subscribe((res) => {
            this.entityByEntityTypeM = [res];
        }, error => {
            console.log('error in getEntitiesByEntityType() - ', error);
        });
    }
    openEntityDialog() {
        if (this.entityType) {
            const dialog = this.dialog.open(EntityDialogComponent, {
                data: {
                    entityType: this.entityTypeInput.entityTypeFC.value,
                    entityObject: this.entityByEntityTypeM
                },
                width: '50vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
            dialog.afterClosed().subscribe((dialogRes) => {
                if (dialogRes.entityID) {
                    this.entityID = dialogRes.entityID;
                    this.entityFC.patchValue(this.entityID);
                }
            });
        }
        else {
            this.selectEntityType = true;
        }
    }
    viewEntityParameterData() {
        this.chartData = [];
        this.isViewData = true;
        this.alertService.resetAlertProperties(this.alertObj);
        if (this.isValidInputField()) {
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        if (this.startDate == this.endDate) {
            this.alertService.setAlertProperties(this.alertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            return;
        }
        this.showLoader = true;
        try {
            const requestData = this.createDataRequest();
            this.aggregateDataController.getEntityParameterData(this.orgID, requestData)
                .subscribe((entityParamRes) => {
                let entityParameterData = entityParamRes === null || entityParamRes === void 0 ? void 0 : entityParamRes.paramData;
                this.showLoader = false;
                if (entityParameterData && entityParameterData.every(item => item.data.length == 0)) {
                    this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
                else {
                    this.viewStateFlag = ChartViewStateEnum.HAS_DATA;
                    this.chartData = [];
                    entityParameterData.forEach((res) => {
                        if (res.data.length > 0) {
                            const newChartdata = new BasicAreaLineBarChart();
                            newChartdata.metaData = res.data.map(item => ({
                                name: moment(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                                value: item.value
                            }));
                            newChartdata.unit = {
                                name: '',
                                code: res.unit,
                            };
                            newChartdata.markLine = [
                                {
                                    label: 'Avg',
                                    value: res.avgValue,
                                    color: '#e83e8c'
                                },
                                {
                                    label: 'Max',
                                    value: res.maxValue,
                                    color: '#e83e8c'
                                }
                            ];
                            newChartdata.yAxisLabel = res.label + ' (' + res.unit + ')';
                            newChartdata.yAxisNameGap = 25;
                            newChartdata.showDataView = true;
                            newChartdata.showMagicType = true;
                            newChartdata.showRestore = true;
                            newChartdata.showDownloadImage = true;
                            newChartdata.chartTitle = {
                                name: res.label,
                                color: 'gray'
                            };
                            this.chartData.push(newChartdata);
                        }
                    });
                }
            }, error => {
                console.log('error in viewParameterData() - ', error);
                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
                throw error;
            });
        }
        catch (error) {
            console.error(`Error in viewEntityParameterData()`, error);
            this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
        }
        finally {
            this.showLoader = false;
        }
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityTypeInput.entityTypeFC,
            this.entityFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
    createDataRequest() {
        const requestData = {};
        requestData['startTime'] = this.startDate;
        requestData['endTime'] = this.endDate;
        requestData['interval'] = this.aggDuration;
        requestData['entityID'] = [this.entityID];
        requestData['entityType'] = [this.entityTypeInput.entityTypeFC.value];
        return requestData;
    }
}
ByEntityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityComponent, deps: [{ token: i1$2.StorageService }, { token: AlertService }, { token: i2$3.ToastrService }, { token: EntityController }, { token: AggregateDataController }, { token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
ByEntityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ByEntityComponent, selector: "lib-by-entity", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityTypeInput", first: true, predicate: ["entityTypeInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">By Entity</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\" [isMandatoryFieldInp]=\"true\"\n                    [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\" [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\"\n                    [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\" [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\"\n                    [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\" [showRangeInp]=\"true\"\n                    [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n            \n            <div class=\"col-sm-3\">\n                <lib-entity-type #entityTypeInput (emitFilter)=\"entityTypeInpChange()\"></lib-entity-type>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <button class=\"btn btn-link selectEntityText\" [ngClass]=\"{'mt-2': !selectEntityType || (isViewData && entityFC.value.length == 0)}\" type=\"button\"\n                    (click)=\"openEntityDialog()\">\n                    Select entity *\n                </button>\n                <span class=\"textMatError\" *ngIf=\"selectEntityType\">\n                    <br />\n                    Please select entity type first\n                </span>\n                <span class=\"ms-2 textMatError\" *ngIf=\"!selectEntityType && isViewData && entityFC.value.length == 0\">\n                    <br />\n                    Select entity\n                </span>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewEntityParameterData()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row mt-2\">\n            <ng-container *ngIf=\"showLoader; else dataTemplate\">\n                <lib-skeleton-loader [count]=\"3\" [appearance]=\"''\"\n                    [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n            </ng-container>\n\n            <ng-template #dataTemplate>\n                <div class=\"row\" *ngIf=\"chartData.length > 0\">\n                    <div class=\"col-sm-6\" *ngFor=\"let data of chartData\">\n                        <mat-card class=\"cardOverwrite cardBackgroundColor mb-3\">\n                            <lib-basic-area-line-bar [chartTypeInp]=\"chartType\" [chartTitleInp]=\"data.chartTitle\"\n                                [viewStateInp]=\"viewStateFlag\" [dataInp]=\"data\">\n                            </lib-basic-area-line-bar>\n                        </mat-card>\n                    </div>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n</div>", styles: [".selectEntityText{font-size:.88rem}\n"], components: [{ type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityTypeComponent, selector: "lib-entity-type", outputs: ["emitFilter"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10$1.BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: ["chartTypeInp", "viewStateInp", "chartTitleInp", "dataInp"] }], directives: [{ type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-by-entity',
                    templateUrl: './by-entity.component.html',
                    styleUrls: ['./by-entity.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: AlertService }, { type: i2$3.ToastrService }, { type: EntityController }, { type: AggregateDataController }, { type: i1$3.MatDialog }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }], entityTypeInput: [{
                type: ViewChild,
                args: ['entityTypeInput']
            }] } });

const routes$s = [
    {
        path: '',
        component: ByEntityComponent
    }
];
class ByEntityRoutingModule {
}
ByEntityRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ByEntityRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ByEntityRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityRoutingModule, imports: [[RouterModule.forChild(routes$s)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$s)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ByEntityModule {
}
ByEntityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ByEntityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityModule, declarations: [ByEntityComponent], imports: [CommonModule,
        ByEntityRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputModule,
        AggregationDurationModule,
        EntityTypeModule,
        EntityDialogModule,
        MessageAlertModule,
        SkeletonModule,
        BasicAreaLineBarModule,
        MatCardModule,
        MatRippleModule] });
ByEntityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityModule, imports: [[
            CommonModule,
            ByEntityRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            DateInputModule,
            AggregationDurationModule,
            EntityTypeModule,
            EntityDialogModule,
            MessageAlertModule,
            SkeletonModule,
            BasicAreaLineBarModule,
            MatCardModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ByEntityComponent
                    ],
                    imports: [
                        CommonModule,
                        ByEntityRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityTypeModule,
                        EntityDialogModule,
                        MessageAlertModule,
                        SkeletonModule,
                        BasicAreaLineBarModule,
                        MatCardModule,
                        MatRippleModule
                    ]
                }]
        }] });

// /tsc-library/
class ByParameterComponent {
    constructor(storageService, alertService, toastService, parameterController, parameterService, aggregateDataService, tscCommonService) {
        this.storageService = storageService;
        this.alertService = alertService;
        this.toastService = toastService;
        this.parameterController = parameterController;
        this.parameterService = parameterService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.showAlert = false;
        this.showLoader = false;
        this.parameterM = [new Parameter()];
        this.parameterByEntityTypeM = [new Parameter()];
        this.alertObj = new Alert();
        this.parameterFC = new FormControl('', [Validators.required]);
        this.parameterSearchUtil = new MatSelectSearchService(['label']);
        this.chartType = ChartTypeEnum.BASIC_LINE_CHART;
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        this.chartTitle = new ChartTitle();
        this.chartData = [];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
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
    entityTypeInpChange() {
        this.entityType = this.entityTypeInput.entityTypeFC.value;
        this.getParameterByEntityType(this.entityType);
    }
    getParameterByEntityType(entityType) {
        let requestBody = {};
        requestBody['entityType'] = [entityType];
        this.parameterController.getParameterByEntityType(this.orgID, requestBody)
            .subscribe((res) => {
            this.parameterByEntityTypeM = res;
            this.parameterSearchUtil.entityArr = this.parameterByEntityTypeM;
            this.parameterSearchUtil.createSubscription();
        }, error => {
            console.log('error in getParameterByEntityType() - ', error);
        });
    }
    onParameterChange(selectedParameter) {
        this.parameterFC.patchValue(selectedParameter);
    }
    viewParameterData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.chartData = [];
            this.alertService.resetAlertProperties(this.alertObj);
            if (this.isValidInputField()) {
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            if (this.startDate == this.endDate) {
                this.alertService.setAlertProperties(this.alertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
                return;
            }
            this.showLoader = true;
            try {
                const requestData = this.createDataRequest();
                const aggregateRes = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                this.showLoader = false;
                if (aggregateRes && aggregateRes.every(item => item.data.length == 0)) {
                    this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
                else {
                    this.viewStateFlag = ChartViewStateEnum.HAS_DATA;
                    this.chartData = [];
                    aggregateRes.forEach((res) => {
                        if (res.data.length > 0) {
                            const newChartdata = new BasicAreaLineBarChart();
                            newChartdata.metaData = res.data.map(item => ({
                                name: moment(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                                value: item.value
                            }));
                            newChartdata.unit = {
                                name: '',
                                code: res.unit,
                            };
                            newChartdata.yAxisLabel = res.paramLabel + ' (' + res.unit + ')';
                            newChartdata.showDataView = true;
                            newChartdata.showMagicType = true;
                            newChartdata.showRestore = true;
                            newChartdata.showDownloadImage = true;
                            newChartdata.chartTitle = {
                                name: res.entityName,
                                color: 'gray'
                            };
                            this.chartData.push(newChartdata);
                        }
                    });
                }
            }
            catch (error) {
                console.error(`Error in getAggregateData()`, error);
                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityTypeInput.entityTypeFC,
            this.parameterFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
    createDataRequest() {
        const requestData = new AggregateDataRequest();
        const isCounterParameter = this.getCounterParameter(this.parameterFC.value);
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.entityType = this.entityTypeInput.entityTypeFC.value;
        requestData.params = [
            {
                name: this.parameterFC.value,
                dsAgg: "avg",
                agg: "avg",
                sourceLoadType: isCounterParameter ? "all" : null,
                source_or_load: isCounterParameter ? "source" : null,
            }
        ];
        requestData.nullifyParams();
        return requestData;
    }
    getCounterParameter(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
        return parameter ? parameter.isCounter : false;
    }
}
ByParameterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterComponent, deps: [{ token: i1$2.StorageService }, { token: AlertService }, { token: i2$3.ToastrService }, { token: ParameterController }, { token: ParameterService }, { token: AggregateDataService }, { token: i3.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
ByParameterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ByParameterComponent, selector: "lib-by-parameter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityTypeInput", first: true, predicate: ["entityTypeInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">By Parameter</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\"\n                    [showTimeInCDRInp]=\"true\" [showRangeInp]=\"true\"\n                    [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity-type #entityTypeInput (emitFilter)=\"entityTypeInpChange()\"></lib-entity-type>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select parameter</mat-label>\n                    <mat-select (selectionChange)=\"onParameterChange($event.value)\" [formControl]=\"parameterFC\"\n                        required>\n                        <ng-container\n                            *ngIf=\"parameterByEntityTypeM && parameterByEntityTypeM.length > 0 && parameterByEntityTypeM[0]['id']; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"parameterSearchUtil.filterFC\"\n                                    placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-option *ngFor=\"let parameter of parameterSearchUtil.filteredEntities | async\"\n                                [value]=\"parameter.paramMetric\">\n                                {{ parameter.label }}\n                            </mat-option>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"!entityType\">\n                        Please select entity type first\n                    </mat-error>\n                    <mat-error *ngIf=\"parameterFC.touched && parameterFC.hasError('required') && entityType\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewParameterData()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row mt-2\">\n            <ng-container *ngIf=\"showLoader; else dataTemplate\">\n                <lib-skeleton-loader [count]=\"3\" [appearance]=\"''\"\n                    [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n            </ng-container>\n\n            <ng-template #dataTemplate>\n                <div class=\"row\" *ngIf=\"chartData.length > 0\">\n                    <div class=\"col-sm-6\" *ngFor=\"let data of chartData\">\n                        <mat-card class=\"cardOverwrite cardBackgroundColor mb-3\">\n                            <lib-basic-area-line-bar [chartTypeInp]=\"chartType\" [chartTitleInp]=\"data.chartTitle\"\n                                [viewStateInp]=\"viewStateFlag\" [dataInp]=\"data\">\n                            </lib-basic-area-line-bar>\n                        </mat-card>\n                    </div>\n                </div>\n            </ng-template>\n        </div>\n\n    </div>\n</div>", components: [{ type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityTypeComponent, selector: "lib-entity-type", outputs: ["emitFilter"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10$1.BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: ["chartTypeInp", "viewStateInp", "chartTitleInp", "dataInp"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-by-parameter',
                    templateUrl: './by-parameter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: AlertService }, { type: i2$3.ToastrService }, { type: ParameterController }, { type: ParameterService }, { type: AggregateDataService }, { type: i3.TSCCommonService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }], entityTypeInput: [{
                type: ViewChild,
                args: ['entityTypeInput']
            }] } });

const routes$r = [
    {
        path: '',
        component: ByParameterComponent
    }
];
class ByParameterRoutingModule {
}
ByParameterRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ByParameterRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ByParameterRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterRoutingModule, imports: [[RouterModule.forChild(routes$r)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$r)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ByParameterModule {
}
ByParameterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ByParameterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterModule, declarations: [ByParameterComponent], imports: [CommonModule,
        ByParameterRoutingModule,
        DateInputModule,
        AggregationDurationModule,
        EntityTypeModule,
        MessageAlertModule,
        SkeletonModule,
        BasicAreaLineBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRippleModule,
        NgxMatSelectSearchModule] });
ByParameterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterModule, imports: [[
            CommonModule,
            ByParameterRoutingModule,
            DateInputModule,
            AggregationDurationModule,
            EntityTypeModule,
            MessageAlertModule,
            SkeletonModule,
            BasicAreaLineBarModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatRippleModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ByParameterComponent
                    ],
                    imports: [
                        CommonModule,
                        ByParameterRoutingModule,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityTypeModule,
                        MessageAlertModule,
                        SkeletonModule,
                        BasicAreaLineBarModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatRippleModule,
                        NgxMatSelectSearchModule
                    ]
                }]
        }] });

class SourceLoadComponent$1 {
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
SourceLoadComponent$1.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent$1, deps: [], target: i0.ɵɵFactoryTarget.Component });
SourceLoadComponent$1.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent$1, selector: "lib-source-load", inputs: { defaultCategoryInp: "defaultCategoryInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"categoryFC\" (change)=\"categoryChange(categoryFC.value)\">\n    <mat-button-toggle *ngFor=\"let category of listConstant.SOURCE_LOAD\" value=\"{{ category.value }}\">\n        {{ category.label }}\n    </mat-button-toggle>\n</mat-button-toggle-group>", components: [{ type: i1$4.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i1$4.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent$1, decorators: [{
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

class SourceLoadModule$1 {
}
SourceLoadModule$1.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule$1, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourceLoadModule$1.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule$1, declarations: [SourceLoadComponent$1], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonToggleModule], exports: [SourceLoadComponent$1] });
SourceLoadModule$1.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule$1, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatButtonToggleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule$1, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SourceLoadComponent$1
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatButtonToggleModule
                    ],
                    exports: [
                        SourceLoadComponent$1
                    ]
                }]
        }] });

// /tsc-library/
class ReportService {
    constructor(http, dateService, alertService, environment) {
        this.http = http;
        this.dateService = dateService;
        this.alertService = alertService;
        this.environment = environment;
        this.reportAlertObj = new Alert();
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
    downloadReport(orgID, requestData) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.environment.TSC_COMMON_API_URL}public/organizations/${orgID}/report`;
            try {
                const response = yield this.http.post(url, requestData, { observe: 'response', responseType: 'blob' }).toPromise();
                if (response && response.body) {
                    const blob = new Blob([response.body], { type: response.headers.get('Content-Type') });
                    const downloadLink = document.createElement('a');
                    const currentDate = moment().format('DD MMM YYYY HH:mm');
                    downloadLink.href = window.URL.createObjectURL(blob);
                    downloadLink.download = requestData.reportName + "_" + currentDate + "." + requestData.reportFormat;
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                }
                else {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
        });
    }
    downloadConsumptionReport(orgID, requestData) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/meter-report`;
            try {
                const response = yield this.http.post(url, requestData, { observe: 'response', responseType: 'blob' }).toPromise();
                if (response && response.body) {
                    const blob = new Blob([response.body], { type: response.headers.get('Content-Type') });
                    const downloadLink = document.createElement('a');
                    const currentDate = moment().format('DD MMM YYYY HH:mm');
                    downloadLink.href = window.URL.createObjectURL(blob);
                    downloadLink.download = requestData.reportName + "_" + currentDate + "." + requestData.reportFormat;
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                }
                else {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
        });
    }
}
ReportService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, deps: [{ token: i1.HttpClient }, { token: i2.DateService }, { token: AlertService }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ReportService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.DateService }, { type: AlertService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

// /tsc-library/
class BreakupReportComponent {
    constructor(router, storageService, toastService, parameterService, aggregateDataService, reportService, alertService, tscCommonService) {
        this.router = router;
        this.storageService = storageService;
        this.toastService = toastService;
        this.parameterService = parameterService;
        this.aggregateDataService = aggregateDataService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.tscCommonService = tscCommonService;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.CUSTOM_RANGE_CONSTANT = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DropdownTypeEnum = DropdownTypeEnum;
        this.DateFormatEnum = DateFormatEnum;
        this.DateInputTypeEnum = DateInputTypeEnum;
        this.DateTypeEnum = DateTypeEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.showAlert = false;
        this.showLoader = false;
        this.reportAlertObj = new Alert();
        this.parameterFC = new FormControl('', [Validators.required]);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.pageTitle = "Energy Breakup Report";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.pageTitle = "Water Breakup Report";
        }
        this.getConsumptionParameter();
    }
    getConsumptionParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            const consumptionParamM = yield this.parameterService.getConsumptionParameter(this.orgID);
            this.consumptionParamM = consumptionParamM.consumptionParameter;
        });
    }
    sourceLoadInpChange() {
        this.category = this.sourceLoadInput.categoryFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    entityInpChange() {
        this.entityID = this.entityInput.multipleEntityFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
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
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0 && !((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.every(item => item.data.length == 0))) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.DateFormatEnum.DATE_TIME);
                }
                else {
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
        requestData.entityID = this.entityID;
        requestData.params = [
            {
                name: this.parameterFC.value,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: this.category,
                sourceLoadType: 'all'
            }
        ];
        requestData.nullifyParams();
        return requestData;
    }
    downloadReport(format) {
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
                const requestData = new DownloadReportRequest();
                requestData.request = this.createDataRequest();
                requestData.reportName = this.pageTitle;
                requestData.reportFormat = format;
                yield this.reportService.downloadReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadReport()", error);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityInput.multipleEntityFC,
            this.parameterFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
    scheduleReport(value) {
        if (value) {
            const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'water' : 'energy';
            this.router.navigate([`schedule-report/${applicationName}-breakup`]);
        }
    }
}
BreakupReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportComponent, deps: [{ token: i1$1.Router }, { token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: ParameterService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }, { token: i3.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
BreakupReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BreakupReportComponent, selector: "lib-breakup", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <mat-slide-toggle (change)=\"scheduleReport($event.checked)\">Schedule report</mat-slide-toggle>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"DateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"DateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"CUSTOM_RANGE_CONSTANT\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput [dropdownTypeInp]=\"DropdownTypeEnum.MULTIPLE_DROPDOWN\"\n                    (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select consumption parameter</mat-label>\n\n                    <mat-select [formControl]=\"parameterFC\" required>\n                        <ng-container\n                            *ngIf=\"consumptionParamM && consumptionParamM.length > 0 && consumptionParamM[0]['id']; else noConsumptionParamM\">\n                            <mat-option *ngFor=\"let param of consumptionParamM\" [value]=\"param.paramMetric\" (click)=\"selectedParameters()\">\n                                {{ param.label }}\n                            </mat-option>\n                        </ng-container>\n\n                        <ng-template #noConsumptionParamM>\n                            <mat-option disabled>\n                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n\n                    <mat-error *ngIf=\"parameterFC.hasError('required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n                        {{ ButtonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"renderTable && renderTable.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i9$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: SourceLoadComponent$1, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-breakup',
                    templateUrl: './breakup.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: ParameterService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }, { type: i3.TSCCommonService }]; }, propDecorators: { sourceLoadInput: [{
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

const routes$q = [
    {
        path: '',
        component: BreakupReportComponent
    }
];
class BreakupReportRoutingModule {
}
BreakupReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreakupReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
BreakupReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportRoutingModule, imports: [[RouterModule.forChild(routes$q)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$q)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class BreakupReportModule {
}
BreakupReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreakupReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportModule, declarations: [BreakupReportComponent], imports: [CommonModule,
        BreakupReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,
        SourceLoadModule$1,
        AggregationDurationModule,
        EntityModule,
        DownloadReportModule,
        DateInputModule,
        MessageAlertModule,
        SkeletonModule] });
BreakupReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportModule, imports: [[
            CommonModule,
            BreakupReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule,
            MatSlideToggleModule,
            SourceLoadModule$1,
            AggregationDurationModule,
            EntityModule,
            DownloadReportModule,
            DateInputModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BreakupReportComponent
                    ],
                    imports: [
                        CommonModule,
                        BreakupReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule,
                        MatSlideToggleModule,
                        SourceLoadModule$1,
                        AggregationDurationModule,
                        EntityModule,
                        DownloadReportModule,
                        DateInputModule,
                        MessageAlertModule,
                        SkeletonModule
                    ]
                }]
        }] });

// /tsc-library/
class CgwaReportComponent {
    constructor(router, formBuilder, storageService, toastService, alertService, aggregateDataService, reportService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.toastService = toastService;
        this.alertService = alertService;
        this.aggregateDataService = aggregateDataService;
        this.reportService = reportService;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DateFormatEnum = DateFormatEnum;
        this.DateInputTypeEnum = DateInputTypeEnum;
        this.DateTypeEnum = DateTypeEnum;
        this.FileTypeEnum = FileTypeEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.reportData = [new MeterData()];
        this.showAlert = false;
        this.showLoader = false;
        this.reportAlertObj = new Alert();
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.reportFGInit();
    }
    reportFGInit() {
        this.reportFG = this.formBuilder.group({
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            sourceConsumer: this.formBuilder.group({
                type: ['SOURCE', Validators.required],
                keyID: ['BOREWELL', Validators.required]
            }),
            params: this.formBuilder.array([this.createParamsGroup()]),
            interval: [, Validators.required]
        });
    }
    createParamsGroup() {
        return this.formBuilder.group({
            name: ['gwFlowTotalizer', Validators.required],
            dsAgg: ['sum', Validators.required],
            agg: ['sum', Validators.required]
        });
    }
    dateInpChange() {
        let startDate = this.monthDateInput.startDateFC.value;
        let endDate = this.monthDateInput.endDateFC.value;
        this.reportFG.get('startDate').patchValue(startDate);
        this.reportFG.get('endDate').patchValue(endDate);
    }
    reportSubmit() {
        this.alertService.resetAlertProperties(this.reportAlertObj);
        if (this.reportFG.invalid) {
            console.log('Invalid form:', this.reportFG.value);
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            this.showLoader = true;
            this.alertService.resetAlertProperties(this.reportAlertObj);
            this.viewReport();
        }
    }
    viewReport() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.aggregateDataService.getMeterAggregateDataForReport(this.orgID, this.reportFG.value);
                if (result && result.length > 0 && result[0]['date']) {
                    this.reportData = result;
                }
                else {
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
    downloadReport(format) {
        return __awaiter(this, void 0, void 0, function* () {
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (this.reportFG.invalid) {
                console.log('Invalid form:', this.reportFG.value);
                this.reportFG.markAllAsTouched();
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            this.showLoader = true;
            try {
                const requestData = {};
                requestData['request'] = this.reportFG.value;
                requestData['reportName'] = 'CGWA Report';
                requestData['reportFormat'] = format;
                yield this.reportService.downloadConsumptionReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadConsumptionReport()", error);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    scheduleReport(value) {
        if (value) {
            this.router.navigate([`schedule-report/cgwa`]);
        }
    }
}
CgwaReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportComponent, deps: [{ token: i1$1.Router }, { token: i2$1.FormBuilder }, { token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: AlertService }, { token: AggregateDataService }, { token: ReportService }], target: i0.ɵɵFactoryTarget.Component });
CgwaReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CgwaReportComponent, selector: "lib-cgwa", viewQueries: [{ propertyName: "monthDateInput", first: true, predicate: ["monthDateInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">CGWA Report</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <mat-slide-toggle (change)=\"scheduleReport($event.checked)\">Schedule report</mat-slide-toggle>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"reportFG\" (ngSubmit)=\"reportSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <lib-date-input #monthDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                        [materialFormFieldAppearanceInp]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                        [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"DateInputTypeEnum.MONTH_INPUT\"\n                        [dateTypeInp]=\"DateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\"\n                        [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\"></lib-date-input>\n                </div>\n\n                <div class=\"col-sm-3\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label>Select aggregation duration</mat-label>\n                        <mat-select formControlName=\"interval\" required>\n                            <mat-option [value]=\"'DAILY'\">Daily</mat-option>\n                            <mat-option [value]=\"'MONTHLY'\">Monthly</mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling(reportFG, 'interval', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n        </form>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"formSubmitBtn.click()\" matRipple\n                        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n                        {{ ButtonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report [excludeFileTypeInp]=\"FileTypeEnum.CSV\" (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0 && reportData[0].date\">\n            <table class=\"table\">\n                <tbody>\n                    <tr class=\"tableHeader\">\n                        <td align=\"center\" class=\"fw-bold\"> Date </td>\n                        <td align=\"center\" class=\"fw-bold\"> Meter name </td>\n                        <td align=\"center\" class=\"fw-bold\"> Parameter name </td>\n                        <td align=\"center\" class=\"fw-bold\"> Meter start reading </td>\n                        <td align=\"center\" class=\"fw-bold\"> Meter end reading </td>\n                        <td align=\"center\" class=\"fw-bold\"> Consumption </td>\n                    </tr>\n                </tbody>\n                <tbody>\n                    <tr *ngFor=\"let data of reportData; let i = index\">\n                        <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row?.date | date: 'dd-MMM-yyyy\n                            HH:mm:ss' }}</td>\n                        <td align=\"center\">{{ row?.meterName }}</td>\n                        <td align=\"center\">{{ row?.parameterName }}</td>\n                        <td align=\"center\">{{ row?.meterStartReading }}</td>\n                        <td align=\"center\">{{ row?.meterEndReading }}</td>\n                        <td align=\"center\">{{ row?.meterConsumption }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>", components: [{ type: i9$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "date": i14.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-cgwa',
                    templateUrl: './cgwa.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i2$1.FormBuilder }, { type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: AlertService }, { type: AggregateDataService }, { type: ReportService }]; }, propDecorators: { monthDateInput: [{
                type: ViewChild,
                args: ['monthDateInput']
            }] } });

const routes$p = [
    {
        path: '',
        component: CgwaReportComponent
    }
];
class CgwaReportRoutingModule {
}
CgwaReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CgwaReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
CgwaReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportRoutingModule, imports: [[RouterModule.forChild(routes$p)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$p)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class CgwaReportModule {
}
CgwaReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CgwaReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, declarations: [CgwaReportComponent], imports: [CommonModule,
        CgwaReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,
        DownloadReportModule,
        DateInputModule,
        MessageAlertModule,
        SkeletonModule] });
CgwaReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, imports: [[
            CommonModule,
            CgwaReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule,
            MatSlideToggleModule,
            DownloadReportModule,
            DateInputModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CgwaReportComponent
                    ],
                    imports: [
                        CommonModule,
                        CgwaReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule,
                        MatSlideToggleModule,
                        DownloadReportModule,
                        DateInputModule,
                        MessageAlertModule,
                        SkeletonModule
                    ]
                }]
        }] });

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
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    entityInpChange() {
        this.entityID = this.entityInput.multipleEntityFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
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
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0 && !((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.every(item => item.data.length == 0))) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else {
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
        requestData.entityID = this.entityID;
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
    downloadReport(format) {
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
                const requestData = new DownloadReportRequest();
                requestData.request = this.createDataRequest();
                requestData.reportName = 'Consumption Breakup Report';
                requestData.reportFormat = format;
                yield this.reportService.downloadReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadReport()", error);
            }
            finally {
                this.showLoader = false;
            }
        });
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
ConsumptionBreakupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupComponent, deps: [{ token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: i3.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionBreakupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupComponent, selector: "lib-consumption-breakup", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput [dropdownTypeInp]=\"dropdownTypeEnum.MULTIPLE_DROPDOWN\"\n                    (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"renderTable && renderTable.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: SourceLoadComponent$1, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-consumption-breakup',
                    templateUrl: './consumption-breakup.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: i3.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { sourceLoadInput: [{
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

const routes$o = [
    {
        path: '',
        component: ConsumptionBreakupComponent
    }
];
class ConsumptionBreakupRoutingModule {
}
ConsumptionBreakupRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ConsumptionBreakupRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupRoutingModule, imports: [[RouterModule.forChild(routes$o)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$o)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ConsumptionBreakupModule {
}
ConsumptionBreakupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, declarations: [ConsumptionBreakupComponent], imports: [CommonModule,
        ConsumptionBreakupRoutingModule,
        SourceLoadModule$1,
        DateInputModule,
        AggregationDurationModule,
        EntityModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
ConsumptionBreakupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, imports: [[
            CommonModule,
            ConsumptionBreakupRoutingModule,
            SourceLoadModule$1,
            DateInputModule,
            AggregationDurationModule,
            EntityModule,
            DownloadReportModule,
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
                        SourceLoadModule$1,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityModule,
                        DownloadReportModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

class SourceConsumerPage {
}
class Source {
}
class Consumer {
}
class UtilitySourceType {
}
class SourceConsumerConfigure {
}

// /tsc-library/
class SourceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    createSourceType(orgID, source) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types`, source);
    }
    getSourceTypeByID(orgID, sourceID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`);
    }
    updateSourceType(orgID, sourceID, source) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`, source);
    }
    deleteSourceType(orgID, sourceID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`);
    }
    getSourceTypeByPage(pageNo, pageSize, sortBy, orderBy, searchValue, filterArr, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }
        filterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/page`, { params: params });
    }
    getUtilitySourceAndType(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/utility-sources-types`);
    }
    getSourceConsumerType(orgID, type) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-consumers-type`, type);
    }
    getSourceConsumerConfig(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-consumers-configure`);
    }
}
SourceController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
SourceController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

// /tsc-library/
class SourceService {
    constructor(sourceController) {
        this.sourceController = sourceController;
    }
    getUtilitySourceAndType(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let utlitySourceType;
            try {
                utlitySourceType = yield this.sourceController.getUtilitySourceAndType(orgID).toPromise();
                if (utlitySourceType) {
                    return utlitySourceType;
                }
                else {
                    return new UtilitySourceType();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new UtilitySourceType();
            }
        });
    }
    getSourceConsumerType(orgID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let sourceLoadType;
            try {
                sourceLoadType = yield this.sourceController.getSourceConsumerType(orgID, type).toPromise();
                if (sourceLoadType) {
                    return sourceLoadType;
                }
                else {
                    return [new Static()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Static()];
            }
        });
    }
}
SourceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceService, deps: [{ token: SourceController }], target: i0.ɵɵFactoryTarget.Injectable });
SourceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: SourceController }]; } });

// /tsc-library/
class ConsumptionReportComponent {
    constructor(router, formBuilder, storageService, toastService, alertService, sourceService, parameterService, aggregateDataService, reportService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.toastService = toastService;
        this.alertService = alertService;
        this.sourceService = sourceService;
        this.parameterService = parameterService;
        this.aggregateDataService = aggregateDataService;
        this.reportService = reportService;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DateFormatEnum = DateFormatEnum;
        this.DateInputTypeEnum = DateInputTypeEnum;
        this.DateTypeEnum = DateTypeEnum;
        this.FileTypeEnum = FileTypeEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.reportData = [new MeterData()];
        this.showAlert = false;
        this.showLoader = false;
        this.sourceConsumerType = [new Static()];
        this.reportAlertObj = new Alert();
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.pageTitle = "Energy Consumption Report";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.pageTitle = "Water Consumption Report";
        }
        this.reportFGInit();
        if (this.reportFG.get('sourceConsumer.type').value == 'SOURCE') {
            this.getSourceConsumerType('source');
        }
        else {
            this.getSourceConsumerType('load');
        }
        this.getConsumptionParameter();
    }
    reportFGInit() {
        this.reportFG = this.formBuilder.group({
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            sourceConsumer: this.formBuilder.group({
                type: ['SOURCE', Validators.required],
                keyID: [, Validators.required]
            }),
            params: this.formBuilder.group({
                name: ['', Validators.required],
                dsAgg: ['sum', Validators.required],
                agg: ['sum', Validators.required]
            }),
            interval: [, Validators.required]
        });
        this.reportFG.get('sourceConsumer.type').valueChanges.subscribe((value) => __awaiter(this, void 0, void 0, function* () {
            if (value == 'SOURCE') {
                this.getSourceConsumerType('source');
            }
            else if (value == 'CONSUMER') {
                this.getSourceConsumerType('load');
            }
        }));
    }
    getSourceConsumerType(sourceConsumerType) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestData = {
                type: sourceConsumerType
            };
            this.sourceConsumerType = (yield this.sourceService.getSourceConsumerType(this.orgID, requestData));
        });
    }
    dateInpChange() {
        let startDate = this.monthDateInput.startDateFC.value;
        let endDate = this.monthDateInput.endDateFC.value;
        this.reportFG.get('startDate').patchValue(startDate);
        this.reportFG.get('endDate').patchValue(endDate);
    }
    getConsumptionParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            const consumptionParamM = yield this.parameterService.getConsumptionParameter(this.orgID);
            this.consumptionParamM = consumptionParamM.consumptionParameter;
        });
    }
    reportSubmit() {
        const formValue = this.reportFG.value;
        const modifiedValue = Object.assign(Object.assign({}, formValue), { params: [formValue.params] });
        this.alertService.resetAlertProperties(this.reportAlertObj);
        if (this.reportFG.invalid) {
            console.log('Invalid form:', this.reportFG.value);
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            this.showLoader = true;
            this.alertService.resetAlertProperties(this.reportAlertObj);
            this.viewReport(modifiedValue);
        }
    }
    viewReport(modifiedValue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.aggregateDataService.getMeterAggregateDataForReport(this.orgID, modifiedValue);
                if (result && result.length > 0 && result[0]['date']) {
                    this.reportData = result;
                }
                else {
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
    downloadReport(format) {
        return __awaiter(this, void 0, void 0, function* () {
            const formValue = this.reportFG.value;
            const modifiedValue = Object.assign(Object.assign({}, formValue), { params: [formValue.params] });
            this.alertService.resetAlertProperties(this.reportAlertObj);
            if (this.reportFG.invalid) {
                console.log('Invalid form:', this.reportFG.value);
                this.reportFG.markAllAsTouched();
                this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
            this.showLoader = true;
            try {
                const requestData = {};
                requestData['request'] = modifiedValue;
                requestData['reportName'] = 'Consumption Report';
                requestData['reportFormat'] = format;
                yield this.reportService.downloadConsumptionReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadConsumptionReport()", error);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    scheduleReport(value) {
        if (value) {
            const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'water' : 'energy';
            this.router.navigate([`schedule-report/${applicationName}-consumption`]);
        }
    }
}
ConsumptionReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportComponent, deps: [{ token: i1$1.Router }, { token: i2$1.FormBuilder }, { token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: AlertService }, { token: SourceService }, { token: ParameterService }, { token: AggregateDataService }, { token: ReportService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionReportComponent, selector: "lib-consumption", viewQueries: [{ propertyName: "monthDateInput", first: true, predicate: ["monthDateInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <mat-slide-toggle (change)=\"scheduleReport($event.checked)\">Schedule report</mat-slide-toggle>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"reportFG\" (ngSubmit)=\"reportSubmit()\">\n            <div class=\"row\">\n                <div formGroupName=\"sourceConsumer\">\n                    <div class=\"col-sm-3\">\n                        <mat-button-toggle-group class=\"matBtnFilter\" formControlName=\"type\">\n                            <mat-button-toggle [value]=\"'SOURCE'\">Source</mat-button-toggle>\n                            <mat-button-toggle [value]=\"'CONSUMER'\">Consumer</mat-button-toggle>\n                        </mat-button-toggle-group>\n                        <mat-error class=\"textMatError ms-1\"\n                            *ngIf=\"errorHandling(reportFG, 'sourceConsumer.type', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-3\">\n                    <lib-date-input #monthDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                        [materialFormFieldAppearanceInp]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                        [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"DateInputTypeEnum.MONTH_INPUT\"\n                        [dateTypeInp]=\"DateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\"\n                        [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\"></lib-date-input>\n                </div>\n\n                <div class=\"col-sm-3\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label>Select aggregation</mat-label>\n                        <mat-select formControlName=\"interval\" required>\n                            <mat-option [value]=\"'DAILY'\">Daily</mat-option>\n                            <mat-option [value]=\"'MONTHLY'\">Monthly</mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling(reportFG, 'interval', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n\n                <div class=\"col-sm-3\">\n                    <div formGroupName=\"sourceConsumer\">\n                        <mat-form-field class=\"matFieldWidth100\"\n                            [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                            <mat-label> Select {{ reportFG.get('sourceConsumer.type').value == 'SOURCE' ? 'source' :\n                                'consumer' }} type</mat-label>\n\n                            <mat-select formControlName=\"keyID\" required>\n                                <ng-container\n                                    *ngIf=\"sourceConsumerType && sourceConsumerType.length > 0 && sourceConsumerType[0]['id']; else noSourceConsumerType\">\n                                    <mat-option *ngFor=\"let type of sourceConsumerType\" [value]=\"type.keyID\">\n                                        {{ type.name }}\n                                    </mat-option>\n                                </ng-container>\n\n                                <ng-template #noSourceConsumerType>\n                                    <mat-option disabled>\n                                        {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                    </mat-option>\n                                </ng-template>\n                            </mat-select>\n\n                            <mat-error *ngIf=\"errorHandling(reportFG, 'sourceConsumer.keyID', 'required')\">\n                                {{ FormErrorEnum.REQUIRED }}\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                    <div formGroupName=\"params\">\n                        <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                            <mat-label>Select consumption parameter</mat-label>\n\n                            <mat-select formControlName=\"name\" required>\n                                <ng-container\n                                    *ngIf=\"consumptionParamM && consumptionParamM.length > 0 && consumptionParamM[0]['id']; else noConsumptionParamM\">\n                                    <mat-option *ngFor=\"let param of consumptionParamM\" [value]=\"param.paramMetric\">\n                                        {{ param.label }}\n                                    </mat-option>\n                                </ng-container>\n\n                                <ng-template #noConsumptionParamM>\n                                    <mat-option disabled>\n                                        {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                    </mat-option>\n                                </ng-template>\n                            </mat-select>\n\n                            <mat-error *ngIf=\"errorHandling(reportFG, 'params.name', 'required')\">\n                                {{ FormErrorEnum.REQUIRED }}\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n        </form>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"formSubmitBtn.click()\" matRipple\n                        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n                        {{ ButtonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report [excludeFileTypeInp]=\"FileTypeEnum.CSV\" (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0 && reportData[0].date\">\n            <table class=\"table\">\n                <tbody>\n                    <tr class=\"tableHeader\">\n                        <td align=\"center\" class=\"fw-bold\"> Date </td>\n                        <td align=\"center\" class=\"fw-bold\"> Meter name </td>\n                        <td align=\"center\" class=\"fw-bold\"> Parameter name </td>\n                        <td align=\"center\" class=\"fw-bold\"> Meter start reading </td>\n                        <td align=\"center\" class=\"fw-bold\"> Meter end reading </td>\n                        <td align=\"center\" class=\"fw-bold\"> Consumption </td>\n                    </tr>\n                </tbody>\n                <tbody>\n                    <tr *ngFor=\"let data of reportData; let i = index\">\n                        <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row?.date | date: 'dd-MMM-yyyy\n                            HH:mm:ss' }}</td>\n                        <td align=\"center\">{{ row?.meterName }}</td>\n                        <td align=\"center\">{{ row?.parameterName }}</td>\n                        <td align=\"center\">{{ row?.meterStartReading }}</td>\n                        <td align=\"center\">{{ row?.meterEndReading }}</td>\n                        <td align=\"center\">{{ row?.meterConsumption }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>", components: [{ type: i9$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i1$4.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i1$4.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "date": i14.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-consumption',
                    templateUrl: './consumption.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i2$1.FormBuilder }, { type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: AlertService }, { type: SourceService }, { type: ParameterService }, { type: AggregateDataService }, { type: ReportService }]; }, propDecorators: { monthDateInput: [{
                type: ViewChild,
                args: ['monthDateInput']
            }] } });

const routes$n = [
    {
        path: '',
        component: ConsumptionReportComponent
    }
];
class ConsumptionReportRoutingModule {
}
ConsumptionReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ConsumptionReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportRoutingModule, imports: [[RouterModule.forChild(routes$n)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$n)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ConsumptionReportModule {
}
ConsumptionReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportModule, declarations: [ConsumptionReportComponent], imports: [CommonModule,
        ConsumptionReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        NgxMatSelectSearchModule,
        DownloadReportModule,
        DateInputModule,
        MessageAlertModule,
        SkeletonModule] });
ConsumptionReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportModule, imports: [[
            CommonModule,
            ConsumptionReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule,
            MatButtonToggleModule,
            MatSlideToggleModule,
            NgxMatSelectSearchModule,
            DownloadReportModule,
            DateInputModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionReportComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule,
                        MatButtonToggleModule,
                        MatSlideToggleModule,
                        NgxMatSelectSearchModule,
                        DownloadReportModule,
                        DateInputModule,
                        MessageAlertModule,
                        SkeletonModule
                    ]
                }]
        }] });

class DataAvailability {
}

class DataAvailabilityController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getDataAvailability(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data-availability`, requestBody, { headers: headers });
    }
}
DataAvailabilityController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
DataAvailabilityController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

// /tsc-library/
class DataAvailabilityReportComponent {
    constructor(storageService, toastService, tscCommonService, dataAvailabilityController, dateService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.tscCommonService = tscCommonService;
        this.dataAvailabilityController = dataAvailabilityController;
        this.dateService = dateService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.materialConstant = MATERIAL_CONSTANT;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.buttonLabelEnum = ButtonLabelEnum;
        this.dropdownTypeEnum = DropdownTypeEnum;
        this.dateFormatEnum = DateFormatEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.frequencyEnum = FrequencyEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.parameterList = [];
        this.showAlert = false;
        this.showLoader = false;
        this.format = DateFormatEnum.DATE_TIME;
        this.frequency = [];
        this.dataAvailabilityM = [new DataAvailability()];
        this.reportAlertObj = new Alert();
        this.aggDurationFC = new FormControl('day_1', [Validators.required]);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM' && frequency.keyID != 'YEARLY');
        this.defaultFrequency = this.frequencyEnum.DAILY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }
    dateFilterEmitted(data) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.selectedFrequency = data.frequency;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    aggDurationChange(selectedAD) {
        this.aggDurationFC.patchValue(selectedAD);
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    entityInpChange() {
        var _a, _b;
        this.entityID = this.entityInput.entityFC.value;
        (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
        (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    deviceInpChange() {
        var _a, _b;
        this.deviceID = this.deviceInput.deviceFC.value;
        (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
        (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    paramInpChange() {
        var _a;
        let paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
        if (paramMetric.length > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(paramMetric);
        }
        this.alertService.resetAlertProperties(this.reportAlertObj);
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
            try {
                this.showLoader = true;
                const requestData = this.createDataRequest();
                this.dataAvailabilityController.getDataAvailability(this.orgID, requestData)
                    .subscribe((res) => {
                    if ((res === null || res === void 0 ? void 0 : res.length) > 0) {
                        this.dataAvailabilityM = res;
                    }
                    else {
                        this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                    }
                }, error => {
                    console.log('error in getDataAvailability() - ', error);
                    throw error;
                });
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
    downloadReport(format) {
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
            try {
                this.showLoader = true;
                const requestData = new DownloadReportRequest();
                requestData.request = this.createDataRequest();
                requestData.reportName = 'Data Availability Report';
                requestData.reportFormat = format;
                yield this.reportService.downloadReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadReport()", error);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    createDataRequest() {
        var _a;
        let parameter;
        if (((_a = this.paramInput.parameterFC.value) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            parameter = this.tscCommonService.removeSelectAllID(this.paramInput.parameterFC.value);
        }
        let requestData = {};
        requestData['startTime'] = this.startDate;
        requestData['endTime'] = this.endDate;
        requestData['interval'] = this.aggDurationFC.value;
        requestData['entityID'] = this.entityInput.entityFC.value;
        requestData['deviceID'] = this.deviceInput.deviceFC.value;
        requestData['parameters'] = parameter;
        return requestData;
    }
    isValidInputField() {
        const controls = [
            this.entityInput.entityFC,
            this.deviceInput.deviceFC,
            this.paramInput.parameterFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
}
DataAvailabilityReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportComponent, deps: [{ token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: i3.TSCCommonService }, { token: DataAvailabilityController }, { token: i2.DateService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
DataAvailabilityReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DataAvailabilityReportComponent, selector: "lib-data-availability", viewQueries: [{ propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Data Availability Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select aggregation duration</mat-label>\n                    <mat-select (selectionChange)=\"aggDurationChange($event.value)\" [formControl]=\"aggDurationFC\"\n                        required>\n                        <mat-option [value]=\"'day_1'\">\n                            Daily\n                        </mat-option>\n                        <mat-option [value]=\"'month_1'\" *ngIf=\"selectedFrequency == 'MONTHLY'\">\n                            Monthly\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"aggDurationFC.touched && aggDurationFC.hasError('required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"deviceID\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"dataAvailabilityM && dataAvailabilityM?.length > 0 && dataAvailabilityM[0]?.deviceName\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <td align=\"center\" class=\"fw-bold\"> Entity </td>\n                            <td align=\"center\" class=\"fw-bold\"> Device </td>\n                            <td align=\"center\" class=\"fw-bold\"> Parameter </td>\n                            <td align=\"center\" class=\"fw-bold\"> Min value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Max value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Avg value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Data availability (%) </td>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let data of dataAvailabilityM; let i = index\">\n                            <td>{{ i + 1 }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ dateService.formatDate(data.date, this.format) }}</td>\n                            <td align=\"center\">{{ data.entityName }}</td>\n                            <td align=\"center\">{{ data.deviceName }}</td>\n                            <td align=\"center\">{{ data.parameterName }}</td>\n                            <td align=\"center\">{{ data.minValue }}</td>\n                            <td align=\"center\">{{ data.maxValue }}</td>\n                            <td align=\"center\">{{ data.avgValue }}</td>\n                            <td align=\"center\">{{ data.dataAvailability }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-data-availability',
                    templateUrl: './data-availability.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: i3.TSCCommonService }, { type: DataAvailabilityController }, { type: i2.DateService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { entityInput: [{
                type: ViewChild,
                args: ['entityInput']
            }], deviceInput: [{
                type: ViewChild,
                args: ['deviceInput']
            }], paramInput: [{
                type: ViewChild,
                args: ['paramInput']
            }] } });

const routes$m = [
    {
        path: '',
        component: DataAvailabilityReportComponent
    }
];
class DataAvailabilityReportRoutingModule {
}
DataAvailabilityReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataAvailabilityReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
DataAvailabilityReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportRoutingModule, imports: [[RouterModule.forChild(routes$m)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$m)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class DataAvailabilityReportModule {
}
DataAvailabilityReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataAvailabilityReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, declarations: [DataAvailabilityReportComponent], imports: [CommonModule,
        DataAvailabilityReportRoutingModule,
        DateFilterTwoModule,
        FormsModule,
        ReactiveFormsModule,
        EntityModule,
        DeviceModule,
        ParamMetricModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRippleModule] });
DataAvailabilityReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, imports: [[
            CommonModule,
            DataAvailabilityReportRoutingModule,
            DateFilterTwoModule,
            FormsModule,
            ReactiveFormsModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            DownloadReportModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
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
                        DateFilterTwoModule,
                        FormsModule,
                        ReactiveFormsModule,
                        EntityModule,
                        DeviceModule,
                        ParamMetricModule,
                        DownloadReportModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
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
        this.FormErrorEnum = FormErrorEnum;
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
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            this.entityDeviceM = (yield this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric));
            this.meterSearchUtil.entityArr = this.entityDeviceM;
            this.meterSearchUtil.createSubscription();
            if (this.entityDeviceM.length > 0 && ((_b = (_a = this.entityDeviceM) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id)) {
                const deviceID = (_f = (_e = (_d = (_c = this.entityDeviceM) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d['devices']) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f['id'];
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
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    paramInpChange() {
        var _a;
        let paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
        if (paramMetric.length > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(paramMetric);
        }
        this.alertService.resetAlertProperties(this.reportAlertObj);
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
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0 && !((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.every(item => item.data.length == 0))) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else {
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
    downloadReport(format) {
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
                const requestData = new DownloadReportRequest();
                requestData.request = this.createDataRequest();
                requestData.reportName = 'Meter Report';
                requestData.reportFormat = format;
                yield this.reportService.downloadReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadReport()", error);
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
MeterReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportComponent, deps: [{ token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: i3.TSCCommonService }, { token: EntityDeviceService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
MeterReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MeterReportComponent, selector: "lib-meter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Meter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select meter</mat-label>\n                    <mat-select (selectionChange)=\"meterChange($event.value)\" [formControl]=\"meterFC\" required>\n                        <ng-container *ngIf=\"entityDeviceM && entityDeviceM.length > 0 && entityDeviceM?.[0]?.id; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"meterSearchUtil.filterFC\" placeholderLabel=\"Search by entity name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-optgroup *ngFor=\"let entity of meterSearchUtil.filteredEntities | async\" [label]=\"entity.name\"\n                                [disabled]=\"entity.disabled\">\n                                <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\">\n                                    {{ device.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"meterFC.touched && meterFC.hasError('required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"meterFC.value\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"renderTable && renderTable.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i10.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-meter',
                    templateUrl: './meter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: i3.TSCCommonService }, { type: EntityDeviceService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }], paramInput: [{
                type: ViewChild,
                args: ['paramInput']
            }] } });

const routes$l = [
    {
        path: '',
        component: MeterReportComponent
    }
];
class MeterReportRoutingModule {
}
MeterReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
MeterReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportRoutingModule, imports: [[RouterModule.forChild(routes$l)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$l)],
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
        DownloadReportModule,
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
            DownloadReportModule,
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
                        DownloadReportModule,
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
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    entityInpChange() {
        this.entityID = this.entityInput.entityFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    deviceInpChange() {
        this.deviceID = this.deviceInput.deviceFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    paramInpChange() {
        var _a, _b;
        this.paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
        if (((_b = this.paramMetric) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(this.paramMetric);
        }
        this.alertService.resetAlertProperties(this.reportAlertObj);
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
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0 && !((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.every(item => item.data.length == 0))) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else {
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
    downloadReport(format) {
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
                const requestData = new DownloadReportRequest();
                requestData.request = this.createDataRequest();
                requestData.reportName = 'Parameter Report';
                requestData.reportFormat = format;
                yield this.reportService.downloadReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadReport()", error);
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
ParameterReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportComponent, deps: [{ token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: i3.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
ParameterReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterReportComponent, selector: "lib-parameter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }, { propertyName: "aggInput", first: true, predicate: ["aggInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Parameter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\"\n                    [showTimeInCDRInp]=\"true\" [showRangeInp]=\"true\"\n                    [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"deviceID\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n            <div class=\"col-sm-9 mt-4\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"paramMetric && paramMetric.length > 0\">\n            <table class=\"table\">\n                <tbody>\n                    <tr class=\"tableHeader\">\n                        <td align=\"center\" class=\"fw-bold\"> Metric </td>\n                        <td align=\"center\" class=\"fw-bold\"> Aggregation </td>\n                    </tr>\n                </tbody>\n                <tbody>\n                    <tr *ngFor=\"let metric of parameterList; let i = index\">\n                        <td align=\"center\">\n                            <div class=\"mt-4\">\n                                {{ getParameterLabel(metric) }}\n                            </div>\n                        </td>\n                        <td align=\"center\">\n                            <div class=\"col-sm-6 mt-3\">\n                                <lib-aggregation #aggInput\n                                    (emitFilter)=\"aggInpChange(aggInput.aggregationFC.value, metric)\"></lib-aggregation>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"renderTable && renderTable.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: AggregationComponent, selector: "lib-aggregation", outputs: ["emitFilter"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parameter',
                    templateUrl: './parameter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: i3.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
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

const routes$k = [
    {
        path: '',
        component: ParameterReportComponent
    }
];
class ParameterReportRoutingModule {
}
ParameterReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParameterReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ParameterReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportRoutingModule, imports: [[RouterModule.forChild(routes$k)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$k)],
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
        DownloadReportModule,
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
            DownloadReportModule,
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
                        DownloadReportModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

// /tsc-library/
class RawDataReportComponent {
    constructor(storageService, toastService, aggregateDataService, parameterService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
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
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    entityInpChange() {
        this.entityID = this.entityInput.entityFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    deviceInpChange() {
        this.deviceID = this.deviceInput.deviceFC.value;
        if (this.deviceID) {
            this.getParameterByDeviceID(this.deviceID);
        }
        this.alertService.resetAlertProperties(this.reportAlertObj);
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
                    if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0 && !((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.every(item => item.data.length == 0))) {
                        this.timestamp = this.reportService.extractTimestamp(this.reportData);
                        this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                    }
                    else {
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
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.TIME_EXCEEDED_LABEL, ReportErrorEnum.HOUR_24_TIME_EXCEEDED_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            }
        });
    }
    downloadReport(format) {
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
                    const requestData = new DownloadReportRequest();
                    requestData.request = this.createDataRequest();
                    requestData.reportName = 'Parameter Report';
                    requestData.reportFormat = format;
                    yield this.reportService.downloadReport(this.orgID, requestData);
                }
                catch (error) {
                    console.error("Error in downloadReport()", error);
                }
                finally {
                    this.showLoader = false;
                }
            }
            else {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.TIME_EXCEEDED_LABEL, ReportErrorEnum.HOUR_24_TIME_EXCEEDED_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
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
RawDataReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportComponent, deps: [{ token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
RawDataReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RawDataReportComponent, selector: "lib-raw-data", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Raw Data Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\"\n                    [showTimeInCDRInp]=\"true\" [showRangeInp]=\"true\"\n                    [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n            <div class=\"col-sm-3 mt-3\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"renderTable && renderTable.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-raw-data',
                    templateUrl: './raw-data.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], entityInput: [{
                type: ViewChild,
                args: ['entityInput']
            }], deviceInput: [{
                type: ViewChild,
                args: ['deviceInput']
            }] } });

const routes$j = [
    {
        path: '',
        component: RawDataReportComponent
    }
];
class RawDataReportRoutingModule {
}
RawDataReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RawDataReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
RawDataReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportRoutingModule, imports: [[RouterModule.forChild(routes$j)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$j)],
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
        DownloadReportModule,
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
            DownloadReportModule,
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
                        DownloadReportModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

// /tsc-library/
class SourcingReportComponent {
    constructor(router, storageService, toastService, aggregateDataService, parameterService, reportService, alertService, tscCommonService) {
        this.router = router;
        this.storageService = storageService;
        this.toastService = toastService;
        this.aggregateDataService = aggregateDataService;
        this.parameterService = parameterService;
        this.reportService = reportService;
        this.alertService = alertService;
        this.tscCommonService = tscCommonService;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.CUSTOM_RANGE_CONSTANT = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DateFormatEnum = DateFormatEnum;
        this.DateInputTypeEnum = DateInputTypeEnum;
        this.DateTypeEnum = DateTypeEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.allParameterID = [];
        this.parameterList = [];
        this.totalParameterCount = 0;
        this.showAlert = false;
        this.showLoader = false;
        this.reportAlertObj = new Alert();
        this.parameterFC = new FormControl([], [Validators.required]);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';
        this.pageTitle = `${applicationName} Sourcing Report`;
        this.getConsumptionParameter();
    }
    getConsumptionParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            const consumptionParamM = yield this.parameterService.getConsumptionParameter(this.orgID);
            this.consumptionParamM = consumptionParamM.consumptionParameter;
            this.totalParameterCount = this.consumptionParamM.length;
            this.consumptionParamM.forEach(parameter => this.allParameterID.push(parameter['paramMetric']));
        });
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    selectAllParameters() {
        if (!this.parameterFC.value.includes(-1)) {
            this.parameterFC.reset([]);
            return;
        }
        this.parameterFC.setValue([-1, ...this.allParameterID]);
        this.paramInpChange();
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
        this.paramInpChange();
    }
    paramInpChange() {
        let paramMetric = this.parameterFC.value;
        if (paramMetric.length > 0) {
            this.parameterList = this.tscCommonService.removeSelectAllID(paramMetric);
        }
        this.alertService.resetAlertProperties(this.reportAlertObj);
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
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0 && !((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.every(item => item.data.length == 0))) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.DateFormatEnum.DATE_TIME);
                }
                else {
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
    downloadReport(format) {
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
                const requestData = new DownloadReportRequest();
                requestData.request = this.createDataRequest();
                requestData.reportName = this.pageTitle;
                requestData.reportFormat = format;
                yield this.reportService.downloadReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadReport()", error);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    createDataRequest() {
        var _a;
        let parameter;
        if (((_a = this.parameterFC.value) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            parameter = this.tscCommonService.removeSelectAllID(this.parameterFC.value);
        }
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.aggDuration;
        requestData.params = parameter.map(param => ({
            name: param,
            dsAgg: "sum",
            agg: "sum",
            source_or_load: "source",
            sourceLoadType: 'all'
        }));
        requestData.nullifyParams();
        return requestData;
    }
    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.parameterFC
        ];
        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }
    scheduleReport(value) {
        if (value) {
            const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'water' : 'energy';
            this.router.navigate([`schedule-report/${applicationName}-sourcing`]);
        }
    }
}
SourcingReportComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportComponent, deps: [{ token: i1$1.Router }, { token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }, { token: i3.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
SourcingReportComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourcingReportComponent, selector: "lib-sourcing", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <mat-slide-toggle (change)=\"scheduleReport($event.checked)\">Schedule report</mat-slide-toggle>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"DateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"DateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"CUSTOM_RANGE_CONSTANT\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select consumption parameter</mat-label>\n\n                    <mat-select [formControl]=\"parameterFC\" multiple required>\n                        <ng-container\n                            *ngIf=\"consumptionParamM && consumptionParamM.length > 0 && consumptionParamM[0]['id']; else noConsumptionParamM\">\n                            <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\">\n                                Select all\n                            </mat-option>\n                            <mat-option *ngFor=\"let param of consumptionParamM\" [value]=\"param.paramMetric\" (click)=\"selectedParameters()\">\n                                {{ param.label }}\n                            </mat-option>\n                        </ng-container>\n\n                        <ng-template #noConsumptionParamM>\n                            <mat-option disabled>\n                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n\n                    <mat-error *ngIf=\"parameterFC.hasError('required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n                        {{ ButtonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"renderTable && renderTable.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : COMMON_CONSTANT.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i9$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-sourcing',
                    templateUrl: './sourcing.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }, { type: i3.TSCCommonService }]; }, propDecorators: { customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }] } });

const routes$i = [
    {
        path: '',
        component: SourcingReportComponent
    }
];
class SourcingReportRoutingModule {
}
SourcingReportRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourcingReportRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
SourcingReportRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportRoutingModule, imports: [[RouterModule.forChild(routes$i)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$i)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class SourcingReportModule {
}
SourcingReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourcingReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportModule, declarations: [SourcingReportComponent], imports: [CommonModule,
        SourcingReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,
        AggregationDurationModule,
        DownloadReportModule,
        DateInputModule,
        MessageAlertModule,
        SkeletonModule] });
SourcingReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportModule, imports: [[
            CommonModule,
            SourcingReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule,
            MatSlideToggleModule,
            AggregationDurationModule,
            DownloadReportModule,
            DateInputModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SourcingReportComponent
                    ],
                    imports: [
                        CommonModule,
                        SourcingReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule,
                        MatSlideToggleModule,
                        AggregationDurationModule,
                        DownloadReportModule,
                        DateInputModule,
                        MessageAlertModule,
                        SkeletonModule
                    ]
                }]
        }] });

// /tsc-library/
class UsageAcrossFacilityComponent {
    constructor(storageService, toastService, aggregateDataService, reportService, alertService) {
        this.storageService = storageService;
        this.toastService = toastService;
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
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
    }
    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        this.alertService.resetAlertProperties(this.reportAlertObj);
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
                if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0 && !((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.every(item => item.data.length == 0))) {
                    this.timestamp = this.reportService.extractTimestamp(this.reportData);
                    this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                }
                else {
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
    downloadReport(format) {
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
                const requestData = new DownloadReportRequest();
                requestData.request = this.createDataRequest();
                requestData.reportName = 'Usage Across Facility Report';
                requestData.reportFormat = format;
                yield this.reportService.downloadReport(this.orgID, requestData);
            }
            catch (error) {
                console.error("Error in downloadReport()", error);
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
UsageAcrossFacilityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityComponent, deps: [{ token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
UsageAcrossFacilityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UsageAcrossFacilityComponent, selector: "lib-usage-across-facility", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Usage Across Facility Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"renderTable && renderTable.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: SourceLoadComponent$1, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i2.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", inputs: ["excludeFileTypeInp"], outputs: ["fileTypeEmitted"] }, { type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-usage-across-facility',
                    templateUrl: './usage-across-facility.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { sourceLoadInput: [{
                type: ViewChild,
                args: ['sourceLoadInput']
            }], customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }], aggDurationInput: [{
                type: ViewChild,
                args: ['aggDurationInput']
            }] } });

const routes$h = [
    {
        path: '',
        component: UsageAcrossFacilityComponent
    }
];
class UsageAcrossFacilityRoutingModule {
}
UsageAcrossFacilityRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UsageAcrossFacilityRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
UsageAcrossFacilityRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityRoutingModule, imports: [[RouterModule.forChild(routes$h)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$h)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class UsageAcrossFacilityModule {
}
UsageAcrossFacilityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UsageAcrossFacilityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, declarations: [UsageAcrossFacilityComponent], imports: [CommonModule,
        UsageAcrossFacilityRoutingModule,
        SourceLoadModule$1,
        DateInputModule,
        AggregationDurationModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
UsageAcrossFacilityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, imports: [[
            CommonModule,
            UsageAcrossFacilityRoutingModule,
            SourceLoadModule$1,
            DateInputModule,
            AggregationDurationModule,
            DownloadReportModule,
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
                        SourceLoadModule$1,
                        DateInputModule,
                        AggregationDurationModule,
                        DownloadReportModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });

// /tsc-library/
class ScheduleReportConfigurationComponent {
    constructor(formBuilder, 
    // tsc-library
    storageService, tscCommonService, userService) {
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.tscCommonService = tscCommonService;
        this.userService = userService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormErrorEnum = FormErrorEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.userContext = UserContext.ROOT_ORG_USER;
        this.userM = [new User()];
        this.rootOrgUserM = [new User()];
        this.currentOrgUserM = [new User()];
        this.allUserID = [];
        this.totalUserCount = 0;
        this.intervalList = [
            { label: 'Daily', value: 'DAILY' },
            { label: 'Weekly', value: 'WEEKLY' },
            { label: 'Monthly', value: 'MONTHLY' }
        ];
        this.frequencyList = [
            { label: 'Daily', value: 'DAILY' },
            { label: 'Weekly', value: 'WEEKLY' },
            { label: 'Monthly', value: 'MONTHLY' }
        ];
        this.frequencyInfoLabel = 'Report will be sent at 6:00 a.m.';
        this.userFC = new FormControl(true, Validators.required);
        this.userSearchUtil = new MatSelectSearchService(['firstName', 'lastName', 'email']);
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.inputPlaceholder = "email1@domain.com, email2@domain.com";
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.initializeUsers();
        this.scheduleReportFGInit();
    }
    scheduleReportFGInit() {
        this.scheduleReportFG = this.formBuilder.group({
            name: [, Validators.required],
            dataInterval: [, Validators.required],
            frequency: [, Validators.required],
            userChoice: [UserContext.ROOT_ORG_USER],
            userID: [[], Validators.required],
            otherUserEmail: [[]],
            status: ['ACTIVE', Validators.required],
            reportFormat: [, Validators.required],
        });
        this.scheduleReportFG.get('dataInterval').valueChanges.subscribe(value => {
            switch (value) {
                case 'DAILY':
                    this.frequencyList = [{ label: "Daily", value: "DAILY" }];
                    this.frequencyInfoLabel = 'Report will be sent on daily basis at 6:00 a.m.';
                    break;
                case 'WEEKLY':
                    this.frequencyList = [
                        { label: "Daily", value: "DAILY" },
                        { label: "Weekly", value: "WEEKLY" }
                    ];
                    this.frequencyInfoLabel = 'Report will be sent on weekly basis at 6:00 a.m. on Monday';
                    break;
                case 'MONTHLY':
                    this.frequencyList = [
                        { label: "Daily", value: "DAILY" },
                        { label: "Weekly", value: "WEEKLY" },
                        { label: "Monthly", value: "MONTHLY" }
                    ];
                    this.frequencyInfoLabel = 'Report will be sent on monthly basis at 6:00 a.m. on first day of month';
                    break;
                default:
                    break;
            }
        });
    }
    initializeUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUsersByOrgID();
            yield this.getCurrentOrgUserAccess();
        });
    }
    getUsersByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rootOrgUserM = (yield this.userService.getUsersByOrgID(this.orgID));
            this.userM = this.rootOrgUserM;
            this.userSearchUtil.entityArr = this.userM;
            this.userSearchUtil.createSubscription();
            this.totalUserCount = this.userM.length;
            this.userM.forEach(user => this.allUserID.push(user['id']));
        });
    }
    getCurrentOrgUserAccess() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentOrgUserM = (yield this.userService.getCurrentOrgUserAccess(this.orgID));
        });
    }
    userContextChange() {
        if (this.userFC.value) {
            this.userContext = UserContext.ROOT_ORG_USER;
            this.userM = this.rootOrgUserM;
            this.scheduleReportFG.get('userChoice').setValue(this.userContext);
        }
        else {
            this.userContext = UserContext.CURRENT_ORG_USER;
            this.userM = this.currentOrgUserM;
            this.scheduleReportFG.get('userChoice').setValue(this.userContext);
        }
        this.allUserID = [];
        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();
        this.totalUserCount = this.userM.length;
        this.userM.forEach(user => this.allUserID.push(user['id']));
        this.scheduleReportFG.get('userID').setValue([]);
    }
    selectUser() {
        const selected = this.scheduleReportFG.get('userID').value;
        if (selected.includes(-1)) {
            selected.shift();
            this.scheduleReportFG.get('userID').patchValue(selected);
        }
        else if (this.scheduleReportFG.get('userID').value.length == this.totalUserCount) {
            this.allUserID.splice(0, 0, -1);
            this.scheduleReportFG.get('userID').patchValue(this.allUserID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.scheduleReportFG.get('userID').patchValue(filteredSelected);
        }
    }
    selectAllUsers() {
        if (!this.scheduleReportFG.get('userID').value.includes(-1)) {
            this.scheduleReportFG.get('userID').reset([]);
            return;
        }
        this.scheduleReportFG.get('userID').setValue([-1, ...this.allUserID]);
    }
    onInput() {
        this.inputPlaceholder = '';
    }
    get otherUserEmail() {
        return this.scheduleReportFG.get('otherUserEmail');
    }
    add(event) {
        const value = (event.value || '').trim();
        if (value) {
            const emails = value.split(',').map(email => email.trim());
            const validEmails = emails.filter(email => this.tscCommonService.isValidEmail(email));
            if (validEmails.length > 0) {
                this.otherUserEmail.patchValue(this.otherUserEmail.value.concat(validEmails));
            }
        }
        event.chipInput.clear();
    }
    removeEmail(email) {
        const index = this.otherUserEmail.value.indexOf(email);
        if (index >= 0) {
            const emails = [...this.otherUserEmail.value];
            emails.splice(index, 1);
            this.otherUserEmail.setValue(emails);
        }
    }
    onStatusChange(event) {
        const newStatus = event.checked ? 'ACTIVE' : 'INACTIVE';
        this.scheduleReportFG.get('status').setValue(newStatus);
    }
}
ScheduleReportConfigurationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConfigurationComponent, deps: [{ token: i2$1.FormBuilder }, { token: i1$2.StorageService }, { token: i3.TSCCommonService }, { token: i4$1.UserService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleReportConfigurationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ScheduleReportConfigurationComponent, selector: "lib-configuration", ngImport: i0, template: "<mat-card class=\"border cardOverwrite\">\n    <form [formGroup]=\"scheduleReportFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <span class=\"cardTitle\">\n                    Scheduler configuration\n                </span>\n            </div>\n            <div class=\"col-sm-6 centerAlignVertical justify-content-end\">\n                <span class=\"me-2\"> Inactive </span>\n                <mat-slide-toggle [checked]=\"scheduleReportFG.get('status').value == 'ACTIVE'\"\n                    (change)=\"onStatusChange($event)\"></mat-slide-toggle>\n                <span class=\"ms-2\"> Active </span>\n            </div>\n            <div class=\"col-sm-12 centerAlignVertical justify-content-end\">\n                <mat-error class=\"textMatError\" *ngIf=\"errorHandling(scheduleReportFG, 'status', 'required')\">\n                    {{ FormErrorEnum.REQUIRED }}\n                </mat-error>\n            </div>\n        </div>\n\n        <div class=\"row mt-2\">\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Schedule report name</mat-label>\n                        <input class=\"formPlaceholder\" type=\"text\" placeholder=\"Schedule report name\" matInput\n                            formControlName=\"name\" required />\n                        <mat-error *ngIf=\"errorHandling(scheduleReportFG, 'name', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-sm-4\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label>Select data interval</mat-label>\n                        <mat-select formControlName=\"dataInterval\" required>\n                            <mat-option *ngFor=\"let interval of intervalList\" [value]=\"interval.value\">\n                                {{ interval.label }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling(scheduleReportFG, 'dataInterval', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-sm-4\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label>Select frequency</mat-label>\n                        <mat-select formControlName=\"frequency\" required>\n                            <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency.value\">\n                                {{ frequency.label }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-hint>{{ frequencyInfoLabel }}</mat-hint>\n                        <mat-error *ngIf=\"errorHandling(scheduleReportFG, 'frequency', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"row enabledToggle\">\n                <div class=\"col-sm-4 d-flex justify-content-start centerAlignVertical\">\n                    <span class=\"me-2\"> Current org users </span>\n                    <mat-slide-toggle [formControl]=\"userFC\" (change)=\"userContextChange()\"></mat-slide-toggle>\n                    <span class=\"ms-2\"> All users </span>\n                </div>\n            </div>\n\n            <div class=\"row mt-2\">\n                <div class=\"col-sm-4\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label>Select user</mat-label>\n                        <mat-select formControlName=\"userID\" multiple required>\n\n                            <ng-container *ngIf=\"userM && userM.length > 0 && userM[0]['id']; else noUserFound\">\n                                <mat-option>\n                                    <ngx-mat-select-search [formControl]=\"userSearchUtil.filterFC\"\n                                        placeholderLabel=\"Search by name/email\"\n                                        noEntriesFoundLabel=\"No matching name/email found.\">\n                                    </ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option [value]=\"-1\" (click)=\"selectAllUsers()\"\n                                    [hidden]=\"userSearchUtil.filterFC.value\">\n                                    Select all\n                                </mat-option>\n                                <mat-option *ngFor=\"let user of userSearchUtil.filteredEntities | async\"\n                                    [value]=\"user.id\" (click)=\"selectUser()\">\n                                    {{ user?.email }}\n                                </mat-option>\n                            </ng-container>\n\n                            <ng-template #noUserFound>\n                                <mat-option disabled>\n                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                </mat-option>\n                            </ng-template>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling(scheduleReportFG, 'userID', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-sm-4\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label>Enter other user email</mat-label>\n                        <mat-chip-list #chipList>\n                            <mat-chip *ngFor=\"let email of otherUserEmail.value\" [removable]=\"removable\"\n                                (removed)=\"removeEmail(email)\">\n                                {{ email }}\n                                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                            </mat-chip>\n                            <input [placeholder]=\"inputPlaceholder\" [matChipInputFor]=\"chipList\"\n                                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                                (matChipInputTokenEnd)=\"add($event)\" (input)=\"onInput()\">\n                        </mat-chip-list>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"radioBtnField\">\n                        <div class=\"radioBtnGroupLabel\"> Select report format * </div>\n                        <mat-radio-group formControlName=\"reportFormat\">\n                            <div class=\"row my-1\">\n                                <div class=\"col-sm-6\">\n                                    <mat-radio-button class=\"radioBtnLabel\" [value]=\"'PDF'\">\n                                        pdf\n                                    </mat-radio-button>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <mat-radio-button class=\"radioBtnLabel\" [value]=\"'XLSX'\">\n                                        xlsx\n                                    </mat-radio-button>\n                                </div>\n                                <mat-error class=\"textMatError ms-1 mt-1\"\n                                    *ngIf=\"errorHandling(scheduleReportFG, 'reportFormat', 'required')\">\n                                    {{ FormErrorEnum.REQUIRED }}\n                                </mat-error>\n                            </div>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</mat-card>", styles: ["::ng-deep .enabledToggle .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#5c80de8a}::ng-deep .enabledToggle .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#5c80de}::ng-deep .enabledToggle .mat-slide-toggle .mat-slide-toggle-bar{background-color:#5c80de8a}::ng-deep .enabledToggle .mat-slide-toggle .mat-slide-toggle-thumb{background-color:#5c80de}\n"], components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i9$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i11$1.MatChipList, selector: "mat-chip-list", inputs: ["aria-orientation", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "selectable", "tabIndex", "errorStateMatcher"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i12$2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i13.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i12$3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i11$1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i11$1.MatChipRemove, selector: "[matChipRemove]" }, { type: i11$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputSeparatorKeyCodes", "placeholder", "id", "matChipInputFor", "matChipInputAddOnBlur", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { type: i13.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConfigurationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-configuration',
                    templateUrl: './configuration.component.html',
                    styleUrls: ['./configuration.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i2$1.FormBuilder }, { type: i1$2.StorageService }, { type: i3.TSCCommonService }, { type: i4$1.UserService }]; } });

class ScheduleReportConfigurationModule {
}
ScheduleReportConfigurationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConfigurationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportConfigurationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConfigurationModule, declarations: [ScheduleReportConfigurationComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatChipsModule,
        NgxMatSelectSearchModule], exports: [ScheduleReportConfigurationComponent] });
ScheduleReportConfigurationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConfigurationModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatButtonModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            MatSelectModule,
            MatTooltipModule,
            MatOptionModule,
            MatRadioModule,
            MatSlideToggleModule,
            MatChipsModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConfigurationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ScheduleReportConfigurationComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatTooltipModule,
                        MatOptionModule,
                        MatRadioModule,
                        MatSlideToggleModule,
                        MatChipsModule,
                        NgxMatSelectSearchModule
                    ],
                    exports: [
                        ScheduleReportConfigurationComponent
                    ]
                }]
        }] });

class ScheduleReport {
    constructor() {
        this.reportConfig = {
            reportType: '',
            deviceID: [],
            entityType: '',
            entityID: [],
            sourceConsumer: {
                type: '',
                keyID: '',
            },
            paramMetric: [],
        };
        this.schedulerConfig = {
            name: '',
            dataInterval: '',
            frequency: '',
            userChoice: '',
            userID: [],
            otherUserEmail: [],
            status: '',
            reportFormat: '',
        };
    }
}
class ScheduleReportPage {
    constructor() {
        this.id = null;
        this.name = '';
        this.type = '';
        this.recipients = [];
        this.frequency = '';
        this.scheduledBy = {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            profileImgUrl: ''
        };
        this.status = '';
    }
}

// /tsc-library/
class ScheduleReportController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    createScheduleReport(orgID, scheduleReport) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports`, scheduleReport);
    }
    getScheduleReportByID(orgID, scheduleReportID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`);
    }
    updateScheduleReport(orgID, scheduleReportID, scheduleReport) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`, scheduleReport);
    }
    getScheduleReportByPage(pageNo, pageSize, sortBy, orderBy, searchValue, filterArr, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }
        filterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/page`, { params: params });
    }
    deleteScheduledReport(orgID, scheduleReportID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`);
    }
    updateReportStatusByID(orgID, scheduleReportID, status) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}/status`, status);
    }
}
ScheduleReportController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ScheduleReportController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

// /tsc-library/
class ScheduleReportPageComponent {
    constructor(dialog, router, scheduleReportController, 
    // tsc-library
    storageService, statusService, userService, imageService
    // /tsc-library/
    ) {
        this.dialog = dialog;
        this.router = router;
        this.scheduleReportController = scheduleReportController;
        this.storageService = storageService;
        this.statusService = statusService;
        this.userService = userService;
        this.imageService = imageService;
        this.faPlus = faPlus;
        this.faCaretDown = faCaretDown;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.DialogResponseEnum = DialogResponseEnum;
        this.FormAction = FormAction;
        this.ProfileImg = ProfileImg;
        this.searchByPlaceHolder = 'report name';
        this.reportType = [];
        this.dataSource = [new ScheduleReportPage()];
        this.dataSourceLength = 0;
        this.displayedColumn = ['id', 'name', 'type', 'recipients', 'frequency', 'scheduledBy', 'status', 'option'];
        this.searchFlag = false;
        this.searchFC = new FormControl('', Validators.required);
        this.reportTypeFlag = false;
        this.reportTypeFC = new FormControl(['all']);
        this.filterArr = [];
        this.totalReportTypeCount = 0;
        this.recipientUserList = [];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'water' : 'energy';
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.reportType = LIST_CONSTANT.ENERGY_APP_SCHEDULE_REPORT_TYPE;
            this.totalReportTypeCount = this.reportType.length;
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.reportType = LIST_CONSTANT.WATER_APP_SCHEDULE_REPORT_TYPE;
            this.totalReportTypeCount = this.reportType.length;
        }
    }
    ngAfterViewInit() {
        merge(this.sort.sortChange, this.typeSelect.multi, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), switchMap(() => {
            this.filterArr = [];
            if (this.searchFlag) {
                var searchValue = 'name:' + this.searchValue;
            }
            if (this.reportTypeFlag) {
                let selectedReportType = this.reportTypeFC.value.length - 1;
                if (selectedReportType == this.totalReportTypeCount) {
                    this.reportTypeFlag = false;
                }
                else {
                    this.filterArr.push('reportType:' + this.reportTypeFC.value);
                }
            }
            return this.scheduleReportController.getScheduleReportByPage(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, searchValue, this.filterArr, this.orgID).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.dataSourceLength = 0;
                return [];
            }
            this.dataSourceLength = response.totalCount;
            return response.records;
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
        this.refreshBtn.nativeElement.click();
    }
    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }
    showAllRecipient(userList) {
        this.recipientUserList = [];
        userList.forEach(user => {
            let metric = {
                profileImg: user.profileImgUrl || this.userService.defaultImage((user.firstName ? user.firstName + ' ' : '') + (user.lastName ? user.lastName : ''), ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW),
                name: (user.firstName ? user.firstName + ' ' + (user.lastName ? user.lastName : '') : ''),
            };
            this.recipientUserList.push(metric);
        });
    }
    openDeleteDialog(scheduleReport) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete schedule report?',
                body: '<b>' + scheduleReport.name + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteScheduledReport(scheduleReport.id);
            }
        });
    }
    deleteScheduledReport(scheduleReportID) {
        this.scheduleReportController.deleteScheduledReport(this.orgID, scheduleReportID).subscribe((deleteRes) => {
            if (deleteRes) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }
    updateReportStatusByID(scheduleReport) {
        let newStatus = scheduleReport.status == 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
        let requestBody = {
            status: newStatus
        };
        this.scheduleReportController.updateReportStatusByID(this.orgID, scheduleReport.id, requestBody)
            .subscribe(response => {
            if (response) {
                this.refreshBtn.nativeElement.click();
            }
        }, error => {
            console.log('error in updateReportStatusByID -', error);
        });
    }
    goToReportPage(reportType) {
        switch (reportType) {
            case ScheduleReportTypeEnum.SOURCING_REPORT:
                this.router.navigate([`schedule-report/${this.applicationName}-sourcing`]);
                break;
            case ScheduleReportTypeEnum.CONSUMPTION_REPORT:
                this.router.navigate([`schedule-report/${this.applicationName}-consumption`]);
                break;
            case ScheduleReportTypeEnum.BREAKUP_REPORT:
                this.router.navigate([`schedule-report/${this.applicationName}-breakup`]);
                break;
            case ScheduleReportTypeEnum.CGWA_REPORT:
                this.router.navigate([`schedule-report/cgwa`]);
                break;
            case ScheduleReportTypeEnum.TEMPERATURE_REPORT:
                this.router.navigate([`schedule-report/temperature`]);
                break;
        }
    }
    updateScheduledReport(scheduleReport) {
        switch (scheduleReport.type) {
            case ScheduleReportTypeEnum.SOURCING_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/${this.applicationName}-sourcing/update`]);
                break;
            case ScheduleReportTypeEnum.CONSUMPTION_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/${this.applicationName}-consumption/update`]);
                break;
            case ScheduleReportTypeEnum.BREAKUP_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/${this.applicationName}-breakup/update`]);
                break;
            case ScheduleReportTypeEnum.CGWA_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/cgwa/update`]);
                break;
            case ScheduleReportTypeEnum.TEMPERATURE_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/temperature/update`]);
                break;
        }
    }
    getReportTypeLabel(type) {
        let reportLabel;
        let applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';
        switch (type) {
            case ScheduleReportTypeEnum.SOURCING_REPORT:
                reportLabel = `${applicationName} Sourcing Report`;
                break;
            case ScheduleReportTypeEnum.CONSUMPTION_REPORT:
                reportLabel = `${applicationName} Consumption Report`;
                break;
            case ScheduleReportTypeEnum.BREAKUP_REPORT:
                reportLabel = `${applicationName} Breakup Report`;
                break;
            case ScheduleReportTypeEnum.CGWA_REPORT:
                reportLabel = `CGWA Report`;
                break;
            case ScheduleReportTypeEnum.TEMPERATURE_REPORT:
                reportLabel = `Temperature Report`;
                break;
        }
        return reportLabel;
    }
    getFrequencyLabel(type) {
        let frequencyLabel;
        switch (type) {
            case 'DAILY':
                frequencyLabel = 'Daily';
                break;
            case 'WEEKLY':
                frequencyLabel = 'Weekly';
                break;
            case 'MONTHLY':
                frequencyLabel = 'Monthly';
                break;
        }
        return frequencyLabel;
    }
}
ScheduleReportPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageComponent, deps: [{ token: i1$3.MatDialog }, { token: i1$1.Router }, { token: ScheduleReportController }, { token: i1$2.StorageService }, { token: i3.StatusService }, { token: i4$1.UserService }, { token: i3.ImageService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleReportPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ScheduleReportPageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "typeSelect", first: true, predicate: ["typeSelect"], descendants: true }], ngImport: i0, template: "<div class=\"card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Schedule Report</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar [searchBy]=\"searchByPlaceHolder\"\n                    (emitSearch)=\"searchFn($event)\"></lib-search-bar-one>\n\n                <button class=\"btn btn-sm btn-light refreshBtn centerAlign me-3 py-1\" #refreshBtn matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                    [matTooltip]=\"ButtonTooltipEnum.REFRESH\">\n                    <span class=\"material-symbols-outlined text-secondary\">\n                        refresh\n                    </span>\n                </button>\n\n                <div class=\"btn-group\" ngbDropdown placement=\"bottom-right\">\n                    <button type=\"button\" ngbDropdownToggle class=\"hideDropdownIcon btn btn-sm btn-success\">\n                        <fa-icon [icon]=\"faPlus\" class=\"me-1\"></fa-icon>Schedule report\n                        <fa-icon [icon]=\"faCaretDown\" class=\"ms-2\"></fa-icon>\n                    </button>\n                    <div ngbDropdownMenu>\n                        <a class=\"dropdown-item mt-1\" *ngFor=\"let type of reportType\" (click)=\"goToReportPage(type.value)\">\n                            {{ type.label }}\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"overflowX customScrollBar\">\n        <table class=\"w-100\" mat-table matSort #sort=\"matSort\" matSortActive=\"name\" matSortDirection=\"asc\"\n            matSortDisableClear [dataSource]=\"dataSource\">\n\n            <ng-container matColumnDef=\"id\">\n                <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef>ID</th>\n                <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">{{ row.id }}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n                <th class=\"px-4 columnWidth2\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>Name</th>\n                <td class=\"px-4 columnWidth2\" mat-cell *matCellDef=\"let row\" matTooltipPosition=\"above\"\n                    [matTooltip]=\"(row?.name.length > 20 ? row?.name : '')\" matTooltipClass=\"nameTooltip\">\n                    {{ (row.name ? row.name : COMMON_CONSTANT.HYPHEN) | dotdotdot:20 }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"type\">\n                <th class=\"px-4 columnWidth2\" mat-header-cell *matHeaderCellDef>\n                    <funnel-filter #typeSelect header=\"Report type\" type=\"multi\" [entityList]=\"reportType\" value=\"value\" view=\"label\"\n                        [selectFC]=\"reportTypeFC\" [active]=\"reportTypeFlag\" selectAllLabel=\"All report type\"\n                        (multi)=\"reportTypeFlag = true;\">\n                    </funnel-filter>\n                </th>\n                <td class=\"px-4 columnWidth2\" mat-cell *matCellDef=\"let row\">\n                    {{ getReportTypeLabel(row.type) }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"recipients\">\n                <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef>Recipients</th>\n                <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <ng-container *ngFor=\"let user of row.recipients.slice(0,3); let i = index\">\n                        <img class=\"multipleProfileImg rounded-circle border\"\n                            [src]=\"imageService.getProfileImageUrl(user, ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW)\" alt=\"profile-image\"\n                            #tooltip=\"matTooltip\" matTooltipPosition=\"above\"\n                            [matTooltip]=\"row.recipients.length != 1 ? (user?.firstName ? user?.firstName + ' ' + (user?.lastName ? user?.lastName : '') : '') : ''\"\n                            matTooltipClass=\"nameTooltip\" />\n\n                        <span *ngIf=\"row.recipients.length == 1\">\n                            {{ user.firstName }} {{user.lastName }}\n                        </span>\n                    </ng-container>\n                    <button *ngIf=\"imageService.getCountForCircleDisplay(row.recipients) >= 1\" [matMenuTriggerFor]=\"menu\"\n                        class=\"btn btn-sm rounded-circle countCircleBtn\" (click)=\"showAllRecipient(row.recipients)\">\n                        {{ imageService.getCountForCircleDisplay(row.recipients) }}\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let recipient of recipientUserList\">\n                            <img class=\"multipleProfileImg rounded-circle border me-1\" [src]=\"recipient.profileImg\">\n                            {{ recipient.name }}\n                        </button>\n                    </mat-menu>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"frequency\">\n                <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef>Frequency</th>\n                <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    {{ getFrequencyLabel(row.frequency) }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"scheduledBy\">\n                <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef>Scheduled by</th>\n                <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <img class=\"rounded-circle border profileImageDropdownView\"\n                        [src]=\"row?.scheduledBy?.profileImgUrl || userService.defaultImage(row?.scheduledBy?.firstName + ' ', ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW)\"\n                        alt=\"profile img\">\n                    <span matTooltipPosition=\"above\"\n                        [matTooltip]=\"(row?.scheduledBy?.firstName + ' ' + row?.scheduledBy?.lastName).length > 12 ? row?.scheduledBy?.firstName + ' ' + row?.scheduledBy?.lastName : ''\"\n                        matTooltipClass=\"nameTooltip\">\n                        {{ (row?.scheduledBy?.firstName ? row?.scheduledBy?.firstName + ' ' + row?.scheduledBy?.lastName :\n                        COMMON_CONSTANT.HYPHEN)| dotdotdot:12 }}\n                    </span>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n                <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef>Status</th>\n                <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\"\n                    [ngClass]=\"statusService.getStatusClass(row.status)\">{{\n                    row.status ? statusService.getStatusValue(row.status) : COMMON_CONSTANT.HYPHEN }}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"option\">\n                <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef></th>\n                <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <div class=\"centerAlignVertical\">\n\n                        <button type=\"button\" class=\"iconBtn centerAlign text-primary updateIconHover\"\n                            (click)=\"updateScheduledReport(row)\" matRipple\n                            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                            [matTooltip]=\"ButtonTooltipEnum.UPDATE\">\n                            <span class=\"material-symbols-outlined icon\">\n                                edit\n                            </span>\n                        </button>\n\n                        <button type=\"button\" class=\"iconBtn centerAlign text-danger deleteIconHover cursorPointer\"\n                            matTooltipPosition=\"below\" [matTooltip]=\"ButtonTooltipEnum.DELETE\" matRipple\n                            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" (click)=\"openDeleteDialog(row)\">\n                            <span class=\"material-symbols-outlined icon\">\n                                delete\n                            </span>\n                        </button>\n\n                        <mat-slide-toggle class=\"ms-3\" [checked]=\"row.status == 'ACTIVE'\"\n                            (change)=\"updateReportStatusByID(row)\"></mat-slide-toggle>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\" class=\"dataRow\"></tr>\n\n            <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                    {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                </td>\n            </tr>\n        </table>\n    </div>\n\n    <mat-paginator class=\"roundedBorder\" showFirstLastButtons #paginator [length]=\"dataSourceLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: ["::ng-deep .mat-menu-content{max-height:250px;overflow-x:auto}.columnWidth1{min-width:120px}.columnWidth2{min-width:200px}\n"], components: [{ type: i3.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear", "emitValueOnChange"], outputs: ["emitSearch"] }, { type: i6$2.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i7$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i8.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i3.FunnelFilterComponent, selector: "funnel-filter", inputs: ["header", "active", "showSearchBar", "searchByPlaceholder", "searchBy", "selectAllLabel", "entityList", "view", "value", "type", "selectFC", "resetFlag"], outputs: ["mono", "multi", "selected"] }, { type: i10$2.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i10$2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { type: i9$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i7$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i7$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9$2.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i12.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i12.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i12.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i7$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i7$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i7$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i7$1.MatCellDef, selector: "[matCellDef]" }, { type: i7$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i10$2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i7$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i7$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i7$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i3.EllipsisPipeService } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-page',
                    templateUrl: './page.component.html',
                    styleUrls: ['./page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialog }, { type: i1$1.Router }, { type: ScheduleReportController }, { type: i1$2.StorageService }, { type: i3.StatusService }, { type: i4$1.UserService }, { type: i3.ImageService }]; }, propDecorators: { sort: [{
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
            }], typeSelect: [{
                type: ViewChild,
                args: ['typeSelect']
            }] } });

const routes$g = [
    {
        path: '',
        component: ScheduleReportPageComponent
    }
];
class ScheduleReportPageRoutingModule {
}
ScheduleReportPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ScheduleReportPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageRoutingModule, imports: [[RouterModule.forChild(routes$g)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$g)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ScheduleReportPageModule {
}
ScheduleReportPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageModule, declarations: [ScheduleReportPageComponent], imports: [CommonModule,
        ScheduleReportPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        MatMenuModule,
        NgbModule,
        FontAwesomeModule,
        SearchBarOneModule,
        FunnelFilterModule,
        EllipsisPipeModule] });
ScheduleReportPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageModule, imports: [[
            CommonModule,
            ScheduleReportPageRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatRippleModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            MatDialogModule,
            MatPaginatorModule,
            MatSlideToggleModule,
            MatMenuModule,
            NgbModule,
            FontAwesomeModule,
            SearchBarOneModule,
            FunnelFilterModule,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ScheduleReportPageComponent
                    ],
                    imports: [
                        CommonModule,
                        ScheduleReportPageRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatRippleModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatPaginatorModule,
                        MatSlideToggleModule,
                        MatMenuModule,
                        NgbModule,
                        FontAwesomeModule,
                        SearchBarOneModule,
                        FunnelFilterModule,
                        EllipsisPipeModule
                    ]
                }]
        }] });

class ScheduleReportService {
    constructor(scheduleReportController) {
        this.scheduleReportController = scheduleReportController;
    }
    getScheduleReportByID(orgID, scheduleReportID) {
        return __awaiter(this, void 0, void 0, function* () {
            let scheduleReportI;
            try {
                scheduleReportI = yield this.scheduleReportController.getScheduleReportByID(orgID, scheduleReportID).toPromise();
                if (scheduleReportI) {
                    return scheduleReportI;
                }
                else {
                    return new ScheduleReport();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new ScheduleReport();
            }
        });
    }
}
ScheduleReportService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportService, deps: [{ token: ScheduleReportController }], target: i0.ɵɵFactoryTarget.Injectable });
ScheduleReportService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: ScheduleReportController }]; } });

// /tsc-library/
class ScheduleReportBreakupComponent {
    constructor(activatedRoute, router, formBuilder, scheduleReportController, parameterService, scheduleReportService, 
    // tsc-library
    storageService, tscCommonService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.scheduleReportController = scheduleReportController;
        this.parameterService = parameterService;
        this.scheduleReportService = scheduleReportService;
        this.storageService = storageService;
        this.tscCommonService = tscCommonService;
        this.toastrService = toastrService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.DropdownTypeEnum = DropdownTypeEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ApplicationKeyID = ApplicationKeyID;
        this.isEqual = true;
        this.scheduleReportI = new ScheduleReport();
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.scheduleBreakupReportFGInit();
        this.getConsumptionParameter();
        this.activatedRoute.data.subscribe(data => {
            this.action = data.action;
            this.setPageTitle();
        });
        this.activatedRoute.params.subscribe(params => {
            if (this.action == FormAction.UPDATE) {
                this.scheduleReportID = params.scheduleReportID;
                this.getScheduleReportByID(this.scheduleReportID);
            }
        });
    }
    setPageTitle() {
        const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';
        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule ${applicationName} Breakup Report`;
        }
        else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled ${applicationName} Breakup Report`;
        }
    }
    scheduleBreakupReportFGInit() {
        this.scheduleBreakupReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.BREAKUP_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [],
                entityID: [[], Validators.required],
                sourceConsumer: this.formBuilder.group({
                    type: ['SOURCE', Validators.required],
                    keyID: []
                }),
                paramMetric: [, Validators.required],
            }),
            schedulerConfig: this.formBuilder.group({
                name: [, Validators.required],
                dataInterval: [, Validators.required],
                frequency: [, Validators.required],
                userChoice: [, Validators.required],
                userID: [[], Validators.required],
                otherUserEmail: [[]],
                status: [, Validators.required],
                reportFormat: [, Validators.required],
            })
        });
    }
    getConsumptionParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            const consumptionParamM = yield this.parameterService.getConsumptionParameter(this.orgID);
            this.consumptionParamM = consumptionParamM.consumptionParameter;
        });
    }
    entityInpChange() {
        let entityID = this.entityInput.multipleEntityFC.value;
        this.scheduleBreakupReportFG.get('reportConfig').get('entityID').patchValue(entityID);
    }
    patchSchedulerConfigInput() {
        this.scheduleBreakupReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value);
    }
    getValidFormData() {
        this.patchSchedulerConfigInput();
        let entityID = this.tscCommonService.removeSelectAllID(this.scheduleBreakupReportFG.get('reportConfig').get('entityID').value);
        this.scheduleBreakupReportFG.get('reportConfig').get('entityID').patchValue(entityID);
        let userID = this.tscCommonService.removeSelectAllID(this.scheduleBreakupReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleBreakupReportFG.get('schedulerConfig').get('userID').patchValue(userID);
        let paramsArray = [
            {
                name: this.scheduleBreakupReportFG.get('reportConfig').get('paramMetric').value,
                dsAgg: 'sum',
                agg: 'sum'
            }
        ];
        const reportConfigFG = this.scheduleBreakupReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleBreakupReportFG.get('schedulerConfig').value;
        const { paramMetric } = reportConfigFG, reportConfigWithoutParamMetric = __rest(reportConfigFG, ["paramMetric"]);
        this.modifiedFG = {
            reportConfig: Object.assign(Object.assign({}, reportConfigWithoutParamMetric), { params: paramsArray }),
            schedulerConfig: Object.assign({}, schedulerConfigFG)
        };
    }
    scheduleReportSubmit() {
        this.patchSchedulerConfigInput();
        if (this.schedulerConfigInput.scheduleReportFG.invalid) {
            this.schedulerConfigInput.scheduleReportFG.markAllAsTouched();
        }
        if (this.scheduleBreakupReportFG.invalid) {
            console.log('Invalid form:', this.scheduleBreakupReportFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            this.getValidFormData();
            if (this.action == FormAction.CREATE) {
                this.createScheduleReport();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateScheduleReport();
            }
        }
    }
    createScheduleReport() {
        this.scheduleReportController.createScheduleReport(this.orgID, this.modifiedFG).subscribe((res) => {
            this.router.navigate([`schedule-report/page`]);
        }, error => {
            console.log('error in createScheduleReport -', error);
        });
    }
    getScheduleReportByID(scheduleReportID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scheduleReportI = (yield this.scheduleReportService.getScheduleReportByID(this.orgID, scheduleReportID));
            this.patchScheduleReport(this.scheduleReportI);
        });
    }
    patchScheduleReport(scheduleReportI) {
        this.scheduleBreakupReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });
        this.entityInput.multipleEntityFC.patchValue(scheduleReportI.reportConfig.entityID);
        this.scheduleBreakupReportFG.get('reportConfig').get('paramMetric').patchValue(scheduleReportI.reportConfig.paramMetric[0]);
        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);
        this.initialObject = {
            breakupReportConfig: this.scheduleBreakupReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isValidUpdateForm();
    }
    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
        this.scheduleBreakupReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }
    checkEquality() {
        const currentValues = {
            breakupReportConfig: this.scheduleBreakupReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isEqual = isEqual(this.initialObject, currentValues);
    }
    updateScheduleReport() {
        this.scheduleReportController.updateScheduleReport(this.orgID, this.scheduleReportID, this.modifiedFG).subscribe((res) => {
            this.tscCommonService.back();
        }, error => {
            console.log('error in updateScheduleReport -', error);
        });
    }
}
ScheduleReportBreakupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }, { token: i2$1.FormBuilder }, { token: ScheduleReportController }, { token: ParameterService }, { token: ScheduleReportService }, { token: i1$2.StorageService }, { token: i3.TSCCommonService }, { token: i2$3.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleReportBreakupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ScheduleReportBreakupComponent, selector: "lib-breakup", viewQueries: [{ propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "schedulerConfigInput", first: true, predicate: ["schedulerConfigInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"scheduleBreakupReportFG\" (ngSubmit)=\"scheduleReportSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"cardTitle\">\n                            Report configuration\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div formGroupName=\"reportConfig\">\n                                <div formGroupName=\"sourceConsumer\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"radioBtnField\">\n                                            <div class=\"radioBtnGroupLabel\"> You want to schedule {{ applicationKeyID == ApplicationKeyID.WATER_KEY_ID ?\n                                                'water' : 'energy'}} breakup report for? * </div>\n                                            <mat-radio-group formControlName=\"type\">\n                                                <div class=\"row my-1\">\n                                                    <div class=\"col-sm-6\">\n                                                        <mat-radio-button class=\"radioBtnLabel\" [value]=\"'SOURCE'\">\n                                                            Source\n                                                        </mat-radio-button>\n                                                    </div>\n                                                    <div class=\"col-sm-6\">\n                                                        <mat-radio-button class=\"radioBtnLabel\" [value]=\"'CONSUMER'\">\n                                                            Consumer\n                                                        </mat-radio-button>\n                                                    </div>\n                                                    <mat-error class=\"textMatError ms-1 mt-1\"\n                                                        *ngIf=\"errorHandling(scheduleBreakupReportFG, 'reportConfig.sourceConsumer.type', 'required')\">\n                                                        {{ FormErrorEnum.REQUIRED }}\n                                                    </mat-error>\n                                                </div>\n                                            </mat-radio-group>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-3\">\n                            <div class=\"col-sm-3\">\n                                <lib-entity #entityInput [dropdownTypeInp]=\"DropdownTypeEnum.MULTIPLE_DROPDOWN\"\n                                    (emitFilter)=\"entityInpChange()\"></lib-entity>\n                            </div>\n                        \n                            <div class=\"col-sm-3\">\n                                <div formGroupName=\"reportConfig\">\n                                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select consumption parameter</mat-label>\n                                        <mat-select formControlName=\"paramMetric\" required>\n                                            <ng-container\n                                                *ngIf=\"consumptionParamM && consumptionParamM.length > 0 && consumptionParamM[0]['id']; else noConsumptionParamM\">\n                                                <mat-option *ngFor=\"let param of consumptionParamM\" [value]=\"param.paramMetric\">\n                                                    {{ param.label }}\n                                                </mat-option>\n                                            </ng-container>\n\n                                            <ng-template #noConsumptionParamM>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n                                        <mat-error *ngIf=\"errorHandling(scheduleBreakupReportFG, 'reportConfig.paramMetric', 'required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <lib-configuration #schedulerConfigInput></lib-configuration>\n                </div>\n            </div>\n            \n            <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <div class=\"float-end\">\n                        <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"tscCommonService.back()\">\n                            {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                        </button>\n\n                        <button class=\"btn btn-sm btn-success\" [ngClass]=\"{\n                                            'btn-success' : action == FormAction.CREATE,\n                                            'btn-primary' : action == FormAction.UPDATE,\n                                            'disabled' : action == FormAction.UPDATE && isEqual\n                                        }\" type=\"submit\">{{ action ==\n                            FormAction.CREATE ? 'Schedule' :\n                            ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>", components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i13.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: ScheduleReportConfigurationComponent, selector: "lib-configuration" }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i13.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-breakup',
                    templateUrl: './breakup.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: i2$1.FormBuilder }, { type: ScheduleReportController }, { type: ParameterService }, { type: ScheduleReportService }, { type: i1$2.StorageService }, { type: i3.TSCCommonService }, { type: i2$3.ToastrService }]; }, propDecorators: { entityInput: [{
                type: ViewChild,
                args: ['entityInput']
            }], schedulerConfigInput: [{
                type: ViewChild,
                args: ['schedulerConfigInput']
            }] } });

const routes$f = [
    {
        path: '',
        component: ScheduleReportBreakupComponent
    }
];
class ScheduleReportBreakupRoutingModule {
}
ScheduleReportBreakupRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportBreakupRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ScheduleReportBreakupRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupRoutingModule, imports: [[RouterModule.forChild(routes$f)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$f)],
                    exports: [RouterModule]
                }]
        }] });

class ScheduleReportBreakupModule {
}
ScheduleReportBreakupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportBreakupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupModule, declarations: [ScheduleReportBreakupComponent], imports: [CommonModule,
        ScheduleReportBreakupRoutingModule,
        EntityModule,
        ScheduleReportConfigurationModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule] });
ScheduleReportBreakupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupModule, imports: [[
            CommonModule,
            ScheduleReportBreakupRoutingModule,
            EntityModule,
            ScheduleReportConfigurationModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatSelectModule,
            MatRadioModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportBreakupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ScheduleReportBreakupComponent
                    ],
                    imports: [
                        CommonModule,
                        ScheduleReportBreakupRoutingModule,
                        EntityModule,
                        ScheduleReportConfigurationModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatRadioModule
                    ]
                }]
        }] });

// /tsc-library/
class ScheduleReportCgwaComponent {
    constructor(activatedRoute, router, formBuilder, scheduleReportController, scheduleReportService, 
    // tsc-library
    storageService, tscCommonService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.scheduleReportController = scheduleReportController;
        this.scheduleReportService = scheduleReportService;
        this.storageService = storageService;
        this.tscCommonService = tscCommonService;
        this.toastrService = toastrService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.isEqual = true;
        this.scheduleReportI = new ScheduleReport();
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.scheduleCgwaReportFGInit();
        this.activatedRoute.data.subscribe(data => {
            this.action = data.action;
            this.setPageTitle();
        });
        this.activatedRoute.params.subscribe(params => {
            if (this.action == FormAction.UPDATE) {
                this.scheduleReportID = params.scheduleReportID;
                this.getScheduleReportByID(this.scheduleReportID);
            }
        });
    }
    setPageTitle() {
        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule CGWA Report`;
        }
        else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled CGWA Report`;
        }
    }
    scheduleCgwaReportFGInit() {
        this.scheduleCgwaReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.CGWA_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [],
                entityID: [[]],
                sourceConsumer: this.formBuilder.group({
                    type: ['SOURCE', Validators.required],
                    keyID: ['BOREWELL', Validators.required]
                }),
                paramMetric: ['gwFlowTotalizer', Validators.required],
            }),
            schedulerConfig: this.formBuilder.group({
                name: [, Validators.required],
                dataInterval: [, Validators.required],
                frequency: [, Validators.required],
                userChoice: [, Validators.required],
                userID: [[], Validators.required],
                otherUserEmail: [[]],
                status: [, Validators.required],
                reportFormat: [, Validators.required],
            })
        });
    }
    patchSchedulerConfigInput() {
        this.scheduleCgwaReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value);
    }
    getValidFormData() {
        this.patchSchedulerConfigInput();
        let userID = this.tscCommonService.removeSelectAllID(this.scheduleCgwaReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleCgwaReportFG.get('schedulerConfig').get('userID').patchValue(userID);
        let paramsArray = [
            {
                name: this.scheduleCgwaReportFG.get('reportConfig').get('paramMetric').value,
                dsAgg: 'sum',
                agg: 'sum'
            }
        ];
        const reportConfigFG = this.scheduleCgwaReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleCgwaReportFG.get('schedulerConfig').value;
        const { paramMetric } = reportConfigFG, reportConfigWithoutParamMetric = __rest(reportConfigFG, ["paramMetric"]);
        this.modifiedFG = {
            reportConfig: Object.assign(Object.assign({}, reportConfigWithoutParamMetric), { params: paramsArray }),
            schedulerConfig: Object.assign({}, schedulerConfigFG)
        };
    }
    scheduleReportSubmit() {
        this.patchSchedulerConfigInput();
        if (this.schedulerConfigInput.scheduleReportFG.invalid) {
            this.schedulerConfigInput.scheduleReportFG.markAllAsTouched();
        }
        if (this.scheduleCgwaReportFG.invalid) {
            console.log('Invalid form:', this.scheduleCgwaReportFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            this.getValidFormData();
            if (this.action == FormAction.CREATE) {
                this.createScheduleReport();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateScheduleReport();
            }
        }
    }
    createScheduleReport() {
        this.scheduleReportController.createScheduleReport(this.orgID, this.modifiedFG).subscribe((res) => {
            this.router.navigate([`schedule-report/page`]);
        }, error => {
            console.log('error in createScheduleReport -', error);
        });
    }
    getScheduleReportByID(scheduleReportID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scheduleReportI = (yield this.scheduleReportService.getScheduleReportByID(this.orgID, scheduleReportID));
            this.patchScheduleReport(this.scheduleReportI);
        });
    }
    patchScheduleReport(scheduleReportI) {
        this.scheduleCgwaReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });
        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);
        this.initialObject = {
            cgwaReportConfig: this.scheduleCgwaReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isValidUpdateForm();
    }
    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
        this.scheduleCgwaReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }
    checkEquality() {
        const currentValues = {
            cgwaReportConfig: this.scheduleCgwaReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isEqual = isEqual(this.initialObject, currentValues);
    }
    updateScheduleReport() {
        this.scheduleReportController.updateScheduleReport(this.orgID, this.scheduleReportID, this.modifiedFG).subscribe((res) => {
            this.tscCommonService.back();
        }, error => {
            console.log('error in updateScheduleReport -', error);
        });
    }
}
ScheduleReportCgwaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }, { token: i2$1.FormBuilder }, { token: ScheduleReportController }, { token: ScheduleReportService }, { token: i1$2.StorageService }, { token: i3.TSCCommonService }, { token: i2$3.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleReportCgwaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ScheduleReportCgwaComponent, selector: "lib-cgwa", viewQueries: [{ propertyName: "schedulerConfigInput", first: true, predicate: ["schedulerConfigInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"scheduleCgwaReportFG\" (ngSubmit)=\"scheduleReportSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"cardTitle\">\n                            Report configuration\n                        </div>\n\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        Source type\n                                    </div>\n                                    <div class=\"col-sm-6 fw-bold\">\n                                        Borewell\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        Consumption parameter\n                                    </div>\n                                    <div class=\"col-sm-6 fw-bold\">\n                                        Water consumption\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <lib-configuration #schedulerConfigInput></lib-configuration>\n                </div>\n            </div>\n\n            <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <div class=\"float-end\">\n                        <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"tscCommonService.back()\">\n                            {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                        </button>\n\n                        <button class=\"btn btn-sm btn-success\" [ngClass]=\"{\n                                            'btn-success' : action == FormAction.CREATE,\n                                            'btn-primary' : action == FormAction.UPDATE,\n                                            'disabled' : action == FormAction.UPDATE && isEqual\n                                        }\" type=\"submit\">{{ action ==\n                            FormAction.CREATE ? 'Schedule' :\n                            ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>", components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: ScheduleReportConfigurationComponent, selector: "lib-configuration" }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-cgwa',
                    templateUrl: './cgwa.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: i2$1.FormBuilder }, { type: ScheduleReportController }, { type: ScheduleReportService }, { type: i1$2.StorageService }, { type: i3.TSCCommonService }, { type: i2$3.ToastrService }]; }, propDecorators: { schedulerConfigInput: [{
                type: ViewChild,
                args: ['schedulerConfigInput']
            }] } });

const routes$e = [
    {
        path: '',
        component: ScheduleReportCgwaComponent
    }
];
class ScheduleReportCgwaRoutingModule {
}
ScheduleReportCgwaRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportCgwaRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ScheduleReportCgwaRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaRoutingModule, imports: [[RouterModule.forChild(routes$e)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$e)],
                    exports: [RouterModule]
                }]
        }] });

class ScheduleReportCgwaModule {
}
ScheduleReportCgwaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportCgwaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaModule, declarations: [ScheduleReportCgwaComponent], imports: [CommonModule,
        ScheduleReportCgwaRoutingModule,
        ScheduleReportConfigurationModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule] });
ScheduleReportCgwaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaModule, imports: [[
            CommonModule,
            ScheduleReportCgwaRoutingModule,
            ScheduleReportConfigurationModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatSelectModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ScheduleReportCgwaComponent
                    ],
                    imports: [
                        CommonModule,
                        ScheduleReportCgwaRoutingModule,
                        ScheduleReportConfigurationModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatSelectModule
                    ]
                }]
        }] });

// /tsc-library/
class ScheduleReportConsumptionComponent {
    constructor(activatedRoute, router, formBuilder, scheduleReportController, sourceService, parameterService, scheduleReportService, 
    // tsc-library
    storageService, tscCommonService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.scheduleReportController = scheduleReportController;
        this.sourceService = sourceService;
        this.parameterService = parameterService;
        this.scheduleReportService = scheduleReportService;
        this.storageService = storageService;
        this.tscCommonService = tscCommonService;
        this.toastrService = toastrService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ApplicationKeyID = ApplicationKeyID;
        this.sourceConsumerType = [new Static()];
        this.isEqual = true;
        this.scheduleReportI = new ScheduleReport();
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.scheduleConsumptionReportFGInit();
        this.getConsumptionParameter();
        this.activatedRoute.data.subscribe(data => {
            this.action = data.action;
            this.setPageTitle();
        });
        this.activatedRoute.params.subscribe(params => {
            if (this.action == FormAction.UPDATE) {
                this.scheduleReportID = params.scheduleReportID;
                this.getScheduleReportByID(this.scheduleReportID);
            }
        });
        if (this.scheduleConsumptionReportFG.get('reportConfig').get('sourceConsumer.type').value == 'SOURCE') {
            this.getSourceConsumerType('source');
        }
        else {
            this.getSourceConsumerType('load');
        }
    }
    setPageTitle() {
        const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';
        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule ${applicationName} Consumption Report`;
        }
        else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled ${applicationName} Consumption Report`;
        }
    }
    scheduleConsumptionReportFGInit() {
        this.scheduleConsumptionReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.CONSUMPTION_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [],
                entityID: [[]],
                sourceConsumer: this.formBuilder.group({
                    type: ['SOURCE', Validators.required],
                    keyID: [, Validators.required]
                }),
                paramMetric: [, Validators.required],
            }),
            schedulerConfig: this.formBuilder.group({
                name: [, Validators.required],
                dataInterval: [, Validators.required],
                frequency: [, Validators.required],
                userChoice: [, Validators.required],
                userID: [[], Validators.required],
                otherUserEmail: [[]],
                status: [, Validators.required],
                reportFormat: [, Validators.required],
            })
        });
        this.scheduleConsumptionReportFG.get('reportConfig').get('sourceConsumer.type').valueChanges.subscribe((value) => {
            if (value == 'SOURCE') {
                this.getSourceConsumerType('source');
            }
            else if (value == 'CONSUMER') {
                this.getSourceConsumerType('load');
            }
        });
    }
    getSourceConsumerType(sourceConsumerType) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestData = {
                type: sourceConsumerType
            };
            this.sourceConsumerType = (yield this.sourceService.getSourceConsumerType(this.orgID, requestData));
        });
    }
    getConsumptionParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            const consumptionParamM = yield this.parameterService.getConsumptionParameter(this.orgID);
            this.consumptionParamM = consumptionParamM.consumptionParameter;
        });
    }
    patchSchedulerConfigInput() {
        this.scheduleConsumptionReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value);
    }
    getValidFormData() {
        this.patchSchedulerConfigInput();
        let userID = this.tscCommonService.removeSelectAllID(this.scheduleConsumptionReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleConsumptionReportFG.get('schedulerConfig').get('userID').patchValue(userID);
        let paramsArray = [
            {
                name: this.scheduleConsumptionReportFG.get('reportConfig').get('paramMetric').value,
                dsAgg: 'sum',
                agg: 'sum'
            }
        ];
        const reportConfigFG = this.scheduleConsumptionReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleConsumptionReportFG.get('schedulerConfig').value;
        const { paramMetric } = reportConfigFG, reportConfigWithoutParamMetric = __rest(reportConfigFG, ["paramMetric"]);
        this.modifiedFG = {
            reportConfig: Object.assign(Object.assign({}, reportConfigWithoutParamMetric), { params: paramsArray }),
            schedulerConfig: Object.assign({}, schedulerConfigFG)
        };
    }
    scheduleReportSubmit() {
        this.patchSchedulerConfigInput();
        if (this.schedulerConfigInput.scheduleReportFG.invalid) {
            this.schedulerConfigInput.scheduleReportFG.markAllAsTouched();
        }
        if (this.scheduleConsumptionReportFG.invalid) {
            console.log('Invalid form:', this.scheduleConsumptionReportFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            this.getValidFormData();
            if (this.action == FormAction.CREATE) {
                this.createScheduleReport();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateScheduleReport();
            }
        }
    }
    createScheduleReport() {
        this.scheduleReportController.createScheduleReport(this.orgID, this.modifiedFG).subscribe((res) => {
            this.router.navigate([`schedule-report/page`]);
        }, error => {
            console.log('error in createScheduleReport -', error);
        });
    }
    getScheduleReportByID(scheduleReportID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scheduleReportI = (yield this.scheduleReportService.getScheduleReportByID(this.orgID, scheduleReportID));
            this.patchScheduleReport(this.scheduleReportI);
        });
    }
    patchScheduleReport(scheduleReportI) {
        this.scheduleConsumptionReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });
        this.scheduleConsumptionReportFG.get('reportConfig').get('paramMetric').patchValue(scheduleReportI.reportConfig.paramMetric[0]);
        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);
        this.initialObject = {
            consumptionReportConfig: this.scheduleConsumptionReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isValidUpdateForm();
    }
    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
        this.scheduleConsumptionReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }
    checkEquality() {
        const currentValues = {
            consumptionReportConfig: this.scheduleConsumptionReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isEqual = isEqual(this.initialObject, currentValues);
    }
    updateScheduleReport() {
        this.scheduleReportController.updateScheduleReport(this.orgID, this.scheduleReportID, this.modifiedFG).subscribe((res) => {
            this.tscCommonService.back();
        }, error => {
            console.log('error in updateScheduleReport -', error);
        });
    }
}
ScheduleReportConsumptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }, { token: i2$1.FormBuilder }, { token: ScheduleReportController }, { token: SourceService }, { token: ParameterService }, { token: ScheduleReportService }, { token: i1$2.StorageService }, { token: i3.TSCCommonService }, { token: i2$3.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleReportConsumptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ScheduleReportConsumptionComponent, selector: "lib-consumption", viewQueries: [{ propertyName: "schedulerConfigInput", first: true, predicate: ["schedulerConfigInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"scheduleConsumptionReportFG\" (ngSubmit)=\"scheduleReportSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"cardTitle\">\n                            Report configuration\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div formGroupName=\"reportConfig\">\n                                <div formGroupName=\"sourceConsumer\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"radioBtnField\">\n                                            <div class=\"radioBtnGroupLabel\"> You want to schedule {{ applicationKeyID == ApplicationKeyID.WATER_KEY_ID ?\n                                                'water' : 'energy'}} consumption report for? * </div>\n                                            <mat-radio-group formControlName=\"type\">\n                                                <div class=\"row my-1\">\n                                                    <div class=\"col-sm-6\">\n                                                        <mat-radio-button class=\"radioBtnLabel\" [value]=\"'SOURCE'\">\n                                                            Source\n                                                        </mat-radio-button>\n                                                    </div>\n                                                    <div class=\"col-sm-6\">\n                                                        <mat-radio-button class=\"radioBtnLabel\" [value]=\"'CONSUMER'\">\n                                                            Consumer\n                                                        </mat-radio-button>\n                                                    </div>\n                                                    <mat-error class=\"textMatError ms-1 mt-1\"\n                                                        *ngIf=\"errorHandling(scheduleConsumptionReportFG, 'reportConfig.sourceConsumer.type', 'required')\">\n                                                        {{ FormErrorEnum.REQUIRED }}\n                                                    </mat-error>\n                                                </div>\n                                            </mat-radio-group>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-3\">\n                            <div class=\"col-sm-3\">\n                                <div formGroupName=\"reportConfig\">\n                                    <div formGroupName=\"sourceConsumer\">\n                                        <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                            <mat-label> Select {{\n                                                scheduleConsumptionReportFG.get('reportConfig').get('sourceConsumer.type').value\n                                                == 'SOURCE' ? 'source' :\n                                                'consumer' }} type</mat-label>\n\n                                            <mat-select formControlName=\"keyID\" required>\n                                                <ng-container\n                                                    *ngIf=\"sourceConsumerType && sourceConsumerType.length > 0 && sourceConsumerType[0]['id']; else noSourceConsumerType\">\n                                                    <mat-option *ngFor=\"let type of sourceConsumerType\" [value]=\"type.keyID\">\n                                                        {{ type.name }}\n                                                    </mat-option>\n                                                </ng-container>\n\n                                                <ng-template #noSourceConsumerType>\n                                                    <mat-option disabled>\n                                                        {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                    </mat-option>\n                                                </ng-template>\n                                            </mat-select>\n\n                                            <mat-error\n                                                *ngIf=\"errorHandling(scheduleConsumptionReportFG, 'reportConfig.sourceConsumer.keyID', 'required')\">\n                                                {{ FormErrorEnum.REQUIRED }}\n                                            </mat-error>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-3\">\n                                <div formGroupName=\"reportConfig\">\n                                    <mat-form-field class=\"matFieldWidth100\"\n                                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select consumption parameter</mat-label>\n                                        <mat-select formControlName=\"paramMetric\" required>\n                                            <ng-container\n                                                *ngIf=\"consumptionParamM && consumptionParamM.length > 0 && consumptionParamM[0]['id']; else noConsumptionParamM\">\n                                                <mat-option *ngFor=\"let param of consumptionParamM\"\n                                                    [value]=\"param.paramMetric\">\n                                                    {{ param.label }}\n                                                </mat-option>\n                                            </ng-container>\n\n                                            <ng-template #noConsumptionParamM>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n                                        <mat-error\n                                            *ngIf=\"errorHandling(scheduleConsumptionReportFG, 'reportConfig.paramMetric', 'required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <lib-configuration #schedulerConfigInput></lib-configuration>\n                </div>\n            </div>\n\n            <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <div class=\"float-end\">\n                        <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"tscCommonService.back()\">\n                            {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                        </button>\n\n                        <button class=\"btn btn-sm btn-success\" [ngClass]=\"{\n                                            'btn-success' : action == FormAction.CREATE,\n                                            'btn-primary' : action == FormAction.UPDATE,\n                                            'disabled' : action == FormAction.UPDATE && isEqual\n                                        }\" type=\"submit\">{{ action ==\n                            FormAction.CREATE ? 'Schedule' :\n                            ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>", components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i13.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: ScheduleReportConfigurationComponent, selector: "lib-configuration" }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i13.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-consumption',
                    templateUrl: './consumption.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: i2$1.FormBuilder }, { type: ScheduleReportController }, { type: SourceService }, { type: ParameterService }, { type: ScheduleReportService }, { type: i1$2.StorageService }, { type: i3.TSCCommonService }, { type: i2$3.ToastrService }]; }, propDecorators: { schedulerConfigInput: [{
                type: ViewChild,
                args: ['schedulerConfigInput']
            }] } });

const routes$d = [
    {
        path: '',
        component: ScheduleReportConsumptionComponent
    }
];
class ScheduleReportConsumptionRoutingModule {
}
ScheduleReportConsumptionRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportConsumptionRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ScheduleReportConsumptionRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionRoutingModule, imports: [[RouterModule.forChild(routes$d)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$d)],
                    exports: [RouterModule]
                }]
        }] });

class ScheduleReportConsumptionModule {
}
ScheduleReportConsumptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportConsumptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionModule, declarations: [ScheduleReportConsumptionComponent], imports: [CommonModule,
        ScheduleReportConsumptionRoutingModule,
        ScheduleReportConfigurationModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule] });
ScheduleReportConsumptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionModule, imports: [[
            CommonModule,
            ScheduleReportConsumptionRoutingModule,
            ScheduleReportConfigurationModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatSelectModule,
            MatRadioModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportConsumptionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ScheduleReportConsumptionComponent
                    ],
                    imports: [
                        CommonModule,
                        ScheduleReportConsumptionRoutingModule,
                        ScheduleReportConfigurationModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatRadioModule
                    ]
                }]
        }] });

// /tsc-library/
class ScheduleReportSourcingComponent {
    constructor(activatedRoute, router, formBuilder, scheduleReportController, parameterService, scheduleReportService, 
    // tsc-library
    storageService, tscCommonService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.scheduleReportController = scheduleReportController;
        this.parameterService = parameterService;
        this.scheduleReportService = scheduleReportService;
        this.storageService = storageService;
        this.tscCommonService = tscCommonService;
        this.toastrService = toastrService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.allParameterID = [];
        this.totalParameterCount = 0;
        this.isEqual = true;
        this.scheduleReportI = new ScheduleReport();
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.scheduleSourcingReportFGInit();
        this.getConsumptionParameter();
        this.activatedRoute.data.subscribe(data => {
            this.action = data.action;
            this.setPageTitle();
        });
        this.activatedRoute.params.subscribe(params => {
            if (this.action == FormAction.UPDATE) {
                this.scheduleReportID = params.scheduleReportID;
                this.getScheduleReportByID(this.scheduleReportID);
            }
        });
    }
    setPageTitle() {
        const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';
        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule ${applicationName} Sourcing Report`;
        }
        else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled ${applicationName} Sourcing  Report`;
        }
    }
    scheduleSourcingReportFGInit() {
        this.scheduleSourcingReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.SOURCING_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [],
                entityID: [[]],
                sourceConsumer: this.formBuilder.group({
                    type: ['SOURCE'],
                    keyID: []
                }),
                paramMetric: [[], Validators.required],
            }),
            schedulerConfig: this.formBuilder.group({
                name: [, Validators.required],
                dataInterval: [, Validators.required],
                frequency: [, Validators.required],
                userChoice: [, Validators.required],
                userID: [[], Validators.required],
                otherUserEmail: [[]],
                status: [, Validators.required],
                reportFormat: [, Validators.required],
            })
        });
    }
    getConsumptionParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            const consumptionParamM = yield this.parameterService.getConsumptionParameter(this.orgID);
            this.consumptionParamM = consumptionParamM.consumptionParameter;
            this.totalParameterCount = this.consumptionParamM.length;
            this.consumptionParamM.forEach(parameter => this.allParameterID.push(parameter['paramMetric']));
        });
    }
    selectAllParameters() {
        if (!this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').value.includes(-1)) {
            this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').reset([]);
            return;
        }
        this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').setValue([-1, ...this.allParameterID]);
    }
    selectedParameters() {
        const selected = this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').value;
        if (selected.includes(-1)) {
            selected.shift();
            this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').patchValue(selected);
        }
        else if (this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').value.length == this.totalParameterCount) {
            this.allParameterID.splice(0, 0, -1);
            this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').patchValue(this.allParameterID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.scheduleSourcingReportFG.get('paramMetric').patchValue(filteredSelected);
        }
    }
    patchSchedulerConfigInput() {
        this.scheduleSourcingReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value);
    }
    getValidFormData() {
        this.patchSchedulerConfigInput();
        let userID = this.tscCommonService.removeSelectAllID(this.scheduleSourcingReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleSourcingReportFG.get('schedulerConfig').get('userID').patchValue(userID);
        let paramMetrics = this.tscCommonService.removeSelectAllID(this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').value);
        let paramsArray = paramMetrics.map(paramName => ({
            name: paramName,
            dsAgg: 'sum',
            agg: 'sum'
        }));
        const reportConfigFG = this.scheduleSourcingReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleSourcingReportFG.get('schedulerConfig').value;
        const { paramMetric } = reportConfigFG, reportConfigWithoutParamMetric = __rest(reportConfigFG, ["paramMetric"]);
        this.modifiedFG = {
            reportConfig: Object.assign(Object.assign({}, reportConfigWithoutParamMetric), { params: paramsArray }),
            schedulerConfig: Object.assign({}, schedulerConfigFG)
        };
    }
    scheduleReportSubmit() {
        this.patchSchedulerConfigInput();
        if (this.schedulerConfigInput.scheduleReportFG.invalid) {
            this.schedulerConfigInput.scheduleReportFG.markAllAsTouched();
        }
        if (this.scheduleSourcingReportFG.invalid) {
            console.log('Invalid form:', this.scheduleSourcingReportFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            this.getValidFormData();
            if (this.action == FormAction.CREATE) {
                this.createScheduleReport();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateScheduleReport();
            }
        }
    }
    createScheduleReport() {
        this.scheduleReportController.createScheduleReport(this.orgID, this.modifiedFG).subscribe((res) => {
            this.router.navigate([`schedule-report/page`]);
        }, error => {
            console.log('error in createScheduleReport -', error);
        });
    }
    getScheduleReportByID(scheduleReportID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scheduleReportI = (yield this.scheduleReportService.getScheduleReportByID(this.orgID, scheduleReportID));
            this.patchScheduleReport(this.scheduleReportI);
        });
    }
    patchScheduleReport(scheduleReportI) {
        this.scheduleSourcingReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });
        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);
        this.initialObject = {
            sourcingReportConfig: this.scheduleSourcingReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isValidUpdateForm();
    }
    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
        this.scheduleSourcingReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }
    checkEquality() {
        const currentValues = {
            sourcingReportConfig: this.scheduleSourcingReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isEqual = isEqual(this.initialObject, currentValues);
    }
    updateScheduleReport() {
        this.scheduleReportController.updateScheduleReport(this.orgID, this.scheduleReportID, this.modifiedFG).subscribe((res) => {
            this.tscCommonService.back();
        }, error => {
            console.log('error in updateScheduleReport -', error);
        });
    }
}
ScheduleReportSourcingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }, { token: i2$1.FormBuilder }, { token: ScheduleReportController }, { token: ParameterService }, { token: ScheduleReportService }, { token: i1$2.StorageService }, { token: i3.TSCCommonService }, { token: i2$3.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleReportSourcingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ScheduleReportSourcingComponent, selector: "lib-sourcing", viewQueries: [{ propertyName: "schedulerConfigInput", first: true, predicate: ["schedulerConfigInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"scheduleSourcingReportFG\" (ngSubmit)=\"scheduleReportSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"cardTitle\">\n                            Report configuration\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-3\">\n                                <div formGroupName=\"reportConfig\">\n                                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select consumption parameter</mat-label>\n                                        <mat-select formControlName=\"paramMetric\" multiple required>\n                                            <ng-container\n                                                *ngIf=\"consumptionParamM && consumptionParamM.length > 0 && consumptionParamM[0]['id']; else noConsumptionParamM\">\n                                                <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\">\n                                                    Select all\n                                                </mat-option>\n                                                <mat-option *ngFor=\"let param of consumptionParamM\" [value]=\"param.paramMetric\"\n                                                    (click)=\"selectedParameters()\">\n                                                    {{ param.label }}\n                                                </mat-option>\n                                            </ng-container>\n                                            <ng-template #noConsumptionParamM>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n                                        <mat-error *ngIf=\"errorHandling(scheduleSourcingReportFG, 'reportConfig.paramMetric', 'required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <lib-configuration #schedulerConfigInput></lib-configuration>\n                </div>\n            </div>\n            \n            <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <div class=\"float-end\">\n                        <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"tscCommonService.back()\">\n                            {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                        </button>\n\n                        <button class=\"btn btn-sm btn-success\" [ngClass]=\"{\n                                            'btn-success' : action == FormAction.CREATE,\n                                            'btn-primary' : action == FormAction.UPDATE,\n                                            'disabled' : action == FormAction.UPDATE && isEqual\n                                        }\" type=\"submit\">{{ action ==\n                            FormAction.CREATE ? 'Schedule' :\n                            ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>", components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: ScheduleReportConfigurationComponent, selector: "lib-configuration" }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-sourcing',
                    templateUrl: './sourcing.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: i2$1.FormBuilder }, { type: ScheduleReportController }, { type: ParameterService }, { type: ScheduleReportService }, { type: i1$2.StorageService }, { type: i3.TSCCommonService }, { type: i2$3.ToastrService }]; }, propDecorators: { schedulerConfigInput: [{
                type: ViewChild,
                args: ['schedulerConfigInput']
            }] } });

const routes$c = [
    {
        path: '',
        component: ScheduleReportSourcingComponent
    }
];
class ScheduleReportSourcingRoutingModule {
}
ScheduleReportSourcingRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportSourcingRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ScheduleReportSourcingRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingRoutingModule, imports: [[RouterModule.forChild(routes$c)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$c)],
                    exports: [RouterModule]
                }]
        }] });

class ScheduleReportSourcingModule {
}
ScheduleReportSourcingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportSourcingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingModule, declarations: [ScheduleReportSourcingComponent], imports: [CommonModule,
        ScheduleReportSourcingRoutingModule,
        ScheduleReportConfigurationModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule] });
ScheduleReportSourcingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingModule, imports: [[
            CommonModule,
            ScheduleReportSourcingRoutingModule,
            ScheduleReportConfigurationModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatSelectModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportSourcingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ScheduleReportSourcingComponent
                    ],
                    imports: [
                        CommonModule,
                        ScheduleReportSourcingRoutingModule,
                        ScheduleReportConfigurationModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatSelectModule
                    ]
                }]
        }] });

// /tsc-library/
class ScheduleReportTemperatureComponent {
    constructor(activatedRoute, router, formBuilder, scheduleReportController, entityService, scheduleReportService, 
    // tsc-library
    storageService, tscCommonService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.scheduleReportController = scheduleReportController;
        this.entityService = entityService;
        this.scheduleReportService = scheduleReportService;
        this.storageService = storageService;
        this.tscCommonService = tscCommonService;
        this.toastrService = toastrService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.entityM = [new Entity()];
        this.entityType = [];
        this.allEntityID = [];
        this.totalEntityCount = 0;
        this.entities = [];
        this.isEqual = true;
        this.scheduleReportI = new ScheduleReport();
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getEntitiesByParamMetric();
        this.scheduleTemperatureReportFGInit();
        this.activatedRoute.data.subscribe(data => {
            this.action = data.action;
            this.setPageTitle();
        });
        this.activatedRoute.params.subscribe(params => {
            if (this.action == FormAction.UPDATE) {
                this.scheduleReportID = params.scheduleReportID;
                this.getScheduleReportByID(this.scheduleReportID);
            }
        });
    }
    setPageTitle() {
        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule Temperature Report`;
        }
        else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled Temperature Report`;
        }
    }
    scheduleTemperatureReportFGInit() {
        this.scheduleTemperatureReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.TEMPERATURE_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [, Validators.required],
                entityID: [[], Validators.required],
                sourceConsumer: this.formBuilder.group({
                    type: [],
                    keyID: []
                }),
                paramMetric: [['engTemperature'], Validators.required],
            }),
            schedulerConfig: this.formBuilder.group({
                name: [, Validators.required],
                dataInterval: [, Validators.required],
                frequency: [, Validators.required],
                userChoice: [, Validators.required],
                userID: [[], Validators.required],
                otherUserEmail: [[]],
                status: [, Validators.required],
                reportFormat: [, Validators.required],
            })
        });
    }
    getEntitiesByParamMetric() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = (yield this.entityService.getEntitiesByParamMetric(this.orgID, "engTemperature"));
            this.getDistictEntityType();
        });
    }
    getDistictEntityType() {
        const distinctTypes = Array.from(new Set(this.entityM.map(item => item.type)));
        this.entityType = distinctTypes.map(value => ({ value }));
    }
    entityTypeChange(entityType) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').reset();
            this.allEntityID = [];
            this.entities = yield this.getEntitiesByType(entityType);
            this.totalEntityCount = this.entities.length;
            this.entities.forEach(entity => this.allEntityID.push(entity['id']));
            if (this.action == FormAction.UPDATE && this.scheduleTemperatureReportFG) {
                this.scheduleTemperatureReportFG.patchValue({
                    'reportConfig.entityID': this.allEntityID
                });
            }
        });
    }
    getEntitiesByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const filteredEntities = this.entityM.filter(entity => entity.type == type);
            return filteredEntities;
        });
    }
    selectAllEntities() {
        if (!this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').value.includes(-1)) {
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').reset([]);
            return;
        }
        this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').setValue([-1, ...this.allEntityID]);
    }
    selectedEntity() {
        const selected = this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').value;
        if (selected.includes(-1)) {
            selected.shift();
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').patchValue(selected);
        }
        else if (this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').value.length == this.totalEntityCount) {
            this.allEntityID.splice(0, 0, -1);
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').patchValue(this.allEntityID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').patchValue(filteredSelected);
        }
    }
    patchSchedulerConfigInput() {
        this.scheduleTemperatureReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value);
    }
    getValidFormData() {
        this.patchSchedulerConfigInput();
        let entityID = this.tscCommonService.removeSelectAllID(this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').value);
        this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').patchValue(entityID);
        let userID = this.tscCommonService.removeSelectAllID(this.scheduleTemperatureReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleTemperatureReportFG.get('schedulerConfig').get('userID').patchValue(userID);
        let paramMetrics = this.scheduleTemperatureReportFG.get('reportConfig').get('paramMetric').value;
        let paramsArray = paramMetrics.map(paramName => ({
            name: paramName,
            dsAgg: 'avg',
            agg: 'avg'
        }));
        const reportConfigFG = this.scheduleTemperatureReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleTemperatureReportFG.get('schedulerConfig').value;
        const { paramMetric } = reportConfigFG, reportConfigWithoutParamMetric = __rest(reportConfigFG, ["paramMetric"]);
        this.modifiedFG = {
            reportConfig: Object.assign(Object.assign({}, reportConfigWithoutParamMetric), { params: paramsArray }),
            schedulerConfig: Object.assign({}, schedulerConfigFG)
        };
    }
    scheduleReportSubmit() {
        this.patchSchedulerConfigInput();
        if (this.schedulerConfigInput.scheduleReportFG.invalid) {
            this.schedulerConfigInput.scheduleReportFG.markAllAsTouched();
        }
        if (this.scheduleTemperatureReportFG.invalid) {
            console.log('Invalid form:', this.scheduleTemperatureReportFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            this.getValidFormData();
            if (this.action == FormAction.CREATE) {
                this.createScheduleReport();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateScheduleReport();
            }
        }
    }
    createScheduleReport() {
        this.scheduleReportController.createScheduleReport(this.orgID, this.modifiedFG).subscribe((res) => {
            this.router.navigate([`schedule-report/page`]);
        }, error => {
            console.log('error in createScheduleReport -', error);
        });
    }
    getScheduleReportByID(scheduleReportID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scheduleReportI = (yield this.scheduleReportService.getScheduleReportByID(this.orgID, scheduleReportID));
            this.patchScheduleReport(this.scheduleReportI);
        });
    }
    patchScheduleReport(scheduleReportI) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getEntitiesByParamMetric();
            yield this.entityTypeChange(this.scheduleReportI.reportConfig.entityType);
            this.scheduleTemperatureReportFG.patchValue({
                reportConfig: scheduleReportI.reportConfig,
                schedulerConfig: scheduleReportI.schedulerConfig
            });
            this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);
            this.initialObject = {
                temperatureReportConfig: this.scheduleTemperatureReportFG.value,
                schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
            };
            this.isValidUpdateForm();
        });
    }
    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
        this.scheduleTemperatureReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }
    checkEquality() {
        const currentValues = {
            temperatureReportConfig: this.scheduleTemperatureReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isEqual = isEqual(this.initialObject, currentValues);
    }
    updateScheduleReport() {
        this.scheduleReportController.updateScheduleReport(this.orgID, this.scheduleReportID, this.modifiedFG).subscribe((res) => {
            this.tscCommonService.back();
        }, error => {
            console.log('error in updateScheduleReport -', error);
        });
    }
}
ScheduleReportTemperatureComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }, { token: i2$1.FormBuilder }, { token: ScheduleReportController }, { token: EntityService }, { token: ScheduleReportService }, { token: i1$2.StorageService }, { token: i3.TSCCommonService }, { token: i2$3.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleReportTemperatureComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ScheduleReportTemperatureComponent, selector: "lib-temperature", viewQueries: [{ propertyName: "schedulerConfigInput", first: true, predicate: ["schedulerConfigInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"scheduleTemperatureReportFG\" (ngSubmit)=\"scheduleReportSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"cardTitle\">\n                            Report configuration\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-3\">\n                                <div formGroupName=\"reportConfig\">\n                                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label> Select entity type </mat-label>\n                                        <mat-select formControlName=\"entityType\" (selectionChange)=\"entityTypeChange($event.value)\" required>\n                                            <ng-container *ngIf=\"entityType && entityType.length > 0 && entityType?.[0]?.['value']; else noEntityType\">\n                                                <mat-option *ngFor=\"let type of entityType\" [value]=\"type.value\">\n                                                    {{ type.value }}\n                                                </mat-option>\n                                            </ng-container>\n                                            <ng-template #noEntityType>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n                                        <mat-error *ngIf=\"errorHandling(scheduleTemperatureReportFG, 'reportConfig.entityType', 'required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                    \n                            <div class=\"col-sm-3\">\n                                <div formGroupName=\"reportConfig\">\n                                    <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select entity</mat-label>\n                                        <mat-select formControlName=\"entityID\" multiple required>\n                                            <ng-container *ngIf=\"entities && entities.length > 0 && entities[0]['id']; else noEntityFound\">\n                                                <mat-option [value]=\"-1\" (click)=\"selectAllEntities()\">\n                                                    Select all\n                                                </mat-option>\n                                                <mat-option *ngFor=\"let entity of entities\" [value]=\"entity.id\" (click)=\"selectedEntity()\">\n                                                    {{ entity.name }}\n                                                </mat-option>\n                                            </ng-container>\n                                            <ng-template #noEntityFound>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n                                        <mat-error *ngIf=\"errorHandling(scheduleTemperatureReportFG, 'reportConfig.entityID', 'required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <lib-configuration #schedulerConfigInput></lib-configuration>\n                </div>\n            </div>\n            \n            <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <div class=\"float-end\">\n                        <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"tscCommonService.back()\">\n                            {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                        </button>\n\n                        <button class=\"btn btn-sm btn-success\" [ngClass]=\"{\n                                            'btn-success' : action == FormAction.CREATE,\n                                            'btn-primary' : action == FormAction.UPDATE,\n                                            'disabled' : action == FormAction.UPDATE && isEqual\n                                        }\" type=\"submit\">{{ action ==\n                            FormAction.CREATE ? 'Schedule' :\n                            ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>", styles: [".labelColor{font-size:12px;color:#0009}\n"], components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: ScheduleReportConfigurationComponent, selector: "lib-configuration" }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-temperature',
                    templateUrl: './temperature.component.html',
                    styleUrls: ['./temperature.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: i2$1.FormBuilder }, { type: ScheduleReportController }, { type: EntityService }, { type: ScheduleReportService }, { type: i1$2.StorageService }, { type: i3.TSCCommonService }, { type: i2$3.ToastrService }]; }, propDecorators: { schedulerConfigInput: [{
                type: ViewChild,
                args: ['schedulerConfigInput']
            }] } });

const routes$b = [
    {
        path: '',
        component: ScheduleReportTemperatureComponent
    }
];
class ScheduleReportTemperatureRoutingModule {
}
ScheduleReportTemperatureRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportTemperatureRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ScheduleReportTemperatureRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureRoutingModule, imports: [[RouterModule.forChild(routes$b)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$b)],
                    exports: [RouterModule]
                }]
        }] });

class ScheduleReportTemperatureModule {
}
ScheduleReportTemperatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleReportTemperatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureModule, declarations: [ScheduleReportTemperatureComponent], imports: [CommonModule,
        ScheduleReportTemperatureRoutingModule,
        ScheduleReportConfigurationModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonToggleModule] });
ScheduleReportTemperatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureModule, imports: [[
            CommonModule,
            ScheduleReportTemperatureRoutingModule,
            ScheduleReportConfigurationModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatSelectModule,
            MatButtonToggleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportTemperatureModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ScheduleReportTemperatureComponent
                    ],
                    imports: [
                        CommonModule,
                        ScheduleReportTemperatureRoutingModule,
                        ScheduleReportConfigurationModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatButtonToggleModule
                    ]
                }]
        }] });

// /tsc-library/
class CreateUpdateEntityComponent {
    constructor(storageService, toastService, entityService, entityController, entityFB, dialogRef, data) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.entityService = entityService;
        this.entityController = entityController;
        this.entityFB = entityFB;
        this.dialogRef = dialogRef;
        this.data = data;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DialogEnum = DialogEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.title = 'Create';
        this.action = 'create';
        this.isNewEntityTypeSelected = false;
        this.isEqual = false;
        this.entityTypeM = [new EntityType()];
        this.entityTypeSearchUtil = new MatSelectSearchService(['type']);
        this.errorHandling = (control, error) => {
            return this.entityFG.controls[control].hasError(error);
        };
        this.action = data['action'];
        this.entityID = data['entityID'];
        this.layoutID = data['layoutID'];
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getEntityType();
        this.entityFGInit();
        if (this.action == 'update') {
            this.title = 'Update';
            this.getEntityByID();
        }
        this.entityFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.entityFG.getRawValue()); });
    }
    getEntityType() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityTypeM = (yield this.entityService.getEntityTypeByLayoutID(this.orgID, 'NO'));
            this.entityTypeSearchUtil.entityArr = this.entityTypeM;
            this.entityTypeSearchUtil.createSubscription();
        });
    }
    entityFGInit() {
        this.entityFG = this.entityFB.group({
            name: ['', Validators.required],
            type: ['', Validators.required]
        });
    }
    createNewType() {
        this.isNewEntityTypeSelected = true;
        this.entityFG.get('type').reset();
    }
    getEntityByID() {
        this.entityController.getEntityByID(this.orgID, this.layoutID, this.entityID).subscribe((entityRes) => {
            this.entityM = entityRes;
            this.patchEntity(this.entityM);
        });
    }
    patchEntity(entity) {
        this.entityFG.patchValue({
            name: entity['name'],
            type: entity['type']
        });
        this.isEqual = true;
    }
    addEntity() {
        if (this.entityFG.invalid) {
            this.entityFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.entityController.createEntity(this.orgID, this.layoutID, this.entityID, this.entityFG.value)
            .subscribe((addEntityRes) => {
            this.dialogRef.close(DialogEnum.SUCCESS_DR);
        }, error => {
            console.log('error in addEntity - ', error);
        });
    }
    updateEntity() {
        if (this.entityFG.invalid) {
            this.entityFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.entityController.updateEntity(this.orgID, this.layoutID, this.entityID, this.entityFG.value)
            .subscribe((addEntityRes) => {
            this.dialogRef.close(DialogEnum.SUCCESS_DR);
        }, error => {
            console.log('error in updateEntity - ', error);
        });
    }
}
CreateUpdateEntityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEntityComponent, deps: [{ token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: EntityService }, { token: EntityController }, { token: i2$1.FormBuilder }, { token: i1$3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
CreateUpdateEntityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateEntityComponent, selector: "lib-entity", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ title }} Entity\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"DialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"entityFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Name</mat-label>\n                    <input matInput placeholder=\"Name\" type=\"text\" formControlName=\"name\" required />\n                    <mat-error *ngIf=\"errorHandling('name', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-6\" *ngIf=\"!isNewEntityTypeSelected\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select type</mat-label>\n                    <mat-select formControlName=\"type\" required>\n                        <mat-option>\n                            <ngx-mat-select-search [formControl]=\"entityTypeSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                                noEntriesFoundLabel=\"No matching type found.\">\n                            </ngx-mat-select-search>\n                        </mat-option>\n                        <mat-option *ngFor=\"let entity of entityTypeSearchUtil.filteredEntities | async\" [value]=\"entity.type\">\n                            {{ entity.type }}\n                        </mat-option>\n\n                        <div class=\"row m-0 stickyDropdownMenuItem\">\n                            <div class=\"col-sm-12 text-primary cursorPointer\" (click)=\"createNewType()\">\n                                Create new type\n                            </div>\n                        </div>\n                    </mat-select>\n                    <mat-error *ngIf=\"errorHandling('type', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-6\" *ngIf=\"isNewEntityTypeSelected\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Type</mat-label>\n                    <input matInput placeholder=\"Type\" type=\"text\" formControlName=\"type\" required />\n                    <mat-error *ngIf=\"errorHandling('type', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n\n                <span class=\"mt-2 text-primary cursorPointer\" (click)=\"isNewEntityTypeSelected = false\">\n                    <small>Select type *</small>\n                </span>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div mat-dialog-footer align=\"end\">\n    <div [ngSwitch]=\"action\" class=\"d-inline\">\n        <button *ngSwitchCase=\"'create'\" type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addEntity()\">\n            {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchCase=\"'update'\" type=\"button\" class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled': isEqual}\"\n            (click)=\"updateEntity()\">\n            {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchDefault class=\"d-none\"></button>\n    </div>\n</div>", components: [{ type: i6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i12$3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i14.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i14.NgSwitchDefault, selector: "[ngSwitchDefault]" }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEntityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-entity',
                    templateUrl: './entity.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: EntityService }, { type: EntityController }, { type: i2$1.FormBuilder }, { type: i1$3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });

class CreateUpdateEntityModule {
}
CreateUpdateEntityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEntityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreateUpdateEntityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEntityModule, declarations: [CreateUpdateEntityComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        MatSelectModule,
        NgxMatSelectSearchModule] });
CreateUpdateEntityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEntityModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            MatTooltipModule,
            MatDialogModule,
            MatSelectModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEntityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CreateUpdateEntityComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatInputModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatSelectModule,
                        NgxMatSelectSearchModule
                    ]
                }]
        }] });

// /tsc-library/
class CreateUpdateLayoutComponent {
    constructor(dialogRef, data, storageService, layoutFB, toastService, layoutController, layoutService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.storageService = storageService;
        this.layoutFB = layoutFB;
        this.toastService = toastService;
        this.layoutController = layoutController;
        this.layoutService = layoutService;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DialogEnum = DialogEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.title = 'Create';
        this.action = 'create';
        this.maxLength = 200;
        this.layout = new Layout();
        this.isEqual = false;
        this.errorHandling = (control, error) => {
            return this.layoutFG.controls[control].hasError(error);
        };
        this.action = data['action'];
        this.layoutID = data['layoutID'];
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutInit();
        if (this.action == 'update') {
            this.title = 'Update';
            this.getLayoutByID();
        }
        this.layoutFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.layoutFG.getRawValue()); });
    }
    layoutInit() {
        this.layoutFG = this.layoutFB.group({
            name: ['', [Validators.required]],
            description: []
        });
    }
    getLayoutByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.layout = yield this.layoutService.getLayoutByID(this.orgID, this.layoutID);
            this.patchLayout(this.layout);
        });
    }
    patchLayout(layout) {
        this.layoutFG.patchValue({
            name: layout['name'],
            description: layout['description']
        });
        this.isEqual = true;
    }
    createLayout() {
        if (this.layoutFG.invalid) {
            this.layoutFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.layoutController.createLayout(this.orgID, this.layoutFG.value)
            .subscribe((layoutCreateRes) => {
            this.dialogRef.close({
                result: DialogEnum.SUCCESS_DR,
                layoutID: layoutCreateRes.response.id
            });
        }, error => {
            console.log('error in createLayout() - ', error);
        });
    }
    updateLayout() {
        if (this.layoutFG.invalid) {
            this.layoutFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.layoutController.updateLayout(this.orgID, this.layoutID, this.layoutFG.value)
            .subscribe((updateLayoutRes) => {
            this.dialogRef.close({ result: DialogEnum.SUCCESS_DR, layoutID: null });
        }, error => {
            console.log('error in updateLayout() - ', error);
        });
    }
}
CreateUpdateLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateLayoutComponent, deps: [{ token: i1$3.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i1$2.StorageService }, { token: i2$1.FormBuilder }, { token: i2$3.ToastrService }, { token: i5.LayoutController }, { token: i5.LayoutService }], target: i0.ɵɵFactoryTarget.Component });
CreateUpdateLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateLayoutComponent, selector: "lib-layout", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ title }} layout\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"DialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"layoutFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Name</mat-label>\n                    <input matInput placeholder=\"Layout Name\" type=\"text\" formControlName=\"name\" required/>\n                    <mat-error *ngIf=\"errorHandling('name', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Description</mat-label>\n                    <input class=\"formPlaceholder\" matInput formControlName=\"description\" [maxlength]=\"maxLength\"\n                        #input />\n                    <mat-hint>Total number of character remaining: {{input.value.length}}\n                        /{{ maxLength }}</mat-hint>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div mat-dialog-footer align=\"end\">\n    <div [ngSwitch]=\"action\" class=\"d-inline\">\n        <button *ngSwitchCase=\"'create'\" type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"createLayout()\">\n            {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchCase=\"'update'\" type=\"button\" class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled': isEqual}\"\n            (click)=\"updateLayout()\">\n            {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchDefault class=\"d-none\"></button>\n    </div>\n</div>", components: [{ type: i6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i12$3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i2$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i3$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i14.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i14.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i14.NgSwitchDefault, selector: "[ngSwitchDefault]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-layout',
                    templateUrl: './layout.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1$2.StorageService }, { type: i2$1.FormBuilder }, { type: i2$3.ToastrService }, { type: i5.LayoutController }, { type: i5.LayoutService }]; } });

class CreateUpdateLayoutModule {
}
CreateUpdateLayoutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreateUpdateLayoutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateLayoutModule, declarations: [CreateUpdateLayoutComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        MatSelectModule] });
CreateUpdateLayoutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateLayoutModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            MatTooltipModule,
            MatDialogModule,
            MatSelectModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CreateUpdateLayoutComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatInputModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatSelectModule
                    ]
                }]
        }] });

// /tsc-library/
class SourceLoadComponent {
    constructor(dialogRef, data, sourceLoadFB, deviceController, sourceService, storageService, toastrService, parameterService, tscCommonService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sourceLoadFB = sourceLoadFB;
        this.deviceController = deviceController;
        this.sourceService = sourceService;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.parameterService = parameterService;
        this.tscCommonService = tscCommonService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DialogEnum = DialogEnum;
        this.FormActionEnum = FormAction;
        this.PageTitleEnum = PageTitleEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.isEqual = true;
        this.parameterM = [new Parameter()];
        this.sourceType = [new Static()];
        this.loadType = [new Static()];
        this.infoMessage = 'Include source or load category and their type when mapping devices for type meters!';
        this.warningMessage = 'Please add either source or load type when mapping devices for every parameter!';
        this.layoutID = data['layoutID'];
        this.entityID = data['entityID'];
        this.deviceInfo = data['deviceInfo'];
        this.deviceParameter = data['deviceInfo']['parameter'];
        this.updateFromDialog = data['updateFromDialog'];
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getParameterByOrgID();
        this.getSourceConsumerType("source")
            .then(app => {
            this.sourceType = app;
        });
        this.getSourceConsumerType("consumer")
            .then(app => {
            this.loadType = app;
        });
        this.sourceLoadFGInit();
        this.deviceParameter.forEach(param => {
            this.addParameterToFormArray(param);
        });
        if (this.deviceInfo && this.deviceInfo.mappingRecords && this.deviceInfo.mappingRecords.length == 0) {
            this.action = FormAction.ADD;
        }
        else {
            this.action = FormAction.UPDATE;
            this.desiredMappingArray = this.makeDesiredMappingArray();
            this.patchSourceLoadFG();
            this.updateFormControlsState();
        }
        this.intialObject = this.sourceLoadFG.value;
        this.sourceLoadFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.sourceLoadFG.value);
            if (this.action == FormAction.UPDATE) {
                this.updateDesiredMappingArray();
            }
        });
    }
    getParameterByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByOrgID(this.orgID));
        });
    }
    getParameterLabel(paramID) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'id', paramID);
        return parameter ? parameter.label : '';
    }
    getSourceConsumerType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestData = {
                type: type
            };
            const result = yield this.sourceService.getSourceConsumerType(this.orgID, requestData);
            return result;
        });
    }
    sourceLoadFGInit() {
        this.sourceLoadFG = this.sourceLoadFB.group({
            parameterMappingRecord: this.sourceLoadFB.array([])
        });
    }
    addParameterToFormArray(param) {
        const parameterFG = this.sourceLoadFB.group({
            parameterID: [param.id],
            isSource: [false],
            sourceType: [{ value: '', disabled: true }, Validators.required],
            isLoad: [false],
            loadType: [{ value: '', disabled: true }, Validators.required]
        });
        this.parameterMappingRecordFA.push(parameterFG);
    }
    get parameterMappingRecordFA() {
        return this.sourceLoadFG.get('parameterMappingRecord');
    }
    addSourceType(event, index) {
        const isSource = this.parameterMappingRecordFA.at(index).get('isSource');
        isSource.setValue(event.checked);
        const sourceTypeControl = this.parameterMappingRecordFA.at(index).get('sourceType');
        if (isSource.value) {
            sourceTypeControl.enable();
            sourceTypeControl.setValidators([Validators.required]);
        }
        else {
            sourceTypeControl.disable();
            sourceTypeControl.clearValidators();
            sourceTypeControl.reset('');
        }
        sourceTypeControl.updateValueAndValidity();
    }
    addLoadType(event, index) {
        const isLoad = this.parameterMappingRecordFA.at(index).get('isLoad');
        isLoad.setValue(event.checked);
        const loadTypeControl = this.parameterMappingRecordFA.at(index).get('loadType');
        if (isLoad.value) {
            loadTypeControl.enable();
            loadTypeControl.setValidators([Validators.required]);
        }
        else {
            loadTypeControl.disable();
            loadTypeControl.clearValidators();
            loadTypeControl.reset('');
        }
        loadTypeControl.updateValueAndValidity();
    }
    makeDesiredMappingArray() {
        const mappingArray = [];
        if (this.action == FormAction.ADD) {
            this.parameterMappingRecordFA.controls.forEach((parameter, index) => {
                const parameterID = parameter.get('parameterID').value;
                const mapping = [];
                const isSource = parameter.get('isSource').value;
                const sourceType = parameter.get('sourceType').value || '';
                if (isSource) {
                    mapping.push({
                        mappingID: null,
                        type: 'SOURCE',
                        value: sourceType
                    });
                }
                const isLoad = parameter.get('isLoad').value;
                const loadType = parameter.get('loadType').value || '';
                if (isLoad) {
                    mapping.push({
                        mappingID: null,
                        type: 'LOAD',
                        value: loadType
                    });
                }
                if (mapping.length > 0) {
                    mappingArray.push({
                        parameterID: parameterID,
                        mapping: mapping
                    });
                }
            });
        }
        else if (this.action == FormAction.UPDATE) {
            if (this.deviceInfo.mappingRecords) {
                this.deviceInfo.mappingRecords.forEach((record) => {
                    var _a;
                    const parameterID = record.parameterID;
                    const mapping = ((_a = record.mapping) === null || _a === void 0 ? void 0 : _a.map((mapping) => {
                        return {
                            mappingID: mapping.mappingID || null,
                            type: mapping.type || '',
                            value: mapping.value || ''
                        };
                    })) || [];
                    mappingArray.push({
                        parameterID: parameterID,
                        mapping: mapping
                    });
                });
            }
        }
        return mappingArray;
    }
    patchSourceLoadFG() {
        this.desiredMappingArray.forEach((mappingObject) => {
            var _a, _b;
            const parameterID = mappingObject.parameterID;
            const parameterFormControl = this.parameterMappingRecordFA.controls.find(formControl => formControl.get('parameterID').value == parameterID);
            if (parameterFormControl) {
                const mapping = mappingObject.mapping;
                const isSource = mapping.some(value => value.type == 'SOURCE');
                const isLoad = mapping.some(value => value.type == 'LOAD');
                const sourceType = ((_a = mapping.find(value => value.type == 'SOURCE')) === null || _a === void 0 ? void 0 : _a.value) || '';
                const loadType = ((_b = mapping.find(value => value.type == 'LOAD')) === null || _b === void 0 ? void 0 : _b.value) || '';
                parameterFormControl.patchValue({
                    isSource,
                    isLoad,
                    sourceType,
                    loadType
                });
            }
        });
    }
    updateFormControlsState() {
        this.parameterMappingRecordFA.controls.forEach((parameter, index) => {
            const isSource = parameter.get('isSource').value;
            const sourceTypeControl = parameter.get('sourceType');
            if (isSource) {
                sourceTypeControl.enable();
                sourceTypeControl.setValidators([Validators.required]);
            }
            else {
                sourceTypeControl.disable();
                sourceTypeControl.clearValidators();
                sourceTypeControl.reset('');
            }
            sourceTypeControl.updateValueAndValidity();
            const isLoad = parameter.get('isLoad').value;
            const loadTypeControl = parameter.get('loadType');
            if (isLoad) {
                loadTypeControl.enable();
                loadTypeControl.setValidators([Validators.required]);
            }
            else {
                loadTypeControl.disable();
                loadTypeControl.clearValidators();
                loadTypeControl.reset('');
            }
            loadTypeControl.updateValueAndValidity();
        });
    }
    updateDesiredMappingArray() {
        const mappingArray = [];
        this.parameterMappingRecordFA.controls.forEach((parameter) => {
            const parameterID = parameter.get('parameterID').value;
            const mapping = [];
            const isSource = parameter.get('isSource').value;
            const sourceType = parameter.get('sourceType').value || '';
            if (isSource) {
                mapping.push({
                    mappingID: null,
                    type: 'SOURCE',
                    value: sourceType
                });
            }
            const isLoad = parameter.get('isLoad').value;
            const loadType = parameter.get('loadType').value || '';
            if (isLoad) {
                mapping.push({
                    mappingID: null,
                    type: 'LOAD',
                    value: loadType
                });
            }
            if (mapping.length > 0) {
                mappingArray.push({
                    parameterID: parameterID,
                    mapping: mapping
                });
            }
        });
        return mappingArray;
    }
    validateSourceOrLoad() {
        const formControls = this.parameterMappingRecordFA.controls;
        const validFormControls = formControls.filter(control => {
            const isSource = control.get('isSource').value;
            const isLoad = control.get('isLoad').value;
            return isSource || isLoad;
        });
        if (validFormControls.length == formControls.length) {
            return true;
        }
        else {
            this.toastrService.openToast(ToastrTitle.WARNING, this.warningMessage, ToastrColor.WARNING);
            return false;
        }
    }
    sourceLoadSubmit() {
        if (this.validateSourceOrLoad()) {
            if (this.updateFromDialog == true) {
                this.desiredMappingArray = this.updateDesiredMappingArray();
                if (this.desiredMappingArray.length == 0) {
                    this.toastrService.openToast(ToastrTitle.WARNING, this.warningMessage, ToastrColor.WARNING);
                }
                else {
                    if (this.sourceLoadFG.invalid) {
                        this.sourceLoadFG.markAllAsTouched();
                        this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                        return;
                    }
                    this.deviceController.updateSourceLoad(this.orgID, this.layoutID, this.entityID, this.deviceInfo.id, this.desiredMappingArray).subscribe((updateRes) => {
                        this.dialogRef.close({
                            result: DialogEnum.SUCCESS_DR,
                            action: FormAction.UPDATE
                        });
                    }, error => {
                        console.log('error in updateSourceLoad() - ', error);
                    });
                }
            }
            else {
                if (this.action == FormAction.ADD) {
                    this.desiredMappingArray = this.makeDesiredMappingArray();
                }
                else if (this.action == FormAction.UPDATE) {
                    this.desiredMappingArray = this.updateDesiredMappingArray();
                    if (this.desiredMappingArray.length == 0) {
                        this.toastrService.openToast(ToastrTitle.INFO, this.infoMessage, ToastrColor.INFO);
                    }
                }
                if (this.sourceLoadFG.invalid) {
                    this.sourceLoadFG.markAllAsTouched();
                    this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                    return;
                }
                this.dialogRef.close({
                    result: DialogEnum.SUCCESS_DR,
                    sourceLoadMappingRes: this.desiredMappingArray
                });
            }
        }
    }
    cancel() {
        if (this.updateFromDialog == true) {
            if (this.updateDesiredMappingArray().length == 0) {
                this.toastrService.openToast(ToastrTitle.WARNING, this.warningMessage, ToastrColor.WARNING);
            }
            else {
                this.dialogRef.close({
                    result: DialogEnum.SUCCESS_DR,
                    action: FormAction.CANCEL
                });
            }
        }
        else {
            if (this.action == FormAction.ADD) {
                this.toastrService.openToast(ToastrTitle.INFO, this.infoMessage, ToastrColor.INFO);
            }
            let sourceLoadMappingRes = this.action == FormAction.ADD ? [] : this.makeDesiredMappingArray();
            this.dialogRef.close({
                result: DialogEnum.CLOSE_DR,
                sourceLoadMappingRes: sourceLoadMappingRes
            });
        }
    }
}
SourceLoadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, deps: [{ token: i1$3.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2$1.FormBuilder }, { token: DeviceController }, { token: SourceService }, { token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: ParameterService }, { token: i3.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
SourceLoadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent, selector: "lib-source-load", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ action == FormActionEnum.ADD ? PageTitleEnum.ADD : PageTitleEnum.UPDATE }} Source/Consumer\n    </strong>\n</div>\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"sourceLoadFG\">\n        <ng-container formArrayName=\"parameterMappingRecord\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 mb-3\" *ngFor=\"let param of parameterMappingRecordFA.controls; let i = index\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-card class=\"border card cardOverwrite\">\n                            <div class=\"cardTitle\">\n                                {{ getParameterLabel(param.get('parameterID').value) }}\n                            </div>\n                            <div class=\"row mt-2\">\n                                <div class=\"col-sm-4\">\n                                    <mat-checkbox (change)=\"addSourceType($event, i)\" formControlName=\"isSource\">Source</mat-checkbox>\n                                </div>\n                                <div class=\"col-sm-8\">\n                                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select source type</mat-label>\n\n                                        <mat-select formControlName=\"sourceType\" [disabled]=\"!parameterMappingRecordFA.controls[i].get('isSource').value\"\n                                            required>\n                                            <ng-container *ngIf=\"sourceType && sourceType.length > 0 && sourceType[0]['id']; else noSourceType\">\n                                                <mat-option *ngFor=\"let type of sourceType\" [value]=\"type.id\">\n                                                    {{ type.name }}\n                                                </mat-option>\n                                            </ng-container>\n                                            <ng-template #noSourceType>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"this.parameterMappingRecordFA.controls[i].get('sourceType').hasError('required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                                </div>\n                            <div class=\"row mt-2\">\n                                <div class=\"col-sm-4\">\n                                    <mat-checkbox (change)=\"addLoadType($event, i)\" formControlName=\"isLoad\">Load</mat-checkbox>\n                                </div>\n                                <div class=\"col-sm-8\">\n                                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select consumer type</mat-label>\n\n                                        <mat-select formControlName=\"loadType\" [disabled]=\"!parameterMappingRecordFA.controls[i].get('isLoad').value\"\n                                            required>\n                                            <ng-container *ngIf=\"loadType && loadType.length > 0 && loadType[0]['id']; else noLoadType\">\n                                                <mat-option *ngFor=\"let type of loadType\" [value]=\"type.id\">\n                                                    {{ type.name }}\n                                                </mat-option>\n                                            </ng-container>\n                                            <ng-template #noLoadType>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"this.parameterMappingRecordFA.controls[i].get('loadType').hasError('required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </mat-card>\n                    </ng-container>\n                </div>\n            </div>\n        </ng-container>\n    </form>\n</div>\n<div mat-dialog-footer align=\"end\">\n    <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"cancel()\">\n        {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n    </button>\n    <button class=\"btn btn-sm btn-success\" type=\"submit\" [ngClass]=\"{'disabled': isEqual}\" (click)=\"sourceLoadSubmit()\">\n        {{ action == FormActionEnum.ADD ? ButtonLabelEnum.ADD_BTN_LABEL : ButtonLabelEnum.UPDATE_BTN_LABEL }}\n    </button>\n</div>", components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10$3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-source-load',
                    templateUrl: './source-load.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2$1.FormBuilder }, { type: DeviceController }, { type: SourceService }, { type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: ParameterService }, { type: i3.TSCCommonService }]; } });

class SourceLoadModule {
}
SourceLoadModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourceLoadModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule, declarations: [SourceLoadComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule] });
SourceLoadModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatIconModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            MatTooltipModule,
            MatDialogModule,
            MatSelectModule,
            MatCheckboxModule
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
                        MatCardModule,
                        MatIconModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatInputModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatSelectModule,
                        MatCheckboxModule
                    ]
                }]
        }] });

// /tsc-library/
class PageComponent {
    constructor(router, storageService, layoutController, commonEvent, dialog) {
        this.router = router;
        this.storageService = storageService;
        this.layoutController = layoutController;
        this.commonEvent = commonEvent;
        this.dialog = dialog;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.faPlus = faPlus;
        this.faEllipsisV = faEllipsisV;
        this.displayedColumn = ['id', 'name', 'description', 'option'];
        this.resultLength = 0;
        this.dataSource = [];
        this.searchFlag = false;
        this.searchArr = [];
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
    navigateToViewPage(id) {
        this.router.navigate([`layout/${id}/list`]);
    }
    openCreateUpdateLayoutDialog(action, layoutID) {
        let dialogRef;
        if (action == 'create') {
            dialogRef = this.dialog.open(CreateUpdateLayoutComponent, {
                data: {
                    action: action
                },
                minWidth: '550px',
                maxWidth: '550px'
            });
            dialogRef.afterClosed().subscribe((dialogRes) => {
                if (dialogRes.result == DialogEnum.SUCCESS_DR) {
                    // Emit the layoutChange event
                    this.commonEvent.layoutChange.next('YES');
                    this.router.navigate([`layout/${dialogRes.layoutID}/list`]);
                }
            });
        }
        else {
            dialogRef = this.dialog.open(CreateUpdateLayoutComponent, {
                data: {
                    action: action,
                    layoutID: layoutID
                },
                minWidth: '550px',
                maxWidth: '550px'
            });
            dialogRef.afterClosed().subscribe((dialogRes) => {
                if (dialogRes.result == DialogEnum.SUCCESS_DR) {
                    // Emit the layoutChange event
                    this.commonEvent.layoutChange.next('YES');
                    window.location.reload();
                }
            });
        }
    }
    openDeleteLayoutDialog(layoutID, layoutName) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete layout?',
                body: '<b>' + layoutName + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteLayout(layoutID);
            }
        });
    }
    deleteLayout(layoutID) {
        this.layoutController.deleteLayout(this.orgID, layoutID).subscribe((deleteRes) => {
            // Emit the layoutChange event
            this.commonEvent.layoutChange.next('YES');
            this.refreshBtn.nativeElement.click();
        });
    }
}
PageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageComponent, deps: [{ token: i1$1.Router }, { token: i1$2.StorageService }, { token: i5.LayoutController }, { token: i3.CommonEvent }, { token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
PageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageComponent, selector: "app-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Layout</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n                <a class=\"btn btn-sm btn-success btnBase\" matRipple (click)=\"openCreateUpdateLayoutDialog('create', null)\">\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>&nbsp; Layout\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <table mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\" matSortDirection=\"asc\"\n        matSortDisableClear>\n\n        <ng-container matColumnDef=\"id\">\n            <th class=\"columnWidth1 px-3\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                ID\n            </th>\n            <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\" (click)=\"navigateToViewPage(row['id'])\">\n                {{ row['id'] }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n            <th class=\"columnWidth2 px-3\" mat-header-cell *matHeaderCellDef> Name </th>\n            <td class=\"columnWidth2 px-3\" mat-cell *matCellDef=\"let row\"\n                [matTooltip]=\"row?.['name']?.length>24? row['name']: ''\" matTooltipPosition=\"above\"\n                matTooltipClass=\"nameTooltip\" (click)=\"navigateToViewPage(row['id'])\">\n                {{ row?.['name'] | dotdotdot:24 }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"description\">\n            <th class=\"columnWidth2 px-3\" mat-header-cell *matHeaderCellDef> Description </th>\n            <td class=\"columnWidth2 px-3\" mat-cell *matCellDef=\"let row\"\n                [matTooltip]=\"row?.['description']?.length>24? row['description']: ''\" matTooltipPosition=\"above\"\n                matTooltipClass=\"nameTooltip\" (click)=\"navigateToViewPage(row['id'])\">\n                {{ row?.['description'] | dotdotdot:24 }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"option\">\n            <th class=\"columnWidth3\" mat-header-cell *matHeaderCellDef> Action </th>\n            <td class=\"columnWidth3 text-center\" mat-cell *matCellDef=\"let row\">\n                <div class=\"d-flex align-items-center\">\n                    <div class=\"btn-group\" ngbDropdown placement=\"left\">\n                        <button type=\"button\" ngbDropdownToggle class=\"dropdown-after dropdownAfter btn\">\n                            <fa-icon [icon]=\"faEllipsisV\"></fa-icon>\n                        </button>\n                        <div ngbDropdownMenu>\n                            <button class=\"dropdown-item\" (click)=\"openCreateUpdateLayoutDialog('update', row.id)\">\n                                {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                            </button>\n                            <!-- <button class=\"btn btn-outline-danger rounded-0 dropdown-item\" (click)=\"openDeleteLayoutDialog(row.id, row.name)\">\n                                {{ ButtonLabelEnum.DELETE_BTN_LABEL }}\n                            </button> -->\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\" class=\"data-row\"></tr>\n\n        <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n            </td>\n        </tr>\n    </table>\n\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:200px}.columnWidth3{min-width:140px}\n"], components: [{ type: i3.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear", "emitValueOnChange"], outputs: ["emitSearch"] }, { type: i6$2.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i7$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i8.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i7$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i7$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9$2.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i8.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i7$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i7$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i7$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i7$1.MatCellDef, selector: "[matCellDef]" }, { type: i7$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i12.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i12.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i12.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i7$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i7$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i7$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i3.EllipsisPipeService } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-page',
                    templateUrl: './page.component.html',
                    styleUrls: ['./page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$2.StorageService }, { type: i5.LayoutController }, { type: i3.CommonEvent }, { type: i1$3.MatDialog }]; }, propDecorators: { sort: [{
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

const routes$a = [
    {
        path: '',
        component: PageComponent
    }
];
class PageRoutingModule {
}
PageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
PageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, imports: [[RouterModule.forChild(routes$a)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$a)],
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
        MatTooltipModule] });
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
            MatTooltipModule
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
                        MatTooltipModule
                    ]
                }]
        }] });

// /tsc-library/
class ChartComponent {
    constructor(activatedRoute, storageService, entityService) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.entityService = entityService;
        this.entityDeviceM = new ParameterEntity();
        this.allowUpdateEntityTree = false;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.parent.parent.paramMap.subscribe((params) => {
            this.layoutID = params.get('layoutID');
            this.getEntitiesWithDevicesByLayoutID();
        });
    }
    getEntitiesWithDevicesByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {
                'entityType': ['ALL']
            };
            this.entityDeviceM = (yield this.entityService.getEntitiesWithDevicesByLayoutID(this.orgID, this.layoutID, requestBody, 'NO'));
            if (this.entityDeviceM) {
                this.drawChart();
            }
        });
    }
    drawChart() {
        const convertNode = (node) => ({
            name: node.name,
            children: node.children ? node.children.map(convertNode) : [],
            type: node.type
        });
        const chartData = convertNode(this.entityDeviceM);
        this.chartDataOption = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    id: 0,
                    name: 'Device',
                    data: [chartData],
                    top: '10%',
                    left: '15%',
                    bottom: '2%',
                    right: '15%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 999999,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left',
                            // color: 'green',
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        };
    }
}
ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$2.StorageService }, { token: EntityService }], target: i0.ɵɵFactoryTarget.Component });
ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ChartComponent, selector: "app-chart", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div echarts [options]=\"chartDataOption\"></div>\n            </div>\n        </div>\n    </div>\n</div>", directives: [{ type: i4$2.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-chart',
                    templateUrl: './chart.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$2.StorageService }, { type: EntityService }]; } });

const routes$9 = [
    {
        path: '',
        component: ChartComponent
    }
];
class ChartRoutingModule {
}
ChartRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ChartRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartRoutingModule, imports: [[RouterModule.forChild(routes$9)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$9)],
                    exports: [RouterModule]
                }]
        }] });

class ChartModule {
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, declarations: [ChartComponent], imports: [CommonModule,
        ChartRoutingModule, i4$2.NgxEchartsModule] });
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, imports: [[
            CommonModule,
            ChartRoutingModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            })
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ChartComponent
                    ],
                    imports: [
                        CommonModule,
                        ChartRoutingModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        })
                    ]
                }]
        }] });

// /tsc-library/
class ListComponent {
    constructor(router, activatedRoute, storageService, entityController, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.entityController = entityController;
        this.dialog = dialog;
        this.entities = [new ParameterEntity()];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.parent.parent.paramMap.subscribe((params) => {
            this.layoutID = params.get('layoutID');
            this.getEntitiesByLayoutID();
        });
    }
    getEntitiesByLayoutID() {
        this.entityController.getEntitiesByLayoutID(this.orgID, this.layoutID)
            .subscribe((entityTreeRes) => {
            this.entities = entityTreeRes;
        }, error => {
            console.log('error in getEntitiesByLayoutID() -', error);
        });
    }
    hasContent(entity) {
        return entity && entity.children && entity.children.length > 0;
    }
    mapDevice(entityID) {
        this.router.navigate([`layout/${this.layoutID}/entity/${entityID}/map-device/add`]);
    }
    viewMappedDevice(entityID) {
        this.router.navigate([`layout/${this.layoutID}/entity/${entityID}/map-device/view`]);
    }
    openEntityDialog(entityID, action) {
        const dialog = this.dialog.open(CreateUpdateEntityComponent, {
            data: {
                action: action,
                entityID: entityID,
                layoutID: this.layoutID,
            },
            minWidth: '500px',
            maxWidth: '500px',
        });
        dialog.afterClosed()
            .subscribe((result) => {
            if (result == DialogEnum.SUCCESS_DR) {
                this.getEntitiesByLayoutID();
            }
        });
    }
    openDeleteDialog(entityID, entityName) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete entity?',
                body: 'This will delete the entity <b>' + entityName + '</b> and all its children entities.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteEntity(entityID);
            }
        });
    }
    deleteEntity(entityID) {
        this.entityController.deleteEntity(this.orgID, this.layoutID, entityID).subscribe((deleteRes) => {
            this.getEntitiesByLayoutID();
        });
    }
}
ListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListComponent, deps: [{ token: i1$1.Router }, { token: i1$1.ActivatedRoute }, { token: i1$2.StorageService }, { token: EntityController }, { token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
ListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ListComponent, selector: "app-list", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <!-- template call for entityTemplate -->\n                <mat-accordion>\n                    <ng-container *ngFor=\"let entity of entities\">\n                        <ng-container *ngTemplateOutlet=\"entityTemplate; \n                            context: {\n                                entity: entity,\n                                panelTitleClass: 'fw-bold',\n                                expansionPanelClass : 'cardBackgroundColor',\n                                expanded: hasContent(entity),\n                                allowUpdateDelete: false\n                            }\">\n                        </ng-container>\n                    </ng-container>\n                </mat-accordion>\n                <!-- /template call for entityTemplate/ -->\n\n                <!-- template for recursive entity -->\n                <ng-template #entityTemplate let-entity=\"entity\" let-panelTitleClass=\"panelTitleClass\"\n                    let-expansionPanelClass=\"expansionPanelClass\" let-expanded=\"expanded\" let-allowUpdateDelete=\"allowUpdateDelete\">\n                    <mat-expansion-panel class=\"mt-2 cardOverwrite\" [class]=\"expansionPanelClass\" [expanded]=\"expanded\"\n                        [disabled]=\"!hasContent(entity)\" [hideToggle]=\"!hasContent(entity)\">\n\n                        <mat-expansion-panel-header class=\"matAccRightAlignedHeader\">\n                            <mat-panel-title>\n                                <div class=\"d-flex align-items-center\">\n                                    <span [class]=\"panelTitleClass\">\n                                        {{ entity.name }}\n                                    </span> <span class=\"badge rounded-pill info ms-2\">\n                                        {{ entity.type }}\n                                    </span>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description class=\"float-end\">\n                                <span class=\"material-symbols-outlined text-primary me-3\" #tooltip=\"matTooltip\" matTooltipPosition=\"above\"\n                                    matTooltipClass=\"nameTooltip\" matTooltip=\"Add entity\"\n                                    (click)=\"openEntityDialog(entity.id, 'create'); $event.stopPropagation()\">\n                                    add_circle\n                                </span>\n                                <span class=\"material-symbols-outlined text-primary me-3\" #tooltip=\"matTooltip\" matTooltipPosition=\"above\"\n                                    matTooltipClass=\"nameTooltip\" matTooltip=\"Map device\" (click)=\"mapDevice(entity.id); $event.stopPropagation()\">\n                                    devices\n                                </span>\n                                <span class=\"material-symbols-outlined text-secondary me-3\" #tooltip=\"matTooltip\"\n                                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"View mapped device\"\n                                    (click)=\"viewMappedDevice(entity.id); $event.stopPropagation()\">\n                                    visibility\n                                </span>\n                                <span class=\"material-symbols-outlined text-secondary me-3\" *ngIf=\"allowUpdateDelete\" #tooltip=\"matTooltip\"\n                                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Edit entity\"\n                                    (click)=\"openEntityDialog(entity.id, 'update'); $event.stopPropagation()\">\n                                    edit_square\n                                </span>\n                                <span class=\"material-symbols-outlined text-danger me-3\" *ngIf=\"allowUpdateDelete\" #tooltip=\"matTooltip\"\n                                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Delete entity\"\n                                    (click)=\"openDeleteDialog(entity.id, entity.name); $event.stopPropagation()\">\n                                    delete\n                                </span>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n\n                        <ng-container *ngIf=\"entity.children && entity.children.length > 0\">\n                            <ng-container *ngFor=\"let child of entity.children\">\n                                <ng-container *ngTemplateOutlet=\"entityTemplate; \n                                        context:{ \n                                            entity: child,\n                                            panelTitleClass: 'text-dark',\n                                            expansionPanelClass : 'border',\n                                            expanded: 'false',\n                                            allowUpdateDelete: true\n                                        }\">\n                                </ng-container>\n                            </ng-container>\n                        </ng-container>\n\n                    </mat-expansion-panel>\n                </ng-template>\n                <!-- /template for recursive entity/ -->\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i5$1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i5$1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }], directives: [{ type: i5$1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i5$1.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i5$1.MatExpansionPanelDescription, selector: "mat-panel-description" }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-list',
                    templateUrl: './list.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }, { type: i1$2.StorageService }, { type: EntityController }, { type: i1$3.MatDialog }]; } });

const routes$8 = [
    {
        path: '',
        component: ListComponent
    }
];
class ListRoutingModule {
}
ListRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ListRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListRoutingModule, imports: [[RouterModule.forChild(routes$8)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$8)],
                    exports: [RouterModule]
                }]
        }] });

class ListModule {
}
ListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, declarations: [ListComponent], imports: [CommonModule,
        ListRoutingModule,
        CreateUpdateEntityModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatExpansionModule] });
ListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, imports: [[
            CommonModule,
            ListRoutingModule,
            CreateUpdateEntityModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatIconModule,
            MatFormFieldModule,
            MatButtonModule,
            MatTooltipModule,
            MatDialogModule,
            MatExpansionModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ListComponent
                    ],
                    imports: [
                        CommonModule,
                        ListRoutingModule,
                        CreateUpdateEntityModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatIconModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatExpansionModule
                    ]
                }]
        }] });

const routes$7 = [];
class TabRoutingModule {
}
TabRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
TabRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabRoutingModule, imports: [[RouterModule.forChild(routes$7)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$7)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class TabComponent {
    constructor(router, activatedRoute, storageService, layoutService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.layoutService = layoutService;
        this.layoutM = new Layout();
        this.tab = [];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.paramMap.subscribe((params) => {
            this.layoutID = params.get('layoutID');
            this.getLayoutByID();
            this.tab = [
                {
                    icon: 'list',
                    label: 'List Representation',
                    routerLink: `/layout/${this.layoutID}/list`
                },
                {
                    icon: 'grid_view',
                    label: 'Chart Representation',
                    routerLink: `/layout/${this.layoutID}/chart`
                }
            ];
            this.setActiveLink();
        });
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setActiveLink();
            }
        });
    }
    getLayoutByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.layoutM = (yield this.layoutService.getLayoutByID(this.orgID, this.layoutID));
        });
    }
    setActiveLink() {
        let currentPath = window.location.pathname;
        for (let i = 0; i < this.tab.length; i++) {
            if (currentPath.includes(this.tab[i].routerLink)) {
                this.activeLink = this.tab[i].routerLink;
                break;
            }
        }
    }
}
TabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabComponent, deps: [{ token: i1$1.Router }, { token: i1$1.ActivatedRoute }, { token: i1$2.StorageService }, { token: i5.LayoutService }], target: i0.ɵɵFactoryTarget.Component });
TabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TabComponent, selector: "app-tab", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Layout <span *ngIf=\"layoutM\">\n                    - ({{ layoutM?.name }})\n                </span></div>\n        </div>\n    </div>\n\n    <nav mat-tab-nav-bar>\n        <ng-container *ngFor=\"let tabs of tab; let i = index;\">\n            <a mat-tab-link [routerLink]=\"tabs.routerLink\" (click)=\"activeLink = tabs.routerLink\"\n                [active]=\"activeLink == tabs.routerLink\">\n                <div class=\"d-flex align-items-center\">\n                    <span class=\"material-symbols-outlined me-2\">\n                        {{ tabs.icon }}\n                    </span>\n                    {{ tabs.label }}\n                </div>\n            </a>\n        </ng-container>\n    </nav>\n    <router-outlet></router-outlet>\n\n</div>", components: [{ type: i2$2.MatTabNav, selector: "[mat-tab-nav-bar]", inputs: ["color"], exportAs: ["matTabNavBar", "matTabNav"] }], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2$2.MatTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matTabLink"] }, { type: i1$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-tab',
                    templateUrl: './tab.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }, { type: i1$2.StorageService }, { type: i5.LayoutService }]; } });

class TabModule {
}
TabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabModule, declarations: [TabComponent], imports: [CommonModule,
        TabRoutingModule,
        NgbModule,
        MatTabsModule] });
TabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabModule, imports: [[
            CommonModule,
            TabRoutingModule,
            NgbModule,
            MatTabsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TabComponent
                    ],
                    imports: [
                        CommonModule,
                        TabRoutingModule,
                        NgbModule,
                        MatTabsModule,
                    ]
                }]
        }] });

// /tsc-library/
class AddComponent {
    constructor(activatedRoute, storageService, tscCommonService, entityService, deviceController, sourceController, deviceMappingFB, dialog) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.tscCommonService = tscCommonService;
        this.entityService = entityService;
        this.deviceController = deviceController;
        this.sourceController = sourceController;
        this.deviceMappingFB = deviceMappingFB;
        this.dialog = dialog;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.searchArr = [];
        this.dataSource = [];
        this.searchFlag = false;
        this.resultLength = 0;
        this.isEqual = true;
        this.showEdit = false;
        this.allowBackendCall = true;
        this.entityM = new Entity();
        this.sourceConsumerConfiguredM = new SourceConsumerConfigure();
        this.initialMappingRecords = {};
        this.displayedColumn = ['mapDevice', 'id', 'name', 'make', 'model', 'type'];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.params.subscribe((param) => {
            this.layoutID = param.layoutID;
            this.entityID = param.entityID;
            this.getEntityByID();
        });
        this.getSourceConsumerConfig();
        this.deviceMappingInit();
    }
    getSourceConsumerConfig() {
        this.sourceController.getSourceConsumerConfig(this.orgID).subscribe((res) => {
            this.sourceConsumerConfiguredM = res;
            this.redirectUrl = this.getRedirectUrl();
        }, error => console.log('Error:', error));
    }
    getRedirectUrl() {
        if (!this.sourceConsumerConfiguredM.sourceTypeConfigured) {
            return 'preference/source/create';
        }
        if (!this.sourceConsumerConfiguredM.consumerTypeConfigured) {
            return 'preference/consumer/create';
        }
        return 'preference/source/page';
    }
    getEntityByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = yield this.entityService.getEntityByID(this.orgID, this.layoutID, this.entityID);
        });
    }
    deviceMappingInit() {
        this.deviceMappingFG = this.deviceMappingFB.group({
            deviceRecords: this.deviceMappingFB.array([])
        });
    }
    get deviceRecords() {
        return this.deviceMappingFG.get('deviceRecords');
    }
    ngAfterViewInit() {
        merge(this.paginator.page, this.sort.sortChange, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), filter(() => this.handleBackendTrigger()), switchMap(() => this.getUnmappedDevice())).subscribe();
    }
    getUnmappedDevice() {
        this.deviceMappingFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.deviceMappingFG.value);
        });
        this.searchArr = [];
        if (this.searchFlag) {
            this.searchArr.push('name:' + this.searchValue);
        }
        return this.deviceController.getUnMappedDevices(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.searchArr, this.orgID, this.layoutID, this.entityID).pipe(catchError(() => of(null)), map((response) => {
            if (response == null) {
                this.resultLength = 0;
                return [];
            }
            this.resultLength = response["totalCount"];
            return response["records"];
        }), tap((dataSource) => {
            this.dataSource = dataSource;
            this.deviceMappingFG.reset();
            this.deviceRecords.clear();
            dataSource.forEach((record, index) => {
                this.deviceRecords.push(this.deviceMappingFB.group({
                    id: [record.id],
                    isDeviceMapped: [false],
                    type: [record.type],
                    parameter: [record.parameter],
                    mappingRecords: this.deviceMappingFB.array([])
                }));
            });
            this.intialObject = this.deviceMappingFG.value;
            this.isEqual = true;
        }));
    }
    handleBackendTrigger() {
        if (this.intialObject != undefined && !isEqual(this.intialObject, this.deviceMappingFG.value)) {
            this.openConfirmationDialog();
            return false;
        }
        return true;
    }
    openConfirmationDialog() {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.CONFIRMATION,
                icon: 'warning',
                header: 'Confirm?',
                body: 'Changes made will not be saved. Are you sure you want to proceed?',
                buttonOne: ButtonLabelEnum.NO_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.YES_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            this.allowBackendCall = res;
            if (this.allowBackendCall == true) {
                this.deviceMappingFG.reset();
                this.getUnmappedDevice().subscribe();
            }
            else {
                this.searchBar.searchClear();
            }
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
    onCheckboxChange(index, isChecked) {
        const deviceGroup = this.deviceRecords.at(index);
        deviceGroup.get('isDeviceMapped').setValue(isChecked);
        if (isChecked) {
            if (deviceGroup.get('isDeviceMapped').value && deviceGroup.get('type').value == 'METER' && deviceGroup.get('parameter').value.length > 0) {
                this.openSourceLoadDialog(deviceGroup.value);
            }
        }
        else {
            const mappingRecordsArray = deviceGroup.get('mappingRecords');
            mappingRecordsArray.clear();
        }
    }
    openSourceLoadDialog(device) {
        const dialog = this.dialog.open(SourceLoadComponent, {
            data: {
                deviceInfo: device,
                entityID: this.entityID
            },
            minWidth: '40vw',
            maxWidth: '40vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });
        dialog.afterClosed()
            .subscribe((dialogRes) => {
            const deviceIndex = this.findIndexByDeviceID(device.id);
            if (dialogRes && dialogRes.sourceLoadMappingRes) {
                if (deviceIndex != -1) {
                    const deviceRecordsControl = this.deviceMappingFG.get('deviceRecords');
                    const mappingRecordsControl = deviceRecordsControl.at(deviceIndex).get('mappingRecords');
                    mappingRecordsControl.clear();
                    dialogRes.sourceLoadMappingRes.forEach(mappingItem => {
                        const parameterID = mappingItem.parameterID;
                        const mappings = mappingItem.mapping.map(mapping => {
                            return this.deviceMappingFB.group(mapping);
                        });
                        const mappingGroup = this.deviceMappingFB.group({
                            parameterID,
                            mapping: this.deviceMappingFB.array(mappings)
                        });
                        mappingRecordsControl.push(mappingGroup);
                    });
                }
            }
            if (dialogRes && dialogRes.sourceLoadMappingRes.length == 0) {
                if (deviceIndex != -1) {
                    const isDeviceMappedControl = this.deviceMappingFG.get('deviceRecords')['controls'][deviceIndex].get('isDeviceMapped');
                    isDeviceMappedControl.setValue(false);
                }
            }
        });
    }
    findIndexByDeviceID(id) {
        return this.deviceMappingFG.get('deviceRecords')['controls']
            .findIndex((d) => d.value.id == id);
    }
    saveDeviceMapping() {
        const deviceRecordsArray = this.deviceMappingFG.get('deviceRecords');
        deviceRecordsArray.controls.forEach((deviceGroup) => {
            const isDeviceMapped = deviceGroup.get('isDeviceMapped').value;
            const type = deviceGroup.get('type').value;
            const mappingRecordsControl = deviceGroup.get('mappingRecords');
            if (type == 'METER' && !isDeviceMapped) {
                mappingRecordsControl.clear();
            }
            deviceGroup.removeControl('parameter');
        });
        this.deviceController.saveDeviceMapping(this.orgID, this.layoutID, this.entityID, this.deviceMappingFG.getRawValue()).subscribe((mappedDevicesRes) => {
            this.tscCommonService.back();
        }, error => {
            console.log('error in saveDeviceMapping() - ', error);
        });
    }
}
AddComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$2.StorageService }, { token: i3.TSCCommonService }, { token: EntityService }, { token: DeviceController }, { token: SourceController }, { token: i2$1.FormBuilder }, { token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
AddComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AddComponent, selector: "app-add", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Map Devices <span *ngIf=\"entityM\">\n                    - ({{ entityM?.name }})\n                </span></div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"device name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n                <a [routerLink]=\"'/layout/' + layoutID + '/entity/' + entityID + '/map-device/view'\">View mapped devices</a>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <form [formGroup]=\"deviceMappingFG\">\n        <div class=\"overflowX customScrollBar w-100\">\n            <table mat-table class=\"w-100\" [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"name\"\n                matSortDirection=\"asc\" matSortDisableClear>\n\n                <ng-container matColumnDef=\"mapDevice\">\n                    <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef> Map device </th>\n                    <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row; let i = index\">\n                        <div class=\"d-flex align-items-center\">\n                            <mat-checkbox [formControl]=\"deviceRecords?.at(i)?.get('isDeviceMapped')\"\n                                [disabled]=\"row.type == 'METER' && (!sourceConsumerConfiguredM.sourceTypeConfigured || !sourceConsumerConfiguredM.consumerTypeConfigured)\"\n                                (change)=\"onCheckboxChange(i, $event.checked)\"></mat-checkbox>\n\n                            <span\n                                *ngIf=\"row.type == 'METER' && (!sourceConsumerConfiguredM.sourceTypeConfigured || !sourceConsumerConfiguredM.consumerTypeConfigured)\"\n                                [popover]=\"infoPopover\" popoverPlacement=\"right\" [popoverOnHover]=\"false\" [popoverAnimation]=\"true\">\n                                <span class=\"material-symbols-outlined fontSize cursorPointer mt-2 ms-2\">\n                                    info\n                                </span>\n                            </span>\n\n                            <popover-content #infoPopover [animation]=\"true\" [closeOnClickOutside]=\"true\">\n                                <span>Click <a [href]=\"redirectUrl\">here </a>to set preferences</span>\n                            </popover-content>\n\n                            <span *ngIf=\"deviceRecords?.at(i)?.get('mappingRecords').length > 0\"\n                                class=\"material-symbols-outlined text-secondary fontSize cursorPointer ms-5\" #tooltip=\"matTooltip\"\n                                matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Update source/consumer\"\n                                (click)=\"this.openSourceLoadDialog(deviceRecords?.at(i).value)\">\n                                edit_square\n                            </span>\n                        </div>\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"id\">\n                    <th class=\"columnWidth2\" mat-header-cell *matHeaderCellDef>\n                        Device ID\n                    </th>\n                    <td class=\"columnWidth2\" mat-cell *matCellDef=\"let row\">\n                        {{ row['id'] }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"name\">\n                    <th class=\"columnWidth3\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear> Name </th>\n                    <td class=\"columnWidth3\" mat-cell *matCellDef=\"let row\"> <span\n                            [matTooltip]=\"row?.['name']?.length>24? row['name']: ''\" matTooltipPosition=\"above\"\n                            matTooltipClass=\"nameTooltip\">\n                            {{ row.name | dotdotdot:24 }}\n                        </span>\n                        <button [cdkCopyToClipboard]=\"row.name\" matSuffix mat-icon-button type=\"button\">\n                            <span class=\"material-symbols-outlined fs-5\" mat-raised-button matTooltipPosition=\"right\"\n                                matTooltip=\"copy\">\n                                content_copy\n                            </span>\n                        </button>\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"make\">\n                    <th class=\"columnWidth4\" mat-header-cell *matHeaderCellDef> Make </th>\n                    <td class=\"columnWidth4\" mat-cell *matCellDef=\"let row\"\n                        [matTooltip]=\"row?.['make']?.length>15? row['make']: ''\" matTooltipPosition=\"above\"\n                        matTooltipClass=\"nameTooltip\">\n                        {{ row?.['make'] | dotdotdot:15 }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"model\">\n                    <th class=\"columnWidth4\" mat-header-cell *matHeaderCellDef> Model </th>\n                    <td class=\"columnWidth4\" mat-cell *matCellDef=\"let row\"\n                        [matTooltip]=\"row?.['model']?.length>15? row['model']: ''\" matTooltipPosition=\"above\"\n                        matTooltipClass=\"nameTooltip\">\n                        {{ row?.['model'] | dotdotdot:15 }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"type\">\n                    <th class=\"columnWidth4\" mat-header-cell *matHeaderCellDef> Type </th>\n                    <td class=\"columnWidth4\" mat-cell *matCellDef=\"let row\">\n                        {{ row.type | titlecase }}\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumn; sticky: true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\"></tr>\n\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                        {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n        <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n            [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n        </mat-paginator>\n    </form>\n\n    <div align=\"end\">\n        <button type=\"submit\" class=\"btn btn-sm btn-success me-3 mb-2\" [ngClass]=\"{'disabled': isEqual}\"\n            (click)=\"saveDeviceMapping()\">\n            {{ ButtonLabelEnum.SAVE_BTN_LABEL }}\n        </button>\n    </div>\n\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:140px}.columnWidth3{min-width:180px}.columnWidth4{min-width:140px}.badge{font-weight:bold;font-size:1em;text-transform:lowercase}.fontSize{font-size:20px}\n"], components: [{ type: i3.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear", "emitValueOnChange"], outputs: ["emitSearch"] }, { type: i7$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10$3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i11$2.PopoverContentComponent, selector: "popover-content", inputs: ["placement", "animation", "closeOnClickOutside", "closeOnMouseOutside", "appendToBody", "size", "content", "title", "parentClass"] }, { type: i8.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i7$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i7$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9$2.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i8.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i7$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i7$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i7$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i7$1.MatCellDef, selector: "[matCellDef]" }, { type: i7$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i11$2.PopoverDirective, selector: "[popover]", inputs: ["popoverOnHover", "popoverDismissTimeout", "popover", "popoverSize", "popoverDisabled", "popoverAnimation", "popoverPlacement", "popoverTitle", "popoverCloseOnClickOutside", "popoverCloseOnMouseOutside", "appendToBody"], outputs: ["onShown", "onHidden"], exportAs: ["popover"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i17.CdkCopyToClipboard, selector: "[cdkCopyToClipboard]", inputs: ["cdkCopyToClipboard", "cdkCopyToClipboardAttempts"], outputs: ["cdkCopyToClipboardCopied"] }, { type: i7$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i7$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i7$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "dotdotdot": i3.EllipsisPipeService, "titlecase": i14.TitleCasePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-add',
                    templateUrl: './add.component.html',
                    styleUrls: ['./add.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$2.StorageService }, { type: i3.TSCCommonService }, { type: EntityService }, { type: DeviceController }, { type: SourceController }, { type: i2$1.FormBuilder }, { type: i1$3.MatDialog }]; }, propDecorators: { sort: [{
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

const routes$6 = [
    {
        path: '',
        component: AddComponent
    }
];
class AddRoutingModule {
}
AddRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AddRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
AddRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddRoutingModule, imports: [[RouterModule.forChild(routes$6)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$6)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class AddModule {
}
AddModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AddModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddModule, declarations: [AddComponent], imports: [CommonModule,
        AddRoutingModule,
        SourceLoadModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        MatCheckboxModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        ClipboardModule,
        PopoverModule] });
AddModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddModule, imports: [[
            CommonModule,
            AddRoutingModule,
            SourceLoadModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatDialogModule,
            MatTooltipModule,
            MatCheckboxModule,
            SearchBarOneModule,
            EllipsisPipeModule,
            ClipboardModule,
            PopoverModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AddComponent
                    ],
                    imports: [
                        CommonModule,
                        AddRoutingModule,
                        SourceLoadModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatTableModule,
                        MatSortModule,
                        MatPaginatorModule,
                        MatDialogModule,
                        MatTooltipModule,
                        MatCheckboxModule,
                        SearchBarOneModule,
                        EllipsisPipeModule,
                        ClipboardModule,
                        PopoverModule
                    ]
                }]
        }] });

// /tsc-library/
class ViewComponent {
    constructor(activatedRoute, storageService, deviceController, entityService, dialog) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.deviceController = deviceController;
        this.entityService = entityService;
        this.dialog = dialog;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.searchArr = [];
        this.dataSource = [];
        this.searchFlag = false;
        this.resultLength = 0;
        this.displayedColumn = ['checkbox', 'body', 'delete'];
        this.allDeviceIDs = [];
        this.selection = new SelectionModel(true, []);
        this.entityM = new Entity();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.params.subscribe((param) => {
            this.layoutID = param.layoutID;
            this.entityID = param.entityID;
            this.getEntityByID();
        });
    }
    getEntityByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = yield this.entityService.getEntityByID(this.orgID, this.layoutID, this.entityID);
        });
    }
    ngAfterViewInit() {
        this.selection.clear();
        merge(this.paginator.page, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), switchMap(() => {
            this.searchArr = [];
            if (this.searchFlag) {
                this.searchArr.push('name:' + this.searchValue);
            }
            return this.deviceController.getMappedDevices(this.paginator.pageIndex, this.paginator.pageSize, this.searchArr, this.orgID, this.layoutID, this.entityID).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.resultLength = 0;
                return [];
            }
            this.resultLength = response["totalCount"];
            return response["records"];
        })).subscribe((dataSource) => {
            this.dataSource = dataSource;
            dataSource.forEach((record) => {
                this.allDeviceIDs.push(record.id);
            });
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
    selectAll() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.allDeviceIDs);
    }
    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return selected == numRows;
    }
    openSourceLoadDialog(device) {
        const dialog = this.dialog.open(SourceLoadComponent, {
            data: {
                deviceInfo: device,
                layoutID: this.layoutID,
                entityID: this.entityID,
                updateFromDialog: true
            },
            minWidth: '600px',
            maxWidth: '600px',
        });
        dialog.afterClosed()
            .subscribe((dialogRes) => {
            if (dialogRes && dialogRes.result == DialogEnum.SUCCESS_DR && dialogRes.action == FormAction.UPDATE) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }
    openDeleteDialog(actionType, id, name) {
        let entityName = this.entityM.name;
        let bodyText;
        if (actionType == 'BULK_DELETE' && !this.isAllSelected()) {
            bodyText = 'From <b>' + entityName + '</b> entity, mapping of devices <b> ' + this.selection.selected.join(', ') + '</b>' + ' will be removed.</br></br>Are you sure you want to continue?';
        }
        else if (actionType == 'BULK_DELETE' && this.isAllSelected()) {
            bodyText = 'From <b>' + entityName + '</b> entity, all mapped devices will be removed.</br></br>Are you sure you want to continue?';
        }
        else {
            bodyText = 'From <b>' + entityName + '</b> entity, mapping of device <b> ' + name + '</b>' + ' will be removed.</br></br>Are you sure you want to continue?';
        }
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete device mapping?',
                body: bodyText,
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                if (actionType == 'BULK_DELETE' && !this.isAllSelected()) {
                    this.deleteDeviceMapping(this.selection.selected);
                }
                else if (actionType == 'BULK_DELETE' && this.isAllSelected()) {
                    this.deleteDeviceMapping(this.allDeviceIDs);
                }
                else {
                    this.deleteDeviceMapping(id);
                }
            }
        });
    }
    deleteDeviceMapping(deviceID) {
        this.deviceController.deleteDeviceMapping(this.orgID, this.layoutID, this.entityID, deviceID).subscribe((deleteRes) => {
            this.refreshBtn.nativeElement.click();
        });
    }
}
ViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$2.StorageService }, { token: DeviceController }, { token: EntityService }, { token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
ViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ViewComponent, selector: "app-view", viewQueries: [{ propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">View Mapped Devices <span *ngIf=\"entityM\">\n                    - ({{ entityM?.name }})\n                </span></div>\n        </div>\n\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-2\" #searchBar searchBy=\"device name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n                <div class=\"me-2 btn-group\" ngbDropdown placement=\"bottom-right\">\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-sm btn-primary\"\n                        [ngClass]=\"{'disableButton': selection.selected.length == 0}\"\n                        [disabled]=\"selection.selected.length == 0\">\n                        Bulk action\n                    </button>\n                    <div ngbDropdownMenu>\n                        <button class=\"btn btn-outline-danger rounded-0 dropdown-item\"\n                            (click)=\"openDeleteDialog('BULK_DELETE')\">\n                            Delete\n                        </button>\n                    </div>\n                </div>\n                <a [routerLink]=\"'/layout/' + layoutID + '/entity/' + entityID + '/map-device/add'\">Map devices</a>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <table mat-table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"checkbox\">\n            <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? selectAll() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\" [disabled]=\"dataSource.length == 0\">\n                    Select all\n                </mat-checkbox>\n            </th>\n            <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row; let i = index;\" class=\"text-start\">\n                <mat-checkbox (change)=\"$event ? selection.toggle(row.id) : null\"\n                    [checked]=\"selection.isSelected(row.id)\"></mat-checkbox>\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"body\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td class=\"px-3\" mat-cell *matCellDef=\"let row\">\n                <div class=\"pt-3 pb-3\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <mat-card class=\"card main-card border cardOverwrite\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <span class=\"card-title sectionTitle\">\n                                            Devices\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"row pt-2\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-3\">\n                                                ID\n                                            </div>\n                                            <div class=\"col-sm-8 fw-bold\">\n                                                {{ row.id }}\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-3\">\n                                                Name\n                                            </div>\n                                            <div class=\"col-sm-8 fw-bold\"\n                                                [matTooltip]=\"row?.['name']?.length>20? row['name']: ''\"\n                                                matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                                                {{ row.name | dotdotdot:20 }}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row pt-2\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-3\">\n                                                Make\n                                            </div>\n                                            <div class=\"col-sm-8 fw-bold\">\n                                                {{ row.make }}\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-3\">\n                                                Model\n                                            </div>\n                                            <div class=\"col-sm-8 fw-bold\">\n                                                {{ row.model }}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row pt-2\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-3\">\n                                                Type\n                                            </div>\n                                            <div class=\"col-sm-8 fw-bold\">\n                                                {{ row.type | titlecase }}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </mat-card>\n                        </div>\n                    </div>\n\n                    <div class=\"row pt-3\" *ngIf=\"row.mappingRecords && row.mappingRecords.length > 0\">\n                        <div class=\"col-sm-12\">\n                            <mat-card class=\"card main-card border cardOverwrite\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <span class=\"card-title sectionTitle\">\n                                            Device property\n                                        </span>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <span class=\"material-symbols-outlined text-secondary float-end cursorPointer\"\n                                            matTooltipPosition=\"above\" matTooltip=\"Edit\"\n                                            (click)=\"openSourceLoadDialog(row)\">\n                                            edit_square\n                                        </span>\n                                    </div>\n                                </div>\n\n                                <div class=\"row pt-2\">\n                                    <div class=\"col-sm-6\" *ngFor=\"let mapping of row.mappingRecords\">\n                                        Parameter Name: <span class=\"fw-bold\">\n                                            {{ mapping?.parameterName }}\n                                        </span>\n\n                                        <div *ngFor=\"let sourceLoad of mapping?.mapping\">\n                                            <div class=\"row mt-2\">\n                                                <div class=\"col-sm-3\" *ngIf=\"sourceLoad?.type == 'SOURCE'\">\n                                                    Source\n                                                </div>\n                                                <div class=\"col-sm-3\" *ngIf=\"sourceLoad?.type == 'LOAD'\">\n                                                    Load\n                                                </div>\n                                                <div class=\"col-sm-6\">\n                                                    <span class=\"fw-bold\">{{ sourceLoad?.name }}</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </mat-card>\n                        </div>\n                    </div>\n                </div>\n\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"delete\">\n            <th class=\"columnWidth2\" mat-header-cell *matHeaderCellDef></th>\n            <td class=\"columnWidth2\" mat-cell *matCellDef=\"let row\">\n                <span class=\"material-symbols-outlined text-danger float-end\"\n                    [ngClass]=\"{'text-danger cursorPointer': selection.selected.length == 0, 'text-secondary': selection.selected.length > 0}\"\n                    matTooltipPosition=\"above\" [matTooltip]=\"selection.selected.length == 0 ? 'Remove mapping': ''\"\n                    (click)=\"selection.selected.length == 0 && openDeleteDialog('SINGLE_DELETE', row.id, row.name)\">\n                    delete\n                </span>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumn; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\"></tr>\n\n        <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n            </td>\n        </tr>\n    </table>\n\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{width:140px}.columnWidth2{width:120px}.badge{font-weight:bold;font-size:1em;text-transform:lowercase}\n"], components: [{ type: i3.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear", "emitValueOnChange"], outputs: ["emitSearch"] }, { type: i7$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10$3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i7$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i7$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9$2.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i12.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i12.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i12.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i1$1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i7$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i7$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i7$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i7$1.MatCellDef, selector: "[matCellDef]" }, { type: i7$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i7$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i7$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i3.EllipsisPipeService, "titlecase": i14.TitleCasePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-view',
                    templateUrl: './view.component.html',
                    styleUrls: ['./view.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$2.StorageService }, { type: DeviceController }, { type: EntityService }, { type: i1$3.MatDialog }]; }, propDecorators: { paginator: [{
                type: ViewChild,
                args: ['paginator']
            }], refreshBtn: [{
                type: ViewChild,
                args: ['refreshBtn']
            }], searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }] } });

const routes$5 = [
    {
        path: '',
        component: ViewComponent
    }
];
class ViewRoutingModule {
}
ViewRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ViewRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ViewRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewRoutingModule, imports: [[RouterModule.forChild(routes$5)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$5)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ViewModule {
}
ViewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ViewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, declarations: [ViewComponent], imports: [NgbModule,
        CommonModule,
        ViewRoutingModule,
        SourceLoadModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        MatCheckboxModule,
        SearchBarOneModule,
        EllipsisPipeModule] });
ViewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, imports: [[
            NgbModule,
            CommonModule,
            ViewRoutingModule,
            SourceLoadModule,
            MatCardModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule,
            MatTableModule,
            MatPaginatorModule,
            MatDialogModule,
            MatTooltipModule,
            MatCheckboxModule,
            SearchBarOneModule,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ViewComponent
                    ],
                    imports: [
                        NgbModule,
                        CommonModule,
                        ViewRoutingModule,
                        SourceLoadModule,
                        MatCardModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatDialogModule,
                        MatTooltipModule,
                        MatCheckboxModule,
                        SearchBarOneModule,
                        EllipsisPipeModule
                    ]
                }]
        }] });

// /tsc-library/
class ConsumerController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    createConsumerType(orgID, consumer) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types`, consumer);
    }
    getConsumerTypeByID(orgID, consumerID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`);
    }
    updateConsumerType(orgID, consumerID, consumer) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`, consumer);
    }
    deleteConsumerType(orgID, consumerID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`);
    }
    getConsumerTypeByPage(pageNo, pageSize, sortBy, orderBy, searchValue, filterArr, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }
        filterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/page`, { params: params });
    }
}
ConsumerController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ConsumerController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

// /tsc-library/
class ConsumerCreateUpdateComponent {
    constructor(data, dialogRef, renderer, formBuilder, storageService, toastrService, tscCommonService, sourceService, consumerController) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.renderer = renderer;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.tscCommonService = tscCommonService;
        this.sourceService = sourceService;
        this.consumerController = consumerController;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.PageTitleEnum = PageTitleEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.isEqual = true;
        this.pageTitle = 'Consumer type';
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
        this.action = data.action;
        this.consumerID = data.consumerID;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getUtilitySourceAndType();
        this.consumerFGInit();
        if (this.action == FormAction.UPDATE) {
            this.getConsumerTypeByID(this.consumerID);
        }
    }
    ngAfterViewInit() {
        this.heightHandler();
    }
    heightHandler() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';
        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }
    getUtilitySourceAndType() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.sourceService.getUtilitySourceAndType(this.orgID);
            this.utilitySourceTypeM = result.utilitySource;
        });
    }
    consumerFGInit() {
        this.consumerFG = this.formBuilder.group({
            name: [, [Validators.required]],
            utilitySourceID: [, [Validators.required]],
            type: [, [Validators.required]]
        });
    }
    consumerSubmit() {
        if (this.consumerFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            if (this.action == FormAction.CREATE) {
                this.createConsumerType();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateConsumerType();
            }
        }
    }
    createConsumerType() {
        this.consumerController.createConsumerType(this.orgID, this.consumerFG.value).subscribe((res) => {
            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            };
            this.dialogRef.close(result);
        }, error => {
            console.log('error in createConsumerType -', error);
        });
    }
    getConsumerTypeByID(consumerID) {
        this.consumerController.getConsumerTypeByID(this.orgID, consumerID).subscribe((res) => {
            this.consumerM = res;
            this.patchConsumer(this.consumerM);
        }, error => {
            console.log('error in getConsumerTypeByID -', error);
        });
    }
    patchConsumer(consumer) {
        this.consumerFG.patchValue(consumer);
        this.intialObject = this.consumerFG.value;
        this.consumerFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.consumerFG.value);
        });
    }
    updateConsumerType() {
        this.consumerController.updateConsumerType(this.orgID, this.consumerID, this.consumerFG.value).subscribe((res) => {
            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            };
            this.dialogRef.close(result);
        }, error => {
            console.log('error in updateConsumerType -', error);
        });
    }
}
ConsumerCreateUpdateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$3.MatDialogRef }, { token: i0.Renderer2 }, { token: i2$1.FormBuilder }, { token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: i3.TSCCommonService }, { token: SourceService }, { token: ConsumerController }], target: i0.ɵɵFactoryTarget.Component });
ConsumerCreateUpdateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumerCreateUpdateComponent, selector: "lib-create-update", viewQueries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "footer", first: true, predicate: ["footer"], descendants: true }, { propertyName: "body", first: true, predicate: ["body"], descendants: true }], ngImport: i0, template: "<div class=\"headerContainer p-0\" #header>\n    <div class=\"headerLeftContainer\">\n        <div class=\"pageTitle\">{{ action == FormAction.CREATE ? PageTitleEnum.CREATE :\n            PageTitleEnum.UPDATE }} {{ pageTitle }}</div>\n    </div>\n\n    <div class=\"headerRightContainer\">\n        <div class=\"headerRightContainerInner\">\n            <button class=\"btn btn-sm centerAlign py-1 iconBtn\" matRipple\n                [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                [matTooltip]=\"ButtonTooltipEnum.CLOSE\" mat-dialog-close>\n                <span class=\"material-symbols-outlined\">\n                    close\n                </span>\n            </button>\n        </div>\n    </div>\n</div>\n\n<mat-dialog-content class=\"mat-typography customScrollBar pt-2\" #body>\n    <form [formGroup]=\"consumerFG\" (ngSubmit)=\"consumerSubmit()\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Name</mat-label>\n                    <input class=\"formPlaceholder\" type=\"text\" placeholder=\"Name\" matInput formControlName=\"name\"\n                        required />\n                    <mat-error *ngIf=\"errorHandling(consumerFG, 'name', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select utility source</mat-label>\n                    <mat-select formControlName=\"utilitySourceID\" required>\n                        <ng-container\n                            *ngIf=\"utilitySourceTypeM && utilitySourceTypeM.length > 0 && utilitySourceTypeM[0]['id']; else noUtilitySource\">\n                            <mat-option *ngFor=\"let utilitySource of utilitySourceTypeM\" [value]=\"utilitySource.id\">\n                                {{ utilitySource.name }}\n                            </mat-option>\n                        </ng-container>\n                        <ng-template #noUtilitySource>\n                            <mat-option disabled>\n                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                \n                    <mat-error *ngIf=\"errorHandling(consumerFG, 'utilitySourceID', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Type</mat-label>\n                    <input class=\"formPlaceholder\" type=\"text\" placeholder=\"Type\" matInput formControlName=\"type\" required\n                        pattern=\"{{ COMMON_CONSTANT.SPECIAL_CHARACTERS_PATTERN }}\" />\n                    <mat-error *ngIf=\"errorHandling(consumerFG, 'type', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                    <mat-error *ngIf=\"errorHandling(consumerFG, 'type', 'pattern')\">\n                        {{ FormErrorEnum.PATTERN }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n    </form>\n</mat-dialog-content>\n\n<div class=\"tscDialogFooter\" #footer>\n    <button class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled': isEqual && action == FormAction.UPDATE}\"\n        (click)=\"formSubmitBtn.click()\" matRipple [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\"\n        matTooltipPosition=\"below\" [matTooltip]=\"ButtonTooltipEnum.NO_CHANGE\"> {{\n        tscCommonService.getButtonLabel(action) }}</button>\n    <button class=\"btn btn-sm btn-secondary me-2\" mat-dialog-close matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">Cancel</button>\n</div>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i1$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i12$3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-create-update',
                    templateUrl: './create-update.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1$3.MatDialogRef }, { type: i0.Renderer2 }, { type: i2$1.FormBuilder }, { type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: i3.TSCCommonService }, { type: SourceService }, { type: ConsumerController }]; }, propDecorators: { header: [{
                type: ViewChild,
                args: ['header']
            }], footer: [{
                type: ViewChild,
                args: ['footer']
            }], body: [{
                type: ViewChild,
                args: ['body']
            }] } });

// /tsc-library/
class ConsumerPageComponent {
    constructor(dialog, storageService, sourceService, consumerController) {
        this.dialog = dialog;
        this.storageService = storageService;
        this.sourceService = sourceService;
        this.consumerController = consumerController;
        this.faPlus = faPlus;
        this.faEllipsisV = faEllipsisV;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.FormAction = FormAction;
        this.searchByPlaceHolder = 'consumer name';
        this.dataSource = [new SourceConsumerPage()];
        this.dataSourceLength = 0;
        this.displayedColumn = ['id', 'name', 'utilitySourceName', 'type', 'option'];
        this.searchFlag = false;
        this.searchFC = new FormControl('', Validators.required);
        this.utilitySource = false;
        this.utilitySourceFC = new FormControl();
        this.filterArr = [];
        this.updateConsumer = (action, row) => {
            const dialogRef = this.dialog.open(ConsumerCreateUpdateComponent, {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
                data: {
                    action: action,
                    consumerID: row.id
                }
            });
            dialogRef.afterClosed()
                .subscribe((result) => {
                if (result.status == DialogResponseEnum.SUCCESS) {
                    this.refreshBtn.nativeElement.click();
                }
            });
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getUtilitySourceAndType();
    }
    getUtilitySourceAndType() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.sourceService.getUtilitySourceAndType(this.orgID);
            const allKey = {
                "id": 0,
                "name": "All",
                "keyID": "ALL",
                "type": []
            };
            result.utilitySource.unshift(allKey);
            this.utilitySourceI = result.utilitySource;
        });
    }
    ngAfterViewInit() {
        merge(this.sort.sortChange, this.typeSelect.mono, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), switchMap(() => {
            this.filterArr = [];
            if (this.searchFlag) {
                var searchValue = 'name:' + this.searchValue;
            }
            if (this.utilitySource) {
                if (this.utilitySourceFC.value == 'ALL') {
                    this.utilitySource = false;
                }
                else {
                    this.filterArr.push('utilitySource:' + this.utilitySourceFC.value);
                }
            }
            return this.consumerController.getConsumerTypeByPage(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, searchValue, this.filterArr, this.orgID).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.dataSourceLength = 0;
                return [];
            }
            this.dataSourceLength = response.totalCount;
            return response.records;
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
        this.refreshBtn.nativeElement.click();
    }
    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }
    createConsumer(action) {
        const dialogRef = this.dialog.open(ConsumerCreateUpdateComponent, {
            height: '100vh',
            width: '600px',
            position: { right: '-2px', top: '0px' },
            disableClose: true,
            panelClass: 'matDialogContainerOverride',
            data: {
                action: action
            }
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
            if (result.status == DialogResponseEnum.SUCCESS) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }
    openDeleteDialog(consumer) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete consumer type?',
                body: '<b>' + consumer.name + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteConsumerType(consumer.id);
            }
        });
    }
    deleteConsumerType(consumerID) {
        this.consumerController.deleteConsumerType(this.orgID, consumerID).subscribe((deleteRes) => {
            if (deleteRes) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }
}
ConsumerPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageComponent, deps: [{ token: i1$3.MatDialog }, { token: i1$2.StorageService }, { token: SourceService }, { token: ConsumerController }], target: i0.ɵɵFactoryTarget.Component });
ConsumerPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumerPageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "typeSelect", first: true, predicate: ["typeSelect"], descendants: true }], ngImport: i0, template: "<div class=\"card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumer type</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar [searchBy]=\"searchByPlaceHolder\"\n                    (emitSearch)=\"searchFn($event)\"></lib-search-bar-one>\n\n                <button class=\"btn btn-sm btn-light refreshBtn centerAlign me-3 py-1\" #refreshBtn matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                    [matTooltip]=\"ButtonTooltipEnum.REFRESH\">\n                    <span class=\"material-symbols-outlined text-secondary\">\n                        refresh\n                    </span>\n                </button>\n\n                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"createConsumer(FormAction.CREATE)\" matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                    [matTooltip]=\"ButtonTooltipEnum.CREATE\">\n                    <fa-icon [icon]=\"faPlus\" class=\"me-1\"></fa-icon>Consumer type\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <table class=\"w-100\" mat-table matSort #sort=\"matSort\" matSortActive=\"name\" matSortDirection=\"asc\"\n        matSortDisableClear [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef>ID</th>\n            <td mat-cell *matCellDef=\"let row\">{{ row.id }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n            <th class=\"px-4\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>Name</th>\n            <td class=\"px-4\" mat-cell *matCellDef=\"let row\">\n                {{ row.name ? row.name : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"utilitySourceName\">\n            <th mat-header-cell *matHeaderCellDef>\n                <funnel-filter #typeSelect header=\"Utility source\" type=\"mono\" value=\"keyID\" [entityList]=\"utilitySourceI\"\n                    view=\"name\" [selectFC]=\"utilitySourceFC\" [active]=\"utilitySource\" (mono)=\"utilitySource = true;\">\n                </funnel-filter>\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n                {{ row.utilitySourceName ? row.utilitySourceName : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"type\">\n            <th mat-header-cell *matHeaderCellDef>Type</th>\n            <td mat-cell *matCellDef=\"let row\">\n                {{ row.type ? row.type : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"option\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let row\">\n                <div class=\"centerAlignVertical\">\n\n                    <button type=\"button\" class=\"iconBtn centerAlign text-primary updateIconHover\"\n                        (click)=\"updateConsumer(FormAction.UPDATE, row)\" matRipple [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\"\n                        matTooltipPosition=\"below\" [matTooltip]=\"ButtonTooltipEnum.UPDATE\">\n                        <span class=\"material-symbols-outlined icon\">\n                            edit\n                        </span>\n                    </button>\n\n                    <a class=\"iconBtn centerAlign text-danger deleteIconHover cursorPointer\" matTooltipPosition=\"below\"\n                        [matTooltip]=\"ButtonTooltipEnum.DELETE\" matRipple\n                        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" (click)=\"openDeleteDialog(row)\">\n                        <span class=\"material-symbols-outlined icon\">\n                            delete\n                        </span>\n                    </a>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\" class=\"dataRow\"></tr>\n\n        <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n            </td>\n        </tr>\n    </table>\n\n    <mat-paginator class=\"roundedBorder\" showFirstLastButtons #paginator [length]=\"dataSourceLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", components: [{ type: i3.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear", "emitValueOnChange"], outputs: ["emitSearch"] }, { type: i6$2.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i7$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i8.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i3.FunnelFilterComponent, selector: "funnel-filter", inputs: ["header", "active", "showSearchBar", "searchByPlaceholder", "searchBy", "selectAllLabel", "entityList", "view", "value", "type", "selectFC", "resetFlag"], outputs: ["mono", "multi", "selected"] }, { type: i7$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i7$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9$2.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i8.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i7$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i7$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i7$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i7$1.MatCellDef, selector: "[matCellDef]" }, { type: i7$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i7$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i7$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i7$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-page',
                    templateUrl: './page.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialog }, { type: i1$2.StorageService }, { type: SourceService }, { type: ConsumerController }]; }, propDecorators: { sort: [{
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
            }], typeSelect: [{
                type: ViewChild,
                args: ['typeSelect']
            }] } });

const routes$4 = [
    {
        path: '',
        component: ConsumerPageComponent
    }
];
class ConsumerPageRoutingModule {
}
ConsumerPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumerPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ConsumerPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageRoutingModule, imports: [[RouterModule.forChild(routes$4)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$4)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ConsumerPageModule {
}
ConsumerPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumerPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageModule, declarations: [ConsumerPageComponent], imports: [CommonModule,
        ConsumerPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatDialogModule,
        MatPaginatorModule,
        NgbModule,
        FontAwesomeModule,
        SearchBarOneModule,
        FunnelFilterModule] });
ConsumerPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageModule, imports: [[
            CommonModule,
            ConsumerPageRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatRippleModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            MatDialogModule,
            MatPaginatorModule,
            NgbModule,
            FontAwesomeModule,
            SearchBarOneModule,
            FunnelFilterModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumerPageComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumerPageRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatRippleModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatPaginatorModule,
                        NgbModule,
                        FontAwesomeModule,
                        SearchBarOneModule,
                        FunnelFilterModule
                    ]
                }]
        }] });

// /tsc-library/
class SourceCreateUpdateComponent {
    constructor(data, dialogRef, renderer, formBuilder, storageService, toastrService, tscCommonService, sourceController, sourceService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.renderer = renderer;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.tscCommonService = tscCommonService;
        this.sourceController = sourceController;
        this.sourceService = sourceService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.PageTitleEnum = PageTitleEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.pageTitle = 'Source type';
        this.isEqual = true;
        this.allSourceTypeID = [];
        this.totalSourceTypeCount = 0;
        this.utilitySourceI = [new Static()];
        this.sourceType = [new Static()];
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
        this.action = data.action;
        this.sourceID = data.sourceID;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getUtilitySourceAndType();
        this.sourceFGInit();
        if (this.action == FormAction.UPDATE) {
            this.getSourceTypeByID(this.sourceID);
        }
    }
    ngAfterViewInit() {
        this.heightHandler();
    }
    heightHandler() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';
        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }
    getUtilitySourceAndType() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.sourceService.getUtilitySourceAndType(this.orgID);
            this.utilitySourceTypeM = result.utilitySource;
        });
    }
    sourceFGInit() {
        this.sourceFG = this.formBuilder.group({
            name: [, [Validators.required]],
            utilitySourceID: [, [Validators.required]],
            typeID: [, [Validators.required]]
        });
    }
    onUtilitySourceChange(utilitySourceID) {
        const selectedUtilitySource = this.utilitySourceTypeM.find(source => source.id == utilitySourceID);
        if (selectedUtilitySource) {
            this.sourceType = selectedUtilitySource.type;
        }
        else {
            this.sourceType = [];
        }
    }
    sourceSubmit() {
        if (this.sourceFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            if (this.action == FormAction.CREATE) {
                this.createSourceType();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateSourceType();
            }
        }
    }
    createSourceType() {
        this.sourceController.createSourceType(this.orgID, this.sourceFG.value).subscribe((res) => {
            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            };
            this.dialogRef.close(result);
        }, error => {
            console.log('error in createSourceType -', error);
        });
    }
    getSourceTypeByID(sourceID) {
        this.sourceController.getSourceTypeByID(this.orgID, sourceID).subscribe((res) => {
            this.sourceM = res;
            this.patchSource(this.sourceM);
        }, error => {
            console.log('error in getSourceTypeByID -', error);
        });
    }
    patchSource(source) {
        this.sourceFG.patchValue(source);
        this.onUtilitySourceChange(source.utilitySourceID);
        this.intialObject = this.sourceFG.value;
        this.sourceFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.sourceFG.value);
        });
    }
    updateSourceType() {
        this.sourceController.updateSourceType(this.orgID, this.sourceID, this.sourceFG.value).subscribe((res) => {
            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            };
            this.dialogRef.close(result);
        }, error => {
            console.log('error in updateSourceType -', error);
        });
    }
}
SourceCreateUpdateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$3.MatDialogRef }, { token: i0.Renderer2 }, { token: i2$1.FormBuilder }, { token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: i3.TSCCommonService }, { token: SourceController }, { token: SourceService }], target: i0.ɵɵFactoryTarget.Component });
SourceCreateUpdateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceCreateUpdateComponent, selector: "lib-create-update", viewQueries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "footer", first: true, predicate: ["footer"], descendants: true }, { propertyName: "body", first: true, predicate: ["body"], descendants: true }], ngImport: i0, template: "<div class=\"headerContainer p-0\" #header>\n    <div class=\"headerLeftContainer\">\n        <div class=\"pageTitle\">{{ action == FormAction.CREATE ? PageTitleEnum.CREATE :\n            PageTitleEnum.UPDATE }} {{ pageTitle }}</div>\n    </div>\n\n    <div class=\"headerRightContainer\">\n        <div class=\"headerRightContainerInner\">\n            <button class=\"btn btn-sm centerAlign py-1 iconBtn\" matRipple\n                [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                [matTooltip]=\"ButtonTooltipEnum.CLOSE\" mat-dialog-close>\n                <span class=\"material-symbols-outlined\">\n                    close\n                </span>\n            </button>\n        </div>\n    </div>\n</div>\n\n<mat-dialog-content class=\"mat-typography customScrollBar pt-2\" #body>\n    <form [formGroup]=\"sourceFG\" (ngSubmit)=\"sourceSubmit()\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Name</mat-label>\n                    <input class=\"formPlaceholder\" type=\"text\" placeholder=\"Source name\" matInput formControlName=\"name\"\n                        required />\n                    <mat-error *ngIf=\"errorHandling(sourceFG, 'name', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select utility source</mat-label>\n\n                    <mat-select formControlName=\"utilitySourceID\" (selectionChange)=\"onUtilitySourceChange($event.value)\" required>\n                        <ng-container\n                            *ngIf=\"utilitySourceTypeM && utilitySourceTypeM.length > 0 && utilitySourceTypeM[0]['id']; else noUtilitySource\">\n                            <mat-option *ngFor=\"let utilitySource of utilitySourceTypeM\" [value]=\"utilitySource.id\">\n                                {{ utilitySource.name }}\n                            </mat-option>\n                        </ng-container>\n                        <ng-template #noUtilitySource>\n                            <mat-option disabled>\n                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n\n                    <mat-error *ngIf=\"errorHandling(sourceFG, 'utilitySourceID', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select utility source type</mat-label>\n\n                    <mat-select formControlName=\"typeID\" required>\n                        <ng-container *ngIf=\"sourceType && sourceType.length > 0 && sourceType[0]['id']; else noSourceType\">\n                            <mat-option *ngFor=\"let type of sourceType\" [value]=\"type.id\">\n                                {{ type.name }}\n                            </mat-option>\n                        </ng-container>\n                        <ng-template #noSourceType>\n                            <mat-option disabled>\n                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n\n                    <mat-error *ngIf=\"errorHandling(sourceFG, 'typeID', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n    </form>\n</mat-dialog-content>\n\n<div class=\"tscDialogFooter\" #footer>\n    <button class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled': isEqual && action == FormAction.UPDATE}\"\n        (click)=\"formSubmitBtn.click()\" matRipple [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\"\n        matTooltipPosition=\"below\" [matTooltip]=\"ButtonTooltipEnum.NO_CHANGE\"> {{\n        tscCommonService.getButtonLabel(action) }}</button>\n    <button class=\"btn btn-sm btn-secondary me-2\" mat-dialog-close matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">Cancel</button>\n</div>", components: [{ type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i1$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i12$3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-create-update',
                    templateUrl: './create-update.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1$3.MatDialogRef }, { type: i0.Renderer2 }, { type: i2$1.FormBuilder }, { type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: i3.TSCCommonService }, { type: SourceController }, { type: SourceService }]; }, propDecorators: { header: [{
                type: ViewChild,
                args: ['header']
            }], footer: [{
                type: ViewChild,
                args: ['footer']
            }], body: [{
                type: ViewChild,
                args: ['body']
            }] } });

const routes$3 = [
    {
        path: '',
        component: SourceCreateUpdateComponent
    }
];
class SourceCreateUpdateRoutingModule {
}
SourceCreateUpdateRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourceCreateUpdateRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
SourceCreateUpdateRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateRoutingModule, imports: [[RouterModule.forChild(routes$3)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$3)],
                    exports: [RouterModule]
                }]
        }] });

class SourceCreateUpdateModule {
}
SourceCreateUpdateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourceCreateUpdateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateModule, declarations: [SourceCreateUpdateComponent], imports: [CommonModule,
        SourceCreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatFormFieldModule,
        MatButtonModule,
        MatRippleModule,
        MatDialogModule,
        NgbModule] });
SourceCreateUpdateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateModule, imports: [[
            CommonModule,
            SourceCreateUpdateRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatInputModule,
            MatSelectModule,
            MatTooltipModule,
            MatOptionModule,
            MatFormFieldModule,
            MatButtonModule,
            MatRippleModule,
            MatDialogModule,
            NgbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SourceCreateUpdateComponent
                    ],
                    imports: [
                        CommonModule,
                        SourceCreateUpdateRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatTooltipModule,
                        MatOptionModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatDialogModule,
                        NgbModule
                    ]
                }]
        }] });

const routes$2 = [
    {
        path: '',
        component: ConsumerCreateUpdateComponent
    }
];
class ConsumerCreateUpdateRoutingModule {
}
ConsumerCreateUpdateRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumerCreateUpdateRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ConsumerCreateUpdateRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateRoutingModule, imports: [[RouterModule.forChild(routes$2)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$2)],
                    exports: [RouterModule]
                }]
        }] });

class ConsumerCreateUpdateModule {
}
ConsumerCreateUpdateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumerCreateUpdateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateModule, declarations: [ConsumerCreateUpdateComponent], imports: [CommonModule,
        ConsumerCreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatFormFieldModule,
        MatButtonModule,
        MatRippleModule,
        MatDialogModule,
        NgbModule] });
ConsumerCreateUpdateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateModule, imports: [[
            CommonModule,
            ConsumerCreateUpdateRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatInputModule,
            MatSelectModule,
            MatTooltipModule,
            MatOptionModule,
            MatFormFieldModule,
            MatButtonModule,
            MatRippleModule,
            MatDialogModule,
            NgbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerCreateUpdateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumerCreateUpdateComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumerCreateUpdateRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatTooltipModule,
                        MatOptionModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatDialogModule,
                        NgbModule
                    ]
                }]
        }] });

// /tsc-library/
class SourcePageComponent {
    constructor(dialog, storageService, sourceController, sourceService) {
        this.dialog = dialog;
        this.storageService = storageService;
        this.sourceController = sourceController;
        this.sourceService = sourceService;
        this.faPlus = faPlus;
        this.faEllipsisV = faEllipsisV;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.DialogResponseEnum = DialogResponseEnum;
        this.FormAction = FormAction;
        this.searchByPlaceHolder = 'source name';
        this.dataSource = [new SourceConsumerPage()];
        this.dataSourceLength = 0;
        this.displayedColumn = ['id', 'name', 'utilitySourceName', 'type', 'option'];
        this.searchFlag = false;
        this.searchFC = new FormControl('', Validators.required);
        this.utilitySource = false;
        this.utilitySourceFC = new FormControl();
        this.filterArr = [];
        this.updateSource = (action, row) => {
            const dialogRef = this.dialog.open(SourceCreateUpdateComponent, {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
                data: {
                    action: action,
                    sourceID: row.id
                }
            });
            dialogRef.afterClosed()
                .subscribe((result) => {
                if (result.status == DialogResponseEnum.SUCCESS) {
                    this.refreshBtn.nativeElement.click();
                }
            });
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getUtilitySourceAndType();
    }
    getUtilitySourceAndType() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.sourceService.getUtilitySourceAndType(this.orgID);
            const allKey = {
                "id": 0,
                "name": "All",
                "keyID": "ALL",
                "type": []
            };
            result.utilitySource.unshift(allKey);
            this.utilitySourceI = result.utilitySource;
        });
    }
    ngAfterViewInit() {
        merge(this.sort.sortChange, this.typeSelect.mono, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), switchMap(() => {
            this.filterArr = [];
            if (this.searchFlag) {
                var searchValue = 'name:' + this.searchValue;
            }
            if (this.utilitySource) {
                if (this.utilitySourceFC.value == 'ALL') {
                    this.utilitySource = false;
                }
                else {
                    this.filterArr.push('utilitySource:' + this.utilitySourceFC.value);
                }
            }
            return this.sourceController.getSourceTypeByPage(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, searchValue, this.filterArr, this.orgID).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.dataSourceLength = 0;
                return [];
            }
            this.dataSourceLength = response.totalCount;
            return response.records;
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
        this.refreshBtn.nativeElement.click();
    }
    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }
    createSource(action) {
        const dialogRef = this.dialog.open(SourceCreateUpdateComponent, {
            height: '100vh',
            width: '600px',
            position: { right: '-2px', top: '0px' },
            disableClose: true,
            panelClass: 'matDialogContainerOverride',
            data: {
                action: action
            }
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
            if (result.status == DialogResponseEnum.SUCCESS) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }
    openDeleteDialog(source) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete source type?',
                body: '<b>' + source.name + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteSourceType(source.id);
            }
        });
    }
    deleteSourceType(sourceID) {
        this.sourceController.deleteSourceType(this.orgID, sourceID).subscribe((deleteRes) => {
            if (deleteRes) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }
}
SourcePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageComponent, deps: [{ token: i1$3.MatDialog }, { token: i1$2.StorageService }, { token: SourceController }, { token: SourceService }], target: i0.ɵɵFactoryTarget.Component });
SourcePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourcePageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "typeSelect", first: true, predicate: ["typeSelect"], descendants: true }], ngImport: i0, template: "<div class=\"card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Source type</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar [searchBy]=\"searchByPlaceHolder\"\n                    (emitSearch)=\"searchFn($event)\"></lib-search-bar-one>\n\n                <button class=\"btn btn-sm btn-light refreshBtn centerAlign me-3 py-1\" #refreshBtn matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                    [matTooltip]=\"ButtonTooltipEnum.REFRESH\">\n                    <span class=\"material-symbols-outlined text-secondary\">\n                        refresh\n                    </span>\n                </button>\n\n                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"createSource(FormAction.CREATE)\" matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                    [matTooltip]=\"ButtonTooltipEnum.CREATE\">\n                    <fa-icon [icon]=\"faPlus\" class=\"me-1\"></fa-icon>Source type\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <table class=\"w-100\" mat-table matSort #sort=\"matSort\" matSortActive=\"name\" matSortDirection=\"asc\"\n        matSortDisableClear [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef>ID</th>\n            <td mat-cell *matCellDef=\"let row\">{{ row.id }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n            <th class=\"px-4\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>Name</th>\n            <td class=\"px-4\" mat-cell *matCellDef=\"let row\">\n                {{ row.name ? row.name : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"utilitySourceName\">\n            <th mat-header-cell *matHeaderCellDef>\n                <funnel-filter #typeSelect header=\"Utility source\" type=\"mono\" value=\"keyID\"\n                    [entityList]=\"utilitySourceI\" view=\"name\" [selectFC]=\"utilitySourceFC\" [active]=\"utilitySource\"\n                    (mono)=\"utilitySource = true;\">\n                </funnel-filter>\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n                {{ row.utilitySourceName ? row.utilitySourceName : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"type\">\n            <th class=\"px-4\" mat-header-cell *matHeaderCellDef>Utility source type</th>\n            <td class=\"px-4\" mat-cell *matCellDef=\"let row\">\n                {{ row.type ? row.type : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"option\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let row\">\n                <div class=\"centerAlignVertical\">\n\n                    <button type=\"button\" class=\"iconBtn centerAlign text-primary updateIconHover\"\n                        (click)=\"updateSource(FormAction.UPDATE, row)\" matRipple\n                        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                        [matTooltip]=\"ButtonTooltipEnum.UPDATE\">\n                        <span class=\"material-symbols-outlined icon\">\n                            edit\n                        </span>\n                    </button>\n\n                    <a class=\"iconBtn centerAlign text-danger deleteIconHover cursorPointer\" matTooltipPosition=\"below\"\n                        [matTooltip]=\"ButtonTooltipEnum.DELETE\" matRipple\n                        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" (click)=\"openDeleteDialog(row)\">\n                        <span class=\"material-symbols-outlined icon\">\n                            delete\n                        </span>\n                    </a>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\" class=\"dataRow\"></tr>\n\n        <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n            </td>\n        </tr>\n    </table>\n\n    <mat-paginator class=\"roundedBorder\" showFirstLastButtons #paginator [length]=\"dataSourceLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", components: [{ type: i3.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear", "emitValueOnChange"], outputs: ["emitSearch"] }, { type: i6$2.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i7$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i8.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i3.FunnelFilterComponent, selector: "funnel-filter", inputs: ["header", "active", "showSearchBar", "searchByPlaceholder", "searchBy", "selectAllLabel", "entityList", "view", "value", "type", "selectFC", "resetFlag"], outputs: ["mono", "multi", "selected"] }, { type: i7$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i7$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9$2.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i8.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i7$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i7$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i7$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i7$1.MatCellDef, selector: "[matCellDef]" }, { type: i7$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i7$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i7$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i7$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-page',
                    templateUrl: './page.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialog }, { type: i1$2.StorageService }, { type: SourceController }, { type: SourceService }]; }, propDecorators: { sort: [{
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
            }], typeSelect: [{
                type: ViewChild,
                args: ['typeSelect']
            }] } });

const routes$1 = [
    {
        path: '',
        component: SourcePageComponent
    }
];
class SourcePageRoutingModule {
}
SourcePageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourcePageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
SourcePageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageRoutingModule, imports: [[RouterModule.forChild(routes$1)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class SourcePageModule {
}
SourcePageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourcePageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageModule, declarations: [SourcePageComponent], imports: [CommonModule,
        SourcePageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatDialogModule,
        MatPaginatorModule,
        NgbModule,
        FontAwesomeModule,
        SearchBarOneModule,
        FunnelFilterModule] });
SourcePageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageModule, imports: [[
            CommonModule,
            SourcePageRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatRippleModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            MatDialogModule,
            MatPaginatorModule,
            NgbModule,
            FontAwesomeModule,
            SearchBarOneModule,
            FunnelFilterModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcePageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SourcePageComponent
                    ],
                    imports: [
                        CommonModule,
                        SourcePageRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatRippleModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatPaginatorModule,
                        NgbModule,
                        FontAwesomeModule,
                        SearchBarOneModule,
                        FunnelFilterModule
                    ]
                }]
        }] });

// /tsc-library/
class ConsumptionParamAddUpdateComponent {
    constructor(formBuilder, storageService, toastrService, tscCommonService, sourceController, parameterController, parameterService) {
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.tscCommonService = tscCommonService;
        this.sourceController = sourceController;
        this.parameterController = parameterController;
        this.parameterService = parameterService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.PageTitleEnum = PageTitleEnum;
        this.MessageAlertIconEnum = MessageAlertIconEnum;
        this.MessageAlertTypeEnum = MessageAlertTypeEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.isEqual = true;
        this.sourceConsumerConfiguredM = new SourceConsumerConfigure();
        this.allConsumptionParamID = [];
        this.selection = new SelectionModel(true, []);
        this.dependentConsumParamSearchUtil = [];
        this.hasError = (control, error) => {
            return this.consumptionParamFG.get(control).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getSourceConsumerConfig();
        this.consumptionParamFGInit();
    }
    getSourceConsumerConfig() {
        this.sourceController.getSourceConsumerConfig(this.orgID).subscribe((res) => {
            this.sourceConsumerConfiguredM = res;
            this.getConsumptionParameter();
        }, error => console.log('Error:', error));
    }
    getConsumptionParameter() {
        this.consumptionParamFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.consumptionParamFG.getRawValue()); });
        this.parameterController.getConsumptionParameter(this.orgID).subscribe((response) => {
            if (response) {
                this.consumptionParamM = response.consumptionParameter;
                this.consumptionParamM.forEach((parameter) => {
                    this.allConsumptionParamID.push(parameter);
                    this.consumptionParameterFA.push(this.newConsumptionParameterFG(parameter.id));
                    let searchUtility = new MatSelectSearchService(['label']);
                    searchUtility.entityArr = parameter.dependentParameter;
                    searchUtility.createSubscription();
                    this.dependentConsumParamSearchUtil.push(searchUtility);
                    this.initialObject = this.consumptionParamFG.value;
                    this.isEqual = true;
                });
                this.getSavedConsumptionParameter();
            }
        }, error => {
            console.log('error in getConsumptionParameter -', error);
        });
    }
    consumptionParamFGInit() {
        this.consumptionParamFG = this.formBuilder.group({
            consumptionParameter: this.formBuilder.array([])
        });
    }
    get consumptionParameterFA() {
        return this.consumptionParamFG.get('consumptionParameter');
    }
    getSavedConsumptionParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            const param = yield this.parameterService.getSavedConsumptionParameter(this.orgID);
            this.patchConsumptionParam(param);
        });
    }
    patchConsumptionParam(param) {
        this.consumptionParameterFA.controls.forEach(control => {
            param.forEach(element => {
                this.selection.select(element['aggregateParamID']);
                if (element['aggregateParamID'] == control.value['aggregateParamID'])
                    control.get('dependentParameterID').patchValue(element['dependentParameterID']);
            });
        });
    }
    selectAll() {
        if (this.isAllSelected()) {
            this.consumptionParameterFA.controls.forEach(control => {
                const id = control.get('aggregateParamID').value;
                this.selection.deselect(id);
            });
            return;
        }
        this.consumptionParameterFA.controls.forEach(control => {
            const id = control.get('aggregateParamID').value;
            this.selection.select(id);
        });
    }
    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.consumptionParamM.length;
        return selected == numRows;
    }
    newConsumptionParameterFG(parameterID) {
        return this.formBuilder.group({
            aggregateParamID: [parameterID],
            dependentParameterID: [[], Validators.required]
        });
    }
    selectAllDependentParam(index) {
        const dependentParamFG = this.consumptionParameterFA.at(index);
        const dependentParamFC = dependentParamFG.get('dependentParameterID');
        if (!dependentParamFC.value.includes(-1)) {
            dependentParamFC.reset([]);
            return;
        }
        const parameter = this.consumptionParamM[index];
        const parameterDependentIDs = parameter.dependentParameter.map(depParam => depParam.id);
        dependentParamFC.setValue([-1, ...parameterDependentIDs]);
    }
    selectDependentParam(index) {
        const dependentParamFG = this.consumptionParameterFA.at(index);
        const dependentParamFC = dependentParamFG.get('dependentParameterID');
        const selected = dependentParamFC.value;
        const parameter = this.consumptionParamM[index];
        const parameterDependentIDs = parameter.dependentParameter.map(depParam => depParam.id);
        const totalDepParamCount = parameterDependentIDs.length;
        if (selected.includes(-1)) {
            selected.shift();
            dependentParamFC.patchValue(selected);
        }
        else if (dependentParamFC.value.length == totalDepParamCount) {
            parameterDependentIDs.splice(0, 0, -1);
            dependentParamFC.patchValue(parameterDependentIDs);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            dependentParamFC.patchValue(filteredSelected);
        }
    }
    consumptionParameterSubmit() {
        const consumptionParameter = this.consumptionParamFG.value.consumptionParameter.map(param => {
            const dependentParameterID = param.dependentParameterID.includes(-1)
                ? param.dependentParameterID.filter(id => id != -1)
                : param.dependentParameterID;
            return Object.assign(Object.assign({}, param), { dependentParameterID });
        });
        if (this.consumptionParamFG.invalid) {
            this.consumptionParamFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_TITLE, ToastrColor.ERROR);
            return;
        }
        this.parameterController.saveConsumptionParameter(this.orgID, consumptionParameter).subscribe((res) => {
            this.getConsumptionParameter();
        }, error => {
            console.log('error in saveConsumptionParameter -', error);
        });
    }
    toggleField(index, parameterID) {
        if (this.selection.isSelected(parameterID)) {
            this.consumptionParameterFA.controls[index].enable();
            return false;
        }
        else {
            this.consumptionParameterFA.controls[index].disable();
            return true;
        }
    }
}
ConsumptionParamAddUpdateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateComponent, deps: [{ token: i2$1.FormBuilder }, { token: i1$2.StorageService }, { token: i2$3.ToastrService }, { token: i3.TSCCommonService }, { token: SourceController }, { token: ParameterController }, { token: ParameterService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionParamAddUpdateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionParamAddUpdateComponent, selector: "lib-add-update", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Add Consumption Parameter</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <ng-container *ngIf=\"sourceConsumerConfiguredM?.sourceTypeConfigured; else notSourceType\">\n            <ng-container\n                *ngIf=\"consumptionParamM && consumptionParamM.length > 0 && consumptionParamM[0]['id']; else noComsumptionParamFound\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 mb-3\">\n                        <lib-message-alert [labelInp]=\"'Info'\"\n                            [contentInp]=\"'Adding consumption parameters will impact your data.'\"\n                            [messageAlertTypeInp]=\"MessageAlertTypeEnum.INFO\"\n                            [messageAlertIconInp]=\"MessageAlertIconEnum.INFO_ICON\">\n                        </lib-message-alert>\n                    </div>\n                </div>\n                <form [formGroup]=\"consumptionParamFG\" (ngSubmit)=\"consumptionParameterSubmit()\">\n                    <ng-container formArrayName=\"consumptionParameter\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr class=\"tableHeader\">\n                                            <td><mat-checkbox (change)=\"$event ? selectAll() : null\"\n                                                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                                                    [disabled]=\"consumptionParamM.length == 0 || consumptionParamM[0]['id'] == null\">\n                                                    Select all\n                                                </mat-checkbox></td>\n                                            <td align=\"center\" class=\"fw-bold\"> Consumption Parameter </td>\n                                            <td align=\"center\" class=\"fw-bold\"> Dependent Parameter </td>\n                                        </tr>\n                                    </tbody>\n                                    <tbody>\n                                        <tr *ngFor=\"let parameter of consumptionParamM; let i = index\">\n                                            <ng-container [formGroupName]=\"i\">\n                                                <td>\n                                                    <mat-checkbox\n                                                        (change)=\"$event ? selection.toggle(parameter.id) : null\"\n                                                        [checked]=\"selection.isSelected(parameter.id)\"></mat-checkbox>\n                                                </td>\n                                                <td align=\"center\">\n                                                    <div class=\"mt-4\">\n                                                        {{ parameter.label }}\n                                                    </div>\n                                                </td>\n                                                <td align=\"center\">\n                                                    <div class=\"row pt-2\">\n                                                        <div class=\"col-sm-8\">\n                                                            <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                                                <mat-label>Select dependent parameter</mat-label>\n\n                                                                <mat-select formControlName=\"dependentParameterID\" [disabled]=\"toggleField(i, parameter.id)\"\n                                                                    (selectionChange)=\"selection.select(parameter.id)\" multiple required>\n                                                                    <ng-container *ngIf=\"dependentConsumParamSearchUtil[i]['filteredEntities']; else noDependentParamFound\">\n                                                                        <ngx-mat-select-search [formControl]=\"dependentConsumParamSearchUtil[i].filterFC\"\n                                                                            placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                                                                        </ngx-mat-select-search>\n                                                                        <mat-option [value]=\"-1\" (click)=\"selectAllDependentParam(i)\"\n                                                                            [hidden]=\"dependentConsumParamSearchUtil[i].filterFC.value\">\n                                                                            Select all\n                                                                        </mat-option>\n                                                                        <mat-option *ngFor=\"let param of dependentConsumParamSearchUtil[i]['filteredEntities'] | async\"\n                                                                            [value]=\"param.id\" (click)=\"selectDependentParam(i)\">\n                                                                            {{ param.label }}\n                                                                        </mat-option>\n                                                                    </ng-container>\n                                                                    <ng-template #noDependentParamFound>\n                                                                        <mat-option disabled>\n                                                                            {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                                        </mat-option>\n                                                                    </ng-template>\n                                                                </mat-select>\n\n                                                                <mat-error *ngIf=\"this.consumptionParameterFA.controls[i].get('dependentParameterID').hasError('required')\">\n                                                                    {{ FormErrorEnum.REQUIRED }}\n                                                                </mat-error>\n                                                            </mat-form-field>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                            </ng-container>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </ng-container>\n\n                    <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n\n                    <div class=\"row mt-2\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"float-end\">\n                                <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\"\n                                    (click)=\"tscCommonService.back()\">\n                                    {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                                </button>\n\n                                <button class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled' : isEqual}\"\n                                    type=\"submit\">{{\n                                    ButtonLabelEnum.SAVE_BTN_LABEL }}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </ng-container>\n            <ng-template #noComsumptionParamFound>\n                <lib-message-alert [labelInp]=\"'Not found!'\" [contentInp]=\"'No consumption parameter found.'\"\n                    [messageAlertTypeInp]=\"MessageAlertTypeEnum.DANGER\"\n                    [messageAlertIconInp]=\"MessageAlertIconEnum.DANGER_ICON\">\n                </lib-message-alert>\n            </ng-template>\n        </ng-container>\n        <ng-template #notSourceType>\n            <lib-message-alert [labelInp]=\"'Info'\"\n                [contentInp]=\"'Source type not set. Please set source type first to add consumption parameters'\"\n                [messageAlertTypeInp]=\"MessageAlertTypeEnum.INFO\"\n                [messageAlertIconInp]=\"MessageAlertIconEnum.INFO_ICON\">\n            </lib-message-alert>\n        </ng-template>\n    </div>\n</div>", components: [{ type: i3.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp", "showCloseBtnInp"] }, { type: i10$3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i6$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i3$1.MatLabel, selector: "mat-label" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i14.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-add-update',
                    templateUrl: './add-update.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i2$1.FormBuilder }, { type: i1$2.StorageService }, { type: i2$3.ToastrService }, { type: i3.TSCCommonService }, { type: SourceController }, { type: ParameterController }, { type: ParameterService }]; } });

const routes = [
    {
        path: '',
        component: ConsumptionParamAddUpdateComponent
    }
];
class ConsumptionParamAddUpdateRoutingModule {
}
ConsumptionParamAddUpdateRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionParamAddUpdateRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ConsumptionParamAddUpdateRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class ConsumptionParamAddUpdateModule {
}
ConsumptionParamAddUpdateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionParamAddUpdateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateModule, declarations: [ConsumptionParamAddUpdateComponent], imports: [CommonModule,
        ConsumptionParamAddUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatFormFieldModule,
        MatButtonModule,
        MatRippleModule,
        MatCheckboxModule,
        MatTableModule,
        NgxMatSelectSearchModule,
        MessageAlertModule] });
ConsumptionParamAddUpdateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateModule, imports: [[
            CommonModule,
            ConsumptionParamAddUpdateRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatInputModule,
            MatSelectModule,
            MatTooltipModule,
            MatOptionModule,
            MatFormFieldModule,
            MatButtonModule,
            MatRippleModule,
            MatCheckboxModule,
            MatTableModule,
            NgxMatSelectSearchModule,
            MessageAlertModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionParamAddUpdateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionParamAddUpdateComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionParamAddUpdateRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatTooltipModule,
                        MatOptionModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatCheckboxModule,
                        MatTableModule,
                        NgxMatSelectSearchModule,
                        MessageAlertModule
                    ]
                }]
        }] });

// /tsc-library/
class Interceptor {
    constructor(storageService) {
        this.storageService = storageService;
    }
    intercept(request, next) {
        let layoutID = this.storageService.getStorage('layoutID');
        request = request.clone({
            setHeaders: { layoutID: `${layoutID}` }
        });
        return next.handle(request).pipe();
    }
}
Interceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Interceptor, deps: [{ token: i1$2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
Interceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Interceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Interceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$2.StorageService }]; } });

class MakeModelController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getMake(type) {
        let params = new HttpParams();
        params = params.append('type', type);
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}make`, { params: params });
    }
    getModel(makeID, type) {
        let params = new HttpParams();
        params = params.append('type', type);
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}make/${makeID}/model`, { params: params });
    }
}
MakeModelController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
MakeModelController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class RegulatorController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getRegulatorStatusInfo(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/regulators/status`);
    }
    getRegulatorsType(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/regulators/type`);
    }
    getRegulatorsEntities(regulatorTypeFilterArr, orgID) {
        let params = new HttpParams();
        regulatorTypeFilterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/dashboard/regulators-entities`, { params: params });
    }
}
RegulatorController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RegulatorController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
RegulatorController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RegulatorController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RegulatorController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class MakeModelService {
    constructor(makeModelController) {
        this.makeModelController = makeModelController;
    }
    getMake(type) {
        return __awaiter(this, void 0, void 0, function* () {
            let makeI;
            try {
                makeI = yield this.makeModelController.getMake(type).toPromise();
                if (makeI) {
                    return makeI;
                }
                else {
                    return [new MakeModel()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new MakeModel()];
            }
        });
    }
    getModel(makeID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let modelI;
            try {
                modelI = yield this.makeModelController.getModel(makeID, type).toPromise();
                if (modelI) {
                    return modelI;
                }
                else {
                    return [new MakeModel()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new MakeModel()];
            }
        });
    }
}
MakeModelService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelService, deps: [{ token: MakeModelController }], target: i0.ɵɵFactoryTarget.Injectable });
MakeModelService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: MakeModelController }]; } });

/*
 * Public API Surface of tsc-lite
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddComponent, AddModule, AggregateDataController, AggregateDataRequest, AggregateDataService, AggregationComponent, AggregationDurationComponent, AggregationDurationModule, AggregationModule, Alert, AlertService, BreakupReportComponent, BreakupReportModule, ByEntityComponent, ByEntityModule, ByParameterComponent, ByParameterModule, CgwaReportComponent, CgwaReportModule, ChartComponent, ChartModule, ConsumerCreateUpdateComponent, ConsumerCreateUpdateModule, ConsumerPageComponent, ConsumerPageModule, ConsumptionBreakupComponent, ConsumptionBreakupDashboardComponent, ConsumptionBreakupDashboardModule, ConsumptionBreakupModule, ConsumptionComponent, ConsumptionModule, ConsumptionParamAddUpdateComponent, ConsumptionParamAddUpdateModule, ConsumptionParameter, ConsumptionReportComponent, ConsumptionReportModule, CreateUpdateEntityComponent, CreateUpdateEntityModule, CreateUpdateLayoutComponent, CreateUpdateLayoutModule, DashboardEntities, DashboardErrorEnum, DataAvailabilityController, DataAvailabilityReportComponent, DataAvailabilityReportModule, Device, DeviceComponent, DeviceController, DeviceMapping, DeviceModule, DeviceRecentData, DeviceService, DevicesWithEntities, DownloadReportComponent, DownloadReportModule, DownloadReportRequest, Entity, EntityComponent, EntityController, EntityDashboardComponent, EntityDashboardModule, EntityDeviceService, EntityDialogComponent, EntityDialogModule, EntityLevelConsumption, EntityModule, EntityService, EntityType, EntityTypeComponent, EntityTypeModule, EntityWithChildren, FacilityComponent, FacilityModule, HomeComponent, HomeModule, Interceptor, LIST_CONSTANT, LayoutNotFoundComponent, LayoutNotFoundModule, ListComponent, ListModule, MakeModel, MakeModelController, MakeModelService, MeterData, MeterDataDashboardComponent, MeterDataDashboardModule, MeterReportComponent, MeterReportModule, OrgRecentData, PageComponent, PageModule, ParamMetricComponent, ParamMetricModule, Parameter, ParameterComponent, ParameterController, ParameterEntity, ParameterModule, ParameterReportComponent, ParameterReportModule, ParameterService, ParameterTabComponent, ParameterTabModule, RawDataReportComponent, RawDataReportModule, RecentDataController, RecentDataRequestWithParam, RecentDataRequestWithoutParam, RecentDataService, RegulatorController, RegulatorType, RegulatorsEntities, ReportErrorEnum, ReportService, ResolveGuard, SavedConsumptionParameter, ScheduleReportBreakupComponent, ScheduleReportBreakupModule, ScheduleReportCgwaComponent, ScheduleReportCgwaModule, ScheduleReportConfigurationComponent, ScheduleReportConfigurationModule, ScheduleReportConsumptionComponent, ScheduleReportConsumptionModule, ScheduleReportController, ScheduleReportPageComponent, ScheduleReportPageModule, ScheduleReportService, ScheduleReportSourcingComponent, ScheduleReportSourcingModule, ScheduleReportTemperatureComponent, ScheduleReportTemperatureModule, ScheduleReportTypeEnum, Shift, ShiftComponent, ShiftController, ShiftModule, ShiftService, SourceCreateUpdateComponent, SourceCreateUpdateModule, SourceLoadComponent, SourceLoadModule, SourcePageComponent, SourcePageModule, SourcingReportComponent, SourcingReportModule, StatusInfo, SuccessComponent, TabComponent, TabModule, TrendComponent, TrendModule, TrendService, TscLiteComponent, TscLiteModule, TscLiteService, TscRestrictComponent, TscRestrictModule, Unit, UnitComponent, UnitController, UnitModule, UnitService, UsageAcrossFacilityComponent, UsageAcrossFacilityModule, ViewComponent, ViewModule };
//# sourceMappingURL=library-tsc-lite.js.map
