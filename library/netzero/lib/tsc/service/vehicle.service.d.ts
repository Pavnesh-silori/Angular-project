import { VehicleTypeM, VehicleByTypeM, VehicleCategoryM, EngineStrokeM } from '../model/vehicle.model';
import { VehicleController } from "../controller/vehicle.controller";
import * as i0 from "@angular/core";
export declare class VehicleService {
    private vehicleController;
    constructor(vehicleController: VehicleController);
    getVehicleType(): Promise<VehicleTypeM[]>;
    getVehicleCategory(): Promise<VehicleCategoryM[]>;
    getEngineStroke(): Promise<EngineStrokeM[]>;
    getVehicleByTypeID(currentOrgID: any, VechileTypeID: any): Promise<VehicleByTypeM[]>;
    getAllVehicle(currentOrgID: any): Promise<VehicleByTypeM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VehicleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VehicleService>;
}
