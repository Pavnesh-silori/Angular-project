import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ReminderM } from '@netzero/model/reminder.model';

@Injectable({
    providedIn: 'root'
})
export class ReminderController {

    constructor(
        private http: HttpClient
    ) { }

    getReminderDetails(orgID, date): Observable<ReminderM[]> {
        let params = new HttpParams();

        params = params.append('date', date);
        return this.http.get<ReminderM[]>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/reminder`, { params: params });
    }

}
