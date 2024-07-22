import { Component, NgModule, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

// tsc-library
import { DialogEnum } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-cancel-request',
    templateUrl: './cancel-request.component.html',
    styles: [
    ]
})
export class CancelRequestDialog implements OnInit {

    DialogEnum = DialogEnum;

    constructor(
        private dialogRef: MatDialogRef<CancelRequestDialog>
    ) { 
        dialogRef.disableClose = true;
    }

    ngOnInit(): void { }

}

@NgModule({
    declarations: [CancelRequestDialog],
    imports: [
        CommonModule,
        MatDialogModule,
        MatTooltipModule,
        MatButtonModule,
    ],
    exports: [CancelRequestDialog]
})
export class CancelRequestDialogModule { }
