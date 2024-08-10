import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ShiftM } from '../model/shift.model';

@Injectable({
    providedIn: 'root'
})

export class ShiftController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getShift(orgID, skipLoader): Observable<ShiftM[]> {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);

        return this.http.get<ShiftM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/shifts`, { headers: headers });
    }
}
