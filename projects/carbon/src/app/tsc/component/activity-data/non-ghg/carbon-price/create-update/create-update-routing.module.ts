import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbonPriceActivityDataCreateUpdateComponent } from './create-update.component';

const routes: Routes = [
    {
        path: '',
        component: CarbonPriceActivityDataCreateUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarbonPriceActivityDataCreateUpdateRoutingModule { }
