import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})

export class ActivityController {
    constructor(private http: HttpClient) { }

    getAllActivity() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}activity`);
    }

    getActivityByID(activityID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}activity/${activityID}`);
    }

    getActivityListByScopeID(scopeID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}scopes/${scopeID}/activity`);
    }

    getActivityListByScopeKeyID(scopeKeyID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}scope/${scopeKeyID}/activity`);
    }

    getAllActivityNew() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}activity-new`);
    }

    getAllFormsType() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}activity-types`)
    }

    getActivityCalculationApproach(activityID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}activity/${activityID}/calculation-approach`);
    }


}
