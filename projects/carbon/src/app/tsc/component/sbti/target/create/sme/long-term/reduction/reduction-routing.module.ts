import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReductionComponent } from './reduction.component';

const routes: Routes = [
    {
        path: '',
        component: ReductionComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReductionRoutingModule { }
