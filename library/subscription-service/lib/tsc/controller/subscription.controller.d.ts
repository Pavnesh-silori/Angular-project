import { HttpClient } from "@angular/common/http";
import { ExpiringSubscriptionM } from "../model/subscription.model";
import * as i0 from "@angular/core";
export declare class SubscriptionController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    orgPlanType(orgID: any): import("rxjs").Observable<Object>;
    getExpiringSubscription(orgID: any, applicationID: any): import("rxjs").Observable<ExpiringSubscriptionM>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubscriptionController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubscriptionController>;
}
