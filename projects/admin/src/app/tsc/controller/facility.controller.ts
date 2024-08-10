import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { PageM } from '@Admin/model/page.model';
import { FacilityPageM } from '@Admin/model/facility.model';

@Injectable({
    providedIn: 'root'
})

export class FacilityController {

    constructor(
        private http: HttpClient,
    ) { }

    getFacilityByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], filter: any[], orgID: number): Observable<PageM<FacilityPageM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        search.forEach(search => params = params.append('search', search));
        filter.forEach(filter => params = params.append('filter', filter));

        return this.http.get<PageM<FacilityPageM>>(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/facility/page`, { params: params });
    }

    createFacility(orgID, facility) {
        return this.http.post(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/facility`, facility);
    }

    updateFacility(orgID, facilityID, facility) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/facility/${facilityID}`, facility);
    }

    updateFacilityStatusByID(orgID, facilityID, status) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/facility/${facilityID}/status`, status);
    }
}
