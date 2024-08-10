import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_CONSTANT } from '../../../constant/material.constant';
import { DialogOneEnum } from '../../../enum/dialog-one.enum';
import { MaterialFormFieldAppearance } from '../../../enum/material.enum';

@Component({
    selector: 'app-type-dialog',
    templateUrl: './type-confirmation.component.html',
})
export class TypeConfirmationDialog {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    DialogOneEnum = DialogOneEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    btnFlag: boolean = false;
    constructor(
        public dialogRef: MatDialogRef<TypeConfirmationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
    }

    confirmationCheck(value: string): void {
        this.data.confirmationInput == value ? this.btnFlag = true : this.btnFlag = false;
    }

    success() {
        this.dialogRef.close(true);
    }

    fail() {
        this.dialogRef.close(false);
    }
}
