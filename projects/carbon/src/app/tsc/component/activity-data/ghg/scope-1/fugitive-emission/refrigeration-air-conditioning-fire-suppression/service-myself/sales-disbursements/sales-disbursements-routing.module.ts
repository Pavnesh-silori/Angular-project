import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDisbursementsComponent } from './sales-disbursements.component';

const routes: Routes = [
	{
		path: '',
		component: SalesDisbursementsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SalesDisbursementsRoutingModule { }
