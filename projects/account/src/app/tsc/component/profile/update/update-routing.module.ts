import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update.component';

const routes: Routes = [
    {
        path: '',
        component: UpdateComponent,
        data: {
            title: 'Update'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdateRoutingModule { }
