export interface AuthorizationM {
    rootOrgID: number;
    orgID: number;
    orgType: string;
    orgStatus: string;
    applicationID: number;
    applicationKeyID: string;
    userID: number;
    userUID: string;
    subscriptionStatus: string;
    subscriptionID: number;
    enableModule: string;
}
