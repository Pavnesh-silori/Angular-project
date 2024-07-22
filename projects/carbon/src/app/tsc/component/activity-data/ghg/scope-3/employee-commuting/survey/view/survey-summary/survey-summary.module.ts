import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { SurveySummaryRoutingModule } from './survey-summary-routing.module';
import { SurveySummaryComponent } from './survey-summary.component';


@NgModule({
    declarations: [SurveySummaryComponent],
    imports: [

        CommonModule,
        SurveySummaryRoutingModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts'),
        }),

    ],
    exports: [SurveySummaryComponent]
})
export class SurveySummaryModule { }
