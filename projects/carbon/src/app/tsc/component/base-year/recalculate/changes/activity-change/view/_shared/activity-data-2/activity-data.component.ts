import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { DataEntryMethod } from '@carbon/enum/data-entry-mehtod.enum';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { ViewUtility } from '../view.utility';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'activity-data',
    templateUrl: './activity-data.component.html',
    styleUrls: ['../../view.component.scss']
})
export class ActivityDataComponent implements OnInit {

    @Input() recordData: any;
    @Input() wasteActivityData: any;
    @Input() diff: any;
    @Input() up_diff;
    @Input() down_diff;

    COMMON_CONSTANT = COMMON_CONSTANT;

    activityData: any;
    activityConfigData: any;

    dataInputMethod = DataEntryMethod.ENERGY_CONSUMED;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    constructor(
        public viewUtil: ViewUtility,
    ) { }

    isChanged(key) {
        return this.diff.includes(key);
    }

    increased = (key) => {
        return this.up_diff.includes(key);
    }
    decreased = (key) => {
        return this.down_diff.includes(key);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.recordData?.currentValue != null) {
            this.activityData = this.recordData['activityData'];
            this.activityConfigData = this.recordData['activityConfigData'];
            
            this.activityKeyID = this.activityData['activityKeyID'];
            this.dataInputMethod = this.recordData.activityConfigData.dataInputMethodKeyID;

            this.renderView();

            console.log(this.up_diff, this.down_diff)

        } else if (changes.wasteActivityData.currentValue != null) {
            this.activityData = this.wasteActivityData['activityData'];
            this.activityKeyID = this.wasteActivityData['activityKeyID'];

            this.renderView();
        }
    }

    isScope2: boolean = false;
    isSpendBased: boolean = false;
    isStationaryCombustion: boolean = false;
    isMobileCombustion: boolean = false;
    isWasteTreatmentActivity: boolean = false;
    activityKeyID: any;
    renderView() {
        let view = this.viewUtil.renderView(this.activityKeyID);
        if (view == CARBON_CONSTANT['SCOPE_2_VIEW']) {
            this.isScope2 = true;
        } else if (view == CARBON_CONSTANT['SCOPE_3_SPEND_BASED_VIEW']) {
            this.isSpendBased = true;
        } else if(view == CARBON_CONSTANT['STATIONARY_COMBUSTION_VIEW']) {
            this.isStationaryCombustion = true;
        } else if(view == CARBON_CONSTANT['MOBILE_COMBUSTION_VIEW']) {
            this.isMobileCombustion = true;
        } else if (view == CARBON_CONSTANT['WASTE_GENERATED_IN_OPERATIONS_KEY_ID']) {
            this.isWasteTreatmentActivity = true;
        }
    }

    ngOnInit(): void { }

}

