import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
    {
        path: '',
        component: TabComponent,
        children: [
            {
                path: 'ledger',
                loadChildren: () => import('./ledger/ledger.module').then(m => m.LedgerModule)
            },
            {
                path: 'activity-data/activity',
                loadChildren: () => import('../activity-data/non-ghg/non-ghg.module').then(m => m.NonGhgModule)
            },
            {
                path: 'run/page',
                loadChildren: () => import('./run/page/page.module').then(m => m.PageModule),
            },
            {
                path: 'report/page',
                loadChildren: () => import('./report/page/page.module').then(m => m.PageModule)
            }
        ]
    },
    {
        path: 'run',
        loadChildren: () => import('./run/run.module').then(m => m.RunModule)
    },
    {
        path: 'landing-page',
        loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CbamRoutingModule { }
