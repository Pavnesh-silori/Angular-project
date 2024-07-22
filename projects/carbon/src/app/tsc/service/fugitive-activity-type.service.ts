import { Injectable } from "@angular/core";
import { FugitiveActivityTypeController } from "@carbon/controller/fugitive-activity-type.controller";
import { OtherFugitiveSourceController } from "@carbon/controller/other-fugitive-source.controller";

// tsc-library
import { ToastrColor, ToastrService } from "@library/toastr-service";
import { InvalidForm } from "@library/tsc-common";
// /tsc-library

@Injectable({
    providedIn: 'root'
})

export class FugitiveActivityTypeService {

    constructor(
        private fugitiveActivityTypeController: FugitiveActivityTypeController,
        private otherFugitiveSourceController: OtherFugitiveSourceController,
        private toastrService: ToastrService,

    ) { }

    getGasesByFugitiveSourceID(currentOrgID, sourceID): Promise<any[]> {
        return new Promise(resole => {
            let sourceGas: any[];
            this.otherFugitiveSourceController.getGasesByFugitiveSourceID(currentOrgID, sourceID).subscribe((sourceGasRes: any[]) => {
                sourceGas = sourceGasRes;
                resole(sourceGas);
            },
                error => {
                    this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Error in getting source gas', ToastrColor.ERROR);

                });
        });
    }

    getFugitiveActivityType(type, calculationapproachKeyID): Promise<any[]> {
        return new Promise(resole => {
            let activityType: any[];
            this.fugitiveActivityTypeController.getFugitiveActivityType(type, calculationapproachKeyID).subscribe((equipmentRes: any[]) => {
                activityType = equipmentRes;
                resole(activityType);
            },
                error => {
                    console.log('error in getFugitiveActivityType -', error);
                });
        });
    }

}
