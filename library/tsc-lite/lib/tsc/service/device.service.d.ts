import { DeviceM } from '../model/device.model';
import { DeviceController } from '../controller/device.controller';
import * as i0 from "@angular/core";
export declare class DeviceService {
    private deviceController;
    constructor(deviceController: DeviceController);
    getDevicesByEntityID(orgID: any, requestBody: any): Promise<DeviceM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeviceService>;
}
