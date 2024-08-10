import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './page-routing.module';
import { SessionComponent } from './page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { SessionDetailsModule } from '../session-details-dialog/session-details-dialog.module';

@NgModule({
    declarations: [SessionComponent],
    imports: [
        CommonModule,
        SessionRoutingModule,
        FontAwesomeModule,
        MatTooltipModule,
        MatDialogModule,
        MatTableModule,
        SessionDetailsModule,
    ]
})
export class SessionModule { }