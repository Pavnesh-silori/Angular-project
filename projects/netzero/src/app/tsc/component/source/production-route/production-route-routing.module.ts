import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        loadChildren: () => import('./page/page.module').then(m => m.PageModule)
    },
    {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
        data: { action: 'CREATE' }
    },
    {
        path: ':productionRouteID/view',
        loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
    },
    {
        path: ':productionRouteID/update',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
        data: { action: 'UPDATE' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductionRouteRoutingModule { }
