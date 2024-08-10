import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";
import {CountryM} from '../model/country.model'


@Injectable({
    providedIn: 'root'
})

export class CountryController {
    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getCountry() {
        let headers = new HttpHeaders().set('skipAuth', '1');
        return this.http.get<CountryM[]>(`${this.environment.ORGANIZATION_PUBLIC_API_URL}country`, { headers: headers });
    }

}