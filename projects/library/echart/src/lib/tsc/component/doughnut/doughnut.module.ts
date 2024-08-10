import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoughnutComponent } from './doughnut.component';

import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
    declarations: [
        DoughnutComponent
    ],
    imports: [
        CommonModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
    ],
    exports: [
        DoughnutComponent
    ]
})
export class DoughnutModule { }
