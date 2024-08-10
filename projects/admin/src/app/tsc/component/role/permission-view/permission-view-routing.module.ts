import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionViewComponent } from './permission-view.component';

const routes: Routes = [
  {
    path: '', 
    component: PermissionViewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionViewRoutingModule { }
