import { Location } from '@angular/common';

import { ActivityM } from '@carbon/model/activity.model';
import { ActivityDataService } from '@carbon/service/activity-data.service';
import { ActivityService } from '@carbon/service/activity.service';

import { ActivityConfigController } from '@carbon/controller/activity-config.controller';
import { ActivityDataController } from '@carbon/controller/activity-data.controller';

/* tsc-library */
import { ToastrService } from '@library/toastr-service';
import { InvalidForm } from '@library/tsc-common';
/* tsc-library */
/* tsc-library */

/* tsc-library */

export abstract class UpdateComponent {
    
    currentOrgID: any;

    activityID: any;
    activityDataID: any;
    activityKeyID: any;
    activity = new ActivityM();
    selectedTab: number = 1;

    isActivityDataValid = true;

    activityDataWithDataConfig: any;

    configuration: any;

    approveBtn: boolean = false;
    updateBtn: boolean = true;
    submitBtn: boolean = false;
    activityDataAction: any = 'APPROVED';
    activityDataComp: any;  /*Activity Data component*/
    activityConfigComp:any; /*Activity Config component*/
    activityConfigData:any
    activityConfigSource: any;
    constructor(
       public toastrService:ToastrService,
       public activityDataController: ActivityDataController,
       public location: Location,
       public activityDataService: ActivityDataService,
       public activityConfigController:ActivityConfigController,
       public activityService: ActivityService
    ){}

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


    async getActivityByID(activityID: any) {
        this.activity = await <any>this.activityService.getActivityByID(activityID);
        this.activityKeyID = this.activity.keyID;
        this.getActivityDataWithActivityDataConfig(this.activityKeyID, this.activityDataID);
    }

    async getActivityDataWithActivityDataConfig(activityKeyID, activityDataID) {
        this.activityDataWithDataConfig = await this.activityDataService.getActivityDataWithActivityDataConfig(this.currentOrgID,
            activityKeyID, activityDataID);

        this.activityConfigData = this.activityDataWithDataConfig.activityConfigData;
        this.activityConfigSource = this.activityDataWithDataConfig.activityConfigSource;
        const activityConfigID = this.activityConfigData.activityConfigID;

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

        this.activityDataComp.getConfiguration(this.activityDataWithDataConfig);
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


}