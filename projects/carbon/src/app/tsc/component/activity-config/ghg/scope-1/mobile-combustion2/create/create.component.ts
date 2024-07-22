import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, merge } from 'rxjs';

import { ConfigCreateComponent } from './config-create/config-create.component';
import { ApiComponent } from '@carbon/component/activity-config/create/_templates/api/api.component';
import { SchedulerWorkflowComponent } from '@carbon/component/activity-config/create/_templates/workflow-scheduler/scheduler-workflow/scheduler-workflow.component';
import { CreateConfig } from '../create-config';
import { CreateUpdateComponent } from '@carbon/component/activity-data/ghg/scope-1/mobile-combustion2/create-update/create-update.component';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { ActivityService } from '@carbon/service/activity.service';
import { AdHocController } from '@carbon/controller/ad-hoc.controller';
import { ActivityConfigController } from '@carbon/controller/activity-config.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { UserService } from '@library/user-service';
import { ToastrService } from '@library/toastr-service';
import { TSCCommonService } from '@library/tsc-common';
import { ViewComponent } from '../view/view.component';
// /tsc-library/
const CREATE_AD_HOC_SUBTITLE = 'Create a new record with details and activity data.';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent extends CreateConfig implements OnInit {
    ActivityConfigEnum = ActivityConfigEnum;
    ACTIVITY_FORM_TYPE_KEYID_ENUM = ACTIVITY_FORM_TYPE_KEYID_ENUM;

    currentOrgID: any;
    currentApplicationID: any;

    isPFFUpdate: boolean = false;
    isAdHocCreateUsingPFF: boolean = false;

    activityConfigID: any;

    activity: any;
    activityID: any;
    activityKeyID: any;
    activityName: string;
    configuration: any;
    initCheck: boolean = true;

    users: any[] = [];
    dataEntryMethod: any[] = [];
    estimationMethod: any[] = [];

    isWorkflowValid = true;
    @ViewChild('schedulerWorkflow') schedulerWorkflow: SchedulerWorkflowComponent;
    @ViewChild('configCreate') component: ConfigCreateComponent;
    @ViewChild('configView') activityConfigView: ViewComponent;
    @ViewChild('activityDataComp') activityDataComp: CreateUpdateComponent;
    isApiValid = true;
    @ViewChild('api') api: ApiComponent;

    isConfigValid = true;
    isActivityDataValid = true;
    docFileList: any = [];  /* get upload file value */

    saveAdHocAsPff: boolean = false;
    createAdHocJson: { configData, activityData } = { configData: undefined, activityData: undefined };
    activityConfigJson: { activityConfig, activityConfigData, activityConfigSource, activityConfigApi, workflow, schedular };

    initialObject: any;
    isEqual: boolean = false;

    approveBtn: boolean = false;
    saveBtn: boolean = true;
    submitBtn: boolean = false;
    activityDataAction: any = 'APPROVED';
    redirectUrl: string; /* to redirect after create/update */
    vehicles: any[] = [];

    constructor(
        private storageService: StorageService,
        public toastrService: ToastrService,
        public activityService: ActivityService,
        public router: Router,
        private activatedRoute: ActivatedRoute,
        public userService: UserService,
        public adHocController: AdHocController,
        public activityConfigController: ActivityConfigController,
        public tscCommonService: TSCCommonService,
    ) {
        super(activityService, activityConfigController, router, userService, adHocController, tscCommonService, toastrService);
        this.currentOrgID = storageService.getStorage('currentOrgID');
        this.currentApplicationID = this.storageService.getStorage(['applicationID']);
    }

    ngOnInit() {
        this.getUsersByOrg();
        combineLatest([this.activatedRoute.params, this.activatedRoute.data])
            .subscribe(([params, routeData]) => {
                this.handleRouteDate(routeData);
                this.handleParams(params);
            });
            this.getActivityIdByActivityKeyId(this.activityKeyID)
           
    }

    jsonCreatForActivityData() {
        merge(
            this.component.activityConfigFG?.valueChanges
        ).subscribe(() => {
            if (this.component.isValid()) {
                this.activityDataComp.getConfiguration(this.createJsonForActivityData);
                this.showActivityDataError = 'NO';
            } else {
                this.showActivityDataError = 'YES';
            }
        });
    }

    createJsonForAD: { activityConfig };

    get createJsonForActivityData() {
        this.createJsonForAD = this.component.getConfigJson;
        return this.createJsonForAD;
    }

    ngAfterViewInit() {
        if (this.isPFFUpdate) this.isUpdateValid();
    }

    ngAfterContentChecked() {
        if (this.usePFF == 'NO') {
            if (this.initCheck) {
                if (this.activityDataComp && this.component) {
                    this.jsonCreatForActivityData();
                    this.initCheck = false;
                }
            }
        }
    }

    getAdHocJson() {
        const activityData = this.activityDataComp.getActivityData();
        let configData: any;
        if (this.usePFF == 'YES') {
            configData = this.configuration;
        } else {
            configData = this.activityConfigJson;
        }
        this.createAdHocJson['configData'] = configData;
        this.createAdHocJson['activityData'] = activityData.activityData;

        this.docFileList = activityData.activityDataFile;
        return this.createAdHocJson;
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('payload', JSON.stringify(this.getAdHocJson()));
        for (const file of this.docFileList) {
            if (file == null) {
                formData.append('file', new File([], '', { type: 'application/octet-stream' }));
            } else {
                formData.append('file', file, file.name);
            }
        }
        return formData;
    }

    cancelBtn() {
        this.tscCommonService.back();
    }
}
