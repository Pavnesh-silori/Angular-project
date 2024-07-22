import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-screening',
    templateUrl: './screening.component.html',
    styleUrls: ['./screening.component.scss']
})
export class ScreeningComponent implements OnInit {

    activeLink: any;
    tabs: any = [
        {
            label: 'Purchase and acquisition',
            routerLink: 'purchase-acquisition',
        },
        {
            label: 'Sales and disbursements',
            routerLink: 'sales-disbursement',
        }
    ];

    ngOnInit(): void {
    }

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

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

        for (let i = 0; i < this.tabs.length; i++) {
			if (currentPath.includes(this.tabs[i].routerLink)) {
				this.activeLink = this.tabs[i].routerLink;
				break;
			}
		}
    }

}
