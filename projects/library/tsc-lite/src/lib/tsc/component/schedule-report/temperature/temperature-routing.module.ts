import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleReportTemperatureComponent } from './temperature.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduleReportTemperatureComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleReportTemperatureRoutingModule { }
