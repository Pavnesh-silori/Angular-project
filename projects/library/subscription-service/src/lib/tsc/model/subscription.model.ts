
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
