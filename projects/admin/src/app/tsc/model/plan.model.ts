import { ApplicationM } from '@library/application-service';

export interface PlanM {
    application: ApplicationM[];
    planID:number;
    planName: string;
    billedAmount: number;
    currencyCode: string;
    priceType: string;
    planType: string;
    planGroupType: string;
    frequency: string;
    frequencyInterval: number,
    isCurrentPlan: boolean;
    subscriptionID: number;
}

export interface AppPlanM {
    application: ApplicationM[];
    planID:number;
    planName: string;
    planType: string;
    planGroupType: string;
    priceType: string;
    currencyCode: string;
    billedAmount: number;
    frequency: string;
}