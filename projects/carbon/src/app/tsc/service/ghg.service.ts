import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { GhgBaseYearController } from '@carbon/controller/ghg-base-year.controller';

import { ghgBaseYearAllEmissionsM, ghgBaseYearEmissionViewM, ghgBaseYearEmissionView } from '@carbon/model/ghg-base-year.model';

@Injectable({
    providedIn: 'root'
})
export class GhgBaseYearService {
    constructor(private ghgBaseYearController: GhgBaseYearController) { }

    fourDigitYearValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const valid = /^\d{4}$/.test(control.value);
            return valid ? null : { invalidYear: { value: control.value } };
        };
    }

    async getAllGHGEmissions(orgID, year): Promise<ghgBaseYearAllEmissionsM[]> {
        let ghgBaseYearM: any;

        try {
            ghgBaseYearM = await this.ghgBaseYearController.getGHGBaseEmissions(orgID, year).toPromise();

            if (ghgBaseYearM) {
                return ghgBaseYearM;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error -', error);
            return [];
        }
    }

    async getAllGHGEmissionsForView(orgID): Promise<ghgBaseYearEmissionViewM[]> {
        let ghgBaseYearViewM: any;

        try {
            ghgBaseYearViewM = await this.ghgBaseYearController.getGHGBaseYearConfirmView(orgID).toPromise();
            if (ghgBaseYearViewM) {
                return ghgBaseYearViewM;
            } else {
                return [new ghgBaseYearEmissionView()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new ghgBaseYearEmissionView()];
        }
    }


}
