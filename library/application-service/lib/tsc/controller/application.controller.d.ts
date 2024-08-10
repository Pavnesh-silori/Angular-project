import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationM } from '../model/application.model';
import * as i0 from "@angular/core";
export declare class ApplicationController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getAllApplication(): Observable<ApplicationM[]>;
    getApplicationByUserAccess(): Observable<ApplicationM[]>;
    getSubscribedApplicationsByOrgID(orgID: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApplicationController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApplicationController>;
}
