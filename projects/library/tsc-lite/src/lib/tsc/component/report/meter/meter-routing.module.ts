import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeterReportComponent } from './meter.component';

const routes: Routes = [
    {
        path: '',
        component: MeterReportComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterReportRoutingModule { }
