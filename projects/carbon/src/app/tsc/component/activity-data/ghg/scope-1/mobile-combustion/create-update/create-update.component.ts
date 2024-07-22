import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { FuelDistanceTravelledComponent } from './fuel-distance-travelled/fuel-distance-travelled.component';
import { FuelOdometerReadingComponent } from './fuel-odometer-reading/fuel-odometer-reading.component';
import { PriceDistanceTravelledComponent } from './price-distance-travelled/price-distance-travelled.component';
import { PriceOdometerReadingComponent } from './price-odometer-reading/price-odometer-reading.component';

import { PreferenceService } from '@carbon/service/preference.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';

// tsc-library
import { VehicleService } from '@library/netzero';
import { StorageService } from '@library/storage-service';
import { ActivityService } from '@carbon/service/activity.service';
// /tsc-library/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
})
export class CreateUpdateComponent implements OnInit {

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    //DIM: Data Input Method

    component: any;
    action: any;
    currentOrgID: any;
    activityData: any;
    activityConfig: any;
    dIMKeyID: any;
    fuelMonitorDIMKeyID: any;
    updateFlag: boolean = false;
    docFileList: any[] = [];
    allVechile: any[] = [];
    dIMList: any[] = [];
    activityID: any;
    activityDataFG: FormGroup;
    isUpdate: boolean = false;

    emissionFactorDatabaseID: number = null;
    emissionFactorDatabaseKeyID: string = null;

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild(FuelDistanceTravelledComponent) fuelDistanceTravelledComponent: FuelDistanceTravelledComponent;
    @ViewChild(FuelOdometerReadingComponent) fuelOdometerReadingComponent: FuelOdometerReadingComponent;
    @ViewChild(PriceDistanceTravelledComponent) priceDistanceTravelledComponent: PriceDistanceTravelledComponent;
    @ViewChild(PriceOdometerReadingComponent) priceOdometerReadingComponent: PriceOdometerReadingComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private dataInputMethodService: DataInputMethodService,
        public vehicleService: VehicleService,
        private activityService: ActivityService,
        private preferenceService: PreferenceService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getActivityID()
        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam['action'];
            this.activityID = queryParam['activityID'];

            if (this.action == 'create') {
                this.getAllDataInputMethodList();
                this.isUpdate = (this.action == 'update');

            }
        });

        this.getAllVehicle();
        this.getOrgPreference();
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

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    async getConfiguration(configuration) {
        if (this.dIMList.length == 0) {
            await this.getAllDataInputMethodList();
        }

        this.activityConfig = configuration;

        if (configuration != null && configuration.activityConfigData.distanceDataInputMethodID != null) {

            const dataInputMethod = this.dIMList.find(item => item.id == configuration.activityConfigData.distanceDataInputMethodID);
            const fuelEnergyMonitor = this.dIMList.find(item => item.id == configuration.activityConfigData.fuelDataInputMethodID);

            this.dIMKeyID = dataInputMethod.keyID;
            this.fuelMonitorDIMKeyID = fuelEnergyMonitor.keyID;
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

    async getAllDataInputMethodList() {
        this.dIMList = await this.dataInputMethodService.getAllDataInputMethodList();
    }

    onChildFormGroupChange(formGroup: FormGroup) {
        this.activityDataFG = formGroup;
    }

    async getAllVehicle() {
        this.allVechile = await this.vehicleService.getAllVehicle(this.currentOrgID);
    }

    async getActivityID() {
        let allActivity = await <any>this.activityService.getAllActivity();
        this.activityID = allActivity.find(activity => activity.keyID == ActivityKeyIDEnum.MOBILE_COMBUSTION).id;
    }

    isValidForm() {
        if (this.dIMKeyID == DataInputMethodKeyIDEnum.DISTANCE_TRAVELLED
            && this.fuelMonitorDIMKeyID == DataInputMethodKeyIDEnum.FUEL_AMOUNT) {
            if (this.fuelDistanceTravelledComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.fuelDistanceTravelledComponent.activityData;
                return true;
            }
        } else if (this.dIMKeyID == DataInputMethodKeyIDEnum.ODOMETER_READING
            && this.fuelMonitorDIMKeyID == DataInputMethodKeyIDEnum.FUEL_AMOUNT) {
            if (this.fuelOdometerReadingComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.fuelOdometerReadingComponent.activityData;
                return true;
            }
        } else if (this.dIMKeyID == DataInputMethodKeyIDEnum.DISTANCE_TRAVELLED
            && this.fuelMonitorDIMKeyID == DataInputMethodKeyIDEnum.PRICE_BASED_METHOD) {
            if (this.priceDistanceTravelledComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.priceDistanceTravelledComponent.activityData;
                return true;
            }
        } else if (this.dIMKeyID == DataInputMethodKeyIDEnum.ODOMETER_READING
            && this.fuelMonitorDIMKeyID == DataInputMethodKeyIDEnum.PRICE_BASED_METHOD) {
            if (this.priceOdometerReadingComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.priceOdometerReadingComponent.activityData;
                return true;
            }
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
