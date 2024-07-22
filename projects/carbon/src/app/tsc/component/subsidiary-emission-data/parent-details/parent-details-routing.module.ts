import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentDetailsComponent } from './parent-details.component';

const routes: Routes = [
  {
    path: '',
    component: ParentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentDetailsRoutingModule { }
