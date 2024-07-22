import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ActivityKeyMessages, ActivityKeyTabs } from '@carbon/enum/activity.enum';

@Component({
	selector: 'app-purchased-goods-services-tab',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

	activityKeyID: any;
	activeLink: string;
	tabs: any[] = [];
	pageTitle: string;
	pageSubTitle: string;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.setTabs();
	}

	setTabs() {
		this.activatedRoute?.data.subscribe(data => {
			this.activityKeyID = data.ActivityKeyID;
			this.tabs = ActivityKeyTabs[this.activityKeyID];
			this.pageTitle = ActivityKeyMessages[this.activityKeyID]['pageTitle'];
			this.pageSubTitle = ActivityKeyMessages[this.activityKeyID]['pageSubTitle'];
		});
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

		for (const tab of this.tabs) {
			if (currentPath.includes(tab.routerLink)) {
				this.activeLink = tab.routerLink;
				return; // Exit the loop once the active link is found
			}
		}

		// If no active link is found, set a default value
		this.activeLink = this.tabs[0].routerLink;
	}
}