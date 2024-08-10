import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumptionBreakupComponent } from './consumption-breakup.component';

const routes: Routes = [
    {
        path: '',
        component: ConsumptionBreakupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumptionBreakupRoutingModule { }
