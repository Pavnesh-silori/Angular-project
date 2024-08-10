import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject, Directive, Input } from '@angular/core';
import { ApplicationKeyID } from '@library/application-service';
import { __awaiter } from 'tslib';
import * as i1 from '@angular/common/http';
import * as i2 from '@library/storage-service';
import * as i1$1 from '@angular/router';

class RbacServiceService {
    constructor() { }
}
RbacServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RbacServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RbacServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
RbacServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RbacServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacServiceComponent, selector: "lib-rbac-service", ngImport: i0, template: `
    <p>
      rbac-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-rbac-service',
                    template: `
    <p>
      rbac-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class RbacServiceModule {
    static forRoot(environment) {
        return {
            ngModule: RbacServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
RbacServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RbacServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceModule, declarations: [RbacServiceComponent], exports: [RbacServiceComponent] });
RbacServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacServiceModule, decorators: [{
            type: NgModule,
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

class RBACJson {
}
RBACJson.noAuthorization = {
    body: "You don't have authorization."
};

var ApplicationResourcePermission;
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
})(ApplicationResourcePermission || (ApplicationResourcePermission = {}));

const ADMIN_RBAC_CONSTANT = {
    BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
    PRODUCT_READ: [ApplicationKeyID.ADMIN_KEY_ID, 'PRODUCT', 'BY_DEFAULT_PERMISSION'],
    ORGANIZATION_CREATE: [ApplicationKeyID.ADMIN_KEY_ID, 'ORGANIZATION', 'BY_DEFAULT_PERMISSION'],
    ORGANIZATION_READ: [ApplicationKeyID.ADMIN_KEY_ID, 'ORGANIZATION', 'BY_DEFAULT_PERMISSION'],
    ORGANIZATION_UPDATE: [ApplicationKeyID.ADMIN_KEY_ID, 'ORGANIZATION', 'BY_DEFAULT_PERMISSION'],
    ORGANIZATION_DELETE: [ApplicationKeyID.ADMIN_KEY_ID, 'ORGANIZATION', 'BY_DEFAULT_PERMISSION'],
    COMPLIANCE_READ: [ApplicationKeyID.ADMIN_KEY_ID, 'COMPLIANCE', 'BY_DEFAULT_PERMISSION'],
    FACILITY_PAGE_READ: [ApplicationKeyID.ADMIN_KEY_ID, 'FACILITY_PAGE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_PAGE_READ: [ApplicationKeyID.ADMIN_KEY_ID, 'REGULATOR_PAGE', 'BY_DEFAULT_PERMISSION'],
    FACILITY_CONFIG_PAGE_READ: [ApplicationKeyID.ADMIN_KEY_ID, 'FACILITY_CONFIG_PAGE', 'BY_DEFAULT_PERMISSION'],
    ASSET_CONFIG_PAGE_READ: [ApplicationKeyID.ADMIN_KEY_ID, 'ASSET_CONFIG_PAGE', 'BY_DEFAULT_PERMISSION'],
    DEVICE_CONFIG_PAGE_READ: [ApplicationKeyID.ADMIN_KEY_ID, 'DEVICE_CONFIG_PAGE', 'BY_DEFAULT_PERMISSION']
};

const LLADMIN_RBAC_CONSTANT = {
    BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
    COMPLIANCE_READ: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'COMPLIANCE_READ', 'BY_DEFAULT_PERMISSION'],
    COMPLIANCE_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'COMPLIANCE_PAGE', 'BY_DEFAULT_PERMISSION'],
    COMPLIANCE_CREATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'COMPLIANCE_CREATE', 'BY_DEFAULT_PERMISSION'],
    COMPLIANCE_UPDATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'COMPLIANCE_UPDATE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_READ: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_READ', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PAGE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_CREATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CREATE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_UPDATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_UPDATE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_VIEW: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_VIEW', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_CONFIGURATION_READ: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_READ', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_CONFIGURATION_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_PAGE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_CONFIGURATION_CREATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_CREATE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_CONFIGURATION_UPDATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_UPDATE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_CONFIGURATION_VIEW: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_CONFIGURATION_VIEW', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_PARAMETER_CONFIGURATION_READ: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PARAMETER_CONFIGURATION_READ', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_PARAMETER_CONFIGURATION_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PARAMETER_CONFIGURATION_PAGE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_PARAMETER_CONFIGURATION_CREATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PARAMETER_CONFIGURATION_CREATE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_PARAMETER_CONFIGURATION_UPDATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_PARAMETER_CONFIGURATION_UPDATE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_USER_READ: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_USER_READ', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_USER_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_USER_PAGE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_USER_CREATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_USER_CREATE', 'BY_DEFAULT_PERMISSION'],
    REGULATOR_USER_UPDATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REGULATOR_USER_UPDATE', 'BY_DEFAULT_PERMISSION'],
    STANDARD_CONFIGURATION_READ: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'STANDARD_CONFIGURATION_READ', 'BY_DEFAULT_PERMISSION'],
    MAKE_READ: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'MAKE_READ', 'BY_DEFAULT_PERMISSION'],
    MAKE_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'MAKE_PAGE', 'BY_DEFAULT_PERMISSION'],
    MODEL_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'MODEL_PAGE', 'BY_DEFAULT_PERMISSION'],
    REMOTE_CALIBRATION_READ: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_READ', 'BY_DEFAULT_PERMISSION'],
    REMOTE_CALIBRATION_ANALYZER_VARIANT: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT', 'BY_DEFAULT_PERMISSION'],
    REMOTE_CALIBRATION_ANALYZER_VARIANT_STEP_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT_PAGE', 'BY_DEFAULT_PERMISSION'],
    REMOTE_CALIBRATION_ANALYZER_VARIANT_CREATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT_CREATE', 'BY_DEFAULT_PERMISSION'],
    REMOTE_CALIBRATION_ANALYZER_VARIANT_UPDATE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    REMOTE_CALIBRATION_ANALYZER_VARIANT_VIEW_PAGE: [ApplicationKeyID.NETZERO_ADMIN_KEY_ID, 'REMOTE_CALIBRATION_ANALYZER_VARIANT_VIEW_PAGE', 'BY_DEFAULT_PERMISSION'],
};

const CARBON_RBAC_CONSTANT = {
    BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
    TARGET_READ: [ApplicationKeyID.NETZERO_KEY_ID, 'TARGET', 'BY_DEFAULT_PERMISSION']
};

const CONNECT_RBAC_CONSTANT = {
    BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
    DEVICE_READ: [ApplicationKeyID.CONNECT_KEY_ID, 'DEVICE', 'BY_DEFAULT_PERMISSION'],
    //ALERT
    OFFLINE_ALERT_READ: [ApplicationKeyID.CONNECT_KEY_ID, 'OFFLINE_ALERT', 'BY_DEFAULT_PERMISSION'],
    OFFLINE_ALERT_PAGE_READ: [ApplicationKeyID.CONNECT_KEY_ID, 'OFFLINE_ALERT_PAGE', 'BY_DEFAULT_PERMISSION'],
    //ALARM_ESCALATION
    ALARM_ESCALATION_READ: [ApplicationKeyID.CONNECT_KEY_ID, 'ALARM_ESCALATION', 'BY_DEFAULT_PERMISSION'],
    CONFIGURED_ALARM_READ: [ApplicationKeyID.CONNECT_KEY_ID, 'CONFIGURED_ALARM', 'BY_DEFAULT_PERMISSION'],
    GENERATED_ALARM_READ: [ApplicationKeyID.CONNECT_KEY_ID, 'GENERATED_ALARM', 'BY_DEFAULT_PERMISSION']
};

const ENERGY_RBAC_CONSTANT = {
    BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
    //HOME
    HOME_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'HOME', 'BY_DEFAULT_PERMISSION'],
    //DASHBOARD
    DASHBOARDS_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'DASHBOARDS', 'BY_DEFAULT_PERMISSION'],
    FACILITY_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'FACILITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    FACILITY_SUMMARY_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'FACILITY_SUMMARY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ENTITY_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENTITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ENERGY_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    TEMPERATURE_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'TEMPERATURE_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    PRESSURE_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PRESSURE_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ENERGY_ACCOUNTING_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_ACCOUNTING_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ENERGY_DISTRIBUTION_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_DISTRIBUTION_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ENERGY_COMPARISON_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_COMPARISON_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ENERGY_METER_DATA_DASHBOARD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_METER_DATA_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    //REPORT
    REPORTS_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'REPORTS', 'BY_DEFAULT_PERMISSION'],
    AMBIENT_TEMPERATURE_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'AMBIENT_TEMPERATURE_REPORT', 'BY_DEFAULT_PERMISSION'],
    TEMPERATURE_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'TEMPERATURE_REPORT', 'BY_DEFAULT_PERMISSION'],
    PRESSURE_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PRESSURE_REPORT', 'BY_DEFAULT_PERMISSION'],
    HUMIDITY_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'HUMIDITY_REPORT', 'BY_DEFAULT_PERMISSION'],
    PARAMETER_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PARAMETER_REPORT', 'BY_DEFAULT_PERMISSION'],
    RAW_DATA_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'RAW_DATA_REPORT', 'BY_DEFAULT_PERMISSION'],
    ENERGY_SOURCING_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_SOURCING_REPORT', 'BY_DEFAULT_PERMISSION'],
    ENERGY_BREAKUP_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_BREAKUP_REPORT', 'BY_DEFAULT_PERMISSION'],
    ENERGY_METER_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_METER_REPORT', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_REPORT', 'BY_DEFAULT_PERMISSION'],
    ENERGY_COST_ANALYSIS_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_COST_ANALYSIS_REPORT', 'BY_DEFAULT_PERMISSION'],
    //SCHEDULE_REPORT
    SCHEDULE_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    SCHEDULE_REPORT_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'SCHEDULE_REPORT_PAGE', 'BY_DEFAULT_PERMISSION'],
    ENERGY_SOURCING_SCHEDULE_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_SOURCING_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    ENERGY_BREAKUP_SCHEDULE_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_BREAKUP_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    ENERGY_CONSUMPTION_SCHEDULE_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_CONSUMPTION_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    TEMPERATURE_SCHEDULE_REPORT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'TEMPERATURE_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    ENERGY_SOURCING_SCHEDULE_REPORT_UPDATE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_SOURCING_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    ENERGY_BREAKUP_SCHEDULE_REPORT_UPDATE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_BREAKUP_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    ENERGY_CONSUMPTION_SCHEDULE_REPORT_UPDATE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_CONSUMPTION_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    TEMPERATURE_SCHEDULE_REPORT_UPDATE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'TEMPERATURE_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    //ALARM_ESCALATION
    ALARM_ESCALATION_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ALARM_ESCALATION', 'BY_DEFAULT_PERMISSION'],
    CONFIGURED_ALARM_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'CONFIGURED_ALARM', 'BY_DEFAULT_PERMISSION'],
    GENERATED_ALARM_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'GENERATED_ALARM', 'BY_DEFAULT_PERMISSION'],
    //ANALYTICS AND INSIGHTS
    ANALTICS_INSIGHTS_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ANALTICS_INSIGHTS', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_ANALYSIS_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_ANALYSIS', 'BY_DEFAULT_PERMISSION'],
    AVOIDED_EMISSION_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'AVOIDED_EMISSION', 'BY_DEFAULT_PERMISSION'],
    //TARGETING AND PLANNING
    TARGETING_PLANNING_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'TARGETING_PLANNING', 'BY_DEFAULT_PERMISSION'],
    ENERGY_BUDGET_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ENERGY_BUDGET', 'BY_DEFAULT_PERMISSION'],
    //LAYOUT: Settings Sidebar
    LAYOUT_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'LAYOUT', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'LAYOUT_PAGE', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_CHART_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'LAYOUT_CHART', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_LIST_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'LAYOUT_LIST', 'BY_DEFAULT_PERMISSION'],
    //DEVICE MAPPING
    DEVICE_MAPPING_ADD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'DEVICE_MAPPING_ADD', 'BY_DEFAULT_PERMISSION'],
    DEVICE_MAPPING_VIEW_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'DEVICE_MAPPING_VIEW', 'BY_DEFAULT_PERMISSION'],
    //BUDGETING AND PLANNING: Setting Sidebar
    BUDGET_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'BUDGET', 'BY_DEFAULT_PERMISSION'],
    BUDGET_PREFERENCE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'BUDGET_PREFERENCE', 'BY_DEFAULT_PERMISSION'],
    //ALERT RULE
    ALERT_RULE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'ALERT_RULE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_CREATE_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_UPDATE_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_ESCALATION_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'INSTANTANEOUS_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_CREATE_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_UPDATE_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_ESCALATION_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PERIODIC_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
    //PREFERENCE
    PREFERENCE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'PREFERENCE', 'BY_DEFAULT_PERMISSION'],
    SOURCE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'SOURCE', 'BY_DEFAULT_PERMISSION'],
    SOURCE_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'SOURCE_PAGE', 'BY_DEFAULT_PERMISSION'],
    CONSUMER_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMER', 'BY_DEFAULT_PERMISSION'],
    CONSUMER_PAGE_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMER_PAGE', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_PARAMETER_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_PARAMETER', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_PARAMETER_ADD_READ: [[ApplicationKeyID.ENERGY_KEY_ID], 'CONSUMPTION_PARAMETER_ADD', 'BY_DEFAULT_PERMISSION']
};

const WATER_RBAC_CONSTANT = {
    BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
    //HOME
    HOME_READ: [[ApplicationKeyID.WATER_KEY_ID], 'HOME', 'BY_DEFAULT_PERMISSION'],
    //DASHBOARD
    DASHBOARDS_READ: [[ApplicationKeyID.WATER_KEY_ID], 'DASHBOARDS', 'BY_DEFAULT_PERMISSION'],
    FACILITY_DASHBOARD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'FACILITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ENTITY_DASHBOARD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'ENTITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_DASHBOARD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    METER_DATA_DASHBOARD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'METER_DATA_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    SAVED_WATER_DASHBOARD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'SAVED_WATER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ALL_PARAMETER_DASHBOARD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'ALL_PARAMETER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    SINGLE_PARAMETER_DASHBOARD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'SINGLE_PARAMETER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    //REPORT
    REPORTS_READ: [[ApplicationKeyID.WATER_KEY_ID], 'REPORTS', 'BY_DEFAULT_PERMISSION'],
    PARAMETER_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'PARAMETER_REPORT', 'BY_DEFAULT_PERMISSION'],
    RAW_DATA_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'RAW_DATA_REPORT', 'BY_DEFAULT_PERMISSION'],
    DATA_AVAILABILITY_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'DATA_AVAILABILITY_REPORT', 'BY_DEFAULT_PERMISSION'],
    WATER_SOURCING_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_SOURCING_REPORT', 'BY_DEFAULT_PERMISSION'],
    WATER_BREAKUP_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_BREAKUP_REPORT', 'BY_DEFAULT_PERMISSION'],
    WATER_METER_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_METER_REPORT', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_REPORT', 'BY_DEFAULT_PERMISSION'],
    CGWA_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CGWA_REPORT', 'BY_DEFAULT_PERMISSION'],
    //SCHEDULE_REPORT
    SCHEDULE_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    SCHEDULE_REPORT_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'SCHEDULE_REPORT_PAGE', 'BY_DEFAULT_PERMISSION'],
    WATER_SOURCING_SCHEDULE_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_SOURCING_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    WATER_BREAKUP_SCHEDULE_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_BREAKUP_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    WATER_CONSUMPTION_SCHEDULE_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_CONSUMPTION_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    CGWA_SCHEDULE_REPORT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CGWA_SCHEDULE_REPORT', 'BY_DEFAULT_PERMISSION'],
    WATER_SOURCING_SCHEDULE_REPORT_UPDATE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_SOURCING_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    WATER_BREAKUP_SCHEDULE_REPORT_UPDATE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_BREAKUP_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    WATER_CONSUMPTION_SCHEDULE_REPORT_UPDATE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'WATER_CONSUMPTION_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    CGWA_SCHEDULE_REPORT_UPDATE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CGWA_SCHEDULE_REPORT_UPDATE', 'BY_DEFAULT_PERMISSION'],
    //ALARM_ESCALATION
    ALARM_ESCALATION_READ: [[ApplicationKeyID.WATER_KEY_ID], 'ALARM_ESCALATION', 'BY_DEFAULT_PERMISSION'],
    CONFIGURED_ALARM_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CONFIGURED_ALARM', 'BY_DEFAULT_PERMISSION'],
    GENERATED_ALARM_READ: [[ApplicationKeyID.WATER_KEY_ID], 'GENERATED_ALARM', 'BY_DEFAULT_PERMISSION'],
    //ANALYTICS AND INSIGHTS
    ANALTICS_INSIGHTS_READ: [[ApplicationKeyID.WATER_KEY_ID], 'ANALTICS_INSIGHTS', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_BREAKUP_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_BREAKUP', 'BY_DEFAULT_PERMISSION'],
    //LAYOUT: Settings Sidebar
    LAYOUT_READ: [[ApplicationKeyID.WATER_KEY_ID], 'LAYOUT', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'LAYOUT_PAGE', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_CHART_READ: [[ApplicationKeyID.WATER_KEY_ID], 'LAYOUT_CHART', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_LIST_READ: [[ApplicationKeyID.WATER_KEY_ID], 'LAYOUT_LIST', 'BY_DEFAULT_PERMISSION'],
    //DEVICE MAPPING
    DEVICE_MAPPING_ADD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'DEVICE_MAPPING_ADD', 'BY_DEFAULT_PERMISSION'],
    DEVICE_MAPPING_VIEW_READ: [[ApplicationKeyID.WATER_KEY_ID], 'DEVICE_MAPPING_VIEW', 'BY_DEFAULT_PERMISSION'],
    //BUDGETING AND PLANNING: Setting Sidebar
    BUDGET_READ: [[ApplicationKeyID.WATER_KEY_ID], 'BUDGET', 'BY_DEFAULT_PERMISSION'],
    BUDGET_PREFERENCE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'BUDGET_PREFERENCE', 'BY_DEFAULT_PERMISSION'],
    //ALERT RULE
    ALERT_RULE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'ALERT_RULE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_READ: [[ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_CREATE_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_UPDATE_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_ESCALATION_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'INSTANTANEOUS_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_READ: [[ApplicationKeyID.WATER_KEY_ID], 'PERIODIC', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'PERIODIC_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_CREATE_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'PERIODIC_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_UPDATE_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'PERIODIC_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_ESCALATION_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'PERIODIC_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
    //PREFERENCE
    PREFERENCE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'PREFERENCE', 'BY_DEFAULT_PERMISSION'],
    SOURCE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'SOURCE', 'BY_DEFAULT_PERMISSION'],
    SOURCE_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'SOURCE_PAGE', 'BY_DEFAULT_PERMISSION'],
    CONSUMER_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CONSUMER', 'BY_DEFAULT_PERMISSION'],
    CONSUMER_PAGE_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CONSUMER_PAGE', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_PARAMETER_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_PARAMETER', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_PARAMETER_ADD_READ: [[ApplicationKeyID.WATER_KEY_ID], 'CONSUMPTION_PARAMETER_ADD', 'BY_DEFAULT_PERMISSION']
};

const ENVIRO_RBAC_CONSTANT = {
    BY_DEFAULT_PERMISSION: 'BY_DEFAULT_PERMISSION',
    //HOME
    HOME_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'HOME', 'BY_DEFAULT_PERMISSION'],
    //DASHBOARD
    DASHBOARDS_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'DASHBOARDS', 'BY_DEFAULT_PERMISSION'],
    FACILITY_DASHBOARD_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'FACILITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ENTITY_DASHBOARD_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'ENTITY_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    CONSUMPTION_DASHBOARD_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CONSUMPTION_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    METER_DATA_DASHBOARD_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'METER_DATA_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    ALL_PARAMETER_DASHBOARD_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'ALL_PARAMETER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    SINGLE_PARAMETER_DASHBOARD_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'SINGLE_PARAMETER_DASHBOARD', 'BY_DEFAULT_PERMISSION'],
    //REPORT
    REPORTS_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'REPORTS', 'BY_DEFAULT_PERMISSION'],
    PARAMETER_REPORT_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'PARAMETER_REPORT', 'BY_DEFAULT_PERMISSION'],
    RAW_DATA_REPORT_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'RAW_DATA_REPORT', 'BY_DEFAULT_PERMISSION'],
    DATA_AVAILABILITY_REPORT_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'DATA_AVAILABILITY_REPORT', 'BY_DEFAULT_PERMISSION'],
    //ALARM_ESCALATION
    ALARM_ESCALATION_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'ALARM_ESCALATION', 'BY_DEFAULT_PERMISSION'],
    CONFIGURED_ALARM_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CONFIGURED_ALARM', 'BY_DEFAULT_PERMISSION'],
    GENERATED_ALARM_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'GENERATED_ALARM', 'BY_DEFAULT_PERMISSION'],
    //LAYOUT: Settings Sidebar
    LAYOUT_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'LAYOUT', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'LAYOUT_PAGE', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_CHART_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'LAYOUT_CHART', 'BY_DEFAULT_PERMISSION'],
    LAYOUT_LIST_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'LAYOUT_LIST', 'BY_DEFAULT_PERMISSION'],
    //DEVICE MAPPING
    DEVICE_MAPPING_ADD_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'DEVICE_MAPPING_ADD', 'BY_DEFAULT_PERMISSION'],
    DEVICE_MAPPING_VIEW_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'DEVICE_MAPPING_VIEW', 'BY_DEFAULT_PERMISSION'],
    //ALERT RULE
    ALERT_RULE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'ALERT_RULE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_CREATE_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_UPDATE_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    INSTANTANEOUS_ESCALATION_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'INSTANTANEOUS_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_CREATE_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_UPDATE_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    PERIODIC_ESCALATION_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'PERIODIC_ESCALATION_PAGE', 'BY_DEFAULT_PERMISSION'],
    CONSTANT_DATA_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CONSTANT_DATA', 'BY_DEFAULT_PERMISSION'],
    CONSTANT_DATA_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CONSTANT_DATA_PAGE', 'BY_DEFAULT_PERMISSION'],
    CONSTANT_DATA_CREATE_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CONSTANT_DATA_CREATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    CONSTANT_DATA_UPDATE_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CONSTANT_DATA_UPDATE_PAGE', 'BY_DEFAULT_PERMISSION'],
    //COMPLIANCE
    COMPLIANCE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'COMPLIANCE', 'BY_DEFAULT_PERMISSION'],
    CAMERA_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CAMERA', 'BY_DEFAULT_PERMISSION'],
    CAMERA_PAGE_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CAMERA_PAGE', 'BY_DEFAULT_PERMISSION'],
    CAMERA_VIEW_READ: [[ApplicationKeyID.ENVIRO_KEY_ID], 'CAMERA_VIEW', 'BY_DEFAULT_PERMISSION'],
};

class RBACController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getResourcePermissionByOrgIDAndUserID(orgID, userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users/${userID}/resource-permissions`);
        // return this.http.get(`${this.environment.MOCK_SERVER}resourcePermission`);
    }
}
RBACController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
RBACController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class RBACService {
    constructor(rBACController) {
        this.rBACController = rBACController;
    }
    getResourcePermissionByOrgIDAndUserID(orgID, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let resourcePermission;
            try {
                resourcePermission = yield this.rBACController.getResourcePermissionByOrgIDAndUserID(orgID, userID).toPromise();
                return resourcePermission;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
}
RBACService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACService, deps: [{ token: RBACController }], target: i0.ɵɵFactoryTarget.Injectable });
RBACService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: RBACController }]; } });
class IsResourcePermission {
    constructor(storageService) {
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
        this.netzeroAdminResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.NETZERO_ADMIN_RESOURCE_PERMISSION));
        this.adminResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.ADMIN_RESOURCE_PERMISSION));
        this.netzeroResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.NETZERO_RESOURCE_PERMISSION));
        this.energyResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.ENERGY_RESOURCE_PERMISSION));
        this.waterResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.WATER_RESOURCE_PERMISSION));
        this.enviroResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.ENVIRO_RESOURCE_PERMISSION));
        this.connectResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.CONNECT_RESOURCE_PERMISSION));
        this.offsetResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.OFFSET_RESOURCE_PERMISSION));
        this.supplierResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.SUPPLIER_RESOURCE_PERMISSION));
        this.employeeResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.EMPLOYEE_RESOURCE_PERMISSION));
    }
    isResourcePermission(resourcePermissionP) {
        let resourcePermission = [];
        for (const resourcePermissionPs of resourcePermissionP || []) {
            if (resourcePermissionPs[2] == 'BY_DEFAULT_PERMISSION') {
                return true;
            }
            switch (resourcePermissionPs[0]) {
                case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                    resourcePermission = this.netzeroAdminResourcePermission;
                    break;
                case ApplicationKeyID.ADMIN_KEY_ID:
                    resourcePermission = this.adminResourcePermission;
                    break;
                case ApplicationKeyID.NETZERO_KEY_ID:
                    resourcePermission = this.netzeroResourcePermission;
                    break;
                case ApplicationKeyID.ENERGY_KEY_ID:
                    resourcePermission = this.energyResourcePermission;
                    break;
                case ApplicationKeyID.WATER_KEY_ID:
                    resourcePermission = this.waterResourcePermission;
                    break;
                case ApplicationKeyID.ENVIRO_KEY_ID:
                    resourcePermission = this.enviroResourcePermission;
                    break;
                case ApplicationKeyID.CONNECT_KEY_ID:
                    resourcePermission = this.connectResourcePermission;
                    break;
                case ApplicationKeyID.OFFSET_KEY_ID:
                    resourcePermission = this.offsetResourcePermission;
                    break;
                case ApplicationKeyID.SUPPLIER_KEY_ID:
                    resourcePermission = this.supplierResourcePermission;
                    break;
                case ApplicationKeyID.EMPLOYEE_KEY_ID:
                    resourcePermission = this.employeeResourcePermission;
                    break;
                default:
                    resourcePermission = [];
                    break;
            }
            for (const resource of resourcePermission || []) {
                if (resourcePermissionPs[1] == resource.resource) {
                    for (const permission of resource.permissions || []) {
                        if (permission == resourcePermissionPs[2]) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
}
IsResourcePermission.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsResourcePermission, deps: [{ token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
IsResourcePermission.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsResourcePermission, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsResourcePermission, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }]; } });

class RBACGuard {
    constructor(router, isResourcePermission) {
        this.router = router;
        this.isResourcePermission = isResourcePermission;
    }
    canActivate(next) {
        let rBACGuard = false;
        const resourcePermission = next.data.resourcePermission;
        rBACGuard = this.isResourcePermission.isResourcePermission(resourcePermission);
        if (rBACGuard) {
            return true;
        }
        else {
            return this.router.createUrlTree(['/no-authorization']);
        }
    }
}
RBACGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACGuard, deps: [{ token: i1$1.Router }, { token: IsResourcePermission }], target: i0.ɵɵFactoryTarget.Injectable });
RBACGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: IsResourcePermission }]; } });

class RBACDirective2 {
    constructor(templateRef, viewContainer, isResourcePermission) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.isResourcePermission = isResourcePermission;
    }
    set isRenderRBAC(resourcePermission) {
        let renderRBAC = false;
        renderRBAC = resourcePermission ? this.isResourcePermission.isResourcePermission(resourcePermission) : true;
        if (renderRBAC) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
RBACDirective2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirective2, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: IsResourcePermission }], target: i0.ɵɵFactoryTarget.Directive });
RBACDirective2.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: RBACDirective2, selector: "[isRenderRBAC]", inputs: { isRenderRBAC: "isRenderRBAC" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirective2, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isRenderRBAC]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: IsResourcePermission }]; }, propDecorators: { isRenderRBAC: [{
                type: Input
            }] } });
class RBACDirectiveModule2 {
}
RBACDirectiveModule2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirectiveModule2, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RBACDirectiveModule2.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirectiveModule2, declarations: [RBACDirective2], exports: [RBACDirective2] });
RBACDirectiveModule2.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirectiveModule2 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirectiveModule2, decorators: [{
            type: NgModule,
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

export { ADMIN_RBAC_CONSTANT, ApplicationResourcePermission, CARBON_RBAC_CONSTANT, CONNECT_RBAC_CONSTANT, ENERGY_RBAC_CONSTANT, ENVIRO_RBAC_CONSTANT, IsResourcePermission, LLADMIN_RBAC_CONSTANT, RBACDirective2, RBACDirectiveModule2, RBACGuard, RBACJson, RBACService, RbacServiceComponent, RbacServiceModule, RbacServiceService, WATER_RBAC_CONSTANT };
//# sourceMappingURL=library-rbac-service.js.map
