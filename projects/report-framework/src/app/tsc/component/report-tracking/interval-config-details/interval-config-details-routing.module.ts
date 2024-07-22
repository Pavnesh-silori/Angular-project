import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalConfigDetailsComponent } from './interval-config-details.component';

const routes: Routes = [
	{
		path: '',
		component: IntervalConfigDetailsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class IntervalConfigDetailsRoutingModule { }
