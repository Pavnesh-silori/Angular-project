import { Injectable } from "@angular/core";
import { EquipmentGroupController } from "@carbon/controller/equipment-group.controller";

// tsc-library
import { ToastrColor, ToastrService } from "@library/toastr-service";
import { InvalidForm } from "@library/tsc-common";
// /tsc-library

@Injectable({
    providedIn: 'root'
})

export class EquipmentGroupService {

    constructor(
        private equipmentGroupController: EquipmentGroupController,
        private toastrService: ToastrService,

    ) { }

    getEquipmentGroup(currentOrgID): Promise<any[]> {
        return new Promise(resole => {
            let equipment: any[];
            this.equipmentGroupController.getEquipment(currentOrgID).subscribe((equipmentRes: any[]) => {
                equipment = equipmentRes;
                resole(equipment);
            },
                error => {
                    console.log('error in getEquipment -', error);
                    this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Error in getting source gas', ToastrColor.ERROR);
                });
        });
    }
}
