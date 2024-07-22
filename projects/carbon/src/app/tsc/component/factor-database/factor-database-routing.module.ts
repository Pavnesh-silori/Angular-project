import { NgModule } from '@angular/core';

import {
    RouterModule,
    Routes
} from '@angular/router';

import { FactorDatabaseComponent } from './factor-database.component';

const routes: Routes = [
    {
        path: ':factorDatabaseType',
        component: FactorDatabaseComponent,
        children: [
            {
                path: 'standard',
                children: [
                    {
                        path: 'emission',
                        loadChildren: () => import('./standard-emission-factor/standard-emission-factor.module').then(m => m.StandardEmissionFactorModule),
                    },
                    {
                        path: 'estimation',
                        loadChildren: () => import('./standard-emission-factor/standard-emission-factor.module').then(m => m.StandardEmissionFactorModule),
                    }
                ]
            },
            {
                path: 'custom',
                children: [
                    {
                        path: 'emission',
                        loadChildren: () => import('./custom-factor/custom-factor.module').then(m => m.CustomFactorModule),
                    },
                    {
                        path: 'estimation',
                        loadChildren: () => import('./custom-factor/custom-factor.module').then(m => m.CustomFactorModule),
                    },
                ]
            }
        ]
    },
    {
        path: ':factorDatabaseType',
        children: [
            {
                path: 'custom',
                children: [
                    {
                        path: 'emission/database/:cefDB/:cefDBID/factor',
                        loadChildren: () => import('./custom-factor/create/factor/factor.module').then(m => m.FactorModule)
                    },
                    {
                        path: 'estimation/database/:cefDB/:cefDBID/factor',
                        loadChildren: () => import('./custom-factor/create/factor/factor.module').then(m => m.FactorModule)
                    },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FactorDatabaseRoutingModule { }
