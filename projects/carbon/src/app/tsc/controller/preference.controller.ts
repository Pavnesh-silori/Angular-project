import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { GwpDatasetI } from '@carbon/model/gwp-dataset.model';

@Injectable({
    providedIn: 'root'
})
export class PreferenceController {

    constructor(
        private http: HttpClient
    ) { }

    getGwpDataset() {
        return this.http.get<GwpDatasetI>(`${environment.CARBON_ACCOUNTING_API_URL}gwp-datasets`);
    }

    getOrgPreference(currentOrgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/preference`);
    }

    updateOrgPreference(currentOrgID, preferenceID, orgPreference) {
        let params = new HttpParams();
        params = params.append('preferenceID', preferenceID ? preferenceID : '');

        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/preference`, orgPreference, { params: params });
    }

    getOrgPreferenceByActivityKeyID(currentOrgID, filterArr: Array<string>) {
        let params = new HttpParams();
        // params = params.append('activityKeyID', activityKeyID);

        filterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity-preference`, { params: params });
    }

    getOrgPreferenceByActivityAndCal(currentOrgID, activityKeyID: string, calculationApproachKeyID: string) {
        let params = new HttpParams();
        params = params.append('activityKeyID', activityKeyID);

        params = params.append('calculationApproachKeyID', calculationApproachKeyID);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity-preference`, { params: params });
    }

}
