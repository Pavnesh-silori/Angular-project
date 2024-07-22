import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { OngoingRunM } from "@carbon/model/ongoing-run.model";

@Injectable({
    providedIn: "root",
})
export class OnGoingRunController {

    constructor(
        private http: HttpClient
    ) { }

    getByPage(orgID, body): Observable<OngoingRunM> {
        return this.http.post<OngoingRunM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/ongoing-run/page`, body)
    }

    getLedgerByPage(orgID, body): Observable<OngoingRunM> {
        
        return this.http.post<OngoingRunM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/ledger/page`, body)
    }

    lockProduct(orgID, runID, data) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/lock-unlock/status`, data)
    }

    // lockProduct(orgID, productID) {
    //     let Data = 'false'
    //     console.log("product locked");
    //     return Data;
    // }

    deleteProduct(orgID, productID) {
        let Data = 'true'
        console.log('deleteIcon pressed');
        return Data;
    }

    getRunStatus() {
        return this.http.get(`${environment.MOCK_SERVER}runStatus`);
    }
}
