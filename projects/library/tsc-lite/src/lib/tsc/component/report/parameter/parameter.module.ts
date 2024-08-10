import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';

import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { AggregationModule } from '../../dropdown/aggregation/aggregation.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { ParameterReportRoutingModule } from './parameter-routing.module';
import { ParameterReportComponent } from './parameter.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        ParameterReportComponent
    ],
    imports: [
        CommonModule,
        ParameterReportRoutingModule,
        DateInputModule,
        AggregationDurationModule,
        EntityModule,
        DeviceModule,
        ParamMetricModule,
        AggregationModule,
        SkeletonModule,
        MessageAlertModule,
        DownloadReportModule,
        MatTableModule,
        MatRippleModule
    ]
})
export class ParameterReportModule { }
