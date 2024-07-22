import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../create/sme/dialog/dialog.component';
import { CreateHomeComponent } from '../create/enterprise/create-home/create-home.component';

import { OrgSizeEnum } from '@carbon/enum/sbti.enum';
import { TargetBenchmarkEnum } from '@carbon/enum/target-benchmark.enum';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { SbtiBaseYearEmission, SbtiSetting, SbtiSettingM, ScopeConfirmedEmissionM } from '@carbon/model/sbti.model';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';


import { BaseYearController } from '@carbon/controller/base-year.controller';
import { SbtiController } from '@carbon/controller/sbti.controller';

import { SbtiService } from '@carbon/service/sbti.service';
import { BaseYearService } from '@carbon/service/base-year.service';

import { TargetUtility } from '../target.utility';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
    faPlus = faPlus;
    OrgSize = OrgSizeEnum;
    rootOrgID: any;

    panelOpenState = true;
    showInfo = true;
    showScienceBaseTargetImg = false;

    TargetBenchmark: TargetBenchmarkEnum;

    viewMore: boolean = true;

    yearlyGrowthPercentage: number;
    yearlyGrowthSince: number;
    validatedCompanies: number;

    sbtiSetting = new SbtiSetting();
    sbtiBaseYear: any;
    sbtiEmissionRes = new SbtiBaseYearEmission();
    allScopeConfirmed: boolean = false;

    baseYearType: string = 'SBTi';
    baseYearRouteKey: string = 'sbti';
    isBaseYearExists: boolean = false;
    isSBTiSettingExist: boolean = false;
    isBaseYearSameAsGHG: Boolean = false;

    sbtiConfirmedEmissionRes: ScopeConfirmedEmissionM[] = [];

    orgSizeKeyID: string;
    initTargetSub: Subscription;

    refresh: boolean = true;
    isTargetExist: boolean = false;

    constructor(
        private targetUtility: TargetUtility,
        private storageUtility: StorageService,
        private sbtiService: SbtiService,
        private baseYearService: BaseYearService,
        private sbtiController: SbtiController,
        private baseYearController: BaseYearController,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageUtility.getStorage('rootOrgID');
        this.yearlyGrowthPercentage = TargetBenchmarkEnum.YEARLYGROWTHPERCENTAGE;
        this.yearlyGrowthSince = TargetBenchmarkEnum.YEARLYGROWTHSINCE;
        this.validatedCompanies = TargetBenchmarkEnum.VALIDATEDCOMPANIES;

        this.getSbtiSettingsByOrgID();
        this.getSbtiBaseYearConfirmedEmission();
    }

    ngAfterViewInit() {
        this.initTargetSub = this.targetUtility.$target.subscribe(() => this.getIfTargetExist());
    }

    async getSbtiBaseYearConfirmedEmission() {
        this.sbtiConfirmedEmissionRes = <ScopeConfirmedEmissionM[]>await this.baseYearService.getSbtiBaseYearConfirmedEmission(this.rootOrgID);
    }

    scienceBasesTarget() {
        let config = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = {};
        config['minWidth'] = '900px';
        config['maxWidth'] = '900px';
        if (this.sbtiSetting['orgSizeKeyID'] == OrgSizeEnum.SME) {
            this.dialog.open(DialogComponent, config);
        } else {
            this.dialog.open(CreateHomeComponent, config);
        }
    }

    async getSbtiSettingsByOrgID() {
        this.sbtiSetting = <SbtiSettingM>await this.sbtiService.getSbtiSettingsByOrgID(this.rootOrgID);
        if (this.sbtiSetting.orgSizeKeyID) {
            this.isSBTiSettingExist = true;
            this.sbtiBaseYear = this.sbtiSetting['sbtiBaseYear'];
            this.isBaseYearSameAsGHG = this.sbtiSetting.isBaseYearSameAsGHG;
            this.orgSizeKeyID = this.sbtiSetting.orgSizeKeyID

            let baseYearType = BaseYearEnum.SBTI_BASE_YEAR;
            if (this.isBaseYearSameAsGHG) {
                this.baseYearType = 'GHG';
                this.baseYearRouteKey = 'ghg';
                baseYearType = BaseYearEnum.GHG_BASE_YEAR;
            }

            this.getBaseYearByOrgIDAndType(baseYearType);
            this.getIfTargetExist();
        }
    }

    getBaseYearByOrgIDAndType(type) {
        this.baseYearController.getBaseYearByType(this.rootOrgID, type)
            .subscribe((res: any) => {
                if (res?.baseYear) this.isBaseYearExists = true;
            });
    }

    getIfTargetExist() {
        this.sbtiController.getIfAnyTargetExist(this.rootOrgID)
            .subscribe((res: any) => {
                this.isTargetExist = res;
                if(this.isTargetExist) this.initTargetSub.unsubscribe();
            })
    }
}

