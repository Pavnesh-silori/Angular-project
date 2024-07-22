import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElectricityConsumptionActivityDataCreateComponent } from './create.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: ElectricityConsumptionActivityDataCreateComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ElectricityConsumptionActivityDataCreateRoutingModule { }
