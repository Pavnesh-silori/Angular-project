import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CustomFactorVersionController {

    constructor(
        private http: HttpClient
    ) { }

    getVersion(orgID: any, databaseID: any, factorID: any, pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: string) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('search', search);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/databases/${databaseID}/factors/${factorID}/versions/page`, { params: params });
    }

    createVersion(orgID: any, factorID: any, version: any) {
        let params = new HttpParams();

        params = params.append('customFactorID', factorID);
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/versions`, version, { params: params });
    }

    getVersionByID(orgID: any, versionID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/versions/${versionID}`);
    }

    updateVersion(orgID: any, factorID,  versionID, version: any) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/${factorID}/versions/${versionID}`, version);
    }
}
