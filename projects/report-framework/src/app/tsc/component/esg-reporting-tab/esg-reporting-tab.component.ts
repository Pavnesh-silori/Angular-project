import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-esg-reporting-tab',
	templateUrl: './esg-reporting-tab.component.html',
	styles: []
})

export class EsgReportingTabComponent implements OnInit {

	activeLink: any;

	tab: any = [
		{
			label: 'Reporting Preference',
			routerLink: '/reporting/tab/preference',
		},
        {
			label: 'ESG Metrics',
			routerLink: '/reporting/tab/esg-metrics',
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
			if (currentPath.includes(this.tab[i].routerLink)) {
				this.activeLink = this.tab[i].routerLink;
				break;
			}
		}
	}

}
