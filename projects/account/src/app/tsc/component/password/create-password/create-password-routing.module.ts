import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePasswordComponent } from './create-password.component';

const routes: Routes = [
    {
        path: '',
        component: CreatePasswordComponent,
        data: {
            title: 'Reset Password'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreatePasswordRoutingModule { }
