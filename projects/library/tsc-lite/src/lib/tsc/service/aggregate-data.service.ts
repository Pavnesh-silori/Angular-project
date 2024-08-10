import { Injectable } from '@angular/core';

import { MeterData, MeterDataI } from '../model/aggregate-data.model';

import { AggregateDataController } from '../controller/aggregate-data.controller';

@Injectable({
    providedIn: 'root'
})

export class AggregateDataService {

    constructor(
        private aggregateDataController: AggregateDataController
    ) { }

    async getAggregateData(orgID, requestBody) {
        let aggregatedData;
        try {
            aggregatedData = await this.aggregateDataController.getAggregateData(orgID, requestBody).toPromise();

            if (aggregatedData) {
                return aggregatedData;
            }
        } catch (error) {
            console.error('Error -', error);
            throw error;
        }
    }

    async getMeterAggregateDataForReport(orgID, requestBody): Promise<MeterDataI[]> {
        let meterReportData: MeterDataI[];
        try {
            meterReportData = await this.aggregateDataController.getMeterAggregateDataForReport(orgID, requestBody).toPromise();

            if (meterReportData) {
                return [new MeterData()];
            }
        } catch (error) {
            console.error('Error -', error);
            throw error;
        }
    }


    async getDeviceAggregateData(orgID, requestBody) {
        let deviceAggregateData;
        try {
            deviceAggregateData = await this.aggregateDataController.getDeviceAggregateData(orgID, requestBody).toPromise();

            if (deviceAggregateData) {
                return deviceAggregateData;
            }
        } catch (error) {
            console.error('Error -', error);
            throw error;
        }
    }

}