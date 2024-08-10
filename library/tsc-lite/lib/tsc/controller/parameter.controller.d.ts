import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParameterM } from '../model/parameter.model';
import * as i0 from "@angular/core";
export declare class ParameterController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getParameterByLayoutID(orgID: any): Observable<ParameterM[]>;
    getParameterByDeviceID(orgID: any, requestBody: any): Observable<ParameterM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ParameterController>;
}
