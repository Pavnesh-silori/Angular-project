import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemindersRoutingModule } from './reminders-routing.module';
import { ReminderDialogComponent } from './reminder-dialog/reminder-dialog/reminder-dialog.component';

import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        ReminderDialogComponent
    ],
    imports: [
        CommonModule,
        RemindersRoutingModule,
        MatTooltipModule
    ]
})

export class RemindersModule { }
