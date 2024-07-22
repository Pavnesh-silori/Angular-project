import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecalculateRoutingModule } from './recalculate-routing.module';
import { RecalculateComponent } from './recalculate.component';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgxEchartsModule } from 'ngx-echarts';
import { TimelineModule } from './timeline/timeline.module';
import { ActivityChangeModule } from './changes/activity-change/activity-change.module';
import { GroupLevelChangeModule } from './changes/group-level/group-level.module';

@NgModule({
    declarations: [
        RecalculateComponent
    ],
    imports: [
        CommonModule,
        RecalculateRoutingModule,
        MatCardModule,
        MatTooltipModule,
        MatPaginatorModule,
        NgxEchartsModule.forRoot({
			echarts: () => import('echarts')
		}),
        TimelineModule,
        ActivityChangeModule,
        GroupLevelChangeModule,
    ]
})
export class RecalculateModule { }
