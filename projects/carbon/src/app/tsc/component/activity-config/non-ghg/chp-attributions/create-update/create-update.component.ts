import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatDatepicker } from '@angular/material/datepicker';

import { isEqual } from 'lodash';
import { Moment } from 'moment-timezone';

import { environment } from 'src/environments/environment';

import { ActivityConfig } from '@carbon/component/activity-config/activity-config';

import { DataInputMethod } from '@carbon/enum/data-input-method.enum';
import { HeatTransferMediumKeyIDEnum } from '@carbon/enum/cbam.enum';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';

import { AssetService } from '@carbon/service/asset.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';

// tsc-library
import { DateService } from '@library/date';
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, LookupService, LookupValueM, MatSelectSearchService } from '@library/tsc-common';
// /tsc-library/

const carbon_lookup_url = environment.CARBON_ACCOUNTING_API_URL;
@Component({
    selector: 'app-create',
    templateUrl: './create-update.component.html',
    styles: []
})
export class CreateUpdateComponent extends ActivityConfig implements OnInit {

    currentOrgID: any;
    origin: any;

    ActivityConfigEnum = ActivityConfigEnum;

    COMMON_CONSTANT = COMMON_CONSTANT

    allAssests: any;
    assestSearchUtil: MatSelectSearchService = new MatSelectSearchService(['assetName']);

    date: Date = new Date();

    heatMedium: any[];
    steam: any;
    exhaustGases: any;

    dataInputMethodList: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private assetService: AssetService,
        private dataInputMethodService: DataInputMethodService,
        private lookupService: LookupService,
        private storageService: StorageService,
        public dateService: DateService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.queryParams.subscribe(queryParams => {
            if (queryParams.activityID) {
                this.activityID = queryParams.activityID;
                this.origin = queryParams.origin;
            }
        });

        this.activatedRoute.data.subscribe(data => {
            this.activityKeyID = data.activityKeyID;
        });

        this.formGroupInit();
        this.getAllAsset();
        this.getHeatMedium();
        this.getDataInputMethodList(this.activityID)
    }

    formGroupInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: [this.activityID, Validators.required],
                activityKeyID: [this.activityKeyID, Validators.required],
                configName: [, Validators.required],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                heatTransferMediumID: [, Validators.required],
                yearOfConstruction: [, Validators.required],
                isCondensateReturn: [, Validators.required],
                isTemprature250orHigh: [, Validators.required],
                dataInputMethodStdID: [, Validators.required]
            }),
            activityConfigSource: this.formBuilder.array([])
        });
        this.createFormGroup();
    }

    createFormGroup() {
        this.activityConfigSourceFA.push(
            this.formBuilder.group({
                sourceID: [[]],
                sourceTypeID: null
            })
        );
    }

    setSourceTypeID(data) {
        this.activityConfigFG.get('activityConfigSource').get([0]).get('sourceTypeID').patchValue(data.sourceTypeID, { emitEvent: false });
    }

    get activityConfigSourceFA(): FormArray {
        return this.activityConfigFG.get('activityConfigSource') as FormArray;
    }

    async getAllAsset() {
        this.allAssests = await this.assetService.getAllAsset(this.currentOrgID);
        this.assestSearchUtil.entityArr = this.allAssests;
        this.assestSearchUtil.createSubscription();
    }

    yearDateInput(selectedDate: Moment, datepicker: MatDatepicker<Moment>) {
        let duration = this.dateService.handleDateInput(selectedDate, datepicker, "YYYY");
        this.activityConfigFG.get('activityConfigData.yearOfConstruction').patchValue(duration);
    }

    async getHeatMedium() {
        let requestBody = [
            {
                lookupCode: ['heat-extraction-method'],
                lookupKey: []
            }
        ];
        this.heatMedium = <LookupValueM[]>await this.lookupService.getLookup(carbon_lookup_url, requestBody);

        this.activityConfigFG.get('activityConfigData.heatTransferMediumID').valueChanges.subscribe(value => {
            this.updateValidators(value);
        });
    }

    updateValidators(heatTransferMediumKeyID: string): void {
        this.steam = this.heatMedium.find(medium => medium.id === heatTransferMediumKeyID)?.keyID === HeatTransferMediumKeyIDEnum.STEAM;
        this.exhaustGases = this.heatMedium.find(medium => medium.id === heatTransferMediumKeyID)?.keyID === HeatTransferMediumKeyIDEnum.DIRECT_USE_OF_EXHAUST_GASES;

        const isCondensateReturnControl = this.activityConfigFG.get('activityConfigData.isCondensateReturn');
        const isTemprature250orHighControl = this.activityConfigFG.get('activityConfigData.isTemprature250orHigh');

        if (this.steam) {
            isCondensateReturnControl.setValidators([Validators.required]);
            isTemprature250orHighControl.clearValidators();
            isTemprature250orHighControl.reset();
        } else if (this.exhaustGases) {
            isTemprature250orHighControl.setValidators([Validators.required]);
            isCondensateReturnControl.clearValidators();
            isCondensateReturnControl.reset();
        } else {
            isCondensateReturnControl.clearValidators();
            isCondensateReturnControl.reset();
            isTemprature250orHighControl.reset();
            isTemprature250orHighControl.clearValidators();
        }

        isCondensateReturnControl.updateValueAndValidity();
        isTemprature250orHighControl.updateValueAndValidity();
    }

    async getDataInputMethodList(id) {
        this.dataInputMethodList = await this.dataInputMethodService.getDataInputMethodByActivityAndType(id, DataInputMethod.STANDARD);
        this.activityConfigFG.get('activityConfigData.dataInputMethodStdID').patchValue(this.dataInputMethodList[0].id);
    }

    patchConfiguration(configuration: any) {
        let activityConfig = (configuration.activityConfig != null ? configuration.activityConfig : null);
        let activityConfigData = configuration.activityConfigData;
        let activityConfigSource = configuration.activityConfigSource;

        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig.configName
            });
        } else {
            this.readOnlyForm();
        }

        this.activityConfigDataAC.patchValue({
            heatTransferMediumID: activityConfigData.heatTransferMedium.id,
            yearOfConstruction: activityConfigData.yearOfConstruction,
            isCondensateReturn: activityConfigData.isCondensateReturn,
            isTemprature250orHigh: activityConfigData.isTemprature250orHigh,
        });

        this.activityConfigSourceFA.clear();

        if (activityConfig != null) {
            activityConfigSource.forEach((source: any) => {
                this.activityConfigSourceFA.push(
                    this.formBuilder.group({
                        sourceID: [source.sourceID[0]],
                        sourceTypeID: source.sourceTypeID
                    })
                );
            });
        } else {
            const source = configuration.source;
            this.activityConfigSourceFA.push(
                this.formBuilder.group({
                    sourceID: [source.source.id],
                    sourceTypeID: source.sourceType.id
                })
            );
            this.readOnlyForm();
        }

        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });
        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }

    errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
        const activityConfigSourceFA = this.activityConfigFG.get('activityConfigSource') as FormArray;
        const formGroup = activityConfigSourceFA.at(index) as FormGroup;
        return formGroup.get(control).hasError(error);
    }
}
