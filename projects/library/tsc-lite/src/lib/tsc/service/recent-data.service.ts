import { Injectable } from '@angular/core';

import { DeviceRecentData, DeviceRecentDataM, OrgRecentData, OrgRecentDataM } from '../model/recent-data.model';

import { RecentDataController } from '../controller/recent-data.controller';

@Injectable({
    providedIn: 'root'
})

export class RecentDataService {

    constructor(
        private recentDataController: RecentDataController
    ) { }

    async getRecentDataWithParam(orgID, requestBody) {
        let recentDataWithParam;
        try {
            recentDataWithParam = await this.recentDataController.getRecentDataWithParam(orgID, requestBody).toPromise();

            if (recentDataWithParam) {
                return recentDataWithParam;
            }
        } catch (error) {
            console.error('Error -', error);
            throw error;
        }
    }

    async getOrgRecentData(orgID, requestBody): Promise<OrgRecentDataM[]> {
        let orgRes;
        try {
            orgRes = await this.recentDataController.getOrgRecentData(orgID, requestBody).toPromise();

            if (orgRes) {
                return orgRes;
            } else {
                return [new OrgRecentData()];
            }
        } catch (error) {
            console.error('Error -', error);
            throw error;
        }
    }

    async getDeviceRecentData(orgID, requestBody): Promise<DeviceRecentDataM[]> {
        let deviceRes;
        try {
            deviceRes = await this.recentDataController.getDeviceRecentData(orgID, requestBody).toPromise();

            if (deviceRes) {
                return deviceRes;
            } else {
                return [new DeviceRecentData()];
            }
        } catch (error) {
            console.error('Error -', error);
            throw error;
        }
    }

}