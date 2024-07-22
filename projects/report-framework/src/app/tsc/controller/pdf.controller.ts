import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})

export class PdfController {

    constructor(
        private http: HttpClient
    ) { }


    pdfReportGenerate(orgID,reportingFrameworkKeyID,configIntervalID) {
       return this.http.get(`${environment.REPORTING_FRAMEWORK_PUBLIC_API_URL}organizations/${orgID}/reporting-framework/${reportingFrameworkKeyID}/config-interval/${configIntervalID}/download/pdf`);
    }

    xbrlReportGenerate(orgID,reportingFrameworkKeyID,configIntervalID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_PUBLIC_API_URL}organizations/${orgID}/reporting-framework/${reportingFrameworkKeyID}/config-interval/${configIntervalID}/download/xbrl`);
    }

    excelReportGenerate(orgID,reportingFrameworkKeyID,configIntervalID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_PUBLIC_API_URL}organizations/${orgID}/reporting-framework/${reportingFrameworkKeyID}/config-interval/${configIntervalID}/download/xlsx`);
    }

    unlockReport(orgID,configIntervalID,reportHistoryID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${configIntervalID}/report-history/${reportHistoryID}/unlock`);
    }

    lockReport(orgID,configIntervalID) {
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/config-interval/${configIntervalID}/lock`);
    }
}