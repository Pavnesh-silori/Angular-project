import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { ReportConfigComponent } from '../report-config.component'; 

import { ReportPreference, ReportingPrefenceForReportDetail } from '@report-framework/model/reporting-preference.model';

import { ReportingPreferenceController } from '@report-framework/controller/reporting-preference.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
import { Router } from '@angular/router';
// /tsc-library
@Component({
	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
	providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false }
        }
    ]
})
export class StepperComponent implements OnInit {

	messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;

	rootOrgID: any;
	reportingFrameworkID: any = null;
	configID: any = null;

	prefEnableReportingFrameworkList = [new ReportingPrefenceForReportDetail];
	preference = new ReportPreference();

	assignmentFlag: boolean = false;

	@ViewChild(ReportConfigComponent) reportConfigComponent: ReportConfigComponent;
	@ViewChild('stepper') stepper: MatStepper;

	constructor(
		private router: Router,
		private reportingPreferenceController: ReportingPreferenceController,
		private storageService: StorageService,

	) { }

	ngOnInit(): void {
		this.rootOrgID = parseInt(this.storageService.getStorage('rootOrgID'));
		this.getReportFrameworkPrefByOrgID();

	}

	stepperTitle(index: number): string {
		switch (index) {
			case 0:
				return 'New Report';
			case 1:
				return 'New Report: Assign';
			default:
				return 'Unknown';
		}
	}

	nextStepper(event) {
		if (event != null) {
			this.reportingFrameworkID = event['reportingFrameworkID'];
			this.configID = event['configID'];
			this.assignmentFlag = true;
			this.stepper.next();
		}
	}

	reportingFrameworkEmit(event) {
		this.reportingFrameworkID = event;
	}

	getReportFrameworkPrefByOrgID() {
		this.reportingPreferenceController.getReportingPreferenceByOrgID(this.rootOrgID).subscribe((res: ReportPreference) => {
			this.preference = res;
			if (this.preference.reportingPreference.length > 0) {
				this.getReportFrameworkPrefEnableFramewrok();
			}  else {
				this.router.navigate([`/reporting-framework/tab/tracking`]);
			}
		}, error => {
			console.log('error in getReportFrameworkPrefByOrgID report() -', error);
		});
	}

	getReportFrameworkPrefEnableFramewrok() {
		this.reportingPreferenceController.getReportingPreferencesByOrgID(this.rootOrgID).subscribe((res: ReportingPrefenceForReportDetail[]) => {
			this.prefEnableReportingFrameworkList = res;
		},error => {
			console.log('error in getReportFrameworkPrefEnableFramewrok',error);
		});
	}
}
