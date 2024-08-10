import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { GeneratedAlarmPageRoutingModule } from './page-routing.module';
import { GeneratedAlarmPageComponent } from './page.component';

import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';
import { DateMonthYearFormatModule } from '@library/date';

@NgModule({
    declarations: [
        GeneratedAlarmPageComponent
    ],
    imports: [
        CommonModule,
        GeneratedAlarmPageRoutingModule,
        ReactiveFormsModule,
        DateMonthYearFormatModule,
        MatInputModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        SearchBarOneModule,
        EllipsisPipeModule
    ]
})
export class GeneratedAlarmPageModule { }
