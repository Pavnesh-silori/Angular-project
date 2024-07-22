import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { ShowFugitiveApproachM } from '@carbon/model/fugitive.model';

import { FugitiveConfiguratorService } from '@carbon/service/fugitive.configurator.service';

// tsc-library
import { StorageService } from '@library/storage-service';
// / tsc-library

@Component({
	selector: 'app-fugitive-refrigeration',
	templateUrl: './fugitive-refrigeration.component.html',
	styleUrls: ['./fugitive-refrigeration.component.scss']
})

export class FugitiveRefrigerationComponent implements OnInit {

	activeLink: any;
	tabs: any = [
		{
			label: 'Service myself',
			routerLink: 'service-myself/inventory',
			activeLink: 'service-myself',
			icon: 'engineering'
		},
		{
			label: 'Service by contractor',
			routerLink: 'service-by-contractor/purchase-acquisition',
			activeLink: 'service-by-contractor',
			icon: 'airport_shuttle'
		},
		{
			label: 'Screening',
			routerLink: 'screening/purchase-acquisition',
			activeLink: 'screening',
			icon: 'kitchen'
		}
	];

	currentOrgID: any;
	showScreeningApproach: boolean = true;
	showServiceByContractorApproach: boolean = false;
	showServiceMyselfApproach: boolean = false;

	fugitiveApproachM: ShowFugitiveApproachM;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private storageService: StorageService,
		private fugitiveConfiguratorService: FugitiveConfiguratorService
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.getActivityConfiguration();
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
			if (currentPath.includes(this.tabs[i].activeLink)) {
				this.activeLink = this.tabs[i].activeLink;
				break;
			}
		}
	}

	async getActivityConfiguration() {
		this.fugitiveApproachM = await this.fugitiveConfiguratorService.getConfiguredActivityConfiguration();

		this.showScreeningApproach = this.fugitiveApproachM['showScreeningApproach'];
		this.showServiceByContractorApproach = this.fugitiveApproachM['showServiceByContractorApproach'];
		this.showServiceMyselfApproach = this.fugitiveApproachM['showServiceMyselfApproach'];

	}

}
