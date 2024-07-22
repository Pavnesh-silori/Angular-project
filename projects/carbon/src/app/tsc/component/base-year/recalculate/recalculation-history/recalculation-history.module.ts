import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecalculationHistoryRoutingModule } from './recalculation-history-routing.module';
import { RecalculationHistoryComponent } from './recalculation-history.component';

import { MatPaginatorModule } from '@angular/material/paginator';

import { TimelineModule } from './timeline/timeline.module';

@NgModule({
    declarations: [
        RecalculationHistoryComponent
    ],
    imports: [
        CommonModule,
        RecalculationHistoryRoutingModule,
        MatPaginatorModule,
        TimelineModule,
    ]
})
export class RecalculationHistoryModule { }
