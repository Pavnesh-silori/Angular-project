import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { OrgRecentDataM } from '../model/recent-data.model';
import * as i0 from "@angular/core";
export declare class RecentDataController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getRecentDataWithParam(orgID: any, requestBody: any): Observable<Object>;
    getOrgRecentData(orgID: any, requestBody: any): Observable<OrgRecentDataM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecentDataController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecentDataController>;
}
