import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

// tsc-library
import { MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library


@Component({
    selector: 'app-decline-request',
    templateUrl: './decline-request.component.html',
    styles: [
    ]
})
export class DeclineRequestDialog implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    CARBON_CONSTANT = CARBON_CONSTANT;

    parentOrg: string = 'Parent organization name';

    reasonFC = new FormControl();

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<DeclineRequestDialog>
    ) { 
        this.dialogRef.disableClose = true;
        this.parentOrg = data['parentOrgName'];
    }

    ngOnInit(): void {
    }

    declineRequest() {
        this.dialogRef.close({
            DECLINE: CARBON_CONSTANT.DECLINE_DR,
            reason: this.reasonFC.value
        });
    }
}

@NgModule({
    declarations: [DeclineRequestDialog],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatTooltipModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        
    ],
    exports: [DeclineRequestDialog]
})
export class DeclineRequestDialogModule { }
