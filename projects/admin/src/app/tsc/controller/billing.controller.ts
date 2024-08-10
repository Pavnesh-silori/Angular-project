import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { BillingProfileM } from '../model/billing.model';
import { ResponseM } from '../model/response.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class BillingController {

    constructor(
        private http: HttpClient,
    ) { }

    getCurrentBillingProfile(rootOrgID, subscriptionID): Observable<ResponseM> {
        let params = new HttpParams();
        params = params.append('subscriptionID', subscriptionID);

        return this.http.get<ResponseM>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/billing/profile`, { params: params });
    }

    getBillingProfileList(rootOrgID) {
        return this.http.get<BillingProfileM[]>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/billing/profiles`);
    }

    getSelectedBillingProfile(rootOrgID, billingProfileID): Observable<BillingProfileM> {
        return this.http.get<BillingProfileM>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/billing/profile/${billingProfileID}/selected`);
    }

    createBillingProfile(rootOrgID, billingProfile) {
        return this.http.post(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/billing/profile`, billingProfile);
    }

    updateBillingProfile(rootOrgID, billingProfile, billingProfileID) {
        return this.http.patch(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/billing/profile/${billingProfileID}`, billingProfile);
    }

    deleteBillingProfile(rootOrgID, billingProfileID) {
        return this.http.delete(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/billing/profile/${billingProfileID}`);
    }

    makeDefault(rootOrgID, billingProfileID) {
        return this.http.get(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/billing/profile/${billingProfileID}/default`);
    }
}
