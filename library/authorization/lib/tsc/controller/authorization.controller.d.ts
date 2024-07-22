import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationM } from '../model/authorization.model';
import * as i0 from "@angular/core";
export declare class AuthorizationController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getAuthorizationByApp(applicationKeyID: string, orgID: number): Observable<AuthorizationM>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthorizationController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthorizationController>;
}
