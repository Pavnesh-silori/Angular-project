import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricityConsumptionActivityDataCreateRoutingModule } from './create-routing.module';
import { ElectricityConsumptionActivityDataCreateComponent } from './create.component';
import { ElectricityConsumptionTotalAmountComponent } from './total-amount/total-amount.component';
import { ElectricityConsumptionMeterReadingComponent } from './meter-reading/meter-reading.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { DateInputModule } from '@library/date';

@NgModule({
    declarations: [
        ElectricityConsumptionActivityDataCreateComponent,
        ElectricityConsumptionTotalAmountComponent,
        ElectricityConsumptionMeterReadingComponent,
    ],
    imports: [
        CommonModule,
        ElectricityConsumptionActivityDataCreateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,

        DateInputModule,

        NgxDaterangepickerMd,
        NgxMatSelectSearchModule
    ]
})

export class ElectricityConsumptionActivityDataCreateModule { }
