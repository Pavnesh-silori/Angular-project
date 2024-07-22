import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { ActivityConfigService } from '@carbon/service/activity-config.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
// tsc-library 
import { StorageService } from '@library/storage-service';
import { VehicleService } from '@library/netzero';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { UnitService, UnitTypeKeyID } from "@library/unit-service";
// /tsc-library/
@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    currentOrgID: any;
    activityConfigID: number;
    activityKeyID: any;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;
    fuelInputMethod: any;
    distanceInputMethod: any;
    vechileName: any[] = [];
    vehicleType: any;

    @Input() activityConfigData: any;
    @Input() activityConfigSource: any;
    meterUomCode: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private activityConfigService: ActivityConfigService,
        private storageService: StorageService,
        private dataInputMethodService: DataInputMethodService,
        private vehicleService: VehicleService,
        private unitService: UnitService
    ) { }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.params.subscribe(params => {
            if (params.activityConfigID) {
                this.activityConfigID = params.activityConfigID;
            }
        })
        this.activatedRoute.data.subscribe(routeData => {
            this.activityKeyID = routeData.activityKeyID;
        })
        if (this.activityConfigID) { this.getConfigByID(); }
    }

    async getConfigByID() {
        const configData = await this.activityConfigService.getActivityConfigByID(this.currentOrgID, this.activityKeyID, this.activityConfigID)
        if (!this.activityConfigData) { this.activityConfigData = configData.activityConfigData; }
        if (!this.activityConfigSource) { this.activityConfigSource = configData.activityConfigSource; }
        this.getAllDataInputMethodList(configData.activityConfigData.fuelDataInputMethodID, configData.activityConfigData.distanceDataInputMethodID);
        this.getAllVehicle(configData.activityConfigSource.sourceID);
        this.getVehicleType(configData.activityConfigData.vehicleTypeID);
        this.getUnitUOMName(configData.activityConfigData.meterUnitID);
        return JSON.stringify(configData);
    }

    async getVehicleType(vechileTypeID) {
        const vehicleType = <any[]>await this.vehicleService.getVehicleType()
        this.vehicleType = vehicleType.filter(res => res.id == vechileTypeID).map(res => res.name);

    }

    async getAllDataInputMethodList(fuelInputMethodID, distanceInputMethodID) {
        const dataInputMethodList = await this.dataInputMethodService.getAllDataInputMethodList();
        this.fuelInputMethod = dataInputMethodList.filter(res => res.id == fuelInputMethodID).map(res => res.name);
        const distanceInputMethod = dataInputMethodList.filter(res => res.id == distanceInputMethodID).map(res => res);
        this.distanceInputMethod = distanceInputMethod[0];
    }


    async getAllVehicle(vechileID: number[]) {
        const vehicles = await this.vehicleService.getAllVehicle(this.currentOrgID);
        this.vechileName = []; // Initialize or clear the array
        for (let i = 0; i < vechileID.length; i++) {
            let vehicleNames = vehicles
                .filter((res: any) => res.id == vechileID[i])
                .map((res: any) => res.vehicleName);

            this.vechileName.push(...vehicleNames); // Spread operator to add each name individually
        }
    }

    async getUnitUOMName(meterUnitID) {
        const unitM = await this.unitService.getUnit([`type:${UnitTypeKeyID.LENGTH}`]);
        this.meterUomCode = unitM.filter(res => res.id == meterUnitID).map(res => res.uomCode);
    }

    ngAfterContentChecked(){
    }

}
