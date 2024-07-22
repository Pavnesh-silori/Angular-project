import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list.component';

const routes: Routes = [
    {
        path: '',
        component: ActivityListComponent,
        data: {
            title: 'Standard emission factor version activity list'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityListRoutingModule { }
