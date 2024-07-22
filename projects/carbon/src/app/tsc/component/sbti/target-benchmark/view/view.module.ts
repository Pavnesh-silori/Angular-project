import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { MatCardModule } from '@angular/material/card';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatCardModule,
    NgCircleProgressModule.forRoot(),
  ], exports: [
    ViewComponent
  ]
})
export class ViewModule { }
