import { Injectable } from '@angular/core';

import { AccountingPreference, AccountingPreferenceM } from '@carbon/model/accounting-preference.model';
import { AccountingPreferenceController } from '@carbon/controller/accounting-preference.controller';

@Injectable({
    providedIn: 'root'
})
export class AccountingPreferenceService {

    constructor(
        private accountingPreferenceController: AccountingPreferenceController
    ) { }

    async getAccountingPreferenceByOrgID(orgID): Promise<AccountingPreferenceM> {
        let accountingPreferenceM: AccountingPreferenceM;
        try {
            accountingPreferenceM = await this.accountingPreferenceController.getAccountingPreferenceByOrgID(orgID).toPromise();

            if (accountingPreferenceM) {
                return accountingPreferenceM;
            } else {
                return new AccountingPreference();
            }
        } catch (error) {
            console.error('Error in getAccountingPreferenceByID -', error);
            return new AccountingPreference();
        }
    }
}
