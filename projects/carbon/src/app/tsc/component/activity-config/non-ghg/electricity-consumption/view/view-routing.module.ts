import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElectricityConsumptionActivityConfigViewComponent } from './view.component';

const routes: Routes = [
    {
        path: '',
        component: ElectricityConsumptionActivityConfigViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ElectricityConsumptionActivityConfigViewRoutingModule { }
