import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class FugitiveActivityTypeController {

    constructor(
        private http: HttpClient,
    ) { }

    getFugitiveActivityType(type, calculationapproachKeyID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}fugitive-activity-type/${type}/${calculationapproachKeyID}`);
    }

}

