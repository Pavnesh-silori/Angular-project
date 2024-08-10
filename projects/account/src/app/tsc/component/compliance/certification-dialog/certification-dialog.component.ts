import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogEnum } from '@library/tsc-common';

@Component({
    selector: 'app-certification-dialog',
    templateUrl: './certification-dialog.component.html',
    styleUrls: ['./certification-dialog.component.scss']
})
export class CertificationDialogComponent implements OnInit {
    DialogEnum = DialogEnum;

    certificationDefinition: any;
    certificationName: any;

    constructor(
        public dialogRef: MatDialogRef<CertificationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ) {
        this.certificationDefinition = data['selectedCertification']['definition'];
        this.certificationName = data['selectedCertification']['name'];
        this.dialogRef.disableClose = true;
    }
    ngOnInit(): void {
    }

    updateData(newData) {
        this.certificationDefinition = newData['definition'];
        this.certificationName = newData['name'];
    }

}
