import { Component, OnInit } from '@angular/core';

import { ProcessEmissionActivityTypeKeyIDEnum } from '@carbon/enum/activity.enum';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-process-emission-activity-config-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})

export class ProcessEmissionActivityConfigViewComponent implements OnInit {
    constructor() { }

    ProcessEmissionActivityTypeKeyIDEnum = ProcessEmissionActivityTypeKeyIDEnum;

    activityConfig: any;
    // activityConfig2: any = {
    //     "activityConfigData": {
    //         "process": {
    //             "type": "STANDARD",
    //             "id": 1,
    //             "name": "process name",
    //             "ipccProcessParamTechMapID": 3,
    //             "parameter": {
    //                 "id": 1,
    //                 "name": "Parameter"
    //             },
    //             "technology": {
    //                 "id": 1,
    //                 "name": "Technology"
    //             }
    //         }
    //     }
    // };


    // tsc-library
    COMMON_CONSTANT = COMMON_CONSTANT;
    // /tsc-library/

    ngOnInit(): void {
    }

    getProcessTypeName(processTypeKeyID): string {
        let name: string;

        switch (processTypeKeyID) {
            case ProcessEmissionActivityTypeKeyIDEnum.STANDARD:
                name = 'Standard';
                break;
            case ProcessEmissionActivityTypeKeyIDEnum.CUSTOM:
                name = 'Custom';
                break;
            default:
                name = null;
        }

        return name;
    }

}
