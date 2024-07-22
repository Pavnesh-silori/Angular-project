import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-tab',
	templateUrl: './tab.component.html',
	styles: [
	]
})
export class TabComponent implements OnInit {

	activeLink: any;

	faEllipsisV = faEllipsisV;

	tab: any = [
		{
			label: 'Products',
			routerLink: '/source/product-service/product/page',
		},
		{
			label: 'Services',
			routerLink: '/source/product-service/service/page',
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
