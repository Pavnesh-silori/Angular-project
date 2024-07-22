import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FailedRunComponent } from './failed-run.component';

const routes: Routes = [
    {
        path: '',
        component: FailedRunComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FailedRunRoutingModule { }
