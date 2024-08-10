import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { AppPlanM, PlanM } from '../model/plan.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PlanController {

    constructor(
        private http: HttpClient,
    ) { }

    getLoggedInOrgCurrency(rootOrgID) {
        return this.http.get(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/currency`);
    }

    getPlanList(rootOrgID, subscriptionID, loggedInOrgCountryCode): Observable<PlanM[]> {
        let params = new HttpParams();
        params = params.append('loggedInOrgCountryCode', loggedInOrgCountryCode);
        params = params.append('subscriptionID', subscriptionID);
        
        return this.http.get<PlanM[]>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/plan`, { params: params });
    }

    getApplicationPlan(rootOrgID, applicationKeyID, loggedInOrgCountryCode): Observable<AppPlanM[]> {
        let params = new HttpParams();
        params = params.append('loggedInOrgCountryCode', loggedInOrgCountryCode);
        return this.http.get<AppPlanM[]>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/application/${applicationKeyID}/plan`, { params: params });
    }

}
