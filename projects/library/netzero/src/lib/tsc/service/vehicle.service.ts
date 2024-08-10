import { Injectable } from "@angular/core";

import { VehicleTypeM, VehicleType, VehicleByTypeM, VehicleByType, VehicleCategoryM, VehicleCategory, EngineStrokeM, EngineStroke } from '../model/vehicle.model';
import { VehicleController } from "../controller/vehicle.controller";

@Injectable({
    providedIn: 'root'
})

export class VehicleService {
    constructor(
        private vehicleController: VehicleController
    ) { }

    async getVehicleType(): Promise<VehicleTypeM[]> {
        let vehicleTypeM: VehicleTypeM[];

        try {
            vehicleTypeM = await this.vehicleController.getVehicleType().toPromise();

            if (vehicleTypeM) {
                return vehicleTypeM;
            } else {
                return [new VehicleType()];
            }
        } catch (error) {
            console.error('Error in getVehicleType -', error);
            return [new VehicleType()];
        }
    }

    async getVehicleCategory(): Promise<VehicleCategoryM[]> {
        let vehicleCategoryM: VehicleCategoryM[];

        try {
            vehicleCategoryM = await this.vehicleController.getVehicleCategory().toPromise();

            if (vehicleCategoryM) {
                return vehicleCategoryM;
            } else {
                return [new VehicleCategory()];
            }
        } catch (error) {
            console.error('Error in getVehicleCategory -', error);
            return [new VehicleCategory()];
        }
    }

    async getEngineStroke(): Promise<EngineStrokeM[]> {
        let engineStrokeM: EngineStrokeM[];

        try {
            engineStrokeM = await this.vehicleController.getEngineStroke().toPromise();

            if (engineStrokeM) {
                return engineStrokeM;
            } else {
                return [new EngineStroke()];
            }
        } catch (error) {
            console.error('Error in getEngineStroke -', error);
            return [new EngineStroke()];
        }
    }

    async getVehicleByTypeID(currentOrgID, VechileTypeID): Promise<VehicleByTypeM[]> {
        let vechileTypeM: VehicleByTypeM[];
        let vechileType = [new VehicleByType()];
        try {
            vechileTypeM = await this.vehicleController.getVehicleByTypeID(currentOrgID, VechileTypeID).toPromise();
            if (vechileTypeM) {
                return vechileTypeM;
            } else {
                return vechileType;
            }
        } catch (error) {
            console.error('Error -', error);
            return vechileType;
        }
    }

    async getAllVehicle(currentOrgID): Promise<VehicleByTypeM[]> {
        let vechileTypeM: VehicleByTypeM[];
        let vechileType = [new VehicleByType()];
        try {
            vechileTypeM = await this.vehicleController.getAllVehicle(currentOrgID).toPromise();
            if (vechileTypeM) {
                return vechileTypeM;
            } else {
                return vechileType;
            }
        } catch (error) {
            console.error('Error -', error);
            return vechileType;
        }
    }

}