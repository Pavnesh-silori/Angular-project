import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { DataAvailabilityReportRoutingModule } from './data-availability-routing.module';
import { DataAvailabilityReportComponent } from './data-availability.component';

// tsc-library
import { DateFilterTwoModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        DataAvailabilityReportComponent
    ],
    imports: [
        CommonModule,
        DataAvailabilityReportRoutingModule,
        DateFilterTwoModule,
        FormsModule,
        ReactiveFormsModule,
        EntityModule,
        DeviceModule,
        ParamMetricModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRippleModule,
    ]
})
export class DataAvailabilityReportModule { }
