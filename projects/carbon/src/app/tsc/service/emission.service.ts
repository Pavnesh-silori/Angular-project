import { Injectable } from '@angular/core';
import { EmissionController } from '@carbon/controller/emission.controller';

import { ghgBaseYearAllEmissionsM } from '@carbon/model/ghg-base-year.model'; 

@Injectable({
    providedIn: 'root'
})
export class EmissionService {

    constructor(
        private emissionController: EmissionController
    ) { }

    async getScopeActivityWiseYearlyEmission(orgID, startDate, endDate): Promise<ghgBaseYearAllEmissionsM[]> {
        let ghgBaseYearM: any;

        try {
            ghgBaseYearM = await this.emissionController.getScopeActivityWiseYearlyEmission(orgID, startDate, endDate).toPromise();

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

    async getConsolidationApproachBasedScopeActivityEmissionByOrgID(orgID, startDate, endDate): Promise<any[]> {
        let yearlyEmission: any;

        try {
            yearlyEmission = await this.emissionController.getConsolidationApproachBasedScopeActivityEmissionByOrgID(orgID, startDate, endDate).toPromise();

            if (yearlyEmission)  return yearlyEmission;
            else return [];
            
        } catch (error) {
            console.error('Error -', error);
            return [];
        }
    }

}
