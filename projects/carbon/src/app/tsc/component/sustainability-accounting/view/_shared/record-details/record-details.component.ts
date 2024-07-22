import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';

import { ViewUtility } from '../view.utility';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { ProfileImg } from '@library/user-service';

import { UserService } from '@library/user-service';
import { CARBON_RECORD_VIEW } from '@carbon/constant/carbon-record-view.constant';

@Component({
    selector: 'record-details',
    templateUrl: './record-details.component.html',
    styleUrls: ['../../view.component.scss']
})
export class RecordDetailsComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    ProfileImg = ProfileImg;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    @Input() recordData: any;
    @Input() calAppInEmployComm: any;

    activityData: any;
    activityConfig: any;
    activityConfigData: any;
    source: any;

    activityKeyID: any;

    isEmployeeCommutingAverageMethod: boolean;
    isEmployeeCommutingDistanceFuelMethod: boolean;

    isScope2: boolean = false;
    isScope3SpendBased: boolean = false;
    isStationaryCombustion: boolean = false;
    isMobileCombustion: boolean = false;
    isWasteTreatmentActivity: boolean = false;
    isOtherFugutiveActivity: boolean = false;

    constructor(
        public userService: UserService,
        private viewUtil: ViewUtility,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.recordData?.currentValue != null) {
            this.activityData = this.recordData['activityData'];
            if (this.activityData != null) {
                this.activityKeyID = this.activityData['activityKeyID'];
            }
            this.activityConfigData = this.recordData['activityConfigData'];
            this.source = this.recordData['activityConfigSource'];
            this.renderView();
        }

        if (changes.calAppInEmployComm?.currentValue != null) {
            if (this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_AVGERAGE_METHOD) {
                this.isEmployeeCommutingAverageMethod = true;
            } else if (this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_DISTANCE_FUEL_METHOD) {
                this.isEmployeeCommutingDistanceFuelMethod = true;
            }
        }
    }

    renderView() {
        const view = this.viewUtil.renderView(this.activityKeyID);
        switch (view) {
            case CARBON_RECORD_VIEW.SCOPE_2_VIEW:
                this.isScope2 = true;
                break;
            case CARBON_RECORD_VIEW.SCOPE_3_SPEND_BASED_VIEW:
                this.isScope3SpendBased = true;
                break;
            case CARBON_RECORD_VIEW.STATIONARY_COMBUSTION_VIEW:
                this.isStationaryCombustion = true;
                break;
            case CARBON_RECORD_VIEW.MOBILE_COMBUSTION_VIEW:
                this.isMobileCombustion = true;
                break;
            case CARBON_RECORD_VIEW.WASTE_GENERATED_IN_OPERATIONS_VIEW:
                this.isWasteTreatmentActivity = true;
                break;
            case CARBON_RECORD_VIEW.OTHER_FUGUTIVE:
                this.isOtherFugutiveActivity = true;
                break;
            case CARBON_RECORD_VIEW.PURCHASED_GOODS_AND_SERVICES_VIEW:
                this.isWasteTreatmentActivity = true;
                break;
            case CARBON_RECORD_VIEW.CAPITAL_GOODS_VIEW:
                this.isWasteTreatmentActivity = true;
                break;
            default:
                console.log('unidentifiedeeeeeeeeeeeeee case encountered - ', view);
        }
    }

    ngOnInit(): void { }
}
