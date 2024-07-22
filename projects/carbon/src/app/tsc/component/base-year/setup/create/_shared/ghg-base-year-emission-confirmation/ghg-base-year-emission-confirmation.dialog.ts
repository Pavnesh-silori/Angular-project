import { Component, Inject, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConsolidationApproachKeyIDEnum } from '@carbon/enum/consolidation-approach.enum';

// tsc-library
import { COMMON_CONSTANT, DialogEnum } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
// tsc-library

@Component({
    selector: 'app-ghg-base-year-emission-confirmation',
    templateUrl: './ghg-base-year-emission-confirmation.dialog.html',
    styleUrls: ['./ghg-base-year-emission-confirmation.dialog.scss']
})
export class GhgBaseYearEmissionConfirmationDialog implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    DialogEnum = DialogEnum;

    CARBON_CONSTANT = CARBON_CONSTANT;

    rootOrgID: any;

    emissionData: any;
    activityData: any;
    displayedColumns: string[] = ['activityType'];
    
    consolidationApproach: any[] = [];

    emissionConfirmationFG: FormGroup;

    action: string = 'CREATE';
    isUpdate: boolean = false;

    confirmationYear: Number;
    isConfirmedValid: boolean = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
    ) {
        this.action = data['action'];
        this.isUpdate = (this.action == 'UPDATE');
        this.confirmationYear = data['baseYear'];
        this.emissionData = data['emissionData'];
        this.consolidationApproach = data['consolidationApproach']
        this.isConfirmedValid = (data['action'] == 'UPDATE');

        this.consolidationApproach.forEach(approach => this.displayedColumns.push(approach['keyID']));
        this.displayedColumns.push('confirmation');
    }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.emissionConfirmationFGInit()
    }

    emissionConfirmationFGInit() {
        this.activityData = this.emissionData.scope.activity;
        this.emissionConfirmationFG = this.formBuilder.group({
            emissions: this.formBuilder.array(
                this.activityData.map((activity) => this.createActivityTypeFormGroup(activity))
            ),
        });

        this.emissionFA.valueChanges.subscribe((values) => {
            let confirmed = 0;
            values.forEach(value => value['isConfirmed'] ? ++confirmed : null);
            this.isConfirmedValid = values.every((value) => value.isConfirmed == true)
            this.emissionData['confirmedActivities'] = confirmed;

        });
    }

    get emissionFA(): FormArray {
        return this.emissionConfirmationFG.get('emissions') as FormArray;
    }

    createActivityTypeFormGroup(activity) {
        return this.formBuilder.group({
            activityID: activity.id,
            emission: [activity.emission],
            isConfirmed: [{ disabled: this.isUpdate, value: this.isUpdate }],
            unitID: activity.uomID
        });
    }

    columnWidth(): number {
        return (10 - this.consolidationApproach.length * 2);
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

    calculateProgressWidth() {
        const progress = (this.emissionData.confirmedActivities / this.emissionData.totalActivities) * 100;
        return progress;
    }

}
