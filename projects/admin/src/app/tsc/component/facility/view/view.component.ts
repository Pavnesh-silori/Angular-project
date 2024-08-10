import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// tsc-library
import { StorageService } from '@library/storage-service';
import { FacilityService, FacilityM, Facility } from '@library/facility-service';
// /tsc-library/
import { COMMON_CONSTANT } from '@library/tsc-common';
import { Month } from '@Admin/constants/month.constant';
@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    rootOrgID: any;
    facilityID: any;
    month: any;
    facilityM: FacilityM = new Facility();
    filterMonth: any = {
        keyID: null,
        name: ''
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private facilityService: FacilityService,
    ) { }

    ngOnInit(): void {

        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.params.subscribe((param) => {
            this.facilityID = param['facilityID']
        });

        this.getFacilityByID();

    }

    async getFacilityByID() {
        this.facilityM = <FacilityM>await this.facilityService.getFacilityByID(this.rootOrgID, this.facilityID);
    }

    reportingPeriodName(reportingPeriodKeyID) {
        this.filterMonth = Month.filter(filterMonth => filterMonth['keyID'] == reportingPeriodKeyID);

        if (this.filterMonth.length > 0) {
            return this.filterMonth[0]['name'];
        } else {
            return;
        }
    }

}