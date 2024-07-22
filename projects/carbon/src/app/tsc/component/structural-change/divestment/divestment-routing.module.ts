import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        children: [
            {
                path: '',
                loadChildren: () => import('../merger-acquisition/page/page.module').then(m => m.PageModule)
            },
            {
                path: 'create',
                loadChildren: () => import('../merger-acquisition/create/create.module').then(m => m.CreateModule)
            },
            {
                path: ':recordID/view',
                loadChildren: () => import('../merger-acquisition/view/view.module').then(m => m.ViewModule)
            },
            {
                path: ':recordID/update',
                loadChildren: () => import('../merger-acquisition/update/update.module').then(m => m.UpdateModule)
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DivestmentRoutingModule { }
