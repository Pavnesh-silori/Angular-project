import { Injectable } from "@angular/core";

import { IpccTechnologyParameterController } from "@carbon/controller/ipcc-technology-parameter.controller";

@Injectable({
    providedIn: 'root'
})

export class IpccTechnologyParameterService {

    constructor(
        private ipccTechnologyParameterController: IpccTechnologyParameterController
    ) { }

    async getIpccTechnologyParameterList(): Promise<any[]> {
        let technology: any;
        try{
            technology = await this.ipccTechnologyParameterController.getIpccTechnologyParameterList().toPromise();
            if(technology){
                return technology;
            } else {
                return technology;
            }
        } catch (error) {
            console.log('Error -',error);
            return technology;
        }

    }
}