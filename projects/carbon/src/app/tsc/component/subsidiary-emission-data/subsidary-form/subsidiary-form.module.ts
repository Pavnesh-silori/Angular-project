import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsidaryFormRoutingModule } from './subsidiary-form-routing.module';
import { EmissionDataModule } from '../emission-data/emission-data.module';
import { SubsidiaryFormComponent } from './subsidiary-form.component';  

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

// tsc-library
import { DateMonthYearFormatModule } from '@library/date'; 
//  /tsc-library


@NgModule({
  declarations: [
    SubsidiaryFormComponent
  ],
  imports: [
    CommonModule,
    SubsidaryFormRoutingModule,
    EmissionDataModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxDaterangepickerMd.forRoot(),
    MatInputModule,
    DateMonthYearFormatModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    
  ]
})
export class SubsidaryFormModule { }
