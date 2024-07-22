import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        children: [
            {
                path: '',
                loadChildren: () => import('../insourcing/page/page.module').then(m => m.PageModule)
            },
            {
                path: 'create',
                loadChildren: () => import('../insourcing/create/create.module').then(m => m.CreateModule)
            },
            {
                path: ':recordID/view',
                loadChildren: () => import('../insourcing/view/view.module').then(m => m.ViewModule)
            },
            {
                path: ':recordID/update',
                loadChildren: () => import('../insourcing/update/update.module').then(m => m.UpdateModule)
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OutsourcingRoutingModule { }
