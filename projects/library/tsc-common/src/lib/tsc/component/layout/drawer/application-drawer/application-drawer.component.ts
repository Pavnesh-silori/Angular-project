import { Component, OnInit } from '@angular/core';

import { ApplicationKeyID } from '@library/application-service';
import { StorageService } from '@library/storage-service';
import { ApplicationM, ApplicationService } from '@library/application-service';
import { OrgType } from '@library/organization-service';

@Component({
    selector: 'lib-application-drawer',
    templateUrl: './application-drawer.component.html',
    styleUrls: ['./application-drawer.component.scss']
})

export class ApplicationDrawerComponent implements OnInit {
    applicationKeyID: string;
    applicationM: ApplicationM[] = [];
    applicationFilter: ApplicationM[] = [];
    currentOrgType: any = '';
    currentOrgID: any = '';
    currentRootOrgID: any = '';

    constructor(
        private storageService: StorageService,
        private applicationService: ApplicationService
    ) { }

    ngOnInit(): void {
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.currentOrgType = this.storageService.getStorage('currentOrgType');
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.currentRootOrgID = this.storageService.getStorage('rootOrgID');

        if (this.applicationKeyID == ApplicationKeyID.ACCOUNT_KEY_ID) {
            this.getAllApplication();
        } else {
            this.getApplicationByUserAccess();
        }
    }

    async getAllApplication() {
        this.applicationM = <ApplicationM[]>await this.applicationService.getAllApplication();

        this.applicationFilter = this.applicationM.filter(applicationFilter =>
            applicationFilter['keyID'] != ApplicationKeyID.NETZERO_ADMIN_KEY_ID &&
            applicationFilter['keyID'] != ApplicationKeyID.EMPLOYEE_KEY_ID
        );
    }

    async getApplicationByUserAccess() {
        this.applicationM = <ApplicationM[]>await this.applicationService.getApplicationByUserAccess();

        this.applicationFilter = this.applicationM.filter(applicationFilter =>
            applicationFilter['keyID'] != this.applicationKeyID &&
            applicationFilter['keyID'] != ApplicationKeyID.EMPLOYEE_KEY_ID
        );
    }

    getApplicationLogo(keyID: string): string {
        let logo: string;

        logo = this.applicationService.getApplicationLogoWithoutName(keyID);

        return logo;
    }

    appUrlBuilder(applicationKeyID: ApplicationKeyID, appURL: string) {
        let url: string = appURL;
        let orgLevelApp: ApplicationKeyID[] = [ ApplicationKeyID.ADMIN_KEY_ID, ApplicationKeyID.OFFSET_KEY_ID];
        let siteLevelApp: ApplicationKeyID[] = [ApplicationKeyID.ENERGY_KEY_ID, ApplicationKeyID.WATER_KEY_ID, ApplicationKeyID.ENVIRO_KEY_ID];
        let orgSiteLevelApp: ApplicationKeyID[] = [ApplicationKeyID.NETZERO_KEY_ID, ApplicationKeyID.CONNECT_KEY_ID];

        if (orgLevelApp.includes(applicationKeyID) && this.currentOrgType == OrgType.ORGANIZATION) {
            url = `${appURL}&orgID=${this.currentRootOrgID}`;
        } else if (siteLevelApp.includes(applicationKeyID) && this.currentOrgType == OrgType.SITE) {
            url = `${appURL}&orgID=${this.currentOrgID}`;
        } else if (orgSiteLevelApp.includes(applicationKeyID) && (this.currentOrgType == OrgType.ORGANIZATION || this.currentOrgType == OrgType.SITE)) {
            url = `${appURL}&orgID=${this.currentOrgID}`;
        } else {
            url = appURL;
        }

        return url;
    }

}
