import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject, Directive, Input } from '@angular/core';
import { ApplicationKeyID } from '@library/application-service';
import { __awaiter } from 'tslib';
import * as i1 from '@angular/common/http';
import * as i2 from '@library/storage-service';
import * as i1$1 from '@angular/router';

class FeatureServiceService {
    constructor() { }
}
FeatureServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FeatureServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FeatureServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeatureServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FeatureServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FeatureServiceComponent, selector: "lib-feature-service", ngImport: i0, template: `
    <p>
      feature-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-feature-service',
                    template: `
    <p>
      feature-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FeatureServiceModule {
    static forRoot(environment) {
        return {
            ngModule: FeatureServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
FeatureServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceModule, declarations: [FeatureServiceComponent], exports: [FeatureServiceComponent] });
FeatureServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceModule, decorators: [{
            type: NgModule,
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

class FeatureJson {
}
FeatureJson.featureNotAvailable = {
    body: "This feature is not available with your subscription!"
};

var ApplicationFeature;
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
})(ApplicationFeature || (ApplicationFeature = {}));

const ADMIN_FEATURE_CONSTANT = {
    BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
    PRODUCT: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ORGANIZATION: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE2'],
    USER: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE'],
    COMPLIANCE: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE'],
    FACILITY_PAGE: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE'],
    REGULATOR_PAGE: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE'],
    FACILITY_CONFIG_PAGE: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ASSET_CONFIG_PAGE: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE'],
    DEVICE_CONFIG_PAGE: [[ApplicationKeyID.ADMIN_KEY_ID], 'BY_DEFAULT_FEATURE']
};

const CARBON_FEATURE_CONSTANT = {
    BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
    DASHBOARD: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    NETZERO_DASHBOARD: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_FOOTPRINT_DASHBOARD: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_FOOTPRINT_DASHBOARD: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_FOOTPRINT_DASHBOARD: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WASTE_FOOTPRINT_DASHBOARD: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENVIRO_FOOTPRINT_DASHBOARD: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    REMINDER: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_MAIN_MENU: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_LEDGER: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SCOPE_ONE: [[ApplicationKeyID.NETZERO_KEY_ID], 'SCOPE_ONE'],
    SCOPE_TWO: [[ApplicationKeyID.NETZERO_KEY_ID], 'SCOPE_TWO'],
    SCOPE_THREE: [[ApplicationKeyID.NETZERO_KEY_ID], 'SCOPE_THREE'],
    STATIONARY_COMBUSTION: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    MOBILE_COMBUSTION: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    EQUIPMENT_MAINTENANCE: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    OTHER_FUGITIVE_SOURCE: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PURCHASE_ELECTRICITY: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PURCHASE_HEAT_STEAM: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PURCHASE_COOLING: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SCOPE_THREE_SPEND_BASED: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_SETTING: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_BOUNDARY_QUESTION: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_ACTIVITY_TYPE: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_CALCULATION_PREFERENCE: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_GHG_BASE_YEAR: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_FACTOR_DATABASE: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_ACTIVITY_FORM: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_API_KEY: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CARBON_ACTIVITY_CONFIGURATOR: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    TARGET: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SCIENCE_BASED_TARGET: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SOURCE_AND_CONSUMER: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ASSET_SAC: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SUPPLIER_SAC: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    VEHICLE_SAC: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    REFRIGERATION_AND_FIRE_SUPPRESSION_EQUIPMENT_SAC: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    OTHER_FUGITIVE_SAC: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    EMPLOYEE_SAC: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    API_INTEGRATION: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_MAIN_MENU: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_MAIN_MENU: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WASTE_MAIN_MENU: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENVIRO_MAIN_MENU: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    TARGETING_AND_PLANNING: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SBTI: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    FORECASTING: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ANOMALY_DETECTOR: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    REPORT: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    GLOBAL_FRAMEWORK: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    BRSR: [[ApplicationKeyID.NETZERO_KEY_ID], 'BY_DEFAULT_FEATURE'],
};

const CONNECT_FEATURE_CONSTANT = {
    BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
    DEVICE: [[ApplicationKeyID.CONNECT_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ALERT
    OFFLINE_ALERT: [[ApplicationKeyID.CONNECT_KEY_ID], 'BY_DEFAULT_FEATURE'],
    OFFLINE_ALERT_PAGE: [[ApplicationKeyID.CONNECT_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ALARM_ESCALATION
    ALARM_ESCALATION: [[ApplicationKeyID.CONNECT_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONFIGURED_ALARM: [[ApplicationKeyID.CONNECT_KEY_ID], 'BY_DEFAULT_FEATURE'],
    GENERATED_ALARM: [[ApplicationKeyID.CONNECT_KEY_ID], 'BY_DEFAULT_FEATURE']
};

const ENERGY_FEATURE_CONSTANT = {
    BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
    //HOME
    HOME: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //DASHBOARD
    DASHBOARDS: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    FACILITY_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    FACILITY_SUMMARY_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENTITY_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    TEMPERATURE_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PRESSURE_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_ACCOUNTING_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_DISTRIBUTION_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_COMPARISON_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_METER_DATA_DASHBOARD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //REPORT
    REPORTS: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    AMBIENT_TEMPERATURE_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    TEMPERATURE_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PRESSURE_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    HUMIDITY_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PARAMETER_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    RAW_DATA_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_SOURCING_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_BREAKUP_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_METER_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_COST_ANALYSIS_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //SCHEDULE_REPORT
    SCHEDULE_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SCHEDULE_REPORT_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_SOURCING_SCHEDULE_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_BREAKUP_SCHEDULE_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_CONSUMPTION_SCHEDULE_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    TEMPERATURE_SCHEDULE_REPORT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_SOURCING_SCHEDULE_REPORT_UPDATE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_BREAKUP_SCHEDULE_REPORT_UPDATE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_CONSUMPTION_SCHEDULE_REPORT_UPDATE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    TEMPERATURE_SCHEDULE_REPORT_UPDATE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ALARM_ESCALATION
    ALARM_ESCALATION: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONFIGURED_ALARM: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    GENERATED_ALARM: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ANALYTICS AND INSIGHTS
    ANALTICS_INSIGHTS: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_ANALYSIS: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    AVOIDED_EMISSION: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //TARGETING AND PLANNING
    TARGETING_PLANNING: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENERGY_BUDGET: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //LAYOUT: Settings Sidebar
    LAYOUT: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_CHART: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_LIST: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //DEVICE MAPPING
    DEVICE_MAPPING_ADD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    DEVICE_MAPPING_VIEW: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //BUDGETING AND PLANNING: Setting Sidebar
    BUDGET: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    BUDGET_PREFERENCE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ALERT RULE
    ALERT_RULE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_CREATE_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_UPDATE_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_ESCALATION_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_CREATE_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_UPDATE_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_ESCALATION_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //PREFERENCE
    PREFERENCE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SOURCE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SOURCE_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMER: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMER_PAGE: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_PARAMETER: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_PARAMETER_ADD: [[ApplicationKeyID.ENERGY_KEY_ID], 'BY_DEFAULT_FEATURE']
};

const WATER_FEATURE_CONSTANT = {
    BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
    //HOME
    HOME: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //DASHBOARD
    DASHBOARDS: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    FACILITY_DASHBOARD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENTITY_DASHBOARD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_DASHBOARD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    METER_DATA_DASHBOARD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SAVED_WATER_DASHBOARD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ALL_PARAMETER_DASHBOARD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SINGLE_PARAMETER_DASHBOARD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //REPORT
    REPORTS: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PARAMETER_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    RAW_DATA_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    DATA_AVAILABILITY_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_SOURCING_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_BREAKUP_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_METER_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CGWA_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //SCHEDULE_REPORT
    SCHEDULE_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SCHEDULE_REPORT_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_SOURCING_SCHEDULE_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_BREAKUP_SCHEDULE_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_CONSUMPTION_SCHEDULE_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CGWA_SCHEDULE_REPORT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_SOURCING_SCHEDULE_REPORT_UPDATE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_BREAKUP_SCHEDULE_REPORT_UPDATE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    WATER_CONSUMPTION_SCHEDULE_REPORT_UPDATE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CGWA_SCHEDULE_REPORT_UPDATE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ALARM_ESCALATION
    ALARM_ESCALATION: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONFIGURED_ALARM: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    GENERATED_ALARM: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ANALYTICS AND INSIGHTS
    ANALTICS_INSIGHTS: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_BREAKUP: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //LAYOUT: Settings Sidebar
    LAYOUT: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_CHART: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_LIST: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //DEVICE MAPPING
    DEVICE_MAPPING_ADD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    DEVICE_MAPPING_VIEW: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //BUDGETING AND PLANNING: Setting Sidebar
    BUDGET: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    BUDGET_PREFERENCE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ALERT RULE
    ALERT_RULE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_CREATE_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_UPDATE_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_ESCALATION_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_CREATE_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_UPDATE_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_ESCALATION_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //PREFERENCE
    PREFERENCE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SOURCE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SOURCE_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMER: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMER_PAGE: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_PARAMETER: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_PARAMETER_ADD: [[ApplicationKeyID.WATER_KEY_ID], 'BY_DEFAULT_FEATURE']
};

const ENVIRO_FEATURE_CONSTANT = {
    BY_DEFAULT_FEATURE: 'BY_DEFAULT_FEATURE',
    //HOME
    HOME: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //DASHBOARD
    DASHBOARDS: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    FACILITY_DASHBOARD: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ENTITY_DASHBOARD: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSUMPTION_DASHBOARD: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    METER_DATA_DASHBOARD: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    ALL_PARAMETER_DASHBOARD: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    SINGLE_PARAMETER_DASHBOARD: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //REPORT
    REPORTS: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PARAMETER_REPORT: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    RAW_DATA_REPORT: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    DATA_AVAILABILITY_REPORT: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ALARM_ESCALATION
    ALARM_ESCALATION: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONFIGURED_ALARM: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    GENERATED_ALARM: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //LAYOUT: Settings Sidebar
    LAYOUT: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_CHART: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    LAYOUT_LIST: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //DEVICE MAPPING
    DEVICE_MAPPING_ADD: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    DEVICE_MAPPING_VIEW: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //ALERT RULE
    ALERT_RULE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_CREATE_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_UPDATE_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    INSTANTANEOUS_ESCALATION_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_CREATE_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_UPDATE_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    PERIODIC_ESCALATION_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSTANT_DATA: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSTANT_DATA_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSTANT_DATA_CREATE_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CONSTANT_DATA_UPDATE_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    //COMPLIANCE
    COMPLIANCE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CAMERA: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CAMERA_PAGE: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
    CAMERA_VIEW: [[ApplicationKeyID.ENVIRO_KEY_ID], 'BY_DEFAULT_FEATURE'],
};

class FeatureController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getFeatureByOrgID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/features`);
        // return this.http.get(`${this.environment.MOCK_SERVER}feature`);
    }
}
FeatureController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
FeatureController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class FeatureService {
    constructor(featureController) {
        this.featureController = featureController;
    }
    getFeatureByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let feature;
            try {
                feature = yield this.featureController.getFeatureByOrgID(orgID).toPromise();
                return feature;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
}
FeatureService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureService, deps: [{ token: FeatureController }], target: i0.ɵɵFactoryTarget.Injectable });
FeatureService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: FeatureController }]; } });
class IsFeatureAvailable {
    constructor(storageService) {
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
        this.netzeroAdminFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.NETZERO_ADMIN_FEATURE));
        this.adminFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.ADMIN_FEATURE));
        this.netzeroFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.NETZERO_FEATURE));
        this.energyFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.ENERGY_FEATURE));
        this.waterFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.WATER_FEATURE));
        this.enviroFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.ENVIRO_FEATURE));
        this.connectFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.CONNECT_FEATURE));
        this.offsetFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.OFFSET_FEATURE));
        this.supplierFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.SUPPLIER_FEATURE));
        this.employeeFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.EMPLOYEE_FEATURE));
    }
    isFeatureAvailable(featureKeyIDP) {
        let storageFeature = [];
        let paramFeature;
        if (featureKeyIDP) {
            paramFeature = JSON.stringify(featureKeyIDP[1]).slice(1, -1);
            if (paramFeature == 'BY_DEFAULT_FEATURE') {
                return true;
            }
            for (const featureKeyIDPs of featureKeyIDP[0] || []) {
                switch (featureKeyIDPs) {
                    case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                        storageFeature = this.netzeroAdminFeature;
                        break;
                    case ApplicationKeyID.ADMIN_KEY_ID:
                        storageFeature = this.adminFeature;
                        break;
                    case ApplicationKeyID.NETZERO_KEY_ID:
                        storageFeature = this.netzeroFeature;
                        break;
                    case ApplicationKeyID.ENERGY_KEY_ID:
                        storageFeature = this.energyFeature;
                        break;
                    case ApplicationKeyID.WATER_KEY_ID:
                        storageFeature = this.waterFeature;
                        break;
                    case ApplicationKeyID.ENVIRO_KEY_ID:
                        storageFeature = this.enviroFeature;
                        break;
                    case ApplicationKeyID.CONNECT_KEY_ID:
                        storageFeature = this.connectFeature;
                        break;
                    case ApplicationKeyID.OFFSET_KEY_ID:
                        storageFeature = this.offsetFeature;
                        break;
                    case ApplicationKeyID.SUPPLIER_KEY_ID:
                        storageFeature = this.supplierFeature;
                        break;
                    case ApplicationKeyID.EMPLOYEE_KEY_ID:
                        storageFeature = this.employeeFeature;
                        break;
                    default:
                        storageFeature = [];
                        break;
                }
                const matchingFeature = storageFeature.find((f) => f['keyID'] == paramFeature);
                if (matchingFeature && matchingFeature['count'] > 0) {
                    return true;
                }
            }
        }
        return false;
    }
}
IsFeatureAvailable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsFeatureAvailable, deps: [{ token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
IsFeatureAvailable.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsFeatureAvailable, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsFeatureAvailable, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }]; } });

class FeatureGuard {
    constructor(router, isFeatureAvailable) {
        this.router = router;
        this.isFeatureAvailable = isFeatureAvailable;
    }
    canActivate(next) {
        let featureGuard = false;
        const featureKeyID = next.data.featureKeyID;
        featureGuard = this.isFeatureAvailable.isFeatureAvailable(featureKeyID);
        if (featureGuard) {
            return true;
        }
        else {
            return this.router.createUrlTree(['/feature-not-available']);
        }
    }
}
FeatureGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureGuard, deps: [{ token: i1$1.Router }, { token: IsFeatureAvailable }], target: i0.ɵɵFactoryTarget.Injectable });
FeatureGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: IsFeatureAvailable }]; } });

class FeatureDirective {
    constructor(_er, renderer, isFeatureAvailable) {
        this._er = _er;
        this.renderer = renderer;
        this.isFeatureAvailable = isFeatureAvailable;
    }
    set isDisableFeature(featureKeyID) {
        if (!this.isFeatureAvailable.isFeatureAvailable(featureKeyID)) {
            // this.renderer.setAttribute(this._er.nativeElement, 'disabled', 'true');
            this.renderer.setProperty(this._er.nativeElement, 'disabled', true);
            // this._er.nativeElement.disabled = true;
        }
        // else {
        //     this.renderer.setProperty(this._er.nativeElement, 'disabled', false);
        // }
    }
}
FeatureDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: IsFeatureAvailable }], target: i0.ɵɵFactoryTarget.Directive });
FeatureDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: FeatureDirective, selector: "[isDisableFeature]", inputs: { isDisableFeature: "isDisableFeature" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isDisableFeature]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: IsFeatureAvailable }]; }, propDecorators: { isDisableFeature: [{
                type: Input
            }] } });
class FeatureDirectiveModule {
}
FeatureDirectiveModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureDirectiveModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule, declarations: [FeatureDirective], exports: [FeatureDirective] });
FeatureDirectiveModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FeatureDirective],
                    exports: [FeatureDirective]
                }]
        }] });
class FeatureDirective2 {
    constructor(templateRef, viewContainer, isFeatureAvailable) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.isFeatureAvailable = isFeatureAvailable;
    }
    set isRenderFeature(featureKeyID) {
        let renderFeature = false;
        renderFeature = featureKeyID ? this.isFeatureAvailable.isFeatureAvailable(featureKeyID) : true;
        if (renderFeature) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
FeatureDirective2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirective2, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: IsFeatureAvailable }], target: i0.ɵɵFactoryTarget.Directive });
FeatureDirective2.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: FeatureDirective2, selector: "[isRenderFeature]", inputs: { isRenderFeature: "isRenderFeature" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirective2, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isRenderFeature]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: IsFeatureAvailable }]; }, propDecorators: { isRenderFeature: [{
                type: Input
            }] } });
class FeatureDirectiveModule2 {
}
FeatureDirectiveModule2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule2, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureDirectiveModule2.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule2, declarations: [FeatureDirective2], exports: [FeatureDirective2] });
FeatureDirectiveModule2.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule2 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule2, decorators: [{
            type: NgModule,
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

export { ADMIN_FEATURE_CONSTANT, ApplicationFeature, CARBON_FEATURE_CONSTANT, CONNECT_FEATURE_CONSTANT, ENERGY_FEATURE_CONSTANT, ENVIRO_FEATURE_CONSTANT, FeatureDirective, FeatureDirective2, FeatureDirectiveModule, FeatureDirectiveModule2, FeatureGuard, FeatureJson, FeatureService, FeatureServiceComponent, FeatureServiceModule, FeatureServiceService, IsFeatureAvailable, WATER_FEATURE_CONSTANT };
//# sourceMappingURL=library-feature-service.js.map
