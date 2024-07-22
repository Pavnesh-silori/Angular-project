import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IntervalStatus } from '@report-framework/enum/status.enum';

import { ReportConfigController } from '@report-framework/controller/report-config.controller';

import { ActivePagePillService } from '@report-framework/service/active-page-pill.service';

// lib
import { COMMON_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { FrequencyKeyIDEnum } from '@report-framework/enum/frequency.enum';
import * as moment from 'moment-timezone';
// lib

@Component({
	selector: 'app-interval-tracking',
	templateUrl: './interval-tracking.component.html',
	styleUrls: ['./interval-tracking.component.scss'],
})
export class IntervalTrackingComponent implements OnInit {

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private reportConfigController: ReportConfigController,
		private storageService: StorageService,
		private activePagePillService: ActivePagePillService,
	) { }

	COMMON_CONSTANT = COMMON_CONSTANT;
	IntervalStatus = IntervalStatus;

	reportData: any[] = [];
	configData: any;
	id: any;
	name: string;
	currentOrgID: any;

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.activatedRoute.params.subscribe((param) => {
			this.id = param['configID'];
			this.name = param['configName'];
		});

		this.activePagePillService.setOngoingReportBSubject = null;

		let folder = {
			name: this.name,
			route: `${decodeURI(this.router.url)}`
		}
		setTimeout(() => {
			this.activePagePillService.setOngoingReportBSubject = folder;
		});

		this.getReportData();
		this.getReportTrackingDetails();
	}

	getReportData() {
		this.reportConfigController.getReportConfigData(this.currentOrgID, this.id).subscribe((res: any) => {
			this.configData = res;
		}, error => {
			console.log(error, "Error")
		})
	}

	getReportTrackingDetails() {
		this.reportConfigController.getReportTrackingDetails(this.currentOrgID, this.id).subscribe((res: any) => {
			this.reportData = res;
		}, error => {
			console.log(error, "Error")
		});
	}

	navigateToTrackingData(item: any): void {
		this.router.navigate([`/reporting-framework/tab/tracking/${this.name}/${this.id}/interval/${item.name}/${item.id}/data`], {
			queryParams: {
				reportingFrameworkID: this.configData.reportingFrameworkID,
                reportingFrameworkKeyID: this.configData.reportingFrameworkKeyID,
			}
		});
	}

	getTooltipMessage(data: any) {
        if (data.status == IntervalStatus.LOCKED) {
            return;
        }
		let reportingPeriod = data.reportingPeriod.split('-');
		let month = reportingPeriod[0].split(' ');
		const date = moment(month[0], 'MMM');

		let frequency;
		if (this.configData['reportingIntervalKeyID'] == FrequencyKeyIDEnum.HALF_YEARLY) {
			frequency = 'Half yearly';
		} else {
			frequency = 'Quarterly';
		}
		return frequency + " reports will become accessible starting in " + date.format('MMMM');
	}

	circleB = {
		"radius": 20,
		"space": -10,
		"outerStrokeGradient": true,
		"outerStrokeWidth": 7,
		"outerStrokeColor": "#4882c2",
		"outerStrokeGradientStopColor": "#53a9ff",
		"innerStrokeColor": "#e7e8ea",
		"innerStrokeWidth": 7,
		"animateTitle": false,
		"animationDuration": 1000,
		"showTitle": false,
		"showSubtitle": false,
		"showUnits": false,
		"showBackground": false,
		"progress": 10
	}
}

