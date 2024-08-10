import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleReportPageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduleReportPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleReportPageRoutingModule { }
