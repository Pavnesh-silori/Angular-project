import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./scope-1/scope-1.module').then(m => m.Scope1Module)
    },
    {
        path: '',
        loadChildren: () => import('./scope-2/scope-2.module').then(m => m.Scope2Module)
    },
    {
        path: '',
        loadChildren: () => import('./scope-3/scope-3.module').then(m => m.Scope3Module)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GhgRoutingModule { }
