import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DateInputComponent } from './date-input.component';

import { DateMonthYearFormatModule } from '../../directive/date-month-year-format.directive';

@NgModule({
    declarations: [
        DateInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        DateMonthYearFormatModule,
        NgxDaterangepickerMd.forRoot(),
    ],
    exports: [DateInputComponent]
})
export class DateInputModule { }
