import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'forgot',
        loadChildren: () => import('../password/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    },
    {
        path: 'reset',
        loadChildren: () => import('../password/reset-password/reset-password.module').then(m => m.NewPasswordModule)
    },
    {
        path: 'create',
        loadChildren: () => import('../password/create-password/create-password.module').then(m => m.CreatePasswordModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PasswordRoutingModule { }
