import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConsumptionParameterM, ParameterM, SavedConsumptionParameterM } from '../model/parameter.model';

@Injectable({
    providedIn: 'root'
})

export class ParameterController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getParameterByOrgID(orgID): Observable<ParameterM[]> {
        return this.http.get<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/parameters`);
    }

    getParameterByLayoutID(orgID): Observable<ParameterM[]> {
        return this.http.get<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters`);
    }

    getParameterByDeviceID(orgID, requestBody): Observable<ParameterM[]> {
        return this.http.post<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/parameters`, requestBody);
    }

    getParameterByEntityType(orgID, requestBody): Observable<ParameterM[]> {
        return this.http.post<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entity-type/parameters`, requestBody);
    }

    getConsumptionParameter(orgID): Observable<ConsumptionParameterM> {
        return this.http.get<ConsumptionParameterM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption-parameters`);
    }

    saveConsumptionParameter(orgID, parameter) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption-parameters`, parameter);
    }

    getSavedConsumptionParameter(orgID): Observable<SavedConsumptionParameterM[]> {
        return this.http.get<SavedConsumptionParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/saved-consumption-parameters`);
    }

}
