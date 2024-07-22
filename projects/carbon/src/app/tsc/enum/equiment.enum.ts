export enum EquipmentTabEnum {
    PURCHASE = 'PURCHASE',
    SALES = 'SALES',
    RETROFIT ='RETROFIT',
}

export enum EquipmentTypeKeyIDEnum {
    SCREENING_NEW_EQUIPMENT = 'screening-new-equipment',
    SCREENING_SOLD_RETIRED_EQUIPMENT ='screening-sold-retired-equipment',
    CONTRACTOR_NEW_EQUIPMENT ='contractor-new-equipment',
    CONTRACTOR_SOLD_RETIRED_EQUIPMENT = 'contractor-sold-retired-equipment',
}

export enum CalculationApproachKeyIDEnum {
    CALCULATION_SCREENING = 'screening-method',
    CALCULATION_SERVICE_BY_CONTRACTOR = 'lifecycle-stage-approach-simplified-material-balance-approach',
    CALCULATION_SERVICE_MYSELF = 'sales-based-approach-material-balance-approach',
    CALCULATION_PRODUCT_MANUFACTURER = 'fugitive-product-manufacturer',
    EMPLOYEE_COMMUTE_AVGERAGE_METHOD = 'average-method',
    EMPLOYEE_COMMUTE_DISTANCE_METHOD = 'distance-method',
    EMPLOYEE_COMMUTE_FUEL_METHOD = 'fuel-method',
    EMPLOYEE_COMMUTE_DISTANCE_FUEL_METHOD = 'distance-or-fuel-based',
}

