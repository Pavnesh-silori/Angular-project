import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';

import { ResponseM } from '@library/tsc-common';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SignUpController {
    headers = new HttpHeaders().set('skipAuth', '1'); /* COMMON_HTTP_HEADERS */

    constructor(private http: HttpClient) { }

    orgSignUp(SignUp, source) {
        let params = new HttpParams();
        params = params.append('source', source);

        return this.http.post(`${environment.ORGANIZATION_PUBLIC_API_URL}organizations/sign-up/enterprise`, SignUp, { params: params, headers: this.headers });
    }

    userSignUp(tokenID, orgID, userSignUp) {
        let params = new HttpParams();
        params = params.append('orgID', orgID);
        params = params.append('tokenID', tokenID);

        return this.http.patch<ResponseM>(`${environment.ORGANIZATION_PUBLIC_API_URL}organizations/users/sign-up`, userSignUp, { params: params, headers: this.headers });
    }

    tokenValidate(token, tokenID) {
        let params = new HttpParams();
        params = params.append('token', token);
        params = params.append('tokenID', tokenID);

        return this.http.get<ResponseM>(environment.ORGANIZATION_PUBLIC_API_URL + 'token/validate', { params: params, headers: this.headers });
    }

    getUserByID(userID) {
        return this.http.get(`${environment.ORGANIZATION_PUBLIC_API_URL}users/${userID}`, { headers: this.headers });
    }

}
