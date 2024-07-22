import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AccountingPreferenceM } from '@carbon/model/accounting-preference.model';

@Injectable({
    providedIn: 'root'
})
export class AccountingPreferenceController {

    constructor(
        private http: HttpClient
    ) { }

    createAccountingPreference(orgID, data) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/accounting-preference`, data)
    }

    getAccountingPreferenceByOrgID(orgID): Observable<AccountingPreferenceM> {
        return this.http.get<AccountingPreferenceM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/accounting-preference`);
    }

    updateAccountingPreference(orgID, data) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/accounting-preference`, data)
    }
}