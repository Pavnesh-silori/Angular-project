import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { PROCESS_OUTPUT_ENUM, PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';
import { PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM } from '@netzero/enum/process.enum';

import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';
import { ProcessService } from '@carbon/service/process.service';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';

// lib
import { StorageService } from '@library/storage-service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@library/toastr-service';
// lib /

@Component({
    selector: 'app-create',
    templateUrl: './create-update.component.html',
    styles: []
})
export class CreateUpdateComponent implements OnInit {

    currentOrgID: any;
    activityData: any;

    activityDataFG: FormGroup
    activityConfig: any;

    dataInputMethoutStdKeyID: any;
    defaultDataCollectionMethodID: number;

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;
    ActivityKeyIDEnum = ActivityKeyIDEnum;

    docFileList: any[];
    action: any;
    activityID: any;
    activityKeyID: any;

    allProcess: any;
    entity: any;
    sourceTypeID: any;

    excluded_controls: string[] = [
        'sourceID',
        'sourceName',
        'sourceTypeID',
        'activityID',
        'activityKeyID',
        'dateRange',
        'dataCollectionMethodID',
        'meterUnitID'
    ];

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    @ViewChild('MeterReadingComponent') MeterReadingComponent: MeterReadingComponent;
    @ViewChild('TotalAmountComponent') TotalAmountComponent: TotalAmountComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private formBuilder: FormBuilder,
        private dataCollectionMethodService: DataCollectionMethodService,
        private processService: ProcessService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam.action;
            this.activityID = queryParam.activityID;
            this.activityKeyID = this.activatedRoute.snapshot.data.activityKeyID;
        });
        this.activityDataFG = this.formBuilder.group({
            activityDataDetails: this.formBuilder.array([])
        });

        this.getDataCollectionMethod();
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityDataDetails') as FormArray;
    }

    async getDataCollectionMethod() {
        let dataCollectionMethods = await this.dataCollectionMethodService.getDataCollectionMethod();
        let manual_entry = dataCollectionMethods.find(dcm => dcm.keyID == DataCollectionMethodKeyIDEnum.MANUAL_ENTRY);
        this.defaultDataCollectionMethodID = manual_entry.dataCollectionMethodID;
    }

    async getConfiguration(configuration) {
        this.activityConfig = configuration;
        if (this.action == 'create') {
            let processID = this.activityConfig.activityConfigData.process.recordID;
            this.allProcess = await this.getProcess(processID);
            for (let i = 0; i < this.allProcess.output.length; i++) {
                const res = this.allProcess.output[i];
                if (res.sourceTypeID != null) {
                    this.sourceTypeID = res.sourceTypeID;
                    break;
                }
            }
            this.createEntitySource(this.activityKeyID);
            this.docFileList = new Array(this.entity.length).fill(null);
        }
        this.dataInputMethoutStdKeyID = this.activityConfig.activityConfigData.dataInputMethod.keyID;
    }

    createEntitySource(process: any) {
        process = this.allProcess;
        let inputOutput: any;
        let coProduct: any;
        let finishProduct: any;

        switch (this.activityKeyID) {
            case this.ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT: {
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
            case this.ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT: {
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
            case this.ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL: {

                coProduct = this.allProcess.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT)?.entities;
                finishProduct = this.allProcess.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT)?.entities;

                // coProduct = coProduct?.entities;
                // finishProduct = finishProduct?.en

                if (coProduct) {
                    inputOutput = coProduct;
                } else if (finishProduct) {
                    inputOutput = finishProduct;
                } else {
                    inputOutput = null;
                }

                break;
            }
            case this.ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION: {
                inputOutput = process.input.find(input => input.type.keyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT)?.entities;
            }
        }

        if (inputOutput) {
            this.entity = inputOutput;
        } else {
            this.entity = [];
        }

    }

    async getProcess(processID: number) {
        let process = await this.processService.getProcessByID(this.currentOrgID, processID, true);

        return process;
    }

    isValidForm(): boolean {
        let isAnyRowFilled: boolean = this.isAnyRowFilled();
        if (!isAnyRowFilled) {
            this.toastrService.error('Fill atleast one data row!');
            return false;
        }

        if (this.activityDataFG.invalid) {
            this.activityDataFG.markAllAsTouched();
            return false;
        }
        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.value.activityDataDetails));
        return true;
    }

    isAnyRowFilled(): boolean {
        for (let i = 0; i < this.activityDataFA.controls.length; ++i) {
            let formGroup = this.activityDataFA.get(`${i}`) as FormGroup;
            if (this.haveValue(formGroup)){
                return true;
            }
        }

        return false;
    }

    haveValue(formGroup: FormGroup) {
        for (let control in formGroup.controls) {
            if (!this.excluded_controls.includes(control)) {
                let value = formGroup.get(control).value;
                if ((value ?? false)) {
                    return true;
                }
            }
        }
        return false;
    }

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    getActivityData() {
        return {
            'activityData': this.activityData,
            'activityDataFile': this.docFileList
        }
    }

    updateActivityData() {
        return this.activityData[0];
    }


    validFields;
    validationSubscriptionInit: boolean = true;


    setValidFields(event) {
        this.validFields = event;
        if (this.validationSubscriptionInit) {
            this.validationSubscriptionInit = false;
            this.initFormValidation();
        }
    }

    initFormValidation() {
        this.activityDataFA.valueChanges.subscribe(() => {
            this.activityDataFA.controls.forEach((formGroup: FormGroup) => {
                if (this.haveValue(formGroup)) this.addValidationToGroup(formGroup);
                else this.removeValidationFromGroup(formGroup);
            })
        });
    }

    addValidationToGroup(formGroup: FormGroup) {
        for (let control of this.validFields) {
            formGroup.get(control).addValidators([Validators.required]);
            formGroup.get(control).updateValueAndValidity({ emitEvent: false });
        }
    }

    removeValidationFromGroup(formGroup: FormGroup) {
        for (let control in formGroup.controls) {
            formGroup.get(control).removeValidators([Validators.required]);
            formGroup.get(control).updateValueAndValidity({ emitEvent: false });
        }
    }

}