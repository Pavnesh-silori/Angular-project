import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuelController } from '@carbon/controller/fuel.controller';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';
import { StorageService } from '@library/storage-service';
import { CustomFuelController } from '@netzero/controller/cutom-fuel.controller';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-heat-electricity-export',
    templateUrl: './heat-electricity-export.component.html',
    styleUrls: ['./heat-electricity-export.component.scss']
})
export class HeatElectricityExportComponent implements OnInit {
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    currentOrgID: any;

    activityConfig: any;
    activityConfigSource: any;

    activityKeyID: string;

    dataInputMethoutStdKeyID: any = null;
    defaultDataCollectionMethodID: number;

    activityData: any;
    activityDataFG: FormGroup

    customFuel: any[];
    standardFuel: any[];

    docFileList: any[] = new Array(1).fill(null);

    constructor(
        storageService: StorageService,
        private formBuilder: FormBuilder,
        private dataCollectionMethodService: DataCollectionMethodService,
        private standardFuelController: FuelController,
        private customFuelController: CustomFuelController,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {
        this.activityDataFG = this.formBuilder.group({
            activityData: this.formBuilder.array([])
        });

        this.getFuels();
        this.getDataCollectionMethod();
    }

    ngAfterViewInit() {
    }

    getFuels() {
        forkJoin([
            this.customFuelController.getCustomFuels(this.currentOrgID),
            this.standardFuelController.getFuelStationaryCombustion()
        ]).subscribe(([res, res2]: any[]) => {
            this.customFuel = res;
            this.standardFuel = res2;
        });
    }

    patchActivityData(activityData) {
        this.activityData = this.mapDataToPatch(activityData, this.activityKeyID);
        console.log('this.activityData - ', this.activityData);

    }

    async getDataCollectionMethod() {
        let dataCollectionMethods = await this.dataCollectionMethodService.getDataCollectionMethod()
        let manual_entry = dataCollectionMethods.find(dcm => dcm.keyID == DataCollectionMethodKeyIDEnum.MANUAL_ENTRY);
        this.defaultDataCollectionMethodID = manual_entry.dataCollectionMethodID;
    }

    async getConfiguration(configuration) {
        this.activityConfig = configuration;
        if (configuration != null) {

            console.log('configuration - ', configuration);
            let activityConfigData = configuration.activityConfigData;
            this.activityConfigSource = configuration.activityConfigSource;

            this.activityKeyID = this.activityConfig.activityConfig.activityKeyID;

            this.dataInputMethoutStdKeyID = activityConfigData.dataInputMethodStdKeyID;
            console.log('this.dataInputMethoutStdKeyID - ', this.dataInputMethoutStdKeyID);
        }
    }

    isValidForm(): boolean {
        console.log('this.activityDataFG - ', this.activityDataFG);

        if (this.activityDataFG.invalid) {
            this.activityDataFG.markAllAsTouched();
            console.log('invalid form -', this.activityDataFG);
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.value.activityData));

        return true;
    }

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    getActivityData() {
        this.mapDataAccordingToActivity();

        return {
            'activityData': this.mapDataAccordingToActivity(),
            'activityDataFile': this.docFileList
        }
    }

    updateActivityData() {
        console.log('this.mapDataAccordingToActivity()[0] - ', this.mapDataAccordingToActivity()[0]);

        return this.mapDataAccordingToActivity()[0];
    }

    mapDataAccordingToActivity() {
        let dataArr = [];
        let activityData = this.activityDataFG.value.activityData as Array<any>;
        activityData.forEach((data) => {
            dataArr.push(this.mapData(data, this.activityKeyID));
        });

        return dataArr;
    }

    mapDataToPatch(oldData: { [key: string]: any }, activityKeyID: string): { [key: string]: any } {
        if (activityKeyID == ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT) {

            let {
                electricityExported,
                electricityExportedUnit,
                ...rest
            } = oldData; // Destructure the properties that need to be renamed

            return {
                energyExported: electricityExported, // Rename 'energyExported' to 'electricityExported'
                energyExportedUnit: electricityExportedUnit, // Rename 'energyExportedUnitID' to 'electricityExportedUnitID'
                ...rest, // Spread the rest of the properties back into the new object
            };
        } else {
            let {
                heatExported,
                heatExportedUnitID,
                ...rest
            } = oldData; // Destructure the properties that need to be renamed

            return {
                energyExported: heatExported, // Rename 'energyExported' to 'heatExported'
                energyExportedUnit: heatExportedUnitID, // Rename 'energyExportedUnitID' to 'heatExportedUnitID'
                ...rest, // Spread the rest of the properties back into the new object
            };
        }
    }

    mapData(oldData: { [key: string]: any }, activityKeyID: string): { [key: string]: any } {
        const {
            energyExported,
            energyExportedUnitID,
            ...rest
        } = oldData; // Destructure the properties that need to be renamed

        if (activityKeyID == ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT) {
            return {
                electricityExported: energyExported, // Rename 'energyExported' to 'electricityExported'
                electricityExportedUnitID: energyExportedUnitID, // Rename 'energyExportedUnitID' to 'electricityExportedUnitID'
                ...rest, // Spread the rest of the properties back into the new object
            };
        } else {
            return {
                heatExported: energyExported, // Rename 'energyExported' to 'heatExported'
                heatExportedUnitID: energyExportedUnitID, // Rename 'energyExportedUnitID' to 'heatExportedUnitID'
                ...rest, // Spread the rest of the properties back into the new object
            };
        }
    }

}

