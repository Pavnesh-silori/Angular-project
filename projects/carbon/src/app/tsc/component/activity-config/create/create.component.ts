import { Component, OnInit, ViewChild } from '@angular/core';

import { combineLatest, merge } from 'rxjs';

import {
    ActivatedRoute,
    Router
} from '@angular/router';

import { ApiComponent } from './_templates/api/api.component';
import { SchedulerWorkflowComponent } from './_templates/workflow-scheduler/scheduler-workflow/scheduler-workflow.component';

import { AdHocController } from '@carbon/controller/ad-hoc.controller';
import { UserService } from '@library/user-service';

import { ActivityService } from '@carbon/service/activity.service';

import { ActivityConfigController } from '@carbon/controller/activity-config.controller';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { InvalidForm, TSCCommonService } from '@library/tsc-common';
import { ActivityConfigI } from '../activity-config.interface';
import { ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT } from '@carbon/constant/activity.constant';

// const CREATE_PRE_FILLED = 'Create Activity Form';
// const UPDATE_PRE_FILLED = 'Update Activity Form';
// const CREATE_AD_HOC = 'New record';
const CREATE_AD_HOC_SUBTITLE = 'Create a new record with details and activity data.';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    ActivityConfigEnum = ActivityConfigEnum;
    ACTIVITY_FORM_TYPE_KEYID_ENUM = ACTIVITY_FORM_TYPE_KEYID_ENUM;

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
    showActivitySelection: string = 'YES';
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
    @ViewChild('schedulerWorkflow') schedulerWorkflow: SchedulerWorkflowComponent;

    isApiValid = true;
    @ViewChild('api') api: ApiComponent;

    isConfigValid = true;
    component: any; /* ACTIVITY_CONFIG_COMPONENT */

    isActivityDataValid = true;
    activityDataComp: any; /* ACTIVITY_DATA_COMPONENT */
    docFileList: any = []  /* get upload file value */

    saveAdHocAsPff: boolean = false;
    activityConfigJson: { activityConfig, activityConfigData, activityConfigSource, activityConfigApi, workflow, schedular };

    initialObject: any;
    isEqual: boolean = false;

    approveBtn: boolean = false;
    saveBtn: boolean = true;
    submitBtn: boolean = false;
    activityDataAction: any = 'APPROVED';

    redirectUrl: string; /* to redirect after create/update */

    constructor(
        private storageService: StorageService,
        private toastrService: ToastrService,
        private activityService: ActivityService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private adHocController: AdHocController,
        private activityConfigController: ActivityConfigController,
        public tscCommonService: TSCCommonService,

    ) {
        this.storageService.setStorage('switchOrgRedirect', 'YES');
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.currentApplicationID = this.storageService.getStorage(['applicationID']);
    }

    ngOnInit(): void {
        this.getUsersByOrg();


        combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams])
            .subscribe(([params, queryParams]) => {
                if (queryParams['activityID']) {
                    this.activityID = queryParams['activityID'];
                    this.getActivityByID(this.activityID);
                }

                if (queryParams['action']) {
                    this.action = queryParams['action'];
                }

                if (queryParams['origin']) {
                    this.origin = queryParams['origin'];
                }

                if (queryParams['tabView']) {
                    this.tabView = queryParams['tabView'];
                }

                if (queryParams['from']) {
                    this.from = queryParams['from'];

                    if (this.from == 'reminder') {
                        this.showActivitySelection = 'NO';
                    } else if (this.from == 'record') {
                        this.showActivitySelection = 'NO';
                    }
                }

                if (this.origin == ActivityConfigEnum.PFF) {
                    this.redirectUrl = `/carbon-setting/activity-config/page`;
                    this.selectedTab = 0;

                    if (this.action == 'create') {
                        this.activityDataTabView = 'NO';
                        this.titlePrefix = `Create New`;
                        this.titleSuffix = `Activity Form`;
                    } else if (this.action == 'update') {
                        this.showActivitySelection = 'NO';
                        this.titlePrefix = `Update`;
                        this.titleSuffix = `Activity Form`;
                    }
                } else if (this.origin == ActivityConfigEnum.AD_HOC) {
                    this.redirectUrl = `/activity-data`;
                    this.activityDataTabView = 'YES';
                    this.titlePrefix = `Create New`;
                    this.titleSuffix = `Record`;
                    this.subTitle = CREATE_AD_HOC_SUBTITLE;
                    this.selectedTab = 0;

                    if (queryParams['usePFF']) {
                        this.usePFF = queryParams['usePFF'];

                        if (this.usePFF == 'YES') {
                            this.showActivityDataError = 'NO';
                            this.selectedTab = 1;
                        }

                        if (this.action == 'create' && this.usePFF == 'YES') {
                            this.isAdHocCreateUsingPFF = true;
                        }
                    }
                }

                if (queryParams['activityConfigID']) {
                    this.activityConfigID = queryParams['activityConfigID'];
                }

                if (params['activityConfigID']) {
                    this.isPFFUpdate = true;
                    this.activityConfigID = params['activityConfigID'];
                }
            });
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

        } else if (this.origin == ActivityConfigEnum.AD_HOC) {
            this.redirectUrl = `/activity-data`;

            this.saveAdHocAsPff = this.component.saveAdHocAsPff;

            if (nonGhgFormKeyID.includes(this.activityKeyID)) {
                this.redirectUrl = '/cbam/activity-data/activity';
            }
        }

        if (this.router.url.includes('sustainability-accounting')) {
            this.redirectUrl = `/sustainability-accounting/carbon/page`;
        }
    }

    jsonCreatForActivityData() {
        merge(
            this.component.activityConfigFG?.valueChanges).subscribe(() => {
                if (this.component.isValid()) {
                    this.activityDataComp.getConfiguration(this.createJsonForActivityData);
                    this.showActivityDataError = 'NO';
                } else {
                    this.showActivityDataError = 'YES';
                }
            })
    }

    createJsonForAD: { activityConfig };
    get createJsonForActivityData() {
        this.createJsonForAD = this.component.getConfigJson;

        return this.createJsonForAD;
    }

    ngAfterViewInit() {
        if (this.isPFFUpdate) this.isUpdateValid();
    }

    initCheck: boolean = true;
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

    activityConfigComponentInit(component) {
        this.component = <ActivityConfigI>component;
    }

    activityDataCompInit(component) {
        this.activityDataComp = component;
    }

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

    async getActivityByID(activityID: any) {
        this.activity = await <any>this.activityService.getActivityByID(activityID);
        this.activityKeyID = this.activity.keyID;
        this.activityName = this.activity.name;
        this.title = `${this.titlePrefix} ${this.activityName} ${this.titleSuffix}`;
        this.subTitle = this.activity.description;

        if (this.isPFFUpdate || this.isAdHocCreateUsingPFF) {
            this.getActivityConfigByID(this.currentOrgID, this.activityKeyID, this.activityConfigID);
        }

        /* sets which route should we redirects to after creation or updation of an entity */
        this.setRedirectUrl();
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
                    this.patchConfigForAdHoc(this.configuration);
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

    async getUsersByOrg() {
        this.users = <any>await this.userService.getUserListByOrgIDAndAppID(this.currentOrgID, this.currentApplicationID);
    }

    isValidForm() {
        if (this.usePFF != 'YES') {
            this.isConfigValid = this.component?.isValidForm();
            this.component?.activityConfigValidity();
            this.component?.validity.subscribe((invalid) => this.isConfigValid = invalid);

            if (this.origin == ActivityConfigEnum.PFF) {
                this.isWorkflowValid = this.schedulerWorkflow.isValidForm();
                this.isApiValid = this.api.isValidForm();

                // this.schedulerWorkflow.workflowValidity();
                // this.schedulerWorkflow.validity.subscribe((invalid) => this.isWorkflowValid = invalid);

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
        } else if (this.origin == ActivityConfigEnum.AD_HOC) {
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
        } else if (this.origin == ActivityConfigEnum.AD_HOC) {
            this.saveAdHocAsPff = this.component.saveAdHocAsPff;
            if (this.saveAdHocAsPff) {
                /* not yet configured/ not known if it will be used further */
                this.createActivityDataAndActivityConfig();
            } else {
                this.createActivityData();
            }
        }
    }

    createAdHocJson: { configData, activityData } = { configData: undefined, activityData: undefined };
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
                // if (this.router.url.includes('sustainability-accounting')) {
                //     this.router.navigate([this.redirectUrl], { queryParams: { activityID: this.activityID, activityKeyID: this.activityKeyID } });
                // } else {
                //     this.router.navigate([this.redirectUrl, this.activityKeyID], { queryParams: { activityID: this.activityID, activityKeyID: this.activityKeyID } });
                // }

                this.tscCommonService.back();
            },
                error => {
                    console.log('error in createAdHocWithActivityConfig() -', error);
                });
    }

    createActivityData() {
        this.adHocController.createActivityData(this.currentOrgID, this.activityKeyID, this.activityConfigID, this.toFormData(), this.usePFF, this.activityDataAction)
            .subscribe((res) => {
                // if (this.router.url.includes('sustainability-accounting')) {
                //     this.router.navigate([this.redirectUrl], { queryParams: { activityID: this.activityID, activityKeyID: this.activityKeyID } });
                // } else {
                //     this.router.navigate([this.redirectUrl, this.activityKeyID, 'page'], { queryParams: { activityID: this.activityID, activityKeyID: this.activityKeyID } });
                // }

                this.tscCommonService.back();
            },
                error => {
                    console.log('error in createAdHocWithoutActivityConfig() -', error);
                });
    }

    cancelBtn() {
        this.tscCommonService.back();
    }

    ngOnDestroy() {
        this.storageService.setStorage('switchOrgRedirect', 'YES');
    }
}
