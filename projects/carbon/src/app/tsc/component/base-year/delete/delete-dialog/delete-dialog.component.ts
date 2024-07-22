import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

// tsc-library
import { DialogEnum } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteGHGBaseYearDialog implements OnInit {

    DialogEnum = DialogEnum;

    CARBON_CONSTANT = CARBON_CONSTANT;

    title: any = 'Title';
    message: any = 'Message';
    confirmationMsg: any = 'Confirmation message';
    btnLabel: any = 'Delete';
    isBaseYearSameAsGHG;
    isSBTiSettingExist: boolean = false;

    page: string = 'BASE_YEAR';

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogRef: MatDialogRef<DeleteGHGBaseYearDialog>,
    ) { 
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.title = this.data['title'];
        this.message = this.data['message'];
        this.confirmationMsg = this.data['confirmationMsg'];
        this.btnLabel = this.data['btnLabel'];
        this.isSBTiSettingExist = this.data['isSBTiSettingExist'];
        this.isBaseYearSameAsGHG = this.data['isBaseYearSameAsGHG'];
        this.page = this.data['page'];
    }
}

@NgModule({
    declarations: [DeleteGHGBaseYearDialog],
    imports: [
        CommonModule,
        RouterModule,
        MatDialogModule,
    ],
})
export class DeleteGHGBaseYearDialogModule { }
