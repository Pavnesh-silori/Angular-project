import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ReportPreference } from '@report-framework/model/reporting-preference.model';

import { ReportingPreferenceController } from '@report-framework/controller/reporting-preference.controller';

import { ActivePagePillService } from '@carbon/service/active-page-pill.service';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
	selector: 'app-tab',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

	rootOrgID: any;

	faPlus = faPlus;

	activeLink: any;

	preference = new ReportPreference();
	preferenceFlag: boolean = true;

	reportType = 'ongoing-reports';
	tab: any = [
		{
			reportType: 'ongoing-reports',
			label: 'Ongoing Reports',
			routerLink: '/reporting-framework/tab/tracking',
			pill: {
				type: 'ongoing-report',
				initFolderName: 'Ongoing Reports',
				initFolderRoute: '/reporting-framework/tab/tracking'
			}
		},
		{
			reportType: 'report-history',
			label: 'Report History',
			routerLink: '/reporting-framework/tab/history/page',
			pill: {
				type: 'report-history',
				initFolderName: 'Report History',
				initFolderRoute: '/reporting-framework/history/page'
			}
		}
	];

	pill = (index) => this.tab[index]['pill'];

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private reportingPreferenceController: ReportingPreferenceController,
		private storageService: StorageService,
		private activePagePillService: ActivePagePillService,
	) {
	}

	ngOnInit(): void {
		this.rootOrgID = parseInt(this.storageService.getStorage('rootOrgID'));
		this.getReportFrameworkPrefByOrgID();
		
		this.router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
			  this.setRoute();
			}
		  });
		this.setRoute();
	}

	ngAfterViewInit() {

		this.activatedRoute.params.subscribe(() => {
			this.activePagePillService.ongoingReportBSubject = null;
		})
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

	getReportFrameworkPrefByOrgID() {
		this.reportingPreferenceController.getReportingPreferenceByOrgID(this.rootOrgID).subscribe((res: ReportPreference) => {
			this.preference = res;
			if (this.preference.reportingPreference.length > 0) {
				this.preferenceFlag = true;
			} else {
				this.preferenceFlag = false;
			}
		}, error => {
			console.log('error in getReportFrameworkPrefByOrgID report() -', error);
		});
	}
}
