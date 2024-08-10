(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@library/application-service'), require('@angular/common/http'), require('@library/storage-service'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@library/feature-service', ['exports', '@angular/core', '@library/application-service', '@angular/common/http', '@library/storage-service', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["feature-service"] = {}), global.ng.core, global.applicationService, global.ng.common.http, global.i2, global.ng.router));
})(this, (function (exports, i0, applicationService, i1, i2, i1$1) { 'use strict';

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
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    var FeatureServiceService = /** @class */ (function () {
        function FeatureServiceService() {
        }
        return FeatureServiceService;
    }());
    FeatureServiceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FeatureServiceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var FeatureServiceComponent = /** @class */ (function () {
        function FeatureServiceComponent() {
        }
        FeatureServiceComponent.prototype.ngOnInit = function () {
        };
        return FeatureServiceComponent;
    }());
    FeatureServiceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FeatureServiceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FeatureServiceComponent, selector: "lib-feature-service", ngImport: i0__namespace, template: "\n    <p>\n      feature-service works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-feature-service',
                        template: "\n    <p>\n      feature-service works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var FeatureServiceModule = /** @class */ (function () {
        function FeatureServiceModule() {
        }
        FeatureServiceModule.forRoot = function (environment) {
            return {
                ngModule: FeatureServiceModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return FeatureServiceModule;
    }());
    FeatureServiceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FeatureServiceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceModule, declarations: [FeatureServiceComponent], exports: [FeatureServiceComponent] });
    FeatureServiceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureServiceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FeatureServiceComponent
                        ],
                        imports: [],
                        exports: [
                            FeatureServiceComponent
                        ]
                    }]
            }] });

    var FeatureJson = /** @class */ (function () {
        function FeatureJson() {
        }
        return FeatureJson;
    }());
    FeatureJson.featureNotAvailable = {
        body: "This feature is not available with your subscription!"
    };

    exports.ApplicationFeature = void 0;
    (function (ApplicationFeature) {
        ApplicationFeature["NETZERO_ADMIN_FEATURE"] = "NETZERO_ADMIN_FEATURE";
        ApplicationFeature["ADMIN_FEATURE"] = "ADMIN_FEATURE";
        ApplicationFeature["NETZERO_FEATURE"] = "NETZERO_FEATURE";
        ApplicationFeature["ENERGY_FEATURE"] = "ENERGY_FEATURE";
        ApplicationFeature["WATER_FEATURE"] = "WATER_FEATURE";
        ApplicationFeature["ENVIRO_FEATURE"] = "ENVIRO_FEATURE";
        ApplicationFeature["CONNECT_FEATURE"] = "CONNECT_FEATURE";
        ApplicationFeature["OFFSET_FEATURE"] = "OFFSET_FEATURE";
        ApplicationFeature["SUPPLIER_FEATURE"] = "SUPPLIER_FEATURE";
        ApplicationFeature["EMPLOYEE_FEATURE"] = "EMPLOYEE_FEATURE";
    })(exports.ApplicationFeature || (exports.ApplicationFeature = {}));

    var ADMIN_FEATURE_CONSTANT = {
        BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
        PRODUCT: [[applicationService.ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ORGANIZATION: [[applicationService.ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE2'],
        USER: [[applicationService.ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE']
    };

    var CARBON_FEATURE_CONSTANT = {
        BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
        DASHBOARD: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        NETZERO_DASHBOARD: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_FOOTPRINT_DASHBOARD: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        WATER_FOOTPRINT_DASHBOARD: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_FOOTPRINT_DASHBOARD: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        WASTE_FOOTPRINT_DASHBOARD: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENVIRO_FOOTPRINT_DASHBOARD: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        REMINDER: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_MAIN_MENU: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_LEDGER: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        SCOPE_ONE: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'SCOPE_ONE'],
        SCOPE_TWO: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'SCOPE_TWO'],
        SCOPE_THREE: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'SCOPE_THREE'],
        STATIONARY_COMBUSTION: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        MOBILE_COMBUSTION: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        EQUIPMENT_MAINTENANCE: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        OTHER_FUGITIVE_SOURCE: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PURCHASE_ELECTRICITY: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PURCHASE_HEAT_STEAM: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PURCHASE_COOLING: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        SCOPE_THREE_SPEND_BASED: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_SETTING: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_BOUNDARY_QUESTION: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_ACTIVITY_TYPE: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_CALCULATION_PREFERENCE: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_GHG_BASE_YEAR: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_FACTOR_DATABASE: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_ACTIVITY_FORM: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_API_KEY: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CARBON_ACTIVITY_CONFIGURATOR: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        TARGET: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        SCIENCE_BASED_TARGET: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        SOURCE_AND_CONSUMER: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ASSET_SAC: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        SUPPLIER_SAC: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        VEHICLE_SAC: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        REFRIGERATION_AND_FIRE_SUPPRESSION_EQUIPMENT_SAC: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        OTHER_FUGITIVE_SAC: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        EMPLOYEE_SAC: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        API_INTEGRATION: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        WATER_MAIN_MENU: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_MAIN_MENU: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        WASTE_MAIN_MENU: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENVIRO_MAIN_MENU: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        TARGETING_AND_PLANNING: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        SBTI: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        FORECASTING: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ANOMALY_DETECTOR: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        REPORT: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        GLOBAL_FRAMEWORK: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
        BRSR: [[applicationService.ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    };

    var CONNECT_FEATURE_CONSTANT = {
        BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
        DEVICE: [[applicationService.ApplicationKeyID.CONNECT_KEY_ID], 'BY_DEFAULT_FEATURE'],
    };

    var ENERGY_FEATURE_CONSTANT = {
        BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
        //HOME
        HOME: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //DASHBOARD
        DASHBOARDS: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        FACILITY_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENTITY_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        TEMPERATURE_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PRESSURE_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_ACCOUNTING_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_DISTRIBUTION_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_COMPARISON_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_METER_DATA_DASHBOARD: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //REPORT
        REPORTS: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        AMBIENT_TEMPERATURE_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        TEMPERATURE_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PRESSURE_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        HUMIDITY_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PARAMETER_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        RAW_DATA_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        DATA_AVAILABILITY_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_USAGE_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_USAGE_BY_FACILITY_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_USAGE_BY_SOURCE_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_USAGE_BY_LOAD_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_METER_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_COST_ANALYSIS_REPORT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //ALARM_ESCALATION
        ALARM_ESCALATION: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CONFIGURED_ALARM: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        GENERATED_ALARM: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //ANALYTICS AND INSIGHTS
        ANALTICS_INSIGHTS: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CONSUMPTION_ANALYSIS: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //TARGETING AND PLANNING
        TARGETING_PLANNING: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENERGY_BUDGET: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //LAYOUT: Settings Sidebar
        LAYOUT: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        LAYOUT_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        LAYOUT_VIEW: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        LAYOUT_ENTITY_TREE_VIEW: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //BUDGETING AND PLANNING: Setting Sidebar
        BUDGET: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        BUDGET_PREFERENCE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //ALERT RULE
        ALERT_RULE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS_CREATE_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS_UPDATE_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS_ESCALATION_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC_CREATE_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC_UPDATE_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC_ESCALATION_PAGE: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE']
    };

    var WATER_FEATURE_CONSTANT = {
        BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
        //HOME
        HOME: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //DASHBOARD
        DASHBOARDS: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        FACILITY_DASHBOARD: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        ENTITY_DASHBOARD: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CONSUMPTION_DASHBOARD: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        METER_DATA_DASHBOARD: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //REPORT
        REPORTS: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PARAMETER_REPORT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        RAW_DATA_REPORT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        DATA_AVAILABILITY_REPORT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CONSUMPTION_BREAKUP_REPORT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        USAGE_ACROSS_FACILITY_REPORT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        WATER_METER_REPORT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        DERIVED_PARAMETER_REPORT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CGWA_REPORT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //ALARM_ESCALATION
        ALARM_ESCALATION: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CONFIGURED_ALARM: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        GENERATED_ALARM: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //ANALYTICS AND INSIGHTS
        ANALTICS_INSIGHTS: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        CONSUMPTION_BREAKUP: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //LAYOUT: Settings Sidebar
        LAYOUT: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        LAYOUT_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        LAYOUT_VIEW: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        LAYOUT_ENTITY_TREE_VIEW: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //BUDGETING AND PLANNING: Setting Sidebar
        BUDGET: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        BUDGET_PREFERENCE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        //ALERT RULE
        ALERT_RULE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS_CREATE_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS_UPDATE_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        INSTANTANEOUS_ESCALATION_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC_CREATE_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC_UPDATE_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
        PERIODIC_ESCALATION_PAGE: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE']
    };

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

    var FeatureController = /** @class */ (function () {
        function FeatureController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        FeatureController.prototype.getFeatureByOrgID = function (orgID) {
            return this.http.get(this.environment.ORGANIZATION_API_URL + "organizations/" + orgID + "/features");
            // return this.http.get(`${this.environment.MOCK_SERVER}feature`);
        };
        return FeatureController;
    }());
    FeatureController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FeatureController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureController, decorators: [{
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

    var FeatureService = /** @class */ (function () {
        function FeatureService(featureController) {
            this.featureController = featureController;
        }
        FeatureService.prototype.getFeatureByOrgID = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var feature, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.featureController.getFeatureByOrgID(orgID).toPromise()];
                        case 1:
                            feature = _a.sent();
                            return [2 /*return*/, feature];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return FeatureService;
    }());
    FeatureService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureService, deps: [{ token: FeatureController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FeatureService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: FeatureController }]; } });
    var IsFeatureAvailable = /** @class */ (function () {
        function IsFeatureAvailable(storageService) {
            this.storageService = storageService;
            this.netzeroAdminFeature = [];
            this.adminFeature = [];
            this.netzeroFeature = [];
            this.energyFeature = [];
            this.waterFeature = [];
            this.enviroFeature = [];
            this.connectFeature = [];
            this.offsetFeature = [];
            this.supplierFeature = [];
            this.employeeFeature = [];
            this.netzeroAdminFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.NETZERO_ADMIN_FEATURE));
            this.adminFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.ADMIN_FEATURE));
            this.netzeroFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.NETZERO_FEATURE));
            this.energyFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.ENERGY_FEATURE));
            this.waterFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.WATER_FEATURE));
            this.enviroFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.ENVIRO_FEATURE));
            this.connectFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.CONNECT_FEATURE));
            this.offsetFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.OFFSET_FEATURE));
            this.supplierFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.SUPPLIER_FEATURE));
            this.employeeFeature = JSON.parse(this.storageService.getStorage(exports.ApplicationFeature.EMPLOYEE_FEATURE));
        }
        IsFeatureAvailable.prototype.isFeatureAvailable = function (featureKeyIDP) {
            var e_1, _a;
            var storageFeature = [];
            var paramFeature;
            if (featureKeyIDP) {
                paramFeature = JSON.stringify(featureKeyIDP[1]).slice(1, -1);
                if (paramFeature == 'BY_DEFAULT_FEATURE') {
                    return true;
                }
                try {
                    for (var _b = __values(featureKeyIDP[0] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var featureKeyIDPs = _c.value;
                        switch (featureKeyIDPs) {
                            case applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                                storageFeature = this.netzeroAdminFeature;
                                break;
                            case applicationService.ApplicationKeyID.ADMIN_KEY_ID:
                                storageFeature = this.adminFeature;
                                break;
                            case applicationService.ApplicationKeyID.NETZERO_KEY_ID:
                                storageFeature = this.netzeroFeature;
                                break;
                            case applicationService.ApplicationKeyID.ENERGY_KEY_ID:
                                storageFeature = this.energyFeature;
                                break;
                            case applicationService.ApplicationKeyID.WATER_KEY_ID:
                                storageFeature = this.waterFeature;
                                break;
                            case applicationService.ApplicationKeyID.ENVIRO_KEY_ID:
                                storageFeature = this.enviroFeature;
                                break;
                            case applicationService.ApplicationKeyID.CONNECT_KEY_ID:
                                storageFeature = this.connectFeature;
                                break;
                            case applicationService.ApplicationKeyID.OFFSET_KEY_ID:
                                storageFeature = this.offsetFeature;
                                break;
                            case applicationService.ApplicationKeyID.SUPPLIER_KEY_ID:
                                storageFeature = this.supplierFeature;
                                break;
                            case applicationService.ApplicationKeyID.EMPLOYEE_KEY_ID:
                                storageFeature = this.employeeFeature;
                                break;
                            default:
                                storageFeature = [];
                                break;
                        }
                        var matchingFeature = storageFeature.find(function (f) { return f['keyID'] == paramFeature; });
                        if (matchingFeature && matchingFeature['count'] > 0) {
                            return true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return false;
        };
        return IsFeatureAvailable;
    }());
    IsFeatureAvailable.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsFeatureAvailable, deps: [{ token: i2__namespace.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    IsFeatureAvailable.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsFeatureAvailable, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsFeatureAvailable, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.StorageService }]; } });

    var FeatureGuard = /** @class */ (function () {
        function FeatureGuard(router, isFeatureAvailable) {
            this.router = router;
            this.isFeatureAvailable = isFeatureAvailable;
        }
        FeatureGuard.prototype.canActivate = function (next) {
            var featureGuard = false;
            var featureKeyID = next.data.featureKeyID;
            featureGuard = this.isFeatureAvailable.isFeatureAvailable(featureKeyID);
            if (featureGuard) {
                return true;
            }
            else {
                return this.router.createUrlTree(['/feature-not-available']);
            }
        };
        return FeatureGuard;
    }());
    FeatureGuard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureGuard, deps: [{ token: i1__namespace$1.Router }, { token: IsFeatureAvailable }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FeatureGuard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureGuard, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureGuard, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: IsFeatureAvailable }]; } });

    var FeatureDirective = /** @class */ (function () {
        function FeatureDirective(_er, renderer, isFeatureAvailable) {
            this._er = _er;
            this.renderer = renderer;
            this.isFeatureAvailable = isFeatureAvailable;
        }
        Object.defineProperty(FeatureDirective.prototype, "isDisableFeature", {
            set: function (featureKeyID) {
                if (!this.isFeatureAvailable.isFeatureAvailable(featureKeyID)) {
                    // this.renderer.setAttribute(this._er.nativeElement, 'disabled', 'true');
                    this.renderer.setProperty(this._er.nativeElement, 'disabled', true);
                    // this._er.nativeElement.disabled = true;
                }
                // else {
                //     this.renderer.setProperty(this._er.nativeElement, 'disabled', false);
                // }
            },
            enumerable: false,
            configurable: true
        });
        return FeatureDirective;
    }());
    FeatureDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirective, deps: [{ token: i0__namespace.ElementRef }, { token: i0__namespace.Renderer2 }, { token: IsFeatureAvailable }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    FeatureDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: FeatureDirective, selector: "[isDisableFeature]", inputs: { isDisableFeature: "isDisableFeature" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[isDisableFeature]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }, { type: IsFeatureAvailable }]; }, propDecorators: { isDisableFeature: [{
                    type: i0.Input
                }] } });
    var FeatureDirectiveModule = /** @class */ (function () {
        function FeatureDirectiveModule() {
        }
        return FeatureDirectiveModule;
    }());
    FeatureDirectiveModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirectiveModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FeatureDirectiveModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirectiveModule, declarations: [FeatureDirective], exports: [FeatureDirective] });
    FeatureDirectiveModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirectiveModule });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirectiveModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [FeatureDirective],
                        exports: [FeatureDirective]
                    }]
            }] });
    var FeatureDirective2 = /** @class */ (function () {
        function FeatureDirective2(templateRef, viewContainer, isFeatureAvailable) {
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.isFeatureAvailable = isFeatureAvailable;
        }
        Object.defineProperty(FeatureDirective2.prototype, "isRenderFeature", {
            set: function (featureKeyID) {
                var renderFeature = false;
                renderFeature = featureKeyID ? this.isFeatureAvailable.isFeatureAvailable(featureKeyID) : true;
                if (renderFeature) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
                else {
                    this.viewContainer.clear();
                }
            },
            enumerable: false,
            configurable: true
        });
        return FeatureDirective2;
    }());
    FeatureDirective2.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirective2, deps: [{ token: i0__namespace.TemplateRef }, { token: i0__namespace.ViewContainerRef }, { token: IsFeatureAvailable }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    FeatureDirective2.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: FeatureDirective2, selector: "[isRenderFeature]", inputs: { isRenderFeature: "isRenderFeature" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirective2, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[isRenderFeature]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.TemplateRef }, { type: i0__namespace.ViewContainerRef }, { type: IsFeatureAvailable }]; }, propDecorators: { isRenderFeature: [{
                    type: i0.Input
                }] } });
    var FeatureDirectiveModule2 = /** @class */ (function () {
        function FeatureDirectiveModule2() {
        }
        return FeatureDirectiveModule2;
    }());
    FeatureDirectiveModule2.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirectiveModule2, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FeatureDirectiveModule2.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirectiveModule2, declarations: [FeatureDirective2], exports: [FeatureDirective2] });
    FeatureDirectiveModule2.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirectiveModule2 });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FeatureDirectiveModule2, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [FeatureDirective2],
                        exports: [FeatureDirective2]
                    }]
            }] });

    /*
     * Public API Surface of feature-service
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ADMIN_FEATURE_CONSTANT = ADMIN_FEATURE_CONSTANT;
    exports.CARBON_FEATURE_CONSTANT = CARBON_FEATURE_CONSTANT;
    exports.CONNECT_FEATURE_CONSTANT = CONNECT_FEATURE_CONSTANT;
    exports.ENERGY_FEATURE_CONSTANT = ENERGY_FEATURE_CONSTANT;
    exports.FeatureDirective = FeatureDirective;
    exports.FeatureDirective2 = FeatureDirective2;
    exports.FeatureDirectiveModule = FeatureDirectiveModule;
    exports.FeatureDirectiveModule2 = FeatureDirectiveModule2;
    exports.FeatureGuard = FeatureGuard;
    exports.FeatureJson = FeatureJson;
    exports.FeatureService = FeatureService;
    exports.FeatureServiceComponent = FeatureServiceComponent;
    exports.FeatureServiceModule = FeatureServiceModule;
    exports.FeatureServiceService = FeatureServiceService;
    exports.IsFeatureAvailable = IsFeatureAvailable;
    exports.WATER_FEATURE_CONSTANT = WATER_FEATURE_CONSTANT;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-feature-service.umd.js.map
