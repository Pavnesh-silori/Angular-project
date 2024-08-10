import { Inject, Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { SourceConsumerConfigureM, SourceConsumerPageM, SourceM, UtilitySourceTypeM } from '../model/source-consumer.model';

// tsc-library
import { PageM, StaticI } from '@library/tsc-common';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class SourceController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    createSourceType(orgID, source) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types`, source);
    }

    getSourceTypeByID(orgID, sourceID): Observable<SourceM> {
        return this.http.get<SourceM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`);
    }

    updateSourceType(orgID, sourceID, source) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`, source);
    }

    deleteSourceType(orgID, sourceID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`);
    }

    getSourceTypeByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue, filterArr, orgID): Observable<PageM<SourceConsumerPageM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }

        filterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get<PageM<SourceConsumerPageM>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/page`, { params: params });
    }

    getUtilitySourceAndType(orgID): Observable<UtilitySourceTypeM> {
        return this.http.get<UtilitySourceTypeM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/utility-sources-types`);
    }

    getSourceConsumerType(orgID, type): Observable<StaticI[]> {
        return this.http.post<StaticI[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-consumers-type`, type);
    }

    getSourceConsumerConfig(orgID): Observable<SourceConsumerConfigureM> {
        return this.http.get<SourceConsumerConfigureM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-consumers-configure`);
    }

}
