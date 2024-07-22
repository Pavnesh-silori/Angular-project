import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'database',
        children: [
            {
                path: '',
                loadChildren: () => import('./database-list/database-list.module').then(m => m.DatabaseListModule)
            },
            {
                path: ':database/:databaseID/version',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./version-list/version-list.module').then(m => m.VersionListModule)
                    },
                    {
                        path: ':version/:versionID/activity',
                        children: [
                            {
                                path: '',
                                loadChildren: () => import('./activity-list/activity-list.module').then(m => m.ActivityListModule)
                            },
                            {
                                path: ':activity/factor',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => import('./factor-list/factor-list.module').then(m => m.FactorListModule)
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
            },
            {
                path: '**',
                redirectTo: ''
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StandardEmissionFactorRoutingModule { }
