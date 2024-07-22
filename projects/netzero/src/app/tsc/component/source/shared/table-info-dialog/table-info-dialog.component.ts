import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


import { MatRippleModule } from '@angular/material/core';
import { COMMON_CONSTANT, MATERIAL_CONSTANT } from '@library/tsc-common';


@Component({
    selector: 'app-table-info-dialog',
    templateUrl: './table-info-dialog.component.html',
    styles: ['']
})
export class TableInfoDialogComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    title: any = 'Title';
    body: any = 'Body';
    records: any;
    columns: string[] = [];
    COMMON_CONSTANT = COMMON_CONSTANT;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogRef: MatDialogRef<TableInfoDialogComponent>,
    ) {
        this.dialogRef.disableClose = false;
    }

    ngOnInit(): void {
        this.records = this.data['records'].filter((record) => (record.ghgEmission?.count ?? 0) > 0 || (record.cbamEmission?.count ?? 0) > 0);

        this.title = this.data['title'];
        this.body = this.data['body'];
        this.columns = this.data['columns'];

    }

}


