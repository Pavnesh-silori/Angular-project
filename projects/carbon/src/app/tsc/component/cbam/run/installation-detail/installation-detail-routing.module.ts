import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallationDetailComponent } from './installation-detail.component';

const routes: Routes = [
  {
    path: '',
    component: InstallationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallationDetailRoutingModule { }
