export interface ExpiringSubscriptionI {
    planName: string;
    planType: string;
    priceType: string;
    subscriptionID: number;
    subscriptionDayLeft: number;
    futureSubscrptionExists: boolean;
}
export declare class ExpiringSubscriptionM implements ExpiringSubscriptionI {
    planName: any;
    planType: any;
    priceType: any;
    subscriptionID: any;
    subscriptionDayLeft: any;
    futureSubscrptionExists: any;
}
