import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProcessMappingController {

    constructor(
        private http: HttpClient
    ) { }

   getProcessInput(orgID, runID) {
    return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/configure-data`);
   }

   saveProcessInputByRunID(orgID, runID, value) {
    return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/configure-data/map`, value);
   }

   getTrackingRecord(orgID, runID) {
    return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/tracking`)
   }

}