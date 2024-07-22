import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ReportController {

    constructor(
        private http: HttpClient,
    ) { }

    getReport(orgID, startDate, endDate, includeFacility, includeSubsidiary, consolidationApproachID) {
        let params = new HttpParams();
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
        params = params.append('includeFacility', includeFacility);
        params = params.append('includeSubsidiary', includeSubsidiary);
        if(includeSubsidiary){
            params = params.append('consolidationApproachID', consolidationApproachID);
        }

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/reports/ghg-emission-report`, { params: params});
    }
}
