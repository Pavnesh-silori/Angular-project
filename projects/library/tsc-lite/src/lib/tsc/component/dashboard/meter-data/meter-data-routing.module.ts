import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeterDataDashboardComponent } from './meter-data.component';

const routes: Routes = [
    {
        path: '',
        component: MeterDataDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeterDataRoutingModule { }
