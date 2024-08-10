import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';

import { SourceLoadModule } from '../../_shared/filter/source-load/source-load.module';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { ConsumptionBreakupRoutingModule } from './consumption-breakup-routing.module';
import { ConsumptionBreakupComponent } from './consumption-breakup.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        ConsumptionBreakupComponent
    ],
    imports: [
        CommonModule,
        ConsumptionBreakupRoutingModule,
        SourceLoadModule,
        DateInputModule,
        AggregationDurationModule,
        EntityModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule
    ]
})
export class ConsumptionBreakupModule { }
