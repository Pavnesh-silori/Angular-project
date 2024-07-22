import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { RecordConfigM, RecordConfigPageM } from "@report-framework/model/record-config.model";

//tsc-library
import { PageM } from "@library/tsc-common";
// /tsc-library

@Injectable({
    providedIn: "root",
})

export class ReportConfigController {

    constructor(
        private http: HttpClient
    ) { }

    saveReportConfig(orgID, formData) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting/config`, formData)
    }

    getReportConfigByID(orgID, id): Observable<RecordConfigM> {
        return this.http.get<RecordConfigM>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting/config/${id}`);
    }

    updateReportConfig(orgID, id, formData) {
        return this.http.patch(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting/config/${id}`, formData)
    }

    getRecordConfigPage(orgID: any, pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue: string, filter: any[]): Observable<PageM<RecordConfigPageM>> {
        let body = {
            pageNo: pageNo,
            pageSize: pageSize,
            sortBy: sortBy,
            orderBy: orderBy,
            searchBy: searchValue,
            filter: filter
        };
        return this.http.post<PageM<RecordConfigPageM>>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting/config/page`, body);
    }

    getRecordHistoryPage(pageNo: number, pageSize: number, sortBy: string, orderBy, orgID: any, filterArr: Array<string>, searchValue: string, searchFlag: boolean) {
        let body;
        if (searchFlag || filterArr.length > 0) {
            body = {
                pageNo: pageNo,
                pageSize: pageSize,
                sortBy: sortBy,
                orderBy: orderBy,
                searchBy: searchValue,
                filter: filterArr
            };
        } else {
            body = {
                pageNo: pageNo,
                pageSize: pageSize,
                sortBy: sortBy,
                orderBy: orderBy,
            };
        }
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-history`, body)

    }

    getReportTrackingDetails(orgID, id) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config/${id}/config-interval`);
    }

    getReportConfigData(orgID, id) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting/config/${id}`);
    }

    deleteConfig(orgID, id) {
        return this.http.delete(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config/${id}`);
    }

    getReportingFrameworkExistYear(orgID, reportingFrameworkID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-framework/${reportingFrameworkID}/year`);

    }

    getFrequency(orgID,formData) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-frequency`, formData)
    }

}