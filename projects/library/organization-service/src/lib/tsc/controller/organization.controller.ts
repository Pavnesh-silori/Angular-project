import { HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { OrgAccessM, OrgSiteAccessM, OrganizationM } from "../model/organization.model";

import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class OrganizationController {
    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getOrganizationByID(orgID): Observable<OrganizationM> {
        return this.http.get<OrganizationM>(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}`);
    }

    getOrgByAccess(userID): Observable<OrgAccessM[]> {
        return this.http.get<OrgAccessM[]>(`${this.environment.ORGANIZATION_API_URL}users/${userID}/organizations-sites/access`);
    }

    getOrganizations(orgID): Observable<OrgAccessM[]> {
        return this.http.get<OrgAccessM[]>(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/org-facility`);
    }

    getOrganizationsByType(orgID, type) {
        let params = new HttpParams();
        params = params.append('type', type);
        
        return this.http.get<OrgAccessM[]>(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/org-facility`, { params: params });
    }

    getOrgSiteWithUserAccess(userID): Observable<OrgSiteAccessM> {
        return this.http.get<OrgSiteAccessM>(`${this.environment.ORGANIZATION_API_URL}users/${userID}/organizations-sites/access-new`);
    }
}