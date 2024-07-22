import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { DateMonthYearFormatModule } from '@library/date'; 
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSelectModule,
        MatGridListModule,
        MatDialogModule,
        MatRippleModule,
        DateMonthYearFormatModule
    ]
})
export class ViewModule { }
