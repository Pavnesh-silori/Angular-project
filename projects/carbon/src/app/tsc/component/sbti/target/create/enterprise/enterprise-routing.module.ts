import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'create',
        loadChildren: () => import('./create-home/create-home.module').then(m => m.CreateHomeModule)
    },
    {
        path: 'near-term',
        loadChildren: () => import('./near-term/near-term.module').then(m => m.NearTermModule)
    },
    {
        path: 'long-term',
        loadChildren: () => import('./long-term/long-term.module').then(m => m.LongTermModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
