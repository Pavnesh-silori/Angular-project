import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DevicesWithEntitiesM } from '../model/device.model';

@Injectable({
    providedIn: 'root'
})

export class EntityDeviceController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getDevicesWithEntities(orgID, requestBody): Observable<DevicesWithEntitiesM[]> {
        return this.http.post<DevicesWithEntitiesM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities/devices`, requestBody);
    }

    getDevicesWithEntitiesByParameter(orgID, paramName): Observable<DevicesWithEntitiesM[]> {
        let params = new HttpParams();
        params = params.append('paramName', paramName);

        return this.http.get<DevicesWithEntitiesM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-devices`, { params: params });
    }
}
