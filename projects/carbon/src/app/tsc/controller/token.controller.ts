import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ResponseM } from '@library/tsc-common';

@Injectable({
    providedIn: 'root'
})

export class TokenController {
    constructor(private http: HttpClient) { }

    tokenValidate(token, tokenID): Observable<ResponseM> {
        let headers = new HttpHeaders().set('skipAuth', '1');
        let params = new HttpParams();

        params = params.append('token', token);
        params = params.append('tokenID', tokenID);

        return this.http.get<ResponseM>(environment.CARBON_ACCOUNTING_PUBLIC_API_URL + 'token/validate', { params: params, headers: headers });
    }
}
