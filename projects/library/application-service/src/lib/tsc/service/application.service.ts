import { Inject, Injectable } from '@angular/core';

import { ApplicationKeyID } from '../enum/application.enum';
import { ApplicationM, Application, UserApplication, UserApplicationM } from '../model/application.model';

import { ApplicationController } from '../controller/application.controller';

import { AuthenticationService } from '@library/authentication-service';

@Injectable({
    providedIn: 'root'
})

export class ApplicationService {

    ApplicationKeyID: ApplicationKeyID;

    constructor(
        @Inject('environment') private environment: any,
        private applicationController: ApplicationController,
        private authenticationService: AuthenticationService
    ) { }

    async getAllApplication(): Promise<ApplicationM[]> {
        let applicationM: ApplicationM[];

        try {
            applicationM = await this.applicationController.getAllApplication().toPromise();

            if (applicationM) {
                return applicationM;
            } else {
                return [new Application()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Application()];
        }
    }

    async getApplicationByUserAccess(): Promise<ApplicationM[]> {
        let applicationM: ApplicationM[];

        try {
            applicationM = await this.applicationController.getApplicationByUserAccess().toPromise();

            if (applicationM) {
                return applicationM;
            } else {
                return [new Application()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Application()];
        }
    }

    async getSubscribedApplicationsByOrgID(orgID): Promise<UserApplicationM[]> {
        let applicationM: any;

        try {
            applicationM = await this.applicationController.getSubscribedApplicationsByOrgID(orgID).toPromise();

            if (applicationM) {
                return applicationM['application'];
            } else {
                return [new UserApplication()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new UserApplication()];
        }
    }

    getApplicationLogo(keyID: string): string {
        let logo: string;
        let basePath: string = '/assets/images/application-logo/';

        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                logo = basePath + 'admin-with-name.jpg';
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                logo = basePath + 'netzero-with-name.jpg';
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                logo = basePath + 'water-with-name.jpg';
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                logo = basePath + 'energy-with-name.jpg';
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                logo = basePath + 'enviro-with-name.jpg';
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                logo = basePath + 'offset-with-name.jpg';
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                logo = basePath + 'connect-with-name.jpg';
                break;
            default:
                logo = null;
        }
        return logo;
    }

    getApplicationLogoWithoutName(keyID: string): string {
        let logo: string;
        let basePath: string = '/assets/images/application-logo/';

        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                logo = basePath + 'admin-without-name.jpg';
                break;
            case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                logo = basePath + 'll-admin-without-name.png';
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                logo = basePath + 'netzero-without-name.jpg';
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                logo = basePath + 'water-without-name.jpg';
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                logo = basePath + 'energy-without-name.jpg';
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                logo = basePath + 'enviro-without-name.jpg';
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                logo = basePath + 'offset-without-name.jpg';
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                logo = basePath + 'connect-without-name.jpg';
                break;
            default:
                logo = null;
        }
        return logo;
    }

    getApplicationLogoWithSideName(keyID: string): string {
        let logo: string;
        let basePath: string = '/assets/images/application-logo/with-side-name/';

        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                logo = basePath + 'admin.png';
                break;
            case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                logo = basePath + 'll-admin.png';
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                logo = basePath + 'netzero.png';
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                logo = basePath + 'water.png';
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                logo = basePath + 'energy.png';
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                logo = basePath + 'enviro.png';
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                logo = basePath + 'offset.png';
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                logo = basePath + 'connect.png';
                break;
            default:
                logo = null;
        }
        return logo;
    }

    getApplicationLogoFileName(keyID: string): string {
        let fileName: string;

        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                fileName = 'admin';
                break;
            case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                fileName = 'll-admin';
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                fileName = 'netzero';
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                fileName = 'water';
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                fileName = 'energy';
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                fileName = 'enviro';
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                fileName = 'offset';
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                fileName = 'connect';
                break;
            default:
                fileName = null;
        }
        return fileName;
    }

    appRedirect(applicationKeyID) {
        let redirectUrl: string;

        switch (applicationKeyID) {
            case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                redirectUrl = this.environment.NETZERO_ADMIN_URL;
                break;
            case ApplicationKeyID.ADMIN_KEY_ID:
                redirectUrl = this.environment.ADMIN_URL;
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                redirectUrl = this.environment.NETZERO_URL;
                break;
            case ApplicationKeyID.SUPPLIER_KEY_ID:
                redirectUrl = this.environment.ENTERPRISE_SUPPLIER_URL;
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                redirectUrl = this.environment.OFFSET_URL;
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                redirectUrl = this.environment.CONNECT_URL;
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                redirectUrl = this.environment.ENERGY_URL;
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                redirectUrl = this.environment.WATER_URL;
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                redirectUrl = this.environment.ENVIRO_URL;
                break;
            default:
                redirectUrl = this.environment.ACCOUNT_URL;
                break;
        }

        return redirectUrl;
    }

    appBtnLogout(applicationKeyID) {
        let redirectUrl = '';

        redirectUrl = this.appRedirect(applicationKeyID);
        this.authenticationService.logout(redirectUrl, '', 'logout');
    }

}
