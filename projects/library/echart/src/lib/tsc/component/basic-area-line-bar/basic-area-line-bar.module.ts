import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAreaLineBarComponent } from './basic-area-line-bar.component';

import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
    declarations: [
        BasicAreaLineBarComponent
    ],
    imports: [
        CommonModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
    ],
    exports: [
        BasicAreaLineBarComponent
    ]
})
export class BasicAreaLineBarModule { }
