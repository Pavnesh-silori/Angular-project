import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import { ActivityConfig } from '@carbon/component/activity-config/activity-config';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ProcessEmissionActivityTypeKeyIDEnum } from '@carbon/enum/activity.enum';
import { ProcessService } from '@carbon/service/process.service';

// tsc-library
import {
    COMMON_CONSTANT,
    MatSelectSearchService
} from '@library/tsc-common';

import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-process-emission-activity-config-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})

export class ProcessEmissionActivityConfigCreateComponent extends ActivityConfig implements OnInit {
    activityConfig: any = {
        "activityConfigData": {
            "process": {
                "type": "STANDARD",
                "id": 1,
                "name": "process name",
                "ipccProcessParamTechMapID": 3,
                "parameter": {
                    "id": 1,
                    "name": "Parameter"
                },
                "technology": {
                    "id": 1,
                    "name": "Parameter"
                }
            }
        }
    };

    COMMON_CONSTANT = COMMON_CONSTANT;

    ActivityConfigEnum = ActivityConfigEnum;

    currentOrgID: any;
    origin: string = 'default';

    process: any[];
    processSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    processParamTech: any[];
    processParamTechSelectSearch: MatSelectSearchService = new MatSelectSearchService(['parameter']);
    showIpccProcessParamTech: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private processService: ProcessService,

        // tsc-library
        storageService: StorageService
        // /tsc-library
    ) {
        super();
        this.currentOrgID = storageService.getStorage('currentOrgID');
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.activityKeyID = this.activatedRoute.snapshot.data.activityKeyID;

            if (queryParams['activityID']) {
                this.activityID = queryParams['activityID'];
            }

            if (queryParams['origin']) {
                this.origin = queryParams['origin'];
            }
        });

        this.formGroupInit();
        this.getProcess(this.currentOrgID);
    }

    formGroupInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: this.activityID,
                activityKeyID: this.activityKeyID,
                configName: [],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                type: [, Validators.required],
                processID: [, Validators.required],
                ipccProcessParamTechMapID: []
            }),
            activityConfigSource: this.formBuilder.group({
                sourceTypeID: [],
                sourceID: [],
            })
        });
    }

    async getProcess(orgID) {
        let ipccProcess: any[];
        let customProcess: any[];
        let modifiedIpccProcess: any[];
        let modifiedCustomProcess: any[];

        [ipccProcess, customProcess] = await Promise.all([
            this.processService.getIpccProcess(),
            this.processService.getProcessList(orgID)
        ]);

        modifiedIpccProcess = ipccProcess.map((process: any) => {
            return {
                ...process,
                isStandard: true,
                uID: 'S' + process.id
            };
        });

        modifiedCustomProcess = customProcess.map((process: any) => {
            return {
                ...process,
                isStandard: false
            };
        });

        this.process = modifiedIpccProcess.concat(modifiedCustomProcess);

        this.processSelectSearch.entityArr = this.process;
        this.processSelectSearch.createSubscription();
    }

    processChange(process: any) {
        this.patchControl(this.activityConfigFG, 'activityConfigData.type', process.isStandard ? ProcessEmissionActivityTypeKeyIDEnum.STANDARD : ProcessEmissionActivityTypeKeyIDEnum.CUSTOM);

        this.patchControl(this.activityConfigFG, 'activityConfigData.ipccProcessParamTechMapID', null);
        this.showIpccProcessParamTechFn(process.id, process.isStandard);
    }

    async showIpccProcessParamTechFn(processID, isStandardProcess) {
        if (isStandardProcess) {
            this.processParamTech = <any[]>await this.processService.getProcessParamTech(processID);

            if (this.processParamTech) {
                this.activityConfigFG.get('activityConfigData.ipccProcessParamTechMapID').setValidators([Validators.required]);
                this.showIpccProcessParamTech = true;
            } else {
                this.activityConfigFG.get('activityConfigData.ipccProcessParamTechMapID').clearValidators();
                this.showIpccProcessParamTech = false;
            }

            this.processParamTechSelectSearch.entityArr = this.processParamTech;
            this.processParamTechSelectSearch.createSubscription();
        } else {
            this.activityConfigFG.get('activityConfigData.ipccProcessParamTechMapID').clearValidators();
            this.patchControl(this.activityConfigFG, 'activityConfigData.ipccProcessParamTechMapID', null);
            this.showIpccProcessParamTech = false;
        }

        this.activityConfigFG.get('activityConfigData.ipccProcessParamTechMapID').updateValueAndValidity();
    }

    getProcessParamTechName(processParamTech: any) {
        let processParamTechName: string;

        if (processParamTech.technology) {
            processParamTechName = `${processParamTech.parameter} > ${processParamTech.technology}`;
        } else {
            processParamTechName = processParamTech.parameter;
        }

        return processParamTechName;
    }

    patchConfiguration(configuration: any) {
        let activityConfig: any;
        let activityConfigData: any;

        activityConfig = (configuration.activityConfig != null ? configuration['activityConfig'] : null);
        activityConfigData = configuration['activityConfigData'];

        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig.configName,
            });
        } else {
            this.readOnlyForm();
        }

        this.activityConfigDataAC.patchValue({
            type: activityConfigData.type,
            processID: activityConfigData.id,
            ipccProcessParamTechMapID: activityConfigData.ipccProcessParamTechMapID
        });

        if (activityConfigData.type == ProcessEmissionActivityTypeKeyIDEnum.STANDARD) {
            this.showIpccProcessParamTechFn(activityConfigData.id, true);
        } else {
            this.showIpccProcessParamTechFn(null, false);
        }

        this.updateInitialObject();
    }

    patchControl(formGroup: FormGroup, controlPath: string, value: any) {
        formGroup.get(controlPath).patchValue(value);
    }

}
