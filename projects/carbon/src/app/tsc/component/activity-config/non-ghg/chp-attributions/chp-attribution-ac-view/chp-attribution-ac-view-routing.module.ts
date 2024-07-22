import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChpAttributionActivityConfigViewComponent } from './chp-attribution-ac-view.component';

const routes: Routes = [
    {
        path:'',
        component: ChpAttributionActivityConfigViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChpAttributionActivityConfigViewRoutingModule { }
