import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceRoutingModule } from './compliance-routing.module';
import { CertificationDialogComponent } from './certification-dialog/certification-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        CertificationDialogComponent
    ],
    imports: [
        CommonModule,
        ComplianceRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule
    ]
})
export class ComplianceModule { }
