export enum OrgSizeEnum {
    SME = 'sme',
    NON_SME = 'non-sme'
}

export enum SMEEnum {
    minBaseYear = 2018
}

export enum EnterpriseEnum {
    MIN_BASE_YEAR = 2015,
    DEFAULT_BASE_YEAR = 2020
}

export enum ScopeTwoMethodEnum {
    LOCATION_BASED = 'location-based',
    MARKET_BASED = 'market-based'
}

export enum SBTiTargetEnum {
    DEFAULT_EXCLUDED_EMISSION_PCT = 0,
}

export enum StatusEnum {
    PENDING = 'PENDING',
    VERIFIED = 'VERIFIED'
}

export enum NearTermEnum {
    NEAR_TERM_MAINTENANCE = 'NEAR_TERM_MAINTENANCE',
    NEAR_TERM_REDUCTION = 'NEAR_TERM_REDUCTION',
    NEAR_TERM_RENEWABLE = 'NEAR_TERM_RENEWABLE',
    NEAR_TERM_ENGAGEMENT = 'NEAR_TERM_ENGAGEMENT',
    DEFAULT_REDUCTION_TARGET_NAME = 'SBTi near term reduction target',
    DEFAULT_MAINTENANCE_TARGET_NAME = 'SBTi near term maintenance target',
    MAX_TARGET_YEAR = 2030,
    MAX_EXCLUDED_EMISSION_PCT = 5,
    MIN_TOTAL_REDUCTION_PERCENTAGE = 42,
    MIN_TOTAL_REDUCTION_PERCENTAGE_S3 = 25,
    TOTAL_REDUCTION_MULTIPLIER_CONST = 4.2,
    TOTAL_REDUCTION_MULTIPLIER_CONST_S3 = 2.5,
    AUTO_CALCULATED = 'auto-calculated',
    CUSTOM_RANGE = 'custom-range',
}

export enum LongTermEnum {
    LONG_TERM_NETZERO = 'LONG_TERM_NETZERO',
    LONG_TERM_RENEWABLE = 'LONG_TERM_RENEWABLE',
    DEFAULT_REDUCTION_TARGET_NAME = 'SBTi long term netzero target',
    MIN_TOTAL_REDUCTION_PERCENTAGE = 90,
    TARGET_YEAR = 2050,
    MAX_S1_S2_EXCLUDED_EMISSION_PCT = 5,
    MAX_S3_EXCLUDED_EMISSION_PCT = 10,
    TOTAL_REDUCTION_MULTIPLIER_CONST = 9,
}

export const StatusList = [
    { value: StatusEnum.PENDING, view: 'Pending SBTi verification' },
    { value: StatusEnum.VERIFIED, view: 'SBTi verified' }
];

export enum ScopeCoverageEnum {
    SCOPE_1_2 = 'SCOPE_1_2',
    SCOPE_3 = 'SCOPE_3'
}

export const ScopeCoverageList = [
    { value: [1, 2], view: 'Scope 1 and 2', key: ScopeCoverageEnum.SCOPE_1_2 },
    { value: [3], view: 'Scope 3', key: ScopeCoverageEnum.SCOPE_3 }
];

export enum CalculationMethodEnum {
    CROSS_SECTOR_ABSOLUTE_REDUCTION = 'Cross-sector absolute reduction',
}
