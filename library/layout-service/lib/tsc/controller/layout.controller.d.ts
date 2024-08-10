import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LayoutM, PageM } from '../model/layout.model';
import * as i0 from "@angular/core";
export declare class LayoutController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getLayoutByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], orgID: number): Observable<PageM<LayoutM>>;
    getLayoutByOrgID(orgID: any): Observable<LayoutM[]>;
    getLayoutByID(orgID: any, layoutID: any): Observable<LayoutM>;
    createLayout(orgID: any, layout: any): Observable<Object>;
    updateLayout(orgID: any, layoutID: any, layout: any): Observable<Object>;
    deleteLayout(orgID: any, layoutID: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayoutController>;
}
