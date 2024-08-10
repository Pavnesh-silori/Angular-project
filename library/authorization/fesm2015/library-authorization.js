import * as i0 from '@angular/core';
import { Injectable, Inject, Component, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
import * as i4 from '@library/application-service';
import { ApplicationKeyID } from '@library/application-service';
import { OrgStatus } from '@library/organization-service';
import * as i1$1 from '@angular/router';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import * as i3 from '@library/storage-service';
import * as i5 from '@library/authentication-service';
import * as i6 from '@library/subscription-service';
import * as i7 from '@library/rbac-service';
import * as i8 from '@library/feature-service';

class AuthorizationController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getAuthorizationByApp(applicationKeyID, orgID) {
        let headers = new HttpHeaders();
        headers = headers.set('applicationKeyID', applicationKeyID);
        let params = new HttpParams();
        params = params.append('orgID', orgID);
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}authorization`, { params: params, headers: headers });
    }
}
AuthorizationController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
AuthorizationController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class AuthorizationService {
    constructor(authorizationController) {
        this.authorizationController = authorizationController;
    }
    getAuthorizationByApp(applicationKeyID, orgID = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let authorizationM;
            try {
                authorizationM = yield this.authorizationController.getAuthorizationByApp(applicationKeyID, orgID).toPromise();
                return authorizationM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
}
AuthorizationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationService, deps: [{ token: AuthorizationController }], target: i0.ɵɵFactoryTarget.Injectable });
AuthorizationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AuthorizationController }]; } });

// /tsc-library/
class AuthorizationComponent {
    constructor(router, activatedRoute, authorizationService, storageService, applicationService, authenticationService, subscriptionService, rbacService, featureService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authorizationService = authorizationService;
        this.storageService = storageService;
        this.applicationService = applicationService;
        this.authenticationService = authenticationService;
        this.subscriptionService = subscriptionService;
        this.rbacService = rbacService;
        this.featureService = featureService;
        this.redirectUrl = '';
        this.token = '';
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.applicationKeyID = data.applicationKeyID;
        });
        this.activatedRoute.queryParams.subscribe(queryParam => {
            this.token = queryParam.token;
            this.userID = queryParam.userID;
            if (queryParam.redirectUrl) {
                this.redirectUrl = queryParam.redirectUrl;
            }
            if (queryParam.orgID) {
                this.orgID = queryParam.orgID;
            }
            this.storageService.setStorage('token', this.token);
            this.storageService.setStorage('userID', this.userID);
            this.storageService.setStorage('applicationKeyID', this.applicationKeyID);
            this.getAuthorizationByApp(this.applicationKeyID, this.orgID);
        });
    }
    getAuthorizationByApp(applicationKeyID, orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let authorizationM;
            let permissionResult = null;
            let featureResult = null;
            authorizationM = (yield this.authorizationService.getAuthorizationByApp(applicationKeyID, orgID));
            this.storageService.setStorage('currentOrgID', authorizationM.orgID);
            this.storageService.setStorage('rootOrgID', authorizationM.rootOrgID);
            this.storageService.setStorage('currentOrgType', authorizationM.orgType);
            this.storageService.setStorage('userUID', authorizationM.userUID);
            this.storageService.setStorage('applicationID', authorizationM.applicationID);
            this.storageService.setStorage('enableModule', authorizationM.enableModule);
            // permissionResult = <any>await this.rbacService.getResourcePermissionByOrgIDAndUserID(authorizationM.rootOrgID, authorizationM.userID);
            // this.storageService.setStorage(ApplicationResourcePermission.ADMIN_RESOURCE_PERMISSION, JSON.stringify(permissionResult));
            // featureResult = <any>await this.featureService.getFeatureByOrgID(authorizationM.rootOrgID);
            // this.storageService.setStorage(ApplicationFeature.ADMIN_FEATURE, JSON.stringify(featureResult));
            // if (permissionResult && featureResult) {
            if (authorizationM.orgStatus == OrgStatus.SETUP_PENDING_STATUS) {
                if (this.applicationKeyID == ApplicationKeyID.ADMIN_KEY_ID) {
                    this.router.navigate(['/organization', authorizationM.orgID, 'setup'], { queryParams: { subscriptionStatus: authorizationM.subscriptionStatus } });
                }
                else {
                    this.storageService.clearStorage();
                    window.location.href = `${this.applicationService.appRedirect(ApplicationKeyID.ADMIN_KEY_ID)}login?token=${this.token}&userID=${this.userID}&orgID=${authorizationM.orgID}`;
                }
            }
            else if (authorizationM.subscriptionStatus != 'ACTIVE') {
                if (this.applicationKeyID == ApplicationKeyID.ADMIN_KEY_ID) {
                    this.router.navigate([`/subscription-new/active`]);
                }
                else {
                    this.storageService.clearStorage();
                    window.location.href = `${this.applicationService.appRedirect(ApplicationKeyID.ADMIN_KEY_ID)}login?token=${this.token}&userID=${this.userID}&orgID=${authorizationM.orgID}`;
                }
            }
            else if (authorizationM.subscriptionStatus == 'ACTIVE') {
                this.router.navigate(['/authorization/success'], { queryParams: { redirectUrl: this.redirectUrl } });
            }
            else {
                this.authenticationService.logout('', '', '');
            }
            // } else {
            //     console.error('Error in permissionResult or featureResult');
            //     console.log('permissionResult', permissionResult);
            //     console.log('permissionResult', permissionResult);
            //     this.authenticationService.logout('', '', '');
            // }
        });
    }
}
AuthorizationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationComponent, deps: [{ token: i1$1.Router }, { token: i1$1.ActivatedRoute }, { token: AuthorizationService }, { token: i3.StorageService }, { token: i4.ApplicationService }, { token: i5.AuthenticationService }, { token: i6.SubscriptionService }, { token: i7.RBACService }, { token: i8.FeatureService }], target: i0.ɵɵFactoryTarget.Component });
AuthorizationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AuthorizationComponent, selector: "lib-authorization", ngImport: i0, template: "<div class=\"d-flex h-100 justify-content-center align-items-center\">\n    <div class=\"text-center fs-4\"><img class=\"appAuthImg\"\n            src=\"assets/images/application-logo/tsc-with-name.png\" />\n        <br />\n        <br />\n        <span class=\"spinner-border spinner-border-sm text-success\"></span> ..\n    </div>\n</div>", styles: [".appAuthImg{height:55px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-authorization',
                    templateUrl: './authorization.component.html',
                    styleUrls: ['./authorization.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }, { type: AuthorizationService }, { type: i3.StorageService }, { type: i4.ApplicationService }, { type: i5.AuthenticationService }, { type: i6.SubscriptionService }, { type: i7.RBACService }, { type: i8.FeatureService }]; } });

class AuthorizationModule {
    static forRoot(environment) {
        return {
            ngModule: AuthorizationModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
AuthorizationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthorizationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationModule, declarations: [AuthorizationComponent], exports: [AuthorizationComponent] });
AuthorizationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AuthorizationComponent
                    ],
                    imports: [],
                    exports: [
                        AuthorizationComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of authorization
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthorizationComponent, AuthorizationController, AuthorizationModule, AuthorizationService };
//# sourceMappingURL=library-authorization.js.map
