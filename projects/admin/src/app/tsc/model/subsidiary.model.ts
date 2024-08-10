export interface SubsidiaryPageM {
    id: number;
    name: string;
    status: string;
    type: string;
    approvalStatus: string;
    stateName: string;
    countryName: string;
    operationalControlPct: number;
    financialControlPct: number;
    equityControlPct: number;
}
export interface SubsidiaryM {
    id: number;
    name: string;
    status: string;
    approvalStatus: string;
    type: string;
    stateCode: string;
    stateName: string;
    countryCode: string;
    countryName: string;
    city: string;
    zipCode: string;
    address1: string;
    operationalControlPct: number;
    financialControlPct: number;
    equityControlPct: number;
    useSustainabilityCloud: boolean;
    subsidiaryOrgID: number;
}

export class Subsidiary implements SubsidiaryM {
    id;
    name;
    status;
    approvalStatus;
    type;
    stateCode;
    stateName;
    countryCode;
    countryName;
    city;
    zipCode;
    address1;
    operationalControlPct;
    financialControlPct;
    equityControlPct;
    useSustainabilityCloud;
    subsidiaryOrgID;
}
