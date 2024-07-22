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
export declare class Organization implements OrganizationM {
    id: any;
    name: any;
    type: any;
    logoUrl: any;
    imgID: any;
    status: any;
    stateCode: any;
    stateName: any;
    countryCode: any;
    countryName: any;
    city: any;
    zipCode: any;
    address1: any;
    timeZoneID: any;
    timeZoneName: any;
    fiscalStartMonth: any;
    facilityCount: any;
}
export interface OrgAccessM {
    id: number;
    name: string;
    logo: string;
}
export declare class OrgAccess implements OrgAccessM {
    id: any;
    name: any;
    logo: any;
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
export declare class OrgSiteAccess implements OrgSiteAccessM {
    totalCount: any;
    pageNo: any;
    records: any;
}
