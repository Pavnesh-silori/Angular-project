import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import {StateM} from '../model/state.model'

@Injectable({
    providedIn: 'root'
})

export class StateController {
    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getState(countryCode) {
        let headers = new HttpHeaders().set('skipAuth', '1');
        return this.http.get<StateM[]>(`${this.environment.ORGANIZATION_PUBLIC_API_URL}states/${countryCode}`, { headers: headers });
    }
  
}