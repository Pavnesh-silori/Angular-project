import { Injectable } from "@angular/core";

import { SystemController } from "../controller/system.controller";

@Injectable({
    providedIn: 'root'
})

export class SystemService {

    constructor(
        private systemController: SystemController
    ) { }

    async getSystemInfo(): Promise<any> {
        let systemInfo: any;

        try {
            systemInfo = <any>await this.systemController.getSystemInfo().toPromise();

            if (systemInfo) {
                return systemInfo;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error -', error);
            return null;
        }
    }

}