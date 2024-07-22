import { AuditTrailM, ReportingFrameworkDataM } from "@report-framework/model/reporting-framework-data.model";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})

export class ReportingFrameworkDataController {

    constructor(
        private http: HttpClient
    ) { }

    getReportFormControl(currentOrgID,configIntervalID, groupID): Observable<ReportingFrameworkDataM[]> {
        let url = null;
        if (configIntervalID == null) {
            url = this.http.get<ReportingFrameworkDataM[]>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${currentOrgID}/group/${groupID}/metric`)
        }else {
            url = this.http.get<ReportingFrameworkDataM[]>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${currentOrgID}/config-interval/${configIntervalID}/group/${groupID}/metric`)
        }
        return url;
    }

    createData(currentOrgID, configIntervalID, groupID, data) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${currentOrgID}/config-interval/${configIntervalID}/group/${groupID}/metric`, data);
    }

    updateData(currentOrgID, configIntervalID,groupID, data) {
        return this.http.patch(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${currentOrgID}/config-interval/${configIntervalID}/group/${groupID}/metric`, data);
    }

    getSectionList(pageNo: number, pazeSize: number, filter, currentOrgID: any, reportFrameworkStdID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        params = params.append('filter', filter);

        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${currentOrgID}/reporting-framework/${reportFrameworkStdID}/section/page`, { params: params });
    }

    getReporitngFrameworkList(currentOrgID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${currentOrgID}/reporting-framework`);
    }

    pdfReportGenerate(currentOrgID, reportingPeriodID, reportFramework) {
        const options = {
            responseType: 'arraybuffer' as const,
            headers: new HttpHeaders({
                'Content-Type': 'application/octet-stream'
            })
        };
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${currentOrgID}/brsr/${reportingPeriodID}/report/${reportFramework}`, options);
    }

    getAuditTrailDetails(orgID, sectionID,groupID, configIntervalID): Observable<AuditTrailM> {
        return this.http.get<AuditTrailM>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/section/${sectionID}/groupID/${groupID}/config-interval/${configIntervalID}/audit-trail`)
    }

    matchingMetricExists(orgID,reportingFrameworkID,groupID, configIntervalID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-framework/${reportingFrameworkID}/config-interval/${configIntervalID}/group/${groupID}/exists`);
    }

    getMatchingMetric(orgID,reportingFrameworkID,configIntervalID,groupID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-framework/${reportingFrameworkID}/config-interval/${configIntervalID}/group/${groupID}`);
    }

    getMatchingMetricByFilter(orgID,reportingFrameworkID,configID,groupID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-framework/${reportingFrameworkID}/config/${configID}/group/${groupID}`);

    }
}