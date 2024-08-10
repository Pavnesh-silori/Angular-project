import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject } from '@angular/core';
import * as i1 from '@angular/common/http';
import { __awaiter } from 'tslib';
import * as i5 from '@library/facility-service';
import { Facility } from '@library/facility-service';
import * as i1$1 from '@angular/router';
import * as i2 from '@library/storage-service';
import * as i3 from '@library/application-service';

class OrganizationServiceService {
    constructor() { }
}
OrganizationServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OrganizationServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class OrganizationServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrganizationServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
OrganizationServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OrganizationServiceComponent, selector: "lib-organization-service", ngImport: i0, template: `
    <p>
      organization-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-organization-service',
                    template: `
    <p>
      organization-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class OrganizationServiceModule {
    static forRoot(environment) {
        return {
            ngModule: OrganizationServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
OrganizationServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OrganizationServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceModule, declarations: [OrganizationServiceComponent], exports: [OrganizationServiceComponent] });
OrganizationServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OrganizationServiceComponent
                    ],
                    imports: [],
                    exports: [
                        OrganizationServiceComponent
                    ]
                }]
        }] });

var OrgType;
(function (OrgType) {
    OrgType["SITE"] = "SITE";
    OrgType["ORGANIZATION"] = "ORG";
    OrgType["ORGANIZAION_GROUP"] = "ORG_GROUP";
})(OrgType || (OrgType = {}));
var OrgStatus;
(function (OrgStatus) {
    OrgStatus["ACTIVE_STATUS"] = "ACTIVE";
    OrgStatus["INACTIVE_STATUS"] = "INACTIVE";
    OrgStatus["SETUP_PENDING_STATUS"] = "SETUP_PENDING";
})(OrgStatus || (OrgStatus = {}));
var OrgSiteAccessType;
(function (OrgSiteAccessType) {
    OrgSiteAccessType["ORG"] = "ORG";
    OrgSiteAccessType["SITE"] = "SITE";
    OrgSiteAccessType["ORG_SITE"] = "ORG_SITE";
})(OrgSiteAccessType || (OrgSiteAccessType = {}));
var OrganizationStatus;
(function (OrganizationStatus) {
    OrganizationStatus["ACTIVE"] = "ACTIVE";
    OrganizationStatus["INACTIVE"] = "INACTIVE";
    OrganizationStatus["PENDING_SETUP"] = "PENDING_SETUP";
})(OrganizationStatus || (OrganizationStatus = {}));

class Organization {
}
class OrgAccess {
}
class OrgSiteAccess {
}

class OrganizationController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getOrganizationByID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}`);
    }
    getOrgByAccess(userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}users/${userID}/organizations-sites/access`);
    }
    getOrganizations(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/org-facility`);
    }
    getOrgSiteWithUserAccess(userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}users/${userID}/organizations-sites/access-new`);
    }
}
OrganizationController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
OrganizationController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class OrganizationService {
    constructor(router, storageService, applicationService, organizationController, facilityService) {
        this.router = router;
        this.storageService = storageService;
        this.applicationService = applicationService;
        this.organizationController = organizationController;
        this.facilityService = facilityService;
        this.organizationM = new Organization();
        this.facilityM = new Facility();
        this.redirectUrl = '';
    }
    orgSwitch(orgID, orgSwitchRedirect) {
        let applicationKeyID;
        let token;
        let userID;
        let queryParam;
        let currentUrl = '';
        applicationKeyID = this.storageService.getStorage('applicationKeyID');
        token = this.storageService.getStorage('token');
        userID = this.storageService.getStorage('userID');
        if (orgSwitchRedirect == 'NO') {
            currentUrl = '';
        }
        else {
            currentUrl = this.router.url;
        }
        queryParam = `login?token=${token}&userID=${userID}&orgID=${orgID}&redirectUrl=${currentUrl}`;
        window.location.href = this.applicationService.appRedirect(applicationKeyID) + queryParam;
    }
    getOrganizationByID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let organizationM;
            let organization = new Organization();
            try {
                organizationM = yield this.organizationController.getOrganizationByID(orgID).toPromise();
                if (organizationM) {
                    return organizationM;
                }
                else {
                    return organization;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return organization;
            }
        });
    }
    getOrgByAccess(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgAccessM;
            try {
                orgAccessM = yield this.organizationController.getOrgByAccess(userID).toPromise();
                return orgAccessM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
    getOrganizations(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgAccessM;
            try {
                orgAccessM = yield this.organizationController.getOrganizations(orgID).toPromise();
                return orgAccessM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
    getOrgSiteWithUserAccess(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgSiteAccessM;
            try {
                orgSiteAccessM = yield this.organizationController.getOrgSiteWithUserAccess(userID).toPromise();
                return orgSiteAccessM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
    getOrgStatus(status) {
        switch (status) {
            case OrganizationStatus.ACTIVE:
                return 'Active';
            case OrganizationStatus.INACTIVE:
                return 'Inactive';
            case OrganizationStatus.PENDING_SETUP:
                return 'Pending setup';
            default:
                console.log('Invalid organization status');
        }
    }
    getOrgTimezone() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentOrgType = this.storageService.getStorage('currentOrgType');
            this.rootOrgID = this.storageService.getStorage('rootOrgID');
            this.currentOrgID = this.storageService.getStorage('currentOrgID');
            let timezone = null;
            if (this.currentOrgType == OrgType.ORGANIZATION) {
                this.organizationM = (yield this.getOrganizationByID(this.currentOrgID));
                if (this.organizationM.timeZoneName) {
                    timezone = this.organizationM.timeZoneName;
                }
            }
            else if (this.currentOrgType == OrgType.SITE) {
                this.facilityM = (yield this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID));
                if (this.facilityM.timeZoneName) {
                    timezone = this.facilityM.timeZoneName;
                }
                else {
                    this.organizationM = (yield this.getOrganizationByID(this.rootOrgID));
                    if (this.organizationM.timeZoneName) {
                        timezone = this.organizationM.timeZoneName;
                    }
                }
            }
            return timezone;
        });
    }
}
OrganizationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationService, deps: [{ token: i1$1.Router }, { token: i2.StorageService }, { token: i3.ApplicationService }, { token: OrganizationController }, { token: i5.FacilityService }], target: i0.ɵɵFactoryTarget.Injectable });
OrganizationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i2.StorageService }, { type: i3.ApplicationService }, { type: OrganizationController }, { type: i5.FacilityService }]; } });

class OrgTypeGuard {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate(route, state) {
        let currentOrgType;
        let orgTypeAccess;
        currentOrgType = this.storageService.getStorage('currentOrgType');
        orgTypeAccess = route.data.orgTypeAccess;
        if (currentOrgType == OrgType.SITE && (orgTypeAccess == OrgSiteAccessType.SITE || orgTypeAccess == OrgSiteAccessType.ORG_SITE)) {
            return true;
        }
        else if (currentOrgType == OrgType.ORGANIZATION && (orgTypeAccess == OrgSiteAccessType.ORG || orgTypeAccess == OrgSiteAccessType.ORG_SITE)) {
            return true;
        }
        else {
            return this.router.navigate(['/']);
            return false;
        }
    }
}
OrgTypeGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgTypeGuard, deps: [{ token: i1$1.Router }, { token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
OrgTypeGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgTypeGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgTypeGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i2.StorageService }]; } });

/*
 * Public API Surface of organization-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OrgAccess, OrgSiteAccess, OrgSiteAccessType, OrgStatus, OrgType, OrgTypeGuard, Organization, OrganizationController, OrganizationService, OrganizationServiceComponent, OrganizationServiceModule, OrganizationServiceService, OrganizationStatus };
//# sourceMappingURL=library-organization-service.js.map
