import { Component, Inject, OnInit } from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { TargetUtility } from '../../../../target.utility';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { PercentageEnum } from '@carbon/enum/percentage.enum';
import { CalculationMethodEnum, NearTermEnum, OrgSizeEnum, SBTiTargetEnum, StatusEnum, StatusList } from '@carbon/enum/sbti.enum';
import { SbtiSettingM } from '@carbon/model/sbti.model';

import { SbtiController } from '@carbon/controller/sbti.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';

import { StorageService } from '@library/storage-service';
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

    NearTerm = NearTermEnum;
    statusList = StatusList;
    SBTiTarget = SBTiTargetEnum;

    currentOrgID: any;

    targetID: any;
    target: any;
    targetFG: FormGroup;

    sbtiSettings: SbtiSettingM;
    baseYear: number = null;

    targetPeriod: any;
    annualReduction: number;

    isUpdate: boolean = false;
    autoCalculated: boolean = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<ReductionComponent>,
        private formBuilder: FormBuilder,
        private targetUtility: TargetUtility,
        private storageService: StorageService,
        private targetService: TargetService,
        private sbtiController: SbtiController,
        private baseYearController: BaseYearController,
        private toasterService: ToastrService

    ) {
        this.autoCalculated = (data?.['targetType'] && data['targetType'] == NearTermEnum.AUTO_CALCULATED);
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.targetFGInit();
        this.getSBTiSettings();
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
            name: [NearTermEnum.DEFAULT_REDUCTION_TARGET_NAME, [Validators.required]],
            baseYear: [, [Validators.required]],
            targetType: [NearTermEnum.NEAR_TERM_REDUCTION],
            targetYear: [NearTermEnum.MAX_TARGET_YEAR, [Validators.required, Validators.max(NearTermEnum.MAX_TARGET_YEAR)]],
            totalReductionPct: [, [Validators.required, Validators.min(NearTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE), Validators.max(PercentageEnum.MAX_PERCENTAGE)]],
            excludedEmissionS1S2Pct: [SBTiTargetEnum.DEFAULT_EXCLUDED_EMISSION_PCT],
            excludedEmissionS3Pct: [SBTiTargetEnum.DEFAULT_EXCLUDED_EMISSION_PCT],
            status: [StatusEnum.PENDING, [Validators.required]],
            orgSize: [OrgSizeEnum.SME],
            calculationMethod: [CalculationMethodEnum.CROSS_SECTOR_ABSOLUTE_REDUCTION],
            scope: [[1, 2], Validators.required],
        });

        this.targetYearAC.valueChanges.subscribe((targetYear) => {
            if (!this.targetYearAC.invalid)
                this.totalReductionFn(targetYear);
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
                this.totalReductionFn(NearTermEnum.MAX_TARGET_YEAR);
            })
    }

    totalReductionFn(targetYear) {
        this.targetPeriod = (targetYear - this.baseYear);
        let calculatedTotalReduction = NearTermEnum.TOTAL_REDUCTION_MULTIPLIER_CONST * this.targetPeriod;
        let totalReduction = (calculatedTotalReduction) > NearTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE ? calculatedTotalReduction : NearTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE;
        this.totalReductionPctAC.patchValue(totalReduction.toFixed(2));

        let calculatedAnnualReduction = (totalReduction / this.targetPeriod);
        this.annualReduction = parseFloat(calculatedAnnualReduction.toFixed(2));
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
