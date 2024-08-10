import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';

import { SourceLoadModule } from '../../_shared/filter/source-load/source-load.module';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { UsageAcrossFacilityRoutingModule } from './usage-across-facility-routing.module';
import { UsageAcrossFacilityComponent } from './usage-across-facility.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        UsageAcrossFacilityComponent
    ],
    imports: [
        CommonModule,
        UsageAcrossFacilityRoutingModule,
        SourceLoadModule,
        DateInputModule,
        AggregationDurationModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule
    ]
})
export class UsageAcrossFacilityModule { }
