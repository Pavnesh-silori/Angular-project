export interface AlertPageM {
    id: number;
    name: string;
    associatedWith: string;
    type: string;
    status: boolean;
    ruleDescription: string;
}
export declare class AlertPage implements AlertPageM {
    id: any;
    name: any;
    associatedWith: any;
    type: any;
    status: any;
    ruleDescription: any;
}
export interface AlertRuleM {
    alertType: string;
    name: string;
    parameterID: number;
    isAlertAtDeviceLevel: boolean;
    isSubEntitiesSelected: boolean;
    entityID: number[];
    deviceID: number[];
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
    shiftID: number[];
}
export declare class AlertRule implements AlertRuleM {
    alertType: any;
    name: any;
    parameterID: any;
    isAlertAtDeviceLevel: any;
    isSubEntitiesSelected: any;
    entityID: any;
    deviceID: any;
    frequency: any;
    unitID: any;
    condition: any;
    value: any;
    startValue: any;
    endValue: any;
    userChoice: any;
    userID: any;
    isAnyOtherUser: any;
    otherUserEmail: any;
    smsFrequency: any;
    emailFrequency: any;
    shiftID: any;
}
