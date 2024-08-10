import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleReportBreakupComponent } from './breakup.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduleReportBreakupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleReportBreakupRoutingModule { }
