import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleReportConsumptionComponent } from './consumption.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduleReportConsumptionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleReportConsumptionRoutingModule { }
