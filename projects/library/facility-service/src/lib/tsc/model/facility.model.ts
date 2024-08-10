export interface FacilityM {
    address1: string;
    id: number;
    name: string;
    logoUrl: string;
    status: string;
    stateCode: string;
    stateName: string;
    countryCode: string;
    countryName: string;
    city: string;
    zipCode: string;
    address: string;
    fiscalStartMonth: string;
    timeZoneID: number;
    timeZoneName: string
}

export class Facility implements FacilityM {
    address1;
    id;
    name;
    logoUrl;
    status;
    stateCode;
    stateName;
    countryCode;
    countryName;
    city;
    zipCode;
    address;
    fiscalStartMonth;
    timeZoneID;
    timeZoneName;
}