import { Component, OnInit } from '@angular/core';

import { StatusEnum } from '@Admin/enum/status.enum';

//tsc-library
import{COMMON_CONSTANT}from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { OrganizationService } from '@library/organization-service';
import { Organization, OrganizationM } from '@library/organization-service';
// /tsc-library/

import { Month } from '@Admin/constants/month.constant';
@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'
    ]
})
export class ViewComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    StatusEnum = StatusEnum;
    status:any = '';
    rootOrgID: any;
    organizationM = new Organization();

    filterMonth: any = {
        keyID: null,
        name: ''
    };

    constructor(
        private storageService: StorageService,
        public organizationService: OrganizationService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.getOrganizationByID();
    }

    async getOrganizationByID() {
        this.organizationM = <OrganizationM>await this.organizationService.getOrganizationByID(this.rootOrgID);
    }

    reportingPeriodName(reportingPeriodKeyID) {
        this.filterMonth = Month.filter(filterMonth => filterMonth['keyID'] == reportingPeriodKeyID);

        if (this.filterMonth.length > 0) {
            return this.filterMonth[0]['name'];
        } else {
            return;
        }
    }

    getOrgStatus(organizationM){
        this.status = this.organizationService.getOrgStatus(organizationM.status);
        return this.status;
    }
}