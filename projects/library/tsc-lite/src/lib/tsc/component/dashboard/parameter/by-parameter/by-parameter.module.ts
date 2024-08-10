import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { ByParameterRoutingModule } from './by-parameter-routing.module';
import { ByParameterComponent } from './by-parameter.component';

import { AggregationDurationModule } from '../../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityTypeModule } from '../../../dropdown/entity-type/entity-type.module';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import { BasicAreaLineBarModule } from '@library/echart';
// /tsc-library/

@NgModule({
    declarations: [
        ByParameterComponent
    ],
    imports: [
        CommonModule,
        ByParameterRoutingModule,
        DateInputModule,
        AggregationDurationModule,
        EntityTypeModule,
        MessageAlertModule,
        SkeletonModule,
        BasicAreaLineBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRippleModule,
        NgxMatSelectSearchModule
    ]
})
export class ByParameterModule { }
