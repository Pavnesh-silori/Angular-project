import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { RolePermissionM } from '@Admin/model/role-permission.model';
@Injectable({
    providedIn: 'root'
})
export class RoleController {

    constructor(
        private http: HttpClient,) { }

    getPermissionByRoleID(orgID, roleID) {
        return this.http.get<RolePermissionM>(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/roles/${roleID}`);
    }

    getRoleList(orgID) {
        return this.http.get(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/applications/roles`);
    }
}