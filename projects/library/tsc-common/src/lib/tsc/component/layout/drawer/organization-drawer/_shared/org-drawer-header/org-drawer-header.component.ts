import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { StorageService } from '@library/storage-service';
import { Facility, FacilityM, FacilityService } from '@library/facility-service';
import { OrgType, Organization, OrganizationM, OrganizationService } from '@library/organization-service';

@Component({
    selector: 'lib-org-drawer-header',
    templateUrl: './org-drawer-header.component.html',
    styleUrls: ['./org-drawer-header.component.scss']
})

export class OrgDrawerHeaderComponent implements OnInit {
    @Input()
    toggleOrgDrawer: any;

    @Output() toggleOrgDrawerGlobal: EventEmitter<boolean> = new EventEmitter(true);

    OrgType = OrgType;

    rootOrgID: any;
    currentOrgID: any;
    currentOrgType: any;

    organizationM = new Organization();
    facilityM = new Facility();

    constructor(
        private storageService: StorageService,
        private organizationService: OrganizationService,
        private facilityService: FacilityService,
    ) { }

    ngOnInit(): void {
        this.toggleOrgDrawerGlobal.emit(false);

        this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.currentOrgType = this.storageService.getStorage(['currentOrgType']);

        this.getOrgDetail();
    }

    getOrgDetail() {
        switch (this.currentOrgType) {
            case OrgType.ORGANIZATION:
            case OrgType.NETZERO_ADMIN:
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

    toggleOrgDrawFn() {
        this.toggleOrgDrawer = !this.toggleOrgDrawer;
        this.toggleOrgDrawerGlobal.emit(this.toggleOrgDrawer);
    }

}
