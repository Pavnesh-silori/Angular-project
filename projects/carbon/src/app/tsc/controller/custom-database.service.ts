import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CustomDatabaseController {

    constructor(
        private http: HttpClient
    ) { }

    getFactorTypeStdList() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}custom-factor-type`);
    }

    getDatabase(orgID: any, pageNo: number, pageSize: number, sortBy: string, orderBy: string, customFactorTypeStdID: any, search: string) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('search', search);
        params = params.append('customFactorTypeStdID', customFactorTypeStdID);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/databases/page`, { params: params });
    }

    getDatabaseByID(orgID: any, databaseID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/databases/${databaseID}`);
    }

    createDatabase(orgID: any, database: any) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/databases`, database);
    }

    updateDatabase(orgID: any, database: any, databaseID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/databases/${databaseID}`, database);
    }

    deleteDatabaseByID(orgID: any, databaseID: any) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/custom-factors/databases/${databaseID}`);
    }
}
