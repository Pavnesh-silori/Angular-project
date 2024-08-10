import { Component, HostListener, OnInit } from '@angular/core';

import { ThemeOptions } from '@rootProject/theme-options'; 

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// library
import { ADMIN_RBAC_CONSTANT } from '@library/rbac-service';
import { ADMIN_FEATURE_CONSTANT } from '@library/feature-service';
import { StorageService } from '@library/storage-service';
// /library/

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.scss']
})

export class AdminSidebarComponent implements OnInit {

    ADMIN_RBAC_CONSTANT = ADMIN_RBAC_CONSTANT;
    ADMIN_FEATURE_CONSTANT = ADMIN_FEATURE_CONSTANT;

    public extraParameter: any;
    rootOrgID: any;

    @select('config') public config$: Observable<any>;
    public config: PerfectScrollbarConfigInterface = {};
    private newInnerWidth: number;
    private innerWidth: number;
    activeId = '';

    constructor(
        public globals: ThemeOptions,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
    ) { }

    ngOnInit() {
        setTimeout(() => {
            this.innerWidth = window.innerWidth;
            if (this.innerWidth < 1200) {
                this.globals.toggleSidebar = true;
            }
        });
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.extraParameter = this.activatedRoute.snapshot.firstChild.routeConfig.path;
    }

    toggleSidebar() {
        this.globals.toggleSidebar = !this.globals.toggleSidebar;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.newInnerWidth = event.target.innerWidth;

        if (this.newInnerWidth < 1200) {
            this.globals.toggleSidebar = true;
        } else {
            this.globals.toggleSidebar = false;
        }
    }
}
