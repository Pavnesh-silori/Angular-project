import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TotalAmountComponent } from './total-amount/total-amount.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';

import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';

// tsc-library
import { TSCCommonService } from '@library/tsc-common';
import { ActivatedRoute } from '@angular/router';
// / tsc-library

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})
export class WasteGasExportCreateComponent implements OnInit {

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    activityConfig: any;
    dataInputMethoutStdKeyID: any = null;

    activityData: any;
    activityDataFG: FormGroup;
    defaultDataCollectionMethodID: number;

    docFileList: any[] = [];

    isUpdate: boolean = false;
    action: string = null;

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild(TotalAmountComponent) totalAmountComponent!: TotalAmountComponent;
    @ViewChild(MeterReadingComponent) meterReadingComponent!: MeterReadingComponent;

    constructor(
        private formBuilder: FormBuilder,
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

    async getDataCollectionMethod() {
        let dataCollectionMethods = await this.dataCollectionMethodService.getDataCollectionMethod()

        let manual_entry = this.tscCommonService.getUniqueObject(dataCollectionMethods, 'keyID', DataCollectionMethodKeyIDEnum.MANUAL_ENTRY);
        this.defaultDataCollectionMethodID = manual_entry.dataCollectionMethodID;
    }

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    getActivityData() {
        return {
            'activityData': this.activityData.activityData,
            'activityDataFile': this.docFileList
        }
    }

    updateActivityData() {
        return this.activityData.activityData[0];
    }

    async getConfiguration(configuration) {
        if (configuration != null) {
            this.activityConfig = configuration;
            let activityConfigData = configuration.activityConfigData;
            this.dataInputMethoutStdKeyID = activityConfigData.dataInputMethod.keyID;
            if (this.isUpdate) {
                this.docFileList = new Array(1).fill(null);
            } else {
                let activityConfigSource = configuration.activityConfigSource;
                this.docFileList = new Array(activityConfigSource[0].source.length).fill(null);
            }
        }
    }

    onChildFormGroupChange(formGroup: FormGroup) {
        // Use the child component's FormGroup here
        this.activityDataFG = formGroup;
    }

    isValidForm(): boolean {
        if (this.activityDataFG.invalid) {
            this.activityDataFG.markAllAsTouched();
            return false;
        }
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.getRawValue()));
        return true;
    }
}
