import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntervalConfigDetailsRoutingModule } from './interval-config-details-routing.module';
import { IntervalConfigDetailsComponent } from './interval-config-details.component';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    IntervalConfigDetailsComponent
  ],
  imports: [
    CommonModule,
    IntervalConfigDetailsRoutingModule,
    MatCardModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    NgCircleProgressModule.forRoot(),
    MatTooltipModule

  ],
  exports: [
    IntervalConfigDetailsComponent
  ]
})
export class IntervalConfigDetailsModule { }
