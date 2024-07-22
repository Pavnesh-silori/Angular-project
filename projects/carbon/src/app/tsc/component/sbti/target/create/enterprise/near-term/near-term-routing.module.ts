import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NearTermComponent } from './near-term.component';

const routes: Routes = [
    {
        path: '',
        component: NearTermComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NearTermRoutingModule { }
