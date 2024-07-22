import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsumptionParameterM, ParameterM, SavedConsumptionParameterM } from '../model/parameter.model';
import * as i0 from "@angular/core";
export declare class ParameterController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getParameterByOrgID(orgID: any): Observable<ParameterM[]>;
    getParameterByLayoutID(orgID: any): Observable<ParameterM[]>;
    getParameterByDeviceID(orgID: any, requestBody: any): Observable<ParameterM[]>;
    getParameterByEntityType(orgID: any, requestBody: any): Observable<ParameterM[]>;
    getConsumptionParameter(orgID: any): Observable<ConsumptionParameterM>;
    saveConsumptionParameter(orgID: any, parameter: any): Observable<Object>;
    getSavedConsumptionParameter(orgID: any): Observable<SavedConsumptionParameterM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ParameterController>;
}
