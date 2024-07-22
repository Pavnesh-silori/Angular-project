import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationPreferenceComponent } from './calculation-preference.component';

const routes: Routes = [
    {
        path: '',
        component: CalculationPreferenceComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CalculationPreferenceRoutingModule { }
