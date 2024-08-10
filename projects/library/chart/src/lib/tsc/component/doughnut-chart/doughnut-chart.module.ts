import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoughnutChartComponent } from './doughnut-chart.component';

import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    declarations: [DoughnutChartComponent],
    imports: [
        CommonModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
    ],
    exports: [DoughnutChartComponent]
})
export class DoughnutChartModule { }
