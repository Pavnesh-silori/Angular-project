import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

// tsc-library
import { ButtonLabelEnum, DialogEnum, MATERIAL_CONSTANT } from '@library/tsc-common';
// tsc-library

@Component({
    selector: 'app-warning-dialog',
    templateUrl: './warning-dialog.component.html',
    styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialog implements OnInit {

    DialogEnum = DialogEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    title: any = 'Title';
    body: any = 'Body';
    btnLabel: any = 'Button label';

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogRef: MatDialogRef<WarningDialog>,
    ) {
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.title = this.data['title'];
        this.body = this.data['body'];
        this.btnLabel = this.data['btnLabel'];
    }
}

@NgModule({
    declarations: [WarningDialog],
    imports: [
        MatDialogModule,
        MatRippleModule,
        MatButtonModule
    ],
})

export class WarningDialogModule { }
