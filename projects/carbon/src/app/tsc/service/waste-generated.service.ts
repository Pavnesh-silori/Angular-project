import { Injectable } from "@angular/core";
// import { scope3ActivityM, scope3Activity, wasteTypeM, wasteType, wasteTreatementM, wasteTreatement,  } from "@CarbonNetZero/model/scope3.activity.model";
import { WasteTypeM, WasteType  } from '@carbon/model/waste-generated.model';

// import { Scope3Service } from "@CarbonNetZero/service/scope3-waste-gen.service";
import { WasteGeneratedController } from "@carbon/controller/waste-generatd.controller";

@Injectable({
    providedIn: 'root'
})

export class WasteGeneratedService {

    constructor(
        private wasteGeneratedController: WasteGeneratedController
    ) {

    }

    async getAllWasteTypes(activityID): Promise<WasteTypeM[]> {
        let scope3WasteActivity: any;

        try {
            scope3WasteActivity = await this.wasteGeneratedController.getAllWasteTypes(activityID).toPromise();

            if (scope3WasteActivity) {
                return scope3WasteActivity;
            } else {
                return [new WasteType()]
            }
        }
        catch (error) {
            console.error('Error -', error);
            return [new WasteType()];
        }
    }

    async getAllWasteTreatmentMethod(activityID){
        let wasteTypeAndTreatmentMethod: any;
        try{
            wasteTypeAndTreatmentMethod = await this.wasteGeneratedController.getAllWasteTreatmentMethod(activityID).toPromise();
            if(wasteTypeAndTreatmentMethod){
                return wasteTypeAndTreatmentMethod;
            }else{
                return [];
            }    
        }
        catch (error) {
            console.error('Error -', error);
            return [];
        }
    }
}
