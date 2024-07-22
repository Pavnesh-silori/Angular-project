export interface EscalationPermissionM {
    isEscalationAllowed: boolean;
}
export declare class EscalationPermission implements EscalationPermissionM {
    isEscalationAllowed: any;
}
export interface EscalationLevelCountM {
    level: number;
}
export declare class EscalationLevelCount implements EscalationLevelCountM {
    level: any;
}
export interface EscalationLevelInfoM {
    alertRuleID: number;
    escalationRuleID: number;
    level: number;
    intervalValue: number;
    intervalFrequencyKey: string;
    intervalFrequencyName: string;
    notificationPrefValue: number;
    notificationPrefKey: string;
    notificationPrefName: string;
    userChoice: string;
    userID: number[];
    isAnyOtherUser: boolean;
    otherUserEmail: number[];
}
export declare class EscalationLevelInfo implements EscalationLevelInfoM {
    alertRuleID: any;
    escalationRuleID: any;
    level: any;
    intervalValue: any;
    intervalFrequencyKey: any;
    intervalFrequencyName: any;
    notificationPrefValue: any;
    notificationPrefKey: any;
    notificationPrefName: any;
    userChoice: any;
    userID: any;
    isAnyOtherUser: any;
    otherUserEmail: any;
}
