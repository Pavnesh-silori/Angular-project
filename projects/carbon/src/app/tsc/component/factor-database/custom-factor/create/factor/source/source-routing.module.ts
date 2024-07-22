import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourceComponent } from './source.component';

const routes: Routes = [
    {
        path: '', 
        component: SourceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SourceRoutingModule { }
