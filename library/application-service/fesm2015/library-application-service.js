import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject } from '@angular/core';
import * as i1 from '@angular/common/http';
import { __awaiter } from 'tslib';
import * as i2 from '@library/authentication-service';

class ApplicationServiceService {
    constructor() { }
}
ApplicationServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ApplicationServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ApplicationServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApplicationServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ApplicationServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ApplicationServiceComponent, selector: "lib-application-service", ngImport: i0, template: `
    <p>
      application-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-application-service',
                    template: `
    <p>
      application-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ApplicationServiceModule {
    static forRoot(environment) {
        return {
            ngModule: ApplicationServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
ApplicationServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApplicationServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceModule, declarations: [ApplicationServiceComponent], exports: [ApplicationServiceComponent] });
ApplicationServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ApplicationServiceComponent
                    ],
                    imports: [],
                    exports: [
                        ApplicationServiceComponent
                    ]
                }]
        }] });

var ApplicationKeyID;
(function (ApplicationKeyID) {
    ApplicationKeyID["NETZERO_ADMIN_KEY_ID"] = "NETZERO_ADMIN";
    ApplicationKeyID["ACCOUNT_KEY_ID"] = "ACCOUNT";
    ApplicationKeyID["ADMIN_KEY_ID"] = "ADMIN";
    ApplicationKeyID["NETZERO_KEY_ID"] = "TSC_NETZERO";
    ApplicationKeyID["ENERGY_KEY_ID"] = "TSC_ENERGY";
    ApplicationKeyID["WATER_KEY_ID"] = "TSC_WATER";
    ApplicationKeyID["ENVIRO_KEY_ID"] = "TSC_ENVIRO";
    ApplicationKeyID["CONNECT_KEY_ID"] = "TSC_CONNECT";
    ApplicationKeyID["OFFSET_KEY_ID"] = "TSC_OFFSET";
    ApplicationKeyID["SUPPLIER_KEY_ID"] = "SUPPLIER";
    ApplicationKeyID["EMPLOYEE_KEY_ID"] = "EMPLOYEE";
})(ApplicationKeyID || (ApplicationKeyID = {}));

class Application {
    constructor() {
        this.id = null;
        this.name = null;
        this.keyID = null;
        this.description = null;
        this.url = null;
    }
}
class Role {
}
class RootObject {
}
class UserApplication {
}

class ApplicationController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getAllApplication() {
        return this.http.get(`${this.environment.SUBSCRIPTION_API_URL}applications`);
    }
    getApplicationByUserAccess() {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}user/applications/access`);
    }
    getSubscribedApplicationsByOrgID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/applications-roles`);
    }
}
ApplicationController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ApplicationController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class ApplicationService {
    constructor(environment, applicationController, authenticationService) {
        this.environment = environment;
        this.applicationController = applicationController;
        this.authenticationService = authenticationService;
    }
    getAllApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationM;
            try {
                applicationM = yield this.applicationController.getAllApplication().toPromise();
                if (applicationM) {
                    return applicationM;
                }
                else {
                    return [new Application()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Application()];
            }
        });
    }
    getApplicationByUserAccess() {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationM;
            try {
                applicationM = yield this.applicationController.getApplicationByUserAccess().toPromise();
                if (applicationM) {
                    return applicationM;
                }
                else {
                    return [new Application()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Application()];
            }
        });
    }
    getSubscribedApplicationsByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationM;
            try {
                applicationM = yield this.applicationController.getSubscribedApplicationsByOrgID(orgID).toPromise();
                if (applicationM) {
                    return applicationM['application'];
                }
                else {
                    return [new UserApplication()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new UserApplication()];
            }
        });
    }
    getApplicationLogo(keyID) {
        let logo;
        let basePath = '/assets/images/application-logo/';
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
    getApplicationLogoWithoutName(keyID) {
        let logo;
        let basePath = '/assets/images/application-logo/';
        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                logo = basePath + 'admin-without-name.jpg';
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
    getApplicationLogoWithSideName(keyID) {
        let logo;
        let basePath = '/assets/images/application-logo/with-side-name';
        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                logo = basePath + 'tsc.png';
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
    getApplicationLogoFileName(keyID) {
        let fileName;
        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                fileName = 'admin';
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
        let redirectUrl;
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
ApplicationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationService, deps: [{ token: 'environment' }, { token: ApplicationController }, { token: i2.AuthenticationService }], target: i0.ɵɵFactoryTarget.Injectable });
ApplicationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }, { type: ApplicationController }, { type: i2.AuthenticationService }]; } });

/*
 * Public API Surface of application-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Application, ApplicationController, ApplicationKeyID, ApplicationService, ApplicationServiceComponent, ApplicationServiceModule, ApplicationServiceService, Role, RootObject, UserApplication };
//# sourceMappingURL=library-application-service.js.map
