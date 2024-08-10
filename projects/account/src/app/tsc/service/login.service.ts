import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticateM } from '@Account/model/authenticate.model';

// tsc-library
import {
    ApplicationKeyID,
    ApplicationService
} from '@library/application-service';

import { StorageService } from '@library/storage-service';
import { AuthenticationService } from '@library/authentication-service';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    ApplicationKeyID = ApplicationKeyID;

    applicationKeyID: string = 'ACCOUNT';
    authenticateM: AuthenticateM;

    token: string = '';
    userID: any;
    userUID: any;
    status: string = '';

    redirectUrl: string = '';
    queryParam: string = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private storageService: StorageService,
        private applicationService: ApplicationService
    ) { }

    loggedInRedirect(redirectUrl, pageUrl, orgID) {
        this.token = this.storageService.getStorage('token');
        this.userID = this.storageService.getStorage('userID');

        this.storageService.deleteStorage('redirectUrl');
        this.storageService.deleteStorage('pageUrl');

        this.queryParam = `?token=${this.token}&userID=${this.userID}&redirectUrl=${pageUrl}&orgID=${orgID}`;

        if (redirectUrl == this.applicationService.appRedirect(ApplicationKeyID.ACCOUNT_KEY_ID) + 'login') {
            this.router.navigate([pageUrl]);
        } else {
            this.redirectUrl = redirectUrl + this.queryParam;
            window.location.href = this.redirectUrl;
        }
    }

    loginResController(response, redirectUrl, pageUrl, orgID) {
        this.authenticateM = response;

        this.token = this.authenticateM['token'];
        this.userID = this.authenticateM['userID'];
        this.userUID = this.authenticateM['userUID'];
        this.status = this.authenticateM['status'];

        if (this.token && this.status == 'success') {
            this.storageService.setStorage('token', this.token);
            this.storageService.setStorage('userID', this.userID);
            this.storageService.setStorage('userUID', this.userUID);
            this.storageService.setStorage('applicationKeyID', this.applicationKeyID);

            this.loggedInRedirect(redirectUrl, pageUrl, orgID);
        } else {
            this.authenticationService.logout('', '', 'logout');
        }
    }

}
