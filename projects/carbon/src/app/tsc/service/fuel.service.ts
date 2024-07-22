import { Injectable } from "@angular/core";

import { FuelController } from "@carbon/controller/fuel.controller"; 

@Injectable({
    providedIn: 'root'
})
export class FuelService {

    constructor(
        private fuelController: FuelController,
    ) { }

  async  getFuelByActivityKeyID(activityKeyID): Promise<any[]> {
        let fuel: any;
        try{
            fuel = await this.fuelController.getFuelByActivityKeyID(activityKeyID).toPromise();
            if(fuel){
                return fuel;
            } else {
                return fuel;
            }
        } catch (error) {
            console.log('Error -',error);
            return fuel;
        }

    }

    async getFuelSource(): Promise<any>{
        let fuel: any;
        try{
            fuel = await this.fuelController.getFuelSource().toPromise();
            if(fuel){
                return fuel;
            } else {
                return fuel;
            }
        } catch (error) {
            console.log('Error -',error);
            return fuel;
        }

    }

    async getFuelHhv(orgID, fuelID): Promise<any>{
        let hhv: any;
        try{
            hhv = await this.fuelController.getHhv(orgID, fuelID).toPromise();
            if(hhv){
                return hhv;
            } else {
                return hhv;
            }
        } catch (error) {
            console.log('Error -',error);
            return hhv;
        }
    }
      
}