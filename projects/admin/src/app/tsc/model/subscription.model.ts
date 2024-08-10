import { ApplicationM } from "./application.model ";

export interface SubscriptionM {
    application: ApplicationM[];
    subscriptionID: number;
    planName: string;
    planType: string;
    planGroupType: string;
    startDate: string;
    endDate: string;
    currencyCode: string;
    priceType: string;
    billedAmount: number;
    addOns: number;
    subscriptionDayLeft: number;
    autoRenewable: boolean;
    planStatus: string;
    isCancelled: boolean;
    paymentMaintainence: string;
}

export interface ExpiringSubscriptionI {
    planName: string;
    planType: string;
    priceType: string;
    subscriptionID: number;
    subscriptionDayLeft: number;
    futureSubscrptionExists: boolean;
}

export class ExpiringSubscriptionM implements ExpiringSubscriptionI {
    planName;
    planType;
    priceType;
    subscriptionID;
    subscriptionDayLeft;
    futureSubscrptionExists;
}