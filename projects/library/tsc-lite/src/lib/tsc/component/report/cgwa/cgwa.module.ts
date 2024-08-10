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

import { DownloadReportModule } from '../../_shared/download-report/download-report.module';

import { CgwaReportRoutingModule } from './cgwa-routing.module';
import { CgwaReportComponent } from './cgwa.component';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        CgwaReportComponent
    ],
    imports: [
        CommonModule,
        CgwaReportRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,

        DownloadReportModule,

        DateInputModule,
        MessageAlertModule,
        SkeletonModule
    ]
})
export class CgwaReportModule { }
