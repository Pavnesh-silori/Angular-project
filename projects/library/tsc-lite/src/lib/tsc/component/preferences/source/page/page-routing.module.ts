import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SourcePageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: SourcePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SourcePageRoutingModule { }
