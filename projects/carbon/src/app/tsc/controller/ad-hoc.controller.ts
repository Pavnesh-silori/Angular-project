import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AdHocController {

    constructor(
        private http: HttpClient
    ) { }

    /* not yet configured/ not known if it will be used further */
    createActivityDataAndActivityConfig(orgID, activityKeyID, configuration: any) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/ad-hoc/activity-configs`, configuration);
    }

    createActivityData(orgID, activityKeyID, activityConfigID, configuration: any, usePff, action) {
        let params = new HttpParams();
        params = params.append('action', action);

        if (usePff == 'YES') {
            params = params.append('activityConfigID', activityConfigID);
        }
        
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/ad-hoc`, configuration, { params: params });
    }
}
