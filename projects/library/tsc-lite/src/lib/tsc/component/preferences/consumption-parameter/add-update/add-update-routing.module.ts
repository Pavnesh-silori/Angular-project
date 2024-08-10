import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumptionParamAddUpdateComponent } from './add-update.component';

const routes: Routes = [
    {
        path: '',
        component: ConsumptionParamAddUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumptionParamAddUpdateRoutingModule { }
