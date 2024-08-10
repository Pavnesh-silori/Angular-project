import { HttpClient } from "@angular/common/http";

import { Inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { FacilityM } from "../model/facility.model";

@Injectable({
    providedIn: 'root'
})

export class FacilityController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getFacilityByID(rootOrgID, facilityID): Observable<FacilityM> {
        return this.http.get<FacilityM>(`${this.environment.ORGANIZATION_API_URL}organizations/${rootOrgID}/facility/${facilityID}`);
    }
}