import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditTrailRoutingModule } from './audit-trail-routing.module';
import { AuditTrailComponent } from './audit-trail.component';
import { ViewChangesModule } from './view-changes/view-changes.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

//tsc-library
import { MessageAlertModule } from '@library/tsc-common';
// /tsc-library

@NgModule({
    declarations: [
        AuditTrailComponent
    ],
    imports: [
        CommonModule,
        AuditTrailRoutingModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MessageAlertModule,
        ViewChangesModule
    ],
    exports: [
        AuditTrailComponent
    ]
})
export class AuditTrailModule { }
