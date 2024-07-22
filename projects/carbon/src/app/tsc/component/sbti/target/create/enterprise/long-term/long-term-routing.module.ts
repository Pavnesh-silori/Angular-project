import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LongTermComponent } from './long-term.component';

const routes: Routes = [
    {
        path: '',
        component: LongTermComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LongTermRoutingModule { }
