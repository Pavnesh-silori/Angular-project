import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmissionController {

    constructor(
        private http: HttpClient,
    ) { }

    getScopeActivityWiseYearlyEmission(orgID, startDate, endDate) {
        let params = new HttpParams();
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/sbti/emission`, { params: params });
    }

    getScopeWiseEmissionAtGasLevel(orgID, year, consolidationApproachKeyID, isIncludeSubsidiary) {
        let params = new HttpParams();
        params = params.append('isIncludeSubsidiary', isIncludeSubsidiary);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/calculated-emission/${year}/consolidation-approach/${consolidationApproachKeyID}`, { params: params });
    }

    getConsolidationApproachBasedScopeActivityEmissionByOrgID(orgID, startDate, endDate) {
        let params = new HttpParams();
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/ghg/emission`, { params: params });
    }

    getBiogenicEmissions(orgID, startDate, endDate, isIncludeSubsidiary, consolidationApproach) {
        let params = new HttpParams();
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
        params = params.append('isIncludeSubsidiary', isIncludeSubsidiary);
        params = params.append('consolidationApproach', consolidationApproach);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/biogenic-emission`, { params: params });
    }
}
