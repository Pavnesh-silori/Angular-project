import { Component, OnInit } from '@angular/core';

import {  NavigationEnd, Router } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styles: [
    ]
})

export class TabComponent implements OnInit {

    tab: any = [
        {
            label: 'Organization',
            routerLink: '/organization/view',
        },
        {
            label: 'Facilities',
            routerLink: '/facility/page',
        },
        {
            label: 'Subsidiaries / Joint Ventures',
            routerLink: '/subsidiary/page',
        },
        {
            label: 'Parent Organization',
            routerLink: '/parent-organization/page',
        }
    ];

    activeLink: any;

    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
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

@NgModule({
    declarations: [
        TabComponent
    ],
    imports: [
        CommonModule,
        TabRoutingModule,
        FontAwesomeModule,
        MatTabsModule,
    ]
})

export class TabModule { }
