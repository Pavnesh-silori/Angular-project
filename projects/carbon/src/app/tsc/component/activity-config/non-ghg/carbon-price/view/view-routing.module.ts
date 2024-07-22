import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbonPriceViewComponent } from './view.component';

const routes: Routes = [
    {
        path: '',
        component: CarbonPriceViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarbonPriceViewRoutingModule { }
