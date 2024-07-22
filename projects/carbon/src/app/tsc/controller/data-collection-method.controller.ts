import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataCollectionMethodController {

    constructor(
        private http: HttpClient,
    ) { }

    getDataCollectionMethodList() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}data-collection-methods`);
    }
}
