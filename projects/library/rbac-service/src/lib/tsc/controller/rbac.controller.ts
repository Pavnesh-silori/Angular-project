import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class RBACController {
    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getResourcePermissionByOrgIDAndUserID(orgID, userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users/${userID}/resource-permissions`);

        // return this.http.get(`${this.environment.MOCK_SERVER}resourcePermission`);
    }
}
