export interface EscalationPermissionM {
    isEscalationAllowed: boolean;
}

export class EscalationPermission implements EscalationPermissionM {
    isEscalationAllowed;
}

export interface EscalationLevelCountM {
    level: number;
}

export class EscalationLevelCount implements EscalationLevelCountM {
    level;
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

export class EscalationLevelInfo implements EscalationLevelInfoM {
    alertRuleID;
    escalationRuleID;
    level;
    intervalValue;
    intervalFrequencyKey;
    intervalFrequencyName;
    notificationPrefValue;
    notificationPrefKey;
    notificationPrefName;
    userChoice;
    userID;
    isAnyOtherUser;
    otherUserEmail;
}