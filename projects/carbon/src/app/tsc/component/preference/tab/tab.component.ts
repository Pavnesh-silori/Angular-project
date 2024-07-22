import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styles: [
    ]
})
export class TabComponent implements OnInit {

    activeLink: any;

    tab: any = [
        {
            label: 'Calculation Preferences',
            routerLink: '/carbon-setting/preference/calculation',
        },
        {
            label: 'Accounting Preference',
            routerLink: '/carbon-setting/preference/accounting',
        }
    ];

    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
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
            if (currentPath == this.tab[i].routerLink) {
                this.activeLink = this.tab[i].routerLink;
                break;
            }
        }
    }

}
