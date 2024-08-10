import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { ScheduleReportConfigurationModule } from '../_shared/configuration/configuration.module';

import { ScheduleReportConsumptionRoutingModule } from './consumption-routing.module';
import { ScheduleReportConsumptionComponent } from './consumption.component';


@NgModule({
    declarations: [
        ScheduleReportConsumptionComponent
    ],
    imports: [
        CommonModule,
        ScheduleReportConsumptionRoutingModule,

        ScheduleReportConfigurationModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule
    ]
})
export class ScheduleReportConsumptionModule { }
