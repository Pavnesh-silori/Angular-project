import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';
import { CARBON_RECORD_VIEW } from '@carbon/constant/carbon-record-view.constant';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { ViewUtility } from '../view.utility';

@Component({
    selector: 'emission-details',
    templateUrl: './emission-details.component.html',
    styleUrls: ['../../view.component.scss']
})
export class EmissionDetailsComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;

    @Input() recordData: any;
    @Input() emissionData: any;
    @Input() wasteActivityData: any;
    @Input() calAppInEmployComm: any;

    emission: any;
    activityConfigData: any;

    activityKeyID: any;

    getEmissionForTransport: any;
    getEmissionForVehicle: any;


    isEmployeeCommutingAverageMethod: boolean;
    isEmployeeCommutingDistanceFuelMethod: boolean;


    constructor(
        public viewUtil: ViewUtility,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.emissionData?.currentValue != null) {
            this.emission = this.emissionData;
            let getAllEmission = this.emission.modeOfTransPortEmission;
            if (getAllEmission != null) {
                this.emission = this.emission['calculationDetails'];
                this.getEmissionForTransport = getAllEmission.filter((element, index, self) => {
                    return index === self.findIndex(e => e.modeOfTransportName === element.modeOfTransportName);
                });

            }
            this.getEmissionForVehicle = this.emission.primaryEmissionModesForVehicle;
        }
        if (changes.recordData?.currentValue != null && changes.recordData?.currentValue !== 'undefined') {
            this.activityConfigData = this.recordData['activityConfigData'];
            this.activityKeyID = this.recordData['activityData']?.activityKeyID;

            this.renderView();
        }
        if (changes.wasteActivityData?.currentValue != null && changes.wasteActivityData?.currentValue !== 'undefined') {
            this.activityKeyID = this.wasteActivityData['activityKeyID'];

            this.renderView();
        }

        if (changes.calAppInEmployComm?.currentValue != null) {
            if (this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_AVGERAGE_METHOD) {
                this.isEmployeeCommutingAverageMethod = true;
            } else if (
                this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_DISTANCE_FUEL_METHOD ||
                this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_FUEL_METHOD) {
                this.isEmployeeCommutingDistanceFuelMethod = true;
            }
        }

    }

    ngOnInit(): void { }

    isScope2: boolean = false;
    isScope3SpendBased: boolean = false;
    isStationaryCombustion: boolean = false;
    isMobileCombustion: boolean = false;
    isWasteTreatmentActivity: boolean = false;

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
            default:
                console.log('unidentifiedqqqqqqq case encountered - ', view);
        }
    }

}

