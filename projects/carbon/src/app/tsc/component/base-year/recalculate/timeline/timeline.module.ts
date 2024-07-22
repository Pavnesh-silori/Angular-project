import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './timeline.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [
        TimelineComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatPaginatorModule
    ],
    exports: [ TimelineComponent ]
})
export class TimelineModule { }
