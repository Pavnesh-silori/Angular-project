import { Component, Inject, OnInit } from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { CalculationMethodEnum, NearTermEnum, OrgSizeEnum, SBTiTargetEnum, StatusEnum, StatusList } from '@carbon/enum/sbti.enum';
import { PercentageEnum } from '@carbon/enum/percentage.enum';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { SbtiSettingM } from '@carbon/model/sbti.model';

import { SbtiController } from '@carbon/controller/sbti.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';

import { TargetService } from '../../../target.service';
import { StorageService } from '@library/storage-service';

import { TargetUtility } from '../../../../target.utility';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

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

    zeroEmissionYear: any[];
    targetPeriod: any;
    annualReduction: number;

    netzero: boolean = false;
    manitenanceLabel: string = '';

    isUpdate: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private targetUtility: TargetUtility,
        private storageUtility: StorageService,
        private dialogRef: MatDialogRef<MaintenanceComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private targetService: TargetService,
        private sbtiController: SbtiController,
        private baseYearController: BaseYearController,
        private toasterService: ToastrService
    ) {}

    ngOnInit(): void {
        this.currentOrgID = this.storageUtility.getStorage('currentOrgID');

        this.targetFGInit();
        this.getSBTiSettings();
        this.getSBTiZeroEmissionYears();
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
            name: [NearTermEnum.DEFAULT_MAINTENANCE_TARGET_NAME, [Validators.required]],
            baseYear: [, [Validators.required]],
            targetType: [NearTermEnum.NEAR_TERM_MAINTENANCE],
            targetYear: [NearTermEnum.MAX_TARGET_YEAR, [Validators.required, Validators.max(NearTermEnum.MAX_TARGET_YEAR)]],
            totalReductionPct: [, [Validators.required, Validators.min(NearTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE), Validators.max(PercentageEnum.MAX_PERCENTAGE)]],
            excludedEmissionS1S2Pct: [SBTiTargetEnum.DEFAULT_EXCLUDED_EMISSION_PCT],
            excludedEmissionS3Pct: [SBTiTargetEnum.DEFAULT_EXCLUDED_EMISSION_PCT],
            status: [StatusEnum.PENDING, [Validators.required]],
            orgSize: [OrgSizeEnum.SME],
            calculationMethod: [CalculationMethodEnum.CROSS_SECTOR_ABSOLUTE_REDUCTION],
            scope: [[1, 2], Validators.required],
        });

        this.baseYearAC.valueChanges.subscribe((baseYear) => {
            if (!this.baseYearAC.invalid)
                this.totalReductionFn(baseYear);
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

    totalReductionFn(baseYear) {
        if (this.isNetZero(baseYear)) {
            this.totalReductionPctAC.patchValue(0);
            this.annualReduction = 0;
            return;
        }

        this.targetPeriod = (NearTermEnum.MAX_TARGET_YEAR - baseYear);

        let calculatedTotalReduction = (NearTermEnum.TOTAL_REDUCTION_MULTIPLIER_CONST * this.targetPeriod) > NearTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE ? (NearTermEnum.TOTAL_REDUCTION_MULTIPLIER_CONST * this.targetPeriod) : NearTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE;
        this.totalReductionPctAC.patchValue(calculatedTotalReduction);

        this.annualReduction = parseFloat((calculatedTotalReduction / this.targetPeriod).toFixed(2));
    }

    getSBTiSettings() {
        this.sbtiController.getSbtiSettingsByOrgID(this.currentOrgID)
            .subscribe((settings: SbtiSettingM) => {
                this.sbtiSettings = settings;

                let type = this.sbtiSettings.isBaseYearSameAsGHG ? BaseYearEnum.GHG_BASE_YEAR : BaseYearEnum.SBTI_BASE_YEAR;
                this.getBaseYearByType(type);

                this.targetYearAC.addValidators(Validators.min(this.sbtiSettings['sbtiBaseYear'] + 1));
                this.totalReductionFn(NearTermEnum.MAX_TARGET_YEAR);
            });
    }

    getBaseYearByType(type) {
        this.baseYearController.getBaseYearByType(this.currentOrgID, type)
            .subscribe((bySetup) => {
                this.baseYear = bySetup['baseYear'];

                this.targetYearAC.addValidators(Validators.min(this.sbtiSettings['sbtiBaseYear'] + 1));
                this.totalReductionFn(NearTermEnum.MAX_TARGET_YEAR);
            })
    }

    getSBTiZeroEmissionYears() {
        this.sbtiController.getSBTiZeroEmissionYears(this.currentOrgID)
            .subscribe((response: any) => {
                this.zeroEmissionYear = response;

                let baseYear = '';
                if (this.checkcontiguous()) baseYear = this.zeroEmissionYear[0]['year'];
                else baseYear = this.zeroEmissionYear[this.zeroEmissionYear.length - 1]['year'];

                this.baseYearAC.patchValue(baseYear);
                this.isNetZero(baseYear);
            });
    }

    checkcontiguous = () => {
        let contiguous = false;
        let firstYear = this.zeroEmissionYear[0];

        this.zeroEmissionYear.forEach((year, index) => (contiguous = ((year - firstYear) == index)));
        return contiguous;
    }

    isNetZero = (baseYear): boolean => {
        this.netzero = false;
        let maintenanceBase = this.zeroEmissionYear.find(zem => zem['year'] == baseYear);
        this.totalReductionPctAC.setValidators(Validators.min(NearTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE));

        if (maintenanceBase['scope1Emission'] != 0) {
            this.manitenanceLabel = 'Scope 1 ';
        } else if (maintenanceBase['scope2Emission'] != 0) {
            this.manitenanceLabel = 'Scope 2 ';
        } else {
            this.netzero = true;
            this.manitenanceLabel = '';
            this.totalReductionPctAC.setValidators(Validators.min(0));
        }

        return this.netzero;
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
