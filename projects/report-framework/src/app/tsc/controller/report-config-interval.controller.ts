import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { RecordConfigIntervalM } from "@report-framework/model/report-config-interval.model";


@Injectable({
    providedIn: "root",
})

export class ReportConfigIntervalController {

    constructor(
        private http: HttpClient
    ) { }

    getReportConfigInterrvalByID(orgID, configIntervalID): Observable<RecordConfigIntervalM>  {
        return this.http.get<RecordConfigIntervalM>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${configIntervalID}`);
    }

    

    
}