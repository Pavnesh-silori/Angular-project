import { Injectable } from "@angular/core";

import {
    HttpClient,
    HttpParams,
    HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";

import { AuthorizationM } from '../model/authorization.model';

@Injectable({
    providedIn: 'root'
})

export class AuthorizationController {
    constructor(
        private http: HttpClient
    ) { }

    getAuthorizationByApp(applicationKeyID: string, orgID: number): Observable<AuthorizationM> {
        let headers = new HttpHeaders();
        headers = headers.set('applicationKeyID', applicationKeyID);

        let params = new HttpParams();
        params = params.append('orgID', orgID);

        return this.http.get<AuthorizationM>(`${environment.ORGANIZATION_API_URL}authorization`, { params: params, headers: headers });
    }
}
