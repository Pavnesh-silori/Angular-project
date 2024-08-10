import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeOptions } from '@rootProject/theme-options';

import { environment } from 'src/environments/environment';

import { faCog, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

// library
import { OrgType } from '@library/organization-service'; 
import { StorageService } from '@library/storage-service';
import { Facility, FacilityM, FacilityService } from '@library/facility-service';
import { Organization, OrganizationM, OrganizationService } from '@library/organization-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
// /library

@Component({
    selector: 'app-right',
    templateUrl: './right.component.html',
    styleUrls: ['./right.component.scss']
})

export class RightComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    faCog = faCog;
    faBell = faBell;
    faUserCircle = faUserCircle;
    environment = environment;

    OrgType = OrgType;

    rootOrgID: any;
    currentOrgID: any;
    currentOrgType: any;
    organizationM = new Organization();

    facilityM = new Facility();

    totalNotificationCount: number;

    selectedLayout: any;

    constructor(
        public globals: ThemeOptions,
        private router: Router,
        private storageService: StorageService,
        private organizationService: OrganizationService,
        private facilityService: FacilityService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.currentOrgType = this.storageService.getStorage(['currentOrgType']);

        this.getOrgDetail();

    }

    getOrgDetail() {
        switch (this.currentOrgType) {
            case OrgType.ORGANIZATION:
                this.getOrgByID();
                break;
            case OrgType.SITE:
                this.getFacilityByID();
                break;
            default:
                console.error('Exception in getOrgDetail');
        }
    }

    async getOrgByID() {
        this.organizationM = <OrganizationM>await this.organizationService.getOrganizationByID(this.currentOrgID);
    }

    async getFacilityByID() {
        this.facilityM = <FacilityM>await this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID);
    }

    notificationCount(event) {
        this.totalNotificationCount = event;
    }

    toggleDrawer() {
        this.globals.toggleDrawer = !this.globals.toggleDrawer;
    }

    toggleOrgDrawer() {
        this.globals.toggleOrgDrawer = !this.globals.toggleOrgDrawer;
    }

    toggleSettingDrawer() {
        this.globals.toggleSettingDrawer = !this.globals.toggleSettingDrawer;
    }

}