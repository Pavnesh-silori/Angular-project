import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { DashboardErrorEnum } from '../../../enum/error.enum';

import { OrgRecentData, OrgRecentDataM, RecentDataRequestWithParam, RecentDataRequestWithoutParam } from '../../../model/recent-data.model';
import { Alert, AlertM } from '../../../model/alert.model';
import { EntityType, EntityTypeM } from '../../../model/entity.model';

import { RecentDataService } from '../../../service/recent-data.service';
import { TrendService } from '../../../service/trend.service';
import { AlertService } from '../../../service/alert.service';
import { EntityService } from '../../../service/entity.service';

// tsc-library
import { DateService } from '@library/date';
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-facility',
    templateUrl: './facility.component.html',
    styleUrls: []
})

export class FacilityComponent implements OnInit {

    commonConstant = COMMON_CONSTANT;
    materialFormFieldAppearance = MaterialFormFieldAppearance;

    FormErrorEnum = FormErrorEnum;

    orgID: any;
    timezone: any;
    apiTimer: any;
    entityTypeLoader: boolean = true;
    facilityDataLoader: boolean = false;

    entityTypeM = [new EntityType()];
    orgRecentDataM = [new OrgRecentData()];
    alertObj: AlertM = new Alert();

    last48HrsMeterData: { [deviceID: string]: { [paramName: string]: any } } = {};

    entityTypeFC: FormControl = new FormControl('', Validators.required);
    entityTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['type']);

    constructor(
        private router: Router,
        private storageService: StorageService,
        public dateService: DateService,
        private entityService: EntityService,
        private trendService: TrendService,
        private recentDataService: RecentDataService,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');

        this.getEntityTypeByLayoutID();
    }

    async getEntityTypeByLayoutID() {
        try {
            this.entityTypeM = <EntityTypeM[]>await this.entityService.getEntityTypeByLayoutID(this.orgID, 'YES');

            this.entityTypeSearchUtil.entityArr = this.entityTypeM;
            this.entityTypeSearchUtil.createSubscription();

            if (this.entityTypeM && this.entityTypeM.length > 0) {
                const defaultEntityType = this.entityTypeM[0].type;

                if (defaultEntityType) {
                    this.entityTypeFC.patchValue(defaultEntityType);
                    this.getOrgRecentData(this.entityTypeFC.value);
                }
            }
        } catch (error) {
            console.error("Error in getEntityTypeByLayoutID()", error);
        } finally {
            this.entityTypeLoader = false;
        }
    }

    entityTypeChange(selectedType) {

        // Clear the timer when changing the device
        clearTimeout(this.apiTimer);

        this.entityTypeFC.patchValue(selectedType);

        this.orgRecentDataM = [new OrgRecentData()];
        this.getOrgRecentData(selectedType);
    }

    async getOrgRecentData(entityType) {

        this.facilityDataLoader = true;
        this.alertService.resetAlertProperties(this.alertObj);

        try {
            let requestBody = new RecentDataRequestWithoutParam();

            requestBody.timezone = this.timezone;
            requestBody.entityType = entityType;
            requestBody.backscan = 1;

            this.orgRecentDataM = <OrgRecentDataM[]>await this.recentDataService.getOrgRecentData(this.orgID, requestBody);

            if (this.orgRecentDataM && this.orgRecentDataM.length == 0) {
                this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
            }

        } catch (error) {

            console.error(`Error in getOrgRecentData()`, error);
            this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);

        } finally {
            this.apiTimer = setTimeout(() => {
                this.getOrgRecentData(entityType);
            }, 300000);
            this.facilityDataLoader = false;
        }
    }

    async getLast48HrsMeterData(deviceID, paramName) {
        try {
            let requestData = new RecentDataRequestWithParam();

            requestData.params = [{ name: paramName }];
            requestData.deviceID = [deviceID];
            requestData.backscan = 48;
            requestData.timezone = this.timezone;

            const result = await this.recentDataService.getRecentDataWithParam(this.orgID, requestData);
            
            if (result.length > 0) {
                if (!this.last48HrsMeterData[deviceID]) {
                    this.last48HrsMeterData[deviceID] = {};
                }
                this.last48HrsMeterData[deviceID][paramName] = result[0];
            } else {
                if (!this.last48HrsMeterData[deviceID]) {
                    this.last48HrsMeterData[deviceID] = {};
                }
                this.last48HrsMeterData[deviceID][paramName] = null;
            }

        } catch (error) {
            console.error(`Error in getLast48HrsMeterData()`, error);
        }
    }

    showEntityConsumption(id) {
        this.router.navigate(['/analytics-insights/consumption'], { queryParams: { entityID: id } });
    }

    showTrend(paramMetric, deviceID, entityID) {
        let requestBody = {
            paramMetric: paramMetric,
            deviceID: deviceID,
            entityID: entityID
        };
        this.trendService.openDialog(requestBody);
    }

    ngOnDestroy(): void {
        clearTimeout(this.apiTimer);
    }

}