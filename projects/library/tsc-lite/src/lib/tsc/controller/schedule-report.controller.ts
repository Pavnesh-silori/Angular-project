import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ScheduleReportI, ScheduleReportPageI } from '../model/schedule-report.model';

// tsc-library
import { PageM } from '@library/tsc-common';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class ScheduleReportController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    createScheduleReport(orgID, scheduleReport) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports`, scheduleReport);
    }

    getScheduleReportByID(orgID, scheduleReportID): Observable<ScheduleReportI> {
        return this.http.get<ScheduleReportI>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`);
    }

    updateScheduleReport(orgID, scheduleReportID, scheduleReport) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`, scheduleReport);
    }

    getScheduleReportByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue, filterArr, orgID): Observable<PageM<ScheduleReportPageI>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }

        filterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get<PageM<ScheduleReportPageI>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/page`, { params: params });
    }

    deleteScheduledReport(orgID, scheduleReportID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`);
    }

    updateReportStatusByID(orgID, scheduleReportID, status) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}/status`, status);
    }
}