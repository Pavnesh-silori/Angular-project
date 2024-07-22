import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactorListComponent } from './factor-list.component';

const routes: Routes = [
    {
        path: '',
        component: FactorListComponent,
        data: {
            title: "Standard emission factor's version's activities's factor list"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FactorListRoutingModule { }
