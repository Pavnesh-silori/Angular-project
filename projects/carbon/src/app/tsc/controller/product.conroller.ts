import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductM } from '@netzero/model/product-service.model';

@Injectable({
    providedIn: 'root'
})

export class ProductController {

    constructor(
        private http: HttpClient
    ) { }

    getProductionRoute(orgID): Observable<ProductM[]> {
        return this.http.get<ProductM[]>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/production-route`)
    }
}