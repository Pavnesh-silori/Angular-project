import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasedEnergyComponent } from './purchased-energy.component';

const routes: Routes = [
    {
        path: '',
        component: PurchasedEnergyComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchasedEnergyRoutingModule { }
