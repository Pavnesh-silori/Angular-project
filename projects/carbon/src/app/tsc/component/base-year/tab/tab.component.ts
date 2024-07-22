import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { startWith } from 'rxjs/operators';
@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styles: [
    ]
})
export class TabComponent implements OnInit {

    baseYearRouteKey: string = 'ghg';
    tab: any = [
        {
            label: 'Setup',
            routerLink: '/carbon-setting/base-year',
            icon: ''
        },
        // {
        //     label: 'Structural changes',
        //     routerLink: 'structural-change/merger-acquisition/page',
        //     icon: ''
        // },
        {
            label: 'Recalculation',
            routerLink: '/carbon-setting/base-year',
            icon: ''
        }
    ];

    activeLink: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.url.pipe(startWith({})).subscribe((r) => {
            let route: string = '';
            let recalculateRoute: string = '';
            if (this.router.url.includes('sbti')) {
                route = "sbti";
                recalculateRoute = "sbti/recalculate";
            } else {
                route = "ghg";
                recalculateRoute = "ghg/recalculate";
            }

            this.tab[0]['routerLink'] = route;
            this.tab[1]['routerLink'] = recalculateRoute;
        });
    }

    ngAfterViewInit() {
        this.setRoute();
        
        this.router.events.pipe().subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setRoute();
            }
        });
    }

    setRoute() {
        let currentPath = window.location.pathname;

        for (let i = 0; i < this.tab.length; i++) {
            if (currentPath.includes(this.tab[i].routerLink)) {
                this.activeLink = this.tab[i].routerLink;
            }
        }
    }

}
