import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { cloneDeep } from 'lodash-es';

import { forkJoin } from 'rxjs';

import { ConsolidationApproachM } from '@carbon/model/consolidation-approach.model'; 
import { ConsolidationApproachKeyIDEnum } from '@carbon/enum/consolidation-approach.enum';

import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID, UomCode } from '@library/unit-service';
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-in-outsourcing-base-year-emission-dialog',
    templateUrl: './in-outsourcing-base-year-emission-dialog.component.html',
    styleUrls: ['./in-outsourcing-base-year-emission-dialog.component.scss']
})

export class InOutsourcingBaseYearEmissionDialogComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    rootOrgID: any;

    year: any;
    scopeID: any;
    scopeName: any;
    activityList: any;
    yearlyEmissionData: any;
    updatedActivityList: any;

    scopeActivityEmissionDataFG: FormGroup;

    consolidationApproachList: ConsolidationApproachM[] = [];
    ConsolidationApproachKeyID = ConsolidationApproachKeyIDEnum;

    operationalControlApproachDisplay: boolean = false;
    financialControlApproachDisplay: boolean = false;
    equityShareApproachDisplay: boolean = false;

    currentFormArr;

    unitM: UnitM[] = [];
    tCo2EUnitM: UnitM;

    constructor(
        private scopeActivityEmissionDataFB: FormBuilder,
        private storageService: StorageService,
        private consolidationApproachService: ConsolidationApproachService,
        private unitService: UnitService,
        private dialogRef: MatDialogRef<InOutsourcingBaseYearEmissionDialogComponent>,
        private toastrService: ToastrService,
        @Inject(MAT_DIALOG_DATA) public data
    ) {
        this.dialogRef.disableClose = true;
        this.year = data['year'];
        this.scopeID = data['scopeID'];
        this.scopeName = data['scopeName'];
        this.activityList = data['selectedScopeActivity'];
        this.updatedActivityList = cloneDeep(data['selectedScopeActivity']);
        this.yearlyEmissionData = data['yearlyEmissionData'];
    }

    ngOnInit() {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        console.log('oninit');

        this.scopeActivityEmissionDataFGInit();
        this.getConsolidationApproachList();

        this.formInitialization();

    }

    scopeActivityEmissionDataFGInit() {
        this.scopeActivityEmissionDataFG = this.scopeActivityEmissionDataFB.group({
            year: [this.year],
            emissionRecords: this.scopeActivityEmissionDataFB.array([])
        });
    }

    formInitialization() {
        forkJoin([this.unitService.getUnit([`type:` + UnitTypeKeyID.EQUIVALENT_EMISSION])]).subscribe(
            ([unitM]) => {
                this.unitM = unitM;
                this.tCo2EUnitM = this.unitM.find(unit => unit.uomCode == UomCode.TCO2E);

                if (this.yearlyEmissionData) {
                    this.patchScopeActivityToFormGroup(this.yearlyEmissionData);
                } else {
                    this.addScopeActivityToFormGroup();
                }
            },
            error => {
                console.error('error in formInitialization -', error);
            }
        );
    }

    async getConsolidationApproachList() {
        this.consolidationApproachList = await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);

        for (const approach of this.consolidationApproachList) {
            if (approach.keyID == 'operational-control') {
                this.operationalControlApproachDisplay = true;
            } else if (approach.keyID == 'financial-control') {
                this.financialControlApproachDisplay = true;
            } else if (approach.keyID == 'equity-control') {
                this.equityShareApproachDisplay = true;
            }
        }
        this.updateActivityValidators();
    }

    addValidators(formGroup: FormGroup) {

        for (let approach of this.consolidationApproachList) {
            switch (approach.keyID) {
                case ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH:
                    formGroup.get('operationalControlApproach.emission').addValidators([Validators.required, Validators.min(0)]);
                    break;
                case ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH:
                    formGroup.get('financialControlApproach.emission').addValidators([Validators.required, Validators.min(0)]);
                    break;
                case ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH:
                    formGroup.get('equityShareApproach.emission').addValidators([Validators.required, Validators.min(0)]);
                    break;
            }
            this.updateValueAndValidity(formGroup);
        }

    }

    removeValidators(formGroup: FormGroup) {
        formGroup.get('operationalControlApproach.emission').clearValidators();
        formGroup.get('financialControlApproach.emission').clearValidators();
        formGroup.get('equityShareApproach.emission').clearValidators();

        this.updateValueAndValidity(formGroup);
    }

    updateValueAndValidity(formGroup: FormGroup) {
        formGroup.get('operationalControlApproach.emission').updateValueAndValidity({ emitEvent: false });
        formGroup.get('financialControlApproach.emission').updateValueAndValidity({ emitEvent: false });
        formGroup.get('equityShareApproach.emission').updateValueAndValidity({ emitEvent: false });

    }

    updateActivityValidators() {
        this.currentFormArr = this.scopeActivityEmissionDataFG.get('emissionRecords') as FormArray;
        for (let i = 0; i < this.currentFormArr.controls.length; ++i) {
            let item = this.currentFormArr.controls[i];
            this.removeValidators(item);
            this.addValidators(item);
        }
    }

    addScopeActivityToFormGroup() {
        const formArray = this.scopeActivityEmissionDataFG.get('emissionRecords') as FormArray;
        for (const activity of this.activityList) {
            let activityGroup = new FormGroup({});
            activityGroup = this.addScopeActivityToFormGroupFormControl(activityGroup, activity);
            formArray.push(activityGroup);
        }
    }

    addScopeActivityToFormGroupFormControl(activityGroup, activity) {
        activityGroup = this.scopeActivityEmissionDataFB.group({
            scope: this.scopeName,
            activityID: activity.id,
            activityKeyID: activity.keyID,
            activityName: activity.name,
            operationalControlApproach: this.scopeActivityEmissionDataFB.group({
                emission: [null, [Validators.required, Validators.min(0)]],
                emissionUnitID: [this.tCo2EUnitM.id],
                biogenicEmission: [null, Validators.min(0)],
                biogenicEmissionUnitID: [this.tCo2EUnitM.id],
                consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH
            }),
            financialControlApproach: this.scopeActivityEmissionDataFB.group({
                emission: [null, [Validators.required, Validators.min(0)]],
                emissionUnitID: [this.tCo2EUnitM.id],
                biogenicEmission: [null, Validators.min(0)],
                biogenicEmissionUnitID: [this.tCo2EUnitM.id],
                consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH
            }),
            equityShareApproach: this.scopeActivityEmissionDataFB.group({
                emission: [null, [Validators.required, Validators.min(0)]],
                emissionUnitID: [this.tCo2EUnitM.id],
                biogenicEmission: [null, Validators.min(0)],
                biogenicEmissionUnitID: [this.tCo2EUnitM.id],
                consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH
            })
        });

        return activityGroup;
    }

    getEmissionRecord(group) {
        return this[group].get('emissionRecords') as FormArray;
    }

    patchScopeActivityToFormGroup(yearlyEmissionData) {
        const emissionRecords = yearlyEmissionData.emissionRecords;

        this.scopeActivityEmissionDataFG.patchValue({
            year: yearlyEmissionData.year
        });

        let formArray: FormArray;
        formArray = this.scopeActivityEmissionDataFG.get('emissionRecords') as FormArray;

        while (formArray.length) {
            formArray.removeAt(0);
        }

        emissionRecords.forEach((record) => {
            for (const activity of this.activityList) {
                if (activity.keyID == record.activityKeyID) {
                    formArray.push(this.scopeActivityEmissionDataFB.group({
                        scope: record.scope,
                        activityID: record.activityID,
                        activityKeyID: record.activityKeyID,
                        activityName: record.activityName,
                        operationalControlApproach: this.scopeActivityEmissionDataFB.group({
                            emission: [record.operationalControlApproach?.emission, [Validators.required, Validators.min(0)]],
                            emissionUnitID: [26],
                            biogenicEmission: [record.operationalControlApproach?.biogenicEmission, Validators.min(0)],
                            biogenicEmissionUnitID: [26],
                            consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH
                        }),
                        financialControlApproach: this.scopeActivityEmissionDataFB.group({
                            emission: [record.financialControlApproach?.emission, [Validators.required, Validators.min(0)]],
                            emissionUnitID: [26],
                            biogenicEmission: [record.financialControlApproach?.biogenicEmission, Validators.min(0)],
                            biogenicEmissionUnitID: [26],
                            consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH
                        }),
                        equityShareApproach: this.scopeActivityEmissionDataFB.group({
                            emission: [record.equityShareApproach?.emission, [Validators.required, Validators.min(0)]],
                            emissionUnitID: [this.tCo2EUnitM.id],
                            biogenicEmission: [record.equityShareApproach?.biogenicEmission, Validators.min(0)],
                            biogenicEmissionUnitID: [this.tCo2EUnitM.id],
                            consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH
                        })
                    }));

                    this.updatedActivityList.forEach(data => {
                        if (record.activityKeyID == data.keyID) {
                            let index = this.updatedActivityList.indexOf(data);
                            this.updatedActivityList.splice(index, 1);
                        }
                    })
                }
            }

        });

        this.updatedActivityList.forEach(activity => {
            let activityGroup = new FormGroup({});
            activityGroup = this.addScopeActivityToFormGroupFormControl(activityGroup, activity);
            formArray.push(activityGroup);
        })
    }

    saveEmission() {
        if (this.scopeActivityEmissionDataFG.invalid) {
            this.scopeActivityEmissionDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.dialogRef.close(this.scopeActivityEmissionDataFG.value);
    }

}
