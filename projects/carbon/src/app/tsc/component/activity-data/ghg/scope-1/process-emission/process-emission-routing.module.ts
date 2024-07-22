import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAction } from '@library/tsc-common';

const routes: Routes = [
    {
        path: 'page',
        loadChildren: () => import('./page/page.module').then(m => m.ProcessEmissionActivityDataPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProcessEmissionActivityDataRoutingModule { }
