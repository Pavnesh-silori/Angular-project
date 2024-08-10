import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DashboardErrorEnum } from '../../../enum/error.enum';

import { DevicesWithEntities, DevicesWithEntitiesM } from '../../../model/device.model';
import { Parameter, ParameterM } from '../../../model/parameter.model';
import { Alert, AlertM } from '../../../model/alert.model';
import { RecentDataRequestWithParam } from '../../../model/recent-data.model';

import { RecentDataService } from '../../../service/recent-data.service';
import { ParameterService } from '../../../service/parameter.service';
import { EntityDeviceService } from '../../../service/entity-device.service';
import { AlertService } from '../../../service/alert.service';
import { TrendService } from '../../../service/trend.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
import { DateService } from '@library/date';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-meter-data',
    templateUrl: './meter-data.component.html',
    styles: [
    ]
})
export class MeterDataDashboardComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormErrorEnum = FormErrorEnum;

    orgID: any;
    applicationKeyID: any;
    paramMetric: any;
    entityID: any;
    timezone: string;
    meterDataRes: any;
    last48HrsMeterData: { [key: string]: any } = {};
    currentParamName: any;
    apiTimer: any;
    showAlert: boolean = false;
    showLoader: boolean = false;

    entityDeviceM = [new DevicesWithEntities()];
    parameterM = [new Parameter()];
    alertObj: AlertM = new Alert();

    meterFC: FormControl = new FormControl();

    meterSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        private storageService: StorageService,
        private recentDataService: RecentDataService,
        private entityDeviceService: EntityDeviceService,
        private parameterService: ParameterService,
        private alertService: AlertService,
        public dateService: DateService,
        private trendService: TrendService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');

        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        } else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }

        this.getDevicesWithEntitiesByParameter();
    }

    async getDevicesWithEntitiesByParameter() {
        this.entityDeviceM = <DevicesWithEntitiesM[]>await this.entityDeviceService.getDevicesWithEntitiesByParameter(this.orgID, this.paramMetric);

        this.meterSearchUtil.entityArr = this.entityDeviceM;
        this.meterSearchUtil.createSubscription();

        if (this.entityDeviceM.length > 0 && this.entityDeviceM?.[0]?.id) {
            const deviceID = this.entityDeviceM?.[0]?.['devices']?.[0]?.['id'];
            this.meterFC.patchValue(deviceID);

            this.getParameterList();
        }
    }

    meterChange(selectedMeter) {
        clearTimeout(this.apiTimer);
        this.showLoader = true;

        this.meterFC.patchValue(selectedMeter);
        this.getParameterList();
    }

    getParameterList() {
        const selectedMeter = this.meterFC.value;
        this.getParameterByDeviceID(selectedMeter);
    }

    async getParameterByDeviceID(deviceID) {
        let requestBody = {};
        requestBody['deviceID'] = [deviceID];

        this.parameterM = <ParameterM[]>await this.parameterService.getParameterByDeviceID(this.orgID, requestBody);

        if (this.parameterM.length > 0 && this.parameterM?.[0]?.id) {
            this.getRecentMeterData(deviceID);
        }
    }

    async getRecentMeterData(deviceID) {

        this.alertService.resetAlertProperties(this.alertObj);

        try {
            let requestData = new RecentDataRequestWithParam();

            requestData.params = this.parameterM.map(param => ({ name: param.paramMetric }));
            requestData.deviceID = [deviceID];
            requestData.backscan = 1;
            requestData.timezone = this.timezone;

            this.meterDataRes = await this.recentDataService.getRecentDataWithParam(this.orgID, requestData);

            if (this.meterDataRes?.length == 0) {
                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
            }

        } catch (error) {
            console.error(`Error in getRecentMeterData()`, error);
            this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
        } finally {
            this.apiTimer = setTimeout(() => {
                this.getRecentMeterData(deviceID);
            }, 300000);
            this.showLoader = false;
        }
    }

    async getLast48HrsMeterData(paramName) {
        try {
            let requestData = new RecentDataRequestWithParam();

            requestData.params = [{ name: paramName }];
            requestData.deviceID = [this.meterFC.value];
            requestData.backscan = 48;
            requestData.timezone = this.timezone;

            const result = await this.recentDataService.getRecentDataWithParam(this.orgID, requestData);

            if (result.length > 0) {
                this.last48HrsMeterData[paramName] = result[0];
            } else {
                this.last48HrsMeterData[paramName] = null;
            }
            this.currentParamName = paramName;

        } catch (error) {
            console.error(`Error in getLast48HrsMeterData()`, error);
        }
    }

    showTrend(paramMetric, entityID) {
        let requestBody = {
            paramMetric: paramMetric,
            entityID: entityID,
            deviceID: this.meterFC.value
        };
        this.trendService.openDialog(requestBody);
    }

    ngOnDestroy(): void {
        clearTimeout(this.apiTimer);
    }

}