import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PreferenceController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getOrgPreference(orgID) {
        return this.http.get(`${this.environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/preference`);
    }
}
