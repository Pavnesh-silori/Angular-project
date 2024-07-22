import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportConfigRoutingModule } from './report-config-routing.module';
import { ReportConfigComponent } from './report-config.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ReportConfigComponent
  ],
  imports: [
    CommonModule,
    ReportConfigRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgxMatSelectSearchModule,
    MatCardModule
  ],
  exports: [
    ReportConfigComponent
  ],
})
export class ReportConfigModule { }
