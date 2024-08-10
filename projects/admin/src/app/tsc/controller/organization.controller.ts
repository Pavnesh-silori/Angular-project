import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class OrganizationController {
    constructor(private http: HttpClient) { }

    setupOrg(orgID, setupOrg) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/setup`, setupOrg);
    }

    addOrgLogo(orgID, image) {
        return this.http.post(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/logo`, image);
    }

    updateOrganization(orgID, organizationDetail) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}`, organizationDetail);
    }
}
