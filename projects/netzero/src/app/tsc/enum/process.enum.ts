export enum PROCESS_INPUT_ENUM {
    HEAT = 'heat',
    FUEL = 'fuel',
    ELECTRICITY = 'electricity',
    RAW_MATERIAL = 'raw-material',
    INTERMEDIATE_PRODUCT = 'intermediate-product',
    PRECURSOR_PRODUCT = 'precursor-product'
}

export enum PROCESS_OUTPUT_ENUM {
    ELECTRICITY = 'electricity',
    HEAT = 'heat',
    WASTE_GAS_STREAM = 'waste-gases-stream',
    PROCESS_EMISSIONS = 'process-emissions',
    BY_PRODUCT_AND_WASTE = 'by-product',
    INTERMEDIATE_PRODUCT = 'intermediate-product',
    PRECURSOR_PRODUCT = 'precursor-product',
    CO_PRODUCT = 'co-product',
    FINISHED_PRODUCT = 'finished-product'
}

export enum PROCESS_INPUT_ENTITY_SOURCE_KEYID_ENUM {
    RETURN_FLOW = 'return-flow'
}

export enum PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM {
    VENTED_OR_FLARED = 'vented-or-flared',
    EXPORTED_TO_NON_CBAM_INSTALLATION = 'exported-to-non-cbam-installation',
    EXPORTED_TO_CBAM_INSTALLATION = 'exported-to-cbam-installation',
    EXPORTED_FROM_THIS_PROCESS = 'exported-from-this-process',
    HEAT_GENERATED_AND_EXPORTED = 'heat-generated-within-process-using-fuel-and-exported',
    CONSUMED_IN_PRODUCTION_ROUTE = 'consumed-in-this-production-route',
    CONSUMED_AS_FUEL_IN_PRODUCTION_ROUTE = 'consumed-as-fuel-in-same-production-route',

}
