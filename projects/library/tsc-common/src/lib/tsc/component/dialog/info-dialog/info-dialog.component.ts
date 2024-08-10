import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


import { MatRippleModule } from '@angular/material/core';

import { MATERIAL_CONSTANT } from '../../../constant/material.constant';

@Component({
    selector: 'app-info-dialog',
    templateUrl: './info-dialog.component.html',
    styles: ['']
})
export class InfoDialogComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    title: any = 'Title';
    body: any = 'Body';

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogRef: MatDialogRef<InfoDialogComponent>,
    ) {
        this.dialogRef.disableClose = false;
    }

    ngOnInit(): void {
        this.title = this.data['title'];
        this.body = this.data['body'];
    }

}


