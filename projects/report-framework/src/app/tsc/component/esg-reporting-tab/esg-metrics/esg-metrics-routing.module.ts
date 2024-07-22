import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsgMetricsComponent } from './esg-metrics.component';

const routes: Routes = [
    {
        path: '',
        component: EsgMetricsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsgMetricsRoutingModule { }
