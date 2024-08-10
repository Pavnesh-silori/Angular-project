import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SourceCreateUpdateComponent } from './create-update.component';

const routes: Routes = [
    {
        path: '',
        component: SourceCreateUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SourceCreateUpdateRoutingModule { }
