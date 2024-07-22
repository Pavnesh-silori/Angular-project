import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { EnergyConsumedComponent } from './_templates/energy-consumed/energy-consumed.component';
import { MeterReadingComponent } from './_templates/meter-reading/meter-reading.component';
import { HhvEnergyConsumedComponent } from './_templates/hhv-energy-consumed/hhv-energy-consumed.component';
import { HhvMeterReadingComponent } from './_templates/hhv-meter-reading/hhv-meter-reading.component';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { DataInputMethodService } from '@carbon/service/data-input-method.service';

//library
import { StorageService } from '@library/storage-service';
import { AssetService } from '@carbon/service/asset.service';
import { ActivityService } from '@carbon/service/activity.service';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { PreferenceService } from '@carbon/service/preference.service';
/// library

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})
export class CreateComponent implements OnInit {

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    currentOrgID: any;

    activityDataFG: FormGroup;
    activityData: any;

    activityConfig: any;
    dataInputMethodKeyID: any;
    fuelMonitorDataInputMethodKeyID: any;

    dataInputMethodList: any[] = [];
    action: any;

    updateFlag = false;
    docFileList: any[] = [];

    getAllSource: any[] = [];

    allActivities: any[];
    activity: any;
    activityID: number;

    component: any;
    isUpdate: boolean = false;

    emissionFactorDatabaseID: number = null;
    emissionFactorDatabaseKeyID: string = null;
    sector: string = null;

    @ViewChild(EnergyConsumedComponent) energyConsumedComponent: EnergyConsumedComponent;
    @ViewChild(MeterReadingComponent) meterReadingComponent: MeterReadingComponent;
    @ViewChild(HhvEnergyConsumedComponent) hhvEnergyConsumedComponent: HhvEnergyConsumedComponent;
    @ViewChild(HhvMeterReadingComponent) hhvMeterReadingComponent: HhvMeterReadingComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private dataInputMethodService: DataInputMethodService,
        private assetService: AssetService,
        private activityService: ActivityService,
        private preferenceService: PreferenceService,
    ) { }

    ngOnInit(): void {

        this.currentOrgID = parseInt(this.storageService.getStorage(['currentOrgID']));

        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam['action'];
            this.activityID = queryParam['activityID'];
            if (this.action == 'create') {
                this.getAllDataInputMethodList();
                this.getAllAsset();
                this.isUpdate = (this.action == 'update');
            }
        });

        this.getOrgPreference();
    }

    async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivities = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(ActivityKeyIDEnum.STATIONARY_COMBUSTION, this.allActivities);
        this.activityID = this.activity.id;
    }

    async getAllAsset() {
        this.getAllSource = await this.assetService.getAllAsset(this.currentOrgID);
    }

    onChildFormGroupChange(formGroup: FormGroup) {
        // Use the child component's FormGroup here
        this.activityDataFG = formGroup;
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

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    async getConfiguration(configuration) {
        if (this.dataInputMethodList.length == 0) {
            await this.getAllDataInputMethodList();
        }
        this.activityConfig = configuration;
        if (configuration != null && configuration['activityConfigData']['dataInputMethodID'] != null && configuration['activityConfigData']['fuelMonitorDataInputMethodID']) {
            const dataInputMethod = this.dataInputMethodList.find(item => item.id === configuration['activityConfigData']['dataInputMethodID']);
            const fuelEnergyMonitor = this.dataInputMethodList.find(item => item.id === configuration['activityConfigData']['fuelMonitorDataInputMethodID']);
            if (dataInputMethod) {
                this.dataInputMethodKeyID = dataInputMethod['keyID'];
            } if (fuelEnergyMonitor) {
                this.fuelMonitorDataInputMethodKeyID = fuelEnergyMonitor['keyID'];
            }
            else {
                console.log('dataInputMethodID not found');
            }

            if (this.isUpdate) {
                this.docFileList = new Array(1).fill(null);
            } else {
                let activityConfigSource = configuration.activityConfigSource;
                if (activityConfigSource.sourceID == null) {
                    this.docFileList = new Array(1).fill(null);
                } else {
                    this.docFileList = new Array(activityConfigSource.sourceID.length).fill(null);
                }
            }
        }
    }

    async getAllDataInputMethodList() {
        this.dataInputMethodList = await this.dataInputMethodService.getAllDataInputMethodList();
    }

    isValidForm(): boolean {
        if (this.dataInputMethodKeyID == DataInputMethodKeyIDEnum.TOTAL_AMOUNT
            && this.fuelMonitorDataInputMethodKeyID == DataInputMethodKeyIDEnum.ENERGY_GENERATED) {
            if (this.energyConsumedComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.energyConsumedComponent.activityData;
                return true;
            }
        } else if (this.dataInputMethodKeyID == DataInputMethodKeyIDEnum.METER_READING &&
            this.fuelMonitorDataInputMethodKeyID == DataInputMethodKeyIDEnum.ENERGY_GENERATED) {
            if (this.meterReadingComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.meterReadingComponent.activityData;

                return true;
            }
        } else if (this.dataInputMethodKeyID == DataInputMethodKeyIDEnum.TOTAL_AMOUNT &&
            this.fuelMonitorDataInputMethodKeyID == DataInputMethodKeyIDEnum.FUEL_CONSUMPTION) {
            if (this.hhvEnergyConsumedComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.hhvEnergyConsumedComponent.activityData;

                return true;
            }
        } else if (this.dataInputMethodKeyID == DataInputMethodKeyIDEnum.METER_READING &&
            this.fuelMonitorDataInputMethodKeyID == DataInputMethodKeyIDEnum.FUEL_CONSUMPTION) {
            if (this.hhvMeterReadingComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.hhvMeterReadingComponent.activityData;

                return true;
            }
        } else {
            return false;
        }
    }

    async getOrgPreference() {
        let preference = await this.preferenceService.getOrgPreference(this.currentOrgID);
        if (preference.preferenceID != null) {
            let activity = preference.activity.find(item => item.activityID == this.activityID);

            if (activity) {
                let calculationApproach = activity.calculationApproach.length > 0 ? activity.calculationApproach[0] : null;
                if(calculationApproach) {
                    let emissionFactorSource = calculationApproach.emissionFactorSource.find(ef => ef.id == calculationApproach.emissionFactorSourceID);
                    if(emissionFactorSource) {
                      this.emissionFactorDatabaseID = emissionFactorSource.id;
                      this.emissionFactorDatabaseKeyID = emissionFactorSource.keyID;
                    }
                }
            }
        }
    }
}
