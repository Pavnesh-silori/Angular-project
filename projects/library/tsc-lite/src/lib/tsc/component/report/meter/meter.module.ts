import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { MeterReportRoutingModule } from './meter-routing.module';
import { MeterReportComponent } from './meter.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        MeterReportComponent
    ],
    imports: [
        CommonModule,
        MeterReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputModule,
        AggregationDurationModule,
        ParamMetricModule,
        DownloadReportModule,
        MessageAlertModule,
        SkeletonModule,
        NgxMatSelectSearchModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule
    ]
})
export class MeterReportModule { }
