import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupLevelChangeComponent } from './group-level.component';

const routes: Routes = [{ path: '', component: GroupLevelChangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupLevelRoutingModule { }
