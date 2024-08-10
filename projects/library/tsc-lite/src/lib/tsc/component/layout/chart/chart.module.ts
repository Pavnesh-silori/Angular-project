import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';

@NgModule({
    declarations: [
        ChartComponent
    ],
    imports: [
        CommonModule,
        ChartRoutingModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        })
    ]
})
export class ChartModule { }