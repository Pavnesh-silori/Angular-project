import { Component, OnInit } from '@angular/core';

import { StatusInfo } from '../../../model/device.model';
import { EntityLevelConsumption } from '../../../model/entity.model';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';

import { EntityController } from '../../../controller/entity.controller';
import { DeviceController } from '../../../controller/device.controller';

import { AggregateDataService } from '../../../service/aggregate-data.service';

// tsc-library
import { DateTimeIntervalEnum, DateService } from '@library/date';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    commonConstant = COMMON_CONSTANT;

    orgID: any;
    applicationKeyID: any;
    paramKey: any;
    label: any;
    icon;

    outerStrokeColor: any;
    outerStrokeGradientStopColor: any;
    innerStrokeColor: any;

    totalConsumptionCircleData: any;
    consumptionBreakupCircleData: any;

    todayConsumption: any;
    currentMonthConsumption: any;
    currentYearConsumption: any;
    entityConsumption = [new EntityLevelConsumption()];
    deviceInfoM = new StatusInfo();

    constructor(
        private storageService: StorageService,
        private dateService: DateService,
        private aggregateDataService: AggregateDataService,
        private entityController: EntityController,
        private deviceController: DeviceController
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');

        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.label = "Energy";
            this.icon = "bolt";
            this.paramKey = "engEnergyUsed";
            this.outerStrokeColor = "#fa9200";
            this.outerStrokeGradientStopColor = "#fdd130";
            this.innerStrokeColor = "#fbe2a6";
        } else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.label = "Water";
            this.icon = "water_drop";
            this.paramKey = "gwFlowTotalizer";
            this.outerStrokeColor = "#4882c2";
            this.outerStrokeGradientStopColor = "#53a9ff";
            this.innerStrokeColor = "#dbe7ff";
        }

        this.getTotalConsumption(DateTimeIntervalEnum.CURRENT_DAY)
            .then(app => {
                this.todayConsumption = app;
            })

        this.getTotalConsumption(DateTimeIntervalEnum.CURRENT_MONTH)
            .then(app => {
                this.currentMonthConsumption = app;
                const totalConsumptionValue = this.currentMonthConsumption?.[0]?.['data']?.[0]?.['value'];

                this.totalConsumptionCircleData = {
                    percent: totalConsumptionValue,
                    maxPercent: 999999999,
                    units: this.currentMonthConsumption?.[0]?.unit,
                    showUnits: true,
                    radius: 75,
                    space: 4,
                    outerStrokeGradient: true,
                    outerStrokeWidth: 10,
                    outerStrokeColor: this.outerStrokeColor,
                    outerStrokeGradientStopColor: this.outerStrokeGradientStopColor,
                    innerStrokeColor: this.innerStrokeColor,
                    showBackground: false,
                    innerStrokeWidth: 5,
                    showSubtitle: false,
                    subtitleFormat: false,
                    startFromZero: false,
                    animationDuration: 500,
                    backgroundColor: '#ffffff',
                }
            })

        this.getTotalConsumption(DateTimeIntervalEnum.CURRENT_YEAR)
            .then(app => {
                this.currentYearConsumption = app;
            })

        this.getTotalEntitiesConsumption();
        this.getEntityLevelConsumption();
        this.getDeviceStatusInfo();
    }

    async getTotalConsumption(selectedRange) {
        try {
            const requestData = new AggregateDataRequest();

            if (selectedRange == DateTimeIntervalEnum.CURRENT_DAY) {
                requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_DAY);
                requestData.interval = 'day_1';
            } else if (selectedRange == DateTimeIntervalEnum.CURRENT_MONTH) {
                requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_MONTH);
                requestData.interval = 'month_1';
            } else if (selectedRange == DateTimeIntervalEnum.CURRENT_YEAR) {
                requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_YEAR);
                requestData.interval = 'year_1';
            }

            requestData.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
            requestData.params = [
                {
                    name: this.paramKey,
                    dsAgg: "sum",
                    agg: "sum",
                    source_or_load: "source",
                    sourceLoadType: "all"
                }
            ];
            requestData.nullifyParams();
            requestData.groupAll = true;

            const result = await this.aggregateDataService.getAggregateData(this.orgID, requestData);
            return result;
        } catch (error) {
            console.error(`Error in getTotalConsumption for (${selectedRange})`, error);
        }
    }

    async getTotalEntitiesConsumption() {
        try {
            let requestData = new AggregateDataRequest();

            requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_MONTH);
            requestData.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
            requestData.interval = "month_1";
            requestData.params = [
                {
                    name: this.paramKey,
                    dsAgg: "sum",
                    agg: "sum",
                    source_or_load: "load",
                    sourceLoadType: "all"
                }
            ];
            requestData.nullifyParams();
            requestData.groupAll = true;

            const totalEntitiesConsumData = await this.aggregateDataService.getAggregateData(this.orgID, requestData);
            const consumptionBreakupValue = totalEntitiesConsumData?.[0]?.['data']?.[0]?.['value'];

            this.consumptionBreakupCircleData = {
                percent: consumptionBreakupValue,
                maxPercent: 999999999,
                units: totalEntitiesConsumData?.[0]?.unit,
                showUnits: true,
                radius: 75,
                space: 4,
                outerStrokeGradient: true,
                outerStrokeWidth: 10,
                outerStrokeColor: this.outerStrokeColor,
                outerStrokeGradientStopColor: this.outerStrokeGradientStopColor,
                innerStrokeColor: this.innerStrokeColor,
                showBackground: false,
                innerStrokeWidth: 5,
                showSubtitle: false,
                subtitleFormat: false,
                startFromZero: false,
                animationDuration: 500,
                backgroundColor: '#ffffff',
            }
        } catch (error) {
            console.error(`Error in getTotalEntitiesConsumption()`, error);
        }
    }

    getEntityLevelConsumption() {
        let requestData = new AggregateDataRequest();

        requestData.startTime = this.dateService.getStartDateTime(DateTimeIntervalEnum.CURRENT_MONTH);
        requestData.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
        requestData.interval = "month_1";
        requestData.params = [
            {
                name: this.paramKey,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: "load",
                sourceLoadType: "all"
            }
        ];
        requestData.nullifyParams();
        requestData.groupAll = false;

        this.entityController.getEntityLevelConsumption(this.orgID, requestData)
            .subscribe((entityConsumRes: EntityLevelConsumption[]) => {
                this.entityConsumption = entityConsumRes;
            },
                error => {
                    console.log('error in getEntityLevelConsumption() -', error);
                });
    }

    highestConsumptionEntity() {
        if (this.entityConsumption?.length == 0) {
            return null;
        }
        return this.entityConsumption?.reduce((maxEntity, currentEntity) => {
            return currentEntity.value > maxEntity.value ? currentEntity : maxEntity;
        }, this.entityConsumption?.[0]);
    }

    calculateProgress(entity) {
        const highestConsumption = this.highestConsumptionEntity();
        if (!highestConsumption) {
            return 0;
        }
        const progress = (entity.value / highestConsumption.value) * 100;
        return progress;
    }

    getDeviceStatusInfo() {
        this.deviceController.getDeviceStatusInfo(this.orgID)
            .subscribe((deviceRes: StatusInfo) => {
                this.deviceInfoM = deviceRes;
            },
                error => {
                    console.log('error in getDeviceStatusInfo() -', error);
                });
    }

}