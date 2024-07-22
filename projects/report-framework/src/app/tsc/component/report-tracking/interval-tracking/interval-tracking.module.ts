import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { IntervalTrackingRoutingModule } from './interval-tracking-routing.module';
import { IntervalTrackingComponent } from './interval-tracking.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [IntervalTrackingComponent],
  imports: [
    CommonModule,
    IntervalTrackingRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class IntervalTrackingModule { }
