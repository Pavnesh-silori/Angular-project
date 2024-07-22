import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ScopeWithActivityM, ScopeWithActivity } from '../model/scope.model';

@Injectable({
    providedIn: 'root'
})

export class ScopeController {

    constructor(
        private http: HttpClient
    ) { }

    getScopeList() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}scopes`);
    }

    getAllScopeWithActivity(): Observable<ScopeWithActivityM[]> {
        return this.http.get<ScopeWithActivityM[]>(`${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}scopes-activity`);
    }
}
