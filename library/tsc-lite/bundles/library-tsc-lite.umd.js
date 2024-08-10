(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@library/storage-service'), require('@angular/common'), require('@angular/forms'), require('@angular/material/dialog'), require('moment'), require('@library/tsc-common'), require('@library/date'), require('@library/echart'), require('@angular/common/http'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/material/tooltip'), require('@angular/material/input'), require('@library/layout-service'), require('@library/organization-service'), require('ngx-mat-select-search'), require('@library/application-service'), require('@angular/material/card'), require('ng-circle-progress'), require('ngx-perfect-scrollbar'), require('@angular/material/button-toggle'), require('@angular/material/expansion'), require('@angular/material/radio'), require('@library/toastr-service'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/material/icon'), require('@angular/material/table'), require('lodash'), require('@angular/material/checkbox'), require('@angular/material/paginator'), require('@angular/material/sort'), require('rxjs'), require('rxjs/operators'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/angular-fontawesome'), require('ngx-echarts')) :
    typeof define === 'function' && define.amd ? define('@library/tsc-lite', ['exports', '@angular/core', '@angular/router', '@library/storage-service', '@angular/common', '@angular/forms', '@angular/material/dialog', 'moment', '@library/tsc-common', '@library/date', '@library/echart', '@angular/common/http', '@angular/material/button', '@angular/material/form-field', '@angular/material/select', '@angular/material/core', '@angular/material/tooltip', '@angular/material/input', '@library/layout-service', '@library/organization-service', 'ngx-mat-select-search', '@library/application-service', '@angular/material/card', 'ng-circle-progress', 'ngx-perfect-scrollbar', '@angular/material/button-toggle', '@angular/material/expansion', '@angular/material/radio', '@library/toastr-service', '@ng-bootstrap/ng-bootstrap', '@angular/material/icon', '@angular/material/table', 'lodash', '@angular/material/checkbox', '@angular/material/paginator', '@angular/material/sort', 'rxjs', 'rxjs/operators', '@fortawesome/free-solid-svg-icons', '@fortawesome/angular-fontawesome', 'ngx-echarts'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["tsc-lite"] = {}), global.ng.core, global.ng.router, global.i1$1, global.ng.common, global.ng.forms, global.ng.material.dialog, global.moment, global.i3, global.i2, global.i10, global.ng.common.http, global.ng.material.button, global.ng.material.formField, global.ng.material.select, global.ng.material.core, global.ng.material.tooltip, global.ng.material.input, global.i5, global.i3$2, global.i6$1, global.applicationService, global.ng.material.card, global.i8$1, global.i12$2, global.ng.material.buttonToggle, global.ng.material.expansion, global.ng.material.radio, global.i2$1, global.i1$4, global.ng.material.icon, global.ng.material.table, global.lodash, global.ng.material.checkbox, global.ng.material.paginator, global.ng.material.sort, global.rxjs, global.rxjs.operators, global.freeSolidSvgIcons, global.i6$3, global.i10$1));
})(this, (function (exports, i0, i1, i1$1, i7, i8, i1$3, moment, i3, i2, i10, i1$2, i6, i3$1, i4, i12, i12$1, i13, i5, i3$2, i6$1, applicationService, i7$1, i8$1, i12$2, i6$2, i5$1, i13$1, i2$1, i1$4, icon, i7$2, lodash, i5$2, i9, i8$2, rxjs, operators, freeSolidSvgIcons, i6$3, i10$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i12__namespace$1 = /*#__PURE__*/_interopNamespace(i12$1);
    var i13__namespace$1 = /*#__PURE__*/_interopNamespace(i13);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i7__namespace$1 = /*#__PURE__*/_interopNamespace(i7$1);
    var i8__namespace$1 = /*#__PURE__*/_interopNamespace(i8$1);
    var i12__namespace$2 = /*#__PURE__*/_interopNamespace(i12$2);
    var i6__namespace$2 = /*#__PURE__*/_interopNamespace(i6$2);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13$1);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i1__namespace$4 = /*#__PURE__*/_interopNamespace(i1$4);
    var i7__namespace$2 = /*#__PURE__*/_interopNamespace(i7$2);
    var i5__namespace$2 = /*#__PURE__*/_interopNamespace(i5$2);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i8__namespace$2 = /*#__PURE__*/_interopNamespace(i8$2);
    var i6__namespace$3 = /*#__PURE__*/_interopNamespace(i6$3);
    var i10__namespace$1 = /*#__PURE__*/_interopNamespace(i10$1);

    var TscLiteService = /** @class */ (function () {
        function TscLiteService() {
        }
        return TscLiteService;
    }());
    TscLiteService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TscLiteService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var TscLiteComponent = /** @class */ (function () {
        function TscLiteComponent() {
        }
        TscLiteComponent.prototype.ngOnInit = function () {
        };
        return TscLiteComponent;
    }());
    TscLiteComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TscLiteComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TscLiteComponent, selector: "lib-tsc-lite", ngImport: i0__namespace, template: "\n    <p>\n      tsc-lite works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-tsc-lite',
                        template: "\n    <p>\n      tsc-lite works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var TscLiteModule = /** @class */ (function () {
        function TscLiteModule() {
        }
        TscLiteModule.forRoot = function (environment) {
            return {
                ngModule: TscLiteModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return TscLiteModule;
    }());
    TscLiteModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TscLiteModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteModule, declarations: [TscLiteComponent], exports: [TscLiteComponent] });
    TscLiteModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscLiteModule, decorators: [{
                type: i0.NgModule,
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

    var LIST_CONSTANT = {
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
        AGGREGATION_DURATION: [
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
        AGGREGATION: [
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
        DOWNLOAD_TYPE: [
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
        SOURCE_LOAD: [
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

    var Parameter = /** @class */ (function () {
        function Parameter() {
        }
        return Parameter;
    }());

    var Entity = /** @class */ (function () {
        function Entity() {
        }
        return Entity;
    }());
    var EntityTree = /** @class */ (function () {
        function EntityTree() {
        }
        return EntityTree;
    }());
    var EntityLevelConsumption = /** @class */ (function () {
        function EntityLevelConsumption() {
        }
        return EntityLevelConsumption;
    }());
    var EntityType = /** @class */ (function () {
        function EntityType() {
        }
        return EntityType;
    }());

    var Device = /** @class */ (function () {
        function Device() {
        }
        return Device;
    }());
    var DevicesWithEntities = /** @class */ (function () {
        function DevicesWithEntities() {
        }
        return DevicesWithEntities;
    }());
    var DeviceInfo = /** @class */ (function () {
        function DeviceInfo() {
        }
        return DeviceInfo;
    }());

    var Unit = /** @class */ (function () {
        function Unit() {
        }
        return Unit;
    }());

    var Shift = /** @class */ (function () {
        function Shift() {
        }
        return Shift;
    }());

    var RecentDataRequestWithParam = /** @class */ (function () {
        function RecentDataRequestWithParam() {
            this.params = null;
            this.deviceID = null;
            this.includeDescendants = false;
            this.timezone = null;
            this.entityType = null;
            this.backscan = null;
        }
        return RecentDataRequestWithParam;
    }());
    var RecentDataRequestWithoutParam = /** @class */ (function () {
        function RecentDataRequestWithoutParam() {
            this.entityID = null;
            this.timezone = null;
            this.backscan = null;
        }
        return RecentDataRequestWithoutParam;
    }());
    var OrgRecentData = /** @class */ (function () {
        function OrgRecentData() {
        }
        return OrgRecentData;
    }());

    var Alert = /** @class */ (function () {
        function Alert() {
            this.showAlert = false;
            this.alertLabel = '';
            this.alertContent = '';
            this.messageAlertType = '';
            this.messageAlertIcon = '';
        }
        return Alert;
    }());

    var DownloadReportRequest = /** @class */ (function () {
        function DownloadReportRequest() {
            this.request = null;
            this.reportName = null;
            this.reportFormat = null;
        }
        return DownloadReportRequest;
    }());

    // /tsc-library/
    var LayoutResolver = /** @class */ (function () {
        function LayoutResolver(router, storageService) {
            this.router = router;
            this.storageService = storageService;
        }
        LayoutResolver.prototype.resolve = function (next, state) {
            var layoutID = this.storageService.getStorage('layoutID');
            if (layoutID) {
                return true;
            }
            else {
                this.router.navigate(['/layout-not-found']);
                return false;
            }
        };
        return LayoutResolver;
    }());
    LayoutResolver.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutResolver, deps: [{ token: i1__namespace.Router }, { token: i1__namespace$1.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LayoutResolver.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutResolver, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutResolver, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }, { type: i1__namespace$1.StorageService }]; } });

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var AggregateDataRequest = /** @class */ (function () {
        function AggregateDataRequest() {
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
        AggregateDataRequest.prototype.nullifyParams = function () {
            var _a;
            (_a = this.params) === null || _a === void 0 ? void 0 : _a.forEach(function (param) {
                param.name = param.name || null;
                param.dsAgg = param.dsAgg || null;
                param.agg = param.agg || null;
                param.source_or_load = param.source_or_load || null;
                param.sourceLoadType = param.sourceLoadType || null;
            });
        };
        return AggregateDataRequest;
    }());

    var ParameterController = /** @class */ (function () {
        function ParameterController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        ParameterController.prototype.getParameterByLayoutID = function (orgID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/parameters");
            // return this.http.get<ParameterM[]>(`${this.environment.MOCK_SERVER}parameter`);
        };
        ParameterController.prototype.getParameterByDeviceID = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/devices/parameters", requestBody);
            // return this.http.get<ParameterM[]>(`${this.environment.MOCK_SERVER}parameter`);
        };
        return ParameterController;
    }());
    ParameterController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ParameterController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    // /tsc-library/
    var ParameterService = /** @class */ (function () {
        function ParameterService(parameterController, storageService) {
            this.parameterController = parameterController;
            this.storageService = storageService;
        }
        ParameterService.prototype.getParameterByLayoutID = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var parameterM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.parameterController.getParameterByLayoutID(orgID).toPromise()];
                        case 1:
                            parameterM = _a.sent();
                            if (parameterM) {
                                return [2 /*return*/, parameterM];
                            }
                            else {
                                return [2 /*return*/, [new Parameter()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, [new Parameter()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        ParameterService.prototype.getParameterByDeviceID = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var parameterM, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.parameterController.getParameterByDeviceID(orgID, requestBody).toPromise()];
                        case 1:
                            parameterM = _a.sent();
                            if (parameterM) {
                                return [2 /*return*/, parameterM];
                            }
                            else {
                                return [2 /*return*/, [new Parameter()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Error -', error_2);
                            return [2 /*return*/, [new Parameter()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return ParameterService;
    }());
    ParameterService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterService, deps: [{ token: ParameterController }, { token: i1__namespace$1.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ParameterService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: ParameterController }, { type: i1__namespace$1.StorageService }]; } });

    var AggregateDataController = /** @class */ (function () {
        function AggregateDataController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        AggregateDataController.prototype.getAggregateData = function (orgID, requestBody) {
            var headers = new i1$2.HttpHeaders().set('skipLoader', 'YES');
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/data/aggregate", requestBody, { headers: headers });
            // return this.http.get(`${this.environment.MOCK_SERVER}aggregate-data`);
        };
        AggregateDataController.prototype.getWaterConsumption = function (orgID, requestBody) {
            var headers = new i1$2.HttpHeaders().set('skipLoader', 'YES');
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/water-consumption", requestBody, { headers: headers });
            // return this.http.get(`${this.environment.MOCK_SERVER}aggregate-data`);
        };
        return AggregateDataController;
    }());
    AggregateDataController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AggregateDataController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var AggregateDataService = /** @class */ (function () {
        function AggregateDataService(aggregateDataController) {
            this.aggregateDataController = aggregateDataController;
        }
        AggregateDataService.prototype.getAggregateData = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var aggregatedData, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.aggregateDataController.getAggregateData(orgID, requestBody).toPromise()];
                        case 1:
                            aggregatedData = _a.sent();
                            if (aggregatedData) {
                                return [2 /*return*/, aggregatedData];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            throw error_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return AggregateDataService;
    }());
    AggregateDataService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataService, deps: [{ token: AggregateDataController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AggregateDataService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: AggregateDataController }]; } });

    // /tsc-library/
    var TrendComponent = /** @class */ (function () {
        function TrendComponent(data, storageService, dateService, parameterService, aggregateDataService, tscCommonService) {
            this.data = data;
            this.storageService = storageService;
            this.dateService = dateService;
            this.parameterService = parameterService;
            this.aggregateDataService = aggregateDataService;
            this.tscCommonService = tscCommonService;
            this.listConstant = LIST_CONSTANT;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.dateTimeIntervalEnum = i2.DateTimeIntervalEnum;
            this.dialogEnum = i3.DialogEnum;
            this.parameterM = [new Parameter()];
            this.dateRangeFC = new i8.FormControl('LAST_24_HRS', i8.Validators.required);
            this.chartType = i10.ChartTypeEnum.BASIC_AREA_CHART;
            this.viewStateFlag = i10.ChartViewStateEnum.LOADING;
            this.chartTitle = new i10.ChartTitle();
            this.chartData = new i10.BasicAreaLineBarChart();
            this.trendData = data['trendData'];
        }
        TrendComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.dateRangeChange(this.dateRangeFC.value);
            this.getParameterByLayoutID();
        };
        TrendComponent.prototype.getParameterByLayoutID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            _f = this;
                            return [4 /*yield*/, this.parameterService.getParameterByLayoutID(this.orgID)];
                        case 1:
                            _f.parameterM = (_g.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        TrendComponent.prototype.dateRangeChange = function (selectedDateRange) {
            this.startTime = this.dateService.getStartDateTime(selectedDateRange);
            switch (selectedDateRange) {
                case i2.DateTimeIntervalEnum.LAST_24_HRS:
                    this.endTime = this.dateService.getEndDateTime(i2.DateTimeIntervalEnum.CURRENT_TIME);
                    this.interval = 'min_15';
                    break;
                case i2.DateTimeIntervalEnum.LAST_7_DAYS:
                    this.endTime = this.dateService.getEndDateTime(i2.DateTimeIntervalEnum.CURRENT_DAY);
                    this.interval = 'hour_1';
                    break;
                case i2.DateTimeIntervalEnum.LAST_30_DAYS:
                    this.endTime = this.dateService.getEndDateTime(i2.DateTimeIntervalEnum.CURRENT_DAY);
                    this.interval = 'day_1';
                    break;
                default:
                    this.endTime = null;
                    this.interval = null;
                    break;
            }
            this.getTrendData();
        };
        TrendComponent.prototype.getCounterParameter = function (paramMetricValue) {
            var parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
            return parameter ? parameter.isCounter : false;
        };
        TrendComponent.prototype.getTrendData = function () {
            var _a, _b, _c, _d, _e;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, isCounterParameter, trendRes, error_1;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            this.viewStateFlag = i10.ChartViewStateEnum.LOADING;
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 3, , 4]);
                            requestData = new AggregateDataRequest();
                            isCounterParameter = this.getCounterParameter((_a = this.trendData) === null || _a === void 0 ? void 0 : _a.paramMetric);
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
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 2:
                            trendRes = _f.sent();
                            if (((_e = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0]) === null || _e === void 0 ? void 0 : _e.data.length) > 0) {
                                this.paramLabel = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].paramLabel;
                                this.chartData.metaData = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].data.map(function (item) { return ({
                                    name: moment__namespace(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                                    value: item.value
                                }); });
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
                                this.viewStateFlag = i10.ChartViewStateEnum.HAS_DATA;
                            }
                            else {
                                this.viewStateFlag = i10.ChartViewStateEnum.NO_DATA;
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _f.sent();
                            this.viewStateFlag = i10.ChartViewStateEnum.NO_DATA;
                            console.error("Error in getTrendData()", error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return TrendComponent;
    }());
    TrendComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendComponent, deps: [{ token: i1$3.MAT_DIALOG_DATA }, { token: i1__namespace$1.StorageService }, { token: i2__namespace.DateService }, { token: ParameterService }, { token: AggregateDataService }, { token: i3__namespace.TSCCommonService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    TrendComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TrendComponent, selector: "lib-trend", ngImport: i0__namespace, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ paramLabel }} Trend\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"dialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n<div class=\"matDialogContent\" mat-dialog-content>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <mat-form-field class=\"matFieldWidth100\"\n                [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                <mat-label>Select daterange</mat-label>\n                <mat-select (selectionChange)=\"dateRangeChange($event.value)\" [formControl]=\"dateRangeFC\">\n                    <mat-option disabled>Select daterange</mat-option>\n                    <mat-option *ngFor=\"let daterange of listConstant.TREND_DATE_RANGE\" [value]=\"daterange.value\">\n                        {{ daterange.label }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <lib-basic-area-line-bar [chartTypeInp]=\"chartType\" [chartTitleInp]=\"chartTitle\" [viewStateInp]=\"viewStateFlag\"\n                [dataInp]=\"chartData\"></lib-basic-area-line-bar>\n        </div>\n    </div>\n</div>", components: [{ type: i6__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i10__namespace.BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: ["chartTypeInp", "viewStateInp", "chartTitleInp", "dataInp"] }], directives: [{ type: i1__namespace$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1__namespace$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-trend',
                        templateUrl: './trend.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$3.MAT_DIALOG_DATA]
                        }] }, { type: i1__namespace$1.StorageService }, { type: i2__namespace.DateService }, { type: ParameterService }, { type: AggregateDataService }, { type: i3__namespace.TSCCommonService }];
        } });

    // /tsc-library/
    var TrendModule = /** @class */ (function () {
        function TrendModule() {
        }
        return TrendModule;
    }());
    TrendModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TrendModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendModule, declarations: [TrendComponent], imports: [i7.CommonModule,
            i10.BasicAreaLineBarModule,
            i8.ReactiveFormsModule,
            i1$3.MatDialogModule,
            i6.MatButtonModule,
            i13.MatInputModule,
            i3$1.MatFormFieldModule,
            i4.MatSelectModule,
            i12$1.MatTooltipModule] });
    TrendModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendModule, imports: [[
                i7.CommonModule,
                i10.BasicAreaLineBarModule,
                i8.ReactiveFormsModule,
                i1$3.MatDialogModule,
                i6.MatButtonModule,
                i13.MatInputModule,
                i3$1.MatFormFieldModule,
                i4.MatSelectModule,
                i12$1.MatTooltipModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TrendComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i10.BasicAreaLineBarModule,
                            i8.ReactiveFormsModule,
                            i1$3.MatDialogModule,
                            i6.MatButtonModule,
                            i13.MatInputModule,
                            i3$1.MatFormFieldModule,
                            i4.MatSelectModule,
                            i12$1.MatTooltipModule,
                        ]
                    }]
            }] });

    var LayoutNotFoundComponent = /** @class */ (function () {
        function LayoutNotFoundComponent() {
        }
        LayoutNotFoundComponent.prototype.ngOnInit = function () {
        };
        return LayoutNotFoundComponent;
    }());
    LayoutNotFoundComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutNotFoundComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    LayoutNotFoundComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutNotFoundComponent, selector: "lib-layout-not-found", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h-100\">\n    <div class=\"card-body\">\n        <div class=\"container d-flex align-items-center\">\n            <div class=\"mx-auto text-center\">\n                <img class=\"layoutNotFindImg\" src=\"/assets/images/layout-not-found.jpg\" alt=\"Layout not found\" />\n                <br />\n                <br />\n                You don't have any layout to showcase the respective page. Please create a layout for better experience.\n                <br />\n                Click <a [href]=\"'layout/page'\">here</a> to create a layout.\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".layoutNotFindImg{max-width:450px}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutNotFoundComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-layout-not-found',
                        templateUrl: './layout-not-found.component.html',
                        styleUrls: ['./layout-not-found.component.scss']
                    }]
            }], ctorParameters: function () { return []; } });

    var LayoutNotFoundModule = /** @class */ (function () {
        function LayoutNotFoundModule() {
        }
        LayoutNotFoundModule.forRoot = function (environment) {
            return {
                ngModule: LayoutNotFoundModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return LayoutNotFoundModule;
    }());
    LayoutNotFoundModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutNotFoundModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LayoutNotFoundModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutNotFoundModule, declarations: [LayoutNotFoundComponent], imports: [i7.CommonModule], exports: [LayoutNotFoundComponent] });
    LayoutNotFoundModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutNotFoundModule, imports: [[
                i7.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutNotFoundModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LayoutNotFoundComponent,
                        ],
                        imports: [
                            i7.CommonModule
                        ],
                        exports: [
                            LayoutNotFoundComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var SuccessComponent = /** @class */ (function () {
        function SuccessComponent(activatedRoute, router, layoutService, organizationService, storageService) {
            this.activatedRoute = activatedRoute;
            this.router = router;
            this.layoutService = layoutService;
            this.organizationService = organizationService;
            this.storageService = storageService;
            this.redirectUrl = '/';
            this.noTimezone = './timezone-not-found';
            this.layoutM = [new i5.Layout()];
            this.timezone = null;
        }
        SuccessComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.queryParams.subscribe(function (queryParam) {
                if (queryParam.redirectUrl) {
                    _this.redirectUrl = queryParam.redirectUrl;
                }
            });
            // INFO: SOMYA AGRAWAL
            // Clearing layoutID from storage in switch org because previous layoutID remains in local storage even if current org does not have any layout!
            this.storageService.deleteStorage('layoutID');
            this.timeZoneCheck();
        };
        SuccessComponent.prototype.timeZoneCheck = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.organizationService.getOrgTimezone()];
                        case 1:
                            _a.timezone = (_b.sent());
                            if (this.timezone) {
                                this.storageService.setStorage('timezone', this.timezone);
                                this.getLayoutsByOrgID();
                            }
                            else {
                                this.router.navigate([this.noTimezone]);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        SuccessComponent.prototype.getLayoutsByOrgID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var orgID, _a, defaultLayout, defaultLayoutID;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            orgID = this.storageService.getStorage('currentOrgID');
                            _a = this;
                            return [4 /*yield*/, this.layoutService.getLayoutByOrgID(orgID)];
                        case 1:
                            _a.layoutM = (_b.sent());
                            defaultLayout = this.layoutM.find(function (layout) { return layout.isDefault; });
                            if (defaultLayout) {
                                defaultLayoutID = defaultLayout.id;
                                this.storageService.setStorage('layoutID', defaultLayoutID);
                            }
                            else {
                                console.error('No layout found.');
                            }
                            this.router.navigate([this.redirectUrl]);
                            return [2 /*return*/];
                    }
                });
            });
        };
        return SuccessComponent;
    }());
    SuccessComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SuccessComponent, deps: [{ token: i1__namespace.ActivatedRoute }, { token: i1__namespace.Router }, { token: i5__namespace.LayoutService }, { token: i3__namespace$2.OrganizationService }, { token: i1__namespace$1.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SuccessComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SuccessComponent, selector: "app-success", ngImport: i0__namespace, template: "<div class=\"d-flex h-100 justify-content-center align-items-center\">\n    <div class=\"text-center fs-4\"><img class=\"appAuthImg\"\n            src=\"assets/images/application-logo/tsc-with-name.png\" />\n        <br />\n        <br />\n        <span class=\"spinner-border spinner-border-sm text-success\"></span> ..\n    </div>\n</div>\n", styles: [".appAuthImg{height:55px}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SuccessComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-success',
                        templateUrl: './success.component.html',
                        styleUrls: ['./success.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ActivatedRoute }, { type: i1__namespace.Router }, { type: i5__namespace.LayoutService }, { type: i3__namespace$2.OrganizationService }, { type: i1__namespace$1.StorageService }]; } });

    // /tsc-library/
    var AggregationComponent = /** @class */ (function () {
        function AggregationComponent() {
            this.listConstant = LIST_CONSTANT;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.allAggregationIDs = [];
            this.totalAggregationCount = 0;
            this.aggregationFC = new i8.FormControl(['avg'], [i8.Validators.required]);
            this.emitFilter = new i0.EventEmitter();
        }
        AggregationComponent.prototype.ngOnInit = function () {
            var _this = this;
            var aggregationList = this.listConstant.AGGREGATION;
            this.totalAggregationCount = aggregationList.length;
            aggregationList.forEach(function (aggregation) { return _this.allAggregationIDs.push(aggregation['value']); });
        };
        AggregationComponent.prototype.ngAfterViewInit = function () {
            this.emitFilter.emit();
        };
        AggregationComponent.prototype.selectAllAggregation = function () {
            if (!this.aggregationFC.value.includes(-1)) {
                this.aggregationFC.reset([]);
                return;
            }
            this.aggregationFC.setValue(__spreadArray([-1], __read(this.allAggregationIDs)));
            this.emitFilter.emit();
        };
        AggregationComponent.prototype.selectedAggregation = function () {
            var selected = this.aggregationFC.value;
            if (selected.includes(-1)) {
                selected.shift();
                this.aggregationFC.patchValue(selected);
            }
            else if (this.aggregationFC.value.length == this.totalAggregationCount) {
                this.allAggregationIDs.splice(0, 0, -1);
                this.aggregationFC.patchValue(this.allAggregationIDs);
            }
            else {
                var filteredSelected = selected.filter(function (s) { return s != -1; });
                this.aggregationFC.patchValue(filteredSelected);
            }
            this.emitFilter.emit();
        };
        return AggregationComponent;
    }());
    AggregationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AggregationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationComponent, selector: "lib-aggregation", outputs: { emitFilter: "emitFilter" }, ngImport: i0__namespace, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation</mat-label>\n    <mat-select [formControl]=\"aggregationFC\" multiple required>\n        <mat-option [value]=\"-1\" (click)=\"selectAllAggregation()\">\n            Select all\n        </mat-option>\n        <mat-option *ngFor=\"let aggregation of listConstant.AGGREGATION\" [value]=\"aggregation.value\"\n            (click)=\"selectedAggregation()\">\n            {{ aggregation.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggregationFC.touched && aggregationFC.hasError('required')\">\n        Select aggregation\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-aggregation',
                        templateUrl: './aggregation.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { emitFilter: [{
                    type: i0.Output
                }] } });

    var AggregationModule = /** @class */ (function () {
        function AggregationModule() {
        }
        return AggregationModule;
    }());
    AggregationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AggregationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationModule, declarations: [AggregationComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i3$1.MatFormFieldModule,
            i6$1.NgxMatSelectSearchModule], exports: [AggregationComponent] });
    AggregationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i3$1.MatFormFieldModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AggregationComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i3$1.MatFormFieldModule,
                            i6$1.NgxMatSelectSearchModule
                        ],
                        exports: [
                            AggregationComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var AggregationDurationComponent = /** @class */ (function () {
        function AggregationDurationComponent() {
            this.listConstant = LIST_CONSTANT;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.aggDurationFC = new i8.FormControl('min_15', [i8.Validators.required]);
            this.emitFilter = new i0.EventEmitter();
        }
        AggregationDurationComponent.prototype.ngOnInit = function () {
        };
        AggregationDurationComponent.prototype.ngAfterViewInit = function () {
            this.emitFilter.emit();
        };
        AggregationDurationComponent.prototype.onChange = function (selectedAD) {
            this.aggDurationFC.patchValue(selectedAD);
            this.emitFilter.emit();
        };
        return AggregationDurationComponent;
    }());
    AggregationDurationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AggregationDurationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: { emitFilter: "emitFilter" }, ngImport: i0__namespace, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation duration</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"aggDurationFC\" required>\n        <mat-option *ngFor=\"let duration of listConstant.AGGREGATION_DURATION\" [value]=\"duration.value\">\n            {{ duration.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggDurationFC.touched && aggDurationFC.hasError('required')\">\n        Select aggregation duration\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-aggregation-duration',
                        templateUrl: './aggregation-duration.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { emitFilter: [{
                    type: i0.Output
                }] } });

    var AggregationDurationModule = /** @class */ (function () {
        function AggregationDurationModule() {
        }
        return AggregationDurationModule;
    }());
    AggregationDurationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AggregationDurationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationModule, declarations: [AggregationDurationComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i3$1.MatFormFieldModule,
            i6$1.NgxMatSelectSearchModule], exports: [AggregationDurationComponent] });
    AggregationDurationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i3$1.MatFormFieldModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AggregationDurationComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i3$1.MatFormFieldModule,
                            i6$1.NgxMatSelectSearchModule
                        ],
                        exports: [
                            AggregationDurationComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var ParamMetricComponent = /** @class */ (function () {
        function ParamMetricComponent(storageService, parameterService) {
            this.storageService = storageService;
            this.parameterService = parameterService;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.parameterM = [new Parameter()];
            this.allParameterID = [];
            this.totalParameterCount = 0;
            this.parameterFC = new i8.FormControl([], [i8.Validators.required]);
            this.paramSearchUtil = new i3.MatSelectSearchService(['label']);
            this.emitFilter = new i0.EventEmitter();
        }
        ParamMetricComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
        };
        ParamMetricComponent.prototype.ngOnChanges = function (changes) {
            if (changes.deviceInp && this.deviceInp) {
                this.getParameterByDeviceID(this.deviceInp);
            }
        };
        ParamMetricComponent.prototype.getParameterByDeviceID = function (selectedDevices) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            requestBody = {};
                            requestBody['deviceID'] = [selectedDevices];
                            _a = this;
                            return [4 /*yield*/, this.parameterService.getParameterByDeviceID(this.orgID, requestBody)];
                        case 1:
                            _a.parameterM = (_b.sent());
                            this.paramSearchUtil.entityArr = this.parameterM;
                            this.paramSearchUtil.createSubscription();
                            this.totalParameterCount = this.parameterM.length;
                            this.parameterM.forEach(function (parameter) { return _this.allParameterID.push(parameter['paramMetric']); });
                            this.emitFilter.emit();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ParamMetricComponent.prototype.selectAllParameters = function () {
            if (!this.parameterFC.value.includes(-1)) {
                this.parameterFC.reset([]);
                return;
            }
            this.parameterFC.setValue(__spreadArray([-1], __read(this.allParameterID)));
            this.emitFilter.emit();
        };
        ParamMetricComponent.prototype.selectedParameters = function () {
            var selected = this.parameterFC.value;
            if (selected.includes(-1)) {
                selected.shift();
                this.parameterFC.patchValue(selected);
            }
            else if (this.parameterFC.value.length == this.totalParameterCount) {
                this.allParameterID.splice(0, 0, -1);
                this.parameterFC.patchValue(this.allParameterID);
            }
            else {
                var filteredSelected = selected.filter(function (s) { return s != -1; });
                this.parameterFC.patchValue(filteredSelected);
            }
            this.emitFilter.emit();
        };
        return ParamMetricComponent;
    }());
    ParamMetricComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: ParameterService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParamMetricComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParamMetricComponent, selector: "lib-param-metric", inputs: { deviceInp: "deviceInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select parameter</mat-label>\n    <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"parameterFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"paramSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\" [hidden]=\"paramSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let parameter of paramSearchUtil.filteredEntities | async\" [value]=\"parameter.paramMetric\"\n                (click)=\"selectedParameters()\">\n                {{ parameter.label }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"parameterFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"!deviceInp\">\n        Please select device first\n    </mat-error>\n    <mat-error *ngIf=\"parameterFC.touched && parameterFC.hasError('required') && deviceInp\">\n        Select parameter\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-param-metric',
                        templateUrl: './param-metric.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: ParameterService }]; }, propDecorators: { deviceInp: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }] } });

    var ParamMetricModule = /** @class */ (function () {
        function ParamMetricModule() {
        }
        return ParamMetricModule;
    }());
    ParamMetricModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ParamMetricModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricModule, declarations: [ParamMetricComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i3$1.MatFormFieldModule,
            i6$1.NgxMatSelectSearchModule], exports: [ParamMetricComponent] });
    ParamMetricModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i3$1.MatFormFieldModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParamMetricComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i3$1.MatFormFieldModule,
                            i6$1.NgxMatSelectSearchModule
                        ],
                        exports: [
                            ParamMetricComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var ParameterComponent = /** @class */ (function () {
        function ParameterComponent(storageService, parameterService) {
            this.storageService = storageService;
            this.parameterService = parameterService;
            this.COMMON_CONSTANT = i3.COMMON_CONSTANT;
            this.MaterialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.emitFilter = new i0.EventEmitter();
            this.parameterM = [new Parameter()];
            this.selectedParameterFC = new i8.FormControl('', [i8.Validators.required]);
            this.parameterSearchUtil = new i3.MatSelectSearchService(['label']);
        }
        ParameterComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.getParameterByLayoutID();
        };
        ParameterComponent.prototype.getParameterByLayoutID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.parameterService.getParameterByLayoutID(this.orgID)];
                        case 1:
                            _a.parameterM = (_b.sent());
                            this.parameterSearchUtil.entityArr = this.parameterM;
                            this.parameterSearchUtil.createSubscription();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ParameterComponent.prototype.parameterChange = function (selectedParameter) {
            this.selectedParameterFC.patchValue(selectedParameter);
            this.emitFilter.emit();
        };
        return ParameterComponent;
    }());
    ParameterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: ParameterService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParameterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterComponent, selector: "lib-parameter", outputs: { emitFilter: "emitFilter" }, ngImport: i0__namespace, template: "<div class=\"row\">\n    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select parameter</mat-label>\n        <mat-select (selectionChange)=\"parameterChange($event.value)\" [formControl]=\"selectedParameterFC\" required>\n            <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"parameterSearchUtil.filterFC\"\n                        placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let parameter of parameterSearchUtil.filteredEntities | async\" [value]=\"parameter.id\">\n                    {{ parameter.label }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n        <mat-error *ngIf=\"selectedParameterFC.hasError('required')\">\n            Select parameter\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-parameter',
                        templateUrl: './parameter.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: ParameterService }]; }, propDecorators: { emitFilter: [{
                    type: i0.Output
                }] } });

    var ParameterModule = /** @class */ (function () {
        function ParameterModule() {
        }
        return ParameterModule;
    }());
    ParameterModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ParameterModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterModule, declarations: [ParameterComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i3$1.MatFormFieldModule,
            i6$1.NgxMatSelectSearchModule], exports: [ParameterComponent] });
    ParameterModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i3$1.MatFormFieldModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParameterComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i3$1.MatFormFieldModule,
                            i6$1.NgxMatSelectSearchModule
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

    var DeviceController = /** @class */ (function () {
        function DeviceController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        DeviceController.prototype.getDeviceInfo = function (orgID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/devices/status");
        };
        DeviceController.prototype.getDevicesByEntityID = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/entities/devices", requestBody);
            // return this.http.get<DeviceM[]>(`${this.environment.MOCK_SERVER}devices`);
        };
        return DeviceController;
    }());
    DeviceController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DeviceController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var DeviceService = /** @class */ (function () {
        function DeviceService(deviceController) {
            this.deviceController = deviceController;
        }
        DeviceService.prototype.getDevicesByEntityID = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var deviceM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.deviceController.getDevicesByEntityID(orgID, requestBody).toPromise()];
                        case 1:
                            deviceM = _a.sent();
                            if (deviceM) {
                                return [2 /*return*/, deviceM];
                            }
                            else {
                                return [2 /*return*/, [new Device()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, [new Device()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return DeviceService;
    }());
    DeviceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceService, deps: [{ token: DeviceController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DeviceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DeviceController }]; } });

    // /tsc-library/
    var DeviceComponent = /** @class */ (function () {
        function DeviceComponent(storageService, deviceService) {
            this.storageService = storageService;
            this.deviceService = deviceService;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.deviceM = [new Device()];
            this.allDeviceID = [];
            this.totalDeviceCount = 0;
            this.deviceFC = new i8.FormControl('', [i8.Validators.required]);
            this.multipleDeviceFC = new i8.FormControl([], [i8.Validators.required]);
            this.deviceSearchUtil = new i3.MatSelectSearchService(['name']);
            this.emitFilter = new i0.EventEmitter();
        }
        DeviceComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
        };
        DeviceComponent.prototype.ngOnChanges = function (changes) {
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
        };
        DeviceComponent.prototype.getDevicesByEntityID = function (entityID) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            requestBody = {};
                            requestBody['entityID'] = entityID;
                            _b = this;
                            return [4 /*yield*/, this.deviceService.getDevicesByEntityID(this.orgID, requestBody)];
                        case 1:
                            _b.deviceM = (_c.sent());
                            this.deviceSearchUtil.entityArr = this.deviceM;
                            this.deviceSearchUtil.createSubscription();
                            this.totalDeviceCount = this.deviceM.length;
                            this.deviceM.forEach(function (device) { return _this.allDeviceID.push(device['id']); });
                            this.emitFilter.emit();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DeviceComponent.prototype.onChange = function (selectedDevice) {
            this.deviceFC.patchValue(selectedDevice);
            this.emitFilter.emit();
        };
        DeviceComponent.prototype.selectAllDevices = function () {
            if (!this.multipleDeviceFC.value.includes(-1)) {
                this.multipleDeviceFC.reset([]);
                return;
            }
            this.multipleDeviceFC.setValue(__spreadArray([-1], __read(this.allDeviceID)));
            this.emitFilter.emit();
        };
        DeviceComponent.prototype.selectedDevices = function () {
            var selected = this.multipleDeviceFC.value;
            if (selected.includes(-1)) {
                selected.shift();
                this.multipleDeviceFC.patchValue(selected);
            }
            else if (this.multipleDeviceFC.value.length == this.totalDeviceCount) {
                this.allDeviceID.splice(0, 0, -1);
                this.multipleDeviceFC.patchValue(this.allDeviceID);
            }
            else {
                var filteredSelected = selected.filter(function (s) { return s != -1; });
                this.multipleDeviceFC.patchValue(filteredSelected);
            }
            this.emitFilter.emit();
        };
        return DeviceComponent;
    }());
    DeviceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: DeviceService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DeviceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DeviceComponent, selector: "lib-device", inputs: { dropdownTypeInp: "dropdownTypeInp", entityInp: "entityInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.SINGLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select device</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"deviceFC\" required>\n        <ng-container *ngIf=\"deviceM && deviceM.length > 0 && deviceM[0]['id']; else noDeviceFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"deviceSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let device of deviceSearchUtil.filteredEntities | async\" [value]=\"device.id\">\n                {{ device.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDeviceFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"!entityInp\">\n        Please select entity first\n    </mat-error>\n    <mat-error\n        *ngIf=\"deviceFC.touched && deviceFC.hasError('required') && entityInp\">\n        Select device\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.MULTIPLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select device</mat-label>\n    <ng-container *ngIf=\"deviceM && deviceM.length > 0 && deviceM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"multipleDeviceFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"deviceSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllDevices()\"  [hidden]=\"deviceSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let device of deviceSearchUtil.filteredEntities | async\" [value]=\"device.id\"\n                (click)=\"selectedDevices()\">\n                {{ device.name }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"multipleDeviceFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"!entityInp\">\n        Please select entity first\n    </mat-error>\n    <mat-error *ngIf=\"multipleDeviceFC.touched && multipleDeviceFC.hasError('required') && entityInp\">\n        Select device\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-device',
                        templateUrl: './device.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: DeviceService }]; }, propDecorators: { dropdownTypeInp: [{
                    type: i0.Input
                }], entityInp: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }] } });

    var DeviceModule = /** @class */ (function () {
        function DeviceModule() {
        }
        return DeviceModule;
    }());
    DeviceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DeviceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceModule, declarations: [DeviceComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i3$1.MatFormFieldModule,
            i6$1.NgxMatSelectSearchModule], exports: [DeviceComponent] });
    DeviceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i3$1.MatFormFieldModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DeviceComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i3$1.MatFormFieldModule,
                            i6$1.NgxMatSelectSearchModule
                        ],
                        exports: [
                            DeviceComponent
                        ]
                    }]
            }] });

    var EntityController = /** @class */ (function () {
        function EntityController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        EntityController.prototype.getEntitiesByOrgID = function (orgID) {
            // return this.http.get<EntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities`);
            return this.http.get(this.environment.MOCK_SERVER + "entities");
        };
        EntityController.prototype.getEntityHierarchyByParameterID = function (orgID, parameterID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/parameters/" + parameterID + "/entities");
        };
        EntityController.prototype.getEntityLevelConsumption = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/entities/load-consumption", requestBody);
        };
        EntityController.prototype.getEntityTypeByLayoutID = function (orgID, skipLoader) {
            var headers = new i1$2.HttpHeaders().set('skipLoader', skipLoader);
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/entities/type", { headers: headers });
        };
        EntityController.prototype.getEntitiesWithDevices = function (orgID, layoutID, requestBody, skipLoader) {
            var headers = new i1$2.HttpHeaders().set('skipLoader', skipLoader);
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/" + layoutID + "/entity-device", requestBody, { headers: headers });
        };
        EntityController.prototype.getEntityByParameterID = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/entities", requestBody);
            // return this.http.get<EntityM[]>(`${this.environment.MOCK_SERVER}entities`);
        };
        EntityController.prototype.getEntitiesForTreeView = function (orgID, layoutID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/" + layoutID + "/entities");
        };
        EntityController.prototype.getEntityByID = function (orgID, layoutID, entityID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/" + layoutID + "/entities/" + entityID);
        };
        EntityController.prototype.createEntity = function (orgID, layoutID, entityID, entity) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/" + layoutID + "/entities/" + entityID + "/add-child", entity);
        };
        EntityController.prototype.updateEntity = function (orgID, layoutID, entityID, entity) {
            return this.http.patch(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/" + layoutID + "/entities/" + entityID, entity);
        };
        EntityController.prototype.deleteEntity = function (orgID, layoutID, entityID) {
            return this.http.delete(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/" + layoutID + "/entities/" + entityID);
        };
        return EntityController;
    }());
    EntityController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EntityController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var EntityService = /** @class */ (function () {
        function EntityService(entityController) {
            this.entityController = entityController;
        }
        EntityService.prototype.getEntitiesByOrgID = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var entityM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityController.getEntitiesByOrgID(orgID).toPromise()];
                        case 1:
                            entityM = _a.sent();
                            if (entityM) {
                                return [2 /*return*/, entityM];
                            }
                            else {
                                return [2 /*return*/, [new Entity()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, [new Entity()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        EntityService.prototype.getEntityHierarchyByParameterID = function (orgID, parameterID) {
            return __awaiter(this, void 0, void 0, function () {
                var entityTreeM, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityController.getEntityHierarchyByParameterID(orgID, parameterID).toPromise()];
                        case 1:
                            entityTreeM = _a.sent();
                            if (entityTreeM) {
                                return [2 /*return*/, entityTreeM];
                            }
                            else {
                                return [2 /*return*/, [new EntityTree()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Error -', error_2);
                            return [2 /*return*/, [new EntityTree()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        EntityService.prototype.getEntityTypeByLayoutID = function (orgID, skipLoader) {
            return __awaiter(this, void 0, void 0, function () {
                var entityTypeM, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityController.getEntityTypeByLayoutID(orgID, skipLoader).toPromise()];
                        case 1:
                            entityTypeM = _a.sent();
                            if (entityTypeM) {
                                return [2 /*return*/, entityTypeM];
                            }
                            else {
                                return [2 /*return*/, [new EntityType()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _a.sent();
                            console.error('Error -', error_3);
                            return [2 /*return*/, [new EntityType()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        EntityService.prototype.getEntitiesWithDevices = function (orgID, layoutID, requestBody, skipLoader) {
            return __awaiter(this, void 0, void 0, function () {
                var entityDeviceM, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityController.getEntitiesWithDevices(orgID, layoutID, requestBody, skipLoader).toPromise()];
                        case 1:
                            entityDeviceM = _a.sent();
                            if (entityDeviceM) {
                                return [2 /*return*/, entityDeviceM];
                            }
                            else {
                                return [2 /*return*/, new EntityTree()];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_4 = _a.sent();
                            console.error('Error -', error_4);
                            return [2 /*return*/, new EntityTree()];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        EntityService.prototype.getEntityByParameterID = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var entityM, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityController.getEntityByParameterID(orgID, requestBody).toPromise()];
                        case 1:
                            entityM = _a.sent();
                            if (entityM) {
                                return [2 /*return*/, entityM];
                            }
                            else {
                                return [2 /*return*/, [new Entity()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_5 = _a.sent();
                            console.error('Error -', error_5);
                            return [2 /*return*/, [new Entity()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return EntityService;
    }());
    EntityService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityService, deps: [{ token: EntityController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EntityService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: EntityController }]; } });

    // /tsc-library/
    var EntityComponent = /** @class */ (function () {
        function EntityComponent(storageService, entityService) {
            this.storageService = storageService;
            this.entityService = entityService;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.entityM = [new Entity()];
            this.dropdownType = this.dropdownTypeEnum.SINGLE_DROPDOWN;
            this.allEntityID = [];
            this.totalEntityCount = 0;
            this.entityFC = new i8.FormControl('', [i8.Validators.required]);
            this.multipleEntityFC = new i8.FormControl([], [i8.Validators.required]);
            this.entitySearchUtil = new i3.MatSelectSearchService(['name']);
            this.emitFilter = new i0.EventEmitter();
        }
        EntityComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.getEntitiesByOrgID();
        };
        EntityComponent.prototype.ngOnChanges = function (changes) {
            if (changes.dropdownTypeInp && this.dropdownTypeInp) {
                this.dropdownType = this.dropdownTypeInp;
            }
        };
        EntityComponent.prototype.getEntitiesByOrgID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.entityService.getEntitiesByOrgID(this.orgID)];
                        case 1:
                            _a.entityM = (_b.sent());
                            this.entitySearchUtil.entityArr = this.entityM;
                            this.entitySearchUtil.createSubscription();
                            this.totalEntityCount = this.entityM.length;
                            this.entityM.forEach(function (entity) { return _this.allEntityID.push(entity['id']); });
                            if (this.entityM.length > 0) {
                                this.entityFC.patchValue(this.entityM[0]['id']);
                                this.emitFilter.emit();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        EntityComponent.prototype.onChange = function (selectedEntity) {
            this.entityFC.patchValue(selectedEntity);
            this.emitFilter.emit();
        };
        EntityComponent.prototype.selectAllEntities = function () {
            if (!this.multipleEntityFC.value.includes(-1)) {
                this.multipleEntityFC.reset([]);
                return;
            }
            this.multipleEntityFC.setValue(__spreadArray([-1], __read(this.allEntityID)));
            this.emitFilter.emit();
        };
        EntityComponent.prototype.selectedEntities = function () {
            var selected = this.multipleEntityFC.value;
            if (selected.includes(-1)) {
                selected.shift();
                this.multipleEntityFC.patchValue(selected);
            }
            else if (this.multipleEntityFC.value.length == this.totalEntityCount) {
                this.allEntityID.splice(0, 0, -1);
                this.multipleEntityFC.patchValue(this.allEntityID);
            }
            else {
                var filteredSelected = selected.filter(function (s) { return s != -1; });
                this.multipleEntityFC.patchValue(filteredSelected);
            }
            this.emitFilter.emit();
        };
        return EntityComponent;
    }());
    EntityComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: EntityService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EntityComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityComponent, selector: "lib-entity", inputs: { dropdownTypeInp: "dropdownTypeInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.SINGLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"entityFC\" required>\n        <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noDataFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\">\n                {{ entity.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"entityFC.touched && entityFC.hasError('required')\">\n        Select entity\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.MULTIPLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity</mat-label>\n    <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"multipleEntityFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllEntities()\" [hidden]=\"entitySearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\"\n                (click)=\"selectedEntities()\">\n                {{ entity.name }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"multipleEntityFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"multipleEntityFC.touched && multipleEntityFC.hasError('required') && entityInp\">\n        Select entity\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-entity',
                        templateUrl: './entity.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: EntityService }]; }, propDecorators: { dropdownTypeInp: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }] } });

    var EntityModule = /** @class */ (function () {
        function EntityModule() {
        }
        return EntityModule;
    }());
    EntityModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    EntityModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityModule, declarations: [EntityComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i3$1.MatFormFieldModule,
            i6$1.NgxMatSelectSearchModule], exports: [EntityComponent] });
    EntityModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i3$1.MatFormFieldModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EntityComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i3$1.MatFormFieldModule,
                            i6$1.NgxMatSelectSearchModule
                        ],
                        exports: [
                            EntityComponent
                        ]
                    }]
            }] });

    var UnitController = /** @class */ (function () {
        function UnitController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        UnitController.prototype.getUnitByParameterID = function (orgID, parameterID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/parameters/" + parameterID + "/unit-type");
        };
        return UnitController;
    }());
    UnitController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UnitController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var UnitService = /** @class */ (function () {
        function UnitService(unitController) {
            this.unitController = unitController;
        }
        UnitService.prototype.getUnitByParameterID = function (orgID, parameterID) {
            return __awaiter(this, void 0, void 0, function () {
                var unitM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.unitController.getUnitByParameterID(orgID, parameterID).toPromise()];
                        case 1:
                            unitM = _a.sent();
                            if (unitM) {
                                return [2 /*return*/, unitM];
                            }
                            else {
                                return [2 /*return*/, [new Unit()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, [new Unit()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UnitService;
    }());
    UnitService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitService, deps: [{ token: UnitController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UnitService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: UnitController }]; } });

    // /tsc-library/
    var UnitComponent = /** @class */ (function () {
        function UnitComponent(storageService, unitService) {
            this.storageService = storageService;
            this.unitService = unitService;
            this.COMMON_CONSTANT = i3.COMMON_CONSTANT;
            this.MaterialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.emitFilter = new i0.EventEmitter();
            this.unitM = [new Unit()];
            this.selectedUnitFC = new i8.FormControl('', [i8.Validators.required]);
            this.unitSearchUtil = new i3.MatSelectSearchService(['name']);
        }
        UnitComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
        };
        UnitComponent.prototype.ngOnChanges = function (changes) {
            if (this.selectedParameterID) {
                if (changes.selectedParameterID) {
                    this.getUnitByParameterID(this.selectedParameterID);
                }
            }
        };
        UnitComponent.prototype.getUnitByParameterID = function (parameterID) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.unitService.getUnitByParameterID(this.orgID, parameterID)];
                        case 1:
                            _a.unitM = (_b.sent());
                            this.unitSearchUtil.entityArr = this.unitM;
                            this.unitSearchUtil.createSubscription();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UnitComponent.prototype.unitChange = function (selectedUnit) {
            this.selectedUnitFC.patchValue(selectedUnit);
            this.emitFilter.emit();
        };
        return UnitComponent;
    }());
    UnitComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: UnitService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UnitComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UnitComponent, selector: "lib-unit", inputs: { selectedParameterID: "selectedParameterID" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"row\">\n    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select unit</mat-label>\n        <mat-select (selectionChange)=\"unitChange($event.value)\" [formControl]=\"selectedUnitFC\" required>\n            <ng-container *ngIf=\"unitM && unitM.length > 0 && unitM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"unitSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                        noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let unit of unitSearchUtil.filteredEntities | async\" [value]=\"unit.id\">\n                    {{ unit.name }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n        <mat-error *ngIf=\"!selectedParameterID\">\n            Please select parameter first\n        </mat-error>\n        <mat-error *ngIf=\"selectedUnitFC.hasError('required') && selectedParameterID\">\n            Select unit\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-unit',
                        templateUrl: './unit.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: UnitService }]; }, propDecorators: { selectedParameterID: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }] } });

    var UnitModule = /** @class */ (function () {
        function UnitModule() {
        }
        return UnitModule;
    }());
    UnitModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UnitModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitModule, declarations: [UnitComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i3$1.MatFormFieldModule,
            i6$1.NgxMatSelectSearchModule], exports: [UnitComponent] });
    UnitModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i3$1.MatFormFieldModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UnitComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i3$1.MatFormFieldModule,
                            i6$1.NgxMatSelectSearchModule
                        ],
                        exports: [
                            UnitComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var HomeComponent = /** @class */ (function () {
        function HomeComponent(storageService, dateService, tscCommonService, aggregateDataService, entityController, deviceController) {
            this.storageService = storageService;
            this.dateService = dateService;
            this.tscCommonService = tscCommonService;
            this.aggregateDataService = aggregateDataService;
            this.entityController = entityController;
            this.deviceController = deviceController;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.entityConsumption = [new EntityLevelConsumption()];
            this.deviceInfoM = new DeviceInfo();
        }
        HomeComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            if (this.applicationKeyID == applicationService.ApplicationKeyID.ENERGY_KEY_ID) {
                this.label = "Energy";
                this.icon = "bolt";
                this.paramKey = "engEnergyUsed";
                this.outerStrokeColor = "#fa9200";
                this.outerStrokeGradientStopColor = "#fdd130";
                this.innerStrokeColor = "#fbe2a6";
            }
            else if (this.applicationKeyID == applicationService.ApplicationKeyID.WATER_KEY_ID) {
                this.label = "Water";
                this.icon = "water_drop";
                this.paramKey = "gwFlowTotalizer";
                this.outerStrokeColor = "#4882c2";
                this.outerStrokeGradientStopColor = "#53a9ff";
                this.innerStrokeColor = "#dbe7ff";
            }
            this.getTotalConsumption(i2.DateTimeIntervalEnum.CURRENT_DAY)
                .then(function (app) {
                _this.todayConsumption = app;
            });
            this.getTotalConsumption(i2.DateTimeIntervalEnum.CURRENT_MONTH)
                .then(function (app) {
                var _a, _b, _c, _d, _e, _f;
                _this.currentMonthConsumption = app;
                var totalConsumptionValue = (_d = (_c = (_b = (_a = _this.currentMonthConsumption) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['data']) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d['value'];
                _this.totalConsumptionCircleData = {
                    percent: _this.tscCommonService.formatLargeNumber(totalConsumptionValue, 'false', 1),
                    maxPercent: 999999999,
                    units: (_f = (_e = _this.currentMonthConsumption) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.unit,
                    showUnits: true,
                    radius: 75,
                    space: 4,
                    outerStrokeGradient: true,
                    outerStrokeWidth: 10,
                    outerStrokeColor: _this.outerStrokeColor,
                    outerStrokeGradientStopColor: _this.outerStrokeGradientStopColor,
                    innerStrokeColor: _this.innerStrokeColor,
                    showBackground: false,
                    innerStrokeWidth: 5,
                    showSubtitle: false,
                    subtitleFormat: false,
                    startFromZero: false,
                    animationDuration: 500,
                    backgroundColor: '#ffffff',
                };
            });
            this.getTotalConsumption(i2.DateTimeIntervalEnum.CURRENT_YEAR)
                .then(function (app) {
                _this.currentYearConsumption = app;
            });
            this.getTotalEntitiesConsumption();
            this.getEntityLevelConsumption();
            this.getDeviceInfo();
        };
        HomeComponent.prototype.getTotalConsumption = function (selectedRange) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, result, error_1;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            _g.trys.push([0, 2, , 3]);
                            requestData = new AggregateDataRequest();
                            if (selectedRange == i2.DateTimeIntervalEnum.CURRENT_DAY) {
                                requestData.startTime = this.dateService.getStartDateTime(i2.DateTimeIntervalEnum.CURRENT_DAY);
                                requestData.interval = 'day_1';
                            }
                            else if (selectedRange == i2.DateTimeIntervalEnum.CURRENT_MONTH) {
                                requestData.startTime = this.dateService.getStartDateTime(i2.DateTimeIntervalEnum.CURRENT_MONTH);
                                requestData.interval = 'month_1';
                            }
                            else if (selectedRange == i2.DateTimeIntervalEnum.CURRENT_YEAR) {
                                requestData.startTime = this.dateService.getStartDateTime(i2.DateTimeIntervalEnum.CURRENT_YEAR);
                                requestData.interval = 'year_1';
                            }
                            requestData.endTime = this.dateService.getEndDateTime(i2.DateTimeIntervalEnum.CURRENT_TIME);
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
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 1:
                            result = _g.sent();
                            return [2 /*return*/, result];
                        case 2:
                            error_1 = _g.sent();
                            console.error("Error in getTotalConsumption for (" + selectedRange + ")", error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        HomeComponent.prototype.getTotalEntitiesConsumption = function () {
            var _a, _b, _c, _d;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, totalEntitiesConsumData, consumptionBreakupValue, error_2;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            _g.trys.push([0, 2, , 3]);
                            requestData = new AggregateDataRequest();
                            requestData.startTime = this.dateService.getStartDateTime(i2.DateTimeIntervalEnum.CURRENT_MONTH);
                            requestData.endTime = this.dateService.getEndDateTime(i2.DateTimeIntervalEnum.CURRENT_TIME);
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
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 1:
                            totalEntitiesConsumData = _g.sent();
                            consumptionBreakupValue = (_c = (_b = (_a = totalEntitiesConsumData === null || totalEntitiesConsumData === void 0 ? void 0 : totalEntitiesConsumData[0]) === null || _a === void 0 ? void 0 : _a['data']) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c['value'];
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
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _g.sent();
                            console.error("Error in getTotalEntitiesConsumption()", error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        HomeComponent.prototype.getEntityLevelConsumption = function () {
            var _this = this;
            var requestData = new AggregateDataRequest();
            requestData.startTime = this.dateService.getStartDateTime(i2.DateTimeIntervalEnum.CURRENT_MONTH);
            requestData.endTime = this.dateService.getEndDateTime(i2.DateTimeIntervalEnum.CURRENT_TIME);
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
                .subscribe(function (entityConsumRes) {
                _this.entityConsumption = entityConsumRes;
            }, function (error) {
                console.log('error in getEntityLevelConsumption() -', error);
            });
        };
        HomeComponent.prototype.highestConsumptionEntity = function () {
            var _a, _b, _c;
            if (((_a = this.entityConsumption) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                return null;
            }
            return (_b = this.entityConsumption) === null || _b === void 0 ? void 0 : _b.reduce(function (maxEntity, currentEntity) {
                return currentEntity.value > maxEntity.value ? currentEntity : maxEntity;
            }, (_c = this.entityConsumption) === null || _c === void 0 ? void 0 : _c[0]);
        };
        HomeComponent.prototype.calculateProgress = function (entity) {
            var highestConsumption = this.highestConsumptionEntity();
            if (!highestConsumption) {
                return 0;
            }
            var progress = (entity.value / highestConsumption.value) * 100;
            return progress;
        };
        HomeComponent.prototype.getDeviceInfo = function () {
            var _this = this;
            this.deviceController.getDeviceInfo(this.orgID)
                .subscribe(function (deviceRes) {
                _this.deviceInfoM = deviceRes;
            }, function (error) {
                console.log('error in getDeviceInfo() -', error);
            });
        };
        return HomeComponent;
    }());
    HomeComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace.DateService }, { token: i3__namespace.TSCCommonService }, { token: AggregateDataService }, { token: EntityController }, { token: DeviceController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    HomeComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: HomeComponent, selector: "lib-home", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Home</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"cardTitle\">\n                                Total {{ label }} Consumption\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"col-sm-6\">\n                                <span class=\"centerAlign\">\n                                    <circle-progress [options]=\"totalConsumptionCircleData\" [renderOnClick]=\"false\"\n                                        class=\"copy\"></circle-progress>\n                                </span>\n                                <span class=\"centerAlign\">\n                                    This Month\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6 ms-4\">\n                                <div class=\"row\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'Today',\n                                        value: todayConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: todayConsumption?.[0]?.['unit'],\n                                        matCardClass: 'today'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'This Month',\n                                        value: currentMonthConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: currentMonthConsumption?.[0]?.['unit'],\n                                        matCardClass: 'month'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'This Year',\n                                        value: currentYearConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: currentYearConsumption?.[0]?.['unit'],\n                                        matCardClass: 'year'\n                                    }\"></ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"cardTitle\">\n                                {{ label }} Consumption Breakup\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"col-sm-6\">\n                                <span class=\"centerAlign\">\n                                    <circle-progress [options]=\"consumptionBreakupCircleData\" [renderOnClick]=\"false\"\n                                        class=\"copy\"></circle-progress>\n                                </span>\n                                <span class=\"centerAlign\">\n                                    This Month\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\" *ngIf=\"entityConsumption?.[0]?.id\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[0].name,\n                                        value: entityConsumption[0].value,\n                                        unit: entityConsumption[0].unit,\n                                        entityObj: entityConsumption[0],\n                                        outerProgressBarClass: 'progress1BGColor',\n                                        innerProgressBarClass: 'progress1Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[1]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[1].name,\n                                        value: entityConsumption[1].value,\n                                        unit: entityConsumption[1].unit,\n                                        entityObj: entityConsumption[1],\n                                        outerProgressBarClass: 'progress2BGColor',\n                                        innerProgressBarClass: 'progress2Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[2]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[2].name,\n                                        value: entityConsumption[2].value,\n                                        unit: entityConsumption[2].unit,\n                                        entityObj: entityConsumption[2],\n                                        outerProgressBarClass: 'progress3BGColor',\n                                        innerProgressBarClass: 'progress3Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[3]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[3].name,\n                                        value: entityConsumption[3].value,\n                                        unit: entityConsumption[3].unit,\n                                        entityObj: entityConsumption[3],\n                                        outerProgressBarClass: 'progress4BGColor',\n                                        innerProgressBarClass: 'progress4Color'\n                                    }\"></ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-info\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Total devices',\n                        count: deviceInfoM.total\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-success\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Online devices',\n                        count: deviceInfoM.online\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-warning\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Delayed devices',\n                        count: deviceInfoM.delay\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-danger\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Offline devices',\n                        count: deviceInfoM.offline\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #totalConsumption let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-matCardClass=\"matCardClass\"\n    let-outerProgressBarClass=\"outerProgressBarClass\" let-innerProgressBarClass=\"innerProgressBarClass\">\n    <div class=\"col-sm-12\">\n        <div class=\"d-flex align-items-center\">\n            <mat-card class=\"card main-card square d-flex justify-content-center me-2\" [class]=\"matCardClass\">\n                <span class=\"material-symbols-outlined\">\n                    {{ icon }}\n                </span>\n            </mat-card>\n            <div class=\"row\">\n                <span>{{ label }}</span><br />\n                <span class=\"text-primary fw-bold\">{{ value ? value : commonConstant.HYPHEN }} <span\n                        class=\"unitSize\">{{ value ? unit : '' }}</span></span>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #entityProgress let-name=\"name\" let-value=\"value\" let-unit=\"unit\" let-entityObj=\"entityObj\"\n    let-outerProgressBarClass=\"outerProgressBarClass\" let-innerProgressBarClass=\"innerProgressBarClass\">\n    <div class=\"col-sm-12\">\n        <span>\n            {{ name }}\n        </span>\n        <span class=\"float-end text-primary fw-bold\"> {{ value ? value : commonConstant.HYPHEN }}\n            <span class=\"unitSize\"> {{ value ? unit : '' }} </span>\n        </span>\n        <div class=\"progress progressBarRadius\" [class]=\"outerProgressBarClass\">\n            <div class=\"progress-bar progressBarRadius\" [class]=\"innerProgressBarClass\" role=\"progressbar\"\n                [style.width.%]=\"calculateProgress(entityObj)\"></div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #deviceStatus let-label=\"label\" let-count=\"count\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <span class=\"material-symbols-outlined\">\n                devices\n            </span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12 fs-1 fw-bold centerAlign\">\n            {{ count != undefined && count != null ? count : commonConstant.HYPHEN }}\n        </div>\n    </div>\n    <div class=\"row mt-1\">\n        <div class=\"col-sm-12 fs-5 centerAlign\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", styles: [".cardHeight{height:280px}.square{box-shadow:none!important;border-radius:6px!important;height:50px;width:50px}.unitSize{font-size:.66rem}.today{background-color:#f9dedc;color:#fa7d74}.month{background-color:#c2e7ff;color:#21a1f7}.year{background-color:#c4eed0;color:#04942d}.progressBarRadius{border-radius:16px!important}.progress1BGColor{background-color:#f9dedc}.progress2BGColor{background-color:#c2e7ff}.progress3BGColor{background-color:#fff0d1}.progress4BGColor{background-color:#c4eed0}.progress1Color{background-color:#fa7d74}.progress2Color{background-color:#21a1f7}.progress3Color{background-color:#ffbb29}.progress4Color{background-color:#04942d}.card-info{background-color:#cfe2ff;color:#084298}.card-success{background-color:#c3f1d9;color:#058844}.card-warning{background-color:#fff3cd;color:#664d03}.card-danger{background-color:#f8d7da;color:#842029}\n"], components: [{ type: i7__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i8__namespace$1.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }], directives: [{ type: i7__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-home',
                        templateUrl: './home.component.html',
                        styleUrls: ['./home.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace.DateService }, { type: i3__namespace.TSCCommonService }, { type: AggregateDataService }, { type: EntityController }, { type: DeviceController }]; } });

    var routes$f = [
        {
            path: '',
            component: HomeComponent
        }
    ];
    var HomeRoutingModule = /** @class */ (function () {
        function HomeRoutingModule() {
        }
        return HomeRoutingModule;
    }());
    HomeRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    HomeRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    HomeRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeRoutingModule, imports: [[i1.RouterModule.forChild(routes$f)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$f)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    var HomeModule = /** @class */ (function () {
        function HomeModule() {
        }
        return HomeModule;
    }());
    HomeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    HomeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeModule, declarations: [HomeComponent], imports: [i7.CommonModule,
            HomeRoutingModule,
            i7$1.MatCardModule,
            i12$1.MatTooltipModule,
            i12$2.PerfectScrollbarModule, i8__namespace$1.NgCircleProgressModule] });
    HomeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeModule, imports: [[
                i7.CommonModule,
                HomeRoutingModule,
                i7$1.MatCardModule,
                i12$1.MatTooltipModule,
                i12$2.PerfectScrollbarModule,
                i8$1.NgCircleProgressModule.forRoot(),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            HomeComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            HomeRoutingModule,
                            i7$1.MatCardModule,
                            i12$1.MatTooltipModule,
                            i12$2.PerfectScrollbarModule,
                            i8$1.NgCircleProgressModule.forRoot(),
                        ]
                    }]
            }] });

    var ShiftController = /** @class */ (function () {
        function ShiftController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        ShiftController.prototype.getShift = function (orgID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/shifts");
        };
        return ShiftController;
    }());
    ShiftController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ShiftController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var ShiftService = /** @class */ (function () {
        function ShiftService(shiftController) {
            this.shiftController = shiftController;
        }
        ShiftService.prototype.getShift = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var shiftM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.shiftController.getShift(orgID).toPromise()];
                        case 1:
                            shiftM = _a.sent();
                            if (shiftM) {
                                return [2 /*return*/, shiftM];
                            }
                            else {
                                return [2 /*return*/, [new Shift()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, [new Shift()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return ShiftService;
    }());
    ShiftService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftService, deps: [{ token: ShiftController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ShiftService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: ShiftController }]; } });

    // /tsc-library/
    var ShiftComponent = /** @class */ (function () {
        function ShiftComponent(storageService, shiftService) {
            this.storageService = storageService;
            this.shiftService = shiftService;
            this.emitFilter = new i0.EventEmitter();
            this.COMMON_CONSTANT = i3.COMMON_CONSTANT;
            this.MaterialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.shiftM = [new Shift()];
            this.allShiftID = [];
            this.totalShiftCount = 0;
            this.multiSelectedShiftFC = new i8.FormControl([], [i8.Validators.required]);
            this.shiftSearchUtil = new i3.MatSelectSearchService(['name']);
        }
        ShiftComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.getShift();
        };
        ShiftComponent.prototype.getShift = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.shiftService.getShift(this.orgID)];
                        case 1:
                            _a.shiftM = (_b.sent());
                            this.shiftSearchUtil.entityArr = this.shiftM;
                            this.shiftSearchUtil.createSubscription();
                            this.totalShiftCount = this.shiftM.length;
                            this.shiftM.forEach(function (shift) { return _this.allShiftID.push(shift['id']); });
                            this.emitFilter.emit();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ShiftComponent.prototype.selectAllShifts = function () {
            if (!this.multiSelectedShiftFC.value.includes(-1)) {
                this.multiSelectedShiftFC.reset([]);
                return;
            }
            this.multiSelectedShiftFC.setValue(__spreadArray([-1], __read(this.allShiftID)));
            this.emitFilter.emit();
        };
        ShiftComponent.prototype.selectedShift = function () {
            var selected = this.multiSelectedShiftFC.value;
            if (selected.includes(-1)) {
                selected.shift();
                this.multiSelectedShiftFC.patchValue(selected);
            }
            else if (this.multiSelectedShiftFC.value.length == this.totalShiftCount) {
                this.allShiftID.splice(0, 0, -1);
                this.multiSelectedShiftFC.patchValue(this.allShiftID);
            }
            else {
                var filteredSelected = selected.filter(function (s) { return s != -1; });
                this.multiSelectedShiftFC.patchValue(filteredSelected);
            }
            this.emitFilter.emit();
        };
        return ShiftComponent;
    }());
    ShiftComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: ShiftService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ShiftComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ShiftComponent, selector: "lib-shift", outputs: { emitFilter: "emitFilter" }, ngImport: i0__namespace, template: "<div class=\"row\">\n    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select shift</mat-label>\n        <ng-container *ngIf=\"shiftM && shiftM.length > 0 && shiftM[0]['id']; else noDataOption\">\n            <mat-select [formControl]=\"multiSelectedShiftFC\" multiple required>\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"shiftSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                        noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option [value]=\"-1\" (click)=\"selectAllShifts()\">\n                    Select all\n                </mat-option>\n                <mat-option *ngFor=\"let shift of shiftSearchUtil.filteredEntities | async\" [value]=\"shift.id\"\n                    (click)=\"selectedShift()\">\n                    {{ shift.name }}\n                </mat-option>\n            </mat-select>\n        </ng-container>\n        <ng-template #noDataOption>\n            <mat-select [formControl]=\"multiSelectedShiftFC\">\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </mat-select>\n        </ng-template>\n        <mat-error *ngIf=\"multiSelectedShiftFC.hasError('required')\">\n            Select shift\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-shift',
                        templateUrl: './shift.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: ShiftService }]; }, propDecorators: { emitFilter: [{
                    type: i0.Output
                }] } });

    var ShiftModule = /** @class */ (function () {
        function ShiftModule() {
        }
        return ShiftModule;
    }());
    ShiftModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ShiftModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftModule, declarations: [ShiftComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i3$1.MatFormFieldModule,
            i6$1.NgxMatSelectSearchModule], exports: [ShiftComponent] });
    ShiftModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i3$1.MatFormFieldModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ShiftComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i3$1.MatFormFieldModule,
                            i6$1.NgxMatSelectSearchModule
                        ],
                        exports: [
                            ShiftComponent
                        ]
                    }]
            }] });

    var BalanceComponent = /** @class */ (function () {
        function BalanceComponent(storageService, aggregateDataService, tscCommonService) {
            this.storageService = storageService;
            this.aggregateDataService = aggregateDataService;
            this.tscCommonService = tscCommonService;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.frequencyConstant = i3.FREQUENCY_CONSTANT;
            this.frequencyEnum = i2.FrequencyEnum;
            this.frequency = [];
            this.showLoader = true;
        }
        BalanceComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            this.timezone = this.storageService.getStorage('timezone');
            if (this.applicationKeyID == applicationService.ApplicationKeyID.ENERGY_KEY_ID) {
                this.label = "Energy";
                this.paramMetric = "engEnergyUsed";
            }
            else if (this.applicationKeyID == applicationService.ApplicationKeyID.WATER_KEY_ID) {
                this.label = "Water";
                this.paramMetric = "gwFlowTotalizer";
            }
            this.formFieldAppearance = i3.MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
            this.frequency = this.frequencyConstant.filter(function (frequency) { return frequency.keyID != 'CUSTOM'; });
            this.defaultFrequency = this.frequencyEnum.MONTHLY;
            this.dateType = i2.DateTypeEnum.EXCLUSIVE;
        };
        BalanceComponent.prototype.dateFilterEmitted = function (data) {
            this.startDate = data.startDate;
            this.endDate = data.endDate;
            var selectedFrequency = data.frequency;
            if (selectedFrequency == this.frequencyEnum.DAILY) {
                this.interval = "hour_1";
            }
            else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
                this.interval = "day_1";
            }
            else if (selectedFrequency == this.frequencyEnum.YEARLY) {
                this.interval = "month_1";
            }
        };
        return BalanceComponent;
    }());
    BalanceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: AggregateDataService }, { token: i3__namespace.TSCCommonService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    BalanceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BalanceComponent, selector: "lib-balance", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\"> {{ label }} Balance</div>\n        </div>\n    </div>\n</div>" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-balance',
                        templateUrl: './balance.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: AggregateDataService }, { type: i3__namespace.TSCCommonService }]; } });

    var routes$e = [
        {
            path: '',
            component: BalanceComponent
        }
    ];
    var BalanceRoutingModule = /** @class */ (function () {
        function BalanceRoutingModule() {
        }
        return BalanceRoutingModule;
    }());
    BalanceRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BalanceRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    BalanceRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceRoutingModule, imports: [[i1.RouterModule.forChild(routes$e)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$e)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var BalanceModule = /** @class */ (function () {
        function BalanceModule() {
        }
        return BalanceModule;
    }());
    BalanceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BalanceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceModule, declarations: [BalanceComponent], imports: [i7.CommonModule,
            BalanceRoutingModule,
            i2.DateFilterTwoModule] });
    BalanceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceModule, imports: [[
                i7.CommonModule,
                BalanceRoutingModule,
                i2.DateFilterTwoModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            BalanceComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            BalanceRoutingModule,
                            i2.DateFilterTwoModule,
                        ]
                    }]
            }] });

    // /tsc-library/
    var ConsumptionComponent = /** @class */ (function () {
        function ConsumptionComponent(storageService, activatedRoute, entityService, aggregateDataController) {
            this.storageService = storageService;
            this.activatedRoute = activatedRoute;
            this.entityService = entityService;
            this.aggregateDataController = aggregateDataController;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.frequencyConstant = i3.FREQUENCY_CONSTANT;
            this.frequencyEnum = i2.FrequencyEnum;
            this.frequency = [];
            this.entityM = [new Entity()];
            this.chartType = i10.ChartTypeEnum.BASIC_BAR_CHART;
            this.viewStateFlag = i10.ChartViewStateEnum.LOADING;
            this.chartTitle = new i10.ChartTitle();
            this.chartData = new i10.BasicAreaLineBarChart();
        }
        ConsumptionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            this.timezone = this.storageService.getStorage('timezone');
            this.activatedRoute.queryParams
                .subscribe(function (queryParam) {
                _this.entityID = queryParam.entityID;
                if (_this.entityID) {
                    _this.getEntitiesByOrgID();
                }
            });
            this.frequency = this.frequencyConstant.filter(function (frequency) { return frequency.keyID != 'CUSTOM'; });
            this.defaultFrequency = this.frequencyEnum.MONTHLY;
            this.dateType = i2.DateTypeEnum.EXCLUSIVE;
        };
        ConsumptionComponent.prototype.getEntitiesByOrgID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = this;
                            return [4 /*yield*/, this.entityService.getEntitiesByOrgID(this.orgID)];
                        case 1:
                            _b.entityM = _c.sent();
                            this.entityName = this.entityM.find(function (entity) { return entity.id == _this.entityID; }).name;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ConsumptionComponent.prototype.dateFilterEmitted = function (data) {
            this.startDate = data.startDate;
            this.endDate = data.endDate;
            var selectedFrequency = data.frequency;
            if (selectedFrequency == this.frequencyEnum.DAILY) {
                this.interval = "hour_1";
            }
            else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
                this.interval = "day_1";
            }
            else if (selectedFrequency == this.frequencyEnum.YEARLY) {
                this.interval = "month_1";
            }
            this.getWaterConsumption();
        };
        ConsumptionComponent.prototype.getWaterConsumption = function () {
            var _this = this;
            this.viewStateFlag = i10.ChartViewStateEnum.LOADING;
            var requestData = this.createDataRequest();
            this.aggregateDataController.getWaterConsumption(this.orgID, requestData)
                .subscribe(function (consumptionRes) {
                var _a;
                if (((_a = consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0]) === null || _a === void 0 ? void 0 : _a.data.length) > 0) {
                    _this.chartData.metaData = consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0].data.map(function (item) { return ({
                        name: moment__namespace(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                        value: item.value
                    }); });
                    _this.chartData.unit = {
                        name: '',
                        code: consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0].unit,
                    };
                    _this.chartData.yAxisLabel = (consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0].paramLabel) + ' (' + (consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0].unit) + ')';
                    _this.chartData.yAxisNameGap = 70;
                    _this.chartData.showDataView = true;
                    _this.chartData.showMagicType = true;
                    _this.chartData.showRestore = true;
                    _this.chartData.showDownloadImage = true;
                    _this.viewStateFlag = i10.ChartViewStateEnum.HAS_DATA;
                }
                else {
                    _this.viewStateFlag = i10.ChartViewStateEnum.NO_DATA;
                }
            }, function (error) {
                _this.viewStateFlag = i10.ChartViewStateEnum.NO_DATA;
                console.log('error in getWaterConsumption() -', error);
            });
        };
        ConsumptionComponent.prototype.createDataRequest = function () {
            var requestBody = {};
            requestBody['startTime'] = this.startDate;
            requestBody['endTime'] = this.endDate;
            requestBody['interval'] = this.interval;
            requestBody['entityID'] = this.entityID ? this.entityID : null;
            return requestBody;
        };
        return ConsumptionComponent;
    }());
    ConsumptionComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i1__namespace.ActivatedRoute }, { token: EntityService }, { token: AggregateDataController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConsumptionComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionComponent, selector: "app-consumption", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Dashboard {{ entityName ? ' - ' + entityName : '' }}</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-basic-area-line-bar [chartTypeInp]=\"chartType\" [chartTitleInp]=\"chartTitle\"\n                                [viewStateInp]=\"viewStateFlag\" [dataInp]=\"chartData\"></lib-basic-area-line-bar>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2__namespace.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i7__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10__namespace.BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: ["chartTypeInp", "viewStateInp", "chartTitleInp", "dataInp"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-consumption',
                        templateUrl: './consumption.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i1__namespace.ActivatedRoute }, { type: EntityService }, { type: AggregateDataController }]; } });

    var routes$d = [
        {
            path: '',
            component: ConsumptionComponent
        }
    ];
    var ConsumptionRoutingModule = /** @class */ (function () {
        function ConsumptionRoutingModule() {
        }
        return ConsumptionRoutingModule;
    }());
    ConsumptionRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    ConsumptionRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionRoutingModule, imports: [[i1.RouterModule.forChild(routes$d)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$d)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var ConsumptionModule = /** @class */ (function () {
        function ConsumptionModule() {
        }
        return ConsumptionModule;
    }());
    ConsumptionModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionModule, declarations: [ConsumptionComponent], imports: [i7.CommonModule,
            ConsumptionRoutingModule,
            i2.DateFilterTwoModule,
            i10.BasicAreaLineBarModule,
            i7$1.MatCardModule] });
    ConsumptionModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionModule, imports: [[
                i7.CommonModule,
                ConsumptionRoutingModule,
                i2.DateFilterTwoModule,
                i10.BasicAreaLineBarModule,
                i7$1.MatCardModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConsumptionComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            ConsumptionRoutingModule,
                            i2.DateFilterTwoModule,
                            i10.BasicAreaLineBarModule,
                            i7$1.MatCardModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var ConsumptionBreakupDashboardComponent = /** @class */ (function () {
        function ConsumptionBreakupDashboardComponent(storageService, aggregateDataService, tscCommonService) {
            this.storageService = storageService;
            this.aggregateDataService = aggregateDataService;
            this.tscCommonService = tscCommonService;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.frequencyConstant = i3.FREQUENCY_CONSTANT;
            this.frequencyEnum = i2.FrequencyEnum;
            this.frequency = [];
            this.showLoader = true;
            this.viewStateFlagForSource = i10.ChartViewStateEnum.LOADING;
            this.viewStateFlagForLoad = i10.ChartViewStateEnum.LOADING;
            this.chartDataForSource = new i10.DoughnutChart();
            this.chartDataForLoad = new i10.DoughnutChart();
            this.chartTitleForSource = {
                name: 'Source',
                color: '#495057',
            };
            this.chartTitleForLoad = {
                name: 'Load',
                color: '#495057',
            };
        }
        ConsumptionBreakupDashboardComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            this.timezone = this.storageService.getStorage('timezone');
            if (this.applicationKeyID == applicationService.ApplicationKeyID.ENERGY_KEY_ID) {
                this.paramMetric = "engEnergyUsed";
            }
            else if (this.applicationKeyID == applicationService.ApplicationKeyID.WATER_KEY_ID) {
                this.paramMetric = "gwFlowTotalizer";
            }
            this.frequency = this.frequencyConstant.filter(function (frequency) { return frequency.keyID != 'CUSTOM'; });
            this.defaultFrequency = this.frequencyEnum.MONTHLY;
            this.dateType = i2.DateTypeEnum.EXCLUSIVE;
        };
        ConsumptionBreakupDashboardComponent.prototype.dateFilterEmitted = function (data) {
            var _this = this;
            this.startDate = data.startDate;
            this.endDate = data.endDate;
            var selectedFrequency = data.frequency;
            if (selectedFrequency == this.frequencyEnum.DAILY) {
                this.interval = "hour_1";
            }
            else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
                this.interval = "day_1";
            }
            else if (selectedFrequency == this.frequencyEnum.YEARLY) {
                this.interval = "month_1";
            }
            this.getOrgLevelSourceConsum("source").then(function (app) {
                _this.orgSourceRes = app;
            });
            this.getOrgLevelSourceConsum("load").then(function (app) {
                _this.orgConsumedRes = app;
            });
            this.getEntiyLevelConsumption();
        };
        ConsumptionBreakupDashboardComponent.prototype.getOrgLevelSourceConsum = function (category) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, result, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, 3, 4]);
                            requestData = this.createDataRequest(category, true);
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 1:
                            result = _b.sent();
                            return [2 /*return*/, result];
                        case 2:
                            error_1 = _b.sent();
                            console.error("Error in getOrgLevelSourceConsum(" + category + ")", error_1);
                            return [3 /*break*/, 4];
                        case 3:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ConsumptionBreakupDashboardComponent.prototype.getEntiyLevelConsumption = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getEntityLevelSourceConsum("source")];
                        case 1:
                            _b.sent();
                            return [4 /*yield*/, this.getEntityLevelSourceConsum("load")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ConsumptionBreakupDashboardComponent.prototype.getEntityLevelSourceConsum = function (category) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, result, chartData, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (category == 'source') {
                                this.viewStateFlagForSource = i10.ChartViewStateEnum.LOADING;
                            }
                            else {
                                this.viewStateFlagForLoad = i10.ChartViewStateEnum.LOADING;
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            requestData = this.createDataRequest(category, false);
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 2:
                            result = _b.sent();
                            if (((_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a.data.length) > 0) {
                                chartData = new i10.DoughnutChart();
                                chartData = {
                                    showDataView: true,
                                    showRestore: true,
                                    showDownloadImage: true,
                                    metaData: result.map(function (item) { return ({
                                        name: item.sourceLoadType,
                                        value: item.data[0].value,
                                        unit: {
                                            code: item.unit,
                                        },
                                    }); }),
                                };
                                if (category == 'source') {
                                    this.chartDataForSource = chartData;
                                    this.viewStateFlagForSource = i10.ChartViewStateEnum.HAS_DATA;
                                }
                                else {
                                    this.chartDataForLoad = chartData;
                                    this.viewStateFlagForLoad = i10.ChartViewStateEnum.HAS_DATA;
                                }
                            }
                            else {
                                if (category == 'source') {
                                    this.viewStateFlagForSource = i10.ChartViewStateEnum.NO_DATA;
                                }
                                else {
                                    this.viewStateFlagForLoad = i10.ChartViewStateEnum.NO_DATA;
                                }
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _b.sent();
                            if (category == 'source') {
                                this.viewStateFlagForSource = i10.ChartViewStateEnum.NO_DATA;
                            }
                            else {
                                this.viewStateFlagForLoad = i10.ChartViewStateEnum.NO_DATA;
                            }
                            console.error("Error in getEntityLevelSourceConsum(" + category + ")", error_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ConsumptionBreakupDashboardComponent.prototype.createDataRequest = function (category, groupAll) {
            var requestData = new AggregateDataRequest();
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
        };
        return ConsumptionBreakupDashboardComponent;
    }());
    ConsumptionBreakupDashboardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: AggregateDataService }, { token: i3__namespace.TSCCommonService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConsumptionBreakupDashboardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupDashboardComponent, selector: "lib-consumption-breakup", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgSourceRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgSourceRes?.[0]?.['unit'],\n                        label: 'Sourced',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgConsumedRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgConsumedRes?.[0]?.['unit'],\n                        label: 'Consumed',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForSource\" [chartTitleInp]=\"chartTitleForSource\" [dataInp]=\"chartDataForSource\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForLoad\" [chartTitleInp]=\"chartTitleForLoad\" [dataInp]=\"chartDataForLoad\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #sourceConsumTemplate let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-loader=\"loader\">\n    <ng-container *ngIf=\"loader; else dataTemplate\">\n        <lib-skeleton-loader [count]=\"1\" [appearance]=\"''\"\n            [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n    </ng-container>\n\n    <ng-template #dataTemplate>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <span class=\"fs-2 fw-bold text-primary\">{{ value ? tscCommonService.formatLargeNumber(value, 'false', 1)\n                    : commonConstant.HYPHEN\n                    }}</span>\n                <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 fs-4\">\n                {{ label }}\n            </div>\n        </div>\n    </ng-template>\n</ng-template>", components: [{ type: i2__namespace.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i7__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10__namespace.DoughnutComponent, selector: "lib-doughnut", inputs: ["viewStateInp", "chartTitleInp", "dataInp"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-consumption-breakup',
                        templateUrl: './consumption-breakup.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: AggregateDataService }, { type: i3__namespace.TSCCommonService }]; } });

    var routes$c = [
        {
            path: '',
            component: ConsumptionBreakupDashboardComponent
        }
    ];
    var ConsumptionBreakupDashboardRoutingModule = /** @class */ (function () {
        function ConsumptionBreakupDashboardRoutingModule() {
        }
        return ConsumptionBreakupDashboardRoutingModule;
    }());
    ConsumptionBreakupDashboardRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionBreakupDashboardRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    ConsumptionBreakupDashboardRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardRoutingModule, imports: [[i1.RouterModule.forChild(routes$c)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$c)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var ConsumptionBreakupDashboardModule = /** @class */ (function () {
        function ConsumptionBreakupDashboardModule() {
        }
        return ConsumptionBreakupDashboardModule;
    }());
    ConsumptionBreakupDashboardModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionBreakupDashboardModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardModule, declarations: [ConsumptionBreakupDashboardComponent], imports: [i7.CommonModule,
            ConsumptionBreakupDashboardRoutingModule,
            i2.DateFilterTwoModule,
            i3.SkeletonModule,
            i10.DoughnutModule,
            i7$1.MatCardModule] });
    ConsumptionBreakupDashboardModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardModule, imports: [[
                i7.CommonModule,
                ConsumptionBreakupDashboardRoutingModule,
                i2.DateFilterTwoModule,
                i3.SkeletonModule,
                i10.DoughnutModule,
                i7$1.MatCardModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConsumptionBreakupDashboardComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            ConsumptionBreakupDashboardRoutingModule,
                            i2.DateFilterTwoModule,
                            i3.SkeletonModule,
                            i10.DoughnutModule,
                            i7$1.MatCardModule
                        ]
                    }]
            }] });

    var RecentDataController = /** @class */ (function () {
        function RecentDataController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        RecentDataController.prototype.getRecentDataWithParam = function (orgID, requestBody) {
            var headers = new i1$2.HttpHeaders().set('skipLoader', 'YES');
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/data/recent", requestBody, { headers: headers });
        };
        RecentDataController.prototype.getOrgRecentData = function (orgID, requestBody) {
            var headers = new i1$2.HttpHeaders().set('skipLoader', 'YES');
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/recent-data", requestBody, { headers: headers });
            // return this.http.get<OrgRecentDataM[]>(`${this.environment.MOCK_SERVER}facility-dashboard`);
        };
        return RecentDataController;
    }());
    RecentDataController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RecentDataController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var RecentDataService = /** @class */ (function () {
        function RecentDataService(recentDataController) {
            this.recentDataController = recentDataController;
        }
        RecentDataService.prototype.getRecentDataWithParam = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var recentDataWithParam, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.recentDataController.getRecentDataWithParam(orgID, requestBody).toPromise()];
                        case 1:
                            recentDataWithParam = _a.sent();
                            if (recentDataWithParam) {
                                return [2 /*return*/, recentDataWithParam];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            throw error_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        RecentDataService.prototype.getOrgRecentData = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var orgRes, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.recentDataController.getOrgRecentData(orgID, requestBody).toPromise()];
                        case 1:
                            orgRes = _a.sent();
                            if (orgRes) {
                                return [2 /*return*/, orgRes];
                            }
                            else {
                                return [2 /*return*/, [new OrgRecentData()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Error -', error_2);
                            throw error_2;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return RecentDataService;
    }());
    RecentDataService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataService, deps: [{ token: RecentDataController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RecentDataService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: RecentDataController }]; } });

    var TrendService = /** @class */ (function () {
        function TrendService(dialog) {
            this.dialog = dialog;
        }
        TrendService.prototype.openDialog = function (trendData) {
            var dialogRef;
            dialogRef = this.dialog.open(TrendComponent, {
                data: {
                    trendData: trendData
                },
                minWidth: '620px',
                maxWidth: '620px'
            });
        };
        return TrendService;
    }());
    TrendService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendService, deps: [{ token: i1__namespace$3.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TrendService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$3.MatDialog }]; } });

    // /tsc-library/
    var EntityDashboardComponent = /** @class */ (function () {
        function EntityDashboardComponent(storageService, entityService, recentDataService, dateService, trendService) {
            this.storageService = storageService;
            this.entityService = entityService;
            this.recentDataService = recentDataService;
            this.dateService = dateService;
            this.trendService = trendService;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.isAccordionOpen = true;
            //loader variable declaration
            this.entityTypeLoader = true;
            this.entityDeviceLoader = false;
            this.realTimeDeviceDataLoader = false;
            this.entityTypeM = [new EntityType()];
            this.entityTypeDropdownItem = [new EntityType()];
            this.entityDeviceM = new EntityTree();
            this.filteredEntityDeviceM = [];
            this.orgRecentDataM = [new OrgRecentData()];
            this.entityTypeFC = new i8.FormControl('', i8.Validators.required);
            this.entityFC = new i8.FormControl('', i8.Validators.required);
        }
        EntityDashboardComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.layoutID = this.storageService.getStorage('layoutID');
            this.timezone = this.storageService.getStorage('timezone');
            this.getEntityTypeByLayoutID();
        };
        EntityDashboardComponent.prototype.getEntityTypeByLayoutID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, defaultEntityType, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, 3, 4]);
                            _a = this;
                            return [4 /*yield*/, this.entityService.getEntityTypeByLayoutID(this.orgID, 'YES')];
                        case 1:
                            _a.entityTypeM = (_b.sent());
                            if (this.entityTypeM && this.entityTypeM.length > 0) {
                                defaultEntityType = this.entityTypeM[0].type;
                                if (defaultEntityType) {
                                    this.entityTypeFC.patchValue(defaultEntityType);
                                    this.getEntitiesWithDevices(this.entityTypeFC.value);
                                }
                                if (this.entityTypeM.length > 6) {
                                    this.entityTypeDropdownItem = this.entityTypeM.slice(6);
                                }
                            }
                            return [3 /*break*/, 4];
                        case 2:
                            error_1 = _b.sent();
                            console.error("Error in getEntityTypeByLayoutID()", error_1);
                            return [3 /*break*/, 4];
                        case 3:
                            this.entityTypeLoader = false;
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        EntityDashboardComponent.prototype.entityTypeChange = function () {
            var entityType = this.entityTypeFC.value;
            this.getEntitiesWithDevices(entityType);
        };
        EntityDashboardComponent.prototype.moveToToggleGroup = function (selectedEntityType) {
            var dropdownIndex = this.entityTypeDropdownItem.findIndex(function (entityType) { return entityType.type == selectedEntityType; });
            if (dropdownIndex != -1) {
                this.entityTypeDropdownItem.splice(dropdownIndex, 1);
            }
            if (this.entityTypeM.length > 0) {
                this.entityTypeDropdownItem.push(this.entityTypeM.shift());
            }
            this.entityTypeM.unshift({ type: selectedEntityType });
        };
        EntityDashboardComponent.prototype.dropdownSelectionChange = function (selectedEntityType) {
            this.moveToToggleGroup(selectedEntityType);
            this.entityTypeFC.patchValue(selectedEntityType);
            this.getEntitiesWithDevices(selectedEntityType);
        };
        EntityDashboardComponent.prototype.getEntitiesWithDevices = function (entityType) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _a, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, 3, 4]);
                            this.entityDeviceLoader = true;
                            requestBody = {
                                'entityType': [entityType]
                            };
                            _a = this;
                            return [4 /*yield*/, this.entityService.getEntitiesWithDevices(this.orgID, this.layoutID, requestBody, 'YES')];
                        case 1:
                            _a.entityDeviceM = (_b.sent());
                            if (this.entityDeviceM.children) {
                                this.filteredEntityDeviceM = [this.entityDeviceM];
                            }
                            return [3 /*break*/, 4];
                        case 2:
                            error_2 = _b.sent();
                            console.error("Error in getEntitiesWithDevices()", error_2);
                            return [3 /*break*/, 4];
                        case 3:
                            this.entityDeviceLoader = false;
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        EntityDashboardComponent.prototype.searchFn = function (value) {
            var searchTerm = value.trim().toLowerCase();
            if (searchTerm.length > 0) {
                this.filteredEntityDeviceM = this.searchEntities([this.entityDeviceM], searchTerm);
            }
            else {
                this.filteredEntityDeviceM = [this.entityDeviceM];
            }
        };
        EntityDashboardComponent.prototype.searchEntities = function (entities, searchTerm) {
            var _this = this;
            var results = [];
            entities.forEach(function (entity) {
                if (entity.name.toLowerCase().includes(searchTerm)) {
                    results.push(entity);
                }
                if (entity.children && entity.children.length > 0) {
                    var matchingChildren = _this.searchEntities(entity.children, searchTerm);
                    results = results.concat(matchingChildren);
                }
            });
            return results;
        };
        EntityDashboardComponent.prototype.openAccordion = function () {
            this.isAccordionOpen = true;
        };
        EntityDashboardComponent.prototype.closeAccordion = function () {
            this.isAccordionOpen = false;
        };
        EntityDashboardComponent.prototype.isDeviceAttached = function (entity) {
            return (entity.type == 'FACILITY' || entity.type == 'ENTITY') && entity.children && entity.children.some(function (child) { return child.type == 'DEVICE'; });
        };
        EntityDashboardComponent.prototype.onEntityDeviceSelection = function () {
            var selectedValue = this.entityFC.value;
            this.realTimeDeviceDataLoader = true;
            this.getOrgRecentData(selectedValue);
        };
        EntityDashboardComponent.prototype.getTooltipLabel = function (entity) {
            if (entity.type == 'FACILITY') {
                return 'Facility';
            }
            else if (entity.type == 'ENTITY') {
                return 'Entity';
            }
            else if (entity.type == 'DEVICE') {
                return 'Device';
            }
        };
        EntityDashboardComponent.prototype.getOrgRecentData = function (selectedValue) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _a, error_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, 3, 4]);
                            requestBody = new RecentDataRequestWithoutParam();
                            requestBody.entityID = selectedValue;
                            requestBody.timezone = this.timezone;
                            requestBody.backscan = 1;
                            _a = this;
                            return [4 /*yield*/, this.recentDataService.getOrgRecentData(this.orgID, requestBody)];
                        case 1:
                            _a.orgRecentDataM = (_b.sent());
                            return [3 /*break*/, 4];
                        case 2:
                            error_3 = _b.sent();
                            console.error("Error in getOrgRecentData()", error_3);
                            return [3 /*break*/, 4];
                        case 3:
                            this.realTimeDeviceDataLoader = false;
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        EntityDashboardComponent.prototype.showTrend = function (paramMetric, entityID, deviceID) {
            var requestBody = {
                paramMetric: paramMetric,
                entityID: entityID,
                deviceID: deviceID
            };
            this.trendService.openDialog(requestBody);
        };
        return EntityDashboardComponent;
    }());
    EntityDashboardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: EntityService }, { token: RecentDataService }, { token: i2__namespace.DateService }, { token: TrendService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EntityDashboardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityDashboardComponent, selector: "lib-entity", viewQueries: [{ propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "scrollContainer", first: true, predicate: ["scrollContainer"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Entity Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <ng-container *ngIf=\"entityTypeLoader; else showEntityType\">\n                <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 1 }\"></ng-container>\n            </ng-container>\n\n            <ng-template #showEntityType>\n                <ng-container *ngIf=\"entityTypeM && entityTypeM.length <= 6; else toggleAndDropdownView\">\n                    <div class=\"col-sm-6\">\n                        <div class=\" labelColor\">Select entity type</div>\n                        <ng-container *ngIf=\"entityTypeM && entityTypeM.length > 1; else noEntityType\">\n                            <mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"entityTypeFC\"\n                                (change)=\"entityTypeChange()\">\n                                <mat-button-toggle *ngFor=\"let entityType of entityTypeM\" value=\"{{ entityType.type }}\">\n                                    {{ entityType.type }}\n                                </mat-button-toggle>\n                            </mat-button-toggle-group>\n                        </ng-container>\n                        <ng-template #noEntityType>\n                            <span class=\"textMatError\">\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </span>\n                        </ng-template>\n                    </div>\n                </ng-container>\n\n                <ng-template #toggleAndDropdownView>\n                    <div class=\"col-sm-6\">\n                        <div class=\" labelColor\">Select entity type</div>\n                        <mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"entityTypeFC\"\n                            (change)=\"entityTypeChange()\">\n                            <mat-button-toggle *ngFor=\"let entityType of entityTypeM.slice(0, 6)\" value=\"{{ entityType.type }}\">\n                                {{ entityType.type }}\n                            </mat-button-toggle>\n                        </mat-button-toggle-group>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <mat-form-field class=\"matFieldWidth100\"\n                            [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                            <mat-label>Select entity type</mat-label>\n                            <mat-select [formControl]=\"entityTypeFC\" (selectionChange)=\"dropdownSelectionChange($event.value)\">\n                                <mat-option *ngFor=\"let entityType of entityTypeDropdownItem\" [value]=\"entityType.type\">\n                                    {{ entityType.type }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </ng-template>\n            </ng-template>\n        </div>\n\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-6\">\n                <mat-accordion>\n                    <mat-expansion-panel class=\"matAccordion\" [expanded]=\"isAccordionOpen\" (opened)=\"openAccordion()\"\n                        (closed)=\"closeAccordion()\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <div class=\"cardTitle\">\n                                    Select entity\n                                </div>\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <lib-search-bar-two class=\"float-end me-3\" #searchBar searchBy=\"name\"\n                                    (emitSearch)=\"searchFn($event)\">\n                                </lib-search-bar-two>\n                            </div>\n                        </div>\n                        \n                        <perfect-scrollbar class=\"scrollHeight\" [config]=\"{useBothWheelAxes: true, suppressScrollX: false, suppressScrollY: false}\" #scrollContainer>\n                            <ng-container *ngIf=\"entityDeviceLoader; else entityDeviceView\">\n                                <div class=\"mt-2\">\n                                    <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n                                </div>\n                            </ng-container>\n                            <ng-template #entityDeviceView>\n                                <mat-radio-group [formControl]=\"entityFC\" (change)=\"onEntityDeviceSelection()\">\n                                    <div *ngFor=\"let entity of filteredEntityDeviceM\">\n                                        <ng-container *ngTemplateOutlet=\"entityTemplate; context:{ $implicit: entity }\"></ng-container>\n                                    </div>\n\n                                    <ng-template #entityTemplate let-entity>\n                                        <div class=\"ms-3 mt-2\">\n                                            <ng-container *ngIf=\"isDeviceAttached(entity); else entityView\">\n                                                <mat-radio-button class=\"radioBtnLabel me-2\" [value]=\"entity.id\">\n                                                    <span class=\"badge rounded-pill\" [ngClass]=\"{'facility': entity.type == 'FACILITY', 'entity': entity.type == 'ENTITY', 'device': entity.type == 'DEVICE'}\"\n                                                        [matTooltip]=\"getTooltipLabel(entity)\" matTooltipPosition=\"above\">\n                                                        <div class=\"d-flex align-items-center\">\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'FACILITY'\">factory</span>\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'ENTITY'\">domain</span>\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'DEVICE'\">devices</span>\n                                                            {{ entity.name }}\n                                                        </div>\n                                                    </span>\n                                                </mat-radio-button>\n                                            </ng-container>\n\n                                            <ng-template #entityView>\n                                                <span class=\"badge rounded-pill\" [ngClass]=\"{'facility': entity.type == 'FACILITY', 'entity': entity.type == 'ENTITY', 'device': entity.type == 'DEVICE'}\"\n                                                    [matTooltip]=\"getTooltipLabel(entity)\" matTooltipPosition=\"above\">\n                                                    <div class=\"d-flex align-items-center\">\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'FACILITY'\">factory</span>\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'ENTITY'\">domain</span>\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'DEVICE'\">devices</span>\n                                                        {{ entity.name }}\n                                                    </div>\n                                                </span>\n                                            </ng-template>\n                                        </div>\n\n                                        <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-3 mt-2\">\n                                            <ng-container *ngFor=\"let child of entity.children\">\n                                                <ng-container\n                                                    *ngTemplateOutlet=\"entityTemplate; context:{ $implicit: child }\"></ng-container>\n                                            </ng-container>\n                                        </div>\n                                    </ng-template>\n                                </mat-radio-group>\n                                \n                            </ng-template>\n                        </perfect-scrollbar>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight2\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"material-symbols-outlined me-3\">\n                                    devices\n                                </span>\n                                <span class=\"cardTitle mt-1\">\n                                    Real time data\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <perfect-scrollbar class=\"scrollHeight\">\n                        <ng-container *ngIf=\"realTimeDeviceDataLoader; else realTimeDeviceDataView\">\n                            <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n                        </ng-container>\n\n                        <ng-template #realTimeDeviceDataView>\n                            <ng-container *ngFor=\"let realTimeData of orgRecentDataM;\">\n                                <ng-container *ngTemplateOutlet=\"parameterSummary; context: {\n                                    device: realTimeData?.deviceData,\n                                    entityID: realTimeData?.entityID\n                                }\"></ng-container>\n                            </ng-container>\n                        </ng-template>\n                    </perfect-scrollbar>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #parameterSummary let-device=\"device\" let-entityID=\"entityID\">\n    <ng-container *ngFor=\"let deviceData of device;\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"d-flex align-items-center fw-bold\">\n                    <span class=\"material-symbols-outlined me-1\"\n                        [ngClass]=\"{'text-success': deviceData.status == 'LIVE', 'text-secondary': deviceData.status == 'OFFLINE' || deviceData.status == 'NO_DATA'}\">\n                        devices\n                    </span>\n                    {{ deviceData.name ? deviceData.name : commonConstant.HYPHEN }}\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-2\" *ngFor=\"let parameterData of deviceData.paramData;\">\n            <div class=\"col-sm-4 text-start text-secondary\">\n                {{ parameterData.label ? parameterData.label : commonConstant.HYPHEN }}\n            </div>\n            <div class=\"col-sm-4 text-center\">\n                <a class=\"text-primary cursorPointer fw-bold\" matTooltip=\"Trend\" matTooltipPosition=\"above\"\n                    (click)=\"showTrend(parameterData.name, entityID, deviceData.id)\">\n                    <span> {{ parameterData.data.value ? parameterData.data.value : commonConstant.HYPHEN }} </span>\n                    <span> {{ parameterData.data.value ? parameterData.unit : '' }} </span>\n                </a>\n            </div>\n            <div class=\"col-sm-4 text-start text-secondary\">\n                {{ dateService.getRelativeTimeAgoLabel(parameterData.data.date, timezone) }}\n            </div>\n        </div>\n        <hr>\n    </ng-container>\n</ng-template>\n\n<ng-template #showLoader let-count=\"count\">\n    <lib-skeleton-loader [count]=\"count\" [appearance]=\"''\"\n        [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n</ng-template>", styles: [".labelColor{color:#0009}.matAccordion{box-shadow:none!important;background:whitesmoke;border-radius:16px!important}.badge{font-weight:normal;font-size:1em;padding:1.4px 15px;text-transform:none}.facility{background-color:#e3e2e2;color:#000}.entity{background-color:#e7effc;color:#084298}.device{background-color:#e0f7eb;color:#1c8a51}.cardHeight1{height:490px}.cardHeight2{height:520px}.scrollHeight{height:410px}\n"], components: [{ type: i6__namespace$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i5__namespace$1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i5__namespace$1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: i3__namespace.SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i12__namespace$2.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: i13__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i7__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i6__namespace$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i5__namespace$1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i5__namespace$1.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i13__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i7__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-entity',
                        templateUrl: './entity.component.html',
                        styleUrls: ['./entity.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: EntityService }, { type: RecentDataService }, { type: i2__namespace.DateService }, { type: TrendService }]; }, propDecorators: { searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar']
                }], scrollContainer: [{
                    type: i0.ViewChild,
                    args: ['scrollContainer']
                }] } });

    var routes$b = [
        {
            path: '',
            component: EntityDashboardComponent
        }
    ];
    var EntityDashboardRoutingModule = /** @class */ (function () {
        function EntityDashboardRoutingModule() {
        }
        return EntityDashboardRoutingModule;
    }());
    EntityDashboardRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    EntityDashboardRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    EntityDashboardRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardRoutingModule, imports: [[i1.RouterModule.forChild(routes$b)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$b)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var EntityDashboardModule = /** @class */ (function () {
        function EntityDashboardModule() {
        }
        return EntityDashboardModule;
    }());
    EntityDashboardModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    EntityDashboardModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardModule, declarations: [EntityDashboardComponent], imports: [i7.CommonModule,
            EntityDashboardRoutingModule,
            TrendModule,
            i3.SkeletonModule,
            i3.SearchBarTwoModule,
            i8.ReactiveFormsModule,
            i7$1.MatCardModule,
            i3$1.MatFormFieldModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            i6$2.MatButtonToggleModule,
            i5$1.MatExpansionModule,
            i12.MatOptionModule,
            i13$1.MatRadioModule,
            i12$1.MatTooltipModule,
            i12$2.PerfectScrollbarModule] });
    EntityDashboardModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardModule, providers: [TrendService], imports: [[
                i7.CommonModule,
                EntityDashboardRoutingModule,
                TrendModule,
                i3.SkeletonModule,
                i3.SearchBarTwoModule,
                i8.ReactiveFormsModule,
                i7$1.MatCardModule,
                i3$1.MatFormFieldModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                i6$2.MatButtonToggleModule,
                i5$1.MatExpansionModule,
                i12.MatOptionModule,
                i13$1.MatRadioModule,
                i12$1.MatTooltipModule,
                i12$2.PerfectScrollbarModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EntityDashboardComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            EntityDashboardRoutingModule,
                            TrendModule,
                            i3.SkeletonModule,
                            i3.SearchBarTwoModule,
                            i8.ReactiveFormsModule,
                            i7$1.MatCardModule,
                            i3$1.MatFormFieldModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            i6$2.MatButtonToggleModule,
                            i5$1.MatExpansionModule,
                            i12.MatOptionModule,
                            i13$1.MatRadioModule,
                            i12$1.MatTooltipModule,
                            i12$2.PerfectScrollbarModule
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

    var AlertService = /** @class */ (function () {
        function AlertService() {
        }
        AlertService.prototype.setAlertProperties = function (alertObject, label, content, type, icon) {
            alertObject.showAlert = true;
            alertObject.alertLabel = label;
            alertObject.alertContent = content;
            alertObject.messageAlertType = type;
            alertObject.messageAlertIcon = icon;
            return alertObject;
        };
        AlertService.prototype.resetAlertProperties = function (alertObject) {
            alertObject.showAlert = false;
            alertObject.alertLabel = '';
            alertObject.alertContent = '';
            alertObject.messageAlertType = '';
            alertObject.messageAlertIcon = '';
            return alertObject;
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }] });

    // /tsc-library/
    var FacilityComponent = /** @class */ (function () {
        function FacilityComponent(router, storageService, dateService, trendService, recentDataService, alertService) {
            this.router = router;
            this.storageService = storageService;
            this.dateService = dateService;
            this.trendService = trendService;
            this.recentDataService = recentDataService;
            this.alertService = alertService;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.showLoader = false;
            this.orgRecentDataM = [new OrgRecentData()];
            this.alertObj = new Alert();
        }
        FacilityComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
            this.getOrgRecentData();
        };
        FacilityComponent.prototype.getOrgRecentData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _a, error_1;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.alertObj);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, 4, 5]);
                            requestBody = new RecentDataRequestWithoutParam();
                            requestBody.timezone = this.timezone;
                            requestBody.backscan = 1;
                            _a = this;
                            return [4 /*yield*/, this.recentDataService.getOrgRecentData(this.orgID, requestBody)];
                        case 2:
                            _a.orgRecentDataM = (_b.sent());
                            if (this.orgRecentDataM && this.orgRecentDataM.length == 1) {
                                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, i3.MessageAlertTypeEnum.WARNING, i3.MessageAlertIconEnum.WARNING_ICON);
                            }
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _b.sent();
                            console.error("Error in getOrgRecentData()", error_1);
                            this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                            return [3 /*break*/, 5];
                        case 4:
                            this.apiTimer = setTimeout(function () {
                                _this.getOrgRecentData();
                            }, 300000);
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        FacilityComponent.prototype.showEntityConsumption = function (id, name) {
            this.router.navigate(['dashboard/consumption'], { queryParams: { entityID: id } });
        };
        FacilityComponent.prototype.showTrend = function (paramMetric, deviceID, entityID) {
            var requestBody = {
                paramMetric: paramMetric,
                deviceID: deviceID,
                entityID: entityID
            };
            this.trendService.openDialog(requestBody);
        };
        return FacilityComponent;
    }());
    FacilityComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityComponent, deps: [{ token: i1__namespace.Router }, { token: i1__namespace$1.StorageService }, { token: i2__namespace.DateService }, { token: TrendService }, { token: RecentDataService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    FacilityComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FacilityComponent, selector: "app-facility", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Facility Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n\n        <div class=\"row\">\n            <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"''\"\n                [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"orgRecentDataM.length > 1\">\n            <div class=\"col-sm-12 mb-3\" *ngFor=\"let recentRes of orgRecentDataM\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-sm-6\">\n                            <span class=\"entity text-primary\">\n                                <div class=\"d-flex align-items-center\">\n                                    <span class=\"material-symbols-outlined me-2\">domain</span>\n                                    <span class=\"me-2\">{{ recentRes.entityName }}</span>\n                                    <span class=\"badge rounded-pill bg-secondary\">\n                                        {{ recentRes.entityType }}\n                                    </span>\n                                </div>\n                            </span>\n                        </div>\n                        <div class=\"col-sm-6 text-end\">\n                            <a class=\"text-primary cursorPointer\" matTooltip=\"Entity consumption\"\n                                matTooltipPosition=\"below\"\n                                (click)=\"showEntityConsumption(recentRes.entityID, recentRes.entityName)\">\n                                <span class=\"material-symbols-outlined fs-4 fw-bold\">monitoring</span>\n                            </a>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 ms-3\" *ngFor=\"let deviceRes of recentRes.deviceData\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"material-symbols-outlined me-1\"\n                                    [ngClass]=\"{'text-success': deviceRes.status == 'LIVE', 'text-secondary': deviceRes.status == 'OFFLINE' || deviceRes.status == 'NO_DATA'}\">\n                                    devices\n                                </span>\n                                {{ deviceRes.name }}\n                            </div>\n\n                            <div class=\"row mt-2\">\n                                <div class=\"col-sm-4 mb-3\" *ngFor=\"let paramRes of deviceRes.paramData\">\n                                    <mat-card class=\"cardOverwrite\">\n                                        <ng-container *ngTemplateOutlet=\"parameterData; context: {\n                                                duration: dateService.getRelativeTimeAgoLabel(paramRes?.data?.date, timezone),\n                                                value: paramRes?.data?.value,\n                                                unit: paramRes?.unit,\n                                                label: paramRes?.label,\n                                                entityID: recentRes?.entityID,\n                                                deviceID: deviceRes?.id,\n                                                paramName: paramRes?.name\n                                            }\"></ng-container>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #parameterData let-duration=\"duration\" let-label=\"label\" let-value=\"value\" let-unit=\"unit\"\n    let-entityID=\"entityID\" let-deviceID=\"deviceID\" let-paramName=\"paramName\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 textDurationWithAgoTime\">\n            {{ duration }}\n        </div>\n        <div class=\"col-sm-6 text-end\">\n            <a class=\"text-primary cursorPointer\" matTooltip=\"Trend\" matTooltipPosition=\"below\"\n                (click)=\"showTrend(paramName, deviceID, entityID)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">trending_up</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 text-center\">\n            <span class=\"fs-1 fw-bold text-primary\">{{ value ? value : commonConstant.HYPHEN }}</span>\n            <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n        </div>\n    </div>\n    <div class=\"row mt-4 mb-4\">\n        <div class=\"col-sm-12 fs-5 text-center\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", styles: [".entity{text-transform:none;font-size:15px;font-weight:600}.badge{font-weight:none;font-size:1em;text-transform:none;padding:4px 9px}.bg-secondary{background-color:#b1b2b4!important}\n"], components: [{ type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i3__namespace.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i7__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i7__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i7__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-facility',
                        templateUrl: './facility.component.html',
                        styleUrls: ['./facility.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }, { type: i1__namespace$1.StorageService }, { type: i2__namespace.DateService }, { type: TrendService }, { type: RecentDataService }, { type: AlertService }]; } });

    var routes$a = [
        {
            path: '',
            component: FacilityComponent
        }
    ];
    var FacilityRoutingModule = /** @class */ (function () {
        function FacilityRoutingModule() {
        }
        return FacilityRoutingModule;
    }());
    FacilityRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FacilityRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    FacilityRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityRoutingModule, imports: [[i1.RouterModule.forChild(routes$a)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$a)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var FacilityModule = /** @class */ (function () {
        function FacilityModule() {
        }
        return FacilityModule;
    }());
    FacilityModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FacilityModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityModule, declarations: [FacilityComponent], imports: [i7.CommonModule,
            FacilityRoutingModule,
            TrendModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i7$1.MatCardModule,
            i12$1.MatTooltipModule] });
    FacilityModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityModule, providers: [TrendService], imports: [[
                i7.CommonModule,
                FacilityRoutingModule,
                TrendModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i7$1.MatCardModule,
                i12$1.MatTooltipModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FacilityComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            FacilityRoutingModule,
                            TrendModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i7$1.MatCardModule,
                            i12$1.MatTooltipModule
                        ],
                        providers: [TrendService]
                    }]
            }] });

    var EntityDeviceController = /** @class */ (function () {
        function EntityDeviceController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        //to chnge endpoint
        EntityDeviceController.prototype.getDevicesWithEntities = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/entities/devices", requestBody);
        };
        //TODO: SOMYA AGRAWAL: To discuss this api with Abhinav
        EntityDeviceController.prototype.getDevicesWithEntitiesByParameter = function (orgID, paramMetric, skipLoader) {
            var headers = new i1$2.HttpHeaders().set('skipLoader', skipLoader);
            var params = new i1$2.HttpParams();
            params = params.append('paramMetric', paramMetric);
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/entities-devices", { params: params, headers: headers });
        };
        return EntityDeviceController;
    }());
    EntityDeviceController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EntityDeviceController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var EntityDeviceService = /** @class */ (function () {
        function EntityDeviceService(entityDeviceController) {
            this.entityDeviceController = entityDeviceController;
        }
        EntityDeviceService.prototype.getDevicesWithEntities = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var devicesWithEntitiesM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityDeviceController.getDevicesWithEntities(orgID, requestBody).toPromise()];
                        case 1:
                            devicesWithEntitiesM = _a.sent();
                            if (devicesWithEntitiesM) {
                                return [2 /*return*/, devicesWithEntitiesM];
                            }
                            else {
                                return [2 /*return*/, [new DevicesWithEntities()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, [new DevicesWithEntities()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        EntityDeviceService.prototype.getDevicesWithEntitiesByParameter = function (orgID, paramMetric, skipLoader) {
            return __awaiter(this, void 0, void 0, function () {
                var devicesWithEntitiesM, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityDeviceController.getDevicesWithEntitiesByParameter(orgID, paramMetric, skipLoader).toPromise()];
                        case 1:
                            devicesWithEntitiesM = _a.sent();
                            if (devicesWithEntitiesM) {
                                return [2 /*return*/, devicesWithEntitiesM];
                            }
                            else {
                                return [2 /*return*/, [new DevicesWithEntities()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Error -', error_2);
                            return [2 /*return*/, [new DevicesWithEntities()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return EntityDeviceService;
    }());
    EntityDeviceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceService, deps: [{ token: EntityDeviceController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EntityDeviceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: EntityDeviceController }]; } });

    // /tsc-library/
    var MeterDataDashboardComponent = /** @class */ (function () {
        function MeterDataDashboardComponent(storageService, recentDataService, entityDeviceService, parameterService, alertService, dateService, trendService) {
            this.storageService = storageService;
            this.recentDataService = recentDataService;
            this.entityDeviceService = entityDeviceService;
            this.parameterService = parameterService;
            this.alertService = alertService;
            this.dateService = dateService;
            this.trendService = trendService;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.showAlert = false;
            this.showLoader = false;
            this.entityDeviceM = [new DevicesWithEntities()];
            this.parameterM = [new Parameter()];
            this.alertObj = new Alert();
            this.meterFC = new i8.FormControl();
            this.meterSearchUtil = new i3.MatSelectSearchService(['name']);
        }
        MeterDataDashboardComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            if (this.applicationKeyID == applicationService.ApplicationKeyID.ENERGY_KEY_ID) {
                this.paramMetric = "engEnergyUsed";
            }
            else if (this.applicationKeyID == applicationService.ApplicationKeyID.WATER_KEY_ID) {
                this.paramMetric = "gwFlowTotalizer";
            }
            this.getDevicesWithEntitiesByParameter();
        };
        MeterDataDashboardComponent.prototype.getDevicesWithEntitiesByParameter = function () {
            var _a, _b, _c, _d;
            return __awaiter(this, void 0, void 0, function () {
                var _e, deviceID;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _e = this;
                            return [4 /*yield*/, this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric, 'YES')];
                        case 1:
                            _e.entityDeviceM = (_f.sent());
                            this.meterSearchUtil.entityArr = this.entityDeviceM;
                            this.meterSearchUtil.createSubscription();
                            if (this.entityDeviceM.length > 1) {
                                deviceID = (_d = (_c = (_b = (_a = this.entityDeviceM) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['devices']) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d['id'];
                                this.meterFC.patchValue(deviceID);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        MeterDataDashboardComponent.prototype.meterChange = function (selectedMeter) {
            clearTimeout(this.apiTimer);
            this.showLoader = true;
            this.meterFC.patchValue(selectedMeter);
            this.getParameterList();
        };
        MeterDataDashboardComponent.prototype.getParameterList = function () {
            var selectedMeter = this.meterFC.value;
            this.getParametersByDeviceID(selectedMeter);
        };
        MeterDataDashboardComponent.prototype.getParametersByDeviceID = function (deviceID) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            requestBody = {};
                            requestBody['deviceID'] = [deviceID];
                            _e = this;
                            return [4 /*yield*/, this.parameterService.getParameterByDeviceID(this.orgID, requestBody)];
                        case 1:
                            _e.parameterM = (_f.sent());
                            if (this.parameterM.length > 1) {
                                this.getRecentMeterData(deviceID);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        MeterDataDashboardComponent.prototype.getRecentMeterData = function (deviceID) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, _e, error_1;
                var _this = this;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.alertObj);
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 3, 4, 5]);
                            requestData = new RecentDataRequestWithParam();
                            requestData.params = this.parameterM.map(function (param) { return ({ name: param.paramMetric }); });
                            requestData.deviceID = [deviceID];
                            requestData.backscan = 1;
                            requestData.timezone = this.timezone;
                            _e = this;
                            return [4 /*yield*/, this.recentDataService.getRecentDataWithParam(this.orgID, requestData)];
                        case 2:
                            _e.meterDataRes = _f.sent();
                            if (((_a = this.meterDataRes) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, i3.MessageAlertTypeEnum.WARNING, i3.MessageAlertIconEnum.WARNING_ICON);
                            }
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _f.sent();
                            console.error("Error in getRecentMeterData()", error_1);
                            this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                            return [3 /*break*/, 5];
                        case 4:
                            this.apiTimer = setTimeout(function () {
                                _this.getRecentMeterData(deviceID);
                            }, 300000);
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        MeterDataDashboardComponent.prototype.showTrend = function (paramMetric, entityID) {
            var requestBody = {
                paramMetric: paramMetric,
                entityID: entityID,
                deviceID: this.meterFC.value
            };
            this.trendService.openDialog(requestBody);
        };
        MeterDataDashboardComponent.prototype.ngOnDestroy = function () {
            clearTimeout(this.apiTimer);
        };
        return MeterDataDashboardComponent;
    }());
    MeterDataDashboardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: RecentDataService }, { token: EntityDeviceService }, { token: ParameterService }, { token: AlertService }, { token: i2__namespace.DateService }, { token: TrendService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MeterDataDashboardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MeterDataDashboardComponent, selector: "lib-meter-data", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Meter Data Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select meter</mat-label>\n                    <mat-select (selectionChange)=\"meterChange($event.value)\" [formControl]=\"meterFC\">\n                        <ng-container *ngIf=\"entityDeviceM && entityDeviceM.length > 1; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"meterSearchUtil.filterFC\"\n                                    placeholderLabel=\"Search by entity name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-optgroup *ngFor=\"let entity of meterSearchUtil.filteredEntities | async\"\n                                [label]=\"entity.name\" [disabled]=\"entity.disabled\">\n                                <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\">\n                                    {{ device.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"meterFC.touched && meterFC.hasError('required')\">\n                        Select meter\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>                                                                            \n        </div>\n\n        <div class=\"row mt-3\">\n            <ng-container *ngIf=\"showLoader; else dataTemplate\">\n                <lib-skeleton-loader [count]=\"3\" [appearance]=\"''\"\n                    [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n            </ng-container>\n            <ng-template #dataTemplate>\n                <div class=\"col-sm-4 mb-3\" *ngFor=\"let meterData of meterDataRes\">\n                    <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                        <ng-container *ngTemplateOutlet=\"parameterData; context: {\n                            duration: dateService.getRelativeTimeAgoLabel(meterData?.data?.date, timezone),\n                            value: meterData?.data?.value,\n                            unit: meterData?.unit,\n                            label: meterData?.paramLabel,\n                            entityID: meterData?.entityID,\n                            paramName: meterData?.paramName\n                        }\"></ng-container>\n                    </mat-card>\n                </div>\n            </ng-template>\n        </div>\n\n    </div>\n</div>\n\n<ng-template #parameterData let-duration=\"duration\" let-label=\"label\" let-value=\"value\" let-unit=\"unit\"\n    let-entityID=\"entityID\" let-paramName=\"paramName\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 textDurationWithAgoTime\">\n            {{ duration }}\n        </div>\n        <div class=\"col-sm-6 text-end\">\n            <a class=\"text-primary cursorPointer\" matTooltip=\"Trend\" matTooltipPosition=\"below\"\n                (click)=\"showTrend(paramName, entityID)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">trending_up</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 text-center\">\n            <span class=\"fs-1 fw-bold text-primary\">{{ value ? (value | number: '1.2-2') : commonConstant.HYPHEN\n                }}</span>\n            <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n        </div>\n    </div>\n    <div class=\"row mt-4 mb-4\">\n        <div class=\"col-sm-12 fs-5 text-center\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i12__namespace.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: i3__namespace.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i7__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i7__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "async": i7__namespace.AsyncPipe, "number": i7__namespace.DecimalPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-meter-data',
                        templateUrl: './meter-data.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: RecentDataService }, { type: EntityDeviceService }, { type: ParameterService }, { type: AlertService }, { type: i2__namespace.DateService }, { type: TrendService }]; } });

    var routes$9 = [
        {
            path: '',
            component: MeterDataDashboardComponent
        }
    ];
    var MeterDataRoutingModule = /** @class */ (function () {
        function MeterDataRoutingModule() {
        }
        return MeterDataRoutingModule;
    }());
    MeterDataRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MeterDataRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    MeterDataRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataRoutingModule, imports: [[i1.RouterModule.forChild(routes$9)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$9)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var MeterDataDashboardModule = /** @class */ (function () {
        function MeterDataDashboardModule() {
        }
        return MeterDataDashboardModule;
    }());
    MeterDataDashboardModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MeterDataDashboardModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardModule, declarations: [MeterDataDashboardComponent], imports: [i7.CommonModule,
            MeterDataRoutingModule,
            TrendModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i3.MessageAlertModule,
            i3.SkeletonModule,
            i6$1.NgxMatSelectSearchModule,
            i7$1.MatCardModule,
            i12$1.MatTooltipModule,
            i13.MatInputModule,
            i3$1.MatFormFieldModule,
            i4.MatSelectModule] });
    MeterDataDashboardModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardModule, providers: [TrendService], imports: [[
                i7.CommonModule,
                MeterDataRoutingModule,
                TrendModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i3.MessageAlertModule,
                i3.SkeletonModule,
                i6$1.NgxMatSelectSearchModule,
                i7$1.MatCardModule,
                i12$1.MatTooltipModule,
                i13.MatInputModule,
                i3$1.MatFormFieldModule,
                i4.MatSelectModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MeterDataDashboardComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            MeterDataRoutingModule,
                            TrendModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i3.MessageAlertModule,
                            i3.SkeletonModule,
                            i6$1.NgxMatSelectSearchModule,
                            i7$1.MatCardModule,
                            i12$1.MatTooltipModule,
                            i13.MatInputModule,
                            i3$1.MatFormFieldModule,
                            i4.MatSelectModule
                        ],
                        providers: [TrendService]
                    }]
            }] });

    var CgwaReportComponent = /** @class */ (function () {
        function CgwaReportComponent() {
        }
        CgwaReportComponent.prototype.ngOnInit = function () {
        };
        return CgwaReportComponent;
    }());
    CgwaReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CgwaReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CgwaReportComponent, selector: "lib-cgwa", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">CGWA Report</div>\n        </div>\n    </div>\n</div>" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-cgwa',
                        templateUrl: './cgwa.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var routes$8 = [
        {
            path: '',
            component: CgwaReportComponent
        }
    ];
    var CgwaReportRoutingModule = /** @class */ (function () {
        function CgwaReportRoutingModule() {
        }
        return CgwaReportRoutingModule;
    }());
    CgwaReportRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CgwaReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    CgwaReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportRoutingModule, imports: [[i1.RouterModule.forChild(routes$8)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$8)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    var CgwaReportModule = /** @class */ (function () {
        function CgwaReportModule() {
        }
        return CgwaReportModule;
    }());
    CgwaReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CgwaReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportModule, declarations: [CgwaReportComponent], imports: [i7.CommonModule,
            CgwaReportRoutingModule] });
    CgwaReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportModule, imports: [[
                i7.CommonModule,
                CgwaReportRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CgwaReportComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            CgwaReportRoutingModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var ReportService = /** @class */ (function () {
        function ReportService(http, dateService, alertService, environment) {
            this.http = http;
            this.dateService = dateService;
            this.alertService = alertService;
            this.environment = environment;
            this.reportAlertObj = new Alert();
        }
        ReportService.prototype.extractTimestamp = function (dataInp) {
            if (!dataInp) {
                return [];
            }
            var allTimestamp = dataInp.reduce(function (timestamps, dataValues) {
                if (dataValues && dataValues.data) {
                    dataValues.data.forEach(function (entry) {
                        if (entry && entry.date) {
                            timestamps.add(entry.date);
                        }
                    });
                }
                return timestamps;
            }, new Set());
            return Array.from(allTimestamp).sort();
        };
        ReportService.prototype.populateTable = function (timestamp, dataInp, format) {
            var _this = this;
            return timestamp.map(function (time, index) { return ({
                index: index + 1,
                time: _this.dateService.formatDate(time, format),
                data: dataInp.map(function (aggregation) {
                    var matchingEntry = aggregation.data.find(function (entry) { return entry.date == time; });
                    return matchingEntry ? matchingEntry.value : i3.COMMON_CONSTANT.HYPHEN;
                })
            }); });
        };
        ReportService.prototype.downloadReport = function (orgID, requestData) {
            return __awaiter(this, void 0, void 0, function () {
                var url, response, blob, downloadLink, currentDate, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = this.environment.TSC_COMMON_API_URL + "public/organizations/" + orgID + "/report";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.http.post(url, requestData, { observe: 'response', responseType: 'blob' }).toPromise()];
                        case 2:
                            response = _a.sent();
                            if (response && response.body) {
                                blob = new Blob([response.body], { type: response.headers.get('Content-Type') });
                                downloadLink = document.createElement('a');
                                currentDate = moment__namespace().format('DD MMM YYYY HH:mm');
                                downloadLink.href = window.URL.createObjectURL(blob);
                                downloadLink.download = requestData.reportName + "_" + currentDate + "." + requestData.reportFormat;
                                document.body.appendChild(downloadLink);
                                downloadLink.click();
                                document.body.removeChild(downloadLink);
                            }
                            else {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, i3.MessageAlertTypeEnum.WARNING, i3.MessageAlertIconEnum.WARNING_ICON);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return ReportService;
    }());
    ReportService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ReportService, deps: [{ token: i1__namespace$2.HttpClient }, { token: i2__namespace.DateService }, { token: AlertService }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ReportService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ReportService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ReportService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: i2__namespace.DateService }, { type: AlertService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var SourceLoadComponent$1 = /** @class */ (function () {
        function SourceLoadComponent() {
            this.listConstant = LIST_CONSTANT;
            this.categoryFC = new i8.FormControl("source");
            this.emitFilter = new i0.EventEmitter();
        }
        SourceLoadComponent.prototype.ngOnInit = function () {
        };
        SourceLoadComponent.prototype.ngOnChanges = function (changes) {
            if (changes.defaultCategoryInp && this.defaultCategoryInp) {
                this.categoryFC.patchValue(this.defaultCategoryInp);
            }
        };
        SourceLoadComponent.prototype.ngAfterViewInit = function () {
            this.emitFilter.emit();
        };
        SourceLoadComponent.prototype.categoryChange = function (selectedCategory) {
            this.categoryFC.patchValue(selectedCategory);
            this.emitFilter.emit();
        };
        return SourceLoadComponent;
    }());
    SourceLoadComponent$1.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadComponent$1, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SourceLoadComponent$1.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent$1, selector: "lib-source-load", inputs: { defaultCategoryInp: "defaultCategoryInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"categoryFC\" (change)=\"categoryChange(categoryFC.value)\">\n    <mat-button-toggle *ngFor=\"let category of listConstant.SOURCE_LOAD\" value=\"{{ category.value }}\">\n        {{ category.label }}\n    </mat-button-toggle>\n</mat-button-toggle-group>", components: [{ type: i6__namespace$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i6__namespace$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadComponent$1, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-source-load',
                        templateUrl: './source-load.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { defaultCategoryInp: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }] } });

    // /tsc-library/
    var DownloadReportComponent = /** @class */ (function () {
        function DownloadReportComponent() {
            this.listConstant = LIST_CONSTANT;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.fileTypeEnum = i3.FileTypeEnum;
            this.fileTypeEmitted = new i0.EventEmitter();
        }
        DownloadReportComponent.prototype.ngOnInit = function () {
        };
        DownloadReportComponent.prototype.onChange = function (selectedType) {
            this.fileTypeEmitted.emit(selectedType);
        };
        return DownloadReportComponent;
    }());
    DownloadReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DownloadReportComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DownloadReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DownloadReportComponent, selector: "lib-download-report", outputs: { fileTypeEmitted: "fileTypeEmitted" }, ngImport: i0__namespace, template: "<div class=\"btn-group\" ngbDropdown>\n    <button type=\"button\" ngbDropdownToggle class=\"btn btn-sm btn-primary ms-2 dropdownAfter\" matRipple\n        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n        <div class=\"d-flex align-items-center\">\n            <span class=\"me-2\">\n                Export as\n            </span>\n            <span class=\"material-symbols-outlined iconSize\">\n                arrow_drop_down\n            </span>\n        </div>\n    </button>\n    <div ngbDropdownMenu>\n        <button *ngFor=\"let type of listConstant.DOWNLOAD_TYPE\" class=\"dropdown-item\"\n            (click)=\"onChange(type.value)\">\n            <div class=\"d-flex align-items-center\">\n                <span class=\"material-symbols-outlined me-2 fs-5\" [ngSwitch]=\"type.value\">\n                    <span *ngSwitchCase=\"fileTypeEnum.PDF\" class=\"material-symbols-outlined pdfColor\">\n                        picture_as_pdf\n                    </span>\n                    <span *ngSwitchCase=\"fileTypeEnum.CSV\" class=\"material-symbols-outlined csvXlsxColor\">\n                        csv\n                    </span>\n                    <span *ngSwitchCase=\"fileTypeEnum.XLSX\" class=\"material-symbols-outlined csvXlsxColor\">\n                        description\n                    </span>\n                </span>\n                <span>\n                    {{ type.label }}\n                </span>\n            </div>\n        </button>\n    </div>\n</div>", styles: [".funnelFilterDD{width:0;height:0;overflow:hidden}.pdfColor{color:#dc3545}.csvXlsxColor{color:#1d712b}.iconSize{font-size:18px}\n"], directives: [{ type: i1__namespace$4.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i1__namespace$4.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i12__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i1__namespace$4.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i7__namespace.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DownloadReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-download-report',
                        templateUrl: './download-report.component.html',
                        styleUrls: ['./download-report.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { fileTypeEmitted: [{
                    type: i0.Output
                }] } });

    // /tsc-library/
    var ConsumptionBreakupComponent = /** @class */ (function () {
        function ConsumptionBreakupComponent(storageService, toastService, tscCommonService, aggregateDataService, reportService, alertService) {
            this.storageService = storageService;
            this.toastService = toastService;
            this.tscCommonService = tscCommonService;
            this.aggregateDataService = aggregateDataService;
            this.reportService = reportService;
            this.alertService = alertService;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.customRangeConstant = i2.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i2.DateFormatEnum;
            this.dateInputTypeEnum = i2.DateInputTypeEnum;
            this.dateTypeEnum = i2.DateTypeEnum;
            this.showAlert = false;
            this.showLoader = false;
            this.reportAlertObj = new Alert();
        }
        ConsumptionBreakupComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            if (this.applicationKeyID == applicationService.ApplicationKeyID.ENERGY_KEY_ID) {
                this.paramMetric = "engEnergyUsed";
            }
            else if (this.applicationKeyID == applicationService.ApplicationKeyID.WATER_KEY_ID) {
                this.paramMetric = "gwFlowTotalizer";
            }
        };
        ConsumptionBreakupComponent.prototype.sourceLoadInpChange = function () {
            this.category = this.sourceLoadInput.categoryFC.value;
        };
        ConsumptionBreakupComponent.prototype.dateInpChange = function () {
            this.startDate = this.customDateInput.startDateFC.value;
            this.endDate = this.customDateInput.endDateFC.value;
        };
        ConsumptionBreakupComponent.prototype.aggDurationInpChange = function () {
            this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        };
        ConsumptionBreakupComponent.prototype.entityInpChange = function () {
            this.entityID = this.entityInput.multipleEntityFC.value;
        };
        ConsumptionBreakupComponent.prototype.viewReport = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, _c, error_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 3, 4, 5]);
                            requestData = this.createDataRequest();
                            _c = this;
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 2:
                            _c.reportData = _d.sent();
                            if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                this.timestamp = this.reportService.extractTimestamp(this.reportData);
                                this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                            }
                            else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, i3.MessageAlertTypeEnum.WARNING, i3.MessageAlertIconEnum.WARNING_ICON);
                            }
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _d.sent();
                            console.error("Error in viewReport()", error_1);
                            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ConsumptionBreakupComponent.prototype.createDataRequest = function () {
            var _a;
            if (((_a = this.entityID) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.entityID = this.tscCommonService.removeSelectAllID(this.entityID);
            }
            var requestData = new AggregateDataRequest();
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
        };
        ConsumptionBreakupComponent.prototype.downloadReport = function (format) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, error_2;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, 4, 5]);
                            requestData = new DownloadReportRequest();
                            requestData.request = this.createDataRequest();
                            requestData.reportName = 'Consumption Breakup Report';
                            requestData.reportFormat = format;
                            return [4 /*yield*/, this.reportService.downloadReport(this.orgID, requestData)];
                        case 2:
                            _c.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_2 = _c.sent();
                            console.error("Error in downloadReport()", error_2);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ConsumptionBreakupComponent.prototype.isValidInputField = function () {
            var controls = [
                this.customDateInput.startDateFC,
                this.aggDurationInput.aggDurationFC,
                this.entityInput.multipleEntityFC,
            ];
            controls.forEach(function (control) { return control.markAsTouched(); });
            return controls.some(function (control) { return control.invalid; });
        };
        return ConsumptionBreakupComponent;
    }());
    ConsumptionBreakupComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace$1.ToastrService }, { token: i3__namespace.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConsumptionBreakupComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupComponent, selector: "lib-consumption-breakup", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput [dropdownTypeInp]=\"dropdownTypeEnum.MULTIPLE_DROPDOWN\"\n                    (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: SourceLoadComponent$1, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i2__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", outputs: ["fileTypeEmitted"] }, { type: i3__namespace.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i12__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-consumption-breakup',
                        templateUrl: './consumption-breakup.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace$1.ToastrService }, { type: i3__namespace.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { sourceLoadInput: [{
                    type: i0.ViewChild,
                    args: ['sourceLoadInput']
                }], customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], aggDurationInput: [{
                    type: i0.ViewChild,
                    args: ['aggDurationInput']
                }], entityInput: [{
                    type: i0.ViewChild,
                    args: ['entityInput']
                }] } });

    var routes$7 = [
        {
            path: '',
            component: ConsumptionBreakupComponent
        }
    ];
    var ConsumptionBreakupRoutingModule = /** @class */ (function () {
        function ConsumptionBreakupRoutingModule() {
        }
        return ConsumptionBreakupRoutingModule;
    }());
    ConsumptionBreakupRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionBreakupRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    ConsumptionBreakupRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupRoutingModule, imports: [[i1.RouterModule.forChild(routes$7)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$7)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    var SourceLoadModule$1 = /** @class */ (function () {
        function SourceLoadModule() {
        }
        return SourceLoadModule;
    }());
    SourceLoadModule$1.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule$1, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SourceLoadModule$1.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule$1, declarations: [SourceLoadComponent$1], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i13.MatInputModule,
            i6$2.MatButtonToggleModule], exports: [SourceLoadComponent$1] });
    SourceLoadModule$1.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule$1, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i13.MatInputModule,
                i6$2.MatButtonToggleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule$1, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SourceLoadComponent$1
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i13.MatInputModule,
                            i6$2.MatButtonToggleModule
                        ],
                        exports: [
                            SourceLoadComponent$1
                        ]
                    }]
            }] });

    var DownloadReportModule = /** @class */ (function () {
        function DownloadReportModule() {
        }
        return DownloadReportModule;
    }());
    DownloadReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DownloadReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DownloadReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DownloadReportModule, declarations: [DownloadReportComponent], imports: [i7.CommonModule,
            i1$4.NgbModule,
            i8.ReactiveFormsModule,
            i8.FormsModule,
            i13.MatInputModule,
            i4.MatSelectModule,
            icon.MatIconModule,
            i6.MatButtonModule,
            i12.MatRippleModule], exports: [DownloadReportComponent] });
    DownloadReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DownloadReportModule, imports: [[
                i7.CommonModule,
                i1$4.NgbModule,
                i8.ReactiveFormsModule,
                i8.FormsModule,
                i13.MatInputModule,
                i4.MatSelectModule,
                icon.MatIconModule,
                i6.MatButtonModule,
                i12.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DownloadReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DownloadReportComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i1$4.NgbModule,
                            i8.ReactiveFormsModule,
                            i8.FormsModule,
                            i13.MatInputModule,
                            i4.MatSelectModule,
                            icon.MatIconModule,
                            i6.MatButtonModule,
                            i12.MatRippleModule
                        ],
                        exports: [DownloadReportComponent]
                    }]
            }] });

    // /tsc-library/
    var ConsumptionBreakupModule = /** @class */ (function () {
        function ConsumptionBreakupModule() {
        }
        return ConsumptionBreakupModule;
    }());
    ConsumptionBreakupModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionBreakupModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupModule, declarations: [ConsumptionBreakupComponent], imports: [i7.CommonModule,
            ConsumptionBreakupRoutingModule,
            SourceLoadModule$1,
            i2.DateInputModule,
            AggregationDurationModule,
            EntityModule,
            DownloadReportModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i7$2.MatTableModule,
            i12.MatRippleModule] });
    ConsumptionBreakupModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupModule, imports: [[
                i7.CommonModule,
                ConsumptionBreakupRoutingModule,
                SourceLoadModule$1,
                i2.DateInputModule,
                AggregationDurationModule,
                EntityModule,
                DownloadReportModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i7$2.MatTableModule,
                i12.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConsumptionBreakupComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            ConsumptionBreakupRoutingModule,
                            SourceLoadModule$1,
                            i2.DateInputModule,
                            AggregationDurationModule,
                            EntityModule,
                            DownloadReportModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i7$2.MatTableModule,
                            i12.MatRippleModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var DataAvailabilityReportComponent = /** @class */ (function () {
        function DataAvailabilityReportComponent(storageService, toastService, tscCommonService, aggregateDataService, reportService, alertService) {
            this.storageService = storageService;
            this.toastService = toastService;
            this.tscCommonService = tscCommonService;
            this.aggregateDataService = aggregateDataService;
            this.reportService = reportService;
            this.alertService = alertService;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.customRangeConstant = i2.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i2.DateFormatEnum;
            this.dateInputTypeEnum = i2.DateInputTypeEnum;
            this.dateTypeEnum = i2.DateTypeEnum;
            this.parameterList = [];
            this.showAlert = false;
            this.showLoader = false;
            this.reportAlertObj = new Alert();
        }
        DataAvailabilityReportComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
        };
        DataAvailabilityReportComponent.prototype.dateInpChange = function () {
            this.startDate = this.customDateInput.startDateFC.value;
            this.endDate = this.customDateInput.endDateFC.value;
        };
        DataAvailabilityReportComponent.prototype.entityInpChange = function () {
            var _a, _b;
            this.entityID = this.entityInput.entityFC.value;
            (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
            (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
        };
        DataAvailabilityReportComponent.prototype.deviceInpChange = function () {
            var _a, _b;
            this.deviceID = this.deviceInput.deviceFC.value;
            (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
            (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
        };
        DataAvailabilityReportComponent.prototype.paramInpChange = function () {
            var _a;
            var paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
            if (paramMetric.length > 0) {
                this.parameterList = this.tscCommonService.removeSelectAllID(paramMetric);
            }
        };
        DataAvailabilityReportComponent.prototype.viewReport = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    this.alertService.resetAlertProperties(this.reportAlertObj);
                    if (this.isValidInputField()) {
                        this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                        return [2 /*return*/];
                    }
                    if (this.startDate == this.endDate) {
                        this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                        return [2 /*return*/];
                    }
                    this.showLoader = true;
                    try {
                        //INFO: SOMYA AGRAWAL, to discuss..
                    }
                    catch (error) {
                        console.error("Error in viewReport()", error);
                        this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                    }
                    finally {
                        this.showLoader = false;
                    }
                    return [2 /*return*/];
                });
            });
        };
        DataAvailabilityReportComponent.prototype.downloadReport = function (format) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, error_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, 4, 5]);
                            requestData = new DownloadReportRequest();
                            // requestData.request = this.createDataRequest();
                            requestData.reportName = 'Data Availability Report';
                            requestData.reportFormat = format;
                            return [4 /*yield*/, this.reportService.downloadReport(this.orgID, requestData)];
                        case 2:
                            _c.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _c.sent();
                            console.error("Error in downloadReport()", error_1);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        DataAvailabilityReportComponent.prototype.isValidInputField = function () {
            var controls = [
                this.customDateInput.startDateFC,
                this.entityInput.entityFC,
                this.deviceInput.deviceFC,
                this.paramInput.parameterFC
            ];
            controls.forEach(function (control) { return control.markAsTouched(); });
            return controls.some(function (control) { return control.invalid; });
        };
        return DataAvailabilityReportComponent;
    }());
    DataAvailabilityReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace$1.ToastrService }, { token: i3__namespace.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DataAvailabilityReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DataAvailabilityReportComponent, selector: "lib-data-availability", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Data Availability Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"deviceID\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Entity </td>\n                            <td align=\"center\" class=\"fw-bold\"> Device </td>\n                            <td align=\"center\" class=\"fw-bold\"> Parameter </td>\n                            <td align=\"center\" class=\"fw-bold\"> Min Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Max Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Avg Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Data availability (%) </td>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <!-- INFO: SOMYA AGRAWAL, to discuss.. -->\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", outputs: ["fileTypeEmitted"] }, { type: i3__namespace.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i12__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-data-availability',
                        templateUrl: './data-availability.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace$1.ToastrService }, { type: i3__namespace.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], entityInput: [{
                    type: i0.ViewChild,
                    args: ['entityInput']
                }], deviceInput: [{
                    type: i0.ViewChild,
                    args: ['deviceInput']
                }], paramInput: [{
                    type: i0.ViewChild,
                    args: ['paramInput']
                }] } });

    var routes$6 = [
        {
            path: '',
            component: DataAvailabilityReportComponent
        }
    ];
    var DataAvailabilityReportRoutingModule = /** @class */ (function () {
        function DataAvailabilityReportRoutingModule() {
        }
        return DataAvailabilityReportRoutingModule;
    }());
    DataAvailabilityReportRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DataAvailabilityReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DataAvailabilityReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportRoutingModule, imports: [[i1.RouterModule.forChild(routes$6)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$6)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var DataAvailabilityReportModule = /** @class */ (function () {
        function DataAvailabilityReportModule() {
        }
        return DataAvailabilityReportModule;
    }());
    DataAvailabilityReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DataAvailabilityReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportModule, declarations: [DataAvailabilityReportComponent], imports: [i7.CommonModule,
            DataAvailabilityReportRoutingModule,
            i2.DateInputModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            DownloadReportModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i7$2.MatTableModule,
            i12.MatRippleModule] });
    DataAvailabilityReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportModule, imports: [[
                i7.CommonModule,
                DataAvailabilityReportRoutingModule,
                i2.DateInputModule,
                EntityModule,
                DeviceModule,
                ParamMetricModule,
                DownloadReportModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i7$2.MatTableModule,
                i12.MatRippleModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DataAvailabilityReportComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            DataAvailabilityReportRoutingModule,
                            i2.DateInputModule,
                            EntityModule,
                            DeviceModule,
                            ParamMetricModule,
                            DownloadReportModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i7$2.MatTableModule,
                            i12.MatRippleModule,
                        ]
                    }]
            }] });

    // /tsc-library/
    var MeterReportComponent = /** @class */ (function () {
        function MeterReportComponent(storageService, toastService, tscCommonService, entityDeviceService, aggregateDataService, reportService, alertService) {
            this.storageService = storageService;
            this.toastService = toastService;
            this.tscCommonService = tscCommonService;
            this.entityDeviceService = entityDeviceService;
            this.aggregateDataService = aggregateDataService;
            this.reportService = reportService;
            this.alertService = alertService;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.customRangeConstant = i2.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dateFormatEnum = i2.DateFormatEnum;
            this.dateInputTypeEnum = i2.DateInputTypeEnum;
            this.dateTypeEnum = i2.DateTypeEnum;
            this.parameterList = [];
            this.showAlert = false;
            this.showLoader = false;
            this.entityDeviceM = [new DevicesWithEntities()];
            this.reportAlertObj = new Alert();
            this.meterFC = new i8.FormControl();
            this.meterSearchUtil = new i3.MatSelectSearchService(['name']);
        }
        MeterReportComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            if (this.applicationKeyID == applicationService.ApplicationKeyID.ENERGY_KEY_ID) {
                this.paramMetric = "engEnergyUsed";
            }
            else if (this.applicationKeyID == applicationService.ApplicationKeyID.WATER_KEY_ID) {
                this.paramMetric = "gwFlowTotalizer";
            }
            this.getDevicesWithEntitiesByParameter();
        };
        MeterReportComponent.prototype.getDevicesWithEntitiesByParameter = function () {
            var _a, _b, _c, _d;
            return __awaiter(this, void 0, void 0, function () {
                var _e, deviceID;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _e = this;
                            return [4 /*yield*/, this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric, 'YES')];
                        case 1:
                            _e.entityDeviceM = (_f.sent());
                            this.meterSearchUtil.entityArr = this.entityDeviceM;
                            this.meterSearchUtil.createSubscription();
                            if (this.entityDeviceM.length > 1) {
                                deviceID = (_d = (_c = (_b = (_a = this.entityDeviceM) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['devices']) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d['id'];
                                this.meterFC.patchValue(deviceID);
                                this.entityID = this.getEntityIDByDeviceID(deviceID);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        MeterReportComponent.prototype.meterChange = function (selectedMeter) {
            var _a, _b;
            (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
            (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
            this.meterFC.patchValue(selectedMeter);
            this.entityID = this.getEntityIDByDeviceID(selectedMeter);
        };
        MeterReportComponent.prototype.getEntityIDByDeviceID = function (deviceID) {
            var e_1, _e, e_2, _f;
            try {
                for (var _g = __values(this.entityDeviceM), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var entity = _h.value;
                    try {
                        for (var _j = (e_2 = void 0, __values(entity.devices)), _k = _j.next(); !_k.done; _k = _j.next()) {
                            var device = _k.value;
                            if (device.id == deviceID) {
                                return entity.id;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_k && !_k.done && (_f = _j.return)) _f.call(_j);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_e = _g.return)) _e.call(_g);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        MeterReportComponent.prototype.dateInpChange = function () {
            this.startDate = this.customDateInput.startDateFC.value;
            this.endDate = this.customDateInput.endDateFC.value;
        };
        MeterReportComponent.prototype.aggDurationInpChange = function () {
            this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        };
        MeterReportComponent.prototype.paramInpChange = function () {
            var _a;
            var paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
            if (paramMetric.length > 0) {
                this.parameterList = this.tscCommonService.removeSelectAllID(paramMetric);
            }
        };
        MeterReportComponent.prototype.viewReport = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, _e, error_1;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 3, 4, 5]);
                            requestData = this.createDataRequest();
                            _e = this;
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 2:
                            _e.reportData = _f.sent();
                            if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                this.timestamp = this.reportService.extractTimestamp(this.reportData);
                                this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                            }
                            else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, i3.MessageAlertTypeEnum.WARNING, i3.MessageAlertIconEnum.WARNING_ICON);
                            }
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _f.sent();
                            console.error("Error in viewReport()", error_1);
                            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        MeterReportComponent.prototype.downloadReport = function (format) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, error_2;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _e.label = 1;
                        case 1:
                            _e.trys.push([1, 3, 4, 5]);
                            requestData = new DownloadReportRequest();
                            requestData.request = this.createDataRequest();
                            requestData.reportName = 'Meter Report';
                            requestData.reportFormat = format;
                            return [4 /*yield*/, this.reportService.downloadReport(this.orgID, requestData)];
                        case 2:
                            _e.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_2 = _e.sent();
                            console.error("Error in downloadReport()", error_2);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        MeterReportComponent.prototype.createDataRequest = function () {
            var e_3, _e;
            var requestData = new AggregateDataRequest();
            requestData.startTime = this.startDate;
            requestData.endTime = this.endDate;
            requestData.interval = this.aggDuration;
            requestData.entityID = [this.entityID];
            requestData.deviceID = [this.meterFC.value];
            requestData.params = [];
            try {
                for (var _f = __values(this.parameterList), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var paramMetric = _g.value;
                    requestData.params.push({
                        name: paramMetric,
                        dsAgg: "avg",
                        agg: "avg"
                    });
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                }
                finally { if (e_3) throw e_3.error; }
            }
            requestData.nullifyParams();
            return requestData;
        };
        MeterReportComponent.prototype.isValidInputField = function () {
            var controls = [
                this.customDateInput.startDateFC,
                this.aggDurationInput.aggDurationFC,
                this.meterFC,
                this.paramInput.parameterFC
            ];
            controls.forEach(function (control) { return control.markAsTouched(); });
            return controls.some(function (control) { return control.invalid; });
        };
        return MeterReportComponent;
    }());
    MeterReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace$1.ToastrService }, { token: i3__namespace.TSCCommonService }, { token: EntityDeviceService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MeterReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MeterReportComponent, selector: "lib-meter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Meter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select meter</mat-label>\n                    <mat-select (selectionChange)=\"meterChange($event.value)\" [formControl]=\"meterFC\">\n                        <ng-container *ngIf=\"entityDeviceM && entityDeviceM.length > 1; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"meterSearchUtil.filterFC\" placeholderLabel=\"Search by entity name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-optgroup *ngFor=\"let entity of meterSearchUtil.filteredEntities | async\" [label]=\"entity.name\"\n                                [disabled]=\"entity.disabled\">\n                                <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\">\n                                    {{ device.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"meterFC.touched && meterFC.hasError('required')\">\n                        Select meter\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"meterFC.value\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i12__namespace.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", outputs: ["fileTypeEmitted"] }, { type: i3__namespace.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i12__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-meter',
                        templateUrl: './meter.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace$1.ToastrService }, { type: i3__namespace.TSCCommonService }, { type: EntityDeviceService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], aggDurationInput: [{
                    type: i0.ViewChild,
                    args: ['aggDurationInput']
                }], paramInput: [{
                    type: i0.ViewChild,
                    args: ['paramInput']
                }] } });

    var routes$5 = [
        {
            path: '',
            component: MeterReportComponent
        }
    ];
    var MeterReportRoutingModule = /** @class */ (function () {
        function MeterReportRoutingModule() {
        }
        return MeterReportRoutingModule;
    }());
    MeterReportRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MeterReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    MeterReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportRoutingModule, imports: [[i1.RouterModule.forChild(routes$5)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$5)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var MeterReportModule = /** @class */ (function () {
        function MeterReportModule() {
        }
        return MeterReportModule;
    }());
    MeterReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MeterReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportModule, declarations: [MeterReportComponent], imports: [i7.CommonModule,
            MeterReportRoutingModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i2.DateInputModule,
            AggregationDurationModule,
            ParamMetricModule,
            DownloadReportModule,
            i3.MessageAlertModule,
            i3.SkeletonModule,
            i6$1.NgxMatSelectSearchModule,
            i13.MatInputModule,
            i3$1.MatFormFieldModule,
            i4.MatSelectModule,
            i7$2.MatTableModule,
            i12.MatRippleModule] });
    MeterReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportModule, imports: [[
                i7.CommonModule,
                MeterReportRoutingModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i2.DateInputModule,
                AggregationDurationModule,
                ParamMetricModule,
                DownloadReportModule,
                i3.MessageAlertModule,
                i3.SkeletonModule,
                i6$1.NgxMatSelectSearchModule,
                i13.MatInputModule,
                i3$1.MatFormFieldModule,
                i4.MatSelectModule,
                i7$2.MatTableModule,
                i12.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MeterReportComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            MeterReportRoutingModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i2.DateInputModule,
                            AggregationDurationModule,
                            ParamMetricModule,
                            DownloadReportModule,
                            i3.MessageAlertModule,
                            i3.SkeletonModule,
                            i6$1.NgxMatSelectSearchModule,
                            i13.MatInputModule,
                            i3$1.MatFormFieldModule,
                            i4.MatSelectModule,
                            i7$2.MatTableModule,
                            i12.MatRippleModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var ParameterReportComponent = /** @class */ (function () {
        function ParameterReportComponent(storageService, toastService, tscCommonService, aggregateDataService, parameterService, reportService, alertService) {
            this.storageService = storageService;
            this.toastService = toastService;
            this.tscCommonService = tscCommonService;
            this.aggregateDataService = aggregateDataService;
            this.parameterService = parameterService;
            this.reportService = reportService;
            this.alertService = alertService;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.customRangeConstant = i2.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i2.DateFormatEnum;
            this.dateInputTypeEnum = i2.DateInputTypeEnum;
            this.dateTypeEnum = i2.DateTypeEnum;
            this.paramMetric = [];
            this.metricListArray = [];
            this.showAlert = false;
            this.showLoader = false;
            this.parameterM = [new Parameter()];
            this.reportAlertObj = new Alert();
        }
        ParameterReportComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
            this.getParameterByLayoutID();
        };
        ParameterReportComponent.prototype.getParameterByLayoutID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = this;
                            return [4 /*yield*/, this.parameterService.getParameterByLayoutID(this.orgID)];
                        case 1:
                            _c.parameterM = (_d.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        ParameterReportComponent.prototype.dateInpChange = function () {
            this.startDate = this.customDateInput.startDateFC.value;
            this.endDate = this.customDateInput.endDateFC.value;
        };
        ParameterReportComponent.prototype.aggDurationInpChange = function () {
            this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        };
        ParameterReportComponent.prototype.entityInpChange = function () {
            var _a, _b;
            this.entityID = this.entityInput.entityFC.value;
            (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
            (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
            this.parameterList = [];
        };
        ParameterReportComponent.prototype.deviceInpChange = function () {
            var _a, _b;
            this.deviceID = this.deviceInput.deviceFC.value;
            (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.reset();
            (_b = this.paramInput) === null || _b === void 0 ? void 0 : _b.parameterFC.updateValueAndValidity();
            this.parameterList = [];
        };
        ParameterReportComponent.prototype.paramInpChange = function () {
            var _a, _b;
            this.paramMetric = (_a = this.paramInput) === null || _a === void 0 ? void 0 : _a.parameterFC.value;
            if (((_b = this.paramMetric) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                this.parameterList = this.tscCommonService.removeSelectAllID(this.paramMetric);
            }
        };
        ParameterReportComponent.prototype.aggInpChange = function (dsAgg, metric) {
            var _c;
            var metricList = [];
            if (dsAgg) {
                dsAgg.forEach(function (aggregation) {
                    var metricObject = {
                        name: metric,
                        dsAgg: aggregation,
                        agg: "avg"
                    };
                    metricList.push(metricObject);
                });
            }
            this.metricListArray = this.metricListArray.filter(function (entry) { return entry.name != metric; });
            (_c = this.metricListArray).push.apply(_c, __spreadArray([], __read(metricList)));
        };
        ParameterReportComponent.prototype.viewReport = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, _c, error_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 3, 4, 5]);
                            requestData = this.createDataRequest();
                            _c = this;
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 2:
                            _c.reportData = _d.sent();
                            if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                this.timestamp = this.reportService.extractTimestamp(this.reportData);
                                this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                            }
                            else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, i3.MessageAlertTypeEnum.WARNING, i3.MessageAlertIconEnum.WARNING_ICON);
                            }
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _d.sent();
                            console.error("Error in viewReport()", error_1);
                            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ParameterReportComponent.prototype.downloadReport = function (format) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, error_2;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, 4, 5]);
                            requestData = new DownloadReportRequest();
                            requestData.request = this.createDataRequest();
                            requestData.reportName = 'Parameter Report';
                            requestData.reportFormat = format;
                            return [4 /*yield*/, this.reportService.downloadReport(this.orgID, requestData)];
                        case 2:
                            _c.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_2 = _c.sent();
                            console.error("Error in downloadReport()", error_2);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ParameterReportComponent.prototype.createDataRequest = function () {
            var _c;
            var _this = this;
            var filteredMetricListArray = this.metricListArray.filter(function (metric) { return _this.parameterList.includes(metric.name); });
            var requestData = new AggregateDataRequest();
            requestData.startTime = this.startDate;
            requestData.endTime = this.endDate;
            requestData.interval = this.aggDuration;
            requestData.entityID = [this.entityID];
            requestData.deviceID = [this.deviceID];
            requestData.params = [];
            (_c = requestData.params).push.apply(_c, __spreadArray([], __read(filteredMetricListArray.map(function (metric) { return ({
                name: metric.name,
                dsAgg: metric.dsAgg,
                agg: metric.agg,
            }); }))));
            requestData.nullifyParams();
            return requestData;
        };
        ParameterReportComponent.prototype.isValidInputField = function () {
            var controls = [
                this.customDateInput.startDateFC,
                this.aggDurationInput.aggDurationFC,
                this.entityInput.entityFC,
                this.deviceInput.deviceFC,
                this.paramInput.parameterFC
            ];
            controls.forEach(function (control) { return control.markAsTouched(); });
            return controls.some(function (control) { return control.invalid; });
        };
        ParameterReportComponent.prototype.getParameterLabel = function (paramMetricValue) {
            var parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'paramMetric', paramMetricValue);
            return parameter ? parameter.label : '';
        };
        return ParameterReportComponent;
    }());
    ParameterReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace$1.ToastrService }, { token: i3__namespace.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParameterReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterReportComponent, selector: "lib-parameter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }, { propertyName: "aggInput", first: true, predicate: ["aggInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Parameter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"deviceID\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"paramMetric && paramMetric.length > 0\">\n            <table class=\"table\">\n                <tbody>\n                    <tr class=\"tableHeader\">\n                        <td align=\"center\" class=\"fw-bold\"> Metric </td>\n                        <td align=\"center\" class=\"fw-bold\"> Aggregation </td>\n                    </tr>\n                </tbody>\n                <tbody>\n                    <tr *ngFor=\"let metric of parameterList; let i = index\">\n                        <td align=\"center\">\n                            <div class=\"mt-4\">\n                                {{ getParameterLabel(metric) }}\n                            </div>\n                        </td>\n                        <td align=\"center\">\n                            <div class=\"col-sm-6 mt-3\">\n                                <lib-aggregation #aggInput\n                                    (emitFilter)=\"aggInpChange(aggInput.aggregationFC.value, metric)\"></lib-aggregation>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: AggregationComponent, selector: "lib-aggregation", outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", outputs: ["fileTypeEmitted"] }, { type: i3__namespace.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i12__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-parameter',
                        templateUrl: './parameter.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace$1.ToastrService }, { type: i3__namespace.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], aggDurationInput: [{
                    type: i0.ViewChild,
                    args: ['aggDurationInput']
                }], entityInput: [{
                    type: i0.ViewChild,
                    args: ['entityInput']
                }], deviceInput: [{
                    type: i0.ViewChild,
                    args: ['deviceInput']
                }], paramInput: [{
                    type: i0.ViewChild,
                    args: ['paramInput']
                }], aggInput: [{
                    type: i0.ViewChild,
                    args: ['aggInput']
                }] } });

    var routes$4 = [
        {
            path: '',
            component: ParameterReportComponent
        }
    ];
    var ParameterReportRoutingModule = /** @class */ (function () {
        function ParameterReportRoutingModule() {
        }
        return ParameterReportRoutingModule;
    }());
    ParameterReportRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ParameterReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    ParameterReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportRoutingModule, imports: [[i1.RouterModule.forChild(routes$4)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$4)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var ParameterReportModule = /** @class */ (function () {
        function ParameterReportModule() {
        }
        return ParameterReportModule;
    }());
    ParameterReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ParameterReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportModule, declarations: [ParameterReportComponent], imports: [i7.CommonModule,
            ParameterReportRoutingModule,
            i2.DateInputModule,
            AggregationDurationModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            AggregationModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            DownloadReportModule,
            i7$2.MatTableModule,
            i12.MatRippleModule] });
    ParameterReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportModule, imports: [[
                i7.CommonModule,
                ParameterReportRoutingModule,
                i2.DateInputModule,
                AggregationDurationModule,
                EntityModule,
                DeviceModule,
                ParamMetricModule,
                AggregationModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                DownloadReportModule,
                i7$2.MatTableModule,
                i12.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParameterReportComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            ParameterReportRoutingModule,
                            i2.DateInputModule,
                            AggregationDurationModule,
                            EntityModule,
                            DeviceModule,
                            ParamMetricModule,
                            AggregationModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            DownloadReportModule,
                            i7$2.MatTableModule,
                            i12.MatRippleModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var RawDataReportComponent = /** @class */ (function () {
        function RawDataReportComponent(storageService, toastService, tscCommonService, aggregateDataService, parameterService, reportService, alertService) {
            this.storageService = storageService;
            this.toastService = toastService;
            this.tscCommonService = tscCommonService;
            this.aggregateDataService = aggregateDataService;
            this.parameterService = parameterService;
            this.reportService = reportService;
            this.alertService = alertService;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.customRangeConstant = i2.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i2.DateFormatEnum;
            this.dateInputTypeEnum = i2.DateInputTypeEnum;
            this.dateTypeEnum = i2.DateTypeEnum;
            this.showAlert = false;
            this.showLoader = false;
            this.parameterM = [new Parameter()];
            this.reportAlertObj = new Alert();
        }
        RawDataReportComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
        };
        RawDataReportComponent.prototype.dateInpChange = function () {
            this.startDate = this.customDateInput.startDateFC.value;
            this.endDate = this.customDateInput.endDateFC.value;
        };
        RawDataReportComponent.prototype.entityInpChange = function () {
            this.entityID = this.entityInput.entityFC.value;
        };
        RawDataReportComponent.prototype.deviceInpChange = function () {
            this.deviceID = this.deviceInput.deviceFC.value;
            if (this.deviceID) {
                this.getParameterByDeviceID(this.deviceID);
            }
        };
        RawDataReportComponent.prototype.getParameterByDeviceID = function (deviceID) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            requestBody = {};
                            requestBody['deviceID'] = [deviceID];
                            _c = this;
                            return [4 /*yield*/, this.parameterService.getParameterByDeviceID(this.orgID, requestBody)];
                        case 1:
                            _c.parameterM = (_d.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        RawDataReportComponent.prototype.viewReport = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, _c, error_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (!(!this.parameterM || this.parameterM.length == 0 || !this.parameterM[0]['id'])) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.getParameterByDeviceID(this.deviceID)];
                        case 1:
                            _d.sent();
                            _d.label = 2;
                        case 2:
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.dayDifference = this.getTimeDifference(this.startDate, this.endDate);
                            if (!(this.dayDifference <= 1)) return [3 /*break*/, 8];
                            _d.label = 3;
                        case 3:
                            _d.trys.push([3, 5, 6, 7]);
                            this.showLoader = true;
                            requestData = this.createDataRequest();
                            _c = this;
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 4:
                            _c.reportData = _d.sent();
                            if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                this.timestamp = this.reportService.extractTimestamp(this.reportData);
                                this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                            }
                            else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, i3.MessageAlertTypeEnum.WARNING, i3.MessageAlertIconEnum.WARNING_ICON);
                            }
                            return [3 /*break*/, 7];
                        case 5:
                            error_1 = _d.sent();
                            console.error("Error in viewReport()", error_1);
                            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                            return [3 /*break*/, 7];
                        case 6:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 7: return [3 /*break*/, 9];
                        case 8:
                            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.TIME_EXCEEDED_LABEL, ReportErrorEnum.TIME_EXCEEDED_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                            _d.label = 9;
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        RawDataReportComponent.prototype.downloadReport = function (format) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, error_2;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (!(!this.parameterM || this.parameterM.length == 0 || !this.parameterM[0]['id'])) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.getParameterByDeviceID(this.deviceID)];
                        case 1:
                            _c.sent();
                            _c.label = 2;
                        case 2:
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.dayDifference = this.getTimeDifference(this.startDate, this.endDate);
                            if (!(this.dayDifference <= 1)) return [3 /*break*/, 8];
                            _c.label = 3;
                        case 3:
                            _c.trys.push([3, 5, 6, 7]);
                            requestData = new DownloadReportRequest();
                            requestData.request = this.createDataRequest();
                            requestData.reportName = 'Parameter Report';
                            requestData.reportFormat = format;
                            return [4 /*yield*/, this.reportService.downloadReport(this.orgID, requestData)];
                        case 4:
                            _c.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            error_2 = _c.sent();
                            console.error("Error in downloadReport()", error_2);
                            return [3 /*break*/, 7];
                        case 6:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 7: return [3 /*break*/, 9];
                        case 8:
                            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.TIME_EXCEEDED_LABEL, ReportErrorEnum.TIME_EXCEEDED_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                            _c.label = 9;
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        RawDataReportComponent.prototype.createDataRequest = function () {
            var requestData = new AggregateDataRequest();
            requestData.startTime = this.startDate;
            requestData.endTime = this.endDate;
            requestData.interval = "raw";
            requestData.entityID = [this.entityID];
            requestData.deviceID = [this.deviceID];
            requestData.params = this.parameterM.map(function (param) { return ({
                name: param.paramMetric,
                dsAgg: 'avg',
                agg: 'avg'
            }); });
            requestData.nullifyParams();
            return requestData;
        };
        RawDataReportComponent.prototype.isValidInputField = function () {
            var controls = [
                this.customDateInput.startDateFC,
                this.entityInput.entityFC,
                this.deviceInput.deviceFC,
            ];
            controls.forEach(function (control) { return control.markAsTouched(); });
            return controls.some(function (control) { return control.invalid; });
        };
        RawDataReportComponent.prototype.getTimeDifference = function (startTime, endTime) {
            var date1 = new Date(startTime).getTime();
            var date2 = new Date(endTime).getTime();
            var diffTime = Math.abs(date2 - date1);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        };
        return RawDataReportComponent;
    }());
    RawDataReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace$1.ToastrService }, { token: i3__namespace.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RawDataReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RawDataReportComponent, selector: "lib-raw-data", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Raw Data Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", outputs: ["fileTypeEmitted"] }, { type: i3__namespace.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i12__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-raw-data',
                        templateUrl: './raw-data.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace$1.ToastrService }, { type: i3__namespace.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], entityInput: [{
                    type: i0.ViewChild,
                    args: ['entityInput']
                }], deviceInput: [{
                    type: i0.ViewChild,
                    args: ['deviceInput']
                }] } });

    var routes$3 = [
        {
            path: '',
            component: RawDataReportComponent
        }
    ];
    var RawDataReportRoutingModule = /** @class */ (function () {
        function RawDataReportRoutingModule() {
        }
        return RawDataReportRoutingModule;
    }());
    RawDataReportRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RawDataReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    RawDataReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportRoutingModule, imports: [[i1.RouterModule.forChild(routes$3)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$3)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var RawDataReportModule = /** @class */ (function () {
        function RawDataReportModule() {
        }
        return RawDataReportModule;
    }());
    RawDataReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RawDataReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportModule, declarations: [RawDataReportComponent], imports: [i7.CommonModule,
            RawDataReportRoutingModule,
            i2.DateInputModule,
            EntityModule,
            DeviceModule,
            DownloadReportModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i7$2.MatTableModule,
            i12.MatRippleModule] });
    RawDataReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportModule, imports: [[
                i7.CommonModule,
                RawDataReportRoutingModule,
                i2.DateInputModule,
                EntityModule,
                DeviceModule,
                DownloadReportModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i7$2.MatTableModule,
                i12.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RawDataReportComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            RawDataReportRoutingModule,
                            i2.DateInputModule,
                            EntityModule,
                            DeviceModule,
                            DownloadReportModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i7$2.MatTableModule,
                            i12.MatRippleModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var UsageAcrossFacilityComponent = /** @class */ (function () {
        function UsageAcrossFacilityComponent(storageService, toastService, aggregateDataService, reportService, alertService) {
            this.storageService = storageService;
            this.toastService = toastService;
            this.aggregateDataService = aggregateDataService;
            this.reportService = reportService;
            this.alertService = alertService;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.customRangeConstant = i2.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dateFormatEnum = i2.DateFormatEnum;
            this.dateInputTypeEnum = i2.DateInputTypeEnum;
            this.dateTypeEnum = i2.DateTypeEnum;
            this.showAlert = false;
            this.showLoader = false;
            this.reportAlertObj = new Alert();
        }
        UsageAcrossFacilityComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            if (this.applicationKeyID == applicationService.ApplicationKeyID.ENERGY_KEY_ID) {
                this.paramMetric = "engEnergyUsed";
            }
            else if (this.applicationKeyID == applicationService.ApplicationKeyID.WATER_KEY_ID) {
                this.paramMetric = "gwFlowTotalizer";
            }
        };
        UsageAcrossFacilityComponent.prototype.sourceLoadInpChange = function () {
            this.category = this.sourceLoadInput.categoryFC.value;
        };
        UsageAcrossFacilityComponent.prototype.dateInpChange = function () {
            this.startDate = this.customDateInput.startDateFC.value;
            this.endDate = this.customDateInput.endDateFC.value;
        };
        UsageAcrossFacilityComponent.prototype.aggDurationInpChange = function () {
            this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        };
        UsageAcrossFacilityComponent.prototype.viewReport = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, _c, error_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 3, 4, 5]);
                            requestData = this.createDataRequest();
                            _c = this;
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 2:
                            _c.reportData = _d.sent();
                            if (((_a = this.reportData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                this.timestamp = this.reportService.extractTimestamp(this.reportData);
                                this.renderTable = this.reportService.populateTable(this.timestamp, this.reportData, this.dateFormatEnum.DATE_TIME);
                            }
                            else if (((_b = this.reportData) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, i3.MessageAlertTypeEnum.WARNING, i3.MessageAlertIconEnum.WARNING_ICON);
                            }
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _d.sent();
                            console.error("Error in viewReport()", error_1);
                            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, i3.MessageAlertTypeEnum.DANGER, i3.MessageAlertIconEnum.DANGER_ICON);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        UsageAcrossFacilityComponent.prototype.downloadReport = function (format) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, error_2;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                                return [2 /*return*/];
                            }
                            if (this.startDate == this.endDate) {
                                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, i3.MessageAlertTypeEnum.INFO, i3.MessageAlertIconEnum.INFO_ICON);
                                return [2 /*return*/];
                            }
                            this.showLoader = true;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, 4, 5]);
                            requestData = new DownloadReportRequest();
                            requestData.request = this.createDataRequest();
                            requestData.reportName = 'Usage Across Facility Report';
                            requestData.reportFormat = format;
                            return [4 /*yield*/, this.reportService.downloadReport(this.orgID, requestData)];
                        case 2:
                            _c.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            error_2 = _c.sent();
                            console.error("Error in downloadReport()", error_2);
                            return [3 /*break*/, 5];
                        case 4:
                            this.showLoader = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        UsageAcrossFacilityComponent.prototype.createDataRequest = function () {
            var requestData = new AggregateDataRequest();
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
        };
        UsageAcrossFacilityComponent.prototype.isValidInputField = function () {
            var controls = [
                this.customDateInput.startDateFC,
                this.aggDurationInput.aggDurationFC
            ];
            controls.forEach(function (control) { return control.markAsTouched(); });
            return controls.some(function (control) { return control.invalid; });
        };
        return UsageAcrossFacilityComponent;
    }());
    UsageAcrossFacilityComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace$1.ToastrService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UsageAcrossFacilityComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UsageAcrossFacilityComponent, selector: "lib-usage-across-facility", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Usage Across Facility Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                    <lib-download-report (fileTypeEmitted)=\"downloadReport($event)\"></lib-download-report>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: SourceLoadComponent$1, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i2__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: DownloadReportComponent, selector: "lib-download-report", outputs: ["fileTypeEmitted"] }, { type: i3__namespace.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i12__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-usage-across-facility',
                        templateUrl: './usage-across-facility.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace$1.ToastrService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { sourceLoadInput: [{
                    type: i0.ViewChild,
                    args: ['sourceLoadInput']
                }], customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], aggDurationInput: [{
                    type: i0.ViewChild,
                    args: ['aggDurationInput']
                }] } });

    var routes$2 = [
        {
            path: '',
            component: UsageAcrossFacilityComponent
        }
    ];
    var UsageAcrossFacilityRoutingModule = /** @class */ (function () {
        function UsageAcrossFacilityRoutingModule() {
        }
        return UsageAcrossFacilityRoutingModule;
    }());
    UsageAcrossFacilityRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UsageAcrossFacilityRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    UsageAcrossFacilityRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityRoutingModule, imports: [[i1.RouterModule.forChild(routes$2)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$2)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var UsageAcrossFacilityModule = /** @class */ (function () {
        function UsageAcrossFacilityModule() {
        }
        return UsageAcrossFacilityModule;
    }());
    UsageAcrossFacilityModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UsageAcrossFacilityModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityModule, declarations: [UsageAcrossFacilityComponent], imports: [i7.CommonModule,
            UsageAcrossFacilityRoutingModule,
            SourceLoadModule$1,
            i2.DateInputModule,
            AggregationDurationModule,
            DownloadReportModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i7$2.MatTableModule,
            i12.MatRippleModule] });
    UsageAcrossFacilityModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityModule, imports: [[
                i7.CommonModule,
                UsageAcrossFacilityRoutingModule,
                SourceLoadModule$1,
                i2.DateInputModule,
                AggregationDurationModule,
                DownloadReportModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i7$2.MatTableModule,
                i12.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UsageAcrossFacilityComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            UsageAcrossFacilityRoutingModule,
                            SourceLoadModule$1,
                            i2.DateInputModule,
                            AggregationDurationModule,
                            DownloadReportModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i7$2.MatTableModule,
                            i12.MatRippleModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var CreateUpdateEntityComponent = /** @class */ (function () {
        function CreateUpdateEntityComponent(storageService, toastService, entityService, entityController, entityFB, dialogRef, data) {
            var _this = this;
            this.storageService = storageService;
            this.toastService = toastService;
            this.entityService = entityService;
            this.entityController = entityController;
            this.entityFB = entityFB;
            this.dialogRef = dialogRef;
            this.data = data;
            this.MaterialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.ButtonLabelEnum = i3.ButtonLabelEnum;
            this.DialogEnum = i3.DialogEnum;
            this.title = 'Create';
            this.action = 'create';
            this.isNewEntityTypeSelected = false;
            this.isEqual = false;
            this.entityTypeM = [new EntityType()];
            this.entityTypeSearchUtil = new i3.MatSelectSearchService(['type']);
            this.errorHandling = function (control, error) {
                return _this.entityFG.controls[control].hasError(error);
            };
            this.action = data['action'];
            this.entityID = data['entityID'];
            this.layoutID = data['layoutID'];
            this.dialogRef.disableClose = true;
        }
        CreateUpdateEntityComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.getEntityType();
            this.entityFGInit();
            if (this.action == 'update') {
                this.title = 'Update';
                this.getEntityByID();
            }
            this.entityFG.valueChanges.subscribe(function () { _this.isEqual = lodash.isEqual(_this.initialObject, _this.entityFG.getRawValue()); });
        };
        CreateUpdateEntityComponent.prototype.getEntityType = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.entityService.getEntityTypeByLayoutID(this.orgID, 'NO')];
                        case 1:
                            _a.entityTypeM = (_b.sent());
                            this.entityTypeSearchUtil.entityArr = this.entityTypeM;
                            this.entityTypeSearchUtil.createSubscription();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateEntityComponent.prototype.selectEntityType = function () {
            this.isNewEntityTypeSelected = false;
        };
        CreateUpdateEntityComponent.prototype.entityFGInit = function () {
            this.entityFG = this.entityFB.group({
                name: ['', i8.Validators.required],
                type: ['', i8.Validators.required]
            });
        };
        CreateUpdateEntityComponent.prototype.onTypeSelectionChange = function (event) {
            var selectedType = event.value;
            if (selectedType == 'createNewEntityType') {
                this.isNewEntityTypeSelected = true;
                this.entityFG.get('type').reset();
            }
            else {
                this.isNewEntityTypeSelected = false;
            }
        };
        CreateUpdateEntityComponent.prototype.getEntityByID = function () {
            var _this = this;
            this.entityController.getEntityByID(this.orgID, this.layoutID, this.entityID).subscribe(function (entityRes) {
                _this.entityM = entityRes;
                _this.patchEntity(_this.entityM);
            });
        };
        CreateUpdateEntityComponent.prototype.patchEntity = function (entity) {
            this.entityFG.patchValue({
                name: entity['name'],
                type: entity['type']
            });
            this.isEqual = true;
        };
        CreateUpdateEntityComponent.prototype.addEntity = function () {
            var _this = this;
            if (this.entityFG.invalid) {
                this.entityFG.markAllAsTouched();
                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                return;
            }
            this.entityController.createEntity(this.orgID, this.layoutID, this.entityID, this.entityFG.value)
                .subscribe(function (addEntityRes) {
                _this.dialogRef.close(i3.DialogEnum.SUCCESS_DR);
            }, function (error) {
                console.log('error in addEntity - ', error);
            });
        };
        CreateUpdateEntityComponent.prototype.updateEntity = function () {
            var _this = this;
            if (this.entityFG.invalid) {
                this.entityFG.markAllAsTouched();
                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                return;
            }
            this.entityController.updateEntity(this.orgID, this.layoutID, this.entityID, this.entityFG.value)
                .subscribe(function (addEntityRes) {
                _this.dialogRef.close(i3.DialogEnum.SUCCESS_DR);
            }, function (error) {
                console.log('error in updateEntity - ', error);
            });
        };
        return CreateUpdateEntityComponent;
    }());
    CreateUpdateEntityComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEntityComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace$1.ToastrService }, { token: EntityService }, { token: EntityController }, { token: i8__namespace.FormBuilder }, { token: i1__namespace$3.MatDialogRef }, { token: i1$3.MAT_DIALOG_DATA }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CreateUpdateEntityComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateEntityComponent, selector: "lib-entity", ngImport: i0__namespace, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ title }} Entity\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"DialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"entityFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Name</mat-label>\n                    <input matInput placeholder=\"Name\" type=\"text\" formControlName=\"name\" required />\n                    <mat-error *ngIf=\"errorHandling('name', 'required')\">\n                        Name is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"!isNewEntityTypeSelected\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select type</mat-label>\n                    <mat-select formControlName=\"type\" (selectionChange)=\"onTypeSelectionChange($event)\" required>\n                        <mat-option>\n                            <ngx-mat-select-search [formControl]=\"entityTypeSearchUtil.filterFC\"\n                                placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                            </ngx-mat-select-search>\n                        </mat-option>\n                        <mat-option class=\"text-primary\" value=\"createNewEntityType\"\n                            [hidden]=\"entityTypeSearchUtil.filterFC.value\">Create new entity type</mat-option>\n                        <mat-option *ngFor=\"let entity of entityTypeSearchUtil.filteredEntities | async\"\n                            [value]=\"entity.type\">\n                            {{ entity.type }}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"errorHandling('type', 'required')\">\n                        Select type\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-6\" *ngIf=\"isNewEntityTypeSelected\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Type</mat-label>\n                    <input matInput placeholder=\"Type\" type=\"text\" formControlName=\"type\" required />\n                    <mat-error *ngIf=\"errorHandling('type', 'required')\">\n                        Type is required\n                    </mat-error>\n                </mat-form-field>\n\n                <span class=\"mt-2 text-primary cursorPointer\" (click)=\"selectEntityType()\">\n                    <small>Select type *</small>\n                </span>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div mat-dialog-footer align=\"end\">\n    <div [ngSwitch]=\"action\" class=\"d-inline\">\n        <button *ngSwitchCase=\"'create'\" type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addEntity()\">\n            {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchCase=\"'update'\" type=\"button\" class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled': isEqual}\"\n            (click)=\"updateEntity()\">\n            {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchDefault class=\"d-none\"></button>\n    </div>\n</div>", components: [{ type: i6__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i12__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i1__namespace$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1__namespace$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i8__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i8__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i8__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i13__namespace$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i8__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i7__namespace.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i7__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i7__namespace.NgSwitchDefault, selector: "[ngSwitchDefault]" }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEntityComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-entity',
                        templateUrl: './entity.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace$1.ToastrService }, { type: EntityService }, { type: EntityController }, { type: i8__namespace.FormBuilder }, { type: i1__namespace$3.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$3.MAT_DIALOG_DATA]
                        }] }];
        } });

    var CreateUpdateEntityModule = /** @class */ (function () {
        function CreateUpdateEntityModule() {
        }
        return CreateUpdateEntityModule;
    }());
    CreateUpdateEntityModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEntityModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CreateUpdateEntityModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEntityModule, declarations: [CreateUpdateEntityComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            icon.MatIconModule,
            i3$1.MatFormFieldModule,
            i6.MatButtonModule,
            i13.MatInputModule,
            i12$1.MatTooltipModule,
            i1$3.MatDialogModule,
            i4.MatSelectModule,
            i6$1.NgxMatSelectSearchModule] });
    CreateUpdateEntityModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEntityModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                icon.MatIconModule,
                i3$1.MatFormFieldModule,
                i6.MatButtonModule,
                i13.MatInputModule,
                i12$1.MatTooltipModule,
                i1$3.MatDialogModule,
                i4.MatSelectModule,
                i6$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEntityModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CreateUpdateEntityComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            icon.MatIconModule,
                            i3$1.MatFormFieldModule,
                            i6.MatButtonModule,
                            i13.MatInputModule,
                            i12$1.MatTooltipModule,
                            i1$3.MatDialogModule,
                            i4.MatSelectModule,
                            i6$1.NgxMatSelectSearchModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var CreateUpdateLayoutComponent = /** @class */ (function () {
        function CreateUpdateLayoutComponent(dialogRef, data, storageService, layoutFB, toastService, layoutController, layoutService) {
            var _this = this;
            this.dialogRef = dialogRef;
            this.data = data;
            this.storageService = storageService;
            this.layoutFB = layoutFB;
            this.toastService = toastService;
            this.layoutController = layoutController;
            this.layoutService = layoutService;
            this.MaterialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.ButtonLabelEnum = i3.ButtonLabelEnum;
            this.DialogEnum = i3.DialogEnum;
            this.title = 'Create';
            this.action = 'create';
            this.maxLength = 200;
            this.layout = new i5.Layout();
            this.isEqual = false;
            this.errorHandling = function (control, error) {
                return _this.layoutFG.controls[control].hasError(error);
            };
            this.action = data['action'];
            this.layoutID = data['layoutID'];
            this.dialogRef.disableClose = true;
        }
        CreateUpdateLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.layoutInit();
            if (this.action == 'update') {
                this.title = 'Update';
                this.getLayoutByID();
            }
            this.layoutFG.valueChanges.subscribe(function () { _this.isEqual = lodash.isEqual(_this.initialObject, _this.layoutFG.getRawValue()); });
        };
        CreateUpdateLayoutComponent.prototype.layoutInit = function () {
            this.layoutFG = this.layoutFB.group({
                name: ['', [i8.Validators.required]],
                description: []
            });
        };
        CreateUpdateLayoutComponent.prototype.getLayoutByID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.layoutService.getLayoutByID(this.orgID, this.layoutID)];
                        case 1:
                            _a.layout = _b.sent();
                            this.patchLayout(this.layout);
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateLayoutComponent.prototype.patchLayout = function (layout) {
            this.layoutFG.patchValue({
                name: layout['name'],
                description: layout['description']
            });
            this.isEqual = true;
        };
        CreateUpdateLayoutComponent.prototype.createLayout = function () {
            var _this = this;
            if (this.layoutFG.invalid) {
                this.layoutFG.markAllAsTouched();
                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                return;
            }
            this.layoutController.createLayout(this.orgID, this.layoutFG.value)
                .subscribe(function (layoutCreateRes) {
                _this.dialogRef.close({
                    result: i3.DialogEnum.SUCCESS_DR,
                    layoutID: layoutCreateRes.response.id
                });
            }, function (error) {
                console.log('error in createLayout() - ', error);
            });
        };
        CreateUpdateLayoutComponent.prototype.updateLayout = function () {
            var _this = this;
            if (this.layoutFG.invalid) {
                this.layoutFG.markAllAsTouched();
                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                return;
            }
            this.layoutController.updateLayout(this.orgID, this.layoutID, this.layoutFG.value)
                .subscribe(function (updateLayoutRes) {
                _this.dialogRef.close({ result: i3.DialogEnum.SUCCESS_DR, layoutID: null });
            }, function (error) {
                console.log('error in updateLayout() - ', error);
            });
        };
        return CreateUpdateLayoutComponent;
    }());
    CreateUpdateLayoutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateLayoutComponent, deps: [{ token: i1__namespace$3.MatDialogRef }, { token: i1$3.MAT_DIALOG_DATA }, { token: i1__namespace$1.StorageService }, { token: i8__namespace.FormBuilder }, { token: i2__namespace$1.ToastrService }, { token: i5__namespace.LayoutController }, { token: i5__namespace.LayoutService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CreateUpdateLayoutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateLayoutComponent, selector: "lib-layout", ngImport: i0__namespace, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ title }} layout\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"DialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"layoutFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Name</mat-label>\n                    <input matInput placeholder=\"Layout Name\" type=\"text\" formControlName=\"name\" required/>\n                    <mat-error *ngIf=\"errorHandling('name', 'required')\">\n                        Name is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Description</mat-label>\n                    <input class=\"formPlaceholder\" matInput formControlName=\"description\" [maxlength]=\"maxLength\"\n                        #input />\n                    <mat-hint>Total number of character remaining: {{input.value.length}}\n                        /{{ maxLength }}</mat-hint>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div mat-dialog-footer align=\"end\">\n    <div [ngSwitch]=\"action\" class=\"d-inline\">\n        <button *ngSwitchCase=\"'create'\" type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"createLayout()\">\n            {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchCase=\"'update'\" type=\"button\" class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled': isEqual}\"\n            (click)=\"updateLayout()\">\n            {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchDefault class=\"d-none\"></button>\n    </div>\n</div>", components: [{ type: i6__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i1__namespace$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1__namespace$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i8__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i8__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i8__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i13__namespace$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i8__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i8__namespace.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i3__namespace$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i7__namespace.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i7__namespace.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i7__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i7__namespace.NgSwitchDefault, selector: "[ngSwitchDefault]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateLayoutComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-layout',
                        templateUrl: './layout.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$3.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$3.MAT_DIALOG_DATA]
                        }] }, { type: i1__namespace$1.StorageService }, { type: i8__namespace.FormBuilder }, { type: i2__namespace$1.ToastrService }, { type: i5__namespace.LayoutController }, { type: i5__namespace.LayoutService }];
        } });

    var CreateUpdateLayoutModule = /** @class */ (function () {
        function CreateUpdateLayoutModule() {
        }
        return CreateUpdateLayoutModule;
    }());
    CreateUpdateLayoutModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateLayoutModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CreateUpdateLayoutModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateLayoutModule, declarations: [CreateUpdateLayoutComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            icon.MatIconModule,
            i3$1.MatFormFieldModule,
            i6.MatButtonModule,
            i13.MatInputModule,
            i12$1.MatTooltipModule,
            i1$3.MatDialogModule,
            i4.MatSelectModule] });
    CreateUpdateLayoutModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateLayoutModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                icon.MatIconModule,
                i3$1.MatFormFieldModule,
                i6.MatButtonModule,
                i13.MatInputModule,
                i12$1.MatTooltipModule,
                i1$3.MatDialogModule,
                i4.MatSelectModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateLayoutModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CreateUpdateLayoutComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            icon.MatIconModule,
                            i3$1.MatFormFieldModule,
                            i6.MatButtonModule,
                            i13.MatInputModule,
                            i12$1.MatTooltipModule,
                            i1$3.MatDialogModule,
                            i4.MatSelectModule
                        ]
                    }]
            }] });

    var DeviceMappingComponent = /** @class */ (function () {
        function DeviceMappingComponent() {
        }
        DeviceMappingComponent.prototype.ngOnInit = function () {
        };
        return DeviceMappingComponent;
    }());
    DeviceMappingComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMappingComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DeviceMappingComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DeviceMappingComponent, selector: "lib-device-mapping", ngImport: i0__namespace, template: "<p>device-mapping works!</p>\n" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMappingComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-device-mapping',
                        templateUrl: './device-mapping.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    // /tsc-library/
    var SourceLoadComponent = /** @class */ (function () {
        function SourceLoadComponent(dialogRef, data, sourceLoadFB, storageService, toastrService) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.sourceLoadFB = sourceLoadFB;
            this.storageService = storageService;
            this.toastrService = toastrService;
            this.MaterialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.ButtonLabelEnum = i3.ButtonLabelEnum;
            this.DialogEnum = i3.DialogEnum;
            this.FormActionEnum = i3.FormAction;
            this.PageTitleEnum = i3.PageTitleEnum;
            this.isEqual = true;
            this.entityID = data['entityID'];
            this.deviceInfo = data['deviceInfo'];
            this.dialogRef.disableClose = true;
        }
        SourceLoadComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.sourceLoadFGInit();
            if (this.deviceInfo && this.deviceInfo.mappingRecords && this.deviceInfo.mappingRecords.length == 0) {
                this.action = i3.FormAction.ADD;
            }
            else {
                this.action = i3.FormAction.UPDATE;
                this.desiredMappingArray = this.makeDesiredMappingArray();
                this.patchSourceLoadFG();
            }
            this.intialObject = this.sourceLoadFG.value;
            this.sourceLoadFG.valueChanges.subscribe(function () {
                _this.isEqual = lodash.isEqual(_this.intialObject, _this.sourceLoadFG.value);
                if (_this.action == i3.FormAction.UPDATE) {
                    _this.updateDesiredMappingArray();
                }
            });
        };
        SourceLoadComponent.prototype.sourceLoadFGInit = function () {
            this.sourceLoadFG = this.sourceLoadFB.group({
                isSource: [],
                sourceType: [],
                isLoad: [],
                loadType: [],
            });
        };
        SourceLoadComponent.prototype.addSourceType = function (event) {
            var isSource = this.sourceLoadFG.get('isSource');
            isSource.setValue(event.checked);
            if (isSource.value) {
                this.sourceLoadFG.get('sourceType').setValidators([i8.Validators.required]);
            }
            else {
                this.sourceLoadFG.get('sourceType').reset([]);
                this.sourceLoadFG.get('sourceType').clearValidators();
            }
            this.sourceLoadFG.get('sourceType').updateValueAndValidity();
        };
        SourceLoadComponent.prototype.addLoadType = function (event) {
            var isLoad = this.sourceLoadFG.get('isLoad');
            isLoad.setValue(event.checked);
            if (isLoad.value) {
                this.sourceLoadFG.get('loadType').setValidators([i8.Validators.required]);
            }
            else {
                this.sourceLoadFG.get('loadType').reset([]);
                this.sourceLoadFG.get('loadType').clearValidators();
            }
            this.sourceLoadFG.get('loadType').updateValueAndValidity();
        };
        SourceLoadComponent.prototype.makeDesiredMappingArray = function () {
            var mappingArray = [];
            if (this.action == i3.FormAction.ADD) {
                if (this.sourceLoadFG.get('isSource').value) {
                    mappingArray.push({
                        mappingID: null,
                        type: 'SOURCE',
                        value: this.sourceLoadFG.get('sourceType').value || ''
                    });
                }
                if (this.sourceLoadFG.get('isLoad').value) {
                    mappingArray.push({
                        mappingID: null,
                        type: 'LOAD',
                        value: this.sourceLoadFG.get('loadType').value || ''
                    });
                }
            }
            else if (this.action == i3.FormAction.UPDATE) {
                if (this.deviceInfo.mappingRecords) {
                    this.deviceInfo.mappingRecords.forEach(function (record) {
                        mappingArray.push({
                            mappingID: record.mappingID,
                            type: record.type,
                            value: record.value
                        });
                    });
                }
            }
            return mappingArray;
        };
        SourceLoadComponent.prototype.updateDesiredMappingArray = function () {
            var _this = this;
            var mappingArray = [];
            this.desiredMappingArray.forEach(function (mapping) {
                if (mapping.type == 'SOURCE' && _this.sourceLoadFG.get('isSource').value) {
                    mappingArray.push({
                        mappingID: mapping.mappingID,
                        type: 'SOURCE',
                        value: _this.sourceLoadFG.get('sourceType').value || ''
                    });
                }
                else if (mapping.type == 'LOAD' && _this.sourceLoadFG.get('isLoad').value) {
                    mappingArray.push({
                        mappingID: mapping.mappingID,
                        type: 'LOAD',
                        value: _this.sourceLoadFG.get('loadType').value || ''
                    });
                }
            });
            if (this.sourceLoadFG.get('isSource').value && !this.desiredMappingArray.some(function (mapping) { return mapping.type == 'SOURCE'; })) {
                mappingArray.push({
                    mappingID: null,
                    type: 'SOURCE',
                    value: this.sourceLoadFG.get('sourceType').value || ''
                });
            }
            if (this.sourceLoadFG.get('isLoad').value && !this.desiredMappingArray.some(function (mapping) { return mapping.type == 'LOAD'; })) {
                mappingArray.push({
                    mappingID: null,
                    type: 'LOAD',
                    value: this.sourceLoadFG.get('loadType').value || ''
                });
            }
            return mappingArray;
        };
        SourceLoadComponent.prototype.patchSourceLoadFG = function () {
            var _this = this;
            this.desiredMappingArray.forEach(function (mapping) {
                if (mapping.type == 'SOURCE') {
                    _this.sourceLoadFG.patchValue({
                        isSource: true,
                        sourceType: mapping.value
                    });
                }
                else if (mapping.type == 'LOAD') {
                    _this.sourceLoadFG.patchValue({
                        isLoad: true,
                        loadType: mapping.value
                    });
                }
            });
        };
        SourceLoadComponent.prototype.sourceLoadSubmit = function () {
            if (this.action == i3.FormAction.ADD) {
                this.desiredMappingArray = this.makeDesiredMappingArray();
            }
            else if (this.action == i3.FormAction.UPDATE) {
                this.desiredMappingArray = this.updateDesiredMappingArray();
                if (this.desiredMappingArray.length == 0) {
                    this.toastrService.openToast(i2$1.ToastrTitle.INFO, 'Include source or load category and their type when mapping devices for type meters!', i2$1.ToastrColor.INFO);
                }
            }
            if (this.sourceLoadFG.invalid) {
                this.sourceLoadFG.markAllAsTouched();
                this.toastrService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2$1.ToastrColor.ERROR);
                return;
            }
            this.dialogRef.close({
                result: i3.DialogEnum.SUCCESS_DR,
                sourceLoadMappingRes: this.desiredMappingArray
            });
        };
        SourceLoadComponent.prototype.cancel = function () {
            if (this.action == i3.FormAction.ADD) {
                this.toastrService.openToast(i2$1.ToastrTitle.INFO, 'Include source or load category and their type when mapping devices for type meters!', i2$1.ToastrColor.INFO);
            }
            var sourceLoadMappingRes = this.action == i3.FormAction.ADD ? [] : this.makeDesiredMappingArray();
            this.dialogRef.close({
                result: i3.DialogEnum.CLOSE_DR,
                sourceLoadMappingRes: sourceLoadMappingRes
            });
        };
        return SourceLoadComponent;
    }());
    SourceLoadComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadComponent, deps: [{ token: i1__namespace$3.MatDialogRef }, { token: i1$3.MAT_DIALOG_DATA }, { token: i8__namespace.FormBuilder }, { token: i1__namespace$1.StorageService }, { token: i2__namespace$1.ToastrService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SourceLoadComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent, selector: "lib-source-load", ngImport: i0__namespace, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ action == FormActionEnum.ADD ? PageTitleEnum.ADD : PageTitleEnum.UPDATE }} Source/Load\n    </strong>\n</div>\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"sourceLoadFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-checkbox formControlName=\"isSource\" (change)=\"addSourceType($event)\">\n                    Source\n                </mat-checkbox>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"sourceLoadFG.controls['isSource'].value == true\">\n                <mat-form-field class=\"mat-field-width-100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Enter source type</mat-label>\n                    <input matInput placeholder=\"Source type\" type=\"text\" formControlName=\"sourceType\" required />\n                    <mat-error *ngIf=\"sourceLoadFG.get('sourceType').hasError('required')\">\n                        Source type is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-6\">\n                <mat-checkbox formControlName=\"isLoad\" (change)=\"addLoadType($event)\">\n                    Load\n                </mat-checkbox>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"sourceLoadFG.controls['isLoad'].value == true\">\n                <mat-form-field class=\"mat-field-width-100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Enter load type</mat-label>\n                    <input matInput placeholder=\"Load type\" type=\"text\" formControlName=\"loadType\" required />\n                    <mat-error *ngIf=\"sourceLoadFG.get('loadType').hasError('required')\">\n                        Load type is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>\n<div mat-dialog-footer align=\"end\">\n    <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"cancel()\">\n        {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n    </button>\n    <button class=\"btn btn-sm btn-success\" type=\"submit\" [ngClass]=\"{'disabled': isEqual}\" (click)=\"sourceLoadSubmit()\">\n        {{ action == FormActionEnum.ADD ? ButtonLabelEnum.ADD_BTN_LABEL : ButtonLabelEnum.UPDATE_BTN_LABEL }}\n    </button>\n</div>", components: [{ type: i5__namespace$2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i1__namespace$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i8__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i8__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i8__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$1.MatLabel, selector: "mat-label" }, { type: i13__namespace$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i8__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i3__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i7__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-source-load',
                        templateUrl: './source-load.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$3.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$3.MAT_DIALOG_DATA]
                        }] }, { type: i8__namespace.FormBuilder }, { type: i1__namespace$1.StorageService }, { type: i2__namespace$1.ToastrService }];
        } });

    var SourceLoadModule = /** @class */ (function () {
        function SourceLoadModule() {
        }
        return SourceLoadModule;
    }());
    SourceLoadModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SourceLoadModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule, declarations: [SourceLoadComponent], imports: [i7.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            icon.MatIconModule,
            i3$1.MatFormFieldModule,
            i6.MatButtonModule,
            i13.MatInputModule,
            i12$1.MatTooltipModule,
            i1$3.MatDialogModule,
            i4.MatSelectModule,
            i5$2.MatCheckboxModule] });
    SourceLoadModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule, imports: [[
                i7.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                icon.MatIconModule,
                i3$1.MatFormFieldModule,
                i6.MatButtonModule,
                i13.MatInputModule,
                i12$1.MatTooltipModule,
                i1$3.MatDialogModule,
                i4.MatSelectModule,
                i5$2.MatCheckboxModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SourceLoadComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            icon.MatIconModule,
                            i3$1.MatFormFieldModule,
                            i6.MatButtonModule,
                            i13.MatInputModule,
                            i12$1.MatTooltipModule,
                            i1$3.MatDialogModule,
                            i4.MatSelectModule,
                            i5$2.MatCheckboxModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var DeviceMappingModule = /** @class */ (function () {
        function DeviceMappingModule() {
        }
        return DeviceMappingModule;
    }());
    DeviceMappingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMappingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DeviceMappingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMappingModule, declarations: [DeviceMappingComponent], imports: [i7.CommonModule,
            SourceLoadModule,
            i3.EllipsisPipeModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            icon.MatIconModule,
            i3$1.MatFormFieldModule,
            i6.MatButtonModule,
            i13.MatInputModule,
            i12$1.MatTooltipModule,
            i1$3.MatDialogModule,
            i4.MatSelectModule,
            i7$2.MatTableModule,
            i9.MatPaginatorModule,
            i8$2.MatSortModule,
            i5$2.MatCheckboxModule] });
    DeviceMappingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMappingModule, imports: [[
                i7.CommonModule,
                SourceLoadModule,
                i3.EllipsisPipeModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                icon.MatIconModule,
                i3$1.MatFormFieldModule,
                i6.MatButtonModule,
                i13.MatInputModule,
                i12$1.MatTooltipModule,
                i1$3.MatDialogModule,
                i4.MatSelectModule,
                i7$2.MatTableModule,
                i9.MatPaginatorModule,
                i8$2.MatSortModule,
                i5$2.MatCheckboxModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceMappingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DeviceMappingComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            SourceLoadModule,
                            i3.EllipsisPipeModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            icon.MatIconModule,
                            i3$1.MatFormFieldModule,
                            i6.MatButtonModule,
                            i13.MatInputModule,
                            i12$1.MatTooltipModule,
                            i1$3.MatDialogModule,
                            i4.MatSelectModule,
                            i7$2.MatTableModule,
                            i9.MatPaginatorModule,
                            i8$2.MatSortModule,
                            i5$2.MatCheckboxModule
                        ]
                    }]
            }] });

    var TscLiteButtonLabelEnum;
    (function (TscLiteButtonLabelEnum) {
        TscLiteButtonLabelEnum["LAYOUT_BTN_LABEL"] = "Layout";
        TscLiteButtonLabelEnum["EXPORT_BTN_LABEL"] = "Export as";
    })(TscLiteButtonLabelEnum || (TscLiteButtonLabelEnum = {}));

    // /tsc-library/
    var PageComponent = /** @class */ (function () {
        function PageComponent(router, storageService, layoutController, commonEvent, dialog) {
            this.router = router;
            this.storageService = storageService;
            this.layoutController = layoutController;
            this.commonEvent = commonEvent;
            this.dialog = dialog;
            this.TABLE_CONSTANT = i3.TABLE_CONSTANT;
            this.TscLiteButtonLabelEnum = TscLiteButtonLabelEnum;
            this.ButtonLabelEnum = i3.ButtonLabelEnum;
            this.faPlus = freeSolidSvgIcons.faPlus;
            this.faEllipsisV = freeSolidSvgIcons.faEllipsisV;
            this.displayedColumn = ['id', 'name', 'description', 'option'];
            this.resultLength = 0;
            this.dataSource = [];
            this.searchFlag = false;
            this.searchArr = [];
        }
        PageComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
        };
        PageComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            rxjs.merge(this.paginator.page, this.sort.sortChange, rxjs.fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(operators.startWith({}), operators.switchMap(function () {
                _this.searchArr = [];
                if (_this.searchFlag) {
                    _this.searchArr.push('name:' + _this.searchValue);
                }
                return _this.layoutController.getLayoutByPage(_this.paginator.pageIndex, _this.paginator.pageSize, _this.sort.active, _this.sort.direction, _this.searchArr, _this.orgID).pipe(operators.catchError(function () { return rxjs.of(null); }));
            }), operators.map(function (response) {
                if (response == null) {
                    _this.resultLength = 0;
                    return [];
                }
                _this.resultLength = response["totalCount"];
                return response["records"];
            })).subscribe(function (dataSource) {
                _this.dataSource = dataSource;
            });
        };
        PageComponent.prototype.searchFn = function (value) {
            this.searchFlag = true;
            this.searchValue = value;
            if (value.length == 0) {
                this.resetSearch();
            }
            else {
                this.paginator.pageIndex = 0;
            }
            this.refreshBtn.nativeElement.click();
        };
        PageComponent.prototype.resetSearch = function () {
            this.searchFlag = false;
            this.searchBar.searchClear();
        };
        PageComponent.prototype.navigateToViewPage = function (id) {
            this.router.navigate(['/layout', id, 'view']);
        };
        PageComponent.prototype.openCreateUpdateLayoutDialog = function (action, layoutID) {
            var _this = this;
            var dialogRef;
            if (action == 'create') {
                dialogRef = this.dialog.open(CreateUpdateLayoutComponent, {
                    data: {
                        action: action
                    },
                    minWidth: '550px',
                    maxWidth: '550px'
                });
                dialogRef.afterClosed().subscribe(function (dialogRes) {
                    if (dialogRes.result == i3.DialogEnum.SUCCESS_DR) {
                        // Emit the layoutChange event
                        _this.commonEvent.layoutChange.next('YES');
                        _this.router.navigate(["layout/" + dialogRes.layoutID + "/view"]);
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
                dialogRef.afterClosed().subscribe(function (dialogRes) {
                    if (dialogRes.result == i3.DialogEnum.SUCCESS_DR) {
                        // Emit the layoutChange event
                        _this.commonEvent.layoutChange.next('YES');
                        window.location.reload();
                    }
                });
            }
        };
        PageComponent.prototype.openDeleteLayoutDialog = function (layoutID, layoutName) {
            var _this = this;
            var dialog = this.dialog.open(i3.DialogOneComponent, {
                minWidth: '450px',
                maxWidth: '450px',
                data: {
                    type: i3.DialogOneEnum.DELETE,
                    icon: 'dangerous',
                    header: 'Delete layout?',
                    body: '<b>' + layoutName + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                    buttonOne: i3.ButtonLabelEnum.CANCEL_BTN_LABEL,
                    buttonTwo: i3.ButtonLabelEnum.DELETE_BTN_LABEL
                }
            });
            dialog.afterClosed().subscribe(function (res) {
                if (res) {
                    _this.deleteLayout(layoutID);
                }
            });
        };
        PageComponent.prototype.deleteLayout = function (layoutID) {
            var _this = this;
            this.layoutController.deleteLayout(this.orgID, layoutID).subscribe(function (deleteRes) {
                // Emit the layoutChange event
                _this.commonEvent.layoutChange.next('YES');
                _this.refreshBtn.nativeElement.click();
            });
        };
        return PageComponent;
    }());
    PageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageComponent, deps: [{ token: i1__namespace.Router }, { token: i1__namespace$1.StorageService }, { token: i5__namespace.LayoutController }, { token: i3__namespace.CommonEvent }, { token: i1__namespace$3.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageComponent, selector: "app-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Layout</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n                <a class=\"btn btn-sm btn-success btnBase\" matRipple (click)=\"openCreateUpdateLayoutDialog('create', null)\">\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>&nbsp; {{ TscLiteButtonLabelEnum.LAYOUT_BTN_LABEL }}\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <table mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\" matSortDirection=\"asc\"\n        matSortDisableClear>\n\n        <ng-container matColumnDef=\"id\">\n            <th class=\"columnWidth1 px-3\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                ID\n            </th>\n            <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\" (click)=\"navigateToViewPage(row['id'])\">\n                {{ row['id'] }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n            <th class=\"columnWidth2 px-3\" mat-header-cell *matHeaderCellDef> Name </th>\n            <td class=\"columnWidth2 px-3\" mat-cell *matCellDef=\"let row\"\n                [matTooltip]=\"row?.['name']?.length>24? row['name']: ''\" matTooltipPosition=\"above\"\n                matTooltipClass=\"nameTooltip\" (click)=\"navigateToViewPage(row['id'])\">\n                {{ row?.['name'] | dotdotdot:24 }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"description\">\n            <th class=\"columnWidth2 px-3\" mat-header-cell *matHeaderCellDef> Description </th>\n            <td class=\"columnWidth2 px-3\" mat-cell *matCellDef=\"let row\"\n                [matTooltip]=\"row?.['description']?.length>24? row['description']: ''\" matTooltipPosition=\"above\"\n                matTooltipClass=\"nameTooltip\" (click)=\"navigateToViewPage(row['id'])\">\n                {{ row?.['description'] | dotdotdot:24 }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"option\">\n            <th class=\"columnWidth3\" mat-header-cell *matHeaderCellDef> Action </th>\n            <td class=\"columnWidth3 text-center\" mat-cell *matCellDef=\"let row\">\n                <div class=\"d-flex align-items-center\">\n                    <div class=\"btn-group\" ngbDropdown placement=\"left\">\n                        <button type=\"button\" ngbDropdownToggle class=\"dropdown-after dropdownAfter btn\">\n                            <fa-icon [icon]=\"faEllipsisV\"></fa-icon>\n                        </button>\n                        <div ngbDropdownMenu>\n                            <button class=\"dropdown-item\" (click)=\"openCreateUpdateLayoutDialog('update', row.id)\">\n                                {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                            </button>\n                            <!-- <button class=\"btn btn-outline-danger rounded-0 dropdown-item\" (click)=\"openDeleteLayoutDialog(row.id, row.name)\">\n                                {{ ButtonLabelEnum.DELETE_BTN_LABEL }}\n                            </button> -->\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\" class=\"data-row\"></tr>\n\n        <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n            </td>\n        </tr>\n    </table>\n\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:200px}.columnWidth3{min-width:140px}\n"], components: [{ type: i3__namespace.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i6__namespace$3.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i7__namespace$2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i8__namespace$2.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i7__namespace$2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i7__namespace$2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9__namespace.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i12__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i8__namespace$2.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i7__namespace$2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i7__namespace$2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i7__namespace$2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i7__namespace$2.MatCellDef, selector: "[matCellDef]" }, { type: i7__namespace$2.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1__namespace$4.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i1__namespace$4.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i1__namespace$4.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i7__namespace$2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i7__namespace$2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i7__namespace$2.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i3__namespace.EllipsisPipeService } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-page',
                        templateUrl: './page.component.html',
                        styleUrls: ['./page.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }, { type: i1__namespace$1.StorageService }, { type: i5__namespace.LayoutController }, { type: i3__namespace.CommonEvent }, { type: i1__namespace$3.MatDialog }]; }, propDecorators: { sort: [{
                    type: i0.ViewChild,
                    args: ['sort']
                }], paginator: [{
                    type: i0.ViewChild,
                    args: ['paginator']
                }], refreshBtn: [{
                    type: i0.ViewChild,
                    args: ['refreshBtn']
                }], searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar']
                }] } });

    var routes$1 = [
        {
            path: '',
            component: PageComponent
        }
    ];
    var PageRoutingModule = /** @class */ (function () {
        function PageRoutingModule() {
        }
        return PageRoutingModule;
    }());
    PageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    PageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, imports: [[i1.RouterModule.forChild(routes$1)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$1)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var PageModule = /** @class */ (function () {
        function PageModule() {
        }
        return PageModule;
    }());
    PageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, declarations: [PageComponent], imports: [i7.CommonModule,
            PageRoutingModule,
            i3.SearchBarOneModule,
            i3.EllipsisPipeModule,
            i1$4.NgbModule,
            i6$3.FontAwesomeModule,
            icon.MatIconModule,
            i6.MatButtonModule,
            i12.MatRippleModule,
            i7$2.MatTableModule,
            i9.MatPaginatorModule,
            i8$2.MatSortModule,
            i1$3.MatDialogModule,
            i12$1.MatTooltipModule] });
    PageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, imports: [[
                i7.CommonModule,
                PageRoutingModule,
                i3.SearchBarOneModule,
                i3.EllipsisPipeModule,
                i1$4.NgbModule,
                i6$3.FontAwesomeModule,
                icon.MatIconModule,
                i6.MatButtonModule,
                i12.MatRippleModule,
                i7$2.MatTableModule,
                i9.MatPaginatorModule,
                i8$2.MatSortModule,
                i1$3.MatDialogModule,
                i12$1.MatTooltipModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PageComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            PageRoutingModule,
                            i3.SearchBarOneModule,
                            i3.EllipsisPipeModule,
                            i1$4.NgbModule,
                            i6$3.FontAwesomeModule,
                            icon.MatIconModule,
                            i6.MatButtonModule,
                            i12.MatRippleModule,
                            i7$2.MatTableModule,
                            i9.MatPaginatorModule,
                            i8$2.MatSortModule,
                            i1$3.MatDialogModule,
                            i12$1.MatTooltipModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var CreateUpdateTreeViewComponent = /** @class */ (function () {
        function CreateUpdateTreeViewComponent(storageService, entityController, toastrService, dialog) {
            this.storageService = storageService;
            this.entityController = entityController;
            this.toastrService = toastrService;
            this.dialog = dialog;
            this.formActionEnum = i3.FormAction;
            this.emitFilter = new i0.EventEmitter();
            this.entities = [new EntityTree()];
        }
        CreateUpdateTreeViewComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.getEntitiesForTreeView();
        };
        CreateUpdateTreeViewComponent.prototype.ngOnChanges = function (changes) {
            this.getEntitiesForTreeView();
        };
        CreateUpdateTreeViewComponent.prototype.getEntitiesForTreeView = function () {
            var _this = this;
            this.entityController.getEntitiesForTreeView(this.orgID, this.layoutID)
                .subscribe(function (entityTreeRes) {
                _this.entities = entityTreeRes;
            }, function (error) {
                console.log('error in getEntitiesForTreeView() -', error);
            });
        };
        CreateUpdateTreeViewComponent.prototype.hasContent = function (entity) {
            return entity && entity.children && entity.children.length > 0;
        };
        CreateUpdateTreeViewComponent.prototype.openChildDialog = function (entityID, action) {
            var _this = this;
            var dialog = this.dialog.open(CreateUpdateEntityComponent, {
                data: {
                    action: action,
                    entityID: entityID,
                    layoutID: this.layoutID,
                },
                minWidth: '500px',
                maxWidth: '500px',
            });
            dialog.afterClosed()
                .subscribe(function (result) {
                if (result == i3.DialogEnum.SUCCESS_DR) {
                    _this.getEntitiesForTreeView();
                }
            });
        };
        CreateUpdateTreeViewComponent.prototype.mapDevices = function (entityID) {
            var _this = this;
            var dialog = this.dialog.open(DeviceMappingComponent, {
                data: {
                    entityID: entityID,
                    layoutID: this.layoutID,
                },
                minWidth: '80vw',
                maxWidth: '80vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
            dialog.afterClosed()
                .subscribe(function (result) {
                if (result == i3.DialogEnum.SUCCESS_DR) {
                    _this.getEntitiesForTreeView();
                }
            });
        };
        CreateUpdateTreeViewComponent.prototype.openDeleteEntityDialog = function (entityID, entityName) {
            var _this = this;
            var dialog = this.dialog.open(i3.DialogOneComponent, {
                minWidth: '450px',
                maxWidth: '450px',
                data: {
                    type: i3.DialogOneEnum.DELETE,
                    icon: 'dangerous',
                    header: 'Delete entity?',
                    body: 'This will delete all children entities of <b>' + entityName + '</b>.</br></br>Are you sure you want to continue?',
                    buttonOne: i3.ButtonLabelEnum.CANCEL_BTN_LABEL,
                    buttonTwo: i3.ButtonLabelEnum.DELETE_BTN_LABEL
                }
            });
            dialog.afterClosed().subscribe(function (res) {
                if (res) {
                    _this.deleteEntity(entityID);
                }
            });
        };
        CreateUpdateTreeViewComponent.prototype.deleteEntity = function (entityID) {
            var _this = this;
            this.entityController.deleteEntity(this.orgID, this.layoutID, entityID).subscribe(function (deleteRes) {
                _this.getEntitiesForTreeView();
            });
        };
        return CreateUpdateTreeViewComponent;
    }());
    CreateUpdateTreeViewComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateTreeViewComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: EntityController }, { token: i2__namespace$1.ToastrService }, { token: i1__namespace$3.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CreateUpdateTreeViewComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateTreeViewComponent, selector: "lib-tree-view", inputs: { permissionType: "permissionType", allowUpdateOnClick: "allowUpdateOnClick", layoutID: "layoutID" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<!-- template call for entityTemplate -->\n<mat-accordion>\n    <ng-container *ngFor=\"let entity of entities\">\n        <ng-container *ngTemplateOutlet=\"entityTemplate; \n            context: {\n                entity: entity,\n                panelTitleClass: 'fw-bold',\n                expansionPanelClass : 'cardBackgroundColor',\n                expanded: hasContent(entity),\n                allowUpdateDelete: false\n            }\">\n        </ng-container>\n    </ng-container>\n</mat-accordion>\n<!-- /template call for entityTemplate/ -->\n\n\n<!-- template for recursive entity -->\n<ng-template #entityTemplate let-entity=\"entity\" let-panelTitleClass=\"panelTitleClass\"\n    let-expansionPanelClass=\"expansionPanelClass\" let-expanded=\"expanded\" let-allowUpdateDelete=\"allowUpdateDelete\">\n    <mat-expansion-panel class=\"mt-2 cardOverwrite\" [class]=\"expansionPanelClass\" [expanded]=\"expanded\"\n        [disabled]=\"!hasContent(entity)\" [hideToggle]=\"!hasContent(entity)\">\n\n        <mat-expansion-panel-header class=\"matAccRightAlignedHeader\">\n            <mat-panel-title>\n                <div class=\"d-flex align-items-center\">\n                    <span [class]=\"panelTitleClass\">\n                        {{ entity.name }}\n                    </span> <span class=\"badge rounded-pill bg-info ms-2\">\n                        {{ entity.type }}\n                    </span>\n                </div>\n            </mat-panel-title>\n            <mat-panel-description class=\"float-end\" *ngIf=\"allowUpdateOnClick\">\n                <span class=\"material-symbols-outlined text-primary me-3\" #tooltip=\"matTooltip\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Add child\"\n                    (click)=\"openChildDialog(entity.id, 'create'); $event.stopPropagation()\">\n                    add_circle\n                </span>\n                <span class=\"material-symbols-outlined text-primary me-3\" #tooltip=\"matTooltip\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Device mapping\"\n                    (click)=\"mapDevices(entity.id); $event.stopPropagation()\">\n                    devices\n                </span>\n                <span class=\"material-symbols-outlined text-secondary me-3\" *ngIf=\"allowUpdateDelete\" #tooltip=\"matTooltip\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Edit child\"\n                    (click)=\"openChildDialog(entity.id, 'update'); $event.stopPropagation()\">\n                    edit_square\n                </span>\n                <span class=\"material-symbols-outlined text-danger me-3\" *ngIf=\"allowUpdateDelete\" #tooltip=\"matTooltip\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Delete\"\n                    (click)=\"openDeleteEntityDialog(entity.id, entity.name); $event.stopPropagation()\">\n                    delete\n                </span>\n            </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <ng-container *ngIf=\"entity.children && entity.children.length > 0\">\n            <ng-container *ngFor=\"let child of entity.children\">\n                <ng-container *ngTemplateOutlet=\"entityTemplate; \n                    context:{ \n                        entity: child,\n                        panelTitleClass: 'text-dark',\n                        expansionPanelClass : 'border',\n                        expanded: 'false',\n                        allowUpdateDelete: true\n                    }\">\n                </ng-container>\n            </ng-container>\n        </ng-container>\n\n    </mat-expansion-panel>\n</ng-template>\n<!-- /template for recursive entity/ -->", components: [{ type: i5__namespace$1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i5__namespace$1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }], directives: [{ type: i5__namespace$1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i5__namespace$1.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5__namespace$1.MatExpansionPanelDescription, selector: "mat-panel-description" }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateTreeViewComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-tree-view',
                        templateUrl: './tree-view.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: EntityController }, { type: i2__namespace$1.ToastrService }, { type: i1__namespace$3.MatDialog }]; }, propDecorators: { permissionType: [{
                    type: i0.Input
                }], allowUpdateOnClick: [{
                    type: i0.Input
                }], layoutID: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }] } });

    // /tsc-library/
    var ViewComponent = /** @class */ (function () {
        function ViewComponent(activatedRoute, storageService, layoutService, entityService) {
            this.activatedRoute = activatedRoute;
            this.storageService = storageService;
            this.layoutService = layoutService;
            this.entityService = entityService;
            this.formActionEnum = i3.FormAction;
            this.layoutM = new i5.Layout();
            this.entityDeviceM = new EntityTree();
            this.allowUpdateEntityTree = false;
            this.selectedViewFC = new i8.FormControl('LAYOUT');
        }
        ViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.activatedRoute.params.subscribe(function (param) {
                _this.layoutID = param['layoutID'];
                _this.getLayoutByID();
                _this.getEntitiesWithDevices();
            });
        };
        ViewComponent.prototype.getLayoutByID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.layoutService.getLayoutByID(this.orgID, this.layoutID)];
                        case 1:
                            _a.layoutM = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ViewComponent.prototype.getEntitiesWithDevices = function () {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            requestBody = {
                                'entityType': ['ALL']
                            };
                            _a = this;
                            return [4 /*yield*/, this.entityService.getEntitiesWithDevices(this.orgID, this.layoutID, requestBody, 'NO')];
                        case 1:
                            _a.entityDeviceM = (_b.sent());
                            if (this.entityDeviceM) {
                                this.drawChart();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        ViewComponent.prototype.changeState = function () {
            this.allowUpdateEntityTree = true;
        };
        ViewComponent.prototype.drawChart = function () {
            var convertNode = function (node) { return ({
                name: node.name,
                children: node.children ? node.children.map(convertNode) : [],
            }); };
            var chartData = convertNode(this.entityDeviceM);
            this.chartDataOption = {
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [
                    {
                        type: 'tree',
                        id: 0,
                        name: 'tree1',
                        data: [chartData],
                        top: '10%',
                        left: '15%',
                        bottom: '22%',
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
                                align: 'left'
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
        };
        return ViewComponent;
    }());
    ViewComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewComponent, deps: [{ token: i1__namespace.ActivatedRoute }, { token: i1__namespace$1.StorageService }, { token: i5__namespace.LayoutService }, { token: EntityService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ViewComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ViewComponent, selector: "lib-view", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Layout\n                <span *ngIf=\"layoutM\">\n                    - ({{ layoutM?.name }})\n                </span>\n            </div>\n        </div>\n        <div class=\"headerRightContainer\" *ngIf=\"selectedViewFC.value == 'TREE'\">\n            <div class=\"headerRightContainerInner\">\n                <span class=\"cursorPointer material-symbols-outlined text-secondary fs-3\" #tooltip=\"matTooltip\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Update\"\n                    (click)=\"changeState()\">\n                    edit_square\n                </span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-button-toggle-group class=\"matBtnFilter matBtnToggleWidth\" [formControl]=\"selectedViewFC\">\n                    <mat-button-toggle value=\"LAYOUT\"> Layout </mat-button-toggle>\n                    <mat-button-toggle value=\"TREE\"> Tree </mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"selectedViewFC.value == 'LAYOUT'\">\n            <div class=\"col-sm-12\">\n                <div echarts [options]=\"chartDataOption\"></div>\n            </div>\n        </div>\n        <div class=\"row mt-4\" *ngIf=\"selectedViewFC.value == 'TREE'\">\n            <div class=\"col-sm-12\">\n                <lib-tree-view [permissionType]=\"formActionEnum.VIEW\" [layoutID]=\"layoutID\"\n                    [allowUpdateOnClick]=\"allowUpdateEntityTree\"></lib-tree-view>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".matBtnToggleWidth mat-button-toggle{width:70px}\n"], components: [{ type: i6__namespace$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: CreateUpdateTreeViewComponent, selector: "lib-tree-view", inputs: ["permissionType", "allowUpdateOnClick", "layoutID"], outputs: ["emitFilter"] }], directives: [{ type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i12__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i6__namespace$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i10__namespace$1.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-view',
                        templateUrl: './view.component.html',
                        styleUrls: ['./view.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ActivatedRoute }, { type: i1__namespace$1.StorageService }, { type: i5__namespace.LayoutService }, { type: EntityService }]; } });

    var routes = [
        {
            path: '',
            component: ViewComponent
        }
    ];
    var ViewRoutingModule = /** @class */ (function () {
        function ViewRoutingModule() {
        }
        return ViewRoutingModule;
    }());
    ViewRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ViewRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    ViewRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewRoutingModule, imports: [[i1.RouterModule.forChild(routes)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes)],
                        exports: [i1.RouterModule]
                    }]
            }] });

    var CreateUpdateTreeViewModule = /** @class */ (function () {
        function CreateUpdateTreeViewModule() {
        }
        return CreateUpdateTreeViewModule;
    }());
    CreateUpdateTreeViewModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateTreeViewModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CreateUpdateTreeViewModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateTreeViewModule, declarations: [CreateUpdateTreeViewComponent], imports: [i7.CommonModule,
            CreateUpdateEntityModule,
            DeviceMappingModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i7$1.MatCardModule,
            icon.MatIconModule,
            i3$1.MatFormFieldModule,
            i6.MatButtonModule,
            i12$1.MatTooltipModule,
            i1$3.MatDialogModule,
            i5$1.MatExpansionModule,
            i6$3.FontAwesomeModule], exports: [CreateUpdateTreeViewComponent] });
    CreateUpdateTreeViewModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateTreeViewModule, imports: [[
                i7.CommonModule,
                CreateUpdateEntityModule,
                DeviceMappingModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i7$1.MatCardModule,
                icon.MatIconModule,
                i3$1.MatFormFieldModule,
                i6.MatButtonModule,
                i12$1.MatTooltipModule,
                i1$3.MatDialogModule,
                i5$1.MatExpansionModule,
                i6$3.FontAwesomeModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateTreeViewModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CreateUpdateTreeViewComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            CreateUpdateEntityModule,
                            DeviceMappingModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i7$1.MatCardModule,
                            icon.MatIconModule,
                            i3$1.MatFormFieldModule,
                            i6.MatButtonModule,
                            i12$1.MatTooltipModule,
                            i1$3.MatDialogModule,
                            i5$1.MatExpansionModule,
                            i6$3.FontAwesomeModule
                        ],
                        exports: [CreateUpdateTreeViewComponent]
                    }]
            }] });

    var ViewModule = /** @class */ (function () {
        function ViewModule() {
        }
        return ViewModule;
    }());
    ViewModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ViewModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewModule, declarations: [ViewComponent], imports: [i7.CommonModule,
            ViewRoutingModule,
            CreateUpdateTreeViewModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i12$1.MatTooltipModule,
            i6$2.MatButtonToggleModule, i10__namespace$1.NgxEchartsModule] });
    ViewModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewModule, imports: [[
                i7.CommonModule,
                ViewRoutingModule,
                CreateUpdateTreeViewModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i12$1.MatTooltipModule,
                i6$2.MatButtonToggleModule,
                i10$1.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ViewComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            ViewRoutingModule,
                            CreateUpdateTreeViewModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i12$1.MatTooltipModule,
                            i6$2.MatButtonToggleModule,
                            i10$1.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ]
                    }]
            }] });

    /*
     * Public API Surface of tsc-lite
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AggregateDataController = AggregateDataController;
    exports.AggregateDataService = AggregateDataService;
    exports.AggregationComponent = AggregationComponent;
    exports.AggregationDurationComponent = AggregationDurationComponent;
    exports.AggregationDurationModule = AggregationDurationModule;
    exports.AggregationModule = AggregationModule;
    exports.Alert = Alert;
    exports.BalanceComponent = BalanceComponent;
    exports.BalanceModule = BalanceModule;
    exports.CgwaReportComponent = CgwaReportComponent;
    exports.CgwaReportModule = CgwaReportModule;
    exports.ConsumptionBreakupComponent = ConsumptionBreakupComponent;
    exports.ConsumptionBreakupDashboardComponent = ConsumptionBreakupDashboardComponent;
    exports.ConsumptionBreakupDashboardModule = ConsumptionBreakupDashboardModule;
    exports.ConsumptionBreakupModule = ConsumptionBreakupModule;
    exports.ConsumptionComponent = ConsumptionComponent;
    exports.ConsumptionModule = ConsumptionModule;
    exports.CreateUpdateEntityComponent = CreateUpdateEntityComponent;
    exports.CreateUpdateEntityModule = CreateUpdateEntityModule;
    exports.CreateUpdateLayoutComponent = CreateUpdateLayoutComponent;
    exports.CreateUpdateLayoutModule = CreateUpdateLayoutModule;
    exports.CreateUpdateTreeViewComponent = CreateUpdateTreeViewComponent;
    exports.CreateUpdateTreeViewModule = CreateUpdateTreeViewModule;
    exports.DataAvailabilityReportComponent = DataAvailabilityReportComponent;
    exports.DataAvailabilityReportModule = DataAvailabilityReportModule;
    exports.Device = Device;
    exports.DeviceComponent = DeviceComponent;
    exports.DeviceController = DeviceController;
    exports.DeviceInfo = DeviceInfo;
    exports.DeviceMappingComponent = DeviceMappingComponent;
    exports.DeviceMappingModule = DeviceMappingModule;
    exports.DeviceModule = DeviceModule;
    exports.DeviceService = DeviceService;
    exports.DevicesWithEntities = DevicesWithEntities;
    exports.DownloadReportRequest = DownloadReportRequest;
    exports.Entity = Entity;
    exports.EntityComponent = EntityComponent;
    exports.EntityController = EntityController;
    exports.EntityDashboardComponent = EntityDashboardComponent;
    exports.EntityDashboardModule = EntityDashboardModule;
    exports.EntityDeviceService = EntityDeviceService;
    exports.EntityLevelConsumption = EntityLevelConsumption;
    exports.EntityModule = EntityModule;
    exports.EntityService = EntityService;
    exports.EntityTree = EntityTree;
    exports.EntityType = EntityType;
    exports.FacilityComponent = FacilityComponent;
    exports.FacilityModule = FacilityModule;
    exports.HomeComponent = HomeComponent;
    exports.HomeModule = HomeModule;
    exports.LIST_CONSTANT = LIST_CONSTANT;
    exports.LayoutNotFoundComponent = LayoutNotFoundComponent;
    exports.LayoutNotFoundModule = LayoutNotFoundModule;
    exports.LayoutResolver = LayoutResolver;
    exports.MeterDataDashboardComponent = MeterDataDashboardComponent;
    exports.MeterDataDashboardModule = MeterDataDashboardModule;
    exports.MeterReportComponent = MeterReportComponent;
    exports.MeterReportModule = MeterReportModule;
    exports.OrgRecentData = OrgRecentData;
    exports.PageComponent = PageComponent;
    exports.PageModule = PageModule;
    exports.ParamMetricComponent = ParamMetricComponent;
    exports.ParamMetricModule = ParamMetricModule;
    exports.Parameter = Parameter;
    exports.ParameterComponent = ParameterComponent;
    exports.ParameterController = ParameterController;
    exports.ParameterModule = ParameterModule;
    exports.ParameterReportComponent = ParameterReportComponent;
    exports.ParameterReportModule = ParameterReportModule;
    exports.ParameterService = ParameterService;
    exports.RawDataReportComponent = RawDataReportComponent;
    exports.RawDataReportModule = RawDataReportModule;
    exports.RecentDataController = RecentDataController;
    exports.RecentDataRequestWithParam = RecentDataRequestWithParam;
    exports.RecentDataRequestWithoutParam = RecentDataRequestWithoutParam;
    exports.RecentDataService = RecentDataService;
    exports.ReportService = ReportService;
    exports.Shift = Shift;
    exports.ShiftComponent = ShiftComponent;
    exports.ShiftController = ShiftController;
    exports.ShiftModule = ShiftModule;
    exports.ShiftService = ShiftService;
    exports.SuccessComponent = SuccessComponent;
    exports.TrendComponent = TrendComponent;
    exports.TrendModule = TrendModule;
    exports.TrendService = TrendService;
    exports.TscLiteComponent = TscLiteComponent;
    exports.TscLiteModule = TscLiteModule;
    exports.TscLiteService = TscLiteService;
    exports.Unit = Unit;
    exports.UnitComponent = UnitComponent;
    exports.UnitController = UnitController;
    exports.UnitModule = UnitModule;
    exports.UnitService = UnitService;
    exports.UsageAcrossFacilityComponent = UsageAcrossFacilityComponent;
    exports.UsageAcrossFacilityModule = UsageAcrossFacilityModule;
    exports.ViewComponent = ViewComponent;
    exports.ViewModule = ViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-tsc-lite.umd.js.map
