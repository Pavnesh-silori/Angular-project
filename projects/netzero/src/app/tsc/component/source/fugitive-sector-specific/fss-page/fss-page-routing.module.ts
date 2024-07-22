import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FssPageComponent } from './fss-page.component';

const routes: Routes = [
    {
        path: '',
        component: FssPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FssPageRoutingModule { }
