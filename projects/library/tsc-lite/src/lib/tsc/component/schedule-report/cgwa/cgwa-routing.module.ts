import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleReportCgwaComponent } from './cgwa.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduleReportCgwaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleReportCgwaRoutingModule { }
