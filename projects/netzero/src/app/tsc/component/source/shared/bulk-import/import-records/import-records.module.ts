import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

//tsc-library
import { MessageAlertModule } from '@library/tsc-common';
// /tsc-library

import { ImportRecordsComponent } from './import-records.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ConfigureRecordsModule } from '../configure-record/configure-record.module';
import { PreviewRecordErrorModule } from '../preview-record-error/preview-record-error.module';
import { ImportRecordRoutingModule } from './import-records-routing.module';
import { PreviewRecordModule } from '../preview-record/preview-record.module';

@NgModule({
    declarations: [
        ImportRecordsComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MessageAlertModule,

        MatStepperModule,
        ConfigureRecordsModule,
        PreviewRecordErrorModule,
        PreviewRecordModule,
        ImportRecordRoutingModule
    ],
    exports: [
        ImportRecordsComponent
    ]
})
export class ImportRecordsModule { }
