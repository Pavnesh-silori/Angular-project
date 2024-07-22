import { OrgSizeEnum } from "@carbon/enum/sbti.enum";

export interface ActivityM {
    id: number;
    keyID: string;
    name: string;
    emission: number;
    isConfirmed: boolean;
}
export interface ScopeM {
    id: number;
    keyID: string;
    name: string;
    activity: ActivityM[];
}

export interface EmissionDataM {
    scope: ScopeM;
    confirmedActivities: number;
    totalActivities: number;
}

export interface UnitM {
    id: number;
    keyID: string;
    name: string;
}
export interface SbtiBaseYearEmissionM {
    confirmationYear: number;
    unit: UnitM;
    emissionData: EmissionDataM[];
}

export class SbtiBaseYearEmission implements SbtiBaseYearEmissionM {
    confirmationYear;
    unit;
    emissionData;
}

export class TargetBenchmarksGrowthM {
    yearlyGrowthPercentage: number;
    yearlyGrowthSince: number;
    validatedCompanies: number;
    validatedYear: number;
    smeGrowthPercentage: number;
}

export interface ScopeConfirmedEmissionM {
    name: string;
    keyID: string;
    emission: number;
    emissionUnitUomCode: string;
}
export class ScopeEmissionConfirmed implements ScopeConfirmedEmissionM {
    name;
    keyID;
    emission;
    emissionUnitUomCode;
}

export interface TargetBanchmarkCompaniesPageM {
    id: number;
    name: string;
    location: string;
    status: string;
}

export interface DataItem {
    duration: number;
    totalEmission: number;
    targetEmission: number;
    targetAnnualReduction: number;
    scope1Emission: number;
    scope2Emission: number;
    scope3Emission: number;
}
export interface TargetDashboardM {
    targetName: string;
    targetStatus: string;
    targetType: string;
    targetKeyID: string;
    targetOption: string;
    targetYear: number;
    sbtiBaseYear: number;
    scopeCoverage: string;
    unitKeyID: string;
    totalReduction: number;
    annualReduction: number;
    excludedScope1Scope2Emissions: number;
    excludedScope3Emissions: number;
    dashboard: {
        baseYearEmissions: {
            year: number;
            emissionValue: number;
        };
        currentYearEmissions: {
            year: number;
            emissionValue: number;
            reducedPct: number;
        };
        targetYearEmissions: {
            year: number;
            emissionValue: number;
            targetPct: number;
        };
        data: DataItem[];
    }
}
export class TargetDashboard implements TargetDashboardM {
    targetKeyID;
    targetName;
    targetStatus;
    targetType;
    targetOption;
    targetYear;
    sbtiBaseYear;
    scopeCoverage;
    unitKeyID;
    totalReduction;
    annualReduction;
    excludedScope1Scope2Emissions;
    excludedScope3Emissions;
    dashboard: {
        baseYearEmissions: {
            year;
            emissionValue;
        };
        currentYearEmissions: {
            year;
            emissionValue;
            reducedPct;
        };
        targetYearEmissions: {
            year;
            emissionValue;
            targetPct;
        };
        data;
    }
}

export interface SbtiSettingM {
    id: number;
    orgSizeKeyID: OrgSizeEnum;
    orgSizeName: string;
    isBaseYearSameAsGHG: Boolean;
    isUseOfSoldProducts: Boolean;
    sbtiSectorID: number;
    sbtiSectorName: string;
    calculationApproachKeyID: string;
    calculationApproachName: string;
    consolidationApproachKeyID: string;
    consolidationApproachName: string;
}

export class SbtiSetting implements SbtiSettingM {
    isBaseYearSameAsGHG: Boolean;
    id;
    orgSizeKeyID;
    orgSizeName;
    isUseOfSoldProducts: Boolean;
    sbtiSectorID;
    sbtiSectorName;
    calculationApproachKeyID;
    calculationApproachName;
    consolidationApproachKeyID: string;
    consolidationApproachName: string;
}

export interface SbtiSectorM {
    id: number;
    name: string;
}

export class SbtiSector implements SbtiSectorM {
    id;
    name;
}

export interface SBTITargetSetBooleans {
    baseYear: {
        flag: boolean,
        message: string,
    },
    reductionTarget: {
        flag: boolean,
        message: string,
        scopeCheck: {
            isScope1AndTwoSet: boolean,
            isScope3Set: boolean
        }
    },
    maintenanceTarget: {
        flag: boolean,
        message: string,
    },
    netzeroTarget: {
        flag: boolean,
        message: string,
        scopeCheck: {
            isScope1AndTwoSet: boolean,
            isScope3Set: boolean
        }
    }
}

export interface SbtiPageM {
    id: number;
    name: string;
    sbtiStatus: string;
    targetMethod: string;
    termName: string;
    termKeyID: string;
    orgSize: string;
    scopes: string;
    uomName: string;
    targetYearEmission: number;
    currentYearEmission: number;
    domain: string;
    type: string;
    targetYear: number;
    progress: {
        currentYearTargetReduction: number;
        currentYearAchievedReduction: number;
        uomName: string;
        date: [
            {
                year: number;
                targetedEmission: number;
                currentEmission: number;
            }
        ]
    }
}
export class SbtiPage implements SbtiPageM {
    id;
    name;
    sbtiStatus;
    targetMethod;
    termName;
    termKeyID
    scopes;
    orgSize
    uomName;
    targetYearEmission;
    currentYearEmission;
    domain;
    type;
    targetYear;
    progress: {
        currentYearTargetReduction;
        currentYearAchievedReduction;
        uomName;
        date: [
            {
                year;
                targetedEmission;
                currentEmission;
            }
        ]
    }
}

export interface SbtiSettingDifferenceM {
    targetName: string;
    targetOption: string;
    targetYear: number;
    totalTargetReduction: number;
    current: {
        targetYearEmission: number;
        annualTargetReduction: number;
        currentYearReduction: number;
        targetStatus: number;
    },
    afterChanges: {
        targetYearEmission: number;
        annualTargetReduction: number;
        currentYearReduction: number;
        targetStatus: string;
    }
}

export class SbtiSettingDifference implements SbtiSettingDifferenceM {
    targetName;
    targetOption;
    targetYear;
    totalTargetReduction;
    current: {
        targetYearEmission;
        annualTargetReduction;
        currentYearReduction;
        targetStatus;
    }
    afterChanges: {
        targetYearEmission;
        annualTargetReduction;
        currentYearReduction;
        targetStatus;
    }
}
export interface SbtiCriteriaM {
    isSbtiBaseYear: boolean;
    isSbtiSettings: boolean;
    isUseOfSoldProducts: boolean;
    isAnyTargetCreated: boolean;
    s3EmissionsPct: number;
    s3NearTermReductionTarget: boolean;
    s3LongTermReductionTarget: boolean;
    s3NearTermTargetEmissionPct: number;
    s3LongTermTargetEmissionPct: number;
    isAnyNearAndLongTermTarget: boolean;
    isNearAndLongTermTargetForScope1And2: boolean;
    isNearAndLongTermTargetForScope3: boolean;
    isIntensityTargetForScope1And2: boolean;
    isIntensityTargetForScope3: boolean;
    isNearTermEngagementTarget: boolean;
    isAnyNearTermReductionTarget: boolean;
}

export class SbtiCriteria implements SbtiCriteriaM {
    isSbtiBaseYear = false;
    isSbtiSettings = false;
    isUseOfSoldProducts = false;
    isAnyTargetCreated = false;
    s3EmissionsPct = 0;
    s3NearTermReductionTarget = false;
    s3LongTermReductionTarget = false;
    s3NearTermTargetEmissionPct = 0;
    s3LongTermTargetEmissionPct = 0;
    isAnyNearAndLongTermTarget = false;
    isNearAndLongTermTargetForScope1And2 = false;
    isNearAndLongTermTargetForScope3 = false;
    isIntensityTargetForScope1And2 = true;
    isIntensityTargetForScope3 = true;
    isNearTermEngagementTarget = true;
    isAnyNearTermReductionTarget = false;
}
