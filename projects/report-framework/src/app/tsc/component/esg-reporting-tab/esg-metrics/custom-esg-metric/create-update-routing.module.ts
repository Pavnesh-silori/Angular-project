import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomEsgMetricCreateUpdateComponent } from './create-update.component';

const routes: Routes = [
    {
        path: '',
        component: CustomEsgMetricCreateUpdateComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomEsgMetricCreateUpdateRoutingModule { }
