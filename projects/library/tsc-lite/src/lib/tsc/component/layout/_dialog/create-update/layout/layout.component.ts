import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { isEqual } from 'lodash';

// tsc-library
import { InvalidForm, ResponseM, MaterialFormFieldAppearance, ButtonLabelEnum, DialogEnum, FormErrorEnum } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrColor } from '@library/toastr-service';
import { Layout, LayoutController, LayoutService } from '@library/layout-service';
// /tsc-library/

@Component({
    selector: 'lib-layout',
    templateUrl: './layout.component.html',
    styles: [
    ]
})
export class CreateUpdateLayoutComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    DialogEnum = DialogEnum;
    FormErrorEnum = FormErrorEnum;

    title: string = 'Create';
    action: string = 'create';

    orgID: any;
    layoutID: any;
    maxLength = 200;

    layoutFG: FormGroup;

    layout = new Layout();

    isEqual: boolean = false;
    initialObject: any;

    constructor(
        public dialogRef: MatDialogRef<CreateUpdateLayoutComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private storageService: StorageService,
        private layoutFB: FormBuilder,
        private toastService: ToastrService,
        private layoutController: LayoutController,
        private layoutService: LayoutService,
    ) {
        this.action = data['action'];
        this.layoutID = data['layoutID'];
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID')

        this.layoutInit();

        if (this.action == 'update') {
            this.title = 'Update';
            this.getLayoutByID();
        }
        this.layoutFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.layoutFG.getRawValue()); });
    }

    layoutInit() {
        this.layoutFG = this.layoutFB.group({
            name: ['', [Validators.required]],
            description: []
        });
    }

    async getLayoutByID() {
        this.layout = await this.layoutService.getLayoutByID(this.orgID, this.layoutID);
        this.patchLayout(this.layout);
    }

    patchLayout(layout) {
        this.layoutFG.patchValue({
            name: layout['name'],
            description: layout['description']
        });
        this.isEqual = true;
    }

    createLayout() {
        if (this.layoutFG.invalid) {
            this.layoutFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.layoutController.createLayout(this.orgID, this.layoutFG.value)
            .subscribe((layoutCreateRes: ResponseM) => {
                this.dialogRef.close({
                    result: DialogEnum.SUCCESS_DR,
                    layoutID: layoutCreateRes.response.id
                })
            },
                error => {
                    console.log('error in createLayout() - ', error);
                });
    }

    updateLayout() {
        if (this.layoutFG.invalid) {
            this.layoutFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.layoutController.updateLayout(this.orgID, this.layoutID, this.layoutFG.value)
            .subscribe((updateLayoutRes: ResponseM) => {
                this.dialogRef.close({ result: DialogEnum.SUCCESS_DR, layoutID: null })
            },
                error => {
                    console.log('error in updateLayout() - ', error);
                });
    }

    public errorHandling = (control: string, error: string) => {
        return this.layoutFG.controls[control].hasError(error);
    }

}
