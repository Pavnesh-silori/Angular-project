import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TimelineController {

    constructor(
        private http: HttpClient
    ) { }

    getTimeline(orgID, type, pageNo, pageSize) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}/timeline`, { params: params });
    }

    getActivityDiff(rootOrgID, baseYearType, activityKeyID, activityDataID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${rootOrgID}/base-year/${baseYearType}/activity/${activityKeyID}/${activityDataID}/diff`);
    }

    getRecalculationHistory(rootOrgID, baseYearType, pageNo, pageSize) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${rootOrgID}/base-year/${baseYearType}/recalculation/history`, { params: params })
    }

    getRecalculationHistoryTimeline(rootOrgID, baseYearType, pageNo, pageSize, checkpointID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('checkpointID', checkpointID);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${rootOrgID}/base-year/${baseYearType}/timeline/history`, { params: params })
    }

    getTriggerEmissionDiff(rootOrgID, baseYearType, recalculationTrigger, recalculationTriggerID, checkpointID) {
        let params = new HttpParams();
        params = params.append('triggerKey', recalculationTrigger);
        params = params.append('recalculationTriggerID', recalculationTriggerID);
        if (checkpointID != null) { params = params.append('checkpointID', checkpointID); }

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${rootOrgID}/base-year/${baseYearType}/timeline/recalculation-diff`, { params: params })
    }
}
