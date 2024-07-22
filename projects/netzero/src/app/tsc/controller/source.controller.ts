import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams,
    HttpHeaders,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SourceController {
    constructor(private http: HttpClient) { }

    deleteVendor(vendorID, currentOrgID) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/vendors/${vendorID}`)
    }
    
    checkKeyAvailability(currentOrgID, source, keyID: string,) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/${source}/keyid/${keyID}`);
    }

    isEmailExist(emailID){
        let headers = new HttpHeaders().set('skipAuth', '1');
        let params = new HttpParams();
        params = params.append('emailID', encodeURIComponent(emailID));
        return this.http.get(`${environment.ORGANIZATION_PUBLIC_API_URL}users/email/validate`, { params: params, headers: headers });
    }

    userOrgList(currentOrgID,emailID){
        let params = new HttpParams();
        params = params.append('emailID', encodeURIComponent(emailID));
        return this.http.get(`${environment.ORGANIZATION_API_URL}organizations/${currentOrgID}/email`,{ params: params});
    }

    sendEmailDomainList(currentOrgID,emailID){
        let params = new HttpParams();
        params = params.append('emailID', encodeURIComponent(emailID)) 
        return this.http.get(`${environment.ORGANIZATION_API_URL}organizations/${currentOrgID}/user/email`,{ params: params });
    }
    
    deleteScopeThreeSupplier(scopeThreeSupplierID, currentOrgID){
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/scope-three-supplier/${scopeThreeSupplierID}`)
    }
}
