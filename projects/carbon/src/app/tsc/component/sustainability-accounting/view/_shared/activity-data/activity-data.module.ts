import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityDataComponent } from './activity-data.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { SurveySummaryModule } from '@CarbonNetZero/component/scope-3/employee-commuting/survey/view/survey-summary/survey-summary.module';

@NgModule({
    declarations: [ActivityDataComponent],
    imports: [
        CommonModule,
        MatTooltipModule,
        MatCardModule,
        // SurveySummaryModule
    ],
    exports: [ActivityDataComponent],
})
export class ActivityDataModule { }
