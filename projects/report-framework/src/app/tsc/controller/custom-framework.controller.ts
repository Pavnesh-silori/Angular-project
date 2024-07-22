import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StandardI } from "@report-framework/model/standard.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})

export class CustomFrameworkController {

    constructor(
        private http: HttpClient
    ) { }

    createCustomFramework(orgID, formData) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-report-framework`, formData);
    }

    updateCustomFramework(orgID, id, formData) {
        return this.http.patch(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-report-framework/${id}`, formData);
    }

    getByID(orgID,id) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-report-framework/${id}`);
    }

    getCustomFrameworkList(orgID): Observable<StandardI[]> {
        return this.http.get<StandardI[]>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-report-framework`);
    }

    customFrameworkAddMetric(orgID, formData) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/esg-metric-report-framework-map`, formData);
    }

    customFrameworkRemoveMetric(orgID, formData) {
        return this.http.patch(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/esg-metric-report-framework-map`, formData);
    }

   deleteCustomFramework(orgID, id) {
        return this.http.delete(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-report-framework/${id}`);
    }

    getLinkedRecordFlag(orgID, id) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-report-framework/${id}/report-exists`);

    }

}