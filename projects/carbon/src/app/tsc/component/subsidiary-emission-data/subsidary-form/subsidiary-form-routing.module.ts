import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsidiaryFormComponent } from './subsidiary-form.component';

const routes: Routes = [
  {
    path: '',
    component: SubsidiaryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsidaryFormRoutingModule { }
