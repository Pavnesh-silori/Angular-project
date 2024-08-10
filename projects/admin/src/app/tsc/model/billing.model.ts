export interface BillingProfileM {
    billingProfileID: number;
    userName: string;
    userEmail: string;
    userCountryCallingCode: number;
    userContactNumber: string;
    userCountryCode: string;
    orgID: number;
    companyName: string;
    billingAddress: string;
    city: string;
    zipCode: string;
    stateCode: string;
    stateName: string;
    countryCode: string;
    countryName: string;
    extraInvoiceEmails: string;
    tinNo: number;
    isDefault: boolean;
}