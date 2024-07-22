import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


import { HeatElectricityExportRoutingModule } from './heat-electricity-export-routing.module';
import { HeatElectricityExportComponent } from './heat-electricity-export.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { DateInputModule } from '@library/date';


@NgModule({
  declarations: [
    HeatElectricityExportComponent,
    MeterReadingComponent,
    TotalAmountComponent
  ],
  imports: [
    CommonModule,
    HeatElectricityExportRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    DateInputModule,

    NgxDaterangepickerMd.forRoot(),
    NgxMatSelectSearchModule,

  ]
})
export class HeatElectricityModule { }
