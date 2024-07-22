import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeterDataI } from '../model/aggregate-data.model';
import * as i0 from "@angular/core";
export declare class AggregateDataController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getAggregateData(orgID: any, requestBody: any): Observable<Object>;
    getMeterAggregateDataForReport(orgID: any, requestBody: any): Observable<MeterDataI[]>;
    getDeviceAggregateData(orgID: any, requestBody: any): Observable<Object>;
    getCumulativeConsumption(orgID: any, requestBody: any): Observable<Object>;
    getEntityParameterData(orgID: any, requestBody: any): Observable<Object>;
    getAvoidedEmissionData(orgID: any, requestBody: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateDataController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AggregateDataController>;
}
