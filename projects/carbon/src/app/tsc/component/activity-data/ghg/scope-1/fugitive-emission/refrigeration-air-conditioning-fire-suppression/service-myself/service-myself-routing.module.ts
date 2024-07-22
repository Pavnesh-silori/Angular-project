import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceMyselfComponent } from './service-myself.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchaseAcquisitionComponent } from './purchase-acquisition/purchase-acquisition.component';
import { SalesDisbursementsComponent } from './sales-disbursements/sales-disbursements.component';
import { RetrofittingComponent } from './retrofitting/retrofitting.component';

const routes: Routes = [
    {
        path: '',
        component: ServiceMyselfComponent,
        children: [
            {
                path: 'inventory',
                component: InventoryComponent
            },
            {
                path: 'purchase-acquisition',
                component: PurchaseAcquisitionComponent
            },
            {
                path: 'sales-disbursement',
                component: SalesDisbursementsComponent
            },
            {
                path: 'retrofitting',
                component: RetrofittingComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class ServiceMyselfRoutingModule { }
