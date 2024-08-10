import { DevicesWithEntitiesM } from '../model/device.model';
import { EntityDeviceController } from '../controller/entity-device.controller';
import * as i0 from "@angular/core";
export declare class EntityDeviceService {
    private entityDeviceController;
    constructor(entityDeviceController: EntityDeviceController);
    getDevicesWithEntities(orgID: any, requestBody: any): Promise<DevicesWithEntitiesM[]>;
    getDevicesWithEntitiesByParameter(orgID: any, paramMetric: any, skipLoader: any): Promise<DevicesWithEntitiesM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDeviceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityDeviceService>;
}
