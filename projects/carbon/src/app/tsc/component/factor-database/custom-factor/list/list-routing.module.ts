import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'database',
        children: [
            {
                path: '',
                loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule)
            },
            {
                path: ':cefDB/:cefDBID',
                children: [
                    {
                        path: 'factor',
                        children: [
                            {
                                path: '',
                                loadChildren: () => import('./factor/factor.module').then(m => m.FactorModule)
                            },
                            {
                                path: ':factorName/:factorID/version',
                                loadChildren: () => import('./version/version.module').then(m => m.VersionModule)
                            }
                        ]
                    }
                ]
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }
