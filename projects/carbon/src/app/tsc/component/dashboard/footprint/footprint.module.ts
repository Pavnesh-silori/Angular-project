import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootprintRoutingModule } from './footprint-routing.module';
import { FootprintComponent } from './footprint.component';

import { MatTooltipModule } from '@angular/material/tooltip';

import { CarbonFilterModule } from '../_shared/filter/filter.component';
import { DoughnutChartModule } from '@netzero/component/_shared/chart/doughnut-chart/doughnut-chart.component'; 
import { StackedHorizontalBarChartModule } from '@netzero/component/_shared/chart/stacked-horizontal-bar-chart/stacked-horizontal-bar-chart.component'; 
import { HorizontalBarChartModule } from '@netzero/component/_shared/chart/horizontal-bar-chart/horizontal-bar-chart.component'; 

//library
import { DateFilterModule } from '@library/date'; 
// /library

@NgModule({
    declarations: [
        FootprintComponent
    ],
    imports: [
        CommonModule,
        FootprintRoutingModule,
        CarbonFilterModule,
        DoughnutChartModule,
        StackedHorizontalBarChartModule,
        HorizontalBarChartModule,
        MatTooltipModule,
        DateFilterModule,
    ]
})

export class FootprintModule { }
