import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProcessM } from '@carbon/model/process.model';

@Injectable({
    providedIn: 'root'
})
export class ProcessController {

    constructor(
        private http: HttpClient,
    ) { }

    getProcessByPage(orgID: any, pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue: string, filterArr: any[]) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });

        if (searchValue != null) { params = params.append('searchBy', searchValue); }

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/process/page`, { params: params });
    }

    getProcessList(orgID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/process-list`);
    }

    getProcessByID(orgID: number, processID: number, isLatest: boolean = null): Observable<ProcessM> {
        let params = new HttpParams();

        if (isLatest != null) {
            params = params.append('isLatest', isLatest);
        }

        return this.http.get<ProcessM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/process/${processID}`, { params: params });
    }

    createProcess(orgID: any, processes: ProcessM[]) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/process`, processes);
    }

    updateProcess(orgID: any, processID: number, process: ProcessM) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/process/${processID}`, process);
    }

    getProcessInputs() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}process/INPUT`);
    }

    getProcessOutputs() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}process/OUTPUT`);
    }

    getIpccProcess(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.CARBON_ACCOUNTING_API_URL}ipcc-process`);
    }

    getProcessParamTech(ippcProcessID: number): Observable<any[]> {
        return this.http.get<any[]>(`${environment.CARBON_ACCOUNTING_API_URL}ipcc-process/${ippcProcessID}/map`);
    }
}
