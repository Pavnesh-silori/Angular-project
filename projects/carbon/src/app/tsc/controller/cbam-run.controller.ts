import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CbamRunController {

    constructor(
        private http: HttpClient,
    ) { }

    getValidation(orgID, productID, prID, startDate, endDate) {
        let headers = new HttpHeaders().set('skipSuccessStatus', '1');
        let params = new HttpParams();

        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
        params = params.append('productID', productID);
        params = params.append('prID', prID);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run-exists`, { params: params, headers: headers });
    }

    getFailedRunDetails() {
        return this.http.get(`${environment.MOCK_SERVER}failedRunDetails`);
    }

    createAuditDetails(orgID, cbamReportID, auditDetails) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam-report/${cbamReportID}/audit`, auditDetails);
    }

    // getAuditDetails(orgID, cbamReportID) {
    //     return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam-report/${cbamReportID}/audit`);
    // }

    // updateAuditDetails(orgID, cbamReportID, auditDetails) {
    //     return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam-report/${cbamReportID}/audit`, auditDetails);
    // }

    getCbamProductRunList(orgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/runs`);
    }

    createCbamReport(orgID, runConfigID, reportDetails) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam-run-config/${runConfigID}/report`, reportDetails);
    }

    getCbamReportByID(orgID, reportID){
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam-run-config/report/${reportID}`);
    }

    getCbamReportPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, orgID: any, searchFlag: boolean, searchValue: any) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        if (searchFlag) { params = params.append('search', searchValue); }

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam-run-config/report/page`, { params: params });
    }

    sendEmail(orgID, reportID, email){
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/report/${reportID}/send/email`, email);
    }

    updateCbamRunStatus(orgID: number, runID: number, data: any, skipSuccessStatus: boolean = true) {
        let headers = new HttpHeaders();

        if (skipSuccessStatus) {
            headers = headers.append('skipSuccessStatus', '1');
        }

        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/status`, data, { headers: headers });
    }

    getCbamRunRequestByID(orgID: number, runID: number) {
        let headers = new HttpHeaders();
        headers = headers.append('skipLoader', 'YES');

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/request`, { headers: headers });
    }

    getCbamRunByID(orgID: number, runID: number) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}`);
    }
}
