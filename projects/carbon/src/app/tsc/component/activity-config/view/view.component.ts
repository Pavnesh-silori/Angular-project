import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { ActivityService } from '@carbon/service/activity.service';
import { ActivityConfigService } from '@carbon/service/activity-config.service';

// tsc-common
import {
    MATERIAL_CONSTANT,
    ButtonTooltipEnum
} from '@library/tsc-common';

import { StorageService } from '@library/storage-service';
// /tsc-common/

@Component({
    selector: 'app-activity-config-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ActivityConfigViewComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    ACTIVITY_FORM_TYPE_KEYID_ENUM = ACTIVITY_FORM_TYPE_KEYID_ENUM;

    currentOrgID: any;
    activityKeyID: string;
    activityConfigID: any;

    allActivity: any;
    activity: any;
    activityConfig: any;
    config: any;

    activityConfigComp: any;
    activityConfigWorkflow: any;
    activityConfigScheduler: any;
    activityConfigApi: any;
    
    constructor(
        activatedRoute: ActivatedRoute,
        private router: Router,
        private activityConfigService: ActivityConfigService,
        private activityService: ActivityService,
        storageService: StorageService
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
        activatedRoute.params.subscribe((param) => {
            this.activityConfigID = param['activityConfigID'];
        });

        activatedRoute.queryParams.subscribe((queryParam) => {
            this.activityKeyID = queryParam['activityKeyID'];
        });
    }

    ngOnInit(): void {
        this.getAllActivitiesAndFindActivityByKeyID(this.activityKeyID);
        this.getConfigByID(this.currentOrgID, this.activityKeyID, this.activityConfigID);
    }

    ngAfterContentChecked() {
        if (this.activityConfigComp && this.activityConfig) {
            this.activityConfigComp.activityConfig = this.activityConfig;
        }
    }

    getConfigByID = (orgID: number, activityKeyID: string, activityConfigID: number) => {
        this.activityConfigService
            .getActivityConfigByID(orgID, activityKeyID, activityConfigID)
            .then((data) => {
                this.activityConfig = data;
                this.config = this.activityConfig.activityConfig;
                this.activityConfigWorkflow = this.activityConfig.workflow;
                this.activityConfigScheduler = this.activityConfig.schedular;
                this.activityConfigApi = this.activityConfig.activityConfigApi;
            })
            .catch((error) => {
                console.log('error in getConfigurationByID() -', error);
            });
    }

    async getAllActivitiesAndFindActivityByKeyID(activityKeyID: string) {
        this.allActivity = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(activityKeyID, this.allActivity);        
    }

    activityConfigCompInit(component) {
        this.activityConfigComp = component;
    }

    updateActivityConfig = (row) => {
        this.router.navigate(['/carbon-setting/activity-config', row.activityConfig.activityConfigID, 'activity', row.activityConfig.activityKeyID, { outlets: { activityConfig: ['update'] } }], { queryParams: { activityID: row.activityConfig.activityID, origin: ActivityConfigEnum.PFF, action: 'update', tabView: 'YES' } });
    }
}
