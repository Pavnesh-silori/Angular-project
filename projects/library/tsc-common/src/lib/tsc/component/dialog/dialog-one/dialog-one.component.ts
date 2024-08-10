import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogOneM } from '../../../model/dialog-one.model';
import { DialogOneEnum } from '../../../enum/dialog-one.enum';
import { MATERIAL_CONSTANT } from '../../../constant/material.constant';

@Component({
    selector: 'lib-dialog-one',
    templateUrl: './dialog-one.component.html',
    styles: [
    ]
})

export class DialogOneComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    constructor(
        public dialogRef: MatDialogRef<DialogOneComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogOneM
    ) {
        this.dialogRef.disableClose = true;
    }

    dialogOne = DialogOneEnum;

    ngOnInit(): void {
    }

    success() {
        this.dialogRef.close(true);
    }

    fail() {
        this.dialogRef.close(false);
    }

}
