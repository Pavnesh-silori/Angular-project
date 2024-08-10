import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { AuthenticateM } from '@Account/model/authenticate.model';

import { environment } from 'src/environments/environment';

import { LoginService } from '@Account/service/login.service';
import { AuthorizationService } from '@Account/service/authorization.service';

import { LoginController } from '@Account/controller/login.controller';

// library
import {
    COMMON_CONSTANT,
    MATERIAL_CONSTANT,
    MaterialFormFieldAppearance
} from '@library/tsc-common';

import { StorageService } from '@library/storage-service';
import { AuthenticationService } from '@library/authentication-service';
// /library

@Component({
    selector: 'app-login-new',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    environment = environment;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    authenticateM: AuthenticateM;
    loginFG: FormGroup;

    hide = true;
    isTokenValid: string = 'NO';

    pageUrl: string = '';
    redirectUrl: string = '';

    orgID: any = '';

    googleSso: string = environment.GOOGLE_SSO;
    azureSso: string = environment.AZURE_SSO;
    ssoStateObject: Record<string, any> = {};
    ssoStateString: string;

    isLoggedOut: boolean = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private loginFB: FormBuilder,
        private loginController: LoginController,
        private storageService: StorageService,
        private authenticationService: AuthenticationService,
        private authorizationService: AuthorizationService,
        private loginService: LoginService,
    ) { }

    async ngOnInit() {
        this.loginInit();

        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['action']) {
                if (queryParams['action'] == 'logout') {
                    this.authenticationService.logout(queryParams['redirectUrl'] ? queryParams['redirectUrl'] : '', queryParams['pageUrl'] ? queryParams['pageUrl'] : '', '');
                }
            } else {
                if (queryParams['redirectUrl']) {
                    this.redirectUrl = queryParams['redirectUrl'];
                    this.ssoStateObject.redirectUrl = this.redirectUrl;
                    this.storageService.setStorage('redirectUrl', queryParams['redirectUrl']);
                }

                if (queryParams['pageUrl']) {
                    this.pageUrl = queryParams['pageUrl'];
                    this.ssoStateObject.pageUrl = this.pageUrl;
                    this.storageService.setStorage('pageUrl', queryParams['pageUrl']);
                }

                if (queryParams['orgID']) {
                    console.log('queryParams[orgID] in if', queryParams['orgID']);
                    this.orgID = queryParams['orgID'];
                    this.ssoStateObject.orgID = this.orgID;
                }
            }

            if (Object.keys(this.ssoStateObject).length > 0) {
                this.ssoStateString = JSON.stringify(this.ssoStateObject);
            }

            if (Object.keys(this.ssoStateObject).length > 0) {
                this.googleSso = this.googleSso + '&state=' + this.ssoStateString;
                this.azureSso = this.azureSso + '&state=' + this.ssoStateString;
            }
        });

        if (this.authenticationService.isLoggedIn()) {
            this.isLoggedOut = false;
            this.isTokenValid = <string>await this.authorizationService.authenticateToken();
        }

        if (this.isTokenValid == 'YES') {
            this.loginService.loggedInRedirect(this.redirectUrl, this.pageUrl, this.orgID);
        }

    }

    loginInit() {
        this.loginFG = this.loginFB.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    login() {
        if (this.loginFG.invalid) {
            console.log('invalid form - ', this.loginFG);
            return;
        }

        this.loginController.login(this.loginFG.getRawValue())
            .subscribe((loginRes: AuthenticateM) => {
                this.authenticateM = loginRes;
                this.loginService.loginResController(this.authenticateM, this.redirectUrl, this.pageUrl, this.orgID);
            },
                error => {
                    console.log('error in login - ', error);
                });
    }

    public errorHandling = (control: string, error: string) => {
        return this.loginFG.controls[control].hasError(error);
    }
}
