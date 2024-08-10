import { Injectable } from '@angular/core';

import { Device, DeviceM } from '../model/device.model';

import { DeviceController } from '../controller/device.controller';

@Injectable({
    providedIn: 'root'
})

export class DeviceService {

    constructor(
        private deviceController: DeviceController
    ) { }

    async getDevicesByEntityID(orgID, requestBody): Promise<DeviceM[]> {
        let deviceM: DeviceM[];
        try {
            deviceM = await this.deviceController.getDevicesByEntityID(orgID, requestBody).toPromise();

            if (deviceM) {
                return deviceM;
            } else {
                return [new Device()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Device()];
        }
    }

}