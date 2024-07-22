import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './timeline.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TimelineModule as SharedTimelineModule } from '../../timeline/timeline.module'

@NgModule({
    declarations: [
        TimelineComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatPaginatorModule,
        SharedTimelineModule
    ]
})
export class TimelineModule { }
