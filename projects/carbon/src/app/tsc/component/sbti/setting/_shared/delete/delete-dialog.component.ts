import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// tsc-library
import { DialogEnum } from '@library/tsc-common';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialog implements OnInit {

    DialogEnum = DialogEnum;

    title: any = 'Title';
    message: any = 'Message';
    confirmationMsg: any = 'Confirmation message';
    btnLabel: any = 'Delete';
    isBaseYearSameAsGHG: boolean = false;
    page: string = 'BASE_YEAR';

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogRef: MatDialogRef<DeleteDialog>,
    ) { 
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.title = this.data['title'];
        this.message = this.data['message'];
        this.confirmationMsg = this.data['confirmationMsg'];
        this.btnLabel = this.data['btnLabel'];
        this.isBaseYearSameAsGHG = this.data['isBaseYearSameAsGHG'];
        this.page = this.data['page'];
    }

}

@NgModule({
    declarations: [DeleteDialog],
    imports: [
        CommonModule,
        RouterModule,
        MatDialogModule,
    ],
})
export class DeleteDialogModule { }
