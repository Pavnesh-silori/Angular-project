import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricityHeatExportActivityDataCreateRoutingModule } from './create-routing.module';
import { ElectricityHeatExportActivityDataCreateComponent } from './create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { DateInputModule } from '@library/date';


@NgModule({
    declarations: [
        ElectricityHeatExportActivityDataCreateComponent
    ],
    imports: [
        CommonModule,
        ElectricityHeatExportActivityDataCreateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxDaterangepickerMd,
        NgxMatSelectSearchModule,
        DateInputModule,
    ]
})
export class ElectricityHeatExportActivityDataCreateModule { }
