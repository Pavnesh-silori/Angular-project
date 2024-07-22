import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WasteGasExportCreateRoutingModule } from './create-routing.module';

import { WasteGasExportCreateComponent } from './create.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatMenuModule } from '@angular/material/menu';
import { DateInputModule } from '@library/date';

@NgModule({
  declarations: [
    WasteGasExportCreateComponent,
    TotalAmountComponent,
    MeterReadingComponent
  ],
  imports: [
    CommonModule,
    WasteGasExportCreateRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatSlideToggleModule,
    NgxMatSelectSearchModule,
    NgxDaterangepickerMd.forRoot(),
    DateInputModule,
  ]
})
export class WasteGasExportCreateModule { }
