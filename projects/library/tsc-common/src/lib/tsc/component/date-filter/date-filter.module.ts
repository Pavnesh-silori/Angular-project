import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { DateFilterComponent } from './date-filter.component';
import { DateMonthYearFormatModule } from '../../directive/date-month-year-format.directive';

@NgModule({
    declarations: [
        DateFilterComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        DateMonthYearFormatModule,
        NgxDaterangepickerMd.forRoot(),
    ],
    exports: [
        DateFilterComponent
    ]
})
export class DateFilterModule {}
