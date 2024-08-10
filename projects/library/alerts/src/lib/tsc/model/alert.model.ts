export interface AlertPageM {
    id: number;
    name: string;
    associatedWith: string;
    type: string;
    status: boolean;
    ruleDescription: string;
}

export class AlertPage implements AlertPageM {
    id;
    name;
    associatedWith;
    type;
    status;
    ruleDescription;
}

export interface AlertRuleM {
    alertType: string;
    name: string;
    parameterID: number,
    isAlertAtDeviceLevel: boolean;
    isSubEntitiesSelected: boolean;
    entityID: number[];
    deviceID: number[];
    periodicAlertType: string;
    frequency: string;
    unitID: number;
    condition: string;
    value: number;
    startValue: number;
    endValue: number;
    userChoice: string;
    userID: number[];
    isAnyOtherUser: boolean;
    otherUserEmail: number[];
    smsFrequency: string;
    emailFrequency: string;
    isShift: boolean;
    shiftID: number[];
}

export class AlertRule implements AlertRuleM {
    alertType;
    name;
    parameterID;
    isAlertAtDeviceLevel;
    isSubEntitiesSelected;
    entityID;
    deviceID;
    periodicAlertType;
    frequency;
    unitID;
    condition;
    value;
    startValue;
    endValue;
    userChoice;
    userID;
    isAnyOtherUser;
    otherUserEmail;
    smsFrequency;
    emailFrequency;
    isShift;
    shiftID;
}

export class AlertStatusI {
    total: number;
    active: number;
    resolved: number;
}

export class AlertStatus implements AlertStatusI {
    total;
    active;
    resolved;
}