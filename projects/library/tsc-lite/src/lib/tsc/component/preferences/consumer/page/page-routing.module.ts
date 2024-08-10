import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumerPageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: ConsumerPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumerPageRoutingModule { }
