import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () => import('./page/page.module').then(m => m.PageModule)
            },
            {
                path: ':configName/:configID/interval',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./interval-tracking/interval-tracking.module').then(m => m.IntervalTrackingModule),
                    },
                    {
                        path: ':configIntervalName/:configIntervalID/data',
                        children: [
                            {
                                path: '',
                                loadChildren: () => import('../assignment/report-data/report-data.module').then(m => m.ReportDataModule)
                            },
                            {
                                path: '**',
                                redirectTo: ''
                            }
                        ]
                    },
                    {
                        path: '**',
                        redirectTo: ''
                    }
                ]
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportTrackingRoutingModule { }
