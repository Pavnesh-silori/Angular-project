import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackBarComponent } from './stack-bar.component';

import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    declarations: [
        StackBarComponent
    ],
    imports: [
        CommonModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
    ],
    exports: [
        StackBarComponent
    ]
})
export class StackBarModule { }
