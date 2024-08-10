import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'view',
        loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
    },
    {
        path: ':rootOrgID/update',
        loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrganizationRoutingModule { }
