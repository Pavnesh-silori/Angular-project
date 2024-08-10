import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import {TimeZoneM} from '../model/time-zone.model'

@Injectable({
    providedIn: 'root'
})

export class TimeZoneController {
    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getTimeZone() {
        let headers = new HttpHeaders().set('skipAuth', '1');
        return this.http.get<TimeZoneM[]>(`${this.environment.ORGANIZATION_PUBLIC_API_URL}time-zone`, { headers: headers });
    }
  
}