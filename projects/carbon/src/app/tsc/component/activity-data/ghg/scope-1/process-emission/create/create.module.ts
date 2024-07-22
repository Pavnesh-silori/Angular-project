import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProcessEmissionActivityDataCreateRoutingModule } from './create-routing.module';
import { ProcessEmissionActivityDataCreateComponent } from './create.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { DateInputModule } from '@library/date';

@NgModule({
    declarations: [
        ProcessEmissionActivityDataCreateComponent
    ],
    imports: [
        CommonModule,
        ProcessEmissionActivityDataCreateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,

        NgxMatSelectSearchModule,
        NgxDaterangepickerMd,

        DateInputModule
    ]
})

export class ProcessEmissionActivityDataCreateModule { }
