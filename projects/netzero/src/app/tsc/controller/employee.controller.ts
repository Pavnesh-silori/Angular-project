import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { EmployeeM } from '@netzero/model/employee.model'; 

@Injectable({
    providedIn: 'root'
})

export class EmployeeController {

    constructor(
        private http: HttpClient
    ) { }

    createEmployee(orgID, value) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/employees`, value)
    }

    getEmployeeByPage(pageNo: number, pazeSize: number, sortBy: string, orderBy, filterArr: Array<string>, orgID: any, searchValue: any, searchFlag: boolean) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        filterArr.forEach(filter => params = params.append('filter', filter))
        if (searchFlag) {
            params = params.append('searchValue', searchValue);
        }

        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/employees/page`, { params: params });
    }

    getEmployeeByID(orgID, employeeID): Observable<EmployeeM> {
        return this.http.get<EmployeeM>(`${environment.COMMON_API_URL}organizations/${orgID}/employees/${employeeID}`);
    }

    updateEmployee(orgID, employeeID, value) {
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${orgID}/employees/${employeeID}`, value);
    }

    bulkUploadEmployee(orgID, file) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/employees/bulk-upload`, file);
    }
}
