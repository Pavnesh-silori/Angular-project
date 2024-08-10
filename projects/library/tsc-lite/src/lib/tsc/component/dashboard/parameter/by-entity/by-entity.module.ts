import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { ByEntityRoutingModule } from './by-entity-routing.module';
import { ByEntityComponent } from './by-entity.component';

import { AggregationDurationModule } from '../../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityTypeModule } from '../../../dropdown/entity-type/entity-type.module';
import { EntityDialogModule } from '../../../_shared/dialog/entity/entity.module';

// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import { BasicAreaLineBarModule } from '@library/echart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// /tsc-library/

@NgModule({
    declarations: [
        ByEntityComponent
    ],
    imports: [
        CommonModule,
        ByEntityRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputModule,
        AggregationDurationModule,
        EntityTypeModule,
        EntityDialogModule,
        MessageAlertModule,
        SkeletonModule,
        BasicAreaLineBarModule,
        MatCardModule,
        MatRippleModule
    ]
})
export class ByEntityModule { }
