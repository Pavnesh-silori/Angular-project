export interface SubsidiaryEmissionDataM {
    consolidationApproachIDs: number[];
    consolidationApproachKeyID: string[];
    createdBy: number;
    creationDate: string;
    emission: EmissionM[];
    emissionBy: string;
    endDate: string;
    lastUpdatedBy: number;
    lastUpdationDate: string;
    recodeID: number;
    rootOrgID: number;
    startDate: string;
    subsidiaryID: string;
    subsidiaryName: string;
} 

export class SubsidiaryEmissionData implements SubsidiaryEmissionDataM {
    consolidationApproachIDs;
    consolidationApproachKeyID;
    createdBy;
    creationDate;
    emission;
    emissionBy;
    endDate;
    lastUpdatedBy;
    lastUpdationDate;
    recodeID;
    rootOrgID;
    startDate;
    subsidiaryID;
    subsidiaryName;
}

export interface EmissionM {
    activityID: number;
    activityKeyID: string;
    activityName: string;
    equityShareApproach: ApproachWishEmissionM;
    financialControlApproach: ApproachWishEmissionM;
    operationalControlApproach: ApproachWishEmissionM;
    scope: number;
    scopeName: string;
}
export interface ApproachWishEmissionM {
    consolidationApproachKeyID: string;
    emission: number;
    biogenicEmission: number;
}
