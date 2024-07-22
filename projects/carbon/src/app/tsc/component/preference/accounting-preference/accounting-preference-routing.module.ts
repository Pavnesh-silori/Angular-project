import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingPreferenceComponent } from './accounting-preference.component';

const routes: Routes = [
    {
        path: '',
        component: AccountingPreferenceComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountingPreferenceRoutingModule { }
