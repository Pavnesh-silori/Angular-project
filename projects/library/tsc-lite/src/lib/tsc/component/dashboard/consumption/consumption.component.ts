import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import * as moment from 'moment';

import { EntityWithChildrenM, EntityWithChildren, Entity } from '../../../model/entity.model';

import { EntityDialogComponent } from '../../_shared/dialog/entity/entity.component';

import { EntityController } from '../../../controller/entity.controller';
import { AggregateDataController } from '../../../controller/aggregate-data.controller';
import { EntityService } from '../../../service/entity.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FREQUENCY_CONSTANT } from '@library/tsc-common';
import { DateTypeEnum, FrequencyEnum } from '@library/date';
import { ChartTitle, ChartViewStateEnum, StackBarChart } from '@library/echart';
// /tsc-library/

@Component({
    selector: 'app-consumption',
    templateUrl: './consumption.component.html',
    styleUrls: ['./consumption.component.scss']
})
export class ConsumptionComponent implements OnInit {

    commonConstant = COMMON_CONSTANT;
    frequencyConstant = FREQUENCY_CONSTANT;
    frequencyEnum = FrequencyEnum;

    dateType: any;
    orgID: any;
    layoutID: any;
    entityID: any;
    entityName: string;
    applicationKeyID: any;
    timezone: any;
    frequency: any[] = [];
    defaultFrequency: string;
    startDate: any;
    endDate: any;
    interval: any;

    entityM = new Entity();
    consumptionEntityM = [new EntityWithChildren()];

    viewStateFlag: string = ChartViewStateEnum.LOADING;
    chartTitle = new ChartTitle();
    chartData = new StackBarChart();

    constructor(
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private entityService: EntityService,
        private entityController: EntityController,
        private aggregateDataController: AggregateDataController,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');

        this.activatedRoute.queryParams
            .subscribe(queryParam => {
                this.entityID = queryParam.entityID;
                if (this.entityID) {
                    this.getEntityByID(this.entityID);
                }
            });

        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;

        this.getConsumptionEntities();
    }

    async getEntityByID(entityID) {
        this.entityM = await this.entityService.getEntityByID(this.orgID, this.layoutID, entityID);
        this.entityName = this.entityM.name;
    }

    getConsumptionEntities() {
        this.entityController.getConsumptionEntities(this.orgID)
            .subscribe((res: EntityWithChildrenM) => {
                this.consumptionEntityM = [res];
            },
                error => {
                    console.log('error in getConsumptionEntities() - ', error);
                });
    }

    dateFilterEmitted(data: any) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        let selectedFrequency = data.frequency;

        if (selectedFrequency == this.frequencyEnum.DAILY) {
            this.interval = "hour_1";
        } else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
            this.interval = "day_1";
        } else if (selectedFrequency == this.frequencyEnum.YEARLY) {
            this.interval = "month_1";
        }

        this.getCumulativeConsumption();
    }

    getCumulativeConsumption() {

        this.viewStateFlag = ChartViewStateEnum.LOADING;

        const requestData = this.createDataRequest();

        this.aggregateDataController.getCumulativeConsumption(this.orgID, requestData)
            .subscribe((consumptionRes: any) => {

                if (consumptionRes?.records?.length > 0) {

                    this.chartData.metaData = consumptionRes.records.map(record => ({
                        xAxisSeries: moment(record.date).format("YYYY-MM-DD HH:mm:ss"),
                        totalData: {
                            value: record.totalConsumption.value,
                            unitCode: record.totalConsumption.unit
                        },
                        barData: record.paramData.map(param => ({
                            name: param.label,
                            value: param.value,
                            unit: {
                                code: param.unit
                            }
                        }))
                    }));

                    this.chartData.totalDataLabel = 'Total consumption';
                    this.chartData.showDataView = true;
                    this.chartData.showMagicType = true;
                    this.chartData.showRestore = true;
                    this.chartData.showDownloadImage = true;

                    this.viewStateFlag = ChartViewStateEnum.HAS_DATA;

                } else {
                    this.viewStateFlag = ChartViewStateEnum.NO_DATA;
                }
            },
                error => {
                    this.viewStateFlag = ChartViewStateEnum.NO_DATA;

                    console.log('error in getCumulativeConsumption() -', error);
                });
    }

    openEntityDialog() {
        const dialog = this.dialog.open(EntityDialogComponent,
            {
                data: {
                    entityID: this.entityID,
                    entityObject: this.consumptionEntityM
                },
                width: '50vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        dialog.afterClosed().subscribe((dialogRes) => {
            if (dialogRes.entityID) {
                this.entityID = dialogRes.entityID;

                this.getEntityByID(this.entityID);
                this.getCumulativeConsumption();
            }
        })
    }

    createDataRequest() {

        let requestBody = {};

        requestBody['startTime'] = this.startDate;
        requestBody['endTime'] = this.endDate;
        requestBody['interval'] = this.interval;
        requestBody['entityID'] = this.entityID ? this.entityID : null;

        return requestBody;
    }

}
