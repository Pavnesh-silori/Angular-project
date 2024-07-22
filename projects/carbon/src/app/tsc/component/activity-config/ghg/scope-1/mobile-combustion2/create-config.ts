import { Router } from "@angular/router";

import { ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT } from "@carbon/constant/activity.constant";
import { ActivityKeyIDEnum } from "@carbon/enum/activity.enum";
import { ActivityConfigEnum } from "@carbon/enum/activity-config.enum";
import { ActivityService } from "@carbon/service/activity.service";
import { ActivityConfigController } from "@carbon/controller/activity-config.controller";
import { AdHocController } from "@carbon/controller/ad-hoc.controller";
// tsc-library
import { ToastrService, ToastrColor } from "@library/toastr-service";
import { UserService } from "@library/user-service";
import { InvalidForm, TSCCommonService } from '@library/tsc-common';
// /tsc-library/
const CREATE_AD_HOC_SUBTITLE = 'Create a new record with details and activity data.';

export abstract class CreateConfig {

    ActivityConfigEnum = ActivityConfigEnum;

    title: string = 'Title';
    titlePrefix: string;
    titleSuffix: string;

    subTitle: string = '';

    currentOrgID: any;
    currentApplicationID: any;

    origin: string = '';
    action: string = '';
    usePFF: string = 'NO';
    tabView: string = 'NO';
    activityDataTabView: string = 'NO';
    showActivityDataError: string = 'YES';
    from: string = 'NO';
    selectedTab: number;

    isPFFUpdate: boolean = false;
    isAdHocCreateUsingPFF: boolean = false;

    activityConfigID: any;

    activity: any;
    activityID: any;
    activityKeyID: any;
    activityName: string;
    configuration: any;

    users: any[] = [];
    dataEntryMethod: any[] = [];
    estimationMethod: any[] = [];

    isWorkflowValid = true;
    component: any;
    schedulerWorkflow: any;
    api;
    isApiValid = true;

    isConfigValid = true;
    isActivityDataValid = true;
    activityDataComp: any; /* ACTIVITY_DATA_COMPONENT */

    saveAdHocAsPff: boolean = false;
    activityConfigJson: { activityConfig, activityConfigData, activityConfigSource, activityConfigApi, workflow, schedular };

    isEqual: boolean = false;

    approveBtn: boolean = false;
    saveBtn: boolean = true;
    submitBtn: boolean = false;
    activityDataAction: any = 'APPROVED';
    redirectUrl: string; /* to redirect after create/update */

    constructor(
        public activityService: ActivityService,
        public activityConfigController: ActivityConfigController,
        public router: Router,
        public userService: UserService,
        public adHocController: AdHocController,
        public tscCommonService: TSCCommonService,
        public toastrService: ToastrService,
    ) { }

    handleRouteDate(routeData: any) {
        const { activityKeyID, action, origin, from, usePFF } = routeData;
        this.activityKeyID = activityKeyID ?? this.activityKeyID;
        this.action = action ?? this.action;
        this.origin = origin ?? this.origin;
        this.from = from ?? this.from;
        this.usePFF = usePFF ?? this.usePFF;
        if (this.origin === ActivityConfigEnum.PFF) {
            this.setupPFFConfig();
        } else if (this.origin === ActivityConfigEnum.AD_HOC) {
            this.setupAdHocConfig();
        }
        
    }

    async getActivityIdByActivityKeyId(activityKeyID) {
        let allActivity = await <any>this.activityService.getAllActivityNew()
        allActivity.forEach(activity => {
            if (activity.keyID == activityKeyID) {
                this.activityID = activity.id;
            }
        });
        if (this.activityID) {
            this.getActivityByID(this.activityID);
        }
    }

    handleParams(params: any) {
        this.activityConfigID = params['activityConfigID'];
        if ( this.activityConfigID && this.origin == ActivityConfigEnum.PFF) {
            this.isPFFUpdate = true;
        }
    }

    setupPFFConfig() {
        this.redirectUrl = `/carbon-setting/activity-config/page`;
        this.selectedTab = 0;

        if (this.action === 'create') {
            this.activityDataTabView = 'NO';
            this.titlePrefix = `Create`;
            this.titleSuffix = `Activity Form`;
        } else if (this.action === 'update') {
            this.titlePrefix = `Update`;
            this.titleSuffix = `Activity Form`;
        }
    }

    setupAdHocConfig() {
        this.redirectUrl = `/activity-data`;
        this.activityDataTabView = 'YES';
        this.titlePrefix = `Create`;
        this.titleSuffix = `New Record`;
        this.subTitle = CREATE_AD_HOC_SUBTITLE;
        this.selectedTab = 0;
        if (this.usePFF == 'YES') {
            this.showActivityDataError = 'NO';
            this.selectedTab = 1;
            if (this.action == 'create' ) {
                this.isAdHocCreateUsingPFF = true;
            }
        }
        
    }

    async getActivityByID(activityID: any) {
        this.activity = await <any>this.activityService.getActivityByID(activityID);

        this.activityName = this.activity.name;
        this.title = `${this.titlePrefix} ${this.activityName} ${this.titleSuffix}`;
        this.subTitle = this.activity.description;

        //update case
        if (this.isPFFUpdate || this.isAdHocCreateUsingPFF) {
            this.getActivityConfigByID(this.currentOrgID, this.activityKeyID, this.activityConfigID);
        }

        /* sets which route should we redirects to after creation or updation of an entity */
        this.setRedirectUrl();
    }

    async getUsersByOrg() {
        this.users = <any>await this.userService.getUserListByOrgIDAndAppID(this.currentOrgID, this.currentApplicationID);
    }

    getActivityConfigByID(orgID, activityKeyID, activityConfigID) {
        this.configuration = null;
        this.activityConfigController.getActivityConfigByID(orgID, activityKeyID, activityConfigID)
            .subscribe((config) => {
                this.configuration = config;
                if (this.isPFFUpdate) {
                    this.patchConfiguration(this.configuration);
                }
                if (this.isAdHocCreateUsingPFF) {
                    this.checkApprover(this.configuration);
                    this.activityDataComp.getConfiguration(this.configuration);
                }
            },
                error => {
                    console.log('error in getConfigurationByID() -', error);
                });
    }

    patchConfiguration(configuration) {
        this.isEqual = true;
        let activityConfig = configuration['activityConfig'];
        this.component.patchConfiguration(configuration);
        this.schedulerWorkflow.patchWorkflow(activityConfig['workflowEnabled'], configuration['workflow'], activityConfig['reminderEnabled'], configuration['schedular']);
        this.api.patchApi(activityConfig['apiEnabled'], configuration['activityConfigApi']);
    }

    patchConfigForAdHoc(configuration) {
        this.component.patchConfiguration(configuration);
        this.component.readOnlyForm();
    }

    checkApprover(configuration) {
        if (configuration?.['workflowEnabled'] == null) {
            this.saveBtn = true;
        } else if (configuration['workflow'] != null) {
            if (configuration['workflow']?.['activityConfigApprover']?.['isApprover']) {
                this.approveBtn = true;
                this.saveBtn = false;
            } else if (configuration['workflow']?.['activityConfigWorkflow']?.['autoApprove'] == 'YES') {
                this.approveBtn = true;
                this.saveBtn = false;
            }
            else {
                this.submitBtn = true;
                this.saveBtn = false;
                this.activityDataAction = 'SUBMITTED';
            }
        }
    }

    setRedirectUrl() {
        const nonGhgFormKeyID: any[] = [
            ActivityKeyIDEnum.CHP_ATTRIBUTION,
            ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION,
            ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION,
            ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION,
            ActivityKeyIDEnum.PURCHASED_PRECURSOR,
            ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION,
            ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT,
            ActivityKeyIDEnum.PROCESS_HEAT_EXPORT,
            ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
            ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT,
            ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT,
            ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL,
            ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
        ];

        if (this.origin == ActivityConfigEnum.PFF) {
            this.redirectUrl = `/carbon-setting/activity-config/page`;

        }
        else if (this.origin == ActivityConfigEnum.AD_HOC) {
            this.redirectUrl = `/activity-data`;

            // this.saveAdHocAsPff = this.component.saveAdHocAsPff;

            if (nonGhgFormKeyID.includes(this.activityKeyID)) {
                this.redirectUrl = '/cbam/activity-data/activity';
            }
        }

        if (this.router.url.includes('sustainability-accounting')) {
            this.redirectUrl = `/sustainability-accounting/carbon/page`;
        }
    }

    // abstract isupdateValid();
    isUpdateValid() {
        let configUpdate;
        this.component?.isEqual.subscribe(isEqual => {
            configUpdate = isEqual;
            this.updateEqual(configUpdate, workflowUpdate, apiUpdate);
        });
        let workflowUpdate;
        this.schedulerWorkflow.isEqual.subscribe(isEqual => {
            workflowUpdate = isEqual;
            this.updateEqual(configUpdate, workflowUpdate, apiUpdate);
        });
        let apiUpdate;
        this.api.isEqual.subscribe(isEqual => {
            apiUpdate = isEqual;
            this.updateEqual(configUpdate, workflowUpdate, apiUpdate);
        });
    }

    updateEqual(configUpdate, workflowUpdate, apiUpdate) {
        this.isEqual = configUpdate && workflowUpdate && apiUpdate;
    }

    patchChildren() {
        this.activityConfigJson = this.component.configuration;
        this.activityConfigJson['activityConfig']['activityID'] = this.activityID;
        this.activityConfigJson['activityConfig']['activityKeyID'] = this.activityKeyID;
        if (this.origin == ActivityConfigEnum.PFF) {
            this.activityConfigJson['activityConfig']['workflowEnabled'] = this.schedulerWorkflow.enableWorkflowFC.value;
            this.activityConfigJson['activityConfig']['reminderEnabled'] = (this.schedulerWorkflow.isReminderSetAC.value && this.schedulerWorkflow.enableWorkflowFC.value);
            this.activityConfigJson['activityConfig']['apiEnabled'] = this.api.enableApiFC.value;

            this.activityConfigJson['activityConfigApi'] = (this.api.enableApiFC.value ? this.api.apiFG.getRawValue() : null);
            this.activityConfigJson['workflow'] = (this.schedulerWorkflow.enableWorkflowFC.value ? this.schedulerWorkflow.workflowAC.getRawValue() : null);
            this.activityConfigJson['schedular'] = (this.schedulerWorkflow.isReminderSetAC.value ? this.schedulerWorkflow.schedulerAC.value : null);
        }

        if (this.origin == ActivityConfigEnum.PFF) {
            if (this.isPFFUpdate) {
                this.updateActivityConfig();
            } else {
                this.createActivityConfig();
            }
        }
        else if (this.origin == ActivityConfigEnum.AD_HOC) {
            // this.saveAdHocAsPff = this.component.saveAdHocAsPff;
            if (this.saveAdHocAsPff) {
                /* not yet configured/ not known if it will be used further */
                this.createActivityDataAndActivityConfig();
            } else {
                this.createActivityData();
            }
        }
    }

    abstract toFormData();

    createActivityConfig() {
        this.activityConfigController.createActivityConfig(this.currentOrgID, this.activityKeyID, this.activityConfigJson).subscribe((response: any) => {
            if (ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT.includes(this.activityKeyID)) {
                this.router.navigate(['/carbon-setting/activity-config', response.response.activityConfig.activityConfigID, 'activity', this.activityKeyID, { outlets: { activityConfig: ['view'] } }], { queryParams: { activityKeyID: this.activityKeyID } });
            } else {
                this.router.navigate([this.redirectUrl], { queryParams: { origin: this.origin } });
            }
        }, error => {
            console.log('error in createActivityConfig() -', error);
        });
    }

    updateActivityConfig() {
        this.activityConfigController.updateActivityConfig(this.currentOrgID, this.activityKeyID, this.activityConfigID, this.activityConfigJson).subscribe((response: any) => {
            if (ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT.includes(this.activityKeyID)) {
                this.router.navigate(['/carbon-setting/activity-config', response.response.activityConfig.activityConfigID, 'activity', this.activityKeyID, { outlets: { activityConfig: ['view'] } }], { queryParams: { activityKeyID: this.activityKeyID } });
            } else {
                this.router.navigate([this.redirectUrl], { queryParams: { origin: this.origin } });
            }
        }, error => {
            console.log('error in updateActivityConfig() -', error);
        });
    }

    createActivityDataAndActivityConfig() {
        this.adHocController.createActivityDataAndActivityConfig(this.currentOrgID, this.activityKeyID, this.toFormData())
            .subscribe((res) => {
                if (this.router.url.includes('sustainability-accounting')) {
                    this.router.navigate([this.redirectUrl], { queryParams: { activityID: this.activityID, activityKeyID: this.activityKeyID } });
                } else {
                    this.router.navigate([this.redirectUrl, this.activityKeyID], { queryParams: { activityID: this.activityID, activityKeyID: this.activityKeyID } });
                }

                this.tscCommonService.back();
            },
                error => {
                    console.log('error in createAdHocWithActivityConfig() -', error);
                });
    }

    createActivityData() {
        this.adHocController.createActivityData(this.currentOrgID, this.activityKeyID, this.activityConfigID, this.toFormData(), this.usePFF, this.activityDataAction)
            .subscribe((res) => {
                if (this.router.url.includes('sustainability-accounting')) {
                    this.router.navigate([this.redirectUrl], { queryParams: { activityID: this.activityID, activityKeyID: this.activityKeyID } });
                } else {
                    this.router.navigate([this.redirectUrl, this.activityKeyID, 'page'], { queryParams: { activityID: this.activityID, activityKeyID: this.activityKeyID } });
                }

                this.tscCommonService.back();
            },
                error => {
                    console.log('error in createAdHocWithoutActivityConfig() -', error);
                });
    }

    isValidForm() {
        if (this.usePFF != 'YES') {
            this.isConfigValid = this.component?.isValidForm();
            this.component?.activityConfigValidity();
            this.component?.validity.subscribe((invalid) => this.isConfigValid = invalid);

            if (this.origin == ActivityConfigEnum.PFF) {
                this.isWorkflowValid = this.schedulerWorkflow.isValidForm();
                this.isApiValid = this.api.isValidForm();
                this.api.apiValidity();
                this.api.validity.subscribe((invalid) => this.isApiValid = invalid);
            }
        }
        // for activityData validation
        if (this.isConfigValid && this.activityDataTabView == 'YES') {
            this.isActivityDataValid = this.activityDataComp?.isValidForm();
            this.activityDataComp.activityDataValidity();
            this.activityDataComp.validity.subscribe((invalid) => this.isActivityDataValid = invalid);
        }

        if (this.origin == ActivityConfigEnum.PFF) {
            if (this.isConfigValid && this.isWorkflowValid && this.isApiValid) {
                this.patchChildren();
            } else {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }
        else if (this.origin == ActivityConfigEnum.AD_HOC) {
            if (this.usePFF == 'YES' && this.isActivityDataValid) {
                this.createActivityData();
            } else if (this.usePFF == 'NO' && this.isConfigValid && this.isActivityDataValid && this.isWorkflowValid && this.isApiValid) {
                this.patchChildren();
            } else {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }
    }


}
