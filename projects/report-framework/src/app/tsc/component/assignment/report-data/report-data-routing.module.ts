import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDataComponent } from './report-data.component';

const routes: Routes = [
  {
    path: '',
    component: ReportDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportDataRoutingModule { }
