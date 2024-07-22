
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { NearTermComponent } from '../near-term/near-term.component';
import { LongTermComponent } from '../long-term/long-term.component';

import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { SBTITargetSetBooleans } from '@carbon/model/sbti.model';
import { ScopeCoverageEnum } from '@carbon/enum/sbti.enum';

import { SbtiController } from '@carbon/controller/sbti.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';

// tsc-library
import { StorageService } from '@library/storage-service';

// /tsc-library
@Component({
    selector: 'app-create-home',
    templateUrl: './create-home.component.html',
    styleUrls: ['./create-home.component.scss']
})
export class CreateHomeComponent implements OnInit {
    currentOrgID: any;

    isBaseYearSet: boolean;
    isEmissionConfirmed: boolean = false;

    isNearTermReductionTargetSet = false;  //NEAR_TERM_REDUCTION
    isNearTermRenewableTargetSet = false;  //NEAR_TERM_RENEWABLE
    isNearTermEngagementTargetSet = false;  //NEAR_TERM_ENGAGEMENT
    isLongTermNetzeroTargetSet = false; //LONG_TERM_NETZERO
    isLongTermRenewableTargetSet = false; //LONG_TERM_RENEWABLE

    isNearTermReductionTargetSetForScope1And2 = false;
    isNearTermReductionTargetSetForScope3 = false;
    isLongTermNetzeroTargetSetForScope1And2 = false;
    isLongTermNetzeroTargetSetForScope3 = false;

    baseYearMsg: string;
    nearTermReductionTargetMsg: string;
    longTermNetzeroTargetMsg: string;

    constructor(
        private dialog: MatDialog,
        private selfDialogRef: MatDialogRef<CreateHomeComponent>,
        private sbtiController: SbtiController,
        private baseYearController: BaseYearController,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.getScienceBasedTarget();
        this.getBaseYearByType();
    }

    getBaseYearByType() {
        this.baseYearController.getBaseYearByType(this.currentOrgID, BaseYearEnum.SBTI_BASE_YEAR)
            .subscribe((baseYear) => {
                if (baseYear) {
                    this.isEmissionConfirmed = true;
                }
            })
    }

    getScienceBasedTarget() {
        this.sbtiController.isSBTiEnterpriseTargetSet(this.currentOrgID).subscribe((response: SBTITargetSetBooleans) => {
            //NEAR_TERM_REDUCTION target
            this.isNearTermReductionTargetSet = response.reductionTarget.flag;
            this.nearTermReductionTargetMsg = response.reductionTarget.message;
            this.isNearTermReductionTargetSetForScope1And2 = response.reductionTarget.scopeCheck.isScope1AndTwoSet;
            this.isNearTermReductionTargetSetForScope3 = response.reductionTarget.scopeCheck.isScope3Set;

            //LONG_TERM_NETZERO target
            this.isLongTermNetzeroTargetSet = response.netzeroTarget.flag;
            this.longTermNetzeroTargetMsg = response.netzeroTarget.message;
            this.isLongTermNetzeroTargetSetForScope1And2 = response.netzeroTarget.scopeCheck.isScope1AndTwoSet;
            this.isLongTermNetzeroTargetSetForScope3 = response.netzeroTarget.scopeCheck.isScope3Set;
        }, (error) => {
            console.log("error--", error);
        })
    }

    setNearTermTarget() {
        this.dialog.open(NearTermComponent, {
            data: {
                scope: this.getScope(this.isNearTermReductionTargetSetForScope1And2, this.isNearTermReductionTargetSetForScope3)
            },
            minWidth: '40vw',
            maxWidth: '40vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        this.selfDialogRef.close();
    }

    setLongTermTarget() {
        this.dialog.open(LongTermComponent, {
            data: {
                scope: this.getScope(this.isLongTermNetzeroTargetSetForScope1And2, this.isLongTermNetzeroTargetSetForScope3)
            },
            minWidth: '40vw',
            maxWidth: '40vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        this.selfDialogRef.close();
    }

    getScope(isForScope1_2, isForScope3) {
        if (isForScope1_2 && isForScope3) {
            return null;
        } else if (isForScope1_2) {
            return ScopeCoverageEnum.SCOPE_1_2;
        } else {
            return ScopeCoverageEnum.SCOPE_3;
        }
    }
}
