import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactorComponent } from './factor.component';

const routes: Routes = [
    {
        path: '',
        component: FactorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FactorRoutingModule { }
