import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//tsc-library
import { FormAction } from '@library/tsc-common';
// /tsc-library/

const routes: Routes = [
    {
        path: 'create',
        loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule),
        data: { action: FormAction.CREATE }
    },
    {
        path: 'update',
        loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule),
        data: { action: FormAction.UPDATE }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RunRoutingModule { }
