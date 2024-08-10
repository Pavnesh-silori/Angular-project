import { Injectable } from '@angular/core';

import {
    HttpClient
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Session } from '@Account/model/Session.model';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SessionDataController {

    constructor(
        private http: HttpClient
    ) { }

    getSessionData(userID): Observable<Session[]> {
        return this.http.get<Session[]>(`${environment.ORGANIZATION_API_URL}users/${userID}/sessions`);
    }

}