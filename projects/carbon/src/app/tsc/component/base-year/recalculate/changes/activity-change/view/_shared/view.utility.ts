import { Injectable } from '@angular/core';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

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
        if (activityKeyID == ActivityKeyIDEnum['PURCHASED_ELECTRICITY_KEY_ID']
            || activityKeyID == ActivityKeyIDEnum['PURCHASED_COOLING_KEY_ID']
            || activityKeyID == ActivityKeyIDEnum['PURCHASED_HEAT_STEAM_KEY_ID']) {

            return CARBON_CONSTANT['SCOPE_2_VIEW'];
        } else if (activityKeyID == ActivityKeyIDEnum['US_EEIO_KEY_ID']
            || activityKeyID == ActivityKeyIDEnum['CAPITAL_GOODS_KEY_ID']
            || activityKeyID == ActivityKeyIDEnum['BUSINESS_TRAVEL_KEY_ID']
            || activityKeyID == ActivityKeyIDEnum['PURCHASED_GOODS_AND_SERVICES_KEY_ID']
            || activityKeyID == ActivityKeyIDEnum['UPSTREAM_TRANSPORT_AND_DISTRIBUTION_KEY_ID']
            || activityKeyID == ActivityKeyIDEnum['DOWNSTREAM_TRANSPORT_AND_DISTRIBUTION_KEY_ID']) {

            return CARBON_CONSTANT['SCOPE_3_SPEND_BASED_VIEW'];
        } else if (activityKeyID == ActivityKeyIDEnum['STATIONARY_COMBUSTION_KEY_ID']) {

            return CARBON_CONSTANT['STATIONARY_COMBUSTION_VIEW'];
        } else if (activityKeyID == ActivityKeyIDEnum['MOBILE_COMBUSTION_KEY_ID']) {

            return CARBON_CONSTANT['MOBILE_COMBUSTION_VIEW'];
        }
        else if (activityKeyID == ActivityKeyIDEnum['WASTE_GENERATED_IN_OPERATIONS_KEY_ID']) {

            return CARBON_CONSTANT['WASTE_GENERATED_IN_OPERATIONS_VIEW'];
        }
        else if (activityKeyID == ActivityKeyIDEnum['PURCHASED_GOODS_AND_SERVICES_KEY_ID']) {
           
            return CARBON_CONSTANT['PURCHASED_GOODS_AND_SERVICES_VIEW'];
        } else {
           
            return null;
        }
    }
}
