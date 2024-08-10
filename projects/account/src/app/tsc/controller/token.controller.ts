import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { ResponseM } from '@library/tsc-common';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class TokenController {
    constructor(private http: HttpClient) { }

    tokenValidate(token, tokenID, skipSuccessStatus): Observable<ResponseM> {
        let headers = new HttpHeaders();
        headers = headers.set('skipAuth', '1');
        headers = headers.set('skipSuccessStatus', skipSuccessStatus);

        let params = new HttpParams();
        params = params.append('token', token);
        params = params.append('tokenID', tokenID);

        return this.http.get<ResponseM>(environment.ORGANIZATION_PUBLIC_API_URL + 'token/validate', { params: params, headers: headers });
    }
}
