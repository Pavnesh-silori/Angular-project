import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { isEqual } from "lodash";

import { SourceController } from '@netzero/controller/source.controller';
import { AssetController } from '@netzero/controller/asset.controller';

// tsc-library
import { MaterialFormFieldAppearance, InvalidForm, MATERIAL_CONSTANT, ButtonTooltipEnum, FormErrorEnum, PageTitleEnum } from '@library/tsc-common';
import { ToastrColor, ToastrTitle, ToastrService } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styles: []
})
export class CreateUpdateComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    title: string = PageTitleEnum.CREATE;
    action: any;

    assetID: any;
    currentOrgID: any;

    assetFG: FormGroup;

    isEqual: boolean;
    initialObject: any;

    maxLength: number = 500;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    formErrorEnum = FormErrorEnum;

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private renderer: Renderer2,
        private assetController: AssetController,
        private sourceController: SourceController,
        public dialogRef: MatDialogRef<CreateUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private toastrService: ToastrService
    ) {
        this.action = data.action;
        this.currentOrgID = data.currentOrgID;
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.assetInit();

        if (this.action == 'update') {
            this.title = PageTitleEnum.UPDATE;
            this.patchAsset(this.data.asset);
            this.assetID = this.data.asset.assetID;
        }
    }

    ngAfterViewInit() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);

        this.assetFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.assetFG.value));
    }

    assetInit() {
        this.assetFG = this.formBuilder.group({
            assetName: [, Validators.required],
            assetAssetID: [],
            description: []
        })
    }

    checkKeyAvailability() {
        if (this.assetFG.invalid) {
            this.assetFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        }

        let keyID = this.assetFG.controls['assetAssetID'].value;
        if (keyID !== null && keyID !== '' && keyID.trim() !== '') {
            this.sourceController.checkKeyAvailability(this.currentOrgID, 'assets', keyID)
                .subscribe((isAvailableRes) => {
                    if (isAvailableRes['assetKeyIDExist'] == 'NO') {
                        this.createAsset();
                    } else {
                        this.assetFG.get('assetAssetID').setErrors({ 'duplicate_key': true });
                        this.toastrService.openToast(ToastrTitle.ERROR, 'Asset ID assigned already exists!', ToastrColor.ERROR);
                        return false;
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
            assetName: asset.assetName,
            assetAssetID: asset.assetAssetID,
            description: asset.description
        });

        this.initialObject = this.assetFG.value;
        this.isEqual = true;
    }

    updateAsset() {
        if (this.assetFG.invalid) {
            this.assetFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
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
