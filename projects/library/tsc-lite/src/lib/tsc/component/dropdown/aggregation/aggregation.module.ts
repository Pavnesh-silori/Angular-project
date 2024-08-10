import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { AggregationComponent } from './aggregation.component';

@NgModule({
    declarations: [
        AggregationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule
    ],
    exports: [
        AggregationComponent
    ]
})
export class AggregationModule { }
