import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-tab-one',
    templateUrl: './tab.component.html',
    styles: []
})

export class TabComponent implements OnInit {
    activeLink: any;
    tabs: any[] = [
        {
            label: 'Details',
            routerLink: `details`,
        },
        {
            label: 'Emission Factor Databases',
            routerLink: `emission-factor-database`,
        },
        {
            label: 'Emission Records',
            routerLink: `emission-records`,
        },
        {
            label: 'Audit Trail',
            routerLink: `audit-trail`,
        },
    ];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // this.activatedRoute.paramMap.subscribe(params => {
        //   this.productID = params.get('id');
        // });
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
        const currentPath = window.location.pathname;
        const tab = this.tabs.find(t => currentPath.includes(t.routerLink));
        this.activeLink = tab ? tab.routerLink : this.tabs[0].routerLink;
    }

    changeRoute(tab: any) {
        this.activeLink = tab.routerLink;
        this.router.navigate([tab.routerLink], { relativeTo: this.activatedRoute });
    }

    close() {
        this.router.navigate(['/source/asset/page']);
    }

}
