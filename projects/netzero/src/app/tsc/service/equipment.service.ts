import { Injectable } from "@angular/core";
import { EquipmentController } from "@netzero/controller/equipment.controller";

@Injectable({
    providedIn: 'root'
})

export class EquipmentService {
    constructor(
        private equipmentController: EquipmentController,
    ) { }

    async getEquipment(): Promise<any[]> {
            let equipment;
            try {
                equipment = await this.equipmentController.getEquipment().toPromise();
                return equipment;
            }catch (error) {
                console.error('Error -', error);
            }
    }
}
