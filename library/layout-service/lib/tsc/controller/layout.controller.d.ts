import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LayoutM } from '../model/layout.model';
import * as i0 from "@angular/core";
export declare class LayoutController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getLayoutByOrgID(orgID: any): Observable<LayoutM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayoutController>;
}
