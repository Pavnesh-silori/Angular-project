import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';

const routes: Routes = [
    {
        path: '',
        component: TabComponent,
        children: [
            {
                path: 'request',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../request/sent/list/list.module').then(m => m.ListModule)
                    },
                    {
                        path: ':requestID/view',
                        loadChildren: () => import('../request/sent/view/view.module').then(m => m.ViewModule)
                    },
                    {
                        path: 'create',
                        loadChildren: () => import('../request/sent/create-update/create.module').then(m => m.CreateModule)
                    },
                    {
                        path: ':requestID/update',
                        loadChildren: () => import('../request/sent/create-update/create.module').then(m => m.CreateModule)
                    }
                ]
            },
            {
                path: 'response',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../request/received/list/list.module').then(m => m.ListModule)
                    },
                    {
                        path: ':responseID/view',
                        loadChildren: () => import('../request/received/view/view.module').then(m => m.ViewModule)
                    }
                ]
            },
            {
                path: 'data',
                loadChildren: () => import('@carbon/component/subsidiary-emission-data/subsidiary-emission-data.module').then(m => m.SubsidiaryEmissionDataModule)
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmissionRoutingModule { }
