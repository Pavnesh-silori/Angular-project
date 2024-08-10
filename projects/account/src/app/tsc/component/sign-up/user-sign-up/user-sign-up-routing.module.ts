import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSignUpComponent } from './user-sign-up.component';

const routes: Routes = [
    {
        path: '',
        component: UserSignUpComponent,
        data: {
            title: 'User Sign Up'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSignUpRoutingModule { }
