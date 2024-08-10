import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class FeatureController {
    constructor (
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) {}

    getFeatureByOrgID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/features`);

        // return this.http.get(`${this.environment.MOCK_SERVER}feature`);
    }
}
