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

import { ScheduleReportCgwaRoutingModule } from './cgwa-routing.module';
import { ScheduleReportCgwaComponent } from './cgwa.component';


@NgModule({
    declarations: [
        ScheduleReportCgwaComponent
    ],
    imports: [
        CommonModule,
        ScheduleReportCgwaRoutingModule,

        ScheduleReportConfigurationModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class ScheduleReportCgwaModule { }
