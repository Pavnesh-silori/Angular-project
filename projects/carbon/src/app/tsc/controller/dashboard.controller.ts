import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DashboardController {
    
    constructor(
        private http: HttpClient,
    ) { }

    getFootprintDashboard(orgID, startDate, endDate, includeFacility, includeSubsidiary, consolidationApproach) {
        let params = new HttpParams();

        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);

        params = params.append('includeFacility', includeFacility);
        params = params.append('includeSubsidiary', includeSubsidiary);

        params = params.append('consolidationApproachKeyID', consolidationApproach);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/dashboard/carbon-footprint`, { params: params });
    }
}
