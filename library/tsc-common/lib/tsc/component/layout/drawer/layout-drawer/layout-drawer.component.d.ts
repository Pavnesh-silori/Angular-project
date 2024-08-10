import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonEvent } from '../../../../event/common.event';
import { StorageService } from '@library/storage-service';
import { Layout, LayoutM, LayoutService } from '@library/layout-service';
import * as i0 from "@angular/core";
export declare class LayoutDrawerComponent implements OnInit {
    private router;
    private storageService;
    private layoutService;
    private commonEvent;
    COMMON_CONSTANT: {
        PRIVACY: string;
        TERMS: string;
        PRICING: string;
        SUPPORT_EMAIL: string;
        HYPHEN: string;
        NO_DATA_FOUND: string;
        NO_DATA: string;
        EMAIL_PATTERN: string;
        ZIPCODE_PATTERN: string;
        GST_NUMBER_PATTERN: string;
        ALLOWED_IMAGE_TYPES: string[];
        MAX_IMAGE_SIZE: number;
    };
    orgID: any;
    layoutM: Layout[];
    selectedLayout: any;
    constructor(router: Router, storageService: StorageService, layoutService: LayoutService, commonEvent: CommonEvent);
    ngOnInit(): void;
    getLayoutByOrgID(): Promise<void>;
    changeLayout(layout: LayoutM): void;
    viewLayout(layoutID: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDrawerComponent, "lib-layout-drawer", never, {}, {}, never, never>;
}
