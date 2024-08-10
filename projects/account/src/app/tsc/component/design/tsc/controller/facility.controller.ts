import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { FacilityI } from '../model/facility.model';

// tsc-library
import { PageM } from '@library/tsc-common';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class FacilityController {

    constructor(
        private http: HttpClient,
    ) { }

    createFacility(orgID, facility) {
        return this.http.post(`${environment.MOCK_SERVER}design-facility-create`, facility);
    }

    getFacilityByID(orgID, facilityID): Observable<FacilityI> {
        // return this.http.get<FacilityI>(`${environment.MOCK_SERVER}design-facility-view`);
        return this.http.get<FacilityI>(`assets/data/view.json`);
    }

    updateFacility(orgID, facilityID, facility) {
        return this.http.post(`${environment.MOCK_SERVER}design-facility-update`, facility);
    }

    getFacilityByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string,): Observable<PageM<FacilityI>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        // return this.http.get<PageM<FacilityI>>(`${environment.MOCK_SERVER}design-facility-page`, { params: params });
        return this.http.get<PageM<FacilityI>>(`assets/data/page.json`, { params: params });
    }
}
