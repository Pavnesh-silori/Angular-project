import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { ConsumptionReportRoutingModule } from './consumption-routing.module';
import { ConsumptionReportComponent } from './consumption.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        ConsumptionReportComponent
    ],
    imports: [
        CommonModule,
        ConsumptionReportRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatButtonToggleModule,
        MatSlideToggleModule,

        NgxMatSelectSearchModule,

        DownloadReportModule,

        DateInputModule,
        MessageAlertModule,
        SkeletonModule
    ]
})
export class ConsumptionReportModule { }
