import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AlertPageM, AlertRuleM, AlertStatusI } from '../model/alert.model';
import { AlarmPageM } from '../model/alarm.model';

// tsc-library
import { PageM, StaticI } from '@library/tsc-common';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class AlertRuleController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getPeriodicAlertType(orgID: number): Observable<StaticI[]> {
        return this.http.get<StaticI[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/periodic-alert-type`);
    }

    getAlertRuleByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], alertType, orgID: number): Observable<PageM<AlertPageM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('alertType', alertType);

        search.forEach(search => params = params.append('search', search));
        return this.http.get<PageM<AlertPageM>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/page`, { params: params });
    }

    getActiveAlertByPage(orgID: number, requestBody): Observable<PageM<AlarmPageM>> {
        return this.http.post<PageM<AlarmPageM>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/active/page`, requestBody);
    }

    getResolvedAlertByPage(orgID: number, requestBody): Observable<PageM<AlarmPageM>> {
        return this.http.post<PageM<AlarmPageM>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/resolved/page`, requestBody);
    }

    updateAlertRuleStatus(orgID, alertRuleID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/${alertRuleID}/status`, requestBody);
    }

    createAlertRule(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules`, requestBody);
    }

    getAlertRuleByID(orgID, alertRuleID): Observable<AlertRuleM> {
        return this.http.get<AlertRuleM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/${alertRuleID}`);
    }

    updateAlertRule(orgID, alertRuleID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/${alertRuleID}`, requestBody);
    }

    deleteAlertRule(orgID, alertRuleID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/${alertRuleID}`)
    }

    getAlertStatusInfo(orgID): Observable<AlertStatusI> {
        return this.http.get<AlertStatusI>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/status`);
    }
}