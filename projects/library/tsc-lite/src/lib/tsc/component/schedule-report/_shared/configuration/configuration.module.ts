import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { ScheduleReportConfigurationComponent } from './configuration.component';

@NgModule({
    declarations: [
        ScheduleReportConfigurationComponent
    ],
    imports: [
        CommonModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatChipsModule,

        NgxMatSelectSearchModule
    ],
    exports: [
        ScheduleReportConfigurationComponent
    ]
})
export class ScheduleReportConfigurationModule { }
