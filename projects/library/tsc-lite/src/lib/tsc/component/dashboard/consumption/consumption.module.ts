import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { EntityDialogModule } from '../../_shared/dialog/entity/entity.module';

import { ConsumptionRoutingModule } from './consumption-routing.module';
import { ConsumptionComponent } from './consumption.component';

// tsc-library
import { DateFilterTwoModule } from '@library/date';
import { StackBarModule } from '@library/echart';
// /tsc-library/


@NgModule({
    declarations: [
        ConsumptionComponent
    ],
    imports: [
        CommonModule,
        ConsumptionRoutingModule,
        EntityDialogModule,
        DateFilterTwoModule,
        StackBarModule,
        MatCardModule
    ]
})
export class ConsumptionModule { }
