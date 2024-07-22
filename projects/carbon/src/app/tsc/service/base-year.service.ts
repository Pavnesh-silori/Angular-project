import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

import { ScopeConfirmedEmissionM } from '@carbon/model/sbti.model';

import { BaseYearController } from '@carbon/controller/base-year.controller';

@Injectable({
    providedIn: 'root'
})
export class BaseYearService {

    constructor(
        private baseYearController: BaseYearController,
        ) { }

    fourDigitYearValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const valid = /^\d{4}$/.test(control.value);
            return valid ? null : { invalidYear: { value: control.value } };
        };
    }

    async getBaseYearEmissions(orgID, type): Promise<any[]> {
        let baseYear: any;

        try {
            baseYear = await this.baseYearController.getBaseYearAndEmission(orgID, type).toPromise();
            if (baseYear) {
                return baseYear;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error -', error);
            return null;
        }
    }

    async getSbtiBaseYearConfirmedEmission(orgID): Promise<ScopeConfirmedEmissionM[]> {
        let sbtiConfirmedEmission: ScopeConfirmedEmissionM[];

        try {
            sbtiConfirmedEmission = await this.baseYearController.getSbtiBaseYearConfirmedEmission(orgID).toPromise();

            if (sbtiConfirmedEmission) {
                return sbtiConfirmedEmission;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error -', error);
            return [];
        }
    }

}
