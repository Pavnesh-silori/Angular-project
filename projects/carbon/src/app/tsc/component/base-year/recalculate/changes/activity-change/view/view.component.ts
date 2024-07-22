
import { Component, Input, OnInit } from '@angular/core';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

@Component({
    selector: 'record-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    ActivityKeyIDEnum = ActivityKeyIDEnum;

    currentOrgID: any;
    gwpDatasetID: any;

    recordData: any;
    emissionData: any;
    gwpDataset: any;
    activityData: any = {};

    calculatedEmissionDataID: any;
    gasGwp: any;

    wasteActivityData: any;

    @Input() cedID: any;
    @Input() view: any;

    @Input() activityDataID: any;
    @Input() sentData: any;
    @Input() activityKeyID: any;
    @Input() isUpdate: boolean;
    @Input() gwpResponse: boolean;

    constructor() { }

    ngOnInit(): void { }

    @Input() diff;
    @Input() up_diff;
    @Input() down_diff;

    @Input() recordType;
    typeClass: string = 'loading';

    title = 'Current record'; 

    ngOnChanges() {
        if (this.sentData != null) {
            this.recordData = this.sentData;
            this.typeClass = this.recordType;
            if(this.recordType == 'previousData') {
                this.title = 'Previous record'
            }
        }
    }

}
