import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { CreateUpdateComponent } from './create-update.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

//tsc-library
import { DateMonthYearFormatModule } from '@library/date';
// /tsc-library/

@NgModule({
    declarations: [
        CreateUpdateComponent
    ],
    imports: [
        CommonModule,
        CreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatOptionModule,
        MatRadioModule,
        MatDatepickerModule,
        DateMonthYearFormatModule,
        NgxMatSelectSearchModule
    ]
})
export class CreateUpdateModule { }
