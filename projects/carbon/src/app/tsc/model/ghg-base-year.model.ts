export interface StructuralChangePageM {
    id: number;
    recordID: number;
    entityName: string;
    entityStartYear: number;
    description: string;
    eventDate: string;
}

export class StructuralChangePage implements StructuralChangePageM {
    id;
    recordID;
    entityName;
    entityStartYear;
    description;
    eventDate;
}

export interface EmissionRecord {
    scope: string;
    activityID: number;
    activityKeyID: string;
    activityName: string;
    operationalControlApproach: {
        emission: number;
        emissionUnitID: number;
        consolidationApproachKeyID: string;
    };
    financialControlApproach: {
        emission: number;
        emissionUnitID: number;
        consolidationApproachKeyID: string;
    };
    equityShareApproach: {
        emission: number;
        emissionUnitID: number;
        consolidationApproachKeyID: string;
    };
}

export interface StructuralChangeRecord {
    year: number;
    emissionRecords: EmissionRecord[];
}

export interface StructuralChangeDataM {
    recordID: number;
    type: string;
    entityName: string;
    entityStartYear: number;
    description: string;
    eventDate: string;
    creationDate: string;
    createdBy: string;
    lastUpdationDate: string;
    lastUpdatedBy: string;
    activityTypeID: number;
    structuralChangeData: StructuralChangeRecord[];
}

export class StructuralChangeData implements StructuralChangeDataM {
    recordID;
    type;
    entityName;
    entityStartYear;
    description;
    eventDate;
    creationDate;
    createdBy;
    lastUpdationDate;
    lastUpdatedBy;
    activityTypeID;
    structuralChangeData;
}

export class ghgBaseYearEmissionView implements ghgBaseYearEmissionViewM {
    baseYear;
    recalculationPolicy;
    significanceThresholdPct;
    calculationApproachKeyID: string;
    calculationApproachName: string;
    emissionData;
}

export interface ghgBaseYearEmissionViewM {
    baseYear: number;
    recalculationPolicy: string;
    significanceThresholdPct: number
    calculationApproachKeyID: string;
    calculationApproachName: string;
    emissionData: EmissionDataM[];
}
export interface EmissionDataM {
    scope: ScopeM;
    confirmedActivities: number;
    totalActivities: number;
}
export interface ScopeM {
    id: number;
    keyID: string;
    name: string;
    activity: ActivityM[];
}
export interface ActivityM {
    id: number;
    keyID: string;
    name: string;
    emissionValue: number;
    unitID: number;
    isConfirmed: boolean;
}

export class ghgBaseYearAllEmissions implements ghgBaseYearAllEmissionsM {
    emissionData;
}
export interface ghgBaseYearAllEmissionsM{
    emissionData: EmissionDataM[]
}


