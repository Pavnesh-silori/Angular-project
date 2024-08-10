export interface OrganizationM {
    id: number;
    name: string;
    type: string;
    logoUrl: string;
    imgID: number;
    status: string;
    stateCode: string;
    stateName: string;
    countryCode: string;
    countryName: string;
    city: string;
    zipCode: string;
    address1: string;
    timeZoneID: number;
    timeZoneName: string;
    fiscalStartMonth: string;
    facilityCount: number;
}

export class Organization implements OrganizationM {
    id;
    name;
    type;
    logoUrl;
    imgID;
    status;
    stateCode;
    stateName;
    countryCode;
    countryName;
    city;
    zipCode;
    address1;
    timeZoneID;
    timeZoneName;
    fiscalStartMonth;
    facilityCount;
}

export interface OrgAccessM {
    id: number;
    name: string;
    logo: string;
}

export class OrgAccess implements OrgAccessM {
    id;
    name;
    logo;
}
export interface OrgSiteAccessM {
    totalCount: number;
    pageNo: number;
    records: OrgSiteRecord[];
}

export interface OrgSiteRecord {
    orgID: number;
    orgName: string;
    id: number;
    name: string;
    logo: string;
    subscriptionStatus: string;
}

export class OrgSiteAccess implements OrgSiteAccessM {
    totalCount;
    pageNo;
    records;
}