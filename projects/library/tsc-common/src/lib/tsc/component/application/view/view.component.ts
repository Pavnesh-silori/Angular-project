import { Component, OnInit } from '@angular/core';

// library
import { StorageService } from '@library/storage-service';

import {
    ApplicationKeyID,
    ApplicationM,
    Application,
    UserApplicationM,
    UserApplication,
    ApplicationService
} from '@library/application-service';

import {
    UserM,
    User,
    UserService
} from '@library/user-service';
// /library/

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'
    ]
})

export class ViewComponent implements OnInit {
    currentOrgID: any;
    currentAppKeyID: string;
    isCurrentAppIsAccount: boolean = false;

    applicationM: ApplicationM[];
    applicationFilter = [new Application()];
    excludeApplicationKeyID: string[] = [ApplicationKeyID.ADMIN_KEY_ID, ApplicationKeyID.NETZERO_ADMIN_KEY_ID, ApplicationKeyID.EMPLOYEE_KEY_ID];
    // userApplicationM: UserApplicationM[];
    userApplicationM = [new UserApplication()];

    userID: any;
    userM = new User();

    constructor(
        private storageService: StorageService,
        private applicationService: ApplicationService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.currentAppKeyID = this.storageService.getStorage(['applicationKeyID']);
        this.userID = this.storageService.getStorage(['userID']);

        this.isCurrentAppIsAccountFnc(this.currentAppKeyID);
        this.getAllApplication();
        this.getUserByID();

        if (!this.isCurrentAppIsAccount) {
            this.getApplicationByUserAccess();
        }
    }

    async getAllApplication() {
        this.applicationM = <ApplicationM[]>await this.applicationService.getAllApplication();

        this.applicationFilter = this.applicationM.filter((applicationres: ApplicationM) =>
            !this.excludeApplicationKeyID.includes(applicationres.keyID)
        );
    }

    async getApplicationByUserAccess() {
        this.userApplicationM = <UserApplicationM[]>await this.applicationService.getSubscribedApplicationsByOrgID(this.currentOrgID);
    }

    async getUserByID() {
        this.userM = <UserM>await this.userService.getUserByID(this.userID);
    }

    getApplicationLogoWithoutName(keyID: string): string {
        let logo: string;
        logo = this.applicationService.getApplicationLogoWithoutName(keyID);
        return logo;
    }

    isCurrentAppIsAccountFnc(appKeyID) {
        this.isCurrentAppIsAccount = appKeyID == ApplicationKeyID.ACCOUNT_KEY_ID ? true : false;
    }

    isAccess(applicationID) {
        return this.userApplicationM.some(item => item.id == applicationID);
    }

}
