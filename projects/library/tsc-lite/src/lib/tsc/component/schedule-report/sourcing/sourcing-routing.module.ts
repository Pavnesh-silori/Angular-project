import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleReportSourcingComponent } from './sourcing.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduleReportSourcingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleReportSourcingRoutingModule { }
