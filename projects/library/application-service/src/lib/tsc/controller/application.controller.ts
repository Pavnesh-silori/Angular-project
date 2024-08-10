import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationM } from '../model/application.model'; 

@Injectable({
    providedIn: 'root'
})

export class ApplicationController {
    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getAllApplication(): Observable<ApplicationM[]> {
        return this.http.get<ApplicationM[]>(`${this.environment.SUBSCRIPTION_API_URL}applications`);
    }

    getApplicationByUserAccess(): Observable<ApplicationM[]> {
        return this.http.get<ApplicationM[]>(`${this.environment.ORGANIZATION_API_URL}user/applications/access`);
    }

    getSubscribedApplicationsByOrgID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/applications-roles`);
    }
}
