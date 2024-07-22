import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessEmissionActivityDataPageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: ProcessEmissionActivityDataPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessEmissionActivityDataPageRoutingModule { }
