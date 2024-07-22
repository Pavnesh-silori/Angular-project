import { Component, OnInit } from '@angular/core';



import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EmissionConfirmationDialog } from '../create/_shared/emission-confirmation-dialog/emission-confirmation.dialog';

import { cloneDeep } from 'lodash-es';

import { UpdateComponent } from '../dialog/update/update.component';

import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { ConsolidationApproachKeyIDEnum } from '@carbon/enum/consolidation-approach.enum';
import { ScopeTwoMethodEnum } from '@carbon/enum/sbti.enum';
import { ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model';
import { SbtiSettingM } from '@carbon/model/sbti.model';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { SbtiService } from '@carbon/service/sbti.service';
import { BaseYearService } from '@carbon/service/base-year.service';
import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';

import { BaseYearController } from '@carbon/controller/base-year.controller';

// tsc-library
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';


// tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;

    CARBON_CONSTANT = CARBON_CONSTANT;

    ScopeTwoMethod = ScopeTwoMethodEnum;

    rootOrgID: any;
    emissionData: any;
    baseYearData: any;

    emissionRes: ghgBaseYearEmissionViewM[];
    consolidationApproach: any = [];

    baseYearType: string;
    baseYearKeyID: string;
    baseYearRouteKey: string;

    sbtiSettings: any;
    isSbtiBaseYear: boolean = false;

    editEmission: boolean = false;
    useTSCEmission: boolean = true;
    isBaseYearSameAsGHG: Boolean = false;
    editableEmissionData: any;

    isBaseYearExist: boolean = true;

    showMore: boolean = false;

    scopeSum: number[] = [];
    totalEmission: number = 0;

    emissionBlockWidth = 550;

    unit: any = CARBON_CONSTANT.DEFAULT_EMISSION_UNIT;

    constructor(
        private activatedRoute: ActivatedRoute,
        private sbtiService: SbtiService,
        private storageService: StorageService,
        private baseYearService: BaseYearService,
        private consolidationApproachService: ConsolidationApproachService,
        private dialog: MatDialog,
        private baseYearController: BaseYearController,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.activatedRoute.data.subscribe((data) => {
            this.isSbtiBaseYear = (data['base_year'] == BaseYearEnum.SBTI_BASE_YEAR);

            this.baseYearKeyID = data['base_year'];
            this.baseYearType = (this.isSbtiBaseYear ? 'SBTi' : 'GHG');
            this.baseYearRouteKey = (this.isSbtiBaseYear ? 'sbti' : 'ghg');
        });

        if (!this.isSbtiBaseYear) {
            this.getAllConsolidationApproachByOrgID();
        }
        this.getSBTiSettingByOrgID();
        this.baseYearAndEmission();
    }

    async getAllConsolidationApproachByOrgID() {
        this.consolidationApproach = <any>await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);
        this.emissionBlockWidth = this.emissionBlockWidth * this.consolidationApproach.length;
    }

    async getSBTiSettingByOrgID() {
        this.sbtiSettings = <SbtiSettingM>await this.sbtiService.getSbtiSettingsByOrgID(this.rootOrgID);

        if (this.sbtiSettings?.orgSizeKeyID) {
            this.isBaseYearSameAsGHG = this.sbtiSettings.isBaseYearSameAsGHG;
            if (this.isBaseYearSameAsGHG) {
                this.baseYearType = 'GHG and SBTi';
            }
        }
    }

    getDataKey(consolidationApproachKey) {
        switch (consolidationApproachKey) {
            case ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH:
                return 'equityControl';
            case ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH:
                return 'financialControl';
            case ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH:
                return 'operationalControl';
            default:
                console.error('undefined case encountered - ', consolidationApproachKey);
        }
    }

    get width() {
        if (this.isSbtiBaseYear || this.consolidationApproach.length <= 1) {
            return '100%';
        } else {
            return this.emissionBlockWidth + 'px';
        }
    }

    haveValue(value): boolean {
        if (value != null && value >= 0) return true;
        return false;
    }

    async baseYearAndEmission() {
        this.emissionRes = <any>await this.baseYearService.getBaseYearEmissions(this.rootOrgID, this.baseYearKeyID);
        if (this.emissionRes != null) {
            this.isBaseYearExist = true;

            this.baseYearData = this.emissionRes;
            this.useTSCEmission = this.baseYearData['useTSCEmission'];
            this.emissionData = this.emissionRes['emissionData'];

            this.addEmissions(this.emissionData)
        } else {
            this.isBaseYearExist = false;
        }
    }

    addEmissions(emissionData) {
        if (this.isSbtiBaseYear) {
            for (let scopeEmission of emissionData) {
                let emission = 0;
                for (let activityEmission of scopeEmission.scope.activity) {
                    emission += activityEmission.emission != null ? activityEmission.emission.emission : 0;
                    emission += activityEmission.biogenicEmission != null ? activityEmission.biogenicEmission.emission : 0;
                }
                this.scopeSum.push(emission);
            }
        } else {
            let consolidationApproachKeys = ['financialControl', 'equityControl', 'operationalControl'];
            for (let scopeEmission of emissionData) {
                let emission = 0;
                for (let activityEmission of scopeEmission.scope.activity) {
                    consolidationApproachKeys.map((ca_key) => {
                        emission += this.getEmission(activityEmission, ca_key);
                    });
                }
                this.scopeSum.push(emission);
            }
        }
        this.totalEmission = this.scopeSum.reduce((accumulator, currentValue) => accumulator + currentValue, this.totalEmission);
    }

    getEmission(activity, calculationApproachKey): number {
        let emission = 0;
        emission += activity[calculationApproachKey].emission != null ? activity[calculationApproachKey].emission.emission : 0;
        emission += activity[calculationApproachKey].biogenicEmission != null ? activity[calculationApproachKey].biogenicEmission.emission : 0;
        return emission;
    }

    openEmissionConfirmationDialog(emissionData, action) {
        let dialogRef;
        let data = {
            action: action,
            emissionData: emissionData,
            unit: this.unit,
            baseYear: this.baseYearData.baseYear,
            baseYearType: this.baseYearType,
        };

        dialogRef = this.dialog.open(EmissionConfirmationDialog, {
            data: data,
            minWidth: '1000px',
            maxWidth: '1000px',
        });

        let prevConfirmedActivities = emissionData.confirmedActivities;
        dialogRef.afterClosed().subscribe(res => {
            if (res?.value) {
                const newEmission = res.value?.emissions;
                emissionData['scope']['activity'].forEach(activity => {
                    newEmission.forEach(emission => {
                        if (activity['id'] == emission['activityID']) {
                            activity['emission'] = emission['emission'];
                            activity['biogenicEmission'] = emission['biogenicEmission'];
                            activity['uomID'] = res.value?.unitID;
                        }
                    });
                });
            } else {
                emissionData.confirmedActivities = prevConfirmedActivities;
            }
        });
    }

    calculateProgress(data) {
        const progress = (data?.confirmedActivities / data?.totalActivities) * 100;
        return progress;
    }

    cancelEdit() {
        this.editEmission = false;
    }

    editEmissions() {
        this.editEmission = true;
        this.editableEmissionData = cloneDeep(this.emissionData);
    }

    allEmissionsAreConfirmed() {
        let allEmissionsConfirmed: boolean = true;
        this.editableEmissionData?.forEach((element) => {
            if (allEmissionsConfirmed) allEmissionsConfirmed = (element.confirmedActivities == element.totalActivities)
        })
        return allEmissionsConfirmed;
    }

    get emissionDataArr() {
        let allActivityEmission = [];
        this.editableEmissionData.forEach(data => {
            let activityEmission = data.scope.activity.map(({ id, emission, biogenicEmission, uomID }) => ({ activityID: id, emission, biogenicEmission, unitID: uomID }));
            allActivityEmission.push(...activityEmission);
        });
        return allActivityEmission;
    }

    saveEmission() {
        if (!this.allEmissionsAreConfirmed()) {
            console.error('invalid emission data - ', this.editableEmissionData);
            return;
        }
        this.baseYearController.updateBaseYearEmission(this.rootOrgID, this.baseYearKeyID, this.emissionDataArr)
            .subscribe((res) => {
                this.editEmission = false;
                this.baseYearAndEmission();
            }, error => {
                console.error(' error in saveEmission() -', error);
            });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(UpdateComponent, {
            data: {
                baseYearKeyID: this.baseYearKeyID,
                isSbtiBaseYear: this.isSbtiBaseYear
            },
            minWidth: '500px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result == DialogEnum.SUCCESS_DR){
                this.baseYearAndEmission();
            }
            else{
                error => {
                    console.error(' error in closing dialog -', error);
                }
            }
        });
    }
}
