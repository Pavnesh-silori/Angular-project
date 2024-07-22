import { ReportingFrameworkM } from "@report-framework/model/reporting-framework.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})

export class ReportFrameworkController {

    constructor(
        private http: HttpClient
    ) { }

    getAllReportingFramework(): Observable<ReportingFrameworkM[]> {
        return this.http.get<ReportingFrameworkM[]>(`${environment.REPORTING_FRAMEWORK_API_URL}reporting-framework`);
    }

    getAllReportingFrameworkCategory() {
        return this.http.get<ReportingFrameworkM[]>(`${environment.REPORTING_FRAMEWORK_API_URL}reporting-framework-category`);
    }

}