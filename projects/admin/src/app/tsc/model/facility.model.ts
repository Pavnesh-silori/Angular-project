export interface FacilityPageM {
    id: number;
    name: string;
    status: string;
    stateCode: string;
    stateName: string;
    countryCode: string;
    countryName: string;
}

export class FacilityPage implements FacilityPageM{
    id;
    name;
    status;
    stateCode;
    stateName;
    countryCode;
    countryName;
}