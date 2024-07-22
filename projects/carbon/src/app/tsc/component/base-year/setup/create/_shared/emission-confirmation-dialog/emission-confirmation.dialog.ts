import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// tsc-library
import { COMMON_CONSTANT, DialogEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library

import { isEqual } from 'lodash';
@Component({
    selector: 'emission-confirmation-dialog',
    templateUrl: './emission-confirmation.dialog.html',
    styleUrls: ['./emission-confirmation.dialog.scss']
})

export class EmissionConfirmationDialog implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    COMMON_CONSTANT = COMMON_CONSTANT;

    DialogEnum = DialogEnum

    rootOrgID: any;

    action: any;

    emissionConfirmationFG: FormGroup;

    emissionData: any;
    confirmationYear: any;
    unit: any;

    confirmedActivities: any;
    totalActivities: any;
    activityData: any;

    dataSource: any = [];
    displayedColumns: string[] = ['activityType', 'MTCO2e', 'biogenicMTCO2e', 'confirmation'];

    consolidationApproach: string;

    isMTCO2eEditable: boolean = false;
    isMTCO2eValid: boolean = false;
    isConfirmedValid: boolean = false;

    isEqual: boolean = false;
    initialObject: any;

    isSBTiBaseYear: boolean = true;
    baseYearType: string;
    useTSC: boolean = true;
    isUpdate: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<EmissionConfirmationDialog>,
        @Inject(MAT_DIALOG_DATA) public data,
        private emissionConfirmationFB: FormBuilder,
        private storageService: StorageService
    ) {
        this.dialogRef.disableClose = true;

        this.action = data['action'];
        this.isUpdate = (this.action == 'UPDATE');
        this.isConfirmedValid = this.isUpdate;
        this.emissionData = data['emissionData'];
        this.consolidationApproach = data['consolidationApproach'];
        this.unit = data['unit'];
        this.confirmationYear = data['baseYear'];
        this.baseYearType = data['baseYearType'];
        this.useTSC = data['useTSC'];
    }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.emissionConfirmationFGInit();
        this.emissionConfirmationFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.emissionConfirmationFG.getRawValue()); });
    }

    emissionConfirmationFGInit() {
        this.activityData = this.emissionData.scope.activity;
        this.activityData.forEach((activity) => activity.isMTCO2eEditable = false);

        this.emissionConfirmationFG = this.emissionConfirmationFB.group({
            unitID: this.unit['id'],
            scopeID: this.emissionData['scope']['id'],
            emissions: this.emissionConfirmationFB.array(
                this.activityData.map((activity) => this.createActivityTypeFormGroup(activity))
            ),
        });

        this.subscribeToFormChanges();
        this.initialObject = this.emissionConfirmationFG.value;
        this.isEqual = true;
    }

    get emissionFA(): FormArray {
        return this.emissionConfirmationFG.get('emissions') as FormArray;
    }

    subscribeToFormChanges() {
        this.emissionFA.valueChanges.subscribe((values) => {
            let confirmedCount = 0;
            values.forEach((value, index) => {
                const markasConfirmedCheckbox = this.emissionConfirmationFG.get(`emissions.${index}.isConfirmed`) as FormControl;

                if (!this.useTSC) {
                    if (value.emission == null) {
                        markasConfirmedCheckbox.disable({ onlySelf: true });
                        markasConfirmedCheckbox.reset(false, { onlySelf: true });
                    } else {
                        markasConfirmedCheckbox.enable({ onlySelf: true });
                        if (value.isConfirmed) { confirmedCount++; }
                    }
                } else {
                    if (value.isConfirmed) { confirmedCount++; }
                }
            });
            this.emissionData.confirmedActivities = confirmedCount;
            this.isMTCO2eValid = values.every((value) => value.emission != null);
            this.isConfirmedValid = values.every((value) => value.isConfirmed == true);
        });
    }

    createActivityTypeFormGroup(activity) {
        let emissionValue = this.isUpdate ? activity?.emission : activity?.emission?.emission;
        let bioEmissionValue = this.isUpdate ? activity?.biogenicEmission : activity?.biogenicEmission?.emission;
        return this.emissionConfirmationFB.group({
            activityID: activity.id,
            emission: [emissionValue],
            biogenicEmission: [bioEmissionValue],
            isConfirmed: [{ disabled: (this.isUpdate && this.useTSC), value: this.isUpdate }],
            unitID: activity.uomID
        });
    }

    isMTCO2eEditClicked() {
        this.isMTCO2eEditable = true;
    }

    calculateProgressWidth(data) {
        const progress = (data.confirmedActivities / data.totalActivities) * 100;
        return progress;
    }

    confirmedEmissions() {
        this.dialogRef.close(this.emissionConfirmationFG);
    }

    getEmissionValue(row, emissionType) {
        if (this.isUpdate) {
            let value = row[emissionType];
            return this.getValue(value);
        } else {
            let emissionValue = row[emissionType]?.emission;
            return this.getValue(emissionValue);
        }
    }

    getValue(value) {
        if (value != null) {
            value = parseFloat(value.toFixed(2));
        }
        return value;
    }

    public errorHandling(index: number, control: string, error: string) {
        const activityGroup = this.emissionFA.at(index);
        return activityGroup.get(control).hasError(error);
    }

}