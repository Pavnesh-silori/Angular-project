import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserM, UserOrgAccessM } from "../model/user.model";
import * as i0 from "@angular/core";
export declare class UserController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getUserByID(userID: any): Observable<UserM>;
    getUserOrgAccess(orgID: any): Observable<UserOrgAccessM>;
    getUsersByOrgID(orgID: any): Observable<UserM[]>;
    getCurrentOrgUserAccess(orgID: any): Observable<UserM[]>;
    getUserListByOrgIDAndAppID(orgID: any, applicationID: any): Observable<UserM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserController>;
}
