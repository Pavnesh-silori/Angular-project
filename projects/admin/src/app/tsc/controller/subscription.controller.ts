import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { ExpiringSubscriptionM, SubscriptionM } from '@Admin/model/subscription.model';
import { ResponseM } from '@Admin/model/response.model';

@Injectable({
    providedIn: 'root'
})

export class SubscriptionController {

    constructor(
        private http: HttpClient,
    ) { }

    getSubscriptionByRootOrgID(rootOrgID) {
        return this.http.get<SubscriptionM[]>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/subscriptions`);
    }

    cancelSubscription(rootOrgID, subscriptionID) {
        return this.http.get<ResponseM>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/subscription/${subscriptionID}/cancel`);
    }

    getExpiringSubscription(orgID, applicationID) {
        return this.http.get<ExpiringSubscriptionM>(`${environment.SUBSCRIPTION_API_URL}organizations/${orgID}/applications/${applicationID}/subscription/expiring`);
    }
}
