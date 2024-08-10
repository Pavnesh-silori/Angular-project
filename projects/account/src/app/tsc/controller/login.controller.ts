import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthenticateM } from '@Account/model/authenticate.model'; 

@Injectable({
    providedIn: 'root'
})
export class LoginController {

    headers = new HttpHeaders().set('skipAuth', '1');

    constructor(
        private http: HttpClient
    ) { }

    login(loginDetail) {
        return this.http.post<AuthenticateM>(`${environment.ORGANIZATION_PUBLIC_API_URL}authenticate`, loginDetail, { headers: this.headers });
    }

    forgotPassword(forgotPasswordDetail) {
        return this.http.post(`${environment.ORGANIZATION_PUBLIC_API_URL}user/password/forgot`, forgotPasswordDetail, { headers: this.headers });
    }

    checkTokenValidity(token) {
        let params = new HttpParams();
        params = params.append('token', encodeURIComponent(token));

        return this.http.get(`${environment.ORGANIZATION_PUBLIC_API_URL}token/validate`, { params: params, headers: this.headers });
    }

    createPassword(body) {
        return this.http.patch(`${environment.ORGANIZATION_PUBLIC_API_URL}user/create-password`, body, { headers: this.headers });
    }

    resetPassword(newPassword) {
        return this.http.post(`${environment.ORGANIZATION_PUBLIC_API_URL}user/password/reset`, newPassword, { headers: this.headers });
    }

    ssoLogin(ssoAD, code) {
        let params = new HttpParams();
        params = params.append('code', encodeURIComponent(code));
        return this.http.get(`${environment.ORGANIZATION_PUBLIC_API_URL}sso/${ssoAD}/authenticate`, { params: params, headers: this.headers });
    }
}
