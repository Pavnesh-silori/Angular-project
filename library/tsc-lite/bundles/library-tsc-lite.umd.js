(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/dialog'), require('@library/tsc-common'), require('@library/date'), require('moment'), require('@library/storage-service'), require('@angular/common/http'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/material/tooltip'), require('ngx-echarts'), require('@angular/material/input'), require('ngx-mat-select-search'), require('@angular/router'), require('@library/application-service'), require('@angular/material/card'), require('ng-circle-progress'), require('ngx-perfect-scrollbar'), require('@library/echart'), require('@angular/material/button-toggle'), require('@angular/material/expansion'), require('@angular/material/radio'), require('@library/toastr-service'), require('@angular/material/table'), require('rxjs'), require('rxjs/operators'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/angular-fontawesome'), require('@angular/material/sort'), require('@angular/material/paginator'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@library/tsc-lite', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/dialog', '@library/tsc-common', '@library/date', 'moment', '@library/storage-service', '@angular/common/http', '@angular/material/button', '@angular/material/form-field', '@angular/material/select', '@angular/material/core', '@angular/material/tooltip', 'ngx-echarts', '@angular/material/input', 'ngx-mat-select-search', '@angular/router', '@library/application-service', '@angular/material/card', 'ng-circle-progress', 'ngx-perfect-scrollbar', '@library/echart', '@angular/material/button-toggle', '@angular/material/expansion', '@angular/material/radio', '@library/toastr-service', '@angular/material/table', 'rxjs', 'rxjs/operators', '@fortawesome/free-solid-svg-icons', '@fortawesome/angular-fontawesome', '@angular/material/sort', '@angular/material/paginator', '@ng-bootstrap/ng-bootstrap', '@angular/material/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["tsc-lite"] = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.dialog, global.i3, global.i3$1, global.moment, global.i1$1, global.ng.common.http, global.ng.material.button, global.ng.material.formField, global.ng.material.select, global.ng.material.core, global.ng.material.tooltip, global.i14, global.ng.material.input, global.i6, global.ng.router, global.applicationService, global.ng.material.card, global.i8$1, global.i12, global.i6$1, global.ng.material.buttonToggle, global.ng.material.expansion, global.ng.material.radio, global.i2, global.ng.material.table, global.rxjs, global.rxjs.operators, global.freeSolidSvgIcons, global.i4$1, global.ng.material.sort, global.ng.material.paginator, global.i10$1, global.ng.material.icon));
})(this, (function (exports, i0, i7$1, i8, i1$2, i3, i3$1, moment, i1$1, i1, i7, i3$2, i4, i5, i11, i14, input, i6, i1$3, applicationService, i7$2, i8$1, i12, i6$1, i6$2, i10, i13, i2, i5$1, rxjs, operators, freeSolidSvgIcons, i4$1, i6$3, i7$3, i10$1, icon) { 'use strict';

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
    var i7__namespace$1 = /*#__PURE__*/_interopNamespace(i7$1);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3$1);
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i14__namespace = /*#__PURE__*/_interopNamespace(i14);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i7__namespace$2 = /*#__PURE__*/_interopNamespace(i7$2);
    var i8__namespace$1 = /*#__PURE__*/_interopNamespace(i8$1);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i6__namespace$2 = /*#__PURE__*/_interopNamespace(i6$2);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i6__namespace$3 = /*#__PURE__*/_interopNamespace(i6$3);
    var i7__namespace$3 = /*#__PURE__*/_interopNamespace(i7$3);
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
            this.deviceID = null;
            this.entityID = null;
            this.includeDescendants = false;
            this.timezone = null;
            this.entityType = null;
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
            // return this.http.get<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters`);
            return this.http.get(this.environment.MOCK_SERVER + "parameter");
        };
        ParameterController.prototype.getParameterByDeviceID = function (orgID, requestBody) {
            // return this.http.post<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/parameters`, requestBody);
            return this.http.get(this.environment.MOCK_SERVER + "parameter");
        };
        ParameterController.prototype.getDerivedParameterByLayoutID = function (orgID) {
            // return this.http.get<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/derived/parameters`);
            return this.http.get(this.environment.MOCK_SERVER + "parameter");
        };
        return ParameterController;
    }());
    ParameterController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ParameterController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
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
        ParameterService.prototype.getDerivedParameterByLayoutID = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var derivedParameterM, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.parameterController.getDerivedParameterByLayoutID(orgID).toPromise()];
                        case 1:
                            derivedParameterM = _a.sent();
                            if (derivedParameterM) {
                                return [2 /*return*/, derivedParameterM];
                            }
                            else {
                                return [2 /*return*/, [new Parameter()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _a.sent();
                            console.error('Error -', error_3);
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
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/data/aggregate", requestBody);
        };
        return AggregateDataController;
    }());
    AggregateDataController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AggregateDataController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregateDataController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
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
        function TrendComponent(dialogRef, data, storageService, dateService, parameterService, aggregateDataService, tscCommonService, dialog) {
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
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.dateTimeIntervalEnum = i3$1.DateTimeIntervalEnum;
            this.dialogEnum = i3.DialogEnum;
            this.renderFlag = 'LOADING';
            this.parameterM = [new Parameter()];
            this.dateRangeFC = new i8.FormControl('LAST_24_HRS', i8.Validators.required);
            this.trendData = data['trendData'];
        }
        TrendComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.dateRangeChange(this.dateRangeFC.value);
            this.noDataOption = {
                title: {
                    padding: [7, 0, 0, 20],
                },
                graphic: i3.NO_DATA_GRAPHIC,
                xAxis: { show: false },
                yAxis: { show: false },
            };
            this.getParameterByLayoutID();
        };
        TrendComponent.prototype.getParameterByLayoutID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _h;
                return __generator(this, function (_j) {
                    switch (_j.label) {
                        case 0:
                            _h = this;
                            return [4 /*yield*/, this.parameterService.getParameterByLayoutID(this.orgID)];
                        case 1:
                            _h.parameterM = (_j.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        TrendComponent.prototype.dateRangeChange = function (selectedDateRange) {
            this.renderFlag = 'LOADING';
            this.startTime = this.dateService.getStartDateTime(selectedDateRange);
            switch (selectedDateRange) {
                case i3$1.DateTimeIntervalEnum.LAST_24_HRS:
                    this.endTime = this.dateService.getEndDateTime(i3$1.DateTimeIntervalEnum.CURRENT_TIME);
                    this.interval = 'min_15';
                    break;
                case i3$1.DateTimeIntervalEnum.LAST_7_DAYS:
                    this.endTime = this.dateService.getEndDateTime(i3$1.DateTimeIntervalEnum.CURRENT_DAY);
                    this.interval = 'hour_1';
                    break;
                case i3$1.DateTimeIntervalEnum.LAST_30_DAYS:
                    this.endTime = this.dateService.getEndDateTime(i3$1.DateTimeIntervalEnum.CURRENT_DAY);
                    this.interval = 'day_1';
                    break;
                default:
                    this.endTime = null;
                    this.interval = null;
                    break;
            }
            this.chartDataCheck();
            this.getTrendData();
        };
        TrendComponent.prototype.chartDataCheck = function () {
            if (this.renderFlag == 'LOADING') {
                this.chartDataOption = i3.LOADING_GRAPHIC;
            }
            else if (this.renderFlag == 'DATA') {
                this.drawChart();
            }
            else {
                this.chartDataOption = this.noDataOption;
            }
        };
        TrendComponent.prototype.getCounterParameter = function (paramMetricValue) {
            var parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
            return parameter ? parameter.isCounter : false;
        };
        TrendComponent.prototype.getTrendData = function () {
            var _a, _b, _c, _d, _e, _f, _g;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, isCounterParameter, _h, error_1;
                return __generator(this, function (_j) {
                    switch (_j.label) {
                        case 0:
                            this.renderFlag = 'LOADING';
                            _j.label = 1;
                        case 1:
                            _j.trys.push([1, 3, , 4]);
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
                                    ourceLoadType: isCounterParameter ? "all" : null,
                                    source_or_load: isCounterParameter ? "source" : null,
                                }
                            ];
                            requestData.nullifyParams();
                            requestData.startTime = this.startTime;
                            requestData.endTime = this.endTime;
                            _h = this;
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 2:
                            _h.trendData = _j.sent();
                            if (((_f = (_e = this.trendData) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.data.length) > 0) {
                                this.paramLabel = (_g = this.trendData) === null || _g === void 0 ? void 0 : _g[0].paramLabel;
                                this.renderFlag = 'DATA';
                            }
                            else {
                                this.renderFlag = 'NO_DATA';
                            }
                            this.chartDataCheck();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _j.sent();
                            console.error("Error in getTrendData()", error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        TrendComponent.prototype.drawChart = function () {
            var _a, _b, _c, _d, _e, _f, _g;
            var value = (_a = this.trendData) === null || _a === void 0 ? void 0 : _a[0].data.map(function (item) { return item.value; });
            var unit = (_b = this.trendData) === null || _b === void 0 ? void 0 : _b[0].unit;
            var formattedDatesForXAxis;
            if (this.dateRangeFC.value == i3$1.DateTimeIntervalEnum.LAST_24_HRS) {
                formattedDatesForXAxis = (_c = this.trendData) === null || _c === void 0 ? void 0 : _c[0].data.map(function (item) {
                    var date = new Date(item.date);
                    return moment__namespace(date).format("HH:mm");
                });
            }
            else {
                formattedDatesForXAxis = (_d = this.trendData) === null || _d === void 0 ? void 0 : _d[0].data.map(function (item) {
                    var date = new Date(item.date);
                    return moment__namespace(date).format("YYYY-MM-DD HH:mm:ss");
                });
            }
            var formattedDatesForTooltip = (_e = this.trendData) === null || _e === void 0 ? void 0 : _e[0].data.map(function (item) {
                var date = new Date(item.date);
                return moment__namespace(date).format("YYYY-MM-DD HH:mm:ss");
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
                        var dataIndex = params[0].dataIndex;
                        var tooltip = '';
                        tooltip += formattedDatesForTooltip[dataIndex] + '<br />';
                        params.forEach(function (param) {
                            tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (param.value != null ? (param.value) + ' ' + unit : i3.COMMON_CONSTANT.HYPHEN) + '</span></b>';
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
        };
        return TrendComponent;
    }());
    TrendComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendComponent, deps: [{ token: i1__namespace$2.MatDialogRef }, { token: i1$2.MAT_DIALOG_DATA }, { token: i1__namespace$1.StorageService }, { token: i3__namespace.DateService }, { token: ParameterService }, { token: AggregateDataService }, { token: i3__namespace$1.TSCCommonService }, { token: i1__namespace$2.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Component });
    TrendComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TrendComponent, selector: "lib-trend", ngImport: i0__namespace, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ paramLabel }} Trend\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"dialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n<div class=\"matDialogContent\" mat-dialog-content>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <mat-form-field class=\"mat-field-width-100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                <mat-label>Select daterange</mat-label>\n                <mat-select (selectionChange)=\"dateRangeChange($event.value)\" [formControl]=\"dateRangeFC\">\n                    <mat-option disabled>Select daterange</mat-option>\n                    <mat-option *ngFor=\"let daterange of listConstant.TREND_DATE_RANGE\" [value]=\"daterange.value\">\n                        {{ daterange.label }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div echarts [options]=\"chartDataOption\"></div>\n    </div>\n</div>", components: [{ type: i7__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1__namespace$2.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace$2.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1__namespace$2.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14__namespace.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-trend',
                        templateUrl: './trend.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$2.MAT_DIALOG_DATA]
                        }] }, { type: i1__namespace$1.StorageService }, { type: i3__namespace.DateService }, { type: ParameterService }, { type: AggregateDataService }, { type: i3__namespace$1.TSCCommonService }, { type: i1__namespace$2.MatDialog }];
        } });

    var TrendModule = /** @class */ (function () {
        function TrendModule() {
        }
        return TrendModule;
    }());
    TrendModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TrendModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendModule, declarations: [TrendComponent], imports: [i7$1.CommonModule,
            i8.ReactiveFormsModule,
            i1$2.MatDialogModule,
            i7.MatButtonModule,
            input.MatInputModule,
            i3$2.MatFormFieldModule,
            i4.MatSelectModule,
            i11.MatTooltipModule, i14__namespace.NgxEchartsModule] });
    TrendModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendModule, imports: [[
                i7$1.CommonModule,
                i8.ReactiveFormsModule,
                i1$2.MatDialogModule,
                i7.MatButtonModule,
                input.MatInputModule,
                i3$2.MatFormFieldModule,
                i4.MatSelectModule,
                i11.MatTooltipModule,
                i14.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TrendComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.ReactiveFormsModule,
                            i1$2.MatDialogModule,
                            i7.MatButtonModule,
                            input.MatInputModule,
                            i3$2.MatFormFieldModule,
                            i4.MatSelectModule,
                            i11.MatTooltipModule,
                            i14.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ]
                    }]
            }] });

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
    AggregationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationComponent, selector: "lib-aggregation", outputs: { emitFilter: "emitFilter" }, ngImport: i0__namespace, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation</mat-label>\n    <mat-select [formControl]=\"aggregationFC\" multiple required>\n        <mat-option [value]=\"-1\" (click)=\"selectAllAggregation()\">\n            Select all\n        </mat-option>\n        <mat-option *ngFor=\"let aggregation of listConstant.AGGREGATION\" [value]=\"aggregation.value\"\n            (click)=\"selectedAggregation()\">\n            {{ aggregation.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggregationFC.touched && aggregationFC.hasError('required')\">\n        Select aggregation\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }] });
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
    AggregationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationModule, declarations: [AggregationComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i3$2.MatFormFieldModule,
            i6.NgxMatSelectSearchModule], exports: [AggregationComponent] });
    AggregationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i3$2.MatFormFieldModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AggregationComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i3$2.MatFormFieldModule,
                            i6.NgxMatSelectSearchModule
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
    AggregationDurationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: { emitFilter: "emitFilter" }, ngImport: i0__namespace, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation duration</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"aggDurationFC\" required>\n        <mat-option *ngFor=\"let duration of listConstant.AGGREGATION_DURATION\" [value]=\"duration.value\">\n            {{ duration.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggDurationFC.touched && aggDurationFC.hasError('required')\">\n        Select aggregation duration\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }] });
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
    AggregationDurationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationModule, declarations: [AggregationDurationComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i3$2.MatFormFieldModule,
            i6.NgxMatSelectSearchModule], exports: [AggregationDurationComponent] });
    AggregationDurationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i3$2.MatFormFieldModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AggregationDurationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AggregationDurationComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i3$2.MatFormFieldModule,
                            i6.NgxMatSelectSearchModule
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
    ParamMetricComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParamMetricComponent, selector: "lib-param-metric", inputs: { deviceInp: "deviceInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select parameter</mat-label>\n    <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"parameterFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"paramSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\" [hidden]=\"paramSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let parameter of paramSearchUtil.filteredEntities | async\" [value]=\"parameter.paramMetric\"\n                (click)=\"selectedParameters()\">\n                {{ parameter.label }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"parameterFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"!deviceInp\">\n        Please select device first\n    </mat-error>\n    <mat-error *ngIf=\"parameterFC.touched && parameterFC.hasError('required') && deviceInp\">\n        Select parameter\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace$1.AsyncPipe } });
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
    ParamMetricModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricModule, declarations: [ParamMetricComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i3$2.MatFormFieldModule,
            i6.NgxMatSelectSearchModule], exports: [ParamMetricComponent] });
    ParamMetricModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i3$2.MatFormFieldModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParamMetricModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParamMetricComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i3$2.MatFormFieldModule,
                            i6.NgxMatSelectSearchModule
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
    ParameterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterComponent, selector: "lib-parameter", outputs: { emitFilter: "emitFilter" }, ngImport: i0__namespace, template: "<div class=\"row\">\n    <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select parameter</mat-label>\n        <mat-select (selectionChange)=\"parameterChange($event.value)\" [formControl]=\"selectedParameterFC\" required>\n            <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"parameterSearchUtil.filterFC\"\n                        placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let parameter of parameterSearchUtil.filteredEntities | async\" [value]=\"parameter.id\">\n                    {{ parameter.label }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n        <mat-error *ngIf=\"selectedParameterFC.hasError('required')\">\n            Select parameter\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace$1.AsyncPipe } });
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
    ParameterModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterModule, declarations: [ParameterComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i3$2.MatFormFieldModule,
            i6.NgxMatSelectSearchModule], exports: [ParameterComponent] });
    ParameterModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i3$2.MatFormFieldModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParameterComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i3$2.MatFormFieldModule,
                            i6.NgxMatSelectSearchModule
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
            // return this.http.post<DeviceM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/devices`, requestBody);
            return this.http.get(this.environment.MOCK_SERVER + "devices");
        };
        //TODO: SOMYA AGRAWAL: To discuss below twp api's with Abhinav
        DeviceController.prototype.getDevicesWithEntities = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/entities/devices", requestBody);
        };
        DeviceController.prototype.getDevicesWithEntitiesByParameter = function (orgID, paramMetric) {
            var params = new i1.HttpParams();
            params = params.append('paramMetric', paramMetric);
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/entities-devices", { params: params });
        };
        return DeviceController;
    }());
    DeviceController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DeviceController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
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
        DeviceService.prototype.getDevicesWithEntities = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var devicesWithEntitiesM, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.deviceController.getDevicesWithEntities(orgID, requestBody).toPromise()];
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
    DeviceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DeviceComponent, selector: "lib-device", inputs: { dropdownTypeInp: "dropdownTypeInp", entityInp: "entityInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.SINGLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select device</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"deviceFC\" required>\n        <ng-container *ngIf=\"deviceM && deviceM.length > 0 && deviceM[0]['id']; else noDeviceFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"deviceSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let device of deviceSearchUtil.filteredEntities | async\" [value]=\"device.id\">\n                {{ device.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDeviceFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"!entityInp\">\n        Please select entity first\n    </mat-error>\n    <mat-error\n        *ngIf=\"deviceFC.touched && deviceFC.hasError('required') && entityInp\">\n        Select device\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.MULTIPLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select device</mat-label>\n    <ng-container *ngIf=\"deviceM && deviceM.length > 0 && deviceM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"multipleDeviceFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"deviceSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllDevices()\"  [hidden]=\"deviceSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let device of deviceSearchUtil.filteredEntities | async\" [value]=\"device.id\"\n                (click)=\"selectedDevices()\">\n                {{ device.name }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"multipleDeviceFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"!entityInp\">\n        Please select entity first\n    </mat-error>\n    <mat-error *ngIf=\"multipleDeviceFC.touched && multipleDeviceFC.hasError('required') && entityInp\">\n        Select device\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace$1.AsyncPipe } });
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
    DeviceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceModule, declarations: [DeviceComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i3$2.MatFormFieldModule,
            i6.NgxMatSelectSearchModule], exports: [DeviceComponent] });
    DeviceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i3$2.MatFormFieldModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DeviceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DeviceComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i3$2.MatFormFieldModule,
                            i6.NgxMatSelectSearchModule
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
        EntityController.prototype.getEntityTypeByLayoutID = function (orgID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/entities/type");
        };
        EntityController.prototype.getEntitiesWithDevices = function (orgID, layoutID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/" + layoutID + "/entity-device", requestBody);
        };
        EntityController.prototype.getEntityByParameterID = function (orgID, requestBody) {
            // return this.http.post<EntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities`, requestBody);
            return this.http.get(this.environment.MOCK_SERVER + "entities");
        };
        return EntityController;
    }());
    EntityController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EntityController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
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
        EntityService.prototype.getEntityTypeByLayoutID = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var entityTypeM, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityController.getEntityTypeByLayoutID(orgID).toPromise()];
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
        EntityService.prototype.getEntitiesWithDevices = function (orgID, layoutID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var entityDeviceM, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityController.getEntitiesWithDevices(orgID, layoutID, requestBody).toPromise()];
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
    EntityComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityComponent, selector: "lib-entity", inputs: { dropdownTypeInp: "dropdownTypeInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.SINGLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"entityFC\" required>\n        <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noDataFound\">\n            <mat-option>\n                <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                    noEntriesFoundLabel=\"No matching name found.\">\n                </ngx-mat-select-search>\n            </mat-option>\n            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\">\n                {{ entity.name }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataFound>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n    <mat-error *ngIf=\"entityFC.touched && entityFC.hasError('required')\">\n        Select entity\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"dropdownType == dropdownTypeEnum.MULTIPLE_DROPDOWN\" class=\"matFieldWidth100\"\n    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select entity</mat-label>\n    <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noDataOption\">\n        <mat-select [formControl]=\"multipleEntityFC\" multiple required>\n            <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllEntities()\" [hidden]=\"entitySearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\"\n                (click)=\"selectedEntities()\">\n                {{ entity.name }}\n            </mat-option>\n        </mat-select>\n    </ng-container>\n    <ng-template #noDataOption>\n        <mat-select [formControl]=\"multipleEntityFC\">\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </mat-select>\n    </ng-template>\n    <mat-error *ngIf=\"multipleEntityFC.touched && multipleEntityFC.hasError('required') && entityInp\">\n        Select entity\n    </mat-error>\n</mat-form-field>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace$1.AsyncPipe } });
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
    EntityModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityModule, declarations: [EntityComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i3$2.MatFormFieldModule,
            i6.NgxMatSelectSearchModule], exports: [EntityComponent] });
    EntityModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i3$2.MatFormFieldModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EntityComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i3$2.MatFormFieldModule,
                            i6.NgxMatSelectSearchModule
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
    UnitController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UnitController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
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
    UnitComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UnitComponent, selector: "lib-unit", inputs: { selectedParameterID: "selectedParameterID" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"row\">\n    <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select unit</mat-label>\n        <mat-select (selectionChange)=\"unitChange($event.value)\" [formControl]=\"selectedUnitFC\" required>\n            <ng-container *ngIf=\"unitM && unitM.length > 0 && unitM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"unitSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                        noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let unit of unitSearchUtil.filteredEntities | async\" [value]=\"unit.id\">\n                    {{ unit.name }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n        <mat-error *ngIf=\"!selectedParameterID\">\n            Please select parameter first\n        </mat-error>\n        <mat-error *ngIf=\"selectedUnitFC.hasError('required') && selectedParameterID\">\n            Select unit\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace$1.AsyncPipe } });
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
    UnitModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitModule, declarations: [UnitComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i3$2.MatFormFieldModule,
            i6.NgxMatSelectSearchModule], exports: [UnitComponent] });
    UnitModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i3$2.MatFormFieldModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UnitModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UnitComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i3$2.MatFormFieldModule,
                            i6.NgxMatSelectSearchModule
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
                this.innerStrokeColor = "#e7e8ea";
            }
            this.getTotalConsumption(i3$1.DateTimeIntervalEnum.CURRENT_DAY)
                .then(function (app) {
                _this.todayConsumption = app;
            });
            this.getTotalConsumption(i3$1.DateTimeIntervalEnum.CURRENT_MONTH)
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
            this.getTotalConsumption(i3$1.DateTimeIntervalEnum.CURRENT_YEAR)
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
                            if (selectedRange == i3$1.DateTimeIntervalEnum.CURRENT_DAY) {
                                requestData.startTime = this.dateService.getStartDateTime(i3$1.DateTimeIntervalEnum.CURRENT_DAY);
                                requestData.interval = 'day_1';
                            }
                            else if (selectedRange == i3$1.DateTimeIntervalEnum.CURRENT_MONTH) {
                                requestData.startTime = this.dateService.getStartDateTime(i3$1.DateTimeIntervalEnum.CURRENT_MONTH);
                                requestData.interval = 'month_1';
                            }
                            else if (selectedRange == i3$1.DateTimeIntervalEnum.CURRENT_YEAR) {
                                requestData.startTime = this.dateService.getStartDateTime(i3$1.DateTimeIntervalEnum.CURRENT_YEAR);
                                requestData.interval = 'year_1';
                            }
                            requestData.endTime = this.dateService.getEndDateTime(i3$1.DateTimeIntervalEnum.CURRENT_TIME);
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
                            requestData.startTime = this.dateService.getStartDateTime(i3$1.DateTimeIntervalEnum.CURRENT_MONTH);
                            requestData.endTime = this.dateService.getEndDateTime(i3$1.DateTimeIntervalEnum.CURRENT_TIME);
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
            requestData.startTime = this.dateService.getStartDateTime(i3$1.DateTimeIntervalEnum.CURRENT_MONTH);
            requestData.endTime = this.dateService.getEndDateTime(i3$1.DateTimeIntervalEnum.CURRENT_TIME);
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
    HomeComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i3__namespace.DateService }, { token: i3__namespace$1.TSCCommonService }, { token: AggregateDataService }, { token: EntityController }, { token: DeviceController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    HomeComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: HomeComponent, selector: "lib-home", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Home</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"cardTitle\">\n                                Total {{ label }} Consumption\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"col-sm-6\">\n                                <span class=\"centerAlign\">\n                                    <circle-progress [options]=\"totalConsumptionCircleData\" [renderOnClick]=\"false\"\n                                        class=\"copy\"></circle-progress>\n                                </span>\n                                <span class=\"centerAlign\">\n                                    This Month\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6 ms-4\">\n                                <div class=\"row\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'Today',\n                                        value: todayConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: todayConsumption?.[0]?.['unit'],\n                                        matCardClass: 'today'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'This Month',\n                                        value: currentMonthConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: currentMonthConsumption?.[0]?.['unit'],\n                                        matCardClass: 'month'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\">\n                                    <ng-container *ngTemplateOutlet=\"totalConsumption; context: {\n                                        label: 'This Year',\n                                        value: currentYearConsumption?.[0]?.['data']?.[0]?.['value'],\n                                        unit: currentYearConsumption?.[0]?.['unit'],\n                                        matCardClass: 'year'\n                                    }\"></ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"cardTitle\">\n                                {{ label }} Consumption Breakup\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"d-flex align-items-center\">\n                            <div class=\"col-sm-6\">\n                                <span class=\"centerAlign\">\n                                    <circle-progress [options]=\"consumptionBreakupCircleData\" [renderOnClick]=\"false\"\n                                        class=\"copy\"></circle-progress>\n                                </span>\n                                <span class=\"centerAlign\">\n                                    This Month\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\" *ngIf=\"entityConsumption?.[0]?.id\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[0].name,\n                                        value: entityConsumption[0].value,\n                                        unit: entityConsumption[0].unit,\n                                        entityObj: entityConsumption[0],\n                                        outerProgressBarClass: 'progress1BGColor',\n                                        innerProgressBarClass: 'progress1Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[1]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[1].name,\n                                        value: entityConsumption[1].value,\n                                        unit: entityConsumption[1].unit,\n                                        entityObj: entityConsumption[1],\n                                        outerProgressBarClass: 'progress2BGColor',\n                                        innerProgressBarClass: 'progress2Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[2]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[2].name,\n                                        value: entityConsumption[2].value,\n                                        unit: entityConsumption[2].unit,\n                                        entityObj: entityConsumption[2],\n                                        outerProgressBarClass: 'progress3BGColor',\n                                        innerProgressBarClass: 'progress3Color'\n                                    }\"></ng-container>\n                                </div>\n                                <div class=\"row mt-4\" *ngIf=\"entityConsumption?.[3]\">\n                                    <ng-container *ngTemplateOutlet=\"entityProgress; context: {\n                                        name: entityConsumption[3].name,\n                                        value: entityConsumption[3].value,\n                                        unit: entityConsumption[3].unit,\n                                        entityObj: entityConsumption[3],\n                                        outerProgressBarClass: 'progress4BGColor',\n                                        innerProgressBarClass: 'progress4Color'\n                                    }\"></ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-info\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Total devices',\n                        count: deviceInfoM.total\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-success\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Online devices',\n                        count: deviceInfoM.online\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-warning\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Delayed devices',\n                        count: deviceInfoM.delay\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-3\">\n                <mat-card class=\"card main-card cardOverwrite card-danger\">\n                    <ng-container *ngTemplateOutlet=\"deviceStatus; context: {\n                        label: 'Offline devices',\n                        count: deviceInfoM.offline\n                    }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #totalConsumption let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-matCardClass=\"matCardClass\"\n    let-outerProgressBarClass=\"outerProgressBarClass\" let-innerProgressBarClass=\"innerProgressBarClass\">\n    <div class=\"col-sm-12\">\n        <div class=\"d-flex align-items-center\">\n            <mat-card class=\"card main-card square d-flex justify-content-center me-2\" [class]=\"matCardClass\">\n                <span class=\"material-symbols-outlined\">\n                    {{ icon }}\n                </span>\n            </mat-card>\n            <div class=\"row\">\n                <span>{{ label }}</span><br />\n                <span class=\"text-primary fw-bold\">{{ value ? value : commonConstant.HYPHEN }} <span\n                        class=\"unitSize\">{{ value ? unit : '' }}</span></span>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #entityProgress let-name=\"name\" let-value=\"value\" let-unit=\"unit\" let-entityObj=\"entityObj\"\n    let-outerProgressBarClass=\"outerProgressBarClass\" let-innerProgressBarClass=\"innerProgressBarClass\">\n    <div class=\"col-sm-12\">\n        <span>\n            {{ name }}\n        </span>\n        <span class=\"float-end text-primary fw-bold\"> {{ value ? value : commonConstant.HYPHEN }}\n            <span class=\"unitSize\"> {{ value ? unit : '' }} </span>\n        </span>\n        <div class=\"progress progressBarRadius\" [class]=\"outerProgressBarClass\">\n            <div class=\"progress-bar progressBarRadius\" [class]=\"innerProgressBarClass\" role=\"progressbar\"\n                [style.width.%]=\"calculateProgress(entityObj)\"></div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #deviceStatus let-label=\"label\" let-count=\"count\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <span class=\"material-symbols-outlined\">\n                devices\n            </span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12 fs-1 fw-bold centerAlign\">\n            {{ count != undefined && count != null ? count : commonConstant.HYPHEN }}\n        </div>\n    </div>\n    <div class=\"row mt-1\">\n        <div class=\"col-sm-12 fs-5 centerAlign\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", styles: [".cardHeight{height:280px}.square{box-shadow:none!important;border-radius:6px!important;height:50px;width:50px}.unitSize{font-size:.66rem}.today{background-color:#f9dedc;color:#fa7d74}.month{background-color:#c2e7ff;color:#21a1f7}.year{background-color:#c4eed0;color:#04942d}.progressBarRadius{border-radius:16px!important}.progress1BGColor{background-color:#f9dedc}.progress2BGColor{background-color:#c2e7ff}.progress3BGColor{background-color:#fff0d1}.progress4BGColor{background-color:#c4eed0}.progress1Color{background-color:#fa7d74}.progress2Color{background-color:#21a1f7}.progress3Color{background-color:#ffbb29}.progress4Color{background-color:#04942d}.card-info{background-color:#cfe2ff;color:#084298}.card-success{background-color:#c3f1d9;color:#058844}.card-warning{background-color:#fff3cd;color:#664d03}.card-danger{background-color:#f8d7da;color:#842029}\n"], components: [{ type: i7__namespace$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i8__namespace$1.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }], directives: [{ type: i7__namespace$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-home',
                        templateUrl: './home.component.html',
                        styleUrls: ['./home.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i3__namespace.DateService }, { type: i3__namespace$1.TSCCommonService }, { type: AggregateDataService }, { type: EntityController }, { type: DeviceController }]; } });

    var routes$g = [
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
    HomeRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    HomeRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$g)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$g)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    var HomeModule = /** @class */ (function () {
        function HomeModule() {
        }
        return HomeModule;
    }());
    HomeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    HomeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeModule, declarations: [HomeComponent], imports: [i7$1.CommonModule,
            HomeRoutingModule,
            i7$2.MatCardModule,
            i11.MatTooltipModule,
            i12.PerfectScrollbarModule, i8__namespace$1.NgCircleProgressModule] });
    HomeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeModule, imports: [[
                i7$1.CommonModule,
                HomeRoutingModule,
                i7$2.MatCardModule,
                i11.MatTooltipModule,
                i12.PerfectScrollbarModule,
                i8$1.NgCircleProgressModule.forRoot(),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HomeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            HomeComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            HomeRoutingModule,
                            i7$2.MatCardModule,
                            i11.MatTooltipModule,
                            i12.PerfectScrollbarModule,
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
    ShiftController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ShiftController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
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
    ShiftComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ShiftComponent, selector: "lib-shift", outputs: { emitFilter: "emitFilter" }, ngImport: i0__namespace, template: "<div class=\"row\">\n    <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select shift</mat-label>\n        <ng-container *ngIf=\"shiftM && shiftM.length > 0 && shiftM[0]['id']; else noDataOption\">\n            <mat-select [formControl]=\"multiSelectedShiftFC\" multiple required>\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"shiftSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                        noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option [value]=\"-1\" (click)=\"selectAllShifts()\">\n                    Select all\n                </mat-option>\n                <mat-option *ngFor=\"let shift of shiftSearchUtil.filteredEntities | async\" [value]=\"shift.id\"\n                    (click)=\"selectedShift()\">\n                    {{ shift.name }}\n                </mat-option>\n            </mat-select>\n        </ng-container>\n        <ng-template #noDataOption>\n            <mat-select [formControl]=\"multiSelectedShiftFC\">\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </mat-select>\n        </ng-template>\n        <mat-error *ngIf=\"multiSelectedShiftFC.hasError('required')\">\n            Select shift\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace$1.AsyncPipe } });
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
    ShiftModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftModule, declarations: [ShiftComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i3$2.MatFormFieldModule,
            i6.NgxMatSelectSearchModule], exports: [ShiftComponent] });
    ShiftModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i3$2.MatFormFieldModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShiftModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ShiftComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i3$2.MatFormFieldModule,
                            i6.NgxMatSelectSearchModule
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
            this.frequencyEnum = i3$1.FrequencyEnum;
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
            this.dateType = i3$1.DateTypeEnum.EXCLUSIVE;
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
    BalanceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: AggregateDataService }, { token: i3__namespace$1.TSCCommonService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    BalanceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BalanceComponent, selector: "lib-balance", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\"> {{ label }} Balance</div>\n        </div>\n    </div>\n</div>" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-balance',
                        templateUrl: './balance.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: AggregateDataService }, { type: i3__namespace$1.TSCCommonService }]; } });

    var routes$f = [
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
    BalanceRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    BalanceRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$f)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$f)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var BalanceModule = /** @class */ (function () {
        function BalanceModule() {
        }
        return BalanceModule;
    }());
    BalanceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BalanceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceModule, declarations: [BalanceComponent], imports: [i7$1.CommonModule,
            BalanceRoutingModule,
            i3$1.DateFilterTwoModule] });
    BalanceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceModule, imports: [[
                i7$1.CommonModule,
                BalanceRoutingModule,
                i3$1.DateFilterTwoModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BalanceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            BalanceComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            BalanceRoutingModule,
                            i3$1.DateFilterTwoModule,
                        ]
                    }]
            }] });

    var ConsumptionComponent = /** @class */ (function () {
        function ConsumptionComponent(storageService, aggregateDataService) {
            this.storageService = storageService;
            this.aggregateDataService = aggregateDataService;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.frequencyConstant = i3.FREQUENCY_CONSTANT;
            this.frequencyEnum = i3$1.FrequencyEnum;
            this.frequency = [];
        }
        ConsumptionComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            this.timezone = this.storageService.getStorage('timezone');
            if (this.applicationKeyID == applicationService.ApplicationKeyID.WATER_KEY_ID) {
                this.paramMetric = "gwFlowTotalizer";
            }
            this.formFieldAppearance = i3.MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
            this.frequency = this.frequencyConstant.filter(function (frequency) { return frequency.keyID != 'CUSTOM'; });
            this.defaultFrequency = this.frequencyEnum.MONTHLY;
            this.dateType = i3$1.DateTypeEnum.EXCLUSIVE;
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
            this.getConsumptionData();
        };
        ConsumptionComponent.prototype.getConsumptionData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, consumptionRes, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            requestData = this.createDataRequest();
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 1:
                            consumptionRes = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error("Error in getConsumptionData()", error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        ConsumptionComponent.prototype.createDataRequest = function () {
            var requestData = new AggregateDataRequest();
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
        };
        return ConsumptionComponent;
    }());
    ConsumptionComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: AggregateDataService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConsumptionComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionComponent, selector: "app-consumption", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [frequencyInp]=\"frequency\"\n                    [defaultFrequencyInp]=\"defaultFrequency\" [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\"\n                    [timezoneInp]=\"timezone\" (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3__namespace.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-consumption',
                        templateUrl: './consumption.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: AggregateDataService }]; } });

    var routes$e = [
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
    ConsumptionRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    ConsumptionRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$e)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$e)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var ConsumptionModule = /** @class */ (function () {
        function ConsumptionModule() {
        }
        return ConsumptionModule;
    }());
    ConsumptionModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionModule, declarations: [ConsumptionComponent], imports: [i7$1.CommonModule,
            ConsumptionRoutingModule,
            i3$1.DateFilterTwoModule,
            i3.SkeletonModule,
            i7$2.MatCardModule] });
    ConsumptionModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionModule, imports: [[
                i7$1.CommonModule,
                ConsumptionRoutingModule,
                i3$1.DateFilterTwoModule,
                i3.SkeletonModule,
                i7$2.MatCardModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConsumptionComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            ConsumptionRoutingModule,
                            i3$1.DateFilterTwoModule,
                            i3.SkeletonModule,
                            i7$2.MatCardModule
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
            this.frequencyEnum = i3$1.FrequencyEnum;
            this.frequency = [];
            this.showLoader = true;
            this.viewStateFlagForSource = i6$1.ChartViewStateEnum.LOADING;
            this.viewStateFlagForLoad = i6$1.ChartViewStateEnum.LOADING;
            this.chartDataForSource = new i6$1.DoughnutChart();
            this.chartDataForLoad = new i6$1.DoughnutChart();
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
            this.formFieldAppearance = i3.MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
            this.frequency = this.frequencyConstant.filter(function (frequency) { return frequency.keyID != 'CUSTOM'; });
            this.defaultFrequency = this.frequencyEnum.MONTHLY;
            this.dateType = i3$1.DateTypeEnum.EXCLUSIVE;
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
                var name, chartData, requestData, result, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            name = category == 'source' ? 'Sourced' : category == 'load' ? 'Consumed' : '';
                            chartData = new i6$1.DoughnutChart();
                            chartData.title = {
                                name: name,
                                color: 'rgba(0, 0, 0, 0.87)',
                            };
                            if (category == 'source') {
                                this.chartDataForSource = chartData;
                                this.viewStateFlagForSource = i6$1.ChartViewStateEnum.LOADING;
                            }
                            else {
                                this.chartDataForLoad = chartData;
                                this.viewStateFlagForLoad = i6$1.ChartViewStateEnum.LOADING;
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            requestData = this.createDataRequest(category, false);
                            return [4 /*yield*/, this.aggregateDataService.getAggregateData(this.orgID, requestData)];
                        case 2:
                            result = _b.sent();
                            if (((_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a.data.length) > 0) {
                                chartData.data = {
                                    toolbox: {
                                        showDataView: true,
                                        showRestore: true,
                                        showDownloadImage: true,
                                    },
                                    metaData: result[0].data.map(function (item) { return ({
                                        name: item.sourceLoadType,
                                        value: item.data[0].value,
                                        unit: {
                                            code: item.unit,
                                        },
                                    }); }),
                                };
                                if (category == 'source') {
                                    this.chartDataForSource = chartData;
                                    this.viewStateFlagForSource = i6$1.ChartViewStateEnum.HAS_DATA;
                                }
                                else {
                                    this.chartDataForLoad = chartData;
                                    this.viewStateFlagForLoad = i6$1.ChartViewStateEnum.HAS_DATA;
                                }
                            }
                            else {
                                if (category == 'source') {
                                    this.viewStateFlagForSource = i6$1.ChartViewStateEnum.NO_DATA;
                                }
                                else {
                                    this.viewStateFlagForLoad = i6$1.ChartViewStateEnum.NO_DATA;
                                }
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _b.sent();
                            if (category == 'source') {
                                this.viewStateFlagForSource = i6$1.ChartViewStateEnum.NO_DATA;
                            }
                            else {
                                this.viewStateFlagForLoad = i6$1.ChartViewStateEnum.NO_DATA;
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
    ConsumptionBreakupDashboardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: AggregateDataService }, { token: i3__namespace$1.TSCCommonService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConsumptionBreakupDashboardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupDashboardComponent, selector: "lib-consumption-breakup", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\" (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgSourceRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgSourceRes?.[0]?.['unit'],\n                        label: 'Sourced',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgConsumedRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgConsumedRes?.[0]?.['unit'],\n                        label: 'Consumed',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForSource\" [dataInp]=\"chartDataForSource\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForLoad\" [dataInp]=\"chartDataForLoad\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #sourceConsumTemplate let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-loader=\"loader\">\n    <ng-container *ngIf=\"loader; else dataTemplate\">\n        <lib-skeleton-loader [count]=\"1\" [appearance]=\"''\"\n            [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n    </ng-container>\n\n    <ng-template #dataTemplate>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <span class=\"fs-2 fw-bold text-primary\">{{ value ? tscCommonService.formatLargeNumber(value, 'false', 1)\n                    : commonConstant.HYPHEN\n                    }}</span>\n                <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 fs-4\">\n                {{ label }}\n            </div>\n        </div>\n    </ng-template>\n</ng-template>", components: [{ type: i3__namespace.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i7__namespace$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i6__namespace$1.DoughnutComponent, selector: "lib-doughnut", inputs: ["viewStateInp", "dataInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7__namespace$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-consumption-breakup',
                        templateUrl: './consumption-breakup.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: AggregateDataService }, { type: i3__namespace$1.TSCCommonService }]; } });

    var routes$d = [
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
    ConsumptionBreakupDashboardRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    ConsumptionBreakupDashboardRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$d)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$d)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var ConsumptionBreakupDashboardModule = /** @class */ (function () {
        function ConsumptionBreakupDashboardModule() {
        }
        return ConsumptionBreakupDashboardModule;
    }());
    ConsumptionBreakupDashboardModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionBreakupDashboardModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardModule, declarations: [ConsumptionBreakupDashboardComponent], imports: [i7$1.CommonModule,
            ConsumptionBreakupDashboardRoutingModule,
            i3$1.DateFilterTwoModule,
            i3.SkeletonModule,
            i6$1.DoughnutModule,
            i7$2.MatCardModule] });
    ConsumptionBreakupDashboardModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardModule, imports: [[
                i7$1.CommonModule,
                ConsumptionBreakupDashboardRoutingModule,
                i3$1.DateFilterTwoModule,
                i3.SkeletonModule,
                i6$1.DoughnutModule,
                i7$2.MatCardModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupDashboardModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConsumptionBreakupDashboardComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            ConsumptionBreakupDashboardRoutingModule,
                            i3$1.DateFilterTwoModule,
                            i3.SkeletonModule,
                            i6$1.DoughnutModule,
                            i7$2.MatCardModule
                        ]
                    }]
            }] });

    var RecentDataController = /** @class */ (function () {
        function RecentDataController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        RecentDataController.prototype.getRecentDataWithParam = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/data/recent", requestBody);
        };
        RecentDataController.prototype.getEntityLevelRecentData = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/entities/data/recent", requestBody);
        };
        RecentDataController.prototype.getOrgRecentData = function (orgID, requestBody) {
            // return this.http.post<OrgRecentDataM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/recent`, requestBody);
            return this.http.get(this.environment.MOCK_SERVER + "facility-dashboard");
        };
        return RecentDataController;
    }());
    RecentDataController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RecentDataController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RecentDataController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
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
        RecentDataService.prototype.getEntityLevelRecentData = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var entityLevelRes, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.recentDataController.getEntityLevelRecentData(orgID, requestBody).toPromise()];
                        case 1:
                            entityLevelRes = _a.sent();
                            if (entityLevelRes) {
                                return [2 /*return*/, entityLevelRes];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Error -', error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        RecentDataService.prototype.getOrgRecentData = function (orgID, requestBody) {
            return __awaiter(this, void 0, void 0, function () {
                var orgRes, error_3;
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
                            error_3 = _a.sent();
                            console.error('Error -', error_3);
                            throw error_3;
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
    TrendService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendService, deps: [{ token: i1__namespace$2.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TrendService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TrendService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.MatDialog }]; } });

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
                            return [4 /*yield*/, this.entityService.getEntityTypeByLayoutID(this.orgID)];
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
                            return [4 /*yield*/, this.entityService.getEntitiesWithDevices(this.orgID, this.layoutID, requestBody)];
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
            this.realTimeDeviceDataLoader = false;
            // this.getRecentEntitiesData(selectedValue);
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
        EntityDashboardComponent.prototype.getRecentEntitiesData = function (selectedValue) {
            return __awaiter(this, void 0, void 0, function () {
                var requestData, _a, error_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, 3, 4]);
                            requestData = new RecentDataRequestWithoutParam();
                            requestData.entityID = [selectedValue];
                            requestData.timezone = this.timezone;
                            requestData.backscan = 1;
                            _a = this;
                            return [4 /*yield*/, this.recentDataService.getEntityLevelRecentData(this.orgID, requestData)];
                        case 1:
                            _a.recentEntitiesData = _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            error_3 = _b.sent();
                            console.error("Error in getRecentEntitiesData()", error_3);
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
    EntityDashboardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: EntityService }, { token: RecentDataService }, { token: i3__namespace.DateService }, { token: TrendService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EntityDashboardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EntityDashboardComponent, selector: "lib-entity", viewQueries: [{ propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "scrollContainer", first: true, predicate: ["scrollContainer"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Entity Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <ng-container *ngIf=\"entityTypeLoader; else showEntityType\">\n                <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 1 }\"></ng-container>\n            </ng-container>\n\n            <ng-template #showEntityType>\n                <ng-container *ngIf=\"entityTypeM && entityTypeM.length <= 6; else toggleAndDropdownView\">\n                    <div class=\"col-sm-6\">\n                        <div class=\" labelColor\">Select entity type *</div>\n                        <ng-container *ngIf=\"entityTypeM && entityTypeM.length > 0; else noEntityType\">\n                            <mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"entityTypeFC\"\n                                (change)=\"entityTypeChange()\">\n                                <mat-button-toggle *ngFor=\"let entityType of entityTypeM\" value=\"{{ entityType.type }}\">\n                                    {{ entityType.type }}\n                                </mat-button-toggle>\n                            </mat-button-toggle-group>\n                        </ng-container>\n                        <ng-template #noEntityType>\n                            <mat-button-toggle-group class=\"matBtnFilter\" disabled>\n                                <mat-button-toggle>\n                                    <span class=\"textMatError\">\n                                        {{ commonConstant.NO_DATA_FOUND }}\n                                    </span>\n                                </mat-button-toggle>\n                            </mat-button-toggle-group>\n                        </ng-template>\n                    </div>\n                </ng-container>\n\n                <ng-template #toggleAndDropdownView>\n                    <div class=\"col-sm-6\">\n                        <div class=\" labelColor\">Select entity type *</div>\n                        <mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"entityTypeFC\"\n                            (change)=\"entityTypeChange()\">\n                            <mat-button-toggle *ngFor=\"let entityType of entityTypeM.slice(0, 6)\" value=\"{{ entityType.type }}\">\n                                {{ entityType.type }}\n                            </mat-button-toggle>\n                        </mat-button-toggle-group>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <mat-form-field class=\"mat-field-width-100\"\n                            [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                            <mat-label>Select entity type</mat-label>\n                            <mat-select [formControl]=\"entityTypeFC\" (selectionChange)=\"dropdownSelectionChange($event.value)\">\n                                <mat-option *ngFor=\"let entityType of entityTypeDropdownItem\" [value]=\"entityType.type\">\n                                    {{ entityType.type }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </ng-template>\n            </ng-template>\n        </div>\n\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-6\">\n                <mat-accordion>\n                    <mat-expansion-panel class=\"matAccordion\" [expanded]=\"isAccordionOpen\" (opened)=\"openAccordion()\"\n                        (closed)=\"closeAccordion()\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <div class=\"card-title sectionTitle\">\n                                    Select entity *\n                                </div>\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <lib-search-bar-two class=\"float-end me-3\" #searchBar searchBy=\"name\"\n                                    (emitSearch)=\"searchFn($event)\">\n                                </lib-search-bar-two>\n                            </div>\n                        </div>\n                        \n                        <perfect-scrollbar class=\"scrollHeight\" [config]=\"{useBothWheelAxes: true, suppressScrollX: false, suppressScrollY: false}\" #scrollContainer>\n                            <ng-container *ngIf=\"entityDeviceLoader; else entityDeviceView\">\n                                <div class=\"mt-2\">\n                                    <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n                                </div>\n                            </ng-container>\n                            <ng-template #entityDeviceView>\n                                <mat-radio-group [formControl]=\"entityFC\" (change)=\"onEntityDeviceSelection()\">\n                                    <div *ngFor=\"let entity of filteredEntityDeviceM\">\n                                        <ng-container *ngTemplateOutlet=\"entityTemplate; context:{ $implicit: entity }\"></ng-container>\n                                    </div>\n\n                                    <ng-template #entityTemplate let-entity>\n                                        <div class=\"ms-3 mt-2\">\n                                            <ng-container *ngIf=\"isDeviceAttached(entity); else entityView\">\n                                                <mat-radio-button class=\"radioBtnLabel me-2\" [value]=\"entity.id\">\n                                                    <span class=\"badge rounded-pill\" [ngClass]=\"{'facility': entity.type == 'FACILITY', 'entity': entity.type == 'ENTITY', 'device': entity.type == 'DEVICE'}\"\n                                                        [matTooltip]=\"getTooltipLabel(entity)\" matTooltipPosition=\"above\">\n                                                        <div class=\"d-flex align-items-center\">\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'FACILITY'\">factory</span>\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'ENTITY'\">domain</span>\n                                                            <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'DEVICE'\">devices</span>\n                                                            {{ entity.name }}\n                                                        </div>\n                                                    </span>\n                                                </mat-radio-button>\n                                            </ng-container>\n\n                                            <ng-template #entityView>\n                                                <span class=\"badge rounded-pill\" [ngClass]=\"{'facility': entity.type == 'FACILITY', 'entity': entity.type == 'ENTITY', 'device': entity.type == 'DEVICE'}\"\n                                                    [matTooltip]=\"getTooltipLabel(entity)\" matTooltipPosition=\"above\">\n                                                    <div class=\"d-flex align-items-center\">\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'FACILITY'\">factory</span>\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'ENTITY'\">domain</span>\n                                                        <span class=\"material-symbols-outlined me-2\" *ngIf=\"entity.type == 'DEVICE'\">devices</span>\n                                                        {{ entity.name }}\n                                                    </div>\n                                                </span>\n                                            </ng-template>\n                                        </div>\n\n                                        <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-5 mt-2\">\n                                            <ng-container *ngFor=\"let child of entity.children\">\n                                                <ng-container\n                                                    *ngTemplateOutlet=\"entityTemplate; context:{ $implicit: child }\"></ng-container>\n                                            </ng-container>\n                                        </div>\n                                    </ng-template>\n                                </mat-radio-group>\n                                \n                            </ng-template>\n                        </perfect-scrollbar>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor cardHeight2\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"material-symbols-outlined me-3\">\n                                    devices\n                                </span>\n                                <span class=\"card-title sectionTitle mt-1\">\n                                    Real time data\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <perfect-scrollbar class=\"scrollHeight\">\n                        <ng-container *ngIf=\"realTimeDeviceDataLoader; else realTimeDeviceDataView\">\n                            <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n                        </ng-container>\n\n                        <ng-template #realTimeDeviceDataView>\n                            <ng-container *ngFor=\"let realTimeData of recentEntitiesData;\">\n                                <ng-container *ngTemplateOutlet=\"parameterSummary; context: {\n                                    device: realTimeData?.deviceData,\n                                    entityID: realTimeData?.entityID\n                                }\"></ng-container>\n                            </ng-container>\n                        </ng-template>\n                    </perfect-scrollbar>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #parameterSummary let-device=\"device\" let-entityID=\"entityID\">\n    <ng-container *ngFor=\"let deviceData of device;\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"d-flex align-items-center fw-bold\">\n                    <span class=\"material-symbols-outlined me-1\"\n                        [ngClass]=\"{'text-success': deviceData.status == 'LIVE', 'text-secondary': deviceData.status == 'OFFLINE'}\">\n                        devices\n                    </span>\n                    {{ deviceData.name ? deviceData.name : commonConstant.HYPHEN }}\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-2\" *ngFor=\"let parameterData of deviceData.paramData;\">\n            <div class=\"col-sm-4 text-start text-secondary\">\n                {{ parameterData.label ? parameterData.label : commonConstant.HYPHEN }}\n            </div>\n            <div class=\"col-sm-4 text-center\">\n                <a class=\"text-primary cursorPointer fw-bold\" matTooltip=\"Trend\" matTooltipPosition=\"above\"\n                    (click)=\"showTrend(parameterData.name, entityID, deviceData.id)\">\n                    <span>{{ parameterData.data.value ? (parameterData.data.value | number: '1.2-2') : commonConstant.HYPHEN\n                        }}</span>\n                    <span> {{ parameterData.data.value ? parameterData.unit : '' }} </span>\n                </a>\n            </div>\n            <div class=\"col-sm-4 text-start text-secondary\">\n                {{ dateService.getRelativeTimeAgoLabel(parameterData.data.date) }}\n            </div>\n        </div>\n        <hr>\n    </ng-container>\n</ng-template>\n\n<ng-template #showLoader let-count=\"count\">\n    <lib-skeleton-loader [count]=\"count\" [appearance]=\"''\"\n        [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n</ng-template>", styles: [".labelColor{color:#0009}.matAccordion{box-shadow:none!important;background:whitesmoke;border-radius:16px!important}.badge{font-weight:normal;font-size:1em;padding:1.4px 15px}.facility{background-color:#e3e2e2;color:#000}.entity{background-color:#e7effc;color:#084298}.device{background-color:#e0f7eb;color:#1c8a51}.cardHeight1{height:490px}.cardHeight2{height:520px}.scrollHeight{height:410px}\n"], components: [{ type: i6__namespace$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i10__namespace.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i10__namespace.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: i3__namespace$1.SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i12__namespace.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: i13__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i7__namespace$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i6__namespace$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i10__namespace.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i10__namespace.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i13__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i7__namespace$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i11__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "number": i7__namespace$1.DecimalPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-entity',
                        templateUrl: './entity.component.html',
                        styleUrls: ['./entity.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: EntityService }, { type: RecentDataService }, { type: i3__namespace.DateService }, { type: TrendService }]; }, propDecorators: { searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar']
                }], scrollContainer: [{
                    type: i0.ViewChild,
                    args: ['scrollContainer']
                }] } });

    var routes$c = [
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
    EntityDashboardRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    EntityDashboardRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$c)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$c)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var EntityDashboardModule = /** @class */ (function () {
        function EntityDashboardModule() {
        }
        return EntityDashboardModule;
    }());
    EntityDashboardModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    EntityDashboardModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardModule, declarations: [EntityDashboardComponent], imports: [i7$1.CommonModule,
            EntityDashboardRoutingModule,
            TrendModule,
            i3.SkeletonModule,
            i3.SearchBarTwoModule,
            i8.ReactiveFormsModule,
            i7$2.MatCardModule,
            i3$2.MatFormFieldModule,
            input.MatInputModule,
            i4.MatSelectModule,
            i6$2.MatButtonToggleModule,
            i10.MatExpansionModule,
            i5.MatOptionModule,
            i13.MatRadioModule,
            i11.MatTooltipModule,
            i12.PerfectScrollbarModule] });
    EntityDashboardModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardModule, providers: [TrendService], imports: [[
                i7$1.CommonModule,
                EntityDashboardRoutingModule,
                TrendModule,
                i3.SkeletonModule,
                i3.SearchBarTwoModule,
                i8.ReactiveFormsModule,
                i7$2.MatCardModule,
                i3$2.MatFormFieldModule,
                input.MatInputModule,
                i4.MatSelectModule,
                i6$2.MatButtonToggleModule,
                i10.MatExpansionModule,
                i5.MatOptionModule,
                i13.MatRadioModule,
                i11.MatTooltipModule,
                i12.PerfectScrollbarModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDashboardModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EntityDashboardComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            EntityDashboardRoutingModule,
                            TrendModule,
                            i3.SkeletonModule,
                            i3.SearchBarTwoModule,
                            i8.ReactiveFormsModule,
                            i7$2.MatCardModule,
                            i3$2.MatFormFieldModule,
                            input.MatInputModule,
                            i4.MatSelectModule,
                            i6$2.MatButtonToggleModule,
                            i10.MatExpansionModule,
                            i5.MatOptionModule,
                            i13.MatRadioModule,
                            i11.MatTooltipModule,
                            i12.PerfectScrollbarModule
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
                            requestBody = {
                                'timezone': this.timezone
                            };
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
            this.router.navigate(['dashboard/consumption'], { state: { entityID: id, entityName: name } });
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
    FacilityComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityComponent, deps: [{ token: i1__namespace$3.Router }, { token: i1__namespace$1.StorageService }, { token: i3__namespace.DateService }, { token: TrendService }, { token: RecentDataService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    FacilityComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FacilityComponent, selector: "app-facility", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Facility Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n\n        <div class=\"row\">\n            <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"''\"\n                [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"orgRecentDataM.length > 1\">\n            <div class=\"col-sm-12 mb-3\" *ngFor=\"let recentRes of orgRecentDataM\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-sm-6\">\n                            <span class=\"entity text-primary\">\n                                <div class=\"d-flex align-items-center\">\n                                    <span class=\"material-symbols-outlined me-2\">domain</span>\n                                    {{ recentRes.entityName }}\n                                </div>\n                            </span>\n                        </div>\n                        <div class=\"col-sm-6 text-end\">\n                            <a class=\"text-primary cursorPointer\" matTooltip=\"Entity consumption\"\n                                matTooltipPosition=\"below\"\n                                (click)=\"showEntityConsumption(recentRes.entityID, recentRes.entityName)\">\n                                <span class=\"material-symbols-outlined fs-4 fw-bold\">monitoring</span>\n                            </a>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 ms-3\" *ngFor=\"let deviceRes of recentRes.deviceData\">\n                            <div class=\"d-flex align-items-center\">\n                                <span class=\"material-symbols-outlined text-success me-2\">devices</span>\n                                {{ deviceRes.name }}\n                            </div>\n\n                            <div class=\"row mt-2\">\n                                <div class=\"col-sm-4 mb-3\" *ngFor=\"let paramRes of deviceRes.paramData\">\n                                    <mat-card class=\"cardOverwrite\">\n                                        <ng-container *ngTemplateOutlet=\"parameterData; context: {\n                                                duration: dateService.getRelativeTimeAgoLabel(paramRes?.data?.date),\n                                                value: paramRes?.data?.value,\n                                                unit: paramRes?.unit,\n                                                label: paramRes?.label,\n                                                entityID: recentRes?.entityID,\n                                                deviceID: deviceRes?.id,\n                                                paramName: paramRes?.name\n                                            }\"></ng-container>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #parameterData let-duration=\"duration\" let-label=\"label\" let-value=\"value\" let-unit=\"unit\"\n    let-entityID=\"entityID\" let-deviceID=\"deviceID\" let-paramName=\"paramName\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 textDurationWithAgoTime\">\n            {{ duration }}\n        </div>\n        <div class=\"col-sm-6 text-end\">\n            <a class=\"text-primary cursorPointer\" matTooltip=\"Trend\" matTooltipPosition=\"below\"\n                (click)=\"showTrend(paramName, deviceID, entityID)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">trending_up</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 text-center\">\n            <span class=\"fs-1 fw-bold text-primary\">{{ value ? (value | number: '1.2-2') : commonConstant.HYPHEN\n                }}</span>\n            <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n        </div>\n    </div>\n    <div class=\"row mt-4 mb-4\">\n        <div class=\"col-sm-12 fs-5 text-center\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", styles: [".entity{text-transform:none;font-size:15px;font-weight:600}\n"], components: [{ type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i7__namespace$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i11__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i7__namespace$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "number": i7__namespace$1.DecimalPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-facility',
                        templateUrl: './facility.component.html',
                        styleUrls: ['./facility.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$3.Router }, { type: i1__namespace$1.StorageService }, { type: i3__namespace.DateService }, { type: TrendService }, { type: RecentDataService }, { type: AlertService }]; } });

    var routes$b = [
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
    FacilityRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    FacilityRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$b)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$b)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var FacilityModule = /** @class */ (function () {
        function FacilityModule() {
        }
        return FacilityModule;
    }());
    FacilityModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FacilityModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityModule, declarations: [FacilityComponent], imports: [i7$1.CommonModule,
            FacilityRoutingModule,
            TrendModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i7$2.MatCardModule,
            i11.MatTooltipModule] });
    FacilityModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityModule, providers: [TrendService], imports: [[
                i7$1.CommonModule,
                FacilityRoutingModule,
                TrendModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i7$2.MatCardModule,
                i11.MatTooltipModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FacilityModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FacilityComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            FacilityRoutingModule,
                            TrendModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i7$2.MatCardModule,
                            i11.MatTooltipModule
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
        EntityDeviceController.prototype.getDevicesWithEntitiesByParameter = function (orgID, paramMetric) {
            var params = new i1.HttpParams();
            params = params.append('paramMetric', paramMetric);
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/entities-devices", { params: params });
        };
        return EntityDeviceController;
    }());
    EntityDeviceController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EntityDeviceController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EntityDeviceController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
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
        EntityDeviceService.prototype.getDevicesWithEntitiesByParameter = function (orgID, paramMetric) {
            return __awaiter(this, void 0, void 0, function () {
                var devicesWithEntitiesM, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.entityDeviceController.getDevicesWithEntitiesByParameter(orgID, paramMetric).toPromise()];
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
                            return [4 /*yield*/, this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric)];
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
    MeterDataDashboardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: RecentDataService }, { token: EntityDeviceService }, { token: ParameterService }, { token: AlertService }, { token: i3__namespace.DateService }, { token: TrendService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MeterDataDashboardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MeterDataDashboardComponent, selector: "lib-meter-data", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Meter Data Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select meter</mat-label>\n                    <mat-select (selectionChange)=\"meterChange($event.value)\" [formControl]=\"meterFC\">\n                        <ng-container *ngIf=\"entityDeviceM && entityDeviceM.length > 1; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"meterSearchUtil.filterFC\"\n                                    placeholderLabel=\"Search by entity name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-optgroup *ngFor=\"let entity of meterSearchUtil.filteredEntities | async\"\n                                [label]=\"entity.name\" [disabled]=\"entity.disabled\">\n                                <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\">\n                                    {{ device.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"meterFC.touched && meterFC.hasError('required')\">\n                        Select meter\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"alertObj.showAlert\" [labelInp]=\"alertObj.alertLabel\"\n                    [contentInp]=\"alertObj.alertContent\" [messageAlertTypeInp]=\"alertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"alertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <ng-container *ngIf=\"showLoader; else dataTemplate\">\n                <lib-skeleton-loader [count]=\"3\" [appearance]=\"''\"\n                    [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n            </ng-container>\n            <ng-template #dataTemplate>\n                <div class=\"col-sm-4 mb-3\" *ngFor=\"let meterData of meterDataRes\">\n                    <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                        <ng-container *ngTemplateOutlet=\"parameterData; context: {\n                            duration: dateService.getRelativeTimeAgoLabel(meterData?.data?.date),\n                            value: meterData?.data?.value,\n                            unit: meterData?.unit,\n                            label: meterData?.paramLabel,\n                            entityID: meterData?.entityID,\n                            paramName: meterData?.paramName\n                        }\"></ng-container>\n                    </mat-card>\n                </div>\n            </ng-template>\n        </div>\n\n    </div>\n</div>\n\n<ng-template #parameterData let-duration=\"duration\" let-label=\"label\" let-value=\"value\" let-unit=\"unit\"\n    let-entityID=\"entityID\" let-paramName=\"paramName\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 textDurationWithAgoTime\">\n            {{ duration }}\n        </div>\n        <div class=\"col-sm-6 text-end\">\n            <a class=\"text-primary cursorPointer\" matTooltip=\"Trend\" matTooltipPosition=\"below\"\n                (click)=\"showTrend(paramName, entityID)\">\n                <span class=\"material-symbols-outlined fs-5 fw-bold\">trending_up</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 text-center\">\n            <span class=\"fs-1 fw-bold text-primary\">{{ value ? (value | number: '1.2-2') : commonConstant.HYPHEN\n                }}</span>\n            <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n        </div>\n    </div>\n    <div class=\"row mt-4 mb-4\">\n        <div class=\"col-sm-12 fs-5 text-center\">\n            {{ label }}\n        </div>\n    </div>\n</ng-template>", components: [{ type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5__namespace.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i7__namespace$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }, { type: i7__namespace$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i11__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "async": i7__namespace$1.AsyncPipe, "number": i7__namespace$1.DecimalPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-meter-data',
                        templateUrl: './meter-data.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: RecentDataService }, { type: EntityDeviceService }, { type: ParameterService }, { type: AlertService }, { type: i3__namespace.DateService }, { type: TrendService }]; } });

    var routes$a = [
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
    MeterDataRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    MeterDataRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$a)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$a)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var MeterDataDashboardModule = /** @class */ (function () {
        function MeterDataDashboardModule() {
        }
        return MeterDataDashboardModule;
    }());
    MeterDataDashboardModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MeterDataDashboardModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardModule, declarations: [MeterDataDashboardComponent], imports: [i7$1.CommonModule,
            MeterDataRoutingModule,
            TrendModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i3.MessageAlertModule,
            i3.SkeletonModule,
            i6.NgxMatSelectSearchModule,
            i7$2.MatCardModule,
            i11.MatTooltipModule,
            input.MatInputModule,
            i3$2.MatFormFieldModule,
            i4.MatSelectModule] });
    MeterDataDashboardModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardModule, providers: [TrendService], imports: [[
                i7$1.CommonModule,
                MeterDataRoutingModule,
                TrendModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i3.MessageAlertModule,
                i3.SkeletonModule,
                i6.NgxMatSelectSearchModule,
                i7$2.MatCardModule,
                i11.MatTooltipModule,
                input.MatInputModule,
                i3$2.MatFormFieldModule,
                i4.MatSelectModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterDataDashboardModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MeterDataDashboardComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            MeterDataRoutingModule,
                            TrendModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i3.MessageAlertModule,
                            i3.SkeletonModule,
                            i6.NgxMatSelectSearchModule,
                            i7$2.MatCardModule,
                            i11.MatTooltipModule,
                            input.MatInputModule,
                            i3$2.MatFormFieldModule,
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

    var routes$9 = [
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
    CgwaReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    CgwaReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$9)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$9)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    var CgwaReportModule = /** @class */ (function () {
        function CgwaReportModule() {
        }
        return CgwaReportModule;
    }());
    CgwaReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CgwaReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportModule, declarations: [CgwaReportComponent], imports: [i7$1.CommonModule,
            CgwaReportRoutingModule] });
    CgwaReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportModule, imports: [[
                i7$1.CommonModule,
                CgwaReportRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CgwaReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CgwaReportComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            CgwaReportRoutingModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var ReportService = /** @class */ (function () {
        function ReportService(dateService) {
            this.dateService = dateService;
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
        return ReportService;
    }());
    ReportService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ReportService, deps: [{ token: i3__namespace.DateService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ReportService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ReportService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ReportService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i3__namespace.DateService }]; } });

    var SourceLoadComponent = /** @class */ (function () {
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
    SourceLoadComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SourceLoadComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent, selector: "lib-source-load", inputs: { defaultCategoryInp: "defaultCategoryInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"categoryFC\" (change)=\"categoryChange(categoryFC.value)\">\n    <mat-button-toggle *ngFor=\"let category of listConstant.SOURCE_LOAD\" value=\"{{ category.value }}\">\n        {{ category.label }}\n    </mat-button-toggle>\n</mat-button-toggle-group>", components: [{ type: i6__namespace$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i6__namespace$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadComponent, decorators: [{
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
            this.customRangeConstant = i3$1.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i3$1.DateFormatEnum;
            this.dateInputTypeEnum = i3$1.DateInputTypeEnum;
            this.dateTypeEnum = i3$1.DateTypeEnum;
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
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2.ToastrColor.ERROR);
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
    ConsumptionBreakupComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace.ToastrService }, { token: i3__namespace$1.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConsumptionBreakupComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupComponent, selector: "lib-consumption-breakup", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput [dropdownTypeInp]=\"dropdownTypeEnum.MULTIPLE_DROPDOWN\"\n                    (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: SourceLoadComponent, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i3__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i5__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-consumption-breakup',
                        templateUrl: './consumption-breakup.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace.ToastrService }, { type: i3__namespace$1.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { sourceLoadInput: [{
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

    var routes$8 = [
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
    ConsumptionBreakupRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    ConsumptionBreakupRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$8)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$8)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    var SourceLoadModule = /** @class */ (function () {
        function SourceLoadModule() {
        }
        return SourceLoadModule;
    }());
    SourceLoadModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SourceLoadModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule, declarations: [SourceLoadComponent], imports: [i7$1.CommonModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            input.MatInputModule,
            i6$2.MatButtonToggleModule], exports: [SourceLoadComponent] });
    SourceLoadModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule, imports: [[
                i7$1.CommonModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                input.MatInputModule,
                i6$2.MatButtonToggleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SourceLoadModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SourceLoadComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            input.MatInputModule,
                            i6$2.MatButtonToggleModule
                        ],
                        exports: [
                            SourceLoadComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var ConsumptionBreakupModule = /** @class */ (function () {
        function ConsumptionBreakupModule() {
        }
        return ConsumptionBreakupModule;
    }());
    ConsumptionBreakupModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConsumptionBreakupModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupModule, declarations: [ConsumptionBreakupComponent], imports: [i7$1.CommonModule,
            ConsumptionBreakupRoutingModule,
            SourceLoadModule,
            i3$1.DateInputModule,
            AggregationDurationModule,
            EntityModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i5$1.MatTableModule,
            i5.MatRippleModule] });
    ConsumptionBreakupModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupModule, imports: [[
                i7$1.CommonModule,
                ConsumptionBreakupRoutingModule,
                SourceLoadModule,
                i3$1.DateInputModule,
                AggregationDurationModule,
                EntityModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i5$1.MatTableModule,
                i5.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConsumptionBreakupModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConsumptionBreakupComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            ConsumptionBreakupRoutingModule,
                            SourceLoadModule,
                            i3$1.DateInputModule,
                            AggregationDurationModule,
                            EntityModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i5$1.MatTableModule,
                            i5.MatRippleModule
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
            this.customRangeConstant = i3$1.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i3$1.DateFormatEnum;
            this.dateInputTypeEnum = i3$1.DateInputTypeEnum;
            this.dateTypeEnum = i3$1.DateTypeEnum;
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
                        this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2.ToastrColor.ERROR);
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
    DataAvailabilityReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace.ToastrService }, { token: i3__namespace$1.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DataAvailabilityReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DataAvailabilityReportComponent, selector: "lib-data-availability", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Data Availability Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"deviceID\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Entity </td>\n                            <td align=\"center\" class=\"fw-bold\"> Device </td>\n                            <td align=\"center\" class=\"fw-bold\"> Parameter </td>\n                            <td align=\"center\" class=\"fw-bold\"> Min Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Max Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Avg Value </td>\n                            <td align=\"center\" class=\"fw-bold\"> Data availability (%) </td>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <!-- INFO: SOMYA AGRAWAL, to discuss.. -->\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i5__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-data-availability',
                        templateUrl: './data-availability.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace.ToastrService }, { type: i3__namespace$1.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
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

    var routes$7 = [
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
    DataAvailabilityReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    DataAvailabilityReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$7)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$7)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var DataAvailabilityReportModule = /** @class */ (function () {
        function DataAvailabilityReportModule() {
        }
        return DataAvailabilityReportModule;
    }());
    DataAvailabilityReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DataAvailabilityReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportModule, declarations: [DataAvailabilityReportComponent], imports: [i7$1.CommonModule,
            DataAvailabilityReportRoutingModule,
            i3$1.DateInputModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i5$1.MatTableModule,
            i5.MatRippleModule] });
    DataAvailabilityReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportModule, imports: [[
                i7$1.CommonModule,
                DataAvailabilityReportRoutingModule,
                i3$1.DateInputModule,
                EntityModule,
                DeviceModule,
                ParamMetricModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i5$1.MatTableModule,
                i5.MatRippleModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataAvailabilityReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DataAvailabilityReportComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            DataAvailabilityReportRoutingModule,
                            i3$1.DateInputModule,
                            EntityModule,
                            DeviceModule,
                            ParamMetricModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i5$1.MatTableModule,
                            i5.MatRippleModule,
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
            this.customRangeConstant = i3$1.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dateFormatEnum = i3$1.DateFormatEnum;
            this.dateInputTypeEnum = i3$1.DateInputTypeEnum;
            this.dateTypeEnum = i3$1.DateTypeEnum;
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
                            return [4 /*yield*/, this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric)];
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
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2.ToastrColor.ERROR);
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
    MeterReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace.ToastrService }, { token: i3__namespace$1.TSCCommonService }, { token: EntityDeviceService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MeterReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MeterReportComponent, selector: "lib-meter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Meter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select meter</mat-label>\n                    <mat-select (selectionChange)=\"meterChange($event.value)\" [formControl]=\"meterFC\">\n                        <ng-container *ngIf=\"entityDeviceM && entityDeviceM.length > 1; else noDataFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"meterSearchUtil.filterFC\" placeholderLabel=\"Search by entity name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-optgroup *ngFor=\"let entity of meterSearchUtil.filteredEntities | async\" [label]=\"entity.name\"\n                                [disabled]=\"entity.disabled\">\n                                <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\">\n                                    {{ device.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </ng-container>\n                        <ng-template #noDataFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"meterFC.touched && meterFC.hasError('required')\">\n                        Select meter\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"meterFC.value\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5__namespace.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }, { type: i5__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i7__namespace$1.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-meter',
                        templateUrl: './meter.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace.ToastrService }, { type: i3__namespace$1.TSCCommonService }, { type: EntityDeviceService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], aggDurationInput: [{
                    type: i0.ViewChild,
                    args: ['aggDurationInput']
                }], paramInput: [{
                    type: i0.ViewChild,
                    args: ['paramInput']
                }] } });

    var routes$6 = [
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
    MeterReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    MeterReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$6)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$6)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var MeterReportModule = /** @class */ (function () {
        function MeterReportModule() {
        }
        return MeterReportModule;
    }());
    MeterReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MeterReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportModule, declarations: [MeterReportComponent], imports: [i7$1.CommonModule,
            MeterReportRoutingModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i3$1.DateInputModule,
            AggregationDurationModule,
            ParamMetricModule,
            i3.MessageAlertModule,
            i3.SkeletonModule,
            i6.NgxMatSelectSearchModule,
            input.MatInputModule,
            i3$2.MatFormFieldModule,
            i4.MatSelectModule,
            i5$1.MatTableModule,
            i5.MatRippleModule] });
    MeterReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportModule, imports: [[
                i7$1.CommonModule,
                MeterReportRoutingModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i3$1.DateInputModule,
                AggregationDurationModule,
                ParamMetricModule,
                i3.MessageAlertModule,
                i3.SkeletonModule,
                i6.NgxMatSelectSearchModule,
                input.MatInputModule,
                i3$2.MatFormFieldModule,
                i4.MatSelectModule,
                i5$1.MatTableModule,
                i5.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MeterReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MeterReportComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            MeterReportRoutingModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i3$1.DateInputModule,
                            AggregationDurationModule,
                            ParamMetricModule,
                            i3.MessageAlertModule,
                            i3.SkeletonModule,
                            i6.NgxMatSelectSearchModule,
                            input.MatInputModule,
                            i3$2.MatFormFieldModule,
                            i4.MatSelectModule,
                            i5$1.MatTableModule,
                            i5.MatRippleModule
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
            this.customRangeConstant = i3$1.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i3$1.DateFormatEnum;
            this.dateInputTypeEnum = i3$1.DateInputTypeEnum;
            this.dateTypeEnum = i3$1.DateTypeEnum;
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
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2.ToastrColor.ERROR);
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
    ParameterReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace.ToastrService }, { token: i3__namespace$1.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParameterReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterReportComponent, selector: "lib-parameter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }, { propertyName: "paramInput", first: true, predicate: ["paramInput"], descendants: true }, { propertyName: "aggInput", first: true, predicate: ["aggInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Parameter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-param-metric #paramInput [deviceInp]=\"deviceID\" (emitFilter)=\"paramInpChange()\"></lib-param-metric>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"paramMetric && paramMetric.length > 0\">\n            <table class=\"table\">\n                <tbody>\n                    <tr class=\"tableHeader\">\n                        <td align=\"center\" class=\"fw-bold\"> Metric </td>\n                        <td align=\"center\" class=\"fw-bold\"> Aggregation </td>\n                    </tr>\n                </tbody>\n                <tbody>\n                    <tr *ngFor=\"let metric of parameterList; let i = index\">\n                        <td align=\"center\">\n                            <div class=\"mt-4\">\n                                {{ getParameterLabel(metric) }}\n                            </div>\n                        </td>\n                        <td align=\"center\">\n                            <div class=\"col-sm-6 mt-3\">\n                                <lib-aggregation #aggInput\n                                    (emitFilter)=\"aggInpChange(aggInput.aggregationFC.value, metric)\"></lib-aggregation>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: ParamMetricComponent, selector: "lib-param-metric", inputs: ["deviceInp"], outputs: ["emitFilter"] }, { type: AggregationComponent, selector: "lib-aggregation", outputs: ["emitFilter"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-parameter',
                        templateUrl: './parameter.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace.ToastrService }, { type: i3__namespace$1.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
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

    var routes$5 = [
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
    ParameterReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    ParameterReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$5)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$5)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var ParameterReportModule = /** @class */ (function () {
        function ParameterReportModule() {
        }
        return ParameterReportModule;
    }());
    ParameterReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ParameterReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportModule, declarations: [ParameterReportComponent], imports: [i7$1.CommonModule,
            ParameterReportRoutingModule,
            i3$1.DateInputModule,
            AggregationDurationModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            AggregationModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i5$1.MatTableModule,
            i5.MatRippleModule] });
    ParameterReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportModule, imports: [[
                i7$1.CommonModule,
                ParameterReportRoutingModule,
                i3$1.DateInputModule,
                AggregationDurationModule,
                EntityModule,
                DeviceModule,
                ParamMetricModule,
                AggregationModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i5$1.MatTableModule,
                i5.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParameterReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParameterReportComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            ParameterReportRoutingModule,
                            i3$1.DateInputModule,
                            AggregationDurationModule,
                            EntityModule,
                            DeviceModule,
                            ParamMetricModule,
                            AggregationModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i5$1.MatTableModule,
                            i5.MatRippleModule
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
            this.customRangeConstant = i3$1.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i3$1.DateFormatEnum;
            this.dateInputTypeEnum = i3$1.DateInputTypeEnum;
            this.dateTypeEnum = i3$1.DateTypeEnum;
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
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2.ToastrColor.ERROR);
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
    RawDataReportComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace.ToastrService }, { token: i3__namespace$1.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RawDataReportComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RawDataReportComponent, selector: "lib-raw-data", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "entityInput", first: true, predicate: ["entityInput"], descendants: true }, { propertyName: "deviceInput", first: true, predicate: ["deviceInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Raw Data Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-entity #entityInput (emitFilter)=\"entityInpChange()\"></lib-entity>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-device #deviceInput [dropdownTypeInp]=\"dropdownTypeEnum.SINGLE_DROPDOWN\" [entityInp]=\"entityID\"\n                    (emitFilter)=\"deviceInpChange()\"></lib-device>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: EntityComponent, selector: "lib-entity", inputs: ["dropdownTypeInp"], outputs: ["emitFilter"] }, { type: DeviceComponent, selector: "lib-device", inputs: ["dropdownTypeInp", "entityInp"], outputs: ["emitFilter"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i5__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-raw-data',
                        templateUrl: './raw-data.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace.ToastrService }, { type: i3__namespace$1.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], entityInput: [{
                    type: i0.ViewChild,
                    args: ['entityInput']
                }], deviceInput: [{
                    type: i0.ViewChild,
                    args: ['deviceInput']
                }] } });

    var routes$4 = [
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
    RawDataReportRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    RawDataReportRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$4)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$4)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var RawDataReportModule = /** @class */ (function () {
        function RawDataReportModule() {
        }
        return RawDataReportModule;
    }());
    RawDataReportModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RawDataReportModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportModule, declarations: [RawDataReportComponent], imports: [i7$1.CommonModule,
            RawDataReportRoutingModule,
            i3$1.DateInputModule,
            EntityModule,
            DeviceModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i5$1.MatTableModule,
            i5.MatRippleModule] });
    RawDataReportModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportModule, imports: [[
                i7$1.CommonModule,
                RawDataReportRoutingModule,
                i3$1.DateInputModule,
                EntityModule,
                DeviceModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i5$1.MatTableModule,
                i5.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RawDataReportModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RawDataReportComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            RawDataReportRoutingModule,
                            i3$1.DateInputModule,
                            EntityModule,
                            DeviceModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i5$1.MatTableModule,
                            i5.MatRippleModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var DerivedParameterComponent = /** @class */ (function () {
        function DerivedParameterComponent(storageService, toastService, tscCommonService, aggregateDataService, parameterService, entityService, reportService, alertService) {
            this.storageService = storageService;
            this.toastService = toastService;
            this.tscCommonService = tscCommonService;
            this.aggregateDataService = aggregateDataService;
            this.parameterService = parameterService;
            this.entityService = entityService;
            this.reportService = reportService;
            this.alertService = alertService;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.customRangeConstant = i3$1.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dropdownTypeEnum = DropdownTypeEnum;
            this.dateFormatEnum = i3$1.DateFormatEnum;
            this.dateInputTypeEnum = i3$1.DateInputTypeEnum;
            this.dateTypeEnum = i3$1.DateTypeEnum;
            this.showAlert = false;
            this.showLoader = false;
            this.totalParameterCount = 0;
            this.allParameterID = [];
            this.parameterM = [new Parameter()];
            this.entityM = [new Entity()];
            this.parameterFC = new i8.FormControl([], [i8.Validators.required]);
            this.entityFC = new i8.FormControl([], [i8.Validators.required]);
            this.paramSearchUtil = new i3.MatSelectSearchService(['label']);
            this.entitySearchUtil = new i3.MatSelectSearchService(['name']);
            this.reportAlertObj = new Alert();
        }
        DerivedParameterComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.timezone = this.storageService.getStorage('timezone');
            this.getDerivedParameterByLayoutID();
        };
        DerivedParameterComponent.prototype.dateInpChange = function () {
            this.startDate = this.customDateInput.startDateFC.value;
            this.endDate = this.customDateInput.endDateFC.value;
        };
        DerivedParameterComponent.prototype.aggDurationInpChange = function () {
            this.aggDuration = this.aggDurationInput.aggDurationFC.value;
        };
        DerivedParameterComponent.prototype.getDerivedParameterByLayoutID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _c;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = this;
                            return [4 /*yield*/, this.parameterService.getDerivedParameterByLayoutID(this.orgID)];
                        case 1:
                            _c.parameterM = (_d.sent());
                            this.paramSearchUtil.entityArr = this.parameterM;
                            this.paramSearchUtil.createSubscription();
                            this.totalParameterCount = this.parameterM.length;
                            this.parameterM.forEach(function (parameter) { return _this.allParameterID.push(parameter['paramMetric']); });
                            return [2 /*return*/];
                    }
                });
            });
        };
        DerivedParameterComponent.prototype.selectAllParameters = function () {
            if (!this.parameterFC.value.includes(-1)) {
                this.parameterFC.reset([]);
                return;
            }
            this.parameterFC.setValue(__spreadArray([-1], __read(this.allParameterID)));
            this.getEntityByParameterID();
        };
        DerivedParameterComponent.prototype.selectedParameters = function () {
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
            this.getEntityByParameterID();
        };
        DerivedParameterComponent.prototype.getEntityByParameterID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parameter, parameterID, requestBody, _c;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.entityFC.reset();
                            this.selectedParamMetric = this.tscCommonService.removeSelectAllID(this.parameterFC.value);
                            parameter = this.parameterM.filter(function (param) { return _this.selectedParamMetric.includes(param.paramMetric); });
                            parameterID = parameter.map(function (param) { return param.id; });
                            requestBody = {};
                            requestBody['parameterID'] = parameterID;
                            _c = this;
                            return [4 /*yield*/, this.entityService.getEntityByParameterID(this.orgID, requestBody)];
                        case 1:
                            _c.entityM = (_d.sent());
                            this.entitySearchUtil.entityArr = this.entityM;
                            this.entitySearchUtil.createSubscription();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DerivedParameterComponent.prototype.entityChange = function (selectedEntity) {
            this.entityFC.patchValue(selectedEntity);
        };
        DerivedParameterComponent.prototype.viewReport = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var requestData, _c, error_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.alertService.resetAlertProperties(this.reportAlertObj);
                            if (this.isValidInputField()) {
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2.ToastrColor.ERROR);
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
        DerivedParameterComponent.prototype.createDataRequest = function () {
            var e_1, _c;
            var requestData = new AggregateDataRequest();
            requestData.startTime = this.startDate;
            requestData.endTime = this.endDate;
            requestData.interval = this.aggDuration;
            requestData.entityID = [this.entityFC.value];
            requestData.params = [];
            try {
                for (var _d = __values(this.selectedParamMetric), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var paramMetric = _e.value;
                    requestData.params.push({
                        name: paramMetric,
                        dsAgg: "sum",
                        agg: "sum"
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            requestData.nullifyParams();
            return requestData;
        };
        DerivedParameterComponent.prototype.isValidInputField = function () {
            var controls = [
                this.customDateInput.startDateFC,
                this.aggDurationInput.aggDurationFC,
                this.parameterFC,
                this.entityFC
            ];
            controls.forEach(function (control) { return control.markAsTouched(); });
            return controls.some(function (control) { return control.invalid; });
        };
        return DerivedParameterComponent;
    }());
    DerivedParameterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace.ToastrService }, { token: i3__namespace$1.TSCCommonService }, { token: AggregateDataService }, { token: ParameterService }, { token: EntityService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DerivedParameterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DerivedParameterComponent, selector: "lib-derived-parameter", viewQueries: [{ propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Derived Parameter Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select parameter</mat-label>\n                    <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noParameterFound\">\n                        <mat-select [formControl]=\"parameterFC\" multiple required>\n                            <ngx-mat-select-search [formControl]=\"paramSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                                noEntriesFoundLabel=\"No matching name found.\">\n                            </ngx-mat-select-search>\n                            <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\" [hidden]=\"paramSearchUtil.filterFC.value\">\n                                Select all\n                            </mat-option>\n                            <mat-option *ngFor=\"let parameter of paramSearchUtil.filteredEntities | async\"\n                                [value]=\"parameter.paramMetric\" (click)=\"selectedParameters()\">\n                                {{ parameter.label }}\n                            </mat-option>\n                        </mat-select>\n                    </ng-container>\n                    <ng-template #noParameterFound>\n                        <mat-select [formControl]=\"parameterFC\">\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </mat-select>\n                    </ng-template>\n                    <mat-error *ngIf=\"parameterFC.touched && parameterFC.hasError('required')\">\n                        Select parameter\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select entity</mat-label>\n                    <mat-select (selectionChange)=\"entityChange($event.value)\" [formControl]=\"entityFC\" required>\n                        <ng-container *ngIf=\"entityM && entityM.length > 0 && entityM[0]['id']; else noEntityFound\">\n                            <mat-option>\n                                <ngx-mat-select-search [formControl]=\"entitySearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                                    noEntriesFoundLabel=\"No matching name found.\">\n                                </ngx-mat-select-search>\n                            </mat-option>\n                            <mat-option *ngFor=\"let entity of entitySearchUtil.filteredEntities | async\" [value]=\"entity.id\">\n                                {{ entity.name }}\n                            </mat-option>\n                        </ng-container>\n                        <ng-template #noEntityFound>\n                            <mat-option disabled>\n                                {{ commonConstant.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n                    <mat-error *ngIf=\"entityFC.touched && entityFC.hasError('required')\">\n                        Select entity\n                    </mat-error>\n                </mat-form-field>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i6__namespace.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i5__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i3__namespace$2.MatLabel, selector: "mat-label" }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }, { type: i5__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i7__namespace$1.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-derived-parameter',
                        templateUrl: './derived-parameter.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace.ToastrService }, { type: i3__namespace$1.TSCCommonService }, { type: AggregateDataService }, { type: ParameterService }, { type: EntityService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }], aggDurationInput: [{
                    type: i0.ViewChild,
                    args: ['aggDurationInput']
                }] } });

    var routes$3 = [
        {
            path: '',
            component: DerivedParameterComponent
        }
    ];
    var DerivedParameterRoutingModule = /** @class */ (function () {
        function DerivedParameterRoutingModule() {
        }
        return DerivedParameterRoutingModule;
    }());
    DerivedParameterRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DerivedParameterRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    DerivedParameterRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$3)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$3)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var DerivedParameterModule = /** @class */ (function () {
        function DerivedParameterModule() {
        }
        return DerivedParameterModule;
    }());
    DerivedParameterModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DerivedParameterModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterModule, declarations: [DerivedParameterComponent], imports: [i7$1.CommonModule,
            DerivedParameterRoutingModule,
            i8.FormsModule,
            i8.ReactiveFormsModule,
            i3$1.DateInputModule,
            AggregationDurationModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i5$1.MatTableModule,
            i5.MatRippleModule,
            input.MatInputModule,
            i3$2.MatFormFieldModule,
            i4.MatSelectModule,
            i6.NgxMatSelectSearchModule] });
    DerivedParameterModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterModule, imports: [[
                i7$1.CommonModule,
                DerivedParameterRoutingModule,
                i8.FormsModule,
                i8.ReactiveFormsModule,
                i3$1.DateInputModule,
                AggregationDurationModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i5$1.MatTableModule,
                i5.MatRippleModule,
                input.MatInputModule,
                i3$2.MatFormFieldModule,
                i4.MatSelectModule,
                i6.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DerivedParameterModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DerivedParameterComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            DerivedParameterRoutingModule,
                            i8.FormsModule,
                            i8.ReactiveFormsModule,
                            i3$1.DateInputModule,
                            AggregationDurationModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i5$1.MatTableModule,
                            i5.MatRippleModule,
                            input.MatInputModule,
                            i3$2.MatFormFieldModule,
                            i4.MatSelectModule,
                            i6.NgxMatSelectSearchModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var UsageAcrossFacilityComponent = /** @class */ (function () {
        function UsageAcrossFacilityComponent(storageService, toastService, tscCommonService, aggregateDataService, reportService, alertService) {
            this.storageService = storageService;
            this.toastService = toastService;
            this.tscCommonService = tscCommonService;
            this.aggregateDataService = aggregateDataService;
            this.reportService = reportService;
            this.alertService = alertService;
            this.materialConstant = i3.MATERIAL_CONSTANT;
            this.commonConstant = i3.COMMON_CONSTANT;
            this.customRangeConstant = i3$1.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
            this.materialFormFieldAppearance = i3.MaterialFormFieldAppearance;
            this.buttonLabelEnum = i3.ButtonLabelEnum;
            this.dateFormatEnum = i3$1.DateFormatEnum;
            this.dateInputTypeEnum = i3$1.DateInputTypeEnum;
            this.dateTypeEnum = i3$1.DateTypeEnum;
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
                                this.toastService.openToast(i3.InvalidForm.INVALID_FORM_TITLE, i3.InvalidForm.INVALID_FORM_MESSAGE, i2.ToastrColor.ERROR);
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
    UsageAcrossFacilityComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: i2__namespace.ToastrService }, { token: i3__namespace$1.TSCCommonService }, { token: AggregateDataService }, { token: ReportService }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UsageAcrossFacilityComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UsageAcrossFacilityComponent, selector: "lib-usage-across-facility", viewQueries: [{ propertyName: "sourceLoadInput", first: true, predicate: ["sourceLoadInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }, { propertyName: "aggDurationInput", first: true, predicate: ["aggDurationInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Usage Across Facility Report</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <lib-source-load #sourceLoadInput (emitFilter)=\"sourceLoadInpChange()\"></lib-source-load>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-3\">\n                <lib-date-input #customDateInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                    [materialFormFieldAppearanceInp]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                    [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\"\n                    [dateTypeInp]=\"dateTypeEnum.EXCLUSIVE\" [showDefaultDurationInp]=\"true\" [showCdrRangeLabelInp]=\"true\"\n                    [labelInp]=\"'Select date'\" [timezoneInp]=\"timezone\" [rangeInp]=\"customRangeConstant\" [showTimeInCDRInp]=\"true\"\n                    [showRangeInp]=\"true\" [cdrFormatInp]=\"'YYYY-MM-DD HH:mm:ss'\"></lib-date-input>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <lib-aggregation-duration #aggDurationInput\n                    (emitFilter)=\"aggDurationInpChange()\"></lib-aggregation-duration>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"float-end\">\n                    <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"viewReport()\" matRipple\n                        [matRippleCentered]=\"materialConstant.MAT_RIPPLE_CENTER\">\n                        {{ buttonLabelEnum.READ_BTN_LABEL }}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-message-alert *ngIf=\"reportAlertObj.showAlert\" [labelInp]=\"reportAlertObj.alertLabel\"\n                    [contentInp]=\"reportAlertObj.alertContent\" [messageAlertTypeInp]=\"reportAlertObj.messageAlertType\"\n                    [messageAlertIconInp]=\"reportAlertObj.messageAlertIcon\">\n                </lib-message-alert>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"centerAlign\">\n                <lib-skeleton-loader *ngIf=\"showLoader\" [count]=\"3\" [appearance]=\"'circle'\"\n                    [theme]=\"{ height: '15px', width: '15px', 'background-color': '#e7ebf3' }\"></lib-skeleton-loader>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\" *ngIf=\"reportData && reportData.length > 0\">\n            <div class=\"overflowX customScrollBar\">\n                <table class=\"table\">\n                    <tbody>\n                        <tr class=\"tableHeader\">\n                            <td class=\"fw-bold\"> Sr. No. </td>\n                            <td align=\"center\" class=\"fw-bold\"> Time </td>\n                            <ng-container *ngFor=\"let data of reportData; let i = index\">\n                                <td align=\"center\" class=\"fw-bold\">\n                                    {{ data.entityName }}<br />\n                                    {{ data.paramLabel }} ({{ data.unit }}) ({{ data.dsAgg }})\n                                </td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody>\n                        <tr *ngFor=\"let row of renderTable\">\n                            <td>{{ row.index }}</td>\n                            <td align=\"center\" class=\"colWidthContainingDateTime\">{{ row.time }}</td>\n                            <td align=\"center\" *ngFor=\"let value of row.data\">{{ value ? value : commonConstant.HYPHEN\n                                }}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: SourceLoadComponent, selector: "lib-source-load", inputs: ["defaultCategoryInp"], outputs: ["emitFilter"] }, { type: i3__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }, { type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: ["emitFilter"] }, { type: i3__namespace$1.MessageAlertComponent, selector: "lib-message-alert", inputs: ["messageAlertTypeInp", "messageAlertIconInp", "labelInp", "contentInp"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i5__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-usage-across-facility',
                        templateUrl: './usage-across-facility.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: i2__namespace.ToastrService }, { type: i3__namespace$1.TSCCommonService }, { type: AggregateDataService }, { type: ReportService }, { type: AlertService }]; }, propDecorators: { sourceLoadInput: [{
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
    UsageAcrossFacilityRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    UsageAcrossFacilityRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$2)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$2)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var UsageAcrossFacilityModule = /** @class */ (function () {
        function UsageAcrossFacilityModule() {
        }
        return UsageAcrossFacilityModule;
    }());
    UsageAcrossFacilityModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UsageAcrossFacilityModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityModule, declarations: [UsageAcrossFacilityComponent], imports: [i7$1.CommonModule,
            UsageAcrossFacilityRoutingModule,
            SourceLoadModule,
            i3$1.DateInputModule,
            AggregationDurationModule,
            i3.SkeletonModule,
            i3.MessageAlertModule,
            i5$1.MatTableModule,
            i5.MatRippleModule] });
    UsageAcrossFacilityModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityModule, imports: [[
                i7$1.CommonModule,
                UsageAcrossFacilityRoutingModule,
                SourceLoadModule,
                i3$1.DateInputModule,
                AggregationDurationModule,
                i3.SkeletonModule,
                i3.MessageAlertModule,
                i5$1.MatTableModule,
                i5.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UsageAcrossFacilityModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UsageAcrossFacilityComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            UsageAcrossFacilityRoutingModule,
                            SourceLoadModule,
                            i3$1.DateInputModule,
                            AggregationDurationModule,
                            i3.SkeletonModule,
                            i3.MessageAlertModule,
                            i5$1.MatTableModule,
                            i5.MatRippleModule
                        ]
                    }]
            }] });

    var routes$1 = [
        {
            path: 'page',
            loadChildren: function () { return Promise.resolve().then(function () { return page_module; }).then(function (m) { return m.PageModule; }); }
        },
    ];
    var LayoutRoutingModule = /** @class */ (function () {
        function LayoutRoutingModule() {
        }
        return LayoutRoutingModule;
    }());
    LayoutRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LayoutRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    LayoutRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutRoutingModule, imports: [[i1$3.RouterModule.forChild(routes$1)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes$1)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        return LayoutModule;
    }());
    LayoutModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LayoutModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutModule, imports: [i7$1.CommonModule,
            LayoutRoutingModule] });
    LayoutModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutModule, imports: [[
                i7$1.CommonModule,
                LayoutRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i7$1.CommonModule,
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
    var LayoutController = /** @class */ (function () {
        function LayoutController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        LayoutController.prototype.getLayoutByPage = function (pageNo, pageSize, sortBy, orderBy, search, orgID) {
            var params = new i1.HttpParams();
            params = params.append('pageNo', pageNo);
            params = params.append('pageSize', pageSize);
            params = params.append('sortBy', sortBy);
            params = params.append('orderBy', orderBy);
            search.forEach(function (search) { return params = params.append('search', search); });
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/layouts/page", { params: params });
        };
        return LayoutController;
    }());
    LayoutController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LayoutController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    // /tsc-library/
    var PageComponent = /** @class */ (function () {
        function PageComponent(storageService, layoutController) {
            this.storageService = storageService;
            this.layoutController = layoutController;
            this.TABLE_CONSTANT = i3.TABLE_CONSTANT;
            this.TscLiteButtonLabelEnum = TscLiteButtonLabelEnum;
            this.faPlus = freeSolidSvgIcons.faPlus;
            this.faEllipsisV = freeSolidSvgIcons.faEllipsisV;
            this.displayedColumn = ['id', 'name', 'description', 'option'];
            this.resultLength = 0;
            this.dataSource = [];
            this.searchFlag = false;
            this.searchArr = [];
            this.entityTypeLoader = true;
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
                _this.entityTypeLoader = false;
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
        return PageComponent;
    }());
    PageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageComponent, deps: [{ token: i1__namespace$1.StorageService }, { token: LayoutController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageComponent, selector: "app-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Layout</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n                <a class=\"btn btn-sm btn-success btnBase\" matRipple>\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>&nbsp; {{ TscLiteButtonLabelEnum.LAYOUT_BTN_LABEL }}\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <table mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\" matSortDirection=\"asc\"\n        matSortDisableClear>\n\n        <ng-container matColumnDef=\"id\">\n            <th class=\"columnWidth1 px-3\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                ID\n            </th>\n            <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">\n                {{ row['id'] }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n            <th class=\"columnWidth2 px-3\" mat-header-cell *matHeaderCellDef> Name </th>\n            <td class=\"columnWidth2 px-3\" mat-cell *matCellDef=\"let row\"\n                [matTooltip]=\"row?.['name']?.length>24? row['name']: ''\" matTooltipPosition=\"above\"\n                matTooltipClass=\"nameTooltip\">\n                {{ row?.['name'] | dotdotdot:24}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"description\">\n            <th class=\"columnWidth2 px-3\" mat-header-cell *matHeaderCellDef> Description </th>\n            <td class=\"columnWidth2 px-3\" mat-cell *matCellDef=\"let row\"\n                [matTooltip]=\"row?.['description']?.length>24? row['description']: ''\" matTooltipPosition=\"above\"\n                matTooltipClass=\"nameTooltip\">\n                {{ row?.['description'] | dotdotdot:24}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"option\">\n            <th class=\"columnWidth3\" mat-header-cell *matHeaderCellDef> Action </th>\n            <td class=\"columnWidth3 text-center\" mat-cell *matCellDef=\"let row\">\n                <div class=\"d-flex align-items-center\">\n                    <div class=\"btn-group\" ngbDropdown placement=\"left\">\n                        <button type=\"button\" ngbDropdownToggle class=\"dropdown-after dropdownAfter btn\">\n                            <fa-icon [icon]=\"faEllipsisV\"></fa-icon>\n                        </button>\n                        <div ngbDropdownMenu>\n                            <button class=\"dropdown-item\">\n                                {{ ButtonLabelEnum.UPDATE }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\" class=\"data-row\"></tr>\n\n        <tr class=\"mat-row\" *matNoDataRow>\n            <ng-container *ngIf=\"entityTypeLoader; else showEntityType\">\n                <ng-container *ngTemplateOutlet=\"showLoader; context: { count: 3 }\"></ng-container>\n            </ng-container>\n            <ng-template #showEntityType>\n                <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                    {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                </td>\n            </ng-template>\n        </tr>\n    </table>\n\n    <ng-template #showLoader let-count=\"count\" class=\"text-center\">\n        <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n            <lib-skeleton-loader [count]=\"count\" [appearance]=\"'circle'\"\n                [theme]=\"{}\">\n            </lib-skeleton-loader>\n        </td>\n    </ng-template>\n\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:200px}.columnWidth3{min-width:140px}\n"], components: [{ type: i3__namespace$1.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i4__namespace$1.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i5__namespace$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i6__namespace$3.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i5__namespace$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i5__namespace$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i3__namespace$1.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }, { type: i7__namespace$3.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i5__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i6__namespace$3.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i5__namespace$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i5__namespace$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i5__namespace$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i5__namespace$1.MatCellDef, selector: "[matCellDef]" }, { type: i5__namespace$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i11__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i10__namespace$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i10__namespace$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i10__namespace$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i5__namespace$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i5__namespace$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i5__namespace$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { type: i7__namespace$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "dotdotdot": i3__namespace$1.EllipsisPipeService } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-page',
                        templateUrl: './page.component.html',
                        styleUrls: ['./page.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.StorageService }, { type: LayoutController }]; }, propDecorators: { sort: [{
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

    var routes = [
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
    PageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, imports: [i1__namespace$3.RouterModule], exports: [i1$3.RouterModule] });
    PageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, imports: [[i1$3.RouterModule.forChild(routes)], i1$3.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$3.RouterModule.forChild(routes)],
                        exports: [i1$3.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var PageModule = /** @class */ (function () {
        function PageModule() {
        }
        return PageModule;
    }());
    PageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, declarations: [PageComponent], imports: [i7$1.CommonModule,
            PageRoutingModule,
            i3.SearchBarOneModule,
            i3.EllipsisPipeModule,
            i10$1.NgbModule,
            i4$1.FontAwesomeModule,
            icon.MatIconModule,
            i7.MatButtonModule,
            i5.MatRippleModule,
            i5$1.MatTableModule,
            i7$3.MatPaginatorModule,
            i6$3.MatSortModule,
            i1$2.MatDialogModule,
            i11.MatTooltipModule,
            i3.SkeletonModule] });
    PageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, imports: [[
                i7$1.CommonModule,
                PageRoutingModule,
                i3.SearchBarOneModule,
                i3.EllipsisPipeModule,
                i10$1.NgbModule,
                i4$1.FontAwesomeModule,
                icon.MatIconModule,
                i7.MatButtonModule,
                i5.MatRippleModule,
                i5$1.MatTableModule,
                i7$3.MatPaginatorModule,
                i6$3.MatSortModule,
                i1$2.MatDialogModule,
                i11.MatTooltipModule,
                i3.SkeletonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PageComponent
                        ],
                        imports: [
                            i7$1.CommonModule,
                            PageRoutingModule,
                            i3.SearchBarOneModule,
                            i3.EllipsisPipeModule,
                            i10$1.NgbModule,
                            i4$1.FontAwesomeModule,
                            icon.MatIconModule,
                            i7.MatButtonModule,
                            i5.MatRippleModule,
                            i5$1.MatTableModule,
                            i7$3.MatPaginatorModule,
                            i6$3.MatSortModule,
                            i1$2.MatDialogModule,
                            i11.MatTooltipModule,
                            i3.SkeletonModule
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
    exports.DataAvailabilityReportComponent = DataAvailabilityReportComponent;
    exports.DataAvailabilityReportModule = DataAvailabilityReportModule;
    exports.DerivedParameterComponent = DerivedParameterComponent;
    exports.DerivedParameterModule = DerivedParameterModule;
    exports.Device = Device;
    exports.DeviceComponent = DeviceComponent;
    exports.DeviceController = DeviceController;
    exports.DeviceInfo = DeviceInfo;
    exports.DeviceModule = DeviceModule;
    exports.DeviceService = DeviceService;
    exports.DevicesWithEntities = DevicesWithEntities;
    exports.Entity = Entity;
    exports.EntityComponent = EntityComponent;
    exports.EntityController = EntityController;
    exports.EntityDashboardComponent = EntityDashboardComponent;
    exports.EntityDashboardModule = EntityDashboardModule;
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
    exports.LayoutModule = LayoutModule;
    exports.MeterDataDashboardComponent = MeterDataDashboardComponent;
    exports.MeterDataDashboardModule = MeterDataDashboardModule;
    exports.MeterReportComponent = MeterReportComponent;
    exports.MeterReportModule = MeterReportModule;
    exports.OrgRecentData = OrgRecentData;
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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-tsc-lite.umd.js.map
