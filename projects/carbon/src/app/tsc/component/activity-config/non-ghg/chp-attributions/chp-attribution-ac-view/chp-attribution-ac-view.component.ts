import { Component, OnInit } from '@angular/core';

import { HeatTransferMediumKeyIDEnum } from '@carbon/enum/cbam.enum';

@Component({
    selector: 'app-chp-attribution-ac-view',
    templateUrl: './chp-attribution-ac-view.component.html',
    styles: []
})

export class ChpAttributionActivityConfigViewComponent implements OnInit {
    activityConfig: any;

    HeatTransferMediumKeyIDEnum = HeatTransferMediumKeyIDEnum;

    constructor() { }

    ngOnInit(): void { }

}
