import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { CreateRoutingModule } from './create-routing.module';

import { CreateComponent } from './create.component';
import { EnergyConsumedComponent } from './_templates/energy-consumed/energy-consumed.component';
import { MeterReadingComponent } from './_templates/meter-reading/meter-reading.component';
import { HhvEnergyConsumedComponent } from './_templates/hhv-energy-consumed/hhv-energy-consumed.component';
import { HhvMeterReadingComponent } from './_templates/hhv-meter-reading/hhv-meter-reading.component';
import { MatCardModule } from '@angular/material/card';
import { DateInputModule } from '@library/date';

@NgModule({
    declarations: [
        CreateComponent,
        EnergyConsumedComponent,
        MeterReadingComponent,
        HhvEnergyConsumedComponent,
        HhvMeterReadingComponent
    ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatCardModule,
        NgxMatSelectSearchModule,
        NgxDaterangepickerMd.forRoot(),
        DateInputModule,

    ]
})
export class CreateModule { }
