import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowViewComponent } from './workflow-view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        WorkflowViewComponent,
    ],
    imports: [
        CommonModule,

        MatCardModule
    ],
    exports: [
        WorkflowViewComponent
    ]
})

export class WorkflowViewModule { }
