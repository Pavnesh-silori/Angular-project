import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalTrackingComponent } from './interval-tracking.component';

const routes: Routes = [
  {
    path: '',
    component: IntervalTrackingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntervalTrackingRoutingModule { }
