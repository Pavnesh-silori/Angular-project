import { Injectable } from "@angular/core";

import { ActivityConfigController } from "@carbon/controller/activity-config.controller";

@Injectable({
    providedIn: 'root'
})

export class ActivityConfigService {

    constructor(
        private activityConfigController: ActivityConfigController,
    ) { }

    async getActivityConfigByID(orgID: number, activityKeyID: string, activityConfigID: number): Promise<any> {
        let activityConfig: any;

        try {
            activityConfig = await this.activityConfigController.getActivityConfigByID(orgID, activityKeyID, activityConfigID).toPromise();

            if (activityConfig) {
                return activityConfig;
                // return new Facility(facilityI);
            } else {
                // return new Facility();
                return null;
            }
        } catch (error) {
            console.error('error in getActivityConfigByID -', error);
            // return new Facility();
            return null;
        }
    }

}
