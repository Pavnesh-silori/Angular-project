import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GhgEmissionReportRoutingModule } from './ghg-emission-report-routing.module';
import { GhgEmissionReportComponent } from './ghg-emission-report.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [
        GhgEmissionReportComponent
    ],
    imports: [
        CommonModule,
        GhgEmissionReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule
    ]
})

export class GhgEmissionReportModule { }
