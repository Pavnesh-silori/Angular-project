import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusInfoM, DeviceM, DeviceMappingM } from '../model/device.model';
import { PageM } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class DeviceController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getDeviceStatusInfo(orgID: any): Observable<StatusInfoM>;
    getDevicesByEntityID(orgID: any, requestBody: any): Observable<DeviceM[]>;
    getUnMappedDevices(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], orgID: number, layoutID: number, entityID: number): Observable<PageM<DeviceMappingM>>;
    getMappedDevices(pageNo: number, pageSize: number, search: any[], orgID: number, layoutID: number, entityID: number): Observable<PageM<DeviceMappingM>>;
    saveDeviceMapping(orgID: any, layoutID: any, entityID: any, devices: any): Observable<Object>;
    deleteDeviceMapping(orgID: any, layoutID: any, entityID: any, deviceID: any): Observable<Object>;
    updateSourceLoad(orgID: any, layoutID: any, entityID: any, deviceID: any, requestBody: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeviceController>;
}
