// Below are shared for this component
// PROCESS_ELECTRICITY_CONSUMPTION
// PROCESS_HEAT_CONSUMPTION

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-electricity-consumption-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})

export class ElectricityConsumptionActivityConfigViewComponent implements OnInit {
    constructor(
        activatedRoute: ActivatedRoute,
    ) {
        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
    }

    // tsc-library
    COMMON_CONSTANT = COMMON_CONSTANT;
    // /tsc-library/

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    activityKeyID: ActivityKeyIDEnum;
    activityConfig: any;
    entityTypeLabel: string = 'Entity';

    ngOnInit(): void {
        this.setEntityTypeLabel(this.activityKeyID);
    }

    setEntityTypeLabel(activityKeyID: ActivityKeyIDEnum) {
        switch (activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION:
                this.entityTypeLabel = 'Electricity Source';
                break;
            case ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION:
                this.entityTypeLabel = 'Heat Source';
                break;
        }
    }
}

