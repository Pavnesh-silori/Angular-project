import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-product-manufacturer-tab',
	templateUrl: './product-manufacturer-tab.component.html',
	styleUrls: ['./product-manufacturer-tab.component.scss']
})
export class ProductManufacturerTabComponent implements OnInit {

	activeLink: any;
	tabs: any = [
		{
			label: 'Inventory',
			routerLink: 'inventory',
		},
		{
			label: 'Purchase and acquisition',
			routerLink: 'purchase-acquisition',
		},
		{
			label: 'Sales, disposal and equipment charge',
			routerLink: 'sales-disbursement',
		}
	];

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

		for (let i = 0; i < this.tabs.length; i++) {
			if (currentPath.includes(this.tabs[i].routerLink)) {
				this.activeLink = this.tabs[i].routerLink;
				break;
			}
		}
	}

}
