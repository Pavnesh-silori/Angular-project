import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class StandardEmissionFactorController {

    constructor(
        private http: HttpClient
    ) { }

    getDatabase(pageNo: number, pageSize: number, sortBy: string, orderBy: string) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}emission-factor`, { params: params });
    }

    getVersion(orgID: any, databaseID: any, pageNo: number, pageSize: number, sortBy: string, orderBy: string) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission-factor/${databaseID}/versions`, { params: params });
    }

    getActivity(orgID, databaseID, versionID, pageNo: number, pageSize: number, sortBy: string, orderBy: string) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/100000415/emission-factor/${databaseID}/versions/${versionID}/activity`, { params: params });
    }

    getFactor(orgID, databaseID, versionID, activityKeyID: any, pageNo: number, pageSize: number, sortBy: string, orderBy: string, filter: string) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if(filter) { params = params.append('search', filter); }

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission-factor/${databaseID}/versions/${versionID}/activity/${activityKeyID}/factors`, { params: params });
    }
}
