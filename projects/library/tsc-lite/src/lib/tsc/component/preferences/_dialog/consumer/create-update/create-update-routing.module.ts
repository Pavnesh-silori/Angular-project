import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumerCreateUpdateComponent } from './create-update.component';

const routes: Routes = [
    {
        path: '',
        component: ConsumerCreateUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumerCreateUpdateRoutingModule { }
