import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// tsc-library
import { StorageService } from '@library/storage-service';
import { Layout, LayoutM, LayoutService } from '@library/layout-service';
import { OrganizationService } from '@library/organization-service';
// /tsc-library/

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss']
})

export class SuccessComponent implements OnInit {
    redirectUrl: string = '/';
    noTimezone: string = './timezone-not-found';
    layoutM = [new Layout()];
    timezone: string = null;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private layoutService: LayoutService,
        private organizationService: OrganizationService,
        private storageService: StorageService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(queryParam => {
            if (queryParam.redirectUrl) {
                this.redirectUrl = queryParam.redirectUrl;
            }
        });

        // INFO: SOMYA AGRAWAL
        // Clearing layoutID from storage in switch org because previous layoutID remains in local storage even if current org does not have any layout!
        this.storageService.deleteStorage('layoutID');
        this.timeZoneCheck();
    }

    async timeZoneCheck() {
        this.timezone = <string>await this.organizationService.getOrgTimezone();

        if (this.timezone) {
            this.storageService.setStorage('timezone', this.timezone);
            this.getLayoutsByOrgID();
        } else {
            this.router.navigate([this.noTimezone]);
        }
    }

    async getLayoutsByOrgID() {
        let orgID = this.storageService.getStorage('currentOrgID');

        this.layoutM = <LayoutM[]>await this.layoutService.getLayoutByOrgID(orgID);

        const defaultLayout = this.layoutM.find(layout => layout.isDefault);

        if (defaultLayout) {
            const defaultLayoutID = defaultLayout.id;
            this.storageService.setStorage('layoutID', defaultLayoutID);
        } else {
            console.error('No layout found.');
        }

        this.router.navigate([this.redirectUrl]);
    }

}
