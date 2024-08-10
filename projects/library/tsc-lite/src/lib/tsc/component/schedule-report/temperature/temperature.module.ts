import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ScheduleReportConfigurationModule } from '../_shared/configuration/configuration.module';

import { ScheduleReportTemperatureRoutingModule } from './temperature-routing.module';
import { ScheduleReportTemperatureComponent } from './temperature.component';


@NgModule({
    declarations: [
        ScheduleReportTemperatureComponent
    ],
    imports: [
        CommonModule,
        ScheduleReportTemperatureRoutingModule,

        ScheduleReportConfigurationModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonToggleModule
    ]
})
export class ScheduleReportTemperatureModule { }
