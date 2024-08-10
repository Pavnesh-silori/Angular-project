import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgSignUpComponent } from './org-sign-up.component';

const routes: Routes = [
    {
        path: '',
        component: OrgSignUpComponent,
        data: {
            title: 'Org Sign up'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrgSignUpRoutingModule { }
