import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FugitiveReleaseComponent } from './fugitive-release.component';

const routes: Routes = [
    {
        path: '',
        component: FugitiveReleaseComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FugitiveReleaseRoutingModule { }
