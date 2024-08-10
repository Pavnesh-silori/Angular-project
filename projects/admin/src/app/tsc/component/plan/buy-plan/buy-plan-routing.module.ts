import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPlanComponent } from './buy-plan.component';

const routes: Routes = [
	{
		path: '',
		component: BuyPlanComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ListRoutingModule { }
