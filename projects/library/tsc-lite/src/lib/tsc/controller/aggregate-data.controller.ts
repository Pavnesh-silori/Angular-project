import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { MeterDataI } from '../model/aggregate-data.model';

@Injectable({
    providedIn: 'root'
})
export class AggregateDataController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getAggregateData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/aggregate`, requestBody, { headers: headers });
    }

    getMeterAggregateDataForReport(orgID, requestBody): Observable<MeterDataI[]> {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post<MeterDataI[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/meter-data`, requestBody, { headers: headers })
    }

    getDeviceAggregateData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/data/aggregate`, requestBody, { headers: headers })
    }

    getCumulativeConsumption(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption`, requestBody, { headers: headers });
    }

    getEntityParameterData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entity/parameter-data`, requestBody, { headers: headers });
    }

    getAvoidedEmissionData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/avoided-emissions`, requestBody, { headers: headers });
    }

}
