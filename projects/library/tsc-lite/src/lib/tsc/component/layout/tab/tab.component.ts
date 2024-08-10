import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// tsc-library
import { StorageService } from '@library/storage-service';
import { Layout, LayoutM, LayoutService } from '@library/layout-service';
// /tsc-library/

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styles: [
    ]
})
export class TabComponent implements OnInit {

    orgID: any;
    layoutID: any;
    activeLink: any;

    layoutM = new Layout();

    tab: any = [];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private layoutService: LayoutService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.paramMap.subscribe((params) => {
            this.layoutID = params.get('layoutID');

            this.getLayoutByID();

            this.tab = [
                {
                    icon: 'list',
                    label: 'List Representation',
                    routerLink: `/layout/${this.layoutID}/list`
                },
                {
                    icon: 'grid_view',
                    label: 'Chart Representation',
                    routerLink: `/layout/${this.layoutID}/chart`
                }
            ];

            this.setActiveLink();
        });

        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setActiveLink();
            }
        });
    }

    async getLayoutByID() {
        this.layoutM = <LayoutM>await this.layoutService.getLayoutByID(this.orgID, this.layoutID);
    }

    setActiveLink(): void {
        let currentPath = window.location.pathname;

        for (let i = 0; i < this.tab.length; i++) {
            if (currentPath.includes(this.tab[i].routerLink)) {
                this.activeLink = this.tab[i].routerLink;
                break;
            }
        }
    }

}
