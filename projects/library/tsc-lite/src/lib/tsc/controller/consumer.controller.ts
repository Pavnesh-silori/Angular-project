import { Inject, Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { SourceConsumerPageM, ConsumerM } from '../model/source-consumer.model';

// tsc-library
import { PageM } from '@library/tsc-common';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class ConsumerController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    createConsumerType(orgID, consumer) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types`, consumer);
    }

    getConsumerTypeByID(orgID, consumerID): Observable<ConsumerM> {
        return this.http.get<ConsumerM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`);
    }

    updateConsumerType(orgID, consumerID, consumer) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`, consumer);
    }

    deleteConsumerType(orgID, consumerID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`);
    }

    getConsumerTypeByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue, filterArr, orgID): Observable<PageM<SourceConsumerPageM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }

        filterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get<PageM<SourceConsumerPageM>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/page`, { params: params });
    }

}
