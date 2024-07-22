import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataAvailabilityM } from '../model/data-availability.model';
import * as i0 from "@angular/core";
export declare class DataAvailabilityController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getDataAvailability(orgID: any, requestBody: any): Observable<DataAvailabilityM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataAvailabilityController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataAvailabilityController>;
}
