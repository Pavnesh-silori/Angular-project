import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { UserM, UserOrgAccessM } from "../model/user.model";

@Injectable({
    providedIn: 'root'
})

export class UserController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getUserByID(userID): Observable<UserM> {
        return this.http.get<UserM>(`${this.environment.ORGANIZATION_API_URL}users/${userID}`);
    }

    getUserOrgAccess(orgID): Observable<UserOrgAccessM> {
        return this.http.get<UserOrgAccessM>(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/user-access`);
    }

    getUsersByOrgID(orgID): Observable<UserM[]> {
        return this.http.get<UserM[]>(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users`);
    }

    getCurrentOrgUserAccess(orgID): Observable<UserM[]> {
        return this.http.get<UserM[]>(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users/access`);
    }

    getUserListByOrgIDAndAppID(orgID: any, applicationID: any): Observable<UserM[]> {
        return this.http.get<UserM[]>(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/applications/${applicationID}/users`);
    }
}