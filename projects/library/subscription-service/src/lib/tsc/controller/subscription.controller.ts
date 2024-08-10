import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ExpiringSubscriptionM } from "../model/subscription.model";

@Injectable({
    providedIn: 'root'
})

export class SubscriptionController {
    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    orgPlanType(orgID) {
        return this.http.get(`${this.environment.SUBSCRIPTION_API_URL}organizations/${orgID}/plan-type`);
    }

    getExpiringSubscription(orgID, applicationID) {
        return this.http.get<ExpiringSubscriptionM>(`${this.environment.SUBSCRIPTION_API_URL}organizations/${orgID}/applications/${applicationID}/subscription/expiring`);
    }
}
