import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
// import { ActivityConfigPageM } from '@CarbonNetZero/model/activity-config.model';

@Injectable({
    providedIn: 'root'
})

export class ActivityConfigController {

    constructor(
        private http: HttpClient
    ) { }

    createActivityConfig(orgID, activityKeyID, activityConfig: any) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/activity-configs`, activityConfig);
    }

    getActivityConfigByPage(pageNo: number, pageSize: number, sortBy: string, orderBy, orgID: any, filterArr: Array<string>, searchValue: string, searchFlag: boolean) {
        let params = new HttpParams();

        params  = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if(searchFlag == true) {
            params = params.append('searchBy', searchValue)
        }
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });

        // return this.http.get<ActivityConfigPageM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity-configs/page`, { params: params });
        return this.http.get<any>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity-configs/page`, { params: params });
    }

    getActivityConfig(activityKeyID, processID, orgID) {
        let params = new HttpParams();

        params = params.append('activityKeyID', activityKeyID);
        params = params.append('processID', processID);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity-configs`, {params: params})
    }

    getActivityConfigByID(orgID, activityKeyID, activityConfigID): Observable<any> {
        return this.http.get<any>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/activity-configs/${activityConfigID}`);
    }

    updateActivityConfig(orgID, activityKeyID, activityConfigID, activityConfig: any) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/activity-configs/${activityConfigID}`, activityConfig);
    }

    createConfigurationWithActivityData(orgID, activityKeyID, formData) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/${activityKeyID}/ad-hoc/prefilled`, formData);
    }
}
