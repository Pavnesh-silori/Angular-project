import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

import { NgbAccordion, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ApplicationService, ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    providers: [NgbAccordionConfig],
})

export class SideNavComponent implements OnInit {

    @Input()
    sidebarTypeInp: 'RIGHT' | 'LEFT';

    @Input()
    sidebarArrayInp: any;

    @Input()
    sidebarHeaderLabelInp: string;

    @Input()
    headerLogo: boolean;

    @Input()
    footerLogo: boolean;

    @Input()
    toggleSidebar: boolean;

    @Input()
    toggleSettingDrawer: boolean;

    @Input()
    landingPageRouteInp: string;

    @Output()
    menuOutput: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    toggleSidebarGlobal: EventEmitter<boolean> = new EventEmitter(true);

    @Output()
    toggleSettingDrawerGlobal: EventEmitter<boolean> = new EventEmitter(true);

    sidebarType: 'RIGHT' | 'LEFT';
    applicationKeyID: string;
    sidebarArray: any[] = [];
    activeID: string[] = [];

    titleCharLength: number = 25;
    menuItemCharLength: number = 20;

    @select('config') public config$: Observable<any>;

    @ViewChild(NgbAccordion) accordion: NgbAccordion;

    constructor(
        private router: Router,
        private storageService: StorageService,
        public applicationService: ApplicationService,
    ) { }

    ngOnInit(): void {
        this.applicationKeyID = this.storageService.getStorage(['applicationKeyID']);

        this.sidebarType = this.sidebarTypeInp;
        this.sidebarArray = this.sidebarArrayInp;

        this.openAccordion();

        if (this.sidebarType == 'LEFT' && !((this.router.url as string).includes('dashboard') && this.applicationKeyID == ApplicationKeyID.NETZERO_KEY_ID)) {
            this.openCurrentActiveRouteMenu();
        }

        // this.handleActiveTabOnRefresh();  /* TODO: SOMYA AGRAWAL, added to handle selected tab on refresh, not working properly */
    }

    openCurrentActiveRouteMenu() {
        let currentSideBar = null;
        (this.sidebarArray as Array<any>).forEach(menu => {
            if (menu?.mainRoute) {
                (menu.mainRoute as Array<string>).forEach(route => {
                    if ((this.router.url as string).includes(route)) {
                        currentSideBar = menu;
                    }
                });

                if (currentSideBar != null) {
                    this.sidebarArray = [currentSideBar];
                    this.onMenuClick(currentSideBar)
                }
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.sidebarArrayInp && this.sidebarArrayInp) {
            this.onMenuClick(this.sidebarArrayInp);
        }
    }

    onMenuClick(menu) {
        if (menu?.route) {
            this.navigate(menu);
            return;
        }

        if (this.sidebarType == 'LEFT') {
            if (menu.dualMenu) {
                this.sidebarArray = menu.dualMenu;

                let shouldNavigateToDefault: boolean = true;
                if (menu?.mainRoute) {
                    (menu.mainRoute as Array<string>).forEach(route => {
                        if ((this.router.url as string).includes(route)) {
                            shouldNavigateToDefault = false;
                        }
                    });
                }

                if (shouldNavigateToDefault) {
                    const defaultMenu = this.findDefaultLandingPage(menu.dualMenu);
                    if (defaultMenu) {
                        this.navigate(defaultMenu);
                    }
                }

                this.openAccordion();
            }
        } else {
            const clonedMenu = { ...menu };
            this.menuOutput.emit(clonedMenu);
            this.toggleSettingDrawerFun();
        }
    }

    findDefaultLandingPage(menuArray) {
        for (const menu of menuArray) {
            if (menu.isDefaultLandingPage) {
                return menu;
            }

            if (menu.children) {
                const result = this.findDefaultLandingPage(menu.children);
                if (result) {
                    return result;
                }
            }
        }

        return null;
    }

    backFunc(menu) {
        if (menu?.backMenuItem) {
            this.sidebarArray = menu.backMenuItem;
        }

        if (menu?.navigateToLandingPage) {
            const landingPageItem = menu?.backMenuItem.find(item => item.isLandingPage);
            if (landingPageItem) {
                this.navigate(landingPageItem);
                return;
            }
        }

        this.openAccordion();
    }

    openAccordion() {
        const openAccordionItems = this.sidebarArray?.filter(item => item?.type == 'ACCORDION' && item?.defaultState == 'OPEN');
        this.activeID = openAccordionItems?.map(item => item?.label);
    }

    changeAccordionState(menu) {
        this.accordion.collapseAll();
        this.activeID = menu.label;
        this.accordion.expand(menu.label);

        if (menu.children) {
            menu.children.forEach((child) => {
                this.accordion.expand(child.label);
            });
        }
    }

    handleActiveTabOnRefresh() {
        this.sidebarArray.forEach(menu => {
            if (menu.dualMenu) {
                menu.dualMenu.forEach(dualMenuItem => {
                    if (dualMenuItem.children) {
                        dualMenuItem.children.forEach(child => {
                            if (child?.route == window.location.pathname) {
                                child.active = true;
                            }
                        });
                    }
                });
            }
        });
    }

    isActiveRoute(menu): boolean {
        if (!menu) {
            return false;
        }

        if (menu.activeLink) {
            for (const parentLink of menu.activeLink) {
                if (this.router.isActive(parentLink, false)) {
                    return true;
                }
            }
        }

        return false;
    }

    navigate(menu) {
        this.router.navigate([
            menu?.route,
            { outlets: this.getOutlets(menu) }],
            { queryParams: this.getQueryParams(menu) }
        );
    }

    getOutlets(menu) {
        let outlets: any = {};
        if (menu?.outlet) {
            menu?.outlet.forEach(outlet => {
                outlets[outlet['outlet']] = outlet['route'];
            });
        }
        return outlets;
    }

    getQueryParams(menu) {
        let params: any = {};
        if (menu?.queryParam) {
            menu?.queryParam.forEach(param => {
                params[param['key']] = param['param'];
            });
        }
        return params;
    }

    navigateToLandingPage() {
        this.router.navigate([this.landingPageRouteInp]);
    }

    toggleSidebarFun() {
        this.toggleSidebar = !this.toggleSidebar;
        this.toggleSidebarGlobal.emit(this.toggleSidebar);
    }

    toggleSettingDrawerFun() {
        this.toggleSettingDrawer = false;
        this.toggleSettingDrawerGlobal.emit(this.toggleSettingDrawer);
    }

}