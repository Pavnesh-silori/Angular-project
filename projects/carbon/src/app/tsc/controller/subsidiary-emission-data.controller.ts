import { Injectable } from '@angular/core';

import {
    HttpClient, HttpHeaders, HttpParams,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SubsidiaryEmissionDataController {
    constructor(private http: HttpClient) { }
    
    getEmissionDataByPage(rootOrgID,pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], filter: any[]) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        search.forEach(search => params = params.append('search', search));
        filter.forEach(filter => params = params.append('filter', filter));

       return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${rootOrgID}/subsidiary/emission/data/page`, {params: params})

    }

    createSubsidaryEmissiondata(orgID, formData) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/subsidiary/emission`, formData);
    }

    createSubsidiaryEmissionExternalOrg(orgID, formData){
        return this.http.post(`${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}organizations/${orgID}/subsidiary/emission`, formData);
    }

    getSubsidaryEmissionDataByID(orgID, subsidaryEmissionDataID) {
       return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/subsidiary/emission/${subsidaryEmissionDataID}`);
    }

    updateSubsidaryEmissiondata(orgID, formData, subsidaryEmissionID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/subsidiary/emission/${subsidaryEmissionID}`, formData);
    }

    deleteSubsidiaryEmissionDataByID(orgID, subsidiaryEmissionDataID) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/subsidiary/emission/data/${subsidiaryEmissionDataID}`);
    }

    getEmissionDataByOrgID(orgID, startDate, endDate) {
        let params = new HttpParams();

        // params = params.append('emmissionOf', emissionBy);
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);

       return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/subsidiary/emission`, { params: params });
    }

    getEmissionDataByRequestID(orgID, requestID, startDate, endDate) {
        let params = new HttpParams();
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organization/${orgID}/request/${requestID}/emission/data`, {params: params});
    }

    checkTokenValidation(token) {
        let headers = new HttpHeaders().set('skipAuth', '1');
        let params = new HttpParams();
        params = params.append('token', encodeURIComponent(token));

        return this.http.get(`${environment.ORGANIZATION_PUBLIC_API_URL}subsidiary/emission/token/validate`, { params: params, headers: headers });
    }

    sendOtp(emailID) {
        let params = new HttpParams();
        params = params.append('email', encodeURIComponent(emailID));
        return this.http.post(`${environment.ORGANIZATION_PUBLIC_API_URL}email/otp`,'', {params: params});
    }
}
