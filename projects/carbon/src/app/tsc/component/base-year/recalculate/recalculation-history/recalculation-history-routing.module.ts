import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecalculationHistoryComponent } from './recalculation-history.component';

const routes: Routes = [{ path: '', component: RecalculationHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecalculationHistoryRoutingModule { }
