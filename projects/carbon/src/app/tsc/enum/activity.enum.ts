export enum ActivityKeyIDEnum {
    PURCHASED_ELECTRICITY = "purchased-electricity",
    PURCHASED_HEAT_STEAM = "purchased-heat-steam",
    PURCHASED_COOLING = "purchased-cooling",
    STATIONARY_COMBUSTION = "stationary-combustion",
    MOBILE_COMBUSTION = "mobile-combustion",
    // PURCHASED_GOODS_AND_SERVICES = 'purchased-goods-and-services',
    // CAPITAL_GOODS = 'capital-goods',
    // UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION = 'upstream-transportation-and-distribution',
    // DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION = 'downstream-transportation-and-distribution',
    // BUSINESS_TRAVEL = 'business-travel',
    // REFRIGERATION_AC_AND_FIRE_SUPPRESSION = "refrigeration-ac-and-fire-suppression",
    // OTHER_FUGITIVE_EMISSION = 'other-fugitive-emission',
    // WASTE_GENERATED_IN_OPERATIONS = "waste-generated-in-operations",
    // EMPLOYEE_COMMUTING = 'employee-commuting',
    // PROCESS_EMISSION = 'process-emission',
    // CHP_ATTRIBUTION = 'chp-attribution',
    // PROCESS_ELECTRICITY_CONSUMPTION = 'process-electricity-consumption',
    // PROCESS_HEAT_CONSUMPTION = 'process-heat-consumption',
    // PROCESS_FUEL_CONSUMPTION = 'process-fuel-consumption',
    // PURCHASED_PRECURSOR = 'purchased-precursor',
    // PROCESS_PRECURSOR_CONSUMPTION = 'process-precursor-consumption',
    // PROCESS_ELECTRICITY_EXPORT = 'process-electricity-export',
    // PROCESS_HEAT_EXPORT = 'process-heat-export',
    // PROCESS_PRECURSOR_EXPORT = 'process-precursor-export',
    // PROCESS_WASTE_GAS_EXPORT = 'process-waste-gas-export',
    // PROCESS_INTERMEDIATE_PRODUCT_EXPORT = 'process-intermediate-product-export',
    // PROCESS_PRODUCTION_LEVEL = 'process-production-level',

    //scope 3
    PURCHASED_GOODS_AND_SERVICES = 'purchased-goods-and-services',
    CAPITAL_GOODS = 'capital-goods',
    FUEL_ENERGY_RELATED_ACTIVITIES = 'fuel-and-energy-related-activities',
    UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION = 'upstream-transportation-and-distribution',
    DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION = 'downstream-transportation-and-distribution',
    DOWNSTREAM_LEASED_ASSETS = 'downstream-leased-assets',
    UPSTREAM_LEASED_ASSETS = 'upstream-leased-assets',
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
    CARBON_PRICING = "carbon-pricing",

    // factor standard database 
    US_EEIO_KEY_ID = 'us-eeio',
    // factor standard database 
    PROCESSING_SOLD_PRODUCTS = 'processing-of-sold-products',
    USE_SOLD_PRODUCTS = 'use-of-sold-products',
    END_OF_LIFE_TREATMENT_OF_SOLD_PRODUCTS = 'end-of-life-treatment-of-sold-products',
    FRANCHISES = 'franchises',
    INVESTMENTS = 'investments',
}

export enum ProcessEmissionActivityTypeKeyIDEnum {
    STANDARD = 'STANDARD',
    CUSTOM = 'CUSTOM',
}


export enum MethodKeyIDEnum {
    SPEND_BASED_METHOD = "spend-based",
    AVERAGE_BASED_METHOD = "average-method",
    SUPPLIER_SPECIFIC_METHOD = "supplier-specific",
    DISTANCE_METHOD = "distance-method"
}

export const ActivityKeyTabs = {
    "purchased-goods-and-services": [
        {
            label: 'Spend Based Method',
            routerLink: `${MethodKeyIDEnum.SPEND_BASED_METHOD}/page`,
        },
        {
            label: 'Average Data Method',
            routerLink: `${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
        }
        // {
        //     label: 'Supplier Specific Method',
        //     routerLink: `${MethodKeyIDEnum.SUPPLIER_SPECIFIC_METHOD}/page`,
        // }

    ],

    "capital-goods": [
        {
            label: 'Spend Based Method',
            routerLink: `${MethodKeyIDEnum.SPEND_BASED_METHOD}/page`,
        },
        {
            label: 'Average Data Method',
            routerLink: `${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
        }
        // {
        //     label: 'Supplier Specific Method',
        //     routerLink: `${MethodKeyIDEnum.SUPPLIER_SPECIFIC_METHOD}/page`,
        // }
    ]
};

export const ActivityKeyMessages = {
    "purchased-goods-and-services":
    {
        pageTitle: 'Purchased Goods and Services',
        pageSubTitle: 'Records of purchased goods and services used by your organization.',
    },

    "capital-goods": {
        pageTitle: 'Capital Goods',
        pageSubTitle: 'Records related to the procurement and acquisition of capital goods for a business to operate.',
    },
};
