import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { StatusInfoM, DeviceM, DeviceMappingM } from '../model/device.model';

// tsc-library
import { PageM } from '@library/tsc-common';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class DeviceController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getDeviceStatusInfo(orgID): Observable<StatusInfoM> {
        return this.http.get<StatusInfoM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/status`);
    }

    getDevicesByEntityID(orgID, requestBody): Observable<DeviceM[]> {
        return this.http.post<DeviceM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/devices`, requestBody);
    }

    getUnMappedDevices(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], orgID: number, layoutID: number, entityID: number): Observable<PageM<DeviceMappingM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        search.forEach(search => params = params.append('search', search));
        return this.http.get<PageM<DeviceMappingM>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/devices/unmapped`, { params: params });
    }

    getMappedDevices(pageNo: number, pageSize: number, search: any[], orgID: number, layoutID: number, entityID: number): Observable<PageM<DeviceMappingM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);

        search.forEach(search => params = params.append('search', search));
        return this.http.get<PageM<DeviceMappingM>>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/devices/mapped`, { params: params });
    }

    saveDeviceMapping(orgID, layoutID, entityID, devices) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/map-devices`, devices);
    }

    deleteDeviceMapping(orgID, layoutID, entityID, deviceID) {
        let params = new HttpParams();
        params = params.append('deviceID', deviceID);

        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/devices`, { params: params });
    }

    updateSourceLoad(orgID, layoutID, entityID, deviceID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/devices/${deviceID}/source-load`, requestBody);
    }

}
