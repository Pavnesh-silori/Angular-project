import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';

import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { RawDataReportRoutingModule } from './raw-data-routing.module';
import { RawDataReportComponent } from './raw-data.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        RawDataReportComponent
    ],
    imports: [
        CommonModule,
        RawDataReportRoutingModule,
        DateInputModule,
        EntityModule,
        DeviceModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule
    ]
})
export class RawDataReportModule { }
