import { Component, Inject, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import {
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { CustomFactorController } from '@carbon/controller/custom-factor.controller';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { DialogResponseEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';

@Component({
    selector: 'app-update-factor',
    templateUrl: './update-factor-dialog.component.html',
    styles: [
    ]
})
export class UpdateFactorDialog implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    currentOrgID: any;

    factorID: any;
    factorFG: FormGroup;

    isUpdate: boolean = false;

    initialObject: any;
    isEqual: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<UpdateFactorDialog>,
        storageService: StorageService,
        private toastrService: ToastrService,
        private customFactorController: CustomFactorController,
    ) {
        this.dialogRef.disableClose = true;
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {
        this.formGroupInit();
        this.isUpdate = true;
        this.factorID = this.data['factorID'];

        this.getFactorByID();
    }

    formGroupInit() {
        this.factorFG = this.formBuilder.group({
            name: [, Validators.required],
        });
    }

    getFactorByID() {
        this.customFactorController.getFactorByID(this.currentOrgID, this.factorID)
            .subscribe((factorRes) => {
                this.patchFactorFG(factorRes);
            },
                error => {
                    console.log('error in getFactorByID() -', error);
                    this.toastrService.openToast(`${error.error['title']}`, `${error.error['message']}`, `${error.error['result']}`)
                });
    }

    patchFactorFG(factor) {
        this.factorFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.factorFG.value));

        this.factorFG.patchValue({ name: factor['details']['name'] });

        this.isEqual = true;
        this.initialObject = this.factorFG.value;
    }

    isValidForm() {
        if (this.factorFG.invalid) {
            console.log('invalid form -', this.factorFG);
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.updateFactor();
    }

    updateFactor() {
        this.customFactorController.updateFactor(this.currentOrgID, this.factorFG.value, this.factorID)
            .subscribe((updateRes) => {
                if (updateRes?.['response'] &&
                    updateRes['reponse']['nameAlreadyExists'] == 'YES') {
                    this.factorFG.get('name').setErrors({ nameAlreadyExists: true });
                    this.toastrService.openToast(`${updateRes['title']}`, `${updateRes['message']}`, `${updateRes['result']}`);
                    return;
                } else {
                    this.dialogRef.close(DialogResponseEnum.SUCCESS);
                }
            },
                error => {
                    this.toastrService.openToast(`${error.error['title']}`, `${error.error['message']}`, `${error.error['result']}`)
                });
    }
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDialogModule,
        MatFormFieldModule,
    ],
    declarations: [UpdateFactorDialog],
    exports: [UpdateFactorDialog]
})
export class UpdateFactorModule { }