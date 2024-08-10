import { Injectable } from "@angular/core";

import { FacilityI, Facility } from "../model/facility.model";

import { FacilityController } from "../controller/facility.controller";

@Injectable({
    providedIn: 'root'
})

export class FacilityService {

    constructor(
        private facilityController: FacilityController
    ) { }

    async getFacilityByID(rootOrgID: any, facilityID: any): Promise<FacilityI> {
        let facilityI: FacilityI;

        try {
            facilityI = await this.facilityController.getFacilityByID(rootOrgID, facilityID).toPromise();

            if (facilityI) {
                return facilityI;
            } else {
                return new Facility();
            }
        } catch (error) {
            console.error('Error -', error);
            return new Facility();
        }
    }
}