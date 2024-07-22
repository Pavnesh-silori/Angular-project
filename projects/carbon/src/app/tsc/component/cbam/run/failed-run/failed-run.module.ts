import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FailedRunRoutingModule } from './failed-run-routing.module';
import { FailedRunComponent } from './failed-run.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        FailedRunComponent
    ],
    imports: [
        CommonModule,
        FailedRunRoutingModule,
        MatCardModule,
        MatTableModule
    ],
    exports: [FailedRunComponent]
})

export class FailedRunModule { }
