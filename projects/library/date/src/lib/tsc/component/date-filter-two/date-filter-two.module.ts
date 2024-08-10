import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { DateFilterTwoComponent } from './date-filter-two.component';
import { DateMonthYearFormatModule } from '../../directive/date-month-year-format.directive';

import { DateInputModule } from '../date-input/date-input.module';

@NgModule({
    declarations: [
        DateFilterTwoComponent
    ],
    imports: [
        CommonModule,
        DateInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NgxDaterangepickerMd.forRoot(),
        DateMonthYearFormatModule
    ],
    exports: [
        DateFilterTwoComponent
    ]
})
export class DateFilterTwoModule { }