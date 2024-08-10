import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { StackedBarChartComponent } from './stacked-bar-chart.component';

@NgModule({
    declarations: [StackedBarChartComponent],
    imports: [
        CommonModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
    ],
    exports: [StackedBarChartComponent]
})
export class StackedBarChartModule { }
