import { Component, Inject, OnInit } from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';


import * as moment from 'moment';
import { TargetUtility } from '../../../../target.utility';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { SbtiSettingM } from '@carbon/model/sbti.model';
import { StorageService } from '@library/storage-service';
import { CalculationMethodEnum, LongTermEnum, OrgSizeEnum, SBTiTargetEnum, StatusEnum, StatusList } from '@carbon/enum/sbti.enum';
import { PercentageEnum } from '@carbon/enum/percentage.enum';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';

import { SbtiController } from '@carbon/controller/sbti.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';

import { TargetService } from '../../../target.service';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-reduction',
    templateUrl: './reduction.component.html',
    styleUrls: ['./reduction.component.scss']
})
export class ReductionComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;

    LongTerm = LongTermEnum;
    statusList = StatusList;
    SBTiTarget = SBTiTargetEnum;

    currentOrgID: any;

    targetID: any;
    target: any;
    targetFG: FormGroup;

    totalReduction: number[] = new Array(11).fill(null).map((v, i) => i + 90);

    targetYear;
    annualReduction: number;
    targetPeriod: any;
    sbtiBaseYear: any;
    targetStartYear: any;

    sbtiSettings: SbtiSettingM;
    baseYear: number = null;

    isUpdate: boolean = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<ReductionComponent>,
        private formBuilder: FormBuilder,
        private targetUtility: TargetUtility,
        private storageService: StorageService,
        private sbtiController: SbtiController,
        private baseYearController: BaseYearController,
        private targetService: TargetService,
        private toasterService: ToastrService
    ) {
        dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.targetFGInit();
        this.getSBTiSettings();
        this.getIfNearTermExists();
    }

    ngAfterViewInit() {
        if (this.data?.['targetID']) {
            this.isUpdate = true;

            this.targetID = this.data['targetID'];
            this.getTargetByID(this.targetID);
        }
    }

    targetFGInit() {
        this.targetFG = this.formBuilder.group({
            name: [LongTermEnum.DEFAULT_REDUCTION_TARGET_NAME, [Validators.required]],
            baseYear: [, [Validators.required]],
            targetType: [LongTermEnum.LONG_TERM_NETZERO],
            targetYear: [, [Validators.required]],
            totalReductionPct: [LongTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE, [Validators.required, Validators.min(LongTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE), Validators.max(PercentageEnum.MAX_PERCENTAGE)]],
            excludedEmissionS1S2Pct: [SBTiTargetEnum.DEFAULT_EXCLUDED_EMISSION_PCT],
            excludedEmissionS3Pct: [SBTiTargetEnum.DEFAULT_EXCLUDED_EMISSION_PCT],
            status: [StatusEnum.PENDING, [Validators.required]],
            orgSize: [OrgSizeEnum.SME],
            calculationMethod: [CalculationMethodEnum.CROSS_SECTOR_ABSOLUTE_REDUCTION],
            scope: [[1, 2, 3], Validators.required],
        });

        this.targetYearAC.valueChanges.subscribe((targetYear) => {
            this.targetPeriod = (targetYear - this.baseYear);
            this.annualReduction = parseFloat((this.totalReductionPctAC.value / this.targetPeriod).toFixed(2));
        });

        this.totalReductionPctAC.valueChanges.subscribe((totalReduction) => {
            if (!this.totalReductionPctAC.invalid)
                this.annualReduction = parseFloat((totalReduction / this.targetPeriod).toFixed(2));
        });
    }

    get baseYearAC(): AbstractControl {
        return this.targetFG.get('baseYear') as AbstractControl;
    }

    get targetYearAC(): AbstractControl {
        return this.targetFG.get('targetYear') as AbstractControl;
    }

    get totalReductionPctAC(): AbstractControl {
        return this.targetFG.get('totalReductionPct') as AbstractControl;
    }

    getTargetByID(targetID) {
        this.sbtiController.getTargetByID(this.currentOrgID, targetID)
            .subscribe(target => {
                this.target = target;
                this.targetService.patchData(this.targetFG, this.target);
                this.targetFG.get('scope').patchValue(this.target.scope.map(scope => scope.id));
            });
    }

    getSBTiSettings() {
        this.sbtiController.getSbtiSettingsByOrgID(this.currentOrgID)
            .subscribe((settings: SbtiSettingM) => {
                this.sbtiSettings = settings;

                let type = this.sbtiSettings.isBaseYearSameAsGHG ? BaseYearEnum.GHG_BASE_YEAR : BaseYearEnum.SBTI_BASE_YEAR;
                this.getBaseYearByType(type);
            });
    }

    getBaseYearByType(type) {
        this.baseYearController.getBaseYearByType(this.currentOrgID, type)
            .subscribe((bySetup) => {
                this.baseYear = bySetup['baseYear'];
                this.baseYearAC.patchValue(this.baseYear);
                this.targetYearAC.addValidators(Validators.min(this.baseYear + 1));
            })
    }

    getIfNearTermExists() {
        this.sbtiController.isSBTITargetSet(this.currentOrgID)
            .subscribe(isTargetSet => {
                let currentYear = moment().year();
                this.targetStartYear = currentYear + 5;
                let endYear = LongTermEnum.TARGET_YEAR;
                /* FLAG is true when target isn't set */
                if (isTargetSet['reductionTarget']['flag']) {
                    endYear = currentYear + 10;
                }
                this.targetYear = new Array(endYear - this.targetStartYear + 1).fill(null).map((v, i) => i + this.targetStartYear);
                if (!this.isUpdate) this.targetYearAC.patchValue(endYear);
            });
    }

    isValidForm() {
        if (this.targetFG.invalid) {
            console.log('invalid form - ', this.targetFG);
            this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.isUpdate) this.updateTarget();
        else this.createTarget();
    }

    createTarget() {
        this.sbtiController.createTarget(this.currentOrgID, this.targetFG.value)
            .subscribe((res) => {

                this.targetUtility.created();
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            });
    }

    updateTarget() {
        this.sbtiController.updateTarget(this.currentOrgID, this.targetID, this.targetFG.value)
            .subscribe((res) => {
                this.targetUtility.updated();
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            });
    }

    errorHandling = (control: string, error: string) => {
        return this.targetFG.get(control).hasError(error);
    }

}
