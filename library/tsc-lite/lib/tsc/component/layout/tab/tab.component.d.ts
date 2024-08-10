import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '@library/storage-service';
import { Layout, LayoutService } from '@library/layout-service';
import * as i0 from "@angular/core";
export declare class TabComponent implements OnInit {
    private router;
    private activatedRoute;
    private storageService;
    private layoutService;
    orgID: any;
    layoutID: any;
    activeLink: any;
    layoutM: Layout;
    tab: any;
    constructor(router: Router, activatedRoute: ActivatedRoute, storageService: StorageService, layoutService: LayoutService);
    ngOnInit(): void;
    getLayoutByID(): Promise<void>;
    setActiveLink(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabComponent, "app-tab", never, {}, {}, never, never>;
}
