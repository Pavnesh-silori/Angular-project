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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { SourcingReportRoutingModule } from './sourcing-routing.module';
import { SourcingReportComponent } from './sourcing.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        SourcingReportComponent
    ],
    imports: [
        CommonModule,
        SourcingReportRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,

        AggregationDurationModule,
        DownloadReportModule,

        DateInputModule,
        MessageAlertModule,
        SkeletonModule
    ]
})
export class SourcingReportModule { }
