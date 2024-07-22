import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { CalculationApproachI } from "@carbon/model/calculation-approach.model"; 

@Injectable({
    providedIn: 'root'
})

export class CalculationApproachController {

    constructor(
        private http: HttpClient,
    ) { }

    getCalculationApproachByScope(scopeKeyID) {
        let params = new HttpParams();
        params = params.append('scopeKeyID', scopeKeyID);
        return this.http.get<CalculationApproachI[]>(`${environment.CARBON_ACCOUNTING_API_URL}calculation-approach`, {params : params});
    }

}