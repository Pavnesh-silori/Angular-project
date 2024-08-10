import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaticPageOne } from '../../../model/static-page-one.model';

// tsc-library
import { OrgType } from '@library/organization-service';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'lib-timezone-not-found',
    templateUrl: './timezone-not-found.component.html',
    styles: [
    ]
})
export class TimezoneNotFoundComponent implements OnInit {

    rootOrgID: any;
    currentOrgID: any;
    currentOrgType: any;
    token: string;
    userID: string;
    redirectUrl: any;
    appRedirectUrl: string;

    data = new StaticPageOne();

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        @Inject('environment') private environment: any
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.currentOrgType = this.storageService.getStorage('currentOrgType');
        this.token = this.storageService.getStorage('token');
        this.userID = this.storageService.getStorage('userID');

        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });

        if (this.currentOrgType == OrgType.ORGANIZATION) {
            this.redirectUrl = `organization/${this.currentOrgID}/update`;
        } else if (this.currentOrgType == OrgType.SITE) {
            this.redirectUrl = `facility/${this.currentOrgID}/update`;
        } else {
            this.redirectUrl = `organization/view`
        }

        this.appRedirectUrl = `${this.environment.ADMIN_URL}login?token=${this.token}&userID=${this.userID}&orgID=${this.rootOrgID}&redirectUrl=${this.redirectUrl}`;

        this.storageService.clearStorage();
    }

}
