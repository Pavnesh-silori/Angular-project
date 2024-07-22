import { Injectable } from "@angular/core";

import { newFuelM, newFuel } from "@netzero/model/fuel.model"; 
import { FuelController } from "@netzero/controller/fuel.controller"; 
import { CustomFuelController } from "@netzero/controller/cutom-fuel.controller";

@Injectable({
    providedIn: 'root'
})

export class CustomFuelService {
    constructor(
        private customFuelController: CustomFuelController,
    ) { }

    async getCustomFuelList(orgID): Promise<any[]> {
        let fuels: any = null;
        try {
            fuels = await this.customFuelController.getCustomFuels(orgID).toPromise();
            return fuels;
        } catch (error) {
            console.error('Error -', error);
            return fuels;
        }
    }

    async getCustomFuelByID(orgID, fuelID): Promise<any> {
        let fuel: any = null;
        try {
            fuel = await this.customFuelController.getCustomFuelByID(orgID, fuelID).toPromise();
            return fuel;
        } catch (error) {
            console.error('Error -', error);
            return fuel;
        }
    }
}
