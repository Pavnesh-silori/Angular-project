import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject } from '@angular/core';
import * as i1 from '@library/storage-service';

class AuthenticationServiceService {
    constructor() { }
}
AuthenticationServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AuthenticationServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthenticationServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AuthenticationServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AuthenticationServiceComponent, selector: "lib-authentication-service", ngImport: i0, template: `
    <p>
      authentication-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-authentication-service',
                    template: `
    <p>
      authentication-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class AuthenticationServiceModule {
    static forRoot(environment) {
        return {
            ngModule: AuthenticationServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
AuthenticationServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthenticationServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceModule, declarations: [AuthenticationServiceComponent], exports: [AuthenticationServiceComponent] });
AuthenticationServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AuthenticationServiceComponent
                    ],
                    imports: [],
                    exports: [
                        AuthenticationServiceComponent
                    ]
                }]
        }] });

class AuthenticationService {
    constructor(environment, storageService) {
        this.environment = environment;
        this.storageService = storageService;
        this.ACCOUNT_KEY_ID = "ACCOUNT";
    }
    isLoggedIn() {
        // return this.getStorage('token');
        let userID = '';
        // let netZeroA: string = '';
        // let primaryOrgID: string = '';
        // let defaultApp: string = '';
        // let currentApp: string = '';
        // let currentOrgID: string = '';
        let token = '';
        // let resourcePermissions: string = '';
        // let currentOrgType: string = '';
        userID = this.storageService.getStorage('userID');
        // netZeroA = this.getStorage('netZeroA');
        // primaryOrgID = this.getStorage('primaryOrgID');
        // defaultApp = this.getStorage('defaultApp');
        // currentApp = this.getStorage('currentApp');
        // currentOrgID = this.getStorage('currentOrgID');
        token = this.storageService.getStorage('token');
        // resourcePermissions = this.getStorage('resourcePermissions');
        // currentOrgType = this.getStorage('currentOrgType');
        // console.log('userID', userID);
        // console.log('netZeroA', netZeroA);
        // console.log('primaryOrgID', primaryOrgID);
        // console.log('defaultApp', defaultApp);
        // console.log('currentApp', currentApp);
        // console.log('currentOrgID', currentOrgID);
        // console.log('token', token);
        // console.log('resourcePermissions', resourcePermissions);
        // console.log('currentOrgType', currentOrgType);
        // let userIDLength = userID.length;
        // let netZeroALength = netZeroA.length;
        // let primaryOrgIDLength = primaryOrgID.length;
        // let defaultAppLength = defaultApp.length;
        // let currentAppLength = currentApp.length;
        // let currentOrgIDLength = currentOrgID.length;
        // let tokenLength = token.length;
        // let permissionsLength = resourcePermissions.length;
        // let currentOrgTypeLength = currentOrgType.length;
        if (userID == 'undefined' ||
            // netZeroA == 'undefined' ||
            // primaryOrgID == 'undefined' ||
            // defaultApp == 'undefined' ||
            // currentApp == 'undefined' ||
            // currentOrgID == 'undefined' ||
            token == 'undefined' ||
            // resourcePermissions == 'undefined' ||
            // currentOrgType == 'undefined' ||
            userID == 'null' ||
            // netZeroA == 'null' ||
            // primaryOrgID == 'null' ||
            // defaultApp == 'null' ||
            // currentApp == 'null' ||
            // currentOrgID == 'null' ||
            token == 'null' ||
            // resourcePermissions == 'null' ||
            // currentOrgType == 'null' ||
            userID == null ||
            // netZeroA == null ||
            // primaryOrgID == null ||
            // defaultApp == null ||
            // currentApp == null ||
            // currentOrgID == null ||
            token == null ||
            // resourcePermissions == null ||
            // currentOrgType == null ||
            userID == '' ||
            // netZeroA == '' ||
            // primaryOrgID == '' ||
            // defaultApp == '' ||
            // currentApp == '' ||
            // currentOrgID == '' ||
            token == ''
        // resourcePermissions == '' ||
        // currentOrgType == ''
        // userIDLength == 0 ||
        // netZeroALength == 0 ||
        // primaryOrgIDLength == 0 ||
        // defaultAppLength == 0 ||
        // currentAppLength == 0 ||
        // currentOrgIDLength == 0 ||
        // tokenLength == 0 ||
        // permissionsLength == 0 ||
        // currentOrgTypeLength == 0 
        ) {
            return false;
        }
        else {
            return true;
        }
    }
    logout(redirectUrl, pageUrl, action, applicationKeyID = '') {
        localStorage.clear();
        sessionStorage.clear();
        if (applicationKeyID != this.ACCOUNT_KEY_ID && action == 'interceptor') {
            window.location.href = `${this.environment.ACCOUNT_URL}login?redirectUrl=${redirectUrl}&pageUrl=${pageUrl}`;
        }
        else {
            window.location.href = `${this.environment.ACCOUNT_URL}login?redirectUrl=${redirectUrl}&pageUrl=${pageUrl}&action=${action}`;
        }
    }
}
AuthenticationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationService, deps: [{ token: 'environment' }, { token: i1.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }, { type: i1.StorageService }]; } });

class AuthGuard {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            let appURL;
            // this.activatedRoute.data.subscribe(data => {
            //     console.log('data -', data);
            //     appURL = data.appURL;
            // });
            appURL = route.data.appURL;
            this.authenticationService.logout(appURL + 'login', state.url, '');
            return false;
        }
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, deps: [{ token: AuthenticationService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AuthenticationService }]; } });

/*
 * Public API Surface of authentication-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthGuard, AuthenticationService, AuthenticationServiceComponent, AuthenticationServiceModule, AuthenticationServiceService };
//# sourceMappingURL=library-authentication-service.js.map
