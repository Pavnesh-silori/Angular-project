import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByParameterComponent } from './by-parameter.component';

const routes: Routes = [
    {
        path: '',
        component: ByParameterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ByParameterRoutingModule { }
