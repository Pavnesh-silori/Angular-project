
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model'; 
import { ScopeConfirmedEmissionM } from '@carbon/model/sbti.model'; 

@Injectable({
    providedIn: 'root'
})
export class BaseYearController {

    constructor(
        private http: HttpClient,
    ) { }

    createBaseYear(orgID, type, value) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year`, value);
    }

    getBaseYearByType(orgID, type): Observable<ghgBaseYearEmissionViewM> {
        return this.http.get<ghgBaseYearEmissionViewM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}`);
    }

    getBaseYearAndEmission(orgID, type) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}/emission`);
    }

    getSbtiBaseYearConfirmedEmission(orgID): Observable<ScopeConfirmedEmissionM[]> {
        return this.http.get<ScopeConfirmedEmissionM[]>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/sbti/scope/emission`);
    }

    getBaseYearEmissionDiff(orgID, type) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}/emission/diff`);
    }

    updateBaseYear(orgID, type, baseYear) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}`, baseYear);
    }

    updateBaseYearEmission(orgID, type, emission) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}/emission`, emission);
    }

    recalculateBaseYearEmission(orgID, type) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/recalculate/${type}`, '');
    }

    deleteBaseYear(orgID, type) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}`);
    }

    updateData(orgID, type, formdata){
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}`, formdata)
    }
}
