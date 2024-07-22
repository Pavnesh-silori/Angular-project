import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchingMetricRoutingModule } from './matching-metric-routing.module';
import { MatchingMetricComponent } from './matching-metric.component';
import { DataCreateUpdateModule } from '@report-framework/component/data-create-update/data-create-update.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    MatchingMetricComponent
  ],
  imports: [
    CommonModule,
    MatchingMetricRoutingModule,
    DataCreateUpdateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
  ]
})
export class MatchingMetricModule { }
