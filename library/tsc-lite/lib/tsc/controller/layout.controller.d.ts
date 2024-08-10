import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LayoutPageM } from '../model/layout.model';
import { PageM } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class LayoutController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getLayoutByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], orgID: number): Observable<PageM<LayoutPageM>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayoutController>;
}
