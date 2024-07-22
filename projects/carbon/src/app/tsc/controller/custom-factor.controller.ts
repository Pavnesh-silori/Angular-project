import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CustomFactorController {

    constructor(
        private http: HttpClient
    ) { }

    getFactor(orgID: any, databaseID: any, pageNo: number, pageSize: number, sortBy: string, orderBy: string, filter: any[]) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        filter.forEach(filter => params = params.append('filter', filter));

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/databases/${databaseID}/factors/page`, { params: params });
    }

    createFactor(orgID: any, Factor: any) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors`, Factor);
    }

    getFactorByID(orgID: any, factorID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/${factorID}`);
    }

    updateFactor(orgID: any, Factor: any, factorID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/${factorID}`, Factor);
    }
}
