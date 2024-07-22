import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'activity-change', loadChildren: () => import('./activity-change/activity-change.module').then(m => m.ActivityChangeModule) }, { path: 'group', loadChildren: () => import('./group-level/group-level.module').then(m => m.GroupLevelChangeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangesRoutingModule { }
