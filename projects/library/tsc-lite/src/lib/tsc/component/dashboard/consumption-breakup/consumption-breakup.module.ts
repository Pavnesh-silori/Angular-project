import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ConsumptionBreakupDashboardRoutingModule } from './consumption-breakup-routing.module';
import { ConsumptionBreakupDashboardComponent } from './consumption-breakup.component';

// tsc-library
import { SkeletonModule } from '@library/tsc-common';
import { DateFilterTwoModule } from '@library/date';
import { DoughnutModule } from '@library/echart';
// /tsc-library/


@NgModule({
    declarations: [
        ConsumptionBreakupDashboardComponent
    ],
    imports: [
        CommonModule,
        ConsumptionBreakupDashboardRoutingModule,
        DateFilterTwoModule,
        SkeletonModule,
        DoughnutModule,
        MatCardModule
    ]
})
export class ConsumptionBreakupDashboardModule { }
