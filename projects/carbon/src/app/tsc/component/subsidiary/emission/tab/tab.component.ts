import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styles: []
})
export class TabComponent implements OnInit {

    tab: any = [
        {
            routerLink: 'data/page',
            label: 'Emission Records',
            // title: 'View standard emission factor databases, their versions and values with auditable source.',
        },
        {
            routerLink: '/subsidiary/emission/request',
            label: 'Sent Requests',
            // title: 'View standard emission factor databases, their versions and values with auditable source.',
        },
        {
            routerLink: '/subsidiary/emission/response',
            label: 'Received Requests',
            // title: 'View Custom emission factor databases, their versions and values with auditable source.',
        }
    ];

    activeLink: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setRoute();
            }
        });

        this.activatedRoute.url
            .subscribe(() => this.setRoute());
    }

    setRoute() {
        let currentPath = window.location.pathname;

        if (currentPath.includes('request')) {
            this.activeLink = this.tab[1]['routerLink']
        } else if (currentPath.includes('response')) {
            this.activeLink = this.tab[2]['routerLink']
        } else {
            this.activeLink = this.tab[0]['routerLink']
        }
    }

}
