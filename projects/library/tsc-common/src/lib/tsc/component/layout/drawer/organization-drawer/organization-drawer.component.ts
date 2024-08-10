import {
    Component,
    EventEmitter,
    Input, OnInit,
    Output,
    ViewChild
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { COMMON_CONSTANT } from '../../../../constant/common.constant';

import { SearchBarTwoComponent } from '../../../search/search-bar-two/search-bar-two.component';

import { Facility, FacilityM, FacilityService } from '@library/facility-service';
import { OrgSiteAccessM, Organization, OrganizationM, OrgStatus, OrganizationService, OrgSiteAccess, OrgType, OrgSiteAccessType } from '@library/organization-service';

import { StorageService } from '@library/storage-service';

@Component({
    selector: 'lib-organization-drawer',
    templateUrl: './organization-drawer.component.html',
    styleUrls: ['./organization-drawer.component.scss']
})
export class OrganizationDrawerComponent implements OnInit {
    @Input()
    toggleOrgDrawer: any;

    @Input()
    drawerAccessType: any;

    @Output() toggleOrgDrawerGlobal: EventEmitter<boolean> = new EventEmitter(true);

    COMMON_CONSTANT = COMMON_CONSTANT;

    userID: any;
    rootOrgID: any;
    currentOrgID: any;
    orgSwitchRedirect: string;

    showOrgAndFacility: boolean = false;

    OrgStatus = OrgStatus;
    OrgType = OrgType;
    OrgSiteAccessType = OrgSiteAccessType;

    organizationM = new Organization();
    facilityM = new Facility();

    orgSiteAccessM = new OrgSiteAccess();
    filteredOrgAccessM: OrgSiteAccess[] = [];

    @ViewChild('searchBar') searchBar: SearchBarTwoComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private organizationService: OrganizationService,
        private facilityService: FacilityService
    ) { }

    ngOnInit(): void {
        this.toggleOrgDrawerGlobal.emit(false);

        this.userID = this.storageService.getStorage('userID');
        this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        if (this.rootOrgID == this.currentOrgID) {
            this.getFacilityByID();
        } else {
            this.getOrgByID();
            this.getFacilityByID();
            this.showOrgAndFacility = true;
        }
        this.getOrgSiteWithUserAccess();

    }

    async getOrgByID() {
        this.organizationM = <OrganizationM>await this.organizationService.getOrganizationByID(this.rootOrgID);
    }

    async getFacilityByID() {
        this.facilityM = <FacilityM>await this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID);
    }

    async getOrgSiteWithUserAccess() {
        this.orgSiteAccessM = <OrgSiteAccessM>await this.organizationService.getOrgSiteWithUserAccess(this.userID);
        this.filteredOrgAccessM = [...this.orgSiteAccessM?.records];
    }

    toggleOrgDrawerFun() {
        this.toggleOrgDrawer = !this.toggleOrgDrawer;
        this.toggleOrgDrawerGlobal.emit(this.toggleOrgDrawer);
    }

    searchFn(value: string) {
        const searchTerm = value.trim().toLowerCase();

        if (searchTerm.length > 0) {
            this.filteredOrgAccessM = this.orgSiteAccessM?.records.filter(org =>
                org.name.trim().toLowerCase().includes(searchTerm)
            );
        } else {
            this.searchBar.searchClear();
            this.filteredOrgAccessM = [...this.orgSiteAccessM?.records];
        }
    }

    orgSwitch(orgID) {
        let currentRoute = this.activatedRoute;
        let orgSwitchRedirect: any = null;

        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;

            if (currentRoute.snapshot.data && currentRoute.snapshot.data.orgSwitchRedirect) {
                orgSwitchRedirect = currentRoute.snapshot.data.orgSwitchRedirect;
            }
        }

        this.organizationService.orgSwitch(orgID, orgSwitchRedirect);
    }

}
