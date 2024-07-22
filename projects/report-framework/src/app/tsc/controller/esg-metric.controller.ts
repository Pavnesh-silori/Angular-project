import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageM } from "@library/tsc-common";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { EsgMetricI } from "@report-framework/model/esg-metric.model";
import { StandardI } from "@report-framework/model/standard.model";

@Injectable({
    providedIn: "root",
})

export class EscMetricController {

    constructor(
        private http: HttpClient
    ) { }

    getEscMetricPage(pageNo: number, pageSize: number, sortBy: string, orderBy, orgID: any, filterArr: Array<string>, searchValue: string): Observable<PageM<EsgMetricI>> {
        let body = {
            pageNo: pageNo,
            pageSize: pageSize,
            sortBy: sortBy,
            orderBy: orderBy,
            searchBy: searchValue,
            filter: filterArr
        };
        return this.http.post<PageM<EsgMetricI>>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/esg-metric/page`, body)
    }

    getMetricTypeList(): Observable<StandardI[]> {
        return this.http.get<StandardI[]>(`${environment.REPORTING_FRAMEWORK_API_URL}esg-type`);
    }

    getActivityTypeList(): Observable<StandardI[]> {
        return this.http.get<StandardI[]>(`${environment.MOCK_SERVER}custom-framework`);
    }

    getEsgAllMetric() {
        return this.http.get(`${environment.MOCK_SERVER}esg-mteric`);
    }

    createCustomEsgMetric(orgID, formData) {
        return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-esg-metric`, formData);
    }

    updateCustomEsgMetric(orgID, id, formData) {
        return this.http.patch(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-esg-metric/${id}`, formData);
    }

    getCustomEsgMetricByID(orgID,id) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-esg-metric/${id}`);
    }

    deleteEsgMetric(orgID, id) {
        return this.http.delete(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/custom-esg-metric/${id}`);
    }

}