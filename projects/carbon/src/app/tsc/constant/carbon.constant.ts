import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";

export const CARBON_CONSTANT = {
    // data collection method key id below are just sample
    // FORM_COLLECTION_METHOD_KEY_ID: 'FORM',
    // API_COLLECTION_METHOD_KEY_ID: 'API',

    // data entry method key id
    ENERGY_CONSUMED: "energy-consumed",
    METER_READING: "meter-reading",
    AREA_BASED_METHOD: "area-based-method",
    PRICE_BASED_METHOD: "price-based-method",

    /* factor type standard key_id */
    CUSTOM_EMISSION_FACTOR: 'custom-emission-factor',
    CUSTOM_ESTIMATION_FACTOR: 'custom-estimation-factor',

    // scope 3 config delete
    IMPORT_RECORD_CONFIG_DELETE: "import-record-config-delete",

    // scope 3 record delete
    IMPORT_RECORD_DELETE: "import-record-delete",

    DI_FUEL_ENERGY_MONITOR: 'fuel-energy-monitor',
    DI_STANDARD: 'standard',
    ODOMETER_READING: "odometer-reading",
    ENARGY_GENERATED: "energy-generated",

    fuelEnergyMonitorInput: 'fuel-energy-monitor',
    standardDataInput: 'standard',
    odometerReadingInput: "odometer-reading",
    energyGeneratedInput: "energy-generated",
    nonRoadVehicleTypeInput: 'non-road',

    CEF_DATABASE: 'database',

    // activity_data view
    SCOPE_2_VIEW: 'scope-2',
    SCOPE_3_SPEND_BASED_VIEW: 'scope-3-spend-based',
    STATIONARY_COMBUSTION_VIEW: 'stationary-combustion',
    MOBILE_COMBUSTION_VIEW: 'mobile-combustion',
    WASTE_GENERATED_IN_OPERATIONS_VIEW: 'waste-generated-in-operations',
    PURCHASED_GOODS_AND_SERVICES_VIEW: 'purchased-goods-and-services',
    EMPLOYEE_COMMUTING: 'employee-commuting',
    OTHER_FUGUTIVE: 'other-fugitive-emission',


    /* gas */
    CARBON_DIOXIDE: 'carbon-dioxide',
    METHANE: 'methane',
    NITROUS_OXIDE: 'nitrous-oxide',

    //scope ids
    SCOPE1_ID: 1,
    SCOPE2_ID: 2,
    SCOPE3_ID: 3,

    //vechile type
    VEHICLE_TYPE_NON_ROAD: 'non-road',
    VEHICLE_TYPE_ON_ROAD: 'on-road',

    // maximum borewell noc file size
    maxBorewellNOCFileSize: 10485760, /* 10 MB */
    BOREWELL_NOC: 'BOREWELL_NOC',
    invalidNOCFileTypeError: 'Invalid file type! Please upload file type .pdf only',
    invalidNOCFileSizeError: 'Invalid file size! The size limit for noc file is 10.0 MB. Reduce the file size and try again.',

    ACTIVE_STATUS: 'ACTIVE',
    INACTIVE_STATUS: 'INACTIVE',

    DEFAULT_EMISSION_UNIT: {
        id: 26,
        name: 'tCO2e',
        keyID: 'tCO2e'
    },

    // subsidiary
    DECLINE_DR: 'DECLINE',
    DECLINE_BTN_LABEL: 'Decline',
    RE_REQUEST_BTN_LABEL: 'Re-request',

    // emission request
    ER_U_EDIT: 'EDIT',
    ER_U_RE_REQUEST: 'RE_REQUEST',

    YES: 'YES',
    NO: 'NO',

    // RECALCULATION_TRIGGER
    ACTIVITY_DATA_CREATE: 'ACTIVITY_DATA_CREATE',
    ACTIVITY_DATA_UPDATE: 'ACTIVITY_DATA_UPDATE',
    SETTING_CHANGE: 'SETTING_CHANGE',
    CUSTOM_EMISSION_FACTOR_CHANGE: 'CUSTOM_EMISSION_FACTOR_CHANGE',
    CUSTOM_ESTIMATION_FACTOR_CHANGE: 'CUSTOM_ESTIMATION_FACTOR_CHANGE',

    // right aligned dialog config 
    RIGHT_DIALOG_CONFIG: {
        disableClose: true,
        minWidth: '40vw',
        maxWidth: '40vw',
        height: '100%',
        position: { right: '-2px', top: '0px' },
    },

    /* latest gwp_dataset key id */
    LATEST_GWP_DATASET_KEY_ID: 'AR-5',

    /* default oxidation factor value */
    DEFAULT_OXIDATION_FACTOR: 1,
    DEFAULT_BIOMASS_PCT: 0,
};

export const MY_DATE_FORMAT = {
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
    }
};

export const date_format_providers = [
    {
        provide: DateAdapter,
        useClass: MomentDateAdapter,
        deps: [MAT_DATE_LOCALE],
    },
    {
        provide: MAT_DATE_FORMATS,
        useValue: MY_DATE_FORMAT,
    }
];

