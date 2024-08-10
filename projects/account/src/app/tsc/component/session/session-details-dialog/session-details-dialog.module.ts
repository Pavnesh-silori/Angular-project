import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SessionDetailsComponent } from './session-details-dialog.component';
import { TerminateSessionModule } from '../terminate-session-dialog/terminate-session-dialog.module';

@NgModule({
    declarations: [SessionDetailsComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatTooltipModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatSelectModule,
        MatCheckboxModule,
        MatFormFieldModule,
        TerminateSessionModule
    ],
    exports: [
        SessionDetailsComponent
    ]
})
export class SessionDetailsModule { }
