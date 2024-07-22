import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '@library/storage-service';
import { Layout, LayoutService } from '@library/layout-service';
import { OrganizationService } from '@library/organization-service';
import * as i0 from "@angular/core";
export declare class SuccessComponent implements OnInit {
    private activatedRoute;
    private router;
    private layoutService;
    private organizationService;
    private storageService;
    redirectUrl: string;
    noTimezone: string;
    layoutM: Layout[];
    timezone: string;
    constructor(activatedRoute: ActivatedRoute, router: Router, layoutService: LayoutService, organizationService: OrganizationService, storageService: StorageService);
    ngOnInit(): void;
    timeZoneCheck(): Promise<void>;
    getLayoutsByOrgID(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SuccessComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SuccessComponent, "app-success", never, {}, {}, never, never>;
}
