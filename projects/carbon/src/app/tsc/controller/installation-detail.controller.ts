import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UNLCodeM } from '@carbon/model/un-location-code.model';
@Injectable({
    providedIn: 'root'
})

export class InstallationDetailController {

    constructor(
        private http: HttpClient
    ) { }

    getUNLocationCode(countryCode): Observable<UNLCodeM[]> {
        return this.http.get<UNLCodeM[]>(`${environment.CARBON_ACCOUNTING_API_URL}country/${countryCode}/unl-code`);
    }

    createInstallation(orgID, productID, installationDetails) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/product/${productID}/installation`, installationDetails);
    }

    updateInstallation(orgID, productID, installationID, installationDetails) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/product/${productID}/installation/${installationID}`, installationDetails);
    }

    getInstallationByRunID(orgID, runID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/cbam/run/${runID}/installation`);
    }

}