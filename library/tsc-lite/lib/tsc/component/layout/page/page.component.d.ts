import { ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { TscLiteButtonLabelEnum } from '../../../enum/button.enum';
import { StorageService } from '@library/storage-service';
import { CommonEvent, SearchBarOneComponent, ButtonLabelEnum } from '@library/tsc-common';
import { LayoutController } from '@library/layout-service';
import * as i0 from "@angular/core";
export declare class PageComponent implements OnInit {
    private router;
    private storageService;
    private layoutController;
    private commonEvent;
    private dialog;
    TABLE_CONSTANT: {
        TABLE_NO_DATA: string;
        DEFAULT_PAGE_SIZE: number;
        PAGE_SIZE_OPTION: number[];
    };
    TscLiteButtonLabelEnum: typeof TscLiteButtonLabelEnum;
    ButtonLabelEnum: typeof ButtonLabelEnum;
    faPlus: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faEllipsisV: import("@fortawesome/fontawesome-common-types").IconDefinition;
    orgID: any;
    displayedColumn: string[];
    resultLength: number;
    dataSource: any[];
    searchFlag: boolean;
    searchValue: string;
    searchArr: any[];
    sort: MatSort;
    paginator: MatPaginator;
    refreshBtn: ElementRef;
    searchBar: SearchBarOneComponent;
    constructor(router: Router, storageService: StorageService, layoutController: LayoutController, commonEvent: CommonEvent, dialog: MatDialog);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    searchFn(value: string): void;
    resetSearch(): void;
    navigateToViewPage(id: any): void;
    openCreateUpdateLayoutDialog(action: any, layoutID: any): void;
    openDeleteLayoutDialog(layoutID: any, layoutName: any): void;
    deleteLayout(layoutID: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageComponent, "app-page", never, {}, {}, never, never>;
}
