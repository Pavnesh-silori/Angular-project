import { Component, OnInit } from '@angular/core';

import { OrgSizeEnum } from '@carbon/enum/sbti.enum';
import { SbtiBaseYearEmission, SbtiBaseYearEmissionM, SbtiSetting, SbtiSettingM } from '@carbon/model/sbti.model';

import { SbtiService } from '@carbon/service/sbti.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: []
})

export class ViewComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    
    OrgSize = OrgSizeEnum;
    rootOrgID: any;
    unit: any;
    showSbtiBYEConfirmation: boolean = false;
    sbtiSetting = new SbtiSetting();
    sbtiBaseYearEmissionM: SbtiBaseYearEmissionM = new SbtiBaseYearEmission();
    emissionData: any;

    isSBTiSettingExist: boolean = true;

    constructor(
        private storageService: StorageService,
        private sbtiService: SbtiService
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.getSBTiSettingsByOrgID();
    }

    async getSBTiSettingsByOrgID() {
        this.sbtiSetting = <SbtiSettingM>await this.sbtiService.getSbtiSettingsByOrgID(this.rootOrgID);

        this.isSBTiSettingExist = true;
        if (!this.sbtiSetting.id) {
            this.isSBTiSettingExist = false;
        }
    }
}
