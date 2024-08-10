import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByEntityComponent } from './by-entity.component';

const routes: Routes = [
    {
        path: '',
        component: ByEntityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ByEntityRoutingModule { }
