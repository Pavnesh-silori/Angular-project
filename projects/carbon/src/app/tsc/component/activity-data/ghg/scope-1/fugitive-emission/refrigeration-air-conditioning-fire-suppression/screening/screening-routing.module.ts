import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningComponent } from './screening.component';
import { PurchaseAcquisitionComponent } from './purchase-acquisition/purchase-acquisition.component';
import { SalesDisbursementsComponent } from './sales-disbursements/sales-disbursements.component';

const routes: Routes = [
    {
        path: '',
        component: ScreeningComponent,
        children: [
            {
                path: 'purchase-acquisition',
                component: PurchaseAcquisitionComponent
            },
            {
                path: 'sales-disbursement',
                component: SalesDisbursementsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScreeningRoutingModule { }
