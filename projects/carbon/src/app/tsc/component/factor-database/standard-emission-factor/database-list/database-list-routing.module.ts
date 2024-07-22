import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseListComponent } from './database-list.component';

const routes: Routes = [
    {
        path: '',
        component: DatabaseListComponent,
        data: {
            title: 'Standard emission factor database list'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatabaseListRoutingModule { }
