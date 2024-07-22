import { Component, Inject, OnInit } from '@angular/core';

import {
    FormGroup,
    Validators,
    FormBuilder,
} from '@angular/forms';

import {
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { isEqual } from "lodash";

import { SourceController } from '@netzero/controller/source.controller';
import { AssetController } from '@netzero/controller/asset.controller';

// tsc-common
import {
    MaterialFormFieldAppearance,
    InvalidForm
} from '@library/tsc-common';

import { ToastrColor, ToastrTitle, ToastrService } from '@library/toastr-service';
// /tsc-common/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styles: []
})

export class CreateUpdateComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    Title: string = 'Create';
    action: string = 'create';

    assetID: string = '';
    currentOrgID: string = '';

    assetFG: FormGroup;

    isEqual: boolean;
    initialObject: any;

    maxLength: number = 500;

    constructor(
        private assetFB: FormBuilder,
        private assetController: AssetController,
        private sourceController: SourceController,
        public dialogRef: MatDialogRef<CreateUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private toastrService: ToastrService
    ) {
        this.action = data['action'];
        this.currentOrgID = data['currentOrgID'];

        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.assetInit();

        if (this.action === 'update') {
            this.Title = 'Update';
            this.patchAsset(this.data['asset']);
            this.assetID = this.data['asset'].assetID;
        }
    }

    ngAfterViewInit() {
        this.assetFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.assetFG.value));
    }

    assetInit() {
        this.assetFG = this.assetFB.group({
            assetName: [, Validators.required],
            assetAssetID: [],
            description: []
        })
    }

    checkKeyAvailability() {
        if (this.assetFG.invalid) {
            console.log('invalid form -', this.assetFG.value);
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return [];
        }

        let keyID = this.assetFG.controls['assetAssetID'].value;
        if (keyID !== null && keyID !== '' && keyID.trim() !== '') {
            this.sourceController.checkKeyAvailability(this.currentOrgID, 'assets', keyID)
                .subscribe((isAvailableRes) => {
                    if (isAvailableRes['assetKeyIDExist'] === 'NO') {
                        this.createAsset();
                    } else {
                        this.assetFG.get('assetAssetID').setErrors({ 'duplicate_key': true });
                        this.toastrService.openToast(ToastrTitle.ERROR, 'Asset ID assigned already exists!', ToastrColor.ERROR);
                        return [];
                    }
                },
                    error => {
                        console.log('error in checkKeyValidity -', error);
                        this.toastrService.openToast(ToastrTitle.ERROR, 'Error in validating keyID', ToastrColor.ERROR);
                    });
        } else {
            this.createAsset();
        }
    }

    createAsset() {
        this.assetController.createAsset(this.assetFG.value, this.currentOrgID)
            .subscribe((createRes) => {
                this.dialogRef.close('opSuccess');
            },
                error => {
                    console.log('error in createAsset -', error);
                });
    }

    patchAsset(asset) {
        this.assetFG.patchValue({
            assetName: asset['assetName'],
            assetAssetID: asset['assetAssetID'],
            description: asset['description']
        });

        this.initialObject = this.assetFG.value;
        this.isEqual = true;
    }

    updateAsset() {
        if (this.assetFG.invalid) {
            console.log('invalid form -', this.assetFG.value);
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return [];
        }

        this.assetController.updateAsset(this.assetFG.value, this.assetID, this.currentOrgID)
            .subscribe((updateRes) => {
                this.dialogRef.close('opSuccess');
            },
                error => {
                    console.log('error in updateAsset -', error);
                    if (error.error['errorCode'] == 409) {
                        this.assetFG.get('assetAssetID').setErrors({ 'duplicate_key': true });
                    }
                })
    }

    charactersRemainingFn = (fg: FormGroup): number => {
        let description = fg.get('description').value;
        if (description) return (this.maxLength - description.length);
        else return this.maxLength;
    }

    public errorHandling = (control: string, error: string) => {
        return this.assetFG.controls[control].hasError(error);
    }
}
