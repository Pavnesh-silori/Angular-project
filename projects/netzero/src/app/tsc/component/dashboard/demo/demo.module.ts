import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { NgxEchartsModule } from 'ngx-echarts';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent
    }
]

@NgModule({
    declarations: [DemoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        })
    ]
})

export class DemoModule { }
