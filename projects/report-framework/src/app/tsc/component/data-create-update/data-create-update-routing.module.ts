import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCreateUpdateComponent } from './data-create-update.component';

const routes: Routes = [
  {
    path: '',
    component: DataCreateUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCreateUpdateRoutingModule { }
