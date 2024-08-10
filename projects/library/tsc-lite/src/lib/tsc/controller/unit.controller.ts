import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UnitM } from '../model/unit.model';

@Injectable({
    providedIn: 'root'
})

export class UnitController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getUnitByParameterID(orgID, parameterID): Observable<UnitM[]> {
        return this.http.get<UnitM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/parameters/${parameterID}/unit-type`);
    }
}