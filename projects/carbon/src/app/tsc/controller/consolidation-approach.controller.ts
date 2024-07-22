import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { ConsolidationApproachM } from "@carbon/model/consolidation-approach.model";

@Injectable({
    providedIn: 'root'
})

export class ConsolidationApproachController {

    constructor(
        private http: HttpClient,
    ) { }

    getAllConsolidationApproach() {
        return this.http.get<ConsolidationApproachM[]>(`${environment.ORGANIZATION_PUBLIC_API_URL}consolidation-approach`);
    }

    getAllConsolidationApproachByOrgID(rootOrgID) {
        return this.http.get<ConsolidationApproachM[]>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${rootOrgID}/consolidation/approach`);
    }

}