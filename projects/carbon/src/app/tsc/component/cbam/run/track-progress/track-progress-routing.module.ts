import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackProgressComponent } from './track-progress.component';

const routes: Routes = [
  {
    path: '',
    component: TrackProgressComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackProgressRoutingModule { }
