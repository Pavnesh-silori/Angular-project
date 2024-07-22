import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { WasteExportRoutingModule } from './waste-export-routing.module';
import { WasteExportComponent } from './waste-export.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';


@NgModule({
  declarations: [
    WasteExportComponent,
    MeterReadingComponent,
    TotalAmountComponent
  ],
  imports: [
    CommonModule,
    WasteExportRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,

    NgxDaterangepickerMd.forRoot(),
    NgxMatSelectSearchModule,
  ]
})
export class WasteExportModule { }
