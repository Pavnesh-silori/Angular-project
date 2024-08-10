import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { DeviceRecentDataM, OrgRecentDataM } from '../model/recent-data.model';

@Injectable({
    providedIn: 'root'
})
export class RecentDataController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getRecentDataWithParam(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/recent`, requestBody, { headers: headers });
    }

    getOrgRecentData(orgID, requestBody): Observable<OrgRecentDataM[]> {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post<OrgRecentDataM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/recent-data`, requestBody, { headers: headers });
    }

    getDeviceRecentData(orgID, requestBody): Observable<DeviceRecentDataM[]> {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post<DeviceRecentDataM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/data/recent`, requestBody, { headers: headers });
    }

}
