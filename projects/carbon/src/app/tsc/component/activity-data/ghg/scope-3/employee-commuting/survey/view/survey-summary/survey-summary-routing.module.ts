import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveySummaryComponent } from './survey-summary.component';

const routes: Routes = [
  {
    path: "",
    component: SurveySummaryComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveySummaryRoutingModule { }
