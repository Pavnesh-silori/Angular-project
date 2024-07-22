import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styles: [
    ]
})

export class TabComponent implements OnInit {

    tab: any = [
        {
            label: 'Merger / Acquisition',
            routerLink: ['/carbon-setting/structural-change/merger-acquisition/page'],
        },
        {
            label: 'Divestments',
            routerLink: '/carbon-setting/structural-change/divestment/page',
        },
        {
            label: 'Insourcing',
            routerLink: '/carbon-setting/structural-change/insourcing/page',
        },
        {
            label: 'Outsourcing',
            routerLink: '/carbon-setting/structural-change/outsourcing/page',
        }
    ];

    showTabs: boolean = false;
    activeLink: any;
    rootOrgID: any;
    year: any;
    baseYearKeyID: string;

    ghgEmissionRes: ghgBaseYearEmissionViewM[];

    constructor(
        private router: Router,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
    }

    ngAfterViewInit() {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setRoute();
            }
        });

        this.setRoute();
    }

    setRoute() {
        let currentPath = window.location.pathname;

        for (let i = 0; i < this.tab.length; i++) {
            if (currentPath.includes(this.tab[i].routerLink)) {
                this.activeLink = this.tab[i].routerLink;
                break;
            }
        }
    }

}