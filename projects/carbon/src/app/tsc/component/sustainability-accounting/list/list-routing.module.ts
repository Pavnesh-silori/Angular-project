import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbonComponent } from './list.component';

const routes: Routes = [
    {
        path: '',
        component: CarbonComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarbonRoutingModule { }
