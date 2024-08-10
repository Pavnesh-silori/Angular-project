import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormAction, VIEW_TYPE_ENUM } from '@library/tsc-common';

const routes: Routes = [
    {
        path: 'create',
        loadChildren: () => import('./create-update/create-update.module').then(m => m.CreateUpdateModule),
        data: { action: FormAction.CREATE, source: VIEW_TYPE_ENUM.PAGE }
    },
    {
        path: ':vehicleID/update',
        loadChildren: () => import('./create-update/create-update.module').then(m => m.CreateUpdateModule),
        data: { action: FormAction.UPDATE, source: VIEW_TYPE_ENUM.PAGE }
    },
    {
        path: 'page',
        loadChildren: () => import('./page/page.module').then(m => m.PageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VehicleRoutingModule { }
