import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DownloadReportComponent } from './download-report.component';

@NgModule({
    declarations: [
        DownloadReportComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule
    ],
    exports: [DownloadReportComponent]
})
export class DownloadReportModule { }
