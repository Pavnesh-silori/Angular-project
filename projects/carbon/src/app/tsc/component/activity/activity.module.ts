import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { MatTableModule } from '@angular/material/table';

import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RoundProgressModule,
        MatTableModule,
        ActivityRoutingModule,
    ],
    declarations: [ActivityComponent]
})

export class ActivityModule { }
