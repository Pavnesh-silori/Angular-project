import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { ViewUtility } from '../view.utility';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// tsc-library

@Component({
    selector: 'view-header',
    templateUrl: './view-header.component.html',
    styles: []
})
export class ViewHeaderComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    @Input() title: any;
    @Input() cedID: any;
    @Input() recordData: any;
    @Input() view: boolean = false;
    @Input() isUpdate: boolean = false;

    activityDataID: number = 0;

    activityData: any;
    activityConfigData: any;
    activityConfigSource: any;

    activityID: any;
    activityKeyID: any;
    
    constructor(
        private storageService: StorageService,
        private viewUtil: ViewUtility,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.recordData?.currentValue != null) {
            this.activityData = this.recordData['activityData'];
            this.activityID = this.activityData['activityID'];
            this.activityKeyID = this.activityData['activityKeyID'];
            this.activityConfigData = this.recordData['activityConfigData'];
            this.activityConfigSource = this.recordData['activityConfigSource'];

            this.renderView();
        }
    }
    
    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
    }

    isScope2: boolean = false;
    isScope3SpendBased: boolean = false;
    isStationaryCombustion: boolean = false;
    isMobileCombustion: boolean = false;
    isWasteTreatmentActivity: boolean = false;
    // isPurchasedGoodsAndServicesActivity: boolean = false;
    renderView() {
        let view = this.viewUtil.renderView(this.activityKeyID);
        if (view == CARBON_CONSTANT['SCOPE_2_VIEW']) {
            this.isScope2 = true;
        } else if (view == CARBON_CONSTANT['SCOPE_3_SPEND_BASED_VIEW']) {
            this.isScope3SpendBased = true;
        } else if (view == CARBON_CONSTANT['STATIONARY_COMBUSTION_VIEW']) {
            this.isStationaryCombustion = true;
        } else if (view == CARBON_CONSTANT['MOBILE_COMBUSTION_VIEW']) {
            this.isMobileCombustion = true;
        } else if (view == CARBON_CONSTANT['WASTE_GENERATED_IN_OPERATIONS_VIEW']) {
            this.isWasteTreatmentActivity = true;
        }else if (view == CARBON_CONSTANT['PURCHASED_GOODS_AND_SERVICES_VIEW']) {
            this.isWasteTreatmentActivity = true;
        }
    }

}
