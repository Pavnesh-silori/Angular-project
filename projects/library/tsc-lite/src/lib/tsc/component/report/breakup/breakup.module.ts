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

import { SourceLoadModule } from '../../_shared/filter/source-load/source-load.module';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { BreakupReportRoutingModule } from './breakup-routing.module';
import { BreakupReportComponent } from './breakup.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/


@NgModule({
    declarations: [
        BreakupReportComponent
    ],
    imports: [
        CommonModule,
        BreakupReportRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,

        SourceLoadModule,
        AggregationDurationModule,
        EntityModule,
        DownloadReportModule,

        DateInputModule,
        MessageAlertModule,
        SkeletonModule
    ]
})
export class BreakupReportModule { }
