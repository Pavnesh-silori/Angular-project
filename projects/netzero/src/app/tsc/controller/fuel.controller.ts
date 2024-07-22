import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FuelPageM } from '@netzero/model/fuel.model';

@Injectable({
    providedIn: 'root'
})

export class FuelController {

    constructor(
        private http: HttpClient
    ) { }

    createFuel(orgID, value) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/custom-fuels`, value)
    }

    getFuelByID(orgID, fuelID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/custom-fuels/${fuelID}`)
    }

    getFuelByPage(pageNo: number, pazeSize: number, sortBy: string, orderBy, orgID, searchValue, searchFlag): Observable<FuelPageM> {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        if (searchFlag) {
            params = params.append('search', searchValue);
        }

        return this.http.get<FuelPageM>(`${environment.COMMON_API_URL}organizations/${orgID}/custom-fuels/page`, { params: params });
    }

    updateFuel(orgID, fuelID, value) {
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${orgID}/custom-fuels/${fuelID}`, value)
    }

    deleteFuel(orgID, fuelID) {
        return this.http.delete(`${environment.COMMON_API_URL}organizations/${orgID}/custom-fuels/${fuelID}`)
    }

    fuelBulkUpload(orgId, file) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgId}/custom-fuels/bulk-upload`, file);
    }

}
