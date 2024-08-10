import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { ScheduleReportConfigurationModule } from '../_shared/configuration/configuration.module';

import { ScheduleReportSourcingRoutingModule } from './sourcing-routing.module';
import { ScheduleReportSourcingComponent } from './sourcing.component';


@NgModule({
    declarations: [
        ScheduleReportSourcingComponent
    ],
    imports: [
        CommonModule,
        ScheduleReportSourcingRoutingModule,

        ScheduleReportConfigurationModule,

        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class ScheduleReportSourcingModule { }