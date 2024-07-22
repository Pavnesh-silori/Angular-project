import { Injectable } from '@angular/core';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { CARBON_RECORD_VIEW } from '@carbon/constant/carbon-record-view.constant';

@Injectable({
    providedIn: 'root'
})
export class ViewUtility {

    constructor() { }

    haveValue(value): boolean {
        if (value != null && value >= 0) return true;
        return false;
    }

    renderView(activityKeyID): string {
        if (activityKeyID == ActivityKeyIDEnum.PURCHASED_ELECTRICITY
            || activityKeyID == ActivityKeyIDEnum.PURCHASED_COOLING
            || activityKeyID == ActivityKeyIDEnum.PURCHASED_HEAT_STEAM) {

            return CARBON_RECORD_VIEW.SCOPE_2_VIEW;
        } else if (activityKeyID == CARBON_RECORD_VIEW.US_EEIO_KEY_ID
            // || activityKeyID == ActivityKeyIDEnum.CAPITAL_GOODS
            || activityKeyID == ActivityKeyIDEnum.BUSINESS_TRAVEL
            // || activityKeyID == ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES
            || activityKeyID == ActivityKeyIDEnum.UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION
            || activityKeyID == ActivityKeyIDEnum.DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION) {

            return CARBON_RECORD_VIEW.SCOPE_3_SPEND_BASED_VIEW;
        } else if (activityKeyID == ActivityKeyIDEnum.STATIONARY_COMBUSTION) {

            return CARBON_RECORD_VIEW.STATIONARY_COMBUSTION_VIEW
        } else if (activityKeyID == ActivityKeyIDEnum.MOBILE_COMBUSTION) {

            return CARBON_RECORD_VIEW.MOBILE_COMBUSTION_VIEW;
        }
        else if (activityKeyID == ActivityKeyIDEnum.WASTE_GENERATED_IN_OPERATIONS) {

            return CARBON_RECORD_VIEW.WASTE_GENERATED_IN_OPERATIONS_VIEW
        }
        else if (activityKeyID == CARBON_RECORD_VIEW.EMPLOYEE_COMMUTING) {
            return CARBON_RECORD_VIEW.EMPLOYEE_COMMUTING
        }
        else if (activityKeyID == CARBON_RECORD_VIEW.OTHER_FUGUTIVE) {
            return CARBON_RECORD_VIEW.OTHER_FUGUTIVE;
        }
        else if (activityKeyID == ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES) {
            return CARBON_RECORD_VIEW.PURCHASED_GOODS_AND_SERVICES_VIEW;
        } 
        else if (activityKeyID == ActivityKeyIDEnum.CAPITAL_GOODS) {
            return CARBON_RECORD_VIEW.CAPITAL_GOODS_VIEW;
        }
        else {
            return null;
        }
    }
}
