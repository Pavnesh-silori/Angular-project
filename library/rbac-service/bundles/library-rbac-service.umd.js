(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@library/application-service'), require('@angular/common/http'), require('@library/storage-service'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@library/rbac-service', ['exports', '@angular/core', '@library/application-service', '@angular/common/http', '@library/storage-service', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["rbac-service"] = {}), global.ng.core, global.applicationService, global.ng.common.http, global.i2, global.ng.router));
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

    var RbacServiceService = /** @class */ (function () {
        function RbacServiceService() {
        }
        return RbacServiceService;
    }());
    RbacServiceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacServiceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var RbacServiceComponent = /** @class */ (function () {
        function RbacServiceComponent() {
        }
        RbacServiceComponent.prototype.ngOnInit = function () {
        };
        return RbacServiceComponent;
    }());
    RbacServiceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    RbacServiceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacServiceComponent, selector: "lib-rbac-service", ngImport: i0__namespace, template: "\n    <p>\n      rbac-service works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-rbac-service',
                        template: "\n    <p>\n      rbac-service works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var RbacServiceModule = /** @class */ (function () {
        function RbacServiceModule() {
        }
        RbacServiceModule.forRoot = function (environment) {
            return {
                ngModule: RbacServiceModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return RbacServiceModule;
    }());
    RbacServiceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RbacServiceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceModule, declarations: [RbacServiceComponent], exports: [RbacServiceComponent] });
    RbacServiceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacServiceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RbacServiceComponent
                        ],
                        imports: [],
                        exports: [
                            RbacServiceComponent
                        ]
                    }]
            }] });

    var RBACJson = /** @class */ (function () {
        function RBACJson() {
        }
        return RBACJson;
    }());
    RBACJson.noAuthorization = {
        body: "You don't have authorization."
    };

    exports.ApplicationResourcePermission = void 0;
    (function (ApplicationResourcePermission) {
        ApplicationResourcePermission["NETZERO_ADMIN_RESOURCE_PERMISSION"] = "NETZERO_ADMIN_RESOURCE_PERMISSION";
        ApplicationResourcePermission["ADMIN_RESOURCE_PERMISSION"] = "ADMIN_RESOURCE_PERMISSION";
        ApplicationResourcePermission["NETZERO_RESOURCE_PERMISSION"] = "NETZERO_RESOURCE_PERMISSION";
        ApplicationResourcePermission["ENERGY_RESOURCE_PERMISSION"] = "ENERGY_RESOURCE_PERMISSION";
        ApplicationResourcePermission["WATER_RESOURCE_PERMISSION"] = "WATER_RESOURCE_PERMISSION";
        ApplicationResourcePermission["ENVIRO_RESOURCE_PERMISSION"] = "ENVIRO_RESOURCE_PERMISSION";
        ApplicationResourcePermission["CONNECT_RESOURCE_PERMISSION"] = "CONNECT_RESOURCE_PERMISSION";
        ApplicationResourcePermission["OFFSET_RESOURCE_PERMISSION"] = "OFFSET_RESOURCE_PERMISSION";
        ApplicationResourcePermission["SUPPLIER_RESOURCE_PERMISSION"] = "SUPPLIER_RESOURCE_PERMISSION";
        ApplicationResourcePermission["EMPLOYEE_RESOURCE_PERMISSION"] = "EMPLOYEE_RESOURCE_PERMISSION";
    })(exports.ApplicationResourcePermission || (exports.ApplicationResourcePermission = {}));

    var ADMIN_RBAC_CONSTANT = {
        BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
        PRODUCT_READ: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'PRODUCT', 'BY_DEFAULT_PERMISSION'],
        ORGANIZATION_CREATE: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'ORGANIZATION', 'BY_DEFAULT_PERMISSION'],
        ORGANIZATION_READ: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'ORGANIZATION', 'BY_DEFAULT_PERMISSION'],
        ORGANIZATION_UPDATE: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'ORGANIZATION', 'BY_DEFAULT_PERMISSION'],
        ORGANIZATION_DELETE: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'ORGANIZATION', 'BY_DEFAULT_PERMISSION'],
        COMPLIANCE_READ: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'COMPLIANCE', 'BY_DEFAULT_PERMISSION'],
        FACILITY_PAGE_READ: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'FACILITY_PAGE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_PAGE_READ: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'REGULATOR_PAGE', 'BY_DEFAULT_PERMISSION'],
        FACILITY_CONFIG_PAGE_READ: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'FACILITY_CONFIG_PAGE', 'BY_DEFAULT_PERMISSION'],
        ASSET_CONFIG_PAGE_READ: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'ASSET_CONFIG_PAGE', 'BY_DEFAULT_PERMISSION'],
        DEVICE_CONFIG_PAGE_READ: [applicationService.ApplicationKeyID.ADMIN_KEY_ID, 'DEVICE_CONFIG_PAGE', 'BY_DEFAULT_PERMISSION']
    };

    var LLADMIN_RBAC_CONSTANT = {
        BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
        COMPLIANCE_READ: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'COMPLIANCE_READ', 'BY_DEFAULT_PERMISSION'],
        COMPLIANCE_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'COMPLIANCE_PAGE', 'BY_DEFAULT_PERMISSION'],
        COMPLIANCE_CREATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'COMPLIANCE_CREATE', 'BY_DEFAULT_PERMISSION'],
        COMPLIANCE_UPDATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'COMPLIANCE_UPDATE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_READ: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_READ', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PAGE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_CREATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CREATE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_UPDATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_UPDATE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_VIEW: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_VIEW', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_CONFIGURATION_READ: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_READ', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_CONFIGURATION_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_PAGE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_CONFIGURATION_CREATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_CREATE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_CONFIGURATION_UPDATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_UPDATE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_CONFIGURATION_VIEW: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_VIEW', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_PARAMETER_CONFIGURATION_READ: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PARAMETER_CONFIGURATION_READ', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_PARAMETER_CONFIGURATION_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PARAMETER_CONFIGURATION_PAGE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_PARAMETER_CONFIGURATION_CREATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PARAMETER_CONFIGURATION_CREATE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_PARAMETER_CONFIGURATION_UPDATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PARAMETER_CONFIGURATION_UPDATE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_USER_READ: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_USER_READ', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_USER_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_USER_PAGE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_USER_CREATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_USER_CREATE', 'BY_DEFAULT_PERMISSION'],
        REGULATOR_USER_UPDATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_USER_UPDATE', 'BY_DEFAULT_PERMISSION'],
        STANDARD_CONFIGURATION_READ: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'STANDARD_CONFIGURATION_READ', 'BY_DEFAULT_PERMISSION'],
        MAKE_READ: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'MAKE_READ', 'BY_DEFAULT_PERMISSION'],
        MAKE_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'MAKE_PAGE', 'BY_DEFAULT_PERMISSION'],
        MODEL_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'MODEL_PAGE', 'BY_DEFAULT_PERMISSION'],
        REMOTE_CALIBRATION_READ: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_READ', 'BY_DEFAULT_PERMISSION'],
        REMOTE_CALIBRATION_ANALYZER_VARIANT: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT', 'BY_DEFAULT_PERMISSION'],
        REMOTE_CALIBRATION_ANALYZER_VARIANT_STEP_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT_PAGE', 'BY_DEFAULT_PERMISSION'],
        REMOTE_CALIBRATION_ANALYZER_VARIANT_CREATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT_CREATE', 'BY_DEFAULT_PERMISSION'],
        REMOTE_CALIBRATION_ANALYZER_VARIANT_UPDATE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        REMOTE_CALIBRATION_ANALYZER_VARIANT_VIEW_PAGE: [applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT_VIEW_PAGE', 'BY_DEFAULT_PERMISSION'],
    };

    var CARBON_RBAC_CONSTANT = {
        BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
        TARGET_READ: [applicationService.ApplicationKeyID.NETZERO_KEY_ID, 'TARGET', 'BY_DEFAULT_PERMISSION']
    };

    var CONNECT_RBAC_CONSTANT = {
        BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
        DEVICE_READ: [applicationService.ApplicationKeyID.CONNECT_KEY_ID, 'DEVICE', 'BY_DEFAULT_PERMISSION'],
        //ALERT
        OFFLINE_ALERT_READ: [applicationService.ApplicationKeyID.CONNECT_KEY_ID, 'OFFLINE_ALERT', 'BY_DEFAULT_PERMISSION'],
        OFFLINE_ALERT_PAGE_READ: [applicationService.ApplicationKeyID.CONNECT_KEY_ID, 'OFFLINE_ALERT_PAGE', 'BY_DEFAULT_PERMISSION'],
        //ALARM_ESCALATION
        ALARM_ESCALATION_READ: [applicationService.ApplicationKeyID.CONNECT_KEY_ID, 'ALARM_ESCALATION', 'BY_DEFAULT_PERMISSION'],
        CONFIGURED_ALARM_READ: [applicationService.ApplicationKeyID.CONNECT_KEY_ID, 'CONFIGURED_ALARM', 'BY_DEFAULT_PERMISSION'],
        GENERATED_ALARM_READ: [applicationService.ApplicationKeyID.CONNECT_KEY_ID, 'GENERATED_ALARM', 'BY_DEFAULT_PERMISSION']
    };

    var ENERGY_RBAC_CONSTANT = {
        BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
        //HOME
        HOME_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'HOME', 'BY_DEFAULT_PERMISSION'],
        //DASHBOARD
        DASHBOARDS_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'DASHBOARDS', 'BY_DEFAULT_PERMISSION'],
        FACILITY_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'FACILITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        FACILITY_SUMMARY_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'FACILITY_SUMMARY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ENTITY_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENTITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ENERGY_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        TEMPERATURE_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'TEMPERATURE_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        PRESSURE_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PRESSURE_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ENERGY_ACCOUNTING_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_ACCOUNTING_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ENERGY_DISTRIBUTION_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_DISTRIBUTION_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ENERGY_COMPARISON_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_COMPARISON_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ENERGY_METER_DATA_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_METER_DATA_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        //REPORT
        REPORTS_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'REPORTS', 'BY_DEFAULT_PERMISSION'],
        AMBIENT_TEMPERATURE_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'AMBIENT_TEMPERATURE_REPORT', 'BY_DEFAULT_PERMISSION'],
        TEMPERATURE_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'TEMPERATURE_REPORT', 'BY_DEFAULT_PERMISSION'],
        PRESSURE_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PRESSURE_REPORT', 'BY_DEFAULT_PERMISSION'],
        HUMIDITY_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'HUMIDITY_REPORT', 'BY_DEFAULT_PERMISSION'],
        PARAMETER_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PARAMETER_REPORT', 'BY_DEFAULT_PERMISSION'],
        RAW_DATA_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'RAW_DATA_REPORT', 'BY_DEFAULT_PERMISSION'],
        ENERGY_SOURCING_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_SOURCING_REPORT', 'BY_DEFAULT_PERMISSION'],
        ENERGY_BREAKUP_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_BREAKUP_REPORT', 'BY_DEFAULT_PERMISSION'],
        ENERGY_METER_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_METER_REPORT', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_REPORT', 'BY_DEFAULT_PERMISSION'],
        ENERGY_COST_ANALYSIS_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_COST_ANALYSIS_REPORT', 'BY_DEFAULT_PERMISSION'],
        //SCHEDULE_REPORT
        SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        SCHEDULE_REPORT_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'SCHEDULE_REPORT_PAGE', 'BY_DEFAULT_PERMISSION'],
        ENERGY_SOURCING_SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_SOURCING_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        ENERGY_BREAKUP_SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_BREAKUP_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        ENERGY_CONSUMPTION_SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_CONSUMPTION_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        TEMPERATURE_SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'TEMPERATURE_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        ENERGY_SOURCING_SCHEDULE_REPORT_UPDATE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_SOURCING_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        ENERGY_BREAKUP_SCHEDULE_REPORT_UPDATE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_BREAKUP_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        ENERGY_CONSUMPTION_SCHEDULE_REPORT_UPDATE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_CONSUMPTION_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        TEMPERATURE_SCHEDULE_REPORT_UPDATE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'TEMPERATURE_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        //ALARM_ESCALATION
        ALARM_ESCALATION_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ALARM_ESCALATION', 'BY_DEFAULT_PERMISSION'],
        CONFIGURED_ALARM_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'CONFIGURED_ALARM', 'BY_DEFAULT_PERMISSION'],
        GENERATED_ALARM_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'GENERATED_ALARM', 'BY_DEFAULT_PERMISSION'],
        //ANALYTICS AND INSIGHTS
        ANALTICS_INSIGHTS_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ANALTICS_INSIGHTS', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_ANALYSIS_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_ANALYSIS', 'BY_DEFAULT_PERMISSION'],
        AVOIDED_EMISSION_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'AVOIDED_EMISSION', 'BY_DEFAULT_PERMISSION'],
        //TARGETING AND PLANNING
        TARGETING_PLANNING_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'TARGETING_PLANNING', 'BY_DEFAULT_PERMISSION'],
        ENERGY_BUDGET_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_BUDGET', 'BY_DEFAULT_PERMISSION'],
        //LAYOUT: Settings Sidebar
        LAYOUT_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'LAYOUT', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'LAYOUT_PAGE', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_CHART_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'LAYOUT_CHART', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_LIST_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'LAYOUT_LIST', 'BY_DEFAULT_PERMISSION'],
        //DEVICE MAPPING
        DEVICE_MAPPING_ADD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'DEVICE_MAPPING_ADD', 'BY_DEFAULT_PERMISSION'],
        DEVICE_MAPPING_VIEW_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'DEVICE_MAPPING_VIEW', 'BY_DEFAULT_PERMISSION'],
        //BUDGETING AND PLANNING: Setting Sidebar
        BUDGET_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BUDGET', 'BY_DEFAULT_PERMISSION'],
        BUDGET_PREFERENCE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'BUDGET_PREFERENCE', 'BY_DEFAULT_PERMISSION'],
        //ALERT RULE
        ALERT_RULE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'ALERT_RULE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_CREATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_UPDATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_ESCALATION_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_CREATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_UPDATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_ESCALATION_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
        //PREFERENCE
        PREFERENCE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'PREFERENCE', 'BY_DEFAULT_PERMISSION'],
        SOURCE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'SOURCE', 'BY_DEFAULT_PERMISSION'],
        SOURCE_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'SOURCE_PAGE', 'BY_DEFAULT_PERMISSION'],
        CONSUMER_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMER', 'BY_DEFAULT_PERMISSION'],
        CONSUMER_PAGE_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMER_PAGE', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_PARAMETER_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_PARAMETER', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_PARAMETER_ADD_READ: [[applicationService.ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_PARAMETER_ADD', 'BY_DEFAULT_PERMISSION']
    };

    var WATER_RBAC_CONSTANT = {
        BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
        //HOME
        HOME_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'HOME', 'BY_DEFAULT_PERMISSION'],
        //DASHBOARD
        DASHBOARDS_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'DASHBOARDS', 'BY_DEFAULT_PERMISSION'],
        FACILITY_DASHBOARD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'FACILITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ENTITY_DASHBOARD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'ENTITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_DASHBOARD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        METER_DATA_DASHBOARD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'METER_DATA_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        SAVED_WATER_DASHBOARD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'SAVED_WATER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ALL_PARAMETER_DASHBOARD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'ALL_PARAMETER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        SINGLE_PARAMETER_DASHBOARD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'SINGLE_PARAMETER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        //REPORT
        REPORTS_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'REPORTS', 'BY_DEFAULT_PERMISSION'],
        PARAMETER_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'PARAMETER_REPORT', 'BY_DEFAULT_PERMISSION'],
        RAW_DATA_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'RAW_DATA_REPORT', 'BY_DEFAULT_PERMISSION'],
        DATA_AVAILABILITY_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'DATA_AVAILABILITY_REPORT', 'BY_DEFAULT_PERMISSION'],
        WATER_SOURCING_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_SOURCING_REPORT', 'BY_DEFAULT_PERMISSION'],
        WATER_BREAKUP_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_BREAKUP_REPORT', 'BY_DEFAULT_PERMISSION'],
        WATER_METER_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_METER_REPORT', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_REPORT', 'BY_DEFAULT_PERMISSION'],
        CGWA_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CGWA_REPORT', 'BY_DEFAULT_PERMISSION'],
        //SCHEDULE_REPORT
        SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        SCHEDULE_REPORT_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'SCHEDULE_REPORT_PAGE', 'BY_DEFAULT_PERMISSION'],
        WATER_SOURCING_SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_SOURCING_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        WATER_BREAKUP_SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_BREAKUP_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        WATER_CONSUMPTION_SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_CONSUMPTION_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        CGWA_SCHEDULE_REPORT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CGWA_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
        WATER_SOURCING_SCHEDULE_REPORT_UPDATE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_SOURCING_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        WATER_BREAKUP_SCHEDULE_REPORT_UPDATE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_BREAKUP_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        WATER_CONSUMPTION_SCHEDULE_REPORT_UPDATE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'WATER_CONSUMPTION_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        CGWA_SCHEDULE_REPORT_UPDATE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CGWA_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
        //ALARM_ESCALATION
        ALARM_ESCALATION_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'ALARM_ESCALATION', 'BY_DEFAULT_PERMISSION'],
        CONFIGURED_ALARM_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CONFIGURED_ALARM', 'BY_DEFAULT_PERMISSION'],
        GENERATED_ALARM_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'GENERATED_ALARM', 'BY_DEFAULT_PERMISSION'],
        //ANALYTICS AND INSIGHTS
        ANALTICS_INSIGHTS_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'ANALTICS_INSIGHTS', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_BREAKUP_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_BREAKUP', 'BY_DEFAULT_PERMISSION'],
        //LAYOUT: Settings Sidebar
        LAYOUT_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'LAYOUT', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'LAYOUT_PAGE', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_CHART_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'LAYOUT_CHART', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_LIST_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'LAYOUT_LIST', 'BY_DEFAULT_PERMISSION'],
        //DEVICE MAPPING
        DEVICE_MAPPING_ADD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'DEVICE_MAPPING_ADD', 'BY_DEFAULT_PERMISSION'],
        DEVICE_MAPPING_VIEW_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'DEVICE_MAPPING_VIEW', 'BY_DEFAULT_PERMISSION'],
        //BUDGETING AND PLANNING: Setting Sidebar
        BUDGET_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BUDGET', 'BY_DEFAULT_PERMISSION'],
        BUDGET_PREFERENCE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'BUDGET_PREFERENCE', 'BY_DEFAULT_PERMISSION'],
        //ALERT RULE
        ALERT_RULE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'ALERT_RULE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_CREATE_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_UPDATE_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_ESCALATION_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'PERIODIC', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'PERIODIC_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_CREATE_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'PERIODIC_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_UPDATE_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'PERIODIC_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_ESCALATION_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'PERIODIC_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
        //PREFERENCE
        PREFERENCE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'PREFERENCE', 'BY_DEFAULT_PERMISSION'],
        SOURCE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'SOURCE', 'BY_DEFAULT_PERMISSION'],
        SOURCE_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'SOURCE_PAGE', 'BY_DEFAULT_PERMISSION'],
        CONSUMER_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CONSUMER', 'BY_DEFAULT_PERMISSION'],
        CONSUMER_PAGE_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CONSUMER_PAGE', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_PARAMETER_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_PARAMETER', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_PARAMETER_ADD_READ: [[applicationService.ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_PARAMETER_ADD', 'BY_DEFAULT_PERMISSION']
    };

    var ENVIRO_RBAC_CONSTANT = {
        BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
        //HOME
        HOME_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'HOME', 'BY_DEFAULT_PERMISSION'],
        //DASHBOARD
        DASHBOARDS_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'DASHBOARDS', 'BY_DEFAULT_PERMISSION'],
        FACILITY_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'FACILITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ENTITY_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'ENTITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        CONSUMPTION_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CONSUMPTION_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        METER_DATA_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'METER_DATA_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        ALL_PARAMETER_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'ALL_PARAMETER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        SINGLE_PARAMETER_DASHBOARD_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'SINGLE_PARAMETER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
        //REPORT
        REPORTS_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'REPORTS', 'BY_DEFAULT_PERMISSION'],
        PARAMETER_REPORT_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'PARAMETER_REPORT', 'BY_DEFAULT_PERMISSION'],
        RAW_DATA_REPORT_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'RAW_DATA_REPORT', 'BY_DEFAULT_PERMISSION'],
        DATA_AVAILABILITY_REPORT_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'DATA_AVAILABILITY_REPORT', 'BY_DEFAULT_PERMISSION'],
        //ALARM_ESCALATION
        ALARM_ESCALATION_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'ALARM_ESCALATION', 'BY_DEFAULT_PERMISSION'],
        CONFIGURED_ALARM_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CONFIGURED_ALARM', 'BY_DEFAULT_PERMISSION'],
        GENERATED_ALARM_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'GENERATED_ALARM', 'BY_DEFAULT_PERMISSION'],
        //LAYOUT: Settings Sidebar
        LAYOUT_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'LAYOUT', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'LAYOUT_PAGE', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_CHART_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'LAYOUT_CHART', 'BY_DEFAULT_PERMISSION'],
        LAYOUT_LIST_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'LAYOUT_LIST', 'BY_DEFAULT_PERMISSION'],
        //DEVICE MAPPING
        DEVICE_MAPPING_ADD_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'DEVICE_MAPPING_ADD', 'BY_DEFAULT_PERMISSION'],
        DEVICE_MAPPING_VIEW_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'DEVICE_MAPPING_VIEW', 'BY_DEFAULT_PERMISSION'],
        //ALERT RULE
        ALERT_RULE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'ALERT_RULE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_CREATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_UPDATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        INSTANTANEOUS_ESCALATION_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_CREATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_UPDATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        PERIODIC_ESCALATION_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
        CONSTANT_DATA_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CONSTANT_DATA', 'BY_DEFAULT_PERMISSION'],
        CONSTANT_DATA_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CONSTANT_DATA_PAGE', 'BY_DEFAULT_PERMISSION'],
        CONSTANT_DATA_CREATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CONSTANT_DATA_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        CONSTANT_DATA_UPDATE_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CONSTANT_DATA_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
        //COMPLIANCE
        COMPLIANCE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'COMPLIANCE', 'BY_DEFAULT_PERMISSION'],
        CAMERA_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CAMERA', 'BY_DEFAULT_PERMISSION'],
        CAMERA_PAGE_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CAMERA_PAGE', 'BY_DEFAULT_PERMISSION'],
        CAMERA_VIEW_READ: [[applicationService.ApplicationKeyID.ENVIRO_KEY_ID], 'CAMERA_VIEW', 'BY_DEFAULT_PERMISSION'],
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

    var RBACController = /** @class */ (function () {
        function RBACController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        RBACController.prototype.getResourcePermissionByOrgIDAndUserID = function (orgID, userID) {
            return this.http.get(this.environment.ORGANIZATION_API_URL + "organizations/" + orgID + "/users/" + userID + "/resource-permissions");
            // return this.http.get(`${this.environment.MOCK_SERVER}resourcePermission`);
        };
        return RBACController;
    }());
    RBACController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RBACController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACController, decorators: [{
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

    var RBACService = /** @class */ (function () {
        function RBACService(rBACController) {
            this.rBACController = rBACController;
        }
        RBACService.prototype.getResourcePermissionByOrgIDAndUserID = function (orgID, userID) {
            return __awaiter(this, void 0, void 0, function () {
                var resourcePermission, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.rBACController.getResourcePermissionByOrgIDAndUserID(orgID, userID).toPromise()];
                        case 1:
                            resourcePermission = _a.sent();
                            return [2 /*return*/, resourcePermission];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return RBACService;
    }());
    RBACService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACService, deps: [{ token: RBACController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RBACService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: RBACController }]; } });
    var IsResourcePermission = /** @class */ (function () {
        function IsResourcePermission(storageService) {
            this.storageService = storageService;
            this.netzeroAdminResourcePermission = [];
            this.adminResourcePermission = [];
            this.netzeroResourcePermission = [];
            this.energyResourcePermission = [];
            this.waterResourcePermission = [];
            this.enviroResourcePermission = [];
            this.connectResourcePermission = [];
            this.offsetResourcePermission = [];
            this.supplierResourcePermission = [];
            this.employeeResourcePermission = [];
            this.netzeroAdminResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.NETZERO_ADMIN_RESOURCE_PERMISSION));
            this.adminResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.ADMIN_RESOURCE_PERMISSION));
            this.netzeroResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.NETZERO_RESOURCE_PERMISSION));
            this.energyResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.ENERGY_RESOURCE_PERMISSION));
            this.waterResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.WATER_RESOURCE_PERMISSION));
            this.enviroResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.ENVIRO_RESOURCE_PERMISSION));
            this.connectResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.CONNECT_RESOURCE_PERMISSION));
            this.offsetResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.OFFSET_RESOURCE_PERMISSION));
            this.supplierResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.SUPPLIER_RESOURCE_PERMISSION));
            this.employeeResourcePermission = JSON.parse(this.storageService.getStorage(exports.ApplicationResourcePermission.EMPLOYEE_RESOURCE_PERMISSION));
        }
        IsResourcePermission.prototype.isResourcePermission = function (resourcePermissionP) {
            var e_1, _a, e_2, _b, e_3, _c;
            var resourcePermission = [];
            try {
                for (var _d = __values(resourcePermissionP || []), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var resourcePermissionPs = _e.value;
                    if (resourcePermissionPs[2] == 'BY_DEFAULT_PERMISSION') {
                        return true;
                    }
                    switch (resourcePermissionPs[0]) {
                        case applicationService.ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                            resourcePermission = this.netzeroAdminResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.ADMIN_KEY_ID:
                            resourcePermission = this.adminResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.NETZERO_KEY_ID:
                            resourcePermission = this.netzeroResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.ENERGY_KEY_ID:
                            resourcePermission = this.energyResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.WATER_KEY_ID:
                            resourcePermission = this.waterResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.ENVIRO_KEY_ID:
                            resourcePermission = this.enviroResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.CONNECT_KEY_ID:
                            resourcePermission = this.connectResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.OFFSET_KEY_ID:
                            resourcePermission = this.offsetResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.SUPPLIER_KEY_ID:
                            resourcePermission = this.supplierResourcePermission;
                            break;
                        case applicationService.ApplicationKeyID.EMPLOYEE_KEY_ID:
                            resourcePermission = this.employeeResourcePermission;
                            break;
                        default:
                            resourcePermission = [];
                            break;
                    }
                    try {
                        for (var _f = (e_2 = void 0, __values(resourcePermission || [])), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var resource = _g.value;
                            if (resourcePermissionPs[1] == resource.resource) {
                                try {
                                    for (var _h = (e_3 = void 0, __values(resource.permissions || [])), _j = _h.next(); !_j.done; _j = _h.next()) {
                                        var permission = _j.value;
                                        if (permission == resourcePermissionPs[2]) {
                                            return true;
                                        }
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        return IsResourcePermission;
    }());
    IsResourcePermission.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsResourcePermission, deps: [{ token: i2__namespace.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    IsResourcePermission.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsResourcePermission, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: IsResourcePermission, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.StorageService }]; } });

    var RBACGuard = /** @class */ (function () {
        function RBACGuard(router, isResourcePermission) {
            this.router = router;
            this.isResourcePermission = isResourcePermission;
        }
        RBACGuard.prototype.canActivate = function (next) {
            var rBACGuard = false;
            var resourcePermission = next.data.resourcePermission;
            rBACGuard = this.isResourcePermission.isResourcePermission(resourcePermission);
            if (rBACGuard) {
                return true;
            }
            else {
                return this.router.createUrlTree(['/no-authorization']);
            }
        };
        return RBACGuard;
    }());
    RBACGuard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACGuard, deps: [{ token: i1__namespace$1.Router }, { token: IsResourcePermission }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RBACGuard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACGuard, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACGuard, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: IsResourcePermission }]; } });

    var RBACDirective2 = /** @class */ (function () {
        function RBACDirective2(templateRef, viewContainer, isResourcePermission) {
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.isResourcePermission = isResourcePermission;
        }
        Object.defineProperty(RBACDirective2.prototype, "isRenderRBAC", {
            set: function (resourcePermission) {
                var renderRBAC = false;
                renderRBAC = resourcePermission ? this.isResourcePermission.isResourcePermission(resourcePermission) : true;
                if (renderRBAC) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
                else {
                    this.viewContainer.clear();
                }
            },
            enumerable: false,
            configurable: true
        });
        return RBACDirective2;
    }());
    RBACDirective2.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACDirective2, deps: [{ token: i0__namespace.TemplateRef }, { token: i0__namespace.ViewContainerRef }, { token: IsResourcePermission }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    RBACDirective2.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: RBACDirective2, selector: "[isRenderRBAC]", inputs: { isRenderRBAC: "isRenderRBAC" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACDirective2, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[isRenderRBAC]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.TemplateRef }, { type: i0__namespace.ViewContainerRef }, { type: IsResourcePermission }]; }, propDecorators: { isRenderRBAC: [{
                    type: i0.Input
                }] } });
    var RBACDirectiveModule2 = /** @class */ (function () {
        function RBACDirectiveModule2() {
        }
        return RBACDirectiveModule2;
    }());
    RBACDirectiveModule2.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACDirectiveModule2, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RBACDirectiveModule2.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACDirectiveModule2, declarations: [RBACDirective2], exports: [RBACDirective2] });
    RBACDirectiveModule2.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACDirectiveModule2 });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RBACDirectiveModule2, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [RBACDirective2],
                        exports: [RBACDirective2]
                    }]
            }] });

    /*
     * Public API Surface of rbac-service
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ADMIN_RBAC_CONSTANT = ADMIN_RBAC_CONSTANT;
    exports.CARBON_RBAC_CONSTANT = CARBON_RBAC_CONSTANT;
    exports.CONNECT_RBAC_CONSTANT = CONNECT_RBAC_CONSTANT;
    exports.ENERGY_RBAC_CONSTANT = ENERGY_RBAC_CONSTANT;
    exports.ENVIRO_RBAC_CONSTANT = ENVIRO_RBAC_CONSTANT;
    exports.IsResourcePermission = IsResourcePermission;
    exports.LLADMIN_RBAC_CONSTANT = LLADMIN_RBAC_CONSTANT;
    exports.RBACDirective2 = RBACDirective2;
    exports.RBACDirectiveModule2 = RBACDirectiveModule2;
    exports.RBACGuard = RBACGuard;
    exports.RBACJson = RBACJson;
    exports.RBACService = RBACService;
    exports.RbacServiceComponent = RbacServiceComponent;
    exports.RbacServiceModule = RbacServiceModule;
    exports.RbacServiceService = RbacServiceService;
    exports.WATER_RBAC_CONSTANT = WATER_RBAC_CONSTANT;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-rbac-service.umd.js.map
