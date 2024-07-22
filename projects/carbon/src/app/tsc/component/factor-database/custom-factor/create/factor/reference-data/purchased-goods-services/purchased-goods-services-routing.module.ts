import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasedGoodsServicesComponent } from './purchased-goods-services.component';

const routes: Routes = [
    {
        path: '',
        component: PurchasedGoodsServicesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchasedEnergyRoutingModule { }
