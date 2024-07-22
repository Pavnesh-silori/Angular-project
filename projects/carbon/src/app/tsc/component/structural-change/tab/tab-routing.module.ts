import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabComponent } from './tab.component';

import { StructuralChangeTabTypeEnum } from '@carbon/enum/ghg.enum';

const routes: Routes = [
    {
        path: '',
        component: TabComponent,
        children: [
            {
                path: 'merger-acquisition',
                loadChildren: () => import('../merger-acquisition/merger-acquisition.module').then(m => m.MergerAcquisitionModule),
                data: { tabType: StructuralChangeTabTypeEnum.MERGER_ACQUISITION }
            },
            {
                path: 'divestment',
                loadChildren: () => import('../divestment/divestment.module').then(m => m.DivestmentModule),
                data: { tabType: StructuralChangeTabTypeEnum.DIVESTMENT }
            },
            {
                path: 'insourcing',
                loadChildren: () => import('../insourcing/insourcing.module').then(m => m.InsourcingModule),
                data: { tabType: StructuralChangeTabTypeEnum.INSOURCING }
            },
            {
                path: 'outsourcing',
                loadChildren: () => import('../outsourcing/outsourcing.module').then(m => m.OutsourcingModule),
                data: { tabType: StructuralChangeTabTypeEnum.OUTSOURCING }
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabRoutingModule { }
