import { Injectable } from "@angular/core";

import { Facility, FacilityM } from "../model/facility.model";

import { FacilityController } from "../controller/facility.controller";

@Injectable({
    providedIn: 'root'
})

export class FacilityService {

    constructor(
        private facilityController: FacilityController
    ) { }

    async getFacilityByID(rootOrgID: number, facilityID: number): Promise<FacilityM> {
        let facilityM: FacilityM;
        let facility = new Facility();

        try {
            facilityM = await this.facilityController.getFacilityByID(rootOrgID, facilityID).toPromise();

            if (facilityM) {
                return facilityM;
            } else {
                return facility;
            }
        } catch (error) {
            console.error('Error -', error);
            return facility;
        }
    }
}