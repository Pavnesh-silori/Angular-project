import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';

import { TargetService } from '../../target.service';
import { TargetUtility } from '../../../target.utility';

import { CalculationMethodEnum, EnterpriseEnum, LongTermEnum, NearTermEnum, OrgSizeEnum, SBTiTargetEnum, ScopeCoverageEnum, ScopeCoverageList, StatusEnum, StatusList } from '@carbon/enum/sbti.enum';
import { SbtiSettingM } from '@carbon/model/sbti.model';
import { PercentageEnum } from '@carbon/enum/percentage.enum';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { ScopeKeyIDEnum } from '@carbon/enum/scope.enum'

import { SbtiController } from '@carbon/controller/sbti.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';
import { ActivityController } from '@carbon/controller/activity.controller';

// tsc-library
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
// / tsc-library
@Component({
    selector: 'app-long-term',
    templateUrl: './long-term.component.html',
    styleUrls: ['../near-term/near-term.component.scss']
})
export class LongTermComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;

    NearTerm = NearTermEnum;
    LongTerm = LongTermEnum;
    CalculationMethod = CalculationMethodEnum;
    statusList = StatusList;
    SBTiTarget = SBTiTargetEnum;

    currentOrgID: any;
    targetID: any;
    target: any;
    targetFG: FormGroup;

    sbtiSettings: SbtiSettingM;
    baseYear: number = null;

    targetPeriod: any;
    annualReduction = 0;

    isUpdate: boolean = false;
    autoCalculated: boolean = false;
    targetYear: any;
    submissionYear;

    scopeCoverageList = ScopeCoverageList;
    currentYear = moment().year();
    endYear: any;
    activityList: any;
    showActivity: boolean = false;

    annualReductionTooltip = 'For Scope 1 and 2 targets, SBTi mandates a 90% minimum reduction when modelling targets using the cross sector absolute reduction method.';
    excludedEmissions = 0;
    defaultScopeKey = ScopeCoverageEnum.SCOPE_1_2;
    isAllSelectedFlag = true;

    constructor(@Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<LongTermComponent>,
        private formBuilder: FormBuilder,
        private targetService: TargetService,
        private sbtiController: SbtiController,
        private baseYearController: BaseYearController,
        private activityController: ActivityController,
        private storageService: StorageService,
        private toasterService: ToastrService,
        private targetUtility: TargetUtility,

    ) { }

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

        if (this.data['scope'] != null) {
            if (this.data['scope'] == ScopeCoverageEnum.SCOPE_3) {
                this.showActivity = true;
                this.getActivityList();
            }
            this.defaultScopeKey = this.data['scope'];
            this.scopeCoverageList = this.scopeCoverageList.filter(item => item.key == this.data['scope']);
        }

        this.targetFG.get('submissionYear').valueChanges.subscribe((submissionYear) => {
            if (submissionYear != null) {
                const targetStartYear = submissionYear + 5;
                this.endYear = submissionYear + 10;
                this.targetYear = new Array(this.endYear - targetStartYear + 1).fill(null).map((v, i) => i + targetStartYear);
                if (!this.isUpdate) this.targetYearAC.patchValue(this.endYear);
            }
        });

        const defaultScopeValue = this.scopeCoverageList.find(scope => scope.key === this.defaultScopeKey)?.value || [];
        this.scopeAC.setValue(defaultScopeValue);

        this.scopeAC.valueChanges.subscribe((value) => {
            if (Array.isArray(value) && value.includes(3)) {
                this.showActivity = true;
                this.annualReductionTooltip = 'For Scope 3 targets, SBTi mandates a 90% minimum reduction when modelling targets using the cross sector absolute reduction method.';
                this.activityAC.setValidators([Validators.required]);
                this.getActivityList();
            } else {
                this.showActivity = false;
                this.annualReductionTooltip = 'For Scope 1 and 2 targets, SBTi mandates a 90% minimum reduction when modelling targets using the cross sector absolute reduction method.';
                this.activityAC.clearValidators();
                this.activityAC.patchValue([]);
            }
        });

        this.activityAC.valueChanges.subscribe((value) => {
            if (this.activityList.length == value.length) {
                this.isAllSelectedFlag = true;
            } else {
                this.isAllSelectedFlag = false;
            }
        });
    }

    targetFGInit() {
        this.targetFG = this.formBuilder.group({
            name: [LongTermEnum.DEFAULT_REDUCTION_TARGET_NAME, [Validators.required]],
            targetType: [LongTermEnum.LONG_TERM_NETZERO],
            baseYear: [, [Validators.required]],
            targetYear: [, [Validators.required, Validators.max(this.endYear)]],
            submissionYear: [, [Validators.required, Validators.max(this.currentYear)]],
            calculationMethod: [CalculationMethodEnum.CROSS_SECTOR_ABSOLUTE_REDUCTION],
            totalReductionPct: [, [Validators.required, Validators.min(LongTermEnum.MIN_TOTAL_REDUCTION_PERCENTAGE), Validators.max(PercentageEnum.MAX_PERCENTAGE)]],
            excludedEmissionS1S2Pct: [SBTiTargetEnum.DEFAULT_EXCLUDED_EMISSION_PCT],
            excludedEmissionS3Pct: [SBTiTargetEnum.DEFAULT_EXCLUDED_EMISSION_PCT],
            orgSize: [OrgSizeEnum.NON_SME],
            scope: [[], Validators.required],
            activity: [[]],
            status: [StatusEnum.PENDING],
        });

        this.targetYearAC.valueChanges.subscribe((targetYear) => {
            if (!this.targetYearAC.invalid) {
                this.totalReductionFn(targetYear);
            }
        });

        this.totalReductionPctAC.valueChanges.subscribe((totalReduction) => {
            if (!this.totalReductionPctAC.invalid && this.targetYear)
                this.annualReduction = parseFloat((totalReduction / this.targetPeriod).toFixed(2));
        });
    }

    get targetYearAC(): AbstractControl {
        return this.targetFG.get('targetYear') as AbstractControl;
    }

    get totalReductionPctAC(): AbstractControl {
        return this.targetFG.get('totalReductionPct') as AbstractControl;
    }

    get scopeAC(): AbstractControl {
        return this.targetFG.get('scope') as AbstractControl;
    }

    get activityAC(): AbstractControl {
        return this.targetFG.get('activity') as AbstractControl;
    }

    getTargetByID(targetID) {
        this.sbtiController.getTargetByID(this.currentOrgID, targetID)
            .subscribe(target => {
                this.target = target;
                this.targetService.patchData(this.targetFG, this.target);

                const scopeIds = this.target.scope.map(scope => scope.id);
                if (Array.isArray(scopeIds) && this.scopeAC.value.includes(3)) {
                    this.defaultScopeKey = ScopeCoverageEnum.SCOPE_3;
                    const actvitityIDs = this.target.activity.map(activity => activity.id);
                    this.activityAC.patchValue(actvitityIDs);
                }
                const scopeValue = this.scopeCoverageList.find(scope => scope.key === this.defaultScopeKey)?.value || [];
                this.scopeAC.patchValue(scopeValue);
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
                this.targetFG.get('baseYear').patchValue(this.baseYear);
                this.targetYearAC.addValidators(Validators.min(this.baseYear + 1));

                this.submissionYear = new Array(this.currentYear - this.baseYear + 1).fill(null).map((v, i) => i + this.baseYear);
            })
    }

    totalReductionFn(targetYear) {
        if (this.baseYear >= EnterpriseEnum.DEFAULT_BASE_YEAR) {
            this.targetPeriod = (targetYear - this.baseYear);
        } else {
            this.targetPeriod = (targetYear - EnterpriseEnum.DEFAULT_BASE_YEAR);
        }

        let calculatedAnnualReduction = (this.totalReductionPctAC.value / this.targetPeriod);
        this.annualReduction = parseFloat(calculatedAnnualReduction.toFixed(2));
    }

    isValidForm() {
        if (this.targetFG.invalid) {
            console.log('invalid form - ', this.targetFG);
            this.targetFG.markAllAsTouched();
            this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        if (this.isUpdate) this.updateTarget();
        else this.createTarget();
    }

    createTarget() {
        this.sbtiController.createTarget(this.currentOrgID, this.targetFG.value)
            .subscribe((res) => {
                let toast = this.toasterService.getToastStatus(res['status']);
                this.toasterService.openToast(toast['title'], res['message'], toast['color']);
                this.targetUtility.created();
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            }, error => {
                console.log('error in createTarget() -', error);
            });
    }

    updateTarget() {
        this.sbtiController.updateTarget(this.currentOrgID, this.targetID, this.targetFG.value)
            .subscribe((res) => {
                let toast = this.toasterService.getToastStatus(res['status']);
                this.toasterService.openToast(toast['title'], res['message'], toast['color']);
                this.targetUtility.updated();
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            }, error => {
                console.log('error in updateTarget() -', error);
            });
    }

    async getActivityList() {
        let scopeKeyID = ScopeKeyIDEnum.SCOPE_3_KEY_ID;
        await this.activityController.getActivityListByScopeKeyID(scopeKeyID).subscribe(response => {
            this.activityList = response;
            this.getTargetCreatedActivityList();
        }, error => {
            console.log('error in getActivityList -', error);
        })

    }

    getTargetCreatedActivityList() {
        this.sbtiController.getTargetCreatedActivityList(this.currentOrgID, LongTermEnum.LONG_TERM_NETZERO).subscribe(response => {
            let targetActivityList: any;
            targetActivityList = response;
            this.activityList = this.activityList.filter(activity => !targetActivityList.some(target => target.id === activity.id));
            this.selectAllActivities();
        }, error => {
            console.log('Error in getTargetCreatedActivityList -', error);
        });
    }

    selectAllActivities() {
        const allActivityIds = this.activityList.map(activity => activity.id);
        this.activityAC.setValue(allActivityIds);
    }

    isAllSelected() {
        this.isAllSelectedFlag = !this.isAllSelectedFlag;
        this.isAllSelectedFlag == true ? this.selectAllActivities() : this.activityAC.patchValue([]);
    }

    errorHandling = (control: string, error: string) => {
        return this.targetFG.get(control).hasError(error);
    }

}
