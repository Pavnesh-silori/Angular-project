export interface OrgM {
    orgID: number;
    orgName: string;
    rootOrgID: number;
    orgStatus: string;
    orgAddress1: string;
    orgCountry: string;
    orgState: string;
    orgCity: string;
    orgZipCode: string; 
    orgTimeZoneID: number;  
    orgFiscalStartMonth: string;
}

export interface OrgDataM {
    organization:  OrgM[];
    totalCount: number;
}