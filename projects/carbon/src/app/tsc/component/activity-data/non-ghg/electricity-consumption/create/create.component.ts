import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';
import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';
import { TSCCommonService } from '@library/tsc-common';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-electricity-consumption-activity-data-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})

export class ElectricityConsumptionActivityDataCreateComponent implements OnInit {
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    activityConfig: any;
    dataInputMethoutKeyID: any = null;
    defaultDataCollectionMethodID: number;
    activityData: any;

    activityKeyID: ActivityKeyIDEnum;

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    activityDataFG: FormGroup;

    docFileList: File[] = null;

    constructor(
        private formBuilder: FormBuilder,
        private tscCommonService: TSCCommonService,
        private dataCollectionMethodService: DataCollectionMethodService,
        activatedRoute: ActivatedRoute,
    ) { 
        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
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

    isValidForm(): boolean {
        if (this.activityDataFG.invalid) {
            this.activityDataFG.markAllAsTouched();
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.value));

        return true;
    }

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    getActivityData() {
        return {
            'activityData': this.mapDataAccordingToActivity(),
            'activityDataFile': this.docFileList
        }
    }

    updateActivityData() {
        return this.mapDataAccordingToActivity()[0];
    }

    mapDataAccordingToActivity() {
        let dataArr = [];
        let activityData = this.activityDataFG.getRawValue().activityData as Array<any>;
        activityData.forEach((data) => {
            dataArr.push(this.mapData(data, this.activityKeyID));
        });

        return dataArr;
    }

    mapData(oldData: { [key: string]: any }, activityKeyID: string): { [key: string]: any } {
        const {
            energyConsumed,
            energyConsumedUnitID,
            ...rest
        } = oldData; // Destructure the properties that need to be renamed

        if (activityKeyID == ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION) {
            return {
                electricityConsumed: energyConsumed,
                electricityConsumedUnitID: energyConsumedUnitID,
                ...rest, // Spread the rest of the properties back into the new object
            };
        } else {
            return {
                heatConsumed: energyConsumed, 
                heatConsumedUnitID: energyConsumedUnitID,
                ...rest, // Spread the rest of the properties back into the new object
            };
        }
    }

    async getConfiguration(configuration) {
        this.activityConfig = configuration;

        if (configuration != null) {
            let activityConfigData = configuration.activityConfigData;

            this.dataInputMethoutKeyID = activityConfigData.dataInputMethod.keyID;
            this.docFileList = new Array(1).fill(null);
        }
    }
}
