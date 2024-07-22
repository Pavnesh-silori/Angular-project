import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
    },
    {
        path: ':processID/update',
        loadChildren: () => import('./update/update.module').then(m => m.UpdateModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateUpdateRoutingModule { }
