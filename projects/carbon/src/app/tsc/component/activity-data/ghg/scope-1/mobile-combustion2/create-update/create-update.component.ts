import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { FuelDistanceTravelledComponent } from './fuel-distance-travelled/fuel-distance-travelled.component';
import { FuelOdometerReadingComponent } from './fuel-odometer-reading/fuel-odometer-reading.component';
import { PriceDistanceTravelledComponent } from './price-distance-travelled/price-distance-travelled.component';
import { PriceOdometerReadingComponent } from './price-odometer-reading/price-odometer-reading.component';

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

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild(FuelDistanceTravelledComponent) fuelDistanceTravelledComponent: FuelDistanceTravelledComponent;
    @ViewChild(FuelOdometerReadingComponent) fuelOdometerReadingComponent: FuelOdometerReadingComponent;
    @ViewChild(PriceDistanceTravelledComponent) priceDistanceTravelledComponent: PriceDistanceTravelledComponent;
    @ViewChild(PriceOdometerReadingComponent) priceOdometerReadingComponent: PriceOdometerReadingComponent;
    activityKeyID: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private dataInputMethodService: DataInputMethodService,
        public vehicleService: VehicleService,
        private activityService: ActivityService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.data.subscribe((routeData) => {
            this.activityKeyID = routeData.activityKeyID;
            this.getActivityID(this.activityKeyID)
            this.action = routeData['action'];
            if (this.action == 'create') {
                this.getAllDataInputMethodList();
                this.isUpdate = (this.action == 'update');
            }
        });
        this.getAllVehicle();
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

    async getActivityID(activityKeyID) {
        let allActivity = await <any>this.activityService.getAllActivityNew()
        allActivity.forEach(activity => {
            if (activity.keyID == activityKeyID) {
                this.activityID = activity.id;
            }
        });
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

}
