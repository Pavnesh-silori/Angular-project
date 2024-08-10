import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { LatPasswordChangeM } from '../model/security.model';

@Injectable({
    providedIn: 'root'
})
export class SecurityController {

    constructor(private http: HttpClient) { }

    getLastPasswordChangeInfo(): Observable<LatPasswordChangeM> {
        return this.http.get<LatPasswordChangeM>(`${environment.ORGANIZATION_API_URL}password`);
    }
}
