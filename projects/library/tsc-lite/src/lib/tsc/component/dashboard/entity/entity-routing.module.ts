import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntityDashboardComponent } from './entity.component';

const routes: Routes = [
    {
        path: '',
        component: EntityDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntityDashboardRoutingModule { }
