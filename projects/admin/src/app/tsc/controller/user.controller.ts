import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserM } from '@library/user-service';
@Injectable({
    providedIn: 'root'
})
export class UserController {

    constructor(
        private http: HttpClient,
    ) { }

    getUserByID(userID): Observable<UserM> {
        return this.http.get<UserM>(`${environment.ORGANIZATION_API_URL}users/${userID}`);
    }

    getUserByPage(orgID, pageNo, pageSize, sortBy, orderBy, search: any[]) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        search.forEach(search => params = params.append('search', search));

        return this.http.get(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/users/page`, { params: params });
    }

    inviteUser(orgID, user) {
        return this.http.post(`${environment.ORGANIZATION_API_URL}public/organizations/${orgID}/users/invite`, user);
    }

    getAccess(orgID, userID) {
        return this.http.get(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/users/${userID}/access`);
    }

    manageAccess(orgID, userID, access) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/users/${userID}/access`, access);
    }

    updateUserStatusByID(orgID, userID, status) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/users/${userID}/status`, status);
    }

    deleteUserFromOrgByID(orgID, userID) {
        return this.http.delete(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/users/${userID}`);
    }
}
