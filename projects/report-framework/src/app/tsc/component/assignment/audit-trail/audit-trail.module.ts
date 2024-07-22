import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditTrailRoutingModule } from './audit-trail-routing.module';
import { AuditTrailComponent } from './audit-trail.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MessageAlertModule } from '@library/tsc-common';

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
        MessageAlertModule
    ],
    exports: [
        AuditTrailComponent
    ]
})
export class AuditTrailModule { }
