import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        children: [
            {
                path: '',
                loadChildren: () => import('./page/page.module').then(m => m.PageModule)
            },
            {
                path: 'create',
                loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
            },
            {
                path: ':recordID/view',
                loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
            },
            {
                path: ':recordID/update',
                loadChildren: () => import('./update/update.module').then(m => m.UpdateModule)
            },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsourcingRoutingModule { }
