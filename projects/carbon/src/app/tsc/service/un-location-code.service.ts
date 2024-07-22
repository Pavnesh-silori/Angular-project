import { Injectable } from '@angular/core';

import { UNLCodeM, UNLCode } from '@carbon/model/un-location-code.model';
import { InstallationDetailController } from '@carbon/controller/installation-detail.controller';

@Injectable({
    providedIn: 'root'
})

export class UNLocationCodeService {

    constructor(
        private installatonDetailController: InstallationDetailController
    ) { }

        async getUNLCode(countryCode){
            let UNLCodeM: UNLCodeM[]

            try {
                UNLCodeM = await this.installatonDetailController.getUNLocationCode(countryCode).toPromise();
    
                if (UNLCodeM) {
                    return UNLCodeM;
                } else {
                    return [new UNLCode()];
                }
            } catch (error) {
                console.error('Error -', error);
                return [new UNLCode()];
            }
        }
}