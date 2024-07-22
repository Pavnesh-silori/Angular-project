import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerViewComponent } from './scheduler-view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        SchedulerViewComponent,
    ],
    imports: [
        CommonModule,

        MatCardModule
    ],
    exports: [
        SchedulerViewComponent
    ]
})

export class SchedulerViewModule { }
