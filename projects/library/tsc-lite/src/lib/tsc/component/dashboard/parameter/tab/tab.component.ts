import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'lib-tab',
    templateUrl: './tab.component.html',
    styles: [
    ]
})

export class ParameterTabComponent implements OnInit {

    orgID: any;
    activeLink: any;

    tab: any = [];

    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.tab = [
            {
                icon: 'stacked_line_chart',
                label: 'By Entity',
                routerLink: '/dashboard/all-parameters',
            },
            {
                icon: 'show_chart',
                label: 'By parameter',
                routerLink: '/dashboard/single-parameter',
            }
        ];

        this.setActiveLink();

        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setActiveLink();
            }
        });
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
