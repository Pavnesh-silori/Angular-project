import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityChangeDialog } from './activity-change.component';

const routes: Routes = [{ path: '', component: ActivityChangeDialog }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityChangeRoutingModule { }
