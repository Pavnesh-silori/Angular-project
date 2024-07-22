import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

//tsc-library
import { DateFilterModule } from '@library/tsc-common';
import { MessageAlertModule } from '@library/tsc-common';
import { DateMonthYearFormatModule } from '@library/date';
//tsc-library

import { SchedulerWorkflowComponent } from './scheduler-workflow.component';
import { SchedulerWorkflowRoutingModule } from './scheduler-workflow-routing.module';

@NgModule({
    declarations: [SchedulerWorkflowComponent],
    imports: [
        CommonModule,
        SchedulerWorkflowRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatOptionModule,
        MatCardModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        DateFilterModule,
        MatDatepickerModule,
        NgxDaterangepickerMd,
        DateMonthYearFormatModule,
        MessageAlertModule
    ],
    exports: [SchedulerWorkflowComponent]
})
export class SchedulerWorkflowModule { }
