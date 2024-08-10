import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DataAvailabilityM } from '../model/data-availability.model';

@Injectable({
    providedIn: 'root'
})

export class DataAvailabilityController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getDataAvailability(orgID, requestBody): Observable<DataAvailabilityM[]> {
        let headers = new HttpHeaders().set('skipLoader', 'YES');

        return this.http.post<DataAvailabilityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data-availability`, requestBody, { headers: headers });
    }

}
