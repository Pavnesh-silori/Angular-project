// Below are shared for this component
// PROCESS_WASTE_GAS_EXPORT
// PROCESS_PRECURSOR_EXPORT
// PROCESS_INTERMEDIATE_PRODUCT_EXPORT
// PROCESS_PRODUCTION_LEVEL

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import { ActivityConfig } from '@carbon/component/activity-config/activity-config';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { DataInputMethod, DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM, PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { ProcessService } from '@carbon/service/process.service';

// tsc-library
import {
    COMMON_CONSTANT,
    MatSelectSearchService
} from '@library/tsc-common';

import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
// /tsc-library/

@Component({
    selector: 'app-production-level-activity-config-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})

export class ProductionLevelActivityConfigCreateComponent extends ActivityConfig implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private dataInputMethodService: DataInputMethodService,
        private processService: ProcessService,

        // tsc-library
        storageService: StorageService,
        private toastrService: ToastrService,
        private unitService: UnitService,
        // /tsc-library/
    ) {
        super();
        this.currentOrgID = storageService.getStorage('currentOrgID');
    }

    COMMON_CONSTANT = COMMON_CONSTANT;

    ActivityConfigEnum = ActivityConfigEnum;

    currentOrgID: any;
    origin: string = 'default';
    isMeterReading: boolean = false;
    entityTypeLabel: string = 'Entity';
    noEntityFoundError: string = 'Please select valid process for this activity form.';
    entity: any[] = [];
    // entityActivity: string[] = [ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL, ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT];
    // entitySourceActivity: string[] = [ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT];

    process: any;
    allProcess: any[] = [];
    dataInputMethod: any[] = [];
    unit: any[] = [];

    processSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    unitSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

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
        this.getAllProcess(this.currentOrgID);
        this.getDataInputMethodByActivityID(this.activityID, DataInputMethod.STANDARD);
        this.getUnit([`type:${UnitTypeKeyID.MASS}`]);
        this.setEntityTypeLabel(this.activityKeyID);
    }

    formGroupInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: this.activityID,
                activityKeyID: this.activityKeyID,
                configName: [, Validators.required],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                processID: [, Validators.required],
                processRecordID: [, Validators.required],
                dataInputMethodStdID: [, Validators.required],
                meterRolloverValue: [],
                meterRolloverUnitID: []
            })
        });
    }

    async getDataInputMethodByActivityID(activityID: number, dataInputMethodType: DataInputMethod) {
        this.dataInputMethod = await this.dataInputMethodService.getDataInputMethodByActivityAndType(activityID, dataInputMethodType);
    }

    async getUnit(filter) {
        this.unit = await this.unitService.getUnit(filter);
        this.unitSelectSearch.entityArr = this.unit;
        this.unitSelectSearch.createSubscription();
    }

    async getAllProcess(orgID: number) {
        let filterProcess: any;

        this.allProcess = await this.processService.getProcessList(orgID);
        filterProcess = this.allProcess.filter(source => source.isCBAMProcess == true);

        this.allProcess = filterProcess;
        this.processSelectSearch.entityArr = this.allProcess;
        this.processSelectSearch.createSubscription();
    }

    async processChange(orgID: number, processID: number, isLatest: boolean) {
        this.process = await this.processService.getProcessByID(orgID, processID, isLatest);
        this.patchControl(this.activityConfigFG, 'activityConfigData.processID', this.process.processID);
        this.createEntitySource(this.process);
    }

    async getProcessByID(orgID: number, processID: number, isLatest: boolean) {
        this.process = await this.processService.getProcessByID(orgID, processID, isLatest);
        this.createEntitySource(this.process);
    }

    dataInputMethodChange(dataInputMethodKeyID: DataInputMethodKeyIDEnum) {
        if (dataInputMethodKeyID == DataInputMethodKeyIDEnum.METER_READING) {
            this.isMeterReading = true;
            this.addMeterRolloverValidator();
        } else {
            this.isMeterReading = false;
            this.removeMeterRolloverValidator();
        }
    }

    addMeterRolloverValidator() {
        this.activityConfigDataAC.get('meterRolloverValue').setValidators([Validators.required, Validators.min(0)]);
        this.activityConfigDataAC.get('meterRolloverUnitID').setValidators([Validators.required]);
        this.activityConfigDataAC.get('meterRolloverValue').updateValueAndValidity();
        this.activityConfigDataAC.get('meterRolloverUnitID').updateValueAndValidity();
    }

    removeMeterRolloverValidator() {
        this.activityConfigDataAC.get('meterRolloverValue').reset();
        this.activityConfigDataAC.get('meterRolloverUnitID').reset();
        this.activityConfigDataAC.get('meterRolloverValue').clearValidators();
        this.activityConfigDataAC.get('meterRolloverUnitID').clearValidators();
        this.activityConfigDataAC.get('meterRolloverValue').updateValueAndValidity();
        this.activityConfigDataAC.get('meterRolloverUnitID').updateValueAndValidity();
    }

    patchControl(formGroup: FormGroup, controlPath: string, value: any) {
        formGroup.get(controlPath).patchValue(value);
    }

    createEntitySource(process: any) {
        let inputOutput: any;
        let coProduct: any;
        let finishProduct: any;

        this.entity = [];

        switch (this.activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT: {
                inputOutput = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM &&
                    output.entitySource.some(source =>
                        source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.VENTED_OR_FLARED ||
                        source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_TO_NON_CBAM_INSTALLATION ||
                        source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_TO_CBAM_INSTALLATION
                    ))?.entitySource;
                break;
            }
            case ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT: {
                let entityID: any = null;
                entityID = [...new Set(process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT)
                    ?.entitySource.filter(entity => entity.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS)
                    ?.map(entity => entity.entityID)) ?? []];

                if (entityID?.length > 0) {
                    inputOutput = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT)
                        .entities.filter(entity => entityID.includes(entity.id));
                }

                break;
            }
            case ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT: {
                let entityID: any = null;

                entityID = [...new Set(process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT)
                    ?.entitySource.filter(entity => entity.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS)
                    ?.map(entity => entity.entityID)) ?? []];

                if (entityID?.length > 0) {
                    inputOutput = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT)
                        .entities.filter(entity => entityID.includes(entity.id));
                }

                break;
            }
            case ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL: {
                this.entityTypeLabel = 'Product';

                coProduct = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT)?.entities;
                finishProduct = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT)?.entities;

                if (coProduct) {
                    inputOutput = coProduct;
                    this.entityTypeLabel = 'Co-product';
                } else if (finishProduct) {
                    inputOutput = finishProduct;
                    this.entityTypeLabel = 'Finished Product';
                } else {
                    inputOutput = null;
                    this.entityTypeLabel = 'Product';
                }

                break;
            }
        }

        if (inputOutput) {
            this.entity = inputOutput;

            // if (this.entityActivity.includes(this.activityKeyID)) {
            //     this.entity = inputOutput.entities;
            // } else if (this.entitySourceActivity.includes(this.activityKeyID)) {
            //     this.entity = inputOutput.entitySource;
            // }
        } else {
            this.entity = [];
            this.patchControl(this.activityConfigFG, 'activityConfigData.processID', null);
            this.toastrService.error(this.noEntityFoundError);
        }
    }

    setEntityTypeLabel(activityKeyID: ActivityKeyIDEnum) {
        switch (activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT:
                this.entityTypeLabel = 'Waste Gas Source';
                this.noEntityFoundError = 'Waste gas output is not found in this process';
                break;
            case ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT:
                this.entityTypeLabel = 'Precursor Source';
                this.noEntityFoundError = 'No precursor is exported from this process';
                break;
            case ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT:
                this.entityTypeLabel = 'Intermediate Product';
                this.noEntityFoundError = 'No intermediate product is exported from this process';
                break;
            case ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL:
                this.entityTypeLabel = 'Product';
                this.noEntityFoundError = 'No co-product or finished product is produced from this process';
                break;
        }
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
            processID: activityConfigData.process.id,
            processRecordID: activityConfigData.process.recordID,
            dataInputMethodStdID: activityConfigData.dataInputMethod.id,
            meterRolloverValue: activityConfigData.meterRollover?.value,
            meterRolloverUnitID: activityConfigData.meterRollover?.unit.unitID,
        });

        this.dataInputMethodChange(activityConfigData.dataInputMethod.keyID);
        this.getProcessByID(this.currentOrgID, activityConfigData.process.id, false);

        this.updateInitialObject();
    }
}
