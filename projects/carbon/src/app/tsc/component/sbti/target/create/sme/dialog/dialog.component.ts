import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTooltip } from '@angular/material/tooltip';


import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MaintenanceComponent } from '../near-term/maintenance/maintenance.component'; 
import { ReductionComponent as NearTermReductionComponent } from '../near-term/reduction/reduction.component'; 
import { ReductionComponent as LongTermReducitonComponent } from '../long-term/reduction/reduction.component';

import { LongTermEnum, NearTermEnum } from '@carbon/enum/sbti.enum';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';

import { SBTITargetSetBooleans, SbtiBaseYearEmission } from '@carbon/model/sbti.model';

import { SbtiController } from '@carbon/controller/sbti.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

    NearTerm = NearTermEnum;
    LongTerm = LongTermEnum;

    @ViewChild("myTooltip") myTooltip: MatTooltip
    @ViewChild("myTooltip1") myTooltip1: MatTooltip

    isReductionTargetSet = false;
    isMaintenanceTargetSet = false;
    isNetzeroTargetSet = false;
    isBaseYearSet: boolean;

    baseYearMsg: string;
    reductionTargetYearMsg: string;
    maintenanceTargetYearMsg: string;
    netZeroTargetYearMsg: string;

    currentOrgID: any;
    backendValue: any;
    baseYearEmission = new SbtiBaseYearEmission;

    scope1Valid: boolean = false;
    scope2Valid: boolean = false;
    scope3Valid: boolean = false;

    emissionData: any;

    constructor(
        private dialog: MatDialog,
        private selfDialogRef: MatDialogRef<DialogComponent>,
        private storageService: StorageService,
        private sbtiController: SbtiController,
        private baseYearController: BaseYearController,
    ) { }

    async ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.getScienceBasedTarget();
        this.getBaseYearByType();
    }

    isEmissionConfirmed: boolean = false;
    getBaseYearByType() {
        this.baseYearController.getBaseYearByType(this.currentOrgID, BaseYearEnum.SBTI_BASE_YEAR)
            .subscribe((baseYear) => {
                if (baseYear) {
                    this.isEmissionConfirmed = true;
                }
            })
    }

    canCreateTarget(targetType) {
        switch (targetType) {
            case NearTermEnum.NEAR_TERM_REDUCTION:
                return this.isReductionTargetSet;
            case NearTermEnum.NEAR_TERM_MAINTENANCE:
                return this.isMaintenanceTargetSet;
            case LongTermEnum.LONG_TERM_NETZERO:
                return this.isNetzeroTargetSet;
            default:
                return false;
        }
    }

    getScienceBasedTarget() {
        this.sbtiController.isSBTITargetSet(this.currentOrgID).subscribe((response: SBTITargetSetBooleans) => {
            this.isReductionTargetSet = response.reductionTarget.flag;
            this.isMaintenanceTargetSet = response.maintenanceTarget.flag;
            this.isNetzeroTargetSet = response.netzeroTarget.flag;
            this.reductionTargetYearMsg = response.reductionTarget.message;
            this.maintenanceTargetYearMsg = response.maintenanceTarget.message;
            this.netZeroTargetYearMsg = response.netzeroTarget.message;
        }, (error) => {
            console.log("error--", error);
        })
    }

    setNearTermTarget(targetType) {
        this.dialog.open(NearTermReductionComponent, {
            data: { targetType: targetType },
            minWidth: '40vw',
            maxWidth: '40vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        this.selfDialogRef.close();
    }

    setMaintenanceTarget() {
        this.dialog.open(MaintenanceComponent, {
            minWidth: '40vw',
            maxWidth: '40vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        this.selfDialogRef.close();
    }

    setLongTermTarget() {
        this.dialog.open(LongTermReducitonComponent, {
            minWidth: '40vw',
            maxWidth: '40vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        this.selfDialogRef.close();
    }

}
