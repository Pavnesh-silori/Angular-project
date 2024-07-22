import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityDataComponent } from './activity-data.component';

import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [ActivityDataComponent],
    imports: [
        CommonModule,
        MatTooltipModule
    ],
    exports: [ActivityDataComponent],
})
export class ActivityDataModule { }
