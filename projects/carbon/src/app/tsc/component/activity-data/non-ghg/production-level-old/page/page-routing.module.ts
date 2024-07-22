import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionLevelPageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: ProductionLevelPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionLevelPageRoutingModule { }
