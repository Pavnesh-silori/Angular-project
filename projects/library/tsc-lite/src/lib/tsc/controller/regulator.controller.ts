import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { StatusInfoM } from '../model/device.model';
import { RegulatorTypeI, RegulatorsEntitiesI } from '../model/regulator.model';

@Injectable({
    providedIn: 'root'
})

export class RegulatorController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getRegulatorStatusInfo(orgID): Observable<StatusInfoM> {
        return this.http.get<StatusInfoM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/regulators/status`);
    }

    getRegulatorsType(orgID): Observable<RegulatorTypeI[]> {
        return this.http.get<RegulatorTypeI[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/regulators/type`);
    }

    getRegulatorsEntities(regulatorTypeFilterArr, orgID): Observable<RegulatorsEntitiesI[]> {
        let params = new HttpParams();
        regulatorTypeFilterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get<RegulatorsEntitiesI[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/dashboard/regulators-entities`, { params: params });
    }
}
