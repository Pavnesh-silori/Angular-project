import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElectricityConsumptionActivityConfigCreateComponent } from './create.component';

const routes: Routes = [
    {
        path: '',
        component: ElectricityConsumptionActivityConfigCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ElectricityConsumptionActivityConfigCreateRoutingModule { }
