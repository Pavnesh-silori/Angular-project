import { Injectable } from '@angular/core';

import { DevicesWithEntities, DevicesWithEntitiesM } from '../model/device.model';

import { EntityDeviceController } from '../controller/entity-device.controller';

@Injectable({
    providedIn: 'root'
})

export class EntityDeviceService {

    constructor(
        private entityDeviceController: EntityDeviceController
    ) { }

    async getDevicesWithEntities(orgID, requestBody): Promise<DevicesWithEntitiesM[]> {
        let devicesWithEntitiesM: DevicesWithEntitiesM[];
        try {
            devicesWithEntitiesM = await this.entityDeviceController.getDevicesWithEntities(orgID, requestBody).toPromise();

            if (devicesWithEntitiesM) {
                return devicesWithEntitiesM;
            } else {
                return [new DevicesWithEntities()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new DevicesWithEntities()];
        }
    }

    async getDevicesWithEntitiesByParameter(orgID, paramMetric): Promise<DevicesWithEntitiesM[]> {
        let devicesWithEntitiesM: DevicesWithEntitiesM[];
        try {
            devicesWithEntitiesM = await this.entityDeviceController.getDevicesWithEntitiesByParameter(orgID, paramMetric).toPromise();

            if (devicesWithEntitiesM) {
                return devicesWithEntitiesM;
            } else {
                return [new DevicesWithEntities()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new DevicesWithEntities()];
        }
    }

}