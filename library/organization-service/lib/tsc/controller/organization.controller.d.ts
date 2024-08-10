import { HttpClient } from "@angular/common/http";
import { OrgAccessM, OrgSiteAccessM, OrganizationM } from "../model/organization.model";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class OrganizationController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getOrganizationByID(orgID: any): Observable<OrganizationM>;
    getOrgByAccess(userID: any): Observable<OrgAccessM[]>;
    getOrganizations(orgID: any): Observable<OrgAccessM[]>;
    getOrgSiteWithUserAccess(userID: any): Observable<OrgSiteAccessM>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrganizationController>;
}
