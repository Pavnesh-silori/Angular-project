import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { TimelineController } from '@carbon/controller/timeline.controller';



@Component({
    selector: 'app-group-level',
    templateUrl: './group-level.component.html',
    styleUrls: ['./group-level.component.scss']
})
export class GroupLevelChangeComponent implements OnInit {
    
    rootOrgID: any;
    baseYearKeyID: any;

    recalculationID: any;
    recalculationTrigger: any;
    recalculationRequestID: any;

    emissionDiff = [];

    dialogTitle: 'Trigger change impact';

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private timelineController: TimelineController
    ) {
        this.rootOrgID = data['rootOrgID'];
        this.baseYearKeyID = data['baseYearKeyID'];
        this.recalculationID = data?.['recalculationID'] ? data['recalculationID'] : null;
        this.recalculationTrigger = data['recalculationTrigger'];
        this.recalculationRequestID = data['recalculationRequestID'];
        
        this.dialogTitle = this.title(this.recalculationTrigger);
    }

    title(trigger: string): any {
        switch (trigger) {
            case CARBON_CONSTANT['SETTING_CHANGE']:
                return 'Calculation Preference update';
            case CARBON_CONSTANT['CUSTOM_EMISSION_FACTOR']:
                return 'Custom emission factor';
            case CARBON_CONSTANT['CUSTOM_ESTIMATION_FACTOR']:
                return 'Custom estimation factor';
            default:
                return 'Calculation Preference update';
        }
    }

    ngOnInit(): void {
        this.getTriggerEmissionDiff();
    }

    getTriggerEmissionDiff() {
        this.timelineController.getTriggerEmissionDiff(this.rootOrgID, this.baseYearKeyID, this.recalculationTrigger, this.recalculationRequestID, this.recalculationID)
            .subscribe((res: any) => {
                this.emissionDiff = res;
            }, error => {
                console.log('Error in getTriggerEmissionDiff() - ', error);
            });
    }

}
