import { Injectable } from '@angular/core';

import {
    HttpClient, HttpParams,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SubsidiaryController{
    constructor(private http: HttpClient) { }

    getEmissionRequestByPage(orgID, pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], filter: any[]) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        search.forEach(search => params = params.append('search', search));
        filter.forEach(filter => params = params.append('filter', filter));

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emissions/requests/sent/page`, { params: params });
    }

    getEmissionResponseByPage(orgID, pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], filter: any[]) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        search.forEach(search => params = params.append('search', search));
        filter.forEach(filter => params = params.append('filter', filter));

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emissions/requests/received/page`, { params: params });
    }

    getActivityByID(activityID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}activity/${activityID}`);
    }

    getActivityListByScopeID(scopeID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}scopes/${scopeID}/activity`);
    }

    getSubsidaryType() {
        return new Observable<any[]>((observer) => {
            observer.next([
                { id: 1, key: 'SUBSIDIARY', name: 'Subsidiary' },
                { id: 2, key: 'JOINT_VENTURE', name: 'Joint venture' }
            ]);
        });
    }

    getEmissionRequestByID(requestID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}subsidiary/emission-request/${requestID}`);
    }

    sendEmissionRequest(orgID, request) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/subsidiary/my-request`, request);
    }

    reSendEmissionRequest(orgID, requestID, request) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/subsidiary/my-request/${requestID}`, request);
    }

    cancelRequest(orgID, requestID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission/request/${requestID}/cancel`, '');
    }

    declineRequest(orgID, requestID, reason) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission/request/${requestID}/decline`, reason);
    }

    getSubsidiaryByOrgID(orgID, status?) {
        let params = new HttpParams();
        if(status) params = params.append('status', status);

        return this.http.get(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/subsidiary`, { params: params});
    }

    getConsolidationApproachByOrgID(orgID) {
        return this.http.get(`${environment.ORGANIZATION_PUBLIC_API_URL}consolidation-approach`);
        // return this.http.get(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/consolidation-approach`);
    }

    getSubsidaryUserListByOrgIDAndsubsidiaryID(orgID, subsidiaryID, applicationKeyID, roleCategoryKeyID) {
        return this.http.get(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/subsidiary/${subsidiaryID}/users/application/${applicationKeyID}/roles/${roleCategoryKeyID}`);
    }

}
