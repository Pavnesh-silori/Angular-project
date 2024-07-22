import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CurrencyController {

    constructor(
        private http: HttpClient,
    ) { }

    getCurrency(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.SUBSCRIPTION_API_URL}currency`);
    }
}
