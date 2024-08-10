import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceInfoM, DeviceM } from '../model/device.model';
import * as i0 from "@angular/core";
export declare class DeviceController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getDeviceInfo(orgID: any): Observable<DeviceInfoM>;
    getDevicesByEntityID(orgID: any, requestBody: any): Observable<DeviceM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeviceController>;
}
