import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { WorkflowExistsM } from "@report-framework/model/workflow.model";

@Injectable({
    providedIn: "root",
})

export class AssignmentController {

    constructor(
        private http: HttpClient
    ) { }

    getSectionAndGroupList(orgID, reportFrameworkID, searchFlag, searchValue, configID, configIntervalID) {
        let params = new HttpParams();
        if (searchFlag) {
            params = params.append('searchBy', searchValue);
        }
        if (configID != null) {
            params = params.append('configID', configID);
        }
        if (configIntervalID != null) {
            params = params.append('configIntervalID', configIntervalID);
        }

        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-framework/${reportFrameworkID}/section-group`, { params: params });
    }

    getSectionAndGroupForDataList(orgID, configIntervalID, sortBy: string, orderBy: string, searchValue, filter ) {
        let body = {
            sortBy: sortBy,
            orderBy: orderBy,
            searchBy: searchValue,
            filter: filter
        };
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${configIntervalID}/section-group`, body);
    }

    getSchedularDetails(orgID, reportConfigID, reportConfigIntervalID) {
        let url = `${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-framework/report-config/assignment`;

        if (reportConfigID !== null) {
            url += `/${reportConfigID}`;
        }

        if (reportConfigIntervalID !== null) {
            url += `/interval/${reportConfigIntervalID}`;
        }

        return this.http.get(url);
    }

    createSchedular(orgID, reportConfigID, reportConfigIntervalID, value, reportID) {

    let url = null;
    if (reportConfigID != null) {
        url = this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config/${reportConfigID}/assignment`, value);
    }else {
        url = this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${reportConfigIntervalID}/assignment`, value);
    }
        return url
    }

    unassignedConfigSectionGroup(orgID, reportingConfigID, formData) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config/${reportingConfigID}/unassign`, formData);
    }

    unassignedConfigIntervalSectionGroup(orgID, reportingConfigIntervalID, formData) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${reportingConfigIntervalID}/unassign`, formData);
    }

    unassingedSectionOrgGroup(orgID, reportingConfigID, reportingConfigIntervalID, formData) {
        let url = null;
        if (reportingConfigID != null) {
            url = this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config/${reportingConfigID}/unassign`, formData);
        } else {
            url = this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${reportingConfigIntervalID}/unassign`, formData);
        }

        return url;
    }

    sendReminderAssignee(orgID, configIntervalID, metricList) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${configIntervalID}/reminder/assignee`, metricList)
    }

    sendReminderApprover(orgID, configIntervalID, metricList) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${configIntervalID}/reminder/approver`, metricList)
    }

    workflowExist(orgID,configID): Observable<WorkflowExistsM>{
        return this.http.get<WorkflowExistsM>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config/${configID}/workflow-exists`);
    }

    saveWorkflow(orgID, configID,configIntervalID){
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config/${configID}/previous-config-interval/${configIntervalID}/assignment`, '');
    }

    download(){
        return this.http.get(`http://192.168.1.102:9600/public/organizations/100050079/reporting-framework/sasb/config-interval/7/download`);
    }
}