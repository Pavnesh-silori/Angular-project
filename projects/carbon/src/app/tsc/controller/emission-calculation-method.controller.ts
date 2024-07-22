import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmissionCalculationMethodController {

    constructor(
        private http: HttpClient
    ) { }

    getEmissionCalculationMethod(orgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission-calculation-method`);
    }
}
