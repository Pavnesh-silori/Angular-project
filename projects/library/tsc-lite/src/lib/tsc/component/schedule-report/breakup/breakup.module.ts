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

import { EntityModule } from '../../dropdown/entity/entity.module';

import { ScheduleReportConfigurationModule } from '../_shared/configuration/configuration.module';

import { ScheduleReportBreakupRoutingModule } from './breakup-routing.module';
import { ScheduleReportBreakupComponent } from './breakup.component';


@NgModule({
    declarations: [
        ScheduleReportBreakupComponent
    ],
    imports: [
        CommonModule,
        ScheduleReportBreakupRoutingModule,

        EntityModule,
        ScheduleReportConfigurationModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule
    ]
})
export class ScheduleReportBreakupModule { }
