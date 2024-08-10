import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LayoutM, PageM } from '../model/layout.model';

@Injectable({
    providedIn: 'root'
})

export class LayoutController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getLayoutByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], orgID: number): Observable<PageM<LayoutM>>{
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        search.forEach(search => params = params.append('search', search));
        
        return this.http.get<PageM<LayoutM>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/page`, { params: params });
    }

    getLayoutByOrgID(orgID): Observable<LayoutM[]> {
        return this.http.get<LayoutM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts`);
    }

    getLayoutByID(orgID, layoutID): Observable<LayoutM> {
        return this.http.get<LayoutM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}`);
    }

    createLayout(orgID, layout) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts`, layout);
    }

    updateLayout(orgID, layoutID, layout) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}`, layout);
    }

    deleteLayout(orgID, layoutID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}`)
    }
}
