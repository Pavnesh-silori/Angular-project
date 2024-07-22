import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TotalAmountComponent } from './total-amount/total-amount.component';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';

import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styles: []
})
export class CreateUpdateComponent implements OnInit {

    activityDataFG: FormGroup
    activityConfig: any;
    activityData: any;

    dataInputMethoutStdKeyID: any;
    defaultDataCollectionMethodID: number;

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    docFileList: any[];
    isUpdate: boolean = true;

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('TotalAmountComponent') TotalAmountComponent: TotalAmountComponent;

    constructor(
        private formBuilder: FormBuilder,
        private dataCollectionMethodService: DataCollectionMethodService,
    ) { }

    ngOnInit(): void {
        this.activityDataFG = this.formBuilder.group({
            activityDataDetails: this.formBuilder.array([])
        });

        this.getDataCollectionMethod();
    }

    async getDataCollectionMethod() {
        let dataCollectionMethods = await this.dataCollectionMethodService.getDataCollectionMethod()
        let manual_entry = dataCollectionMethods.find(dcm => dcm.keyID == DataCollectionMethodKeyIDEnum.MANUAL_ENTRY);
        this.defaultDataCollectionMethodID = manual_entry.dataCollectionMethodID;
    }

    async getConfiguration(configuration) {
        this.activityConfig = configuration;
        this.dataInputMethoutStdKeyID = this.activityConfig.activityConfigData.dataInputMethod.keyID;
        if (this.activityConfig != null && this.activityConfig.activityConfigData.dataInputMethod.keyID) {
            if (!this.isUpdate) {
                let activityConfigSource = configuration.activityConfigSource;
                this.docFileList = new Array(activityConfigSource[0].source.length).fill(null);
            } else {
                this.docFileList = new Array(1).fill(null);
            }
        }
    }

    isValidForm(): boolean {
        if (this.activityDataFG.invalid) {
            this.activityDataFG.markAllAsTouched();
            console.log('invalid form -', this.activityDataFG);
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.value.activityDataDetails));
        return true;
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

}
