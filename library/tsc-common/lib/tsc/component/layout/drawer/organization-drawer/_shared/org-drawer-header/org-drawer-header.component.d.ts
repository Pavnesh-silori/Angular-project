import { EventEmitter, OnInit } from '@angular/core';
import { StorageService } from '@library/storage-service';
import { Facility, FacilityService } from '@library/facility-service';
import { OrgType, Organization, OrganizationService } from '@library/organization-service';
import * as i0 from "@angular/core";
export declare class OrgDrawerHeaderComponent implements OnInit {
    private storageService;
    private organizationService;
    private facilityService;
    toggleOrgDrawer: any;
    toggleOrgDrawerGlobal: EventEmitter<boolean>;
    OrgType: typeof OrgType;
    rootOrgID: any;
    currentOrgID: any;
    currentOrgType: any;
    organizationM: Organization;
    facilityM: Facility;
    constructor(storageService: StorageService, organizationService: OrganizationService, facilityService: FacilityService);
    ngOnInit(): void;
    getOrgDetail(): void;
    getOrgByID(): Promise<void>;
    getFacilityByID(): Promise<void>;
    toggleOrgDrawFn(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrgDrawerHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrgDrawerHeaderComponent, "lib-org-drawer-header", never, { "toggleOrgDrawer": "toggleOrgDrawer"; }, { "toggleOrgDrawerGlobal": "toggleOrgDrawerGlobal"; }, never, never>;
}
