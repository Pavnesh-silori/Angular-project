import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';

const routes: Routes = [
    {
        path: '',
        component: TabComponent,
        children: [
            {
                path: 'ghg',
                children: [
                    // {
                    //     path: 'create',
                    //     loadChildren: () => import('../setup/create/create.module').then(m => m.CreateModule),
                    //     data: {
                    //         type: 'CREATE',
                    //         base_year: BaseYear.GHG_BASE_YEAR
                    //     }
                    // },
                    {
                        path: '',
                        loadChildren: () => import('../setup/view/view.module').then(m => m.ViewModule),
                        data: { base_year: BaseYearEnum.GHG_BASE_YEAR }
                    },
                    // {
                    //     path: 'update',
                    //     loadChildren: () => import('../setup/create/create.module').then(m => m.CreateModule),
                    //     data: {
                    //         type: 'UPDATE',
                    //         base_year: BaseYear.GHG_BASE_YEAR
                    //     }
                    // },
                    {
                        path: 'recalculate',
                        loadChildren: () => import('../recalculate/recalculate.module').then(m => m.RecalculateModule),
                        data: {
                            base_year: BaseYearEnum.GHG_BASE_YEAR
                        }
                    },
                ]
            },
            {
                path: 'sbti',
                children: [
                    // {
                    //     path: 'create',
                    //     loadChildren: () => import('../setup/create/create.module').then(m => m.CreateModule),
                    //     data: {
                    //         type: 'CREATE',
                    //         base_year: BaseYear.SBTI_BASE_YEAR
                    //     }
                    // },
                    {
                        path: '',
                        loadChildren: () => import('../setup/view/view.module').then(m => m.ViewModule),
                        data: { base_year: BaseYearEnum.SBTI_BASE_YEAR }
                    },
                    // {
                    //     path: 'update',
                    //     loadChildren: () => import('../setup/create/create.module').then(m => m.CreateModule),
                    //     data: {
                    //         type: 'UPDATE',
                    //         base_year: BaseYear.SBTI_BASE_YEAR
                    //     }
                    // },
                    {
                        path: 'recalculate',
                        loadChildren: () => import('../recalculate/recalculate.module').then(m => m.RecalculateModule),
                        data: {
                            base_year: BaseYearEnum.SBTI_BASE_YEAR
                        }
                    },
                ]
            },
            // {
            //     path: 'structural-change',
            //     loadChildren: () => import('@CarbonNetZero/component/structural-change/structural-change.module').then(m => m.StructuralChangeModule)
            // },
            {
                path: 'recalculate',
                loadChildren: () => import('../recalculate/recalculate.module').then(m => m.RecalculateModule)
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabRoutingModule { }
