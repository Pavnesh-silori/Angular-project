import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecalculateComponent } from './recalculate.component';

const routes: Routes = [
    {
        path: '',
        component: RecalculateComponent
    },
    {
        path: 'history',
        loadChildren: () => import('./recalculation-history/recalculation-history.module').then(m => m.RecalculationHistoryModule)
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecalculateRoutingModule { }
