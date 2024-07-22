import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';

const routes: Routes = [
    {
        path: '',
        component: TabComponent,
        children: [
            {
                path: 'calculation',
                loadChildren: () => import('../calculation-preference/calculation-preference.module').then(m => m.CalculationPreferenceModule),
            },
            {
                path: 'accounting',
                loadChildren: () => import('../accounting-preference/accounting-preference.module').then(m => m.AccountingPreferenceModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabRoutingModule { }
