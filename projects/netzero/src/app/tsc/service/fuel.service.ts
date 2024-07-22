import { Injectable } from "@angular/core";

import { newFuelM, newFuel } from "@netzero/model/fuel.model"; 
import { FuelController } from "@netzero/controller/fuel.controller"; 

@Injectable({
    providedIn: 'root'
})

export class FuelService {
    constructor(
        private fuelController: FuelController,
    ) { }

    async getFuelByID(orgID, fuelID): Promise<newFuelM> {
        let newfuelM: any;
        let fuel = new newFuel();
        try {
            newfuelM = await this.fuelController.getFuelByID(orgID, fuelID).toPromise();
            return newfuelM;

        } catch (error) {
            console.error('Error -', error);
            return fuel;
        }
    }
}
