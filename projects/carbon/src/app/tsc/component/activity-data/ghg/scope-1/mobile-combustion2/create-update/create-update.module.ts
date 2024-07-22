import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { CreateUpdateComponent } from './create-update.component';
import { CreateUpdateRouting } from './create-update-routing.module';

import { FuelDistanceTravelledComponent } from './fuel-distance-travelled/fuel-distance-travelled.component';
import { FuelOdometerReadingComponent } from './fuel-odometer-reading/fuel-odometer-reading.component';
import { PriceDistanceTravelledComponent } from './price-distance-travelled/price-distance-travelled.component';
import { PriceOdometerReadingComponent } from './price-odometer-reading/price-odometer-reading.component';

// tsc-library
import { DateInputModule } from '@library/date';

// /tsc-library/
@NgModule({
  declarations: [
    CreateUpdateComponent,
    FuelDistanceTravelledComponent,
    FuelOdometerReadingComponent,
    PriceDistanceTravelledComponent,
    PriceOdometerReadingComponent
  ],
  imports: [
    CommonModule,
    CreateUpdateRouting,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatSlideToggleModule,
    DateInputModule,
    NgxMatSelectSearchModule,
    NgxDaterangepickerMd.forRoot(),
  ],
  exports:[CreateUpdateComponent]
})
export class CreateUpdateModule { }
