import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';

import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';

/* tsc-library */
import { ToastrService } from '@library/toastr-service';
import { TSCCommonService } from '@library/tsc-common';
/* tsc-library */

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class FuelConsumptionActivityDataCreateComponent implements OnInit {
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    activityConfig: any;
    dataInputMethoutStdKeyID: any = null;

    activityData: any;
    activityDataFG: FormGroup;
    defaultDataCollectionMethodID: number;

    docFileList: any[];
    currentDataComponent: any = null;

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild(TotalAmountComponent) totalAmountComponent!: TotalAmountComponent;
    @ViewChild(MeterReadingComponent) meterReadingComponent!: MeterReadingComponent;

    action: string = null;
    isUpdate: boolean = false;
    haveMultipleSource: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        private tscCommonService: TSCCommonService,
        private dataCollectionMethodService: DataCollectionMethodService,
        activatedRoute: ActivatedRoute,
    ) {
        activatedRoute.queryParams.subscribe(qParams => {
            this.action = qParams['action'];
            this.isUpdate = (this.action == 'update');
        });
    }

    ngOnInit(): void {
        this.activityDataFG = this.formBuilder.group({
            activityData: this.formBuilder.array([])
        });

        this.getDataCollectionMethod();
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityData') as FormArray;
    }

    ngAfterViewInit() { }

    getConfiguration(configuration) {
        if (configuration != null) {
            this.activityConfig = configuration;
            let activityConfigData = configuration.activityConfigData;
            this.dataInputMethoutStdKeyID = activityConfigData.dataInputMethod.keyID;

            if (this.isUpdate) {
                this.docFileList = new Array(1).fill(null);
            } else {
                let activityConfigSource = configuration.activityConfigSource;
                this.docFileList = new Array(activityConfigSource[0].source.length).fill(null);
                this.haveMultipleSource = (activityConfigSource[0].source.length > 1);
            }
        }
    }

    async getDataCollectionMethod() {
        let dataCollectionMethods = await this.dataCollectionMethodService.getDataCollectionMethod()

        let manual_entry = this.tscCommonService.getUniqueObject(dataCollectionMethods, 'keyID', DataCollectionMethodKeyIDEnum.MANUAL_ENTRY);
        this.defaultDataCollectionMethodID = manual_entry.dataCollectionMethodID;
    }

    excluded_controls: string[] = [
        'sourceID',
        'sourceName',
        'sourceTypeID',
        'activityID',
        'activityKeyID',
        'fuelName',
        'dateRange',
        'dataCollectionMethodID',
        'meterUnitID'
    ];

    haveValue(formGroup: FormGroup) {
        for (let control in formGroup.controls) {
            if (!this.excluded_controls.includes(control)) {
                let value = formGroup.get(control).value;

                if (control == 'oxidationFactor' || control == 'biomassPct') {
                    if (control == 'oxidationFactor' && value !== CARBON_CONSTANT.DEFAULT_OXIDATION_FACTOR) {
                        return true;
                    }
                    if (control == 'biomassPct' && value !== CARBON_CONSTANT.DEFAULT_BIOMASS_PCT) {
                        return true;
                    }
                } else if ((value ?? false)) {
                    return true;
                }
            }
        }
        return false;
    }

    isAnyRowFilled(): boolean {
        for (let i = 0; i < this.activityDataFA.controls.length; ++i) {
            let formGroup = this.activityDataFA.get(`${i}`) as FormGroup;
            if (this.haveValue(formGroup)) return true;
        }

        return false;
    }

    setDateInputError() {
        this.currentDataComponent =
            (this.dataInputMethoutStdKeyID == DataInputMethodKeyIDEnum.METER_READING) ? this.meterReadingComponent : this.totalAmountComponent;

        if (!this.haveMultipleSource) {
            this.currentDataComponent.customDateInputs.toArray()[0].daterange.markAsTouched();
            return;
        }

        for (let i = 0; i < this.activityDataFA.controls.length; ++i) {
            let formGroup = this.activityDataFA.get(`${i}`) as FormGroup;
            if (this.haveValue(formGroup)) {
                this.currentDataComponent.customDateInputs.toArray()[i].daterange.markAsTouched();
            } else {
                this.currentDataComponent.customDateInputs.toArray()[i].daterange.markAsUntouched();
            }
        }
    }

    isValidForm(): boolean {
        if (this.haveMultipleSource) {
            let isAnyRowFilled: boolean = this.isAnyRowFilled();
            if (!isAnyRowFilled) {
                this.toastrService.error('Fill atleast one data row!');
                return false;
            }
        }

        if (this.activityDataFG.invalid) {
            this.setDateInputError();
            this.activityDataFG.markAllAsTouched();
            console.error('invalid form -', this.activityDataFG);
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.getRawValue()));

        return true;
    }

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    getActivityDataToPost(): [any[], any[]] {
        let dataToPost = [];
        let docListToPost = [];
        let postJson: [any[], any[]] = [dataToPost, docListToPost]
        for (let i = 0; i < this.activityDataFA.controls.length; ++i) {
            let formGroup = this.activityDataFA.get(`${i}`) as FormGroup;
            if (this.haveValue(formGroup)) {
                docListToPost.push(this.docFileList[i]);
                dataToPost.push(formGroup.getRawValue());
            }
        }

        return postJson;
    }

    getActivityData() {
        let postJson = this.getActivityDataToPost();
        return {
            'activityData': postJson[0],
            'activityDataFile': postJson[1]
        }
    }

    updateActivityData() {
        return this.activityData.activityData[0];
    }
}

