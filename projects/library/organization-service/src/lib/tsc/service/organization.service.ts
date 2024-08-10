import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { OrgType, OrganizationStatus } from "../enum/organization.enum";

import { OrgAccessM, OrgSiteAccessM, Organization, OrganizationM } from "../model/organization.model";

import { OrganizationController } from "../controller/organization.controller";

import { StorageService } from "@library/storage-service";
import { ApplicationService } from "@library/application-service";
import { Facility, FacilityM, FacilityService } from "@library/facility-service";

@Injectable({
    providedIn: 'root'
})

export class OrganizationService {

    OrgType: OrgType;

    currentOrgType: any;
    rootOrgID: any;
    currentOrgID: any;

    organizationM = new Organization();
    facilityM = new Facility();

    redirectUrl: string = '';

    constructor(
        private router: Router,
        private storageService: StorageService,
        private applicationService: ApplicationService,
        private organizationController: OrganizationController,
        private facilityService: FacilityService,
    ) { }

    orgSwitch(orgID, orgSwitchRedirect: string) {
        let applicationKeyID: string;
        let token: string;
        let userID: any;
        let queryParam: string;
        let currentUrl: string = '';


        applicationKeyID = this.storageService.getStorage('applicationKeyID');
        token = this.storageService.getStorage('token');
        userID = this.storageService.getStorage('userID');

        if (orgSwitchRedirect == 'NO') {
            currentUrl = '';
        } else {
            currentUrl = this.router.url;
        }

        queryParam = `login?token=${token}&userID=${userID}&orgID=${orgID}&redirectUrl=${currentUrl}`;
        window.location.href = this.applicationService.appRedirect(applicationKeyID) + queryParam;
    }

    async getOrganizationByID(orgID: number): Promise<OrganizationM> {
        let organizationM: OrganizationM;
        let organization = new Organization();

        try {
            organizationM = await this.organizationController.getOrganizationByID(orgID).toPromise();

            if (organizationM) {
                return organizationM;
            } else {
                return organization;
            }
        } catch (error) {
            console.error('Error -', error);
            return organization;
        }
    }

    async getOrgByAccess(userID: number): Promise<OrgAccessM[]> {
        let orgAccessM: OrgAccessM[];
        try {
            orgAccessM = await this.organizationController.getOrgByAccess(userID).toPromise();
            return orgAccessM;
        } catch (error) {
            console.error('Error -', error);
        }
    }

    async getOrganizations(orgID): Promise<OrgAccessM[]> {
        let orgAccessM: OrgAccessM[];
        try {
            orgAccessM = await this.organizationController.getOrganizations(orgID).toPromise();
            return orgAccessM;
        } catch (error) {
            console.error('Error -', error);
        }
    }

    async getOrganizationsByType(orgID, type: string): Promise<OrgAccessM[]> {
        let orgAccessM: OrgAccessM[];
        try {
            orgAccessM = await this.organizationController.getOrganizationsByType(orgID, type).toPromise();
            return orgAccessM;
        } catch (error) {
            console.error('Error in getOrganizationsByType -', error);
        }
    }

    async getOrgSiteWithUserAccess(userID: number): Promise<OrgSiteAccessM> {
        let orgSiteAccessM: OrgSiteAccessM;
        try {
            orgSiteAccessM = await this.organizationController.getOrgSiteWithUserAccess(userID).toPromise();
            return orgSiteAccessM;
        } catch (error) {
            console.error('Error -', error);
        }
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

    async getOrgTimezone(): Promise<string> {
        this.currentOrgType = this.storageService.getStorage('currentOrgType');
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        let timezone: string = null;

        if (this.currentOrgType == OrgType.ORGANIZATION) {
            this.organizationM = <OrganizationM>await this.getOrganizationByID(this.currentOrgID);

            if (this.organizationM.timeZoneName) {
                timezone = this.organizationM.timeZoneName;
            }
        } else if (this.currentOrgType == OrgType.SITE) {
            this.facilityM = <FacilityM>await this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID);

            if (this.facilityM.timeZoneName) {
                timezone = this.facilityM.timeZoneName;
            } else {
                this.organizationM = <OrganizationM>await this.getOrganizationByID(this.rootOrgID);

                if (this.organizationM.timeZoneName) {
                    timezone = this.organizationM.timeZoneName;
                }
            }
        }
        return timezone;
    }

}