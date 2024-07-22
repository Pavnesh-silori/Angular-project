
import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { ActivityM } from '@carbon/model/activity.model';
import { ActivityDataService } from '@carbon/service/activity-data.service';
import { ActivityService } from '@carbon/service/activity.service';

import { ActivityConfigController } from '@carbon/controller/activity-config.controller';
import { ActivityDataController } from '@carbon/controller/activity-data.controller';

/* tsc-library */
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { InvalidForm } from '@library/tsc-common';
/* tsc-library */

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styles: []
})

export class UpdateComponent implements OnInit {
    currentOrgID: any;

    activityID: any;
    activityDataID: any;
    activityKeyID: any;
    activity = new ActivityM();
    selectedTab: number = 1;

    isActivityDataValid = true;

    activityDataWithDataConfig: any;

    activityConfigComp: any;
    activityDataComp: any;

    configuration: any;

    approveBtn: boolean = false;
    updateBtn: boolean = true;
    submitBtn: boolean = false;
    activityDataAction: any = 'APPROVED';

    constructor(
        storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private toastrService: ToastrService,
        private activityDataService: ActivityDataService,
        private activityDataController: ActivityDataController,
        private activityConfigController: ActivityConfigController,
        private activityService: ActivityService
    ) {
        storageService.setStorage('switchOrgRedirect', 'YES');
        this.currentOrgID = parseInt(storageService.getStorage(['currentOrgID']));
    }

    ngOnInit(): void {
        let params = this.activatedRoute.snapshot.params;
        this.activityDataID = params['activityDataID'];

        this.activatedRoute.queryParams
            .subscribe((queryParam) => {
                if (queryParam['activityID']) {
                    this.activityID = queryParam['activityID'];

                    this.getActivityByID(this.activityID);
                }

                if (queryParam['activityKeyID']) {
                    this.activityKeyID = queryParam['activityKeyID'];
                }
            });
    }

    async getActivityByID(activityID: any) {
        this.activity = await <any>this.activityService.getActivityByID(activityID);
        this.activityKeyID = this.activity.keyID;
        this.getActivityDataWithActivityDataConfig(this.activityKeyID, this.activityDataID);
    }

    activityConfigCompInit(component) {
        this.activityConfigComp = component;
    }

    activityDataCompInit(component) {
        this.activityDataComp = component
    }

    async getActivityDataWithActivityDataConfig(activityKeyID, activityDataID) {
        this.activityDataWithDataConfig = await this.activityDataService.getActivityDataWithActivityDataConfig(this.currentOrgID,
            activityKeyID, activityDataID);

        const activityConfigData = this.activityDataWithDataConfig.activityConfigData;
        const activityConfigID = activityConfigData.activityConfigID;

        if (activityConfigID != null) {
            this.activityConfigController.getActivityConfigByID(this.currentOrgID, this.activityKeyID, activityConfigID)
                .subscribe((getRes) => {
                    this.configuration = getRes;
                    this.checkApprover(this.configuration);
                },
                    error => {
                        console.log('error in getActivityConfigByID -', error);
                    });
        }

        this.activityConfigComp.patchConfiguration(this.activityDataWithDataConfig);
        this.activityDataComp.getConfiguration(this.activityDataWithDataConfig);
    }

    checkApprover(configuration) {
        if (configuration['workflow'] != null) {
            if (configuration['workflow']?.['activityConfigApprover']?.['isApprover']) {
                this.approveBtn = true;
                this.updateBtn = false;
            } else if (configuration['workflow']?.['activityConfigWorkflow']?.['autoApprove'] == 'YES') {
                this.approveBtn = true;
                this.updateBtn = false;
            }
            else {
                this.submitBtn = true;
                this.updateBtn = false;
                this.activityDataAction = 'SUBMITTED';
            }
        }
    }

    updateActivityData() {
        this.isActivityDataValid = this.activityDataComp?.isValidForm();
        if (!this.isActivityDataValid) {
            this.toastrService.error(InvalidForm.INVALID_FORM_MESSAGE);
            return false;
        }
        this.activityDataController.updateActivityData(this.currentOrgID, this.activityKeyID, this.activityDataID, this.activityDataComp.updateActivityData(), this.activityDataAction)
            .subscribe(() => {
                this.location.back();
            },
                error => {
                    console.log('error in createAdHocWithoutActivityConfig() -', error);
                });
    }

    cancelBtn() {
        this.location.back();
    }

}
