import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { forkJoin } from 'rxjs';

import { ScopeWithActivityM } from '@carbon/model/scope.model'; 
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { ConsolidationApproachKeyIDEnum } from '@carbon/enum/consolidation-approach.enum';

import { ScopeService } from '@carbon/service/scope.service';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { UnitM, UnitService, UnitTypeKeyID, UomCode } from '@library/unit-service';
import { StorageService } from '@library/storage-service';
import { FormAction, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-emission-data',
    templateUrl: './emission-data.component.html',
    styleUrls: ['./emission-data.component.scss']
})
export class EmissionDataComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    @Input() consolidationApproachKeyIDList: any[] = [];
    @Input() emissionData: any = null;
    @Input() action;
    @Input() year;
    @Input() dialogTitle;

    CARBON_CONSTANT = CARBON_CONSTANT;

    activityEmissionDataFG: FormGroup;
    rootOrgID: any;

    scopesWithActivity: ScopeWithActivityM[] = [];

    operationalControlApproachDisplay: boolean = false;
    financialControlApproachDisplay: boolean = false;
    equityShareApproachDisplay: boolean = false;

    filled: boolean = false;
    currentFormArr;
    scope1Filled: boolean = false;
    scope2Filled: boolean = false;
    biogenicFilled: boolean = false;

    scope1FGMap: Map<FormGroup, boolean> = new Map<FormGroup, boolean>();
    scope2FGMap: Map<FormGroup, boolean> = new Map<FormGroup, boolean>();

    unitM: UnitM[] = [];
    tCo2EUnitM: UnitM;

    showInfo: boolean = true;
    emissionFlag: boolean = true;

    constructor(
        public activityEmissionDataFB: FormBuilder,
        private storageService: StorageService,
        private scopeService: ScopeService,
        private toastrService: ToastrService,
        private unitService: UnitService,
    ) { }

    ngOnInit() {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activityEmissionDataFGInit();
        this.formInitialization();

        // this.getUnit();
        // this.getAllScopeWithActivity();

        if (this.consolidationApproachKeyIDList) {
            this.consolidationApproachValidation();
        }

        if (this.emissionData) {
            this.patchActivityToFormGroup(this.emissionData);
            this.updateActivityValidators();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes?.consolidationApproachKeyIDList)
            if (!changes.consolidationApproachKeyIDList.firstChange) {
                this.consolidationApproachValidation();
            }

        if (changes.emissionData && this.emissionData) {
            if (this.action == FormAction.UPDATE) {
                this.patchActivityToFormGroup(this.emissionData);
                this.updateActivityValidators();
            }
        }
    }

    // ngDoCheck() {
    //     if (this.emissionData && this.emissionFlag) {
    //         if (this.action == FormAction.UPDATE) {
    //             this.emissionFlag = false;
    //             this.activityEmissionDataFG.reset([]);
    //             this.patchActivityToFormGroup(this.emissionData);
    //             this.updateActivityValidators();
    //         }
    //     }
    // }

    formInitialization() {
        forkJoin([this.unitService.getUnit([`type:` + UnitTypeKeyID.EQUIVALENT_EMISSION]), this.scopeService.getAllScopeWithActivity()]).subscribe(
            ([unitM, scopesWithActivity]) => {
                this.scopesWithActivity = scopesWithActivity;
                this.unitM = unitM;
                this.tCo2EUnitM = this.unitM.find(unit => unit.uomCode == UomCode.TCO2E);

                this.addActivityToFormGroup();
                
            },
            error => {
                console.error('error in formInitialization -', error);
            }
        );
    }

    consolidationApproachValidation() {
        this.operationalControlApproachDisplay = false;
        this.financialControlApproachDisplay = false;
        this.equityShareApproachDisplay = false;
        for (const approach of this.consolidationApproachKeyIDList) {
            if (approach == ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH) {
                this.operationalControlApproachDisplay = true;
            } else if (approach == ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH) {
                this.financialControlApproachDisplay = true;
            } else if (approach == ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH) {
                this.equityShareApproachDisplay = true;
            }
        }
        this.updateActivityValidators();
    }

    getEmissionRecord() {
        return this.activityEmissionDataFG.get('emissionRecords') as FormArray;
    }

    addActivityToFormGroup() {
        if (!this.emissionData && this.action != FormAction.UPDATE) {
            const formArray = this.activityEmissionDataFG.get('emissionRecords') as FormArray;

            for (const scopeWithActivity of this.scopesWithActivity) {
                for (const activity of scopeWithActivity.activity) {
                    const activityGroup = this.activityEmissionDataFB.group({
                        scope: scopeWithActivity.name,
                        activityID: activity.id,
                        activityKeyID: activity.keyID,
                        activityName: activity.name,
                        operationalControlApproach: this.activityEmissionDataFB.group({
                            emission: [null, [Validators.min(0)]],
                            emissionUnitID: [this.tCo2EUnitM.id],
                            biogenicEmission: [null, [Validators.min(0)]],
                            biogenicEmissionUnitID: [this.tCo2EUnitM.id],
                            consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH
                        }),
                        financialControlApproach: this.activityEmissionDataFB.group({
                            emission: [null, [Validators.min(0)]],
                            emissionUnitID: [this.tCo2EUnitM.id],
                            biogenicEmission: [null, [Validators.min(0)]],
                            biogenicEmissionUnitID: [this.tCo2EUnitM.id],
                            consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH
                        }),
                        equityShareApproach: this.activityEmissionDataFB.group({
                            emission: [null, [Validators.min(0)]],
                            emissionUnitID: [this.tCo2EUnitM.id],
                            biogenicEmission: [null, [Validators.min(0)]],
                            biogenicEmissionUnitID: [this.tCo2EUnitM.id],
                            consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH
                        })
                    });
                    formArray.push(activityGroup);
                }
            }
        }
        this.updateActivityValidators();
    }

    patchActivityToFormGroup(emissionData) {
        const emissionRecords = emissionData;
        const formArray = this.activityEmissionDataFG.get('emissionRecords') as FormArray;

        for (const record of emissionRecords) {
            formArray.push(this.activityEmissionDataFB.group({
                scope: record.scope,
                activityID: record.activityID,
                activityKeyID: record.activityKeyID,
                activityName: record.activityName,
                operationalControlApproach: this.activityEmissionDataFB.group({
                    emission: [record.operationalControlApproach?.emission, [Validators.min(0)]],
                    emissionUnitID: [this.CARBON_CONSTANT.DEFAULT_EMISSION_UNIT.id],
                    biogenicEmission: [record.operationalControlApproach?.biogenicEmission, [Validators.min(0)]],
                    biogenicEmissionUnitID: [this.CARBON_CONSTANT.DEFAULT_EMISSION_UNIT.id],
                    consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH
                }),
                financialControlApproach: this.activityEmissionDataFB.group({
                    emission: [record.financialControlApproach?.emission, [Validators.min(0)]],
                    emissionUnitID: [this.CARBON_CONSTANT.DEFAULT_EMISSION_UNIT.id],
                    biogenicEmission: [record.financialControlApproach?.biogenicEmission, [Validators.min(0)]],
                    biogenicEmissionUnitID: [this.CARBON_CONSTANT.DEFAULT_EMISSION_UNIT.id],
                    consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH
                }),
                equityShareApproach: this.activityEmissionDataFB.group({
                    emission: [record.equityShareApproach?.emission, [Validators.min(0)]],
                    emissionUnitID: [this.CARBON_CONSTANT.DEFAULT_EMISSION_UNIT.id],
                    biogenicEmission: [record.equityShareApproach?.biogenicEmission, [Validators.min(0)]],
                    biogenicEmissionUnitID: [this.CARBON_CONSTANT.DEFAULT_EMISSION_UNIT.id],
                    consolidationApproachKeyID: ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH
                })
            }));
        }

        this.updateActivityValidators();
    }

    activityEmissionDataFGInit() {
        this.activityEmissionDataFG = this.activityEmissionDataFB.group({
            emissionRecords: this.activityEmissionDataFB.array([])
        });

    }

    updateActivityValidators() {
        this.currentFormArr = this.activityEmissionDataFG.get('emissionRecords') as FormArray;
        for (let i = 0; i < this.currentFormArr.controls.length; ++i) {
            let item = this.currentFormArr.controls[i];
            this.addActivityValidators(item);
            item.valueChanges.subscribe(() => {
                this.addActivityValidators(item);
            });
        }
    }

    addActivityValidators(item: FormGroup) {
        this.removeValidators(item);
        this.filled = false;
        if (item.value.scope === 'Scope 1') this.scope1Filled = false;
        else if (item.value.scope === 'Scope 2') this.scope2Filled = false;
        this.isFormFilled(item);
        if (this.filled) {
            if (item.value.scope === 'Scope 1') this.scope1Filled = true;
            else if (item.value.scope === 'Scope 2') this.scope2Filled = true;
            this.addValidators(item);
        }
        if (item.value.scope === 'Scope 1') {
            this.scope1FGMap.set(item, this.scope1Filled);
        } else if (item.value.scope === 'Scope 2') {
            this.scope2FGMap.set(item, this.scope2Filled);
        }
        this.filled = false;
    }

    isFormFilled(item: FormGroup) {
        if (this.consolidationApproachKeyIDList) {
            for (let approach of this.consolidationApproachKeyIDList) {
                switch (approach) {
                    case ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH:
                        if (item.get('operationalControlApproach.emission').value != null)
                            this.filled = true;
                        break;
                    case ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH:
                        if (item.get('financialControlApproach.emission').value != null)
                            this.filled = true;
                        break;
                    case ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH:
                        if (item.get('equityShareApproach.emission').value != null)
                            this.filled = true;
                        break;
                }
            }
        }
    }

    removeValidators(formGroup: FormGroup) {
        formGroup.get('operationalControlApproach.emission').clearValidators();
        formGroup.get('financialControlApproach.emission').clearValidators();
        formGroup.get('equityShareApproach.emission').clearValidators();

        this.updateValueAndValidity(formGroup);

    }

    addValidators(formGroup: FormGroup) {

        for (let approach of this.consolidationApproachKeyIDList) {
            switch (approach) {
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

    updateValueAndValidity(formGroup: FormGroup) {
        formGroup.get('operationalControlApproach.emission').updateValueAndValidity({ emitEvent: false });
        formGroup.get('financialControlApproach.emission').updateValueAndValidity({ emitEvent: false });
        formGroup.get('equityShareApproach.emission').updateValueAndValidity({ emitEvent: false });
    }

    saveEmission() {
        this.activityEmissionDataFG.markAllAsTouched();
        let hasTrueValue1 = false;
        let hasTrueValue2 = false;

        if (this.emissionData) {
            hasTrueValue1 = true;
            hasTrueValue2 = true;
        }

        for (const [formGroup, value] of this.scope1FGMap) {
            if (value === true) {
                hasTrueValue1 = true;
                break;
            }
        }

        for (const [formGroup, value] of this.scope2FGMap) {
            if (value === true) {
                hasTrueValue2 = true;
                break;
            }
        }

        if (this.activityEmissionDataFG.invalid || (hasTrueValue1 === false || hasTrueValue2 === false)) {
            this.toastrService.openToast('Error', 'At least one record must be filled from scope 1, scope 2. Scope 3 is optional.', ToastrColor.ERROR);
            return false;
        } else {
            return true;
        }
    }
}
