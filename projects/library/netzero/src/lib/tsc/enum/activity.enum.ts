export enum ACTIVITY_KEYID_ENUM {
    PURCHASED_ELECTRICITY = "purchased-electricity",
    PURCHASED_HEAT_STEAM = "purchased-heat-steam",
    PURCHASED_COOLING = "purchased-cooling",
    STATIONARY_COMBUSTION = "stationary-combustion",
    MOBILE_COMBUSTION = "mobile-combustion",
    PURCHASED_GOODS_AND_SERVICES = 'purchased-goods-and-services',
    CAPITAL_GOODS = 'capital-goods',
    UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION = 'upstream-transportation-and-distribution',
    DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION = 'downstream-transportation-and-distribution',
    BUSINESS_TRAVEL = 'business-travel',
    REFRIGERATION_AC_AND_FIRE_SUPPRESSION = "refrigeration-ac-and-fire-suppression",
    OTHER_FUGITIVE_EMISSION = 'other-fugitive-emission',
    WASTE_GENERATED_IN_OPERATIONS = "waste-generated-in-operations",
    EMPLOYEE_COMMUTING = 'employee-commuting',
    PROCESS_EMISSION = 'process-emission',
    CHP_ATTRIBUTION = 'chp-attribution',
    PROCESS_ELECTRICITY_CONSUMPTION = 'process-electricity-consumption',
    PROCESS_HEAT_CONSUMPTION = 'process-heat-consumption',
    PROCESS_FUEL_CONSUMPTION = 'process-fuel-consumption',
    PURCHASED_PRECURSOR = 'purchased-precursor',
    PROCESS_PRECURSOR_CONSUMPTION = 'process-precursor-consumption',
    PROCESS_ELECTRICITY_EXPORT = 'process-electricity-export',
    PROCESS_HEAT_EXPORT = 'process-heat-export',
    PROCESS_PRECURSOR_EXPORT = 'process-precursor-export',
    PROCESS_WASTE_GAS_EXPORT = 'process-waste-gas-export',
    PROCESS_INTERMEDIATE_PRODUCT_EXPORT = 'process-intermediate-product-export',
    PROCESS_PRODUCTION_LEVEL = 'process-production-level',
    SPEND_BASED_METHOD = "spend-based-method",

    // factor standard database 
    US_EEIO_KEY_ID = 'us-eeio',
    // factor standard database 
}

export enum ProcessEmissionActivityTypeKeyIDEnum {
    STANDARD = 'STANDARD',
    CUSTOM = 'CUSTOM',
}
