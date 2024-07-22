import { Injectable } from "@angular/core";

import { GasController } from "@carbon/controller/gas.controller";

// tsc-library
import { ToastrColor, ToastrService } from "@library/toastr-service";
import { InvalidForm } from "@library/tsc-common";
// /tsc-library

@Injectable({
    providedIn: 'root'
})

export class GasService{

    constructor(
        private gasController: GasController,
        private toastrService: ToastrService,
    ) { } 
    
    getGas(){
        return new Promise(resole => {
            let gas: any[];
            this.gasController.getGas().subscribe((gasRes: any[]) => {
                gas = gasRes;
                resole(gas);
            },
                error => {
                    console.log('error in getGas -', error);
                    this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE,'Error in getting gas', ToastrColor.ERROR);

                });
        });
    }
}