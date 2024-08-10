import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DevicesWithEntitiesM } from '../model/device.model';
import * as i0 from "@angular/core";
export declare class EntityDeviceController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getDevicesWithEntities(orgID: any, requestBody: any): Observable<DevicesWithEntitiesM[]>;
    getDevicesWithEntitiesByParameter(orgID: any, paramName: any): Observable<DevicesWithEntitiesM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDeviceController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityDeviceController>;
}
