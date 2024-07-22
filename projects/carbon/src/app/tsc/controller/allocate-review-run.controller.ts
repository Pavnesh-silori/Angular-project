import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AlllocateReviewRunController {

    constructor(
        private http: HttpClient,
    ) { }

    getAllocationReviewRun(orgID, runID) {
         return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/allocation`)
    }

    createAllocationData(orgID, runID,  data) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/allocation`, data)
    }
}
