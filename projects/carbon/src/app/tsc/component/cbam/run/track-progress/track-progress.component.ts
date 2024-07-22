import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT } from '@carbon/constant/activity.constant';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ProcessMappingController } from '@carbon/controller/process-map.controller';
import { InstallationDetailController } from '@carbon/controller/installation-detail.controller';

import { StorageService } from '@library/storage-service';


@Component({
	selector: 'app-track-progress',
	templateUrl: './track-progress.component.html',
	styleUrls: ['./track-progress.component.scss']
})
export class TrackProgressComponent implements OnInit {
	ACTIVITY_FORM_TYPE_KEYID_ENUM = ACTIVITY_FORM_TYPE_KEYID_ENUM;

	process: any;
	totalActivites: number = 0;
	linkedRecords: number = 0;
	currentOrgID: any;

	runID: any;

	faPlus = faPlus;

	startDate: any;
	endDate: any;

	@Input() isDataCollection;
	@Input() stepperIndex;


	constructor(
		private stroageService: StorageService,
		private installationDetailController: InstallationDetailController,
		private processMapController: ProcessMappingController,
		private activatedRoute: ActivatedRoute,
		private router: Router,

	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			if (queryParams.runID) {
				this.runID = queryParams.runID;

			}

			if (this.runID) {
				this.getByRunID();
			}
		});

	}

	getByRunID() {
		this.installationDetailController.getInstallationByRunID(this.currentOrgID, this.runID).subscribe((response: any) => {
			this.startDate = response.productRunConfig.periodStartDate;
			this.endDate = response.productRunConfig.periodEndDate;
		})

	}

	ngOnChanges() {
		if (this.isDataCollection || this.stepperIndex == 3) {
			this.getTrackActivity(this.runID);
		}
	}

	refreshData() {
		this.getTrackActivity(this.runID);
	}

	getTrackActivity(runID) {
		this.processMapController.getTrackingRecord(this.currentOrgID, runID).subscribe((res: any) => {
			this.process = res;
			this.changeActivityJson();
			this.totalActivity();
		})
	}

	changeActivityJson() {
		this.process.forEach((process: any) => {
			process.input.forEach((input: any) => {
				input.source.forEach((source: any) => {

					// Initialize configData to false for each source
					source.configData = false;

					for (let i = 0; i < source.activity.length; i++) {
						const activity = source.activity[i];
						if (activity.id != null) {
							// Move the activity with non-null id to the first position
							source.activity.splice(i, 1); // Remove the activity from its current position
							source.activity.unshift(activity); // Insert the activity at the beginning
							break; // Break out of the loop as we have found and moved the activity
						}
					}

					// After ensuring the first activity has a non-null id (if present), update configData
					source.activity.forEach((activity: any) => {
						activity.config.forEach((config: any) => {
							if (config.id != null) {
								source.configData = true;
							} else {
								source.configData = false;
							}
						});
					});
				});
			});
		});

	}


	totalActivity() {
		this.totalActivites = 0;
		this.linkedRecords = 0;
		this.process.forEach((res: any) => {
			this.totalActivites += res.activityCount;
			this.linkedRecords += res.linkedRecords;
		})
	}

	routeToPFF(activityConfigData, activityID) {

		this.router.navigate([
			`/activity-data/activity/${activityConfigData.activityKeyID}`,
			{ outlets: { activityData: ['create'], activityConfig: ['update'] } }],
			{ queryParams: { activityID: activityID, origin: ActivityConfigEnum.AD_HOC, action: 'create', tabView: 'YES', usePFF: 'YES', activityConfigID: activityConfigData.id } });
	}

	viewActivityConfig(row) {
		if (ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT.includes(row.activityKeyID)) {
			this.router.navigate(['/carbon-setting/activity-config', row.id, 'activity', row.activityKeyID, { outlets: { activityConfig: ['view'] } }], { queryParams: { origin: ActivityConfigEnum.PFF, activityKeyID: row.activityKeyID } });
		} else {
			return;
		}
	}

	showCursorPointer(row) {
		let isCursorPointer: boolean = false;

		if (ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT.includes(row.activityKeyID)) {
			isCursorPointer = true;
		} else {
			isCursorPointer = false;
		}

		return isCursorPointer;
	}

	linkedRecordsActivity(linkedRecord, activity) {
		if (linkedRecord.linkedRecords == 0) {
			return;
		}
		if (linkedRecord.linkedRecordsCount != 0) {
			if (activity.type[0].keyID == ACTIVITY_FORM_TYPE_KEYID_ENUM.GHG_FORM) {
				this.router.navigate(
					[`/activity-data/${linkedRecord.activityKeyID}/page`], { queryParams: { activityConfigID: linkedRecord.id, dateFlag: false, startDate: this.startDate, endDate: this.endDate } });
			} else {
				this.router.navigate(
					[`/cbam/activity-data/activity/${linkedRecord.activityKeyID}/page`], { queryParams: { activityConfigID: linkedRecord.id, dateFlag: false, startDate: this.startDate, endDate: this.endDate } });
			}
		}
	}

	entityTypeWithoutRecord: any[] = [PROCESS_INPUT_ENUM.RAW_MATERIAL, PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT];
	canAddRecord(type: 'INPUT' | 'OUTPUT', typeKeyID: string): boolean {
		if (type == 'INPUT') {
			return !this.entityTypeWithoutRecord.includes(typeKeyID);
		} else {
			return true;
		}
	}

	getTotalRecords(entity: any) {
		let totalRecords: number = 0;

		let source: any[] = entity.source as Array<any>;
		source.forEach(sourceType => {
			totalRecords += sourceType.linkedRecords;
		});
		return totalRecords;
	}

}
